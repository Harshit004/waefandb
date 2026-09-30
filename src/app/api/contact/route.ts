import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, companyName, jobTitle, email, phone, businessChannel, message } = body;

    // Validate required fields
    if (!name || !companyName || !jobTitle || !email || !phone) {
      return NextResponse.json(
        { error: "Please provide all required fields (name, company name, job title, email, phone)." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const sheetDbUrl = process.env.SHEETDB_API_URL || process.env.NEXT_PUBLIC_SHEETDB_API_URL;

    if (!sheetDbUrl || sheetDbUrl.includes("your_sheetdb_api_id")) {
      return NextResponse.json(
        {
          error:
            "SheetDB API URL is not configured. Please set SHEETDB_API_URL in your .env.local file.",
        },
        { status: 500 }
      );
    }

    // Formatted readable timestamp
    const now = new Date();
    const formattedDate = now.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const isoDate = now.toISOString();

    // Prepare payload for SheetDB.
    // SheetDB maps keys to spreadsheet column headers.
    // We provide both Title Case and snake_case keys so it works seamlessly
    // regardless of whether the spreadsheet header row uses "Name" or "name", etc.
    const rowData = {
      // Title Case / Natural Headers
      "Date": formattedDate,
      "ISO Date": isoDate,
      "Name": name.trim(),
      "Company Name": companyName.trim(),
      "Job Title": jobTitle.trim(),
      "Email": email.trim(),
      "Phone": phone.trim(),
      "Business Channel": businessChannel ? businessChannel.trim() : "Not Specified",
      "Message": message ? message.trim() : "",

      // snake_case / Lowercase Alternative Headers
      "date": formattedDate,
      "iso_date": isoDate,
      "name": name.trim(),
      "company_name": companyName.trim(),
      "job_title": jobTitle.trim(),
      "email": email.trim(),
      "phone": phone.trim(),
      "business_channel": businessChannel ? businessChannel.trim() : "Not Specified",
      "message": message ? message.trim() : "",
    };

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    // Optional SheetDB Bearer Token or API Key if enabled in SheetDB account settings
    const bearerToken = process.env.SHEETDB_BEARER_TOKEN || process.env.SHEETDB_API_KEY;
    if (bearerToken) {
      headers["Authorization"] = `Bearer ${bearerToken}`;
    }

    const response = await fetch(sheetDbUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({ data: [rowData] }),
    });

    const responseData = await response.json().catch(() => null);

    if (!response.ok) {
      const errorMsg =
        responseData?.error ||
        responseData?.message ||
        `SheetDB responded with status ${response.status}`;
      return NextResponse.json({ error: errorMsg }, { status: response.status });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        data: responseData,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { error: `Failed to submit form: ${message}` },
      { status: 500 }
    );
  }
}
