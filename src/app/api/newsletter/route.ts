import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Please provide an email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.SHEETDB_NEWSLETTER_API_URL ||
      process.env.SHEETDB_API_URL ||
      process.env.NEXT_PUBLIC_SHEETDB_API_URL;

    if (!baseUrl || baseUrl.includes("your_sheetdb_api_id")) {
      return NextResponse.json(
        {
          error:
            "SheetDB API URL is not configured. Please set SHEETDB_API_URL in your .env.local file.",
        },
        { status: 500 }
      );
    }

    // If using single API ID with a 'Newsletter' tab/sheet
    const sheetDbUrl = process.env.SHEETDB_NEWSLETTER_API_URL
      ? process.env.SHEETDB_NEWSLETTER_API_URL
      : baseUrl.includes("?")
      ? `${baseUrl}&sheet=Newsletter`
      : `${baseUrl}?sheet=Newsletter`;

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

    const rowData = {
      "Date": formattedDate,
      "Email": email.trim(),
      "date": formattedDate,
      "email": email.trim(),
    };

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    const bearerToken = process.env.SHEETDB_BEARER_TOKEN || process.env.SHEETDB_API_KEY;
    if (bearerToken) {
      headers["Authorization"] = `Bearer ${bearerToken}`;
    }

    // Try posting to the specific sheet first; if that sheet doesn't exist, fallback to base URL
    let response = await fetch(sheetDbUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({ data: [rowData] }),
    });

    if (!response.ok && sheetDbUrl !== baseUrl) {
      response = await fetch(baseUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({ data: [{ ...rowData, "Type": "Newsletter", "type": "newsletter" }] }),
      });
    }

    const responseData = await response.json().catch(() => null);

    if (!response.ok) {
      const errorMsg =
        responseData?.error ||
        responseData?.message ||
        `SheetDB responded with status ${response.status}`;
      return NextResponse.json({ error: errorMsg }, { status: response.status });
    }

    return NextResponse.json(
      { success: true, message: "Subscribed to newsletter successfully." },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { error: `Failed to subscribe: ${message}` },
      { status: 500 }
    );
  }
}
