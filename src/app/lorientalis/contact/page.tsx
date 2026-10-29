"use client";

import React, { useState, useRef } from "react";
import LOrientalisHeader from "@/components/LOrientalisHeader";
import LOrientalisFooter from "@/components/LOrientalisFooter";

export default function LorientalisContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    jobTitle: "",
    officialEmail: "",
    personalEmail: "",
    phone: "",
    message: "",
  });

  const [touched, setTouched] = useState<{
    officialEmail?: boolean;
    personalEmail?: boolean;
    phone?: boolean;
  }>({});

  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isResizingRef = useRef(false);
  const hasUserResizedRef = useRef(false);

  // Email format validation (standard RFC 5322 compliant regex)
  const validateEmail = (email: string): boolean => {
    const trimmed = email.trim();
    if (!trimmed) return false;
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed);
  };

  // Mobile number validation (international and domestic: 8-15 digits, allows +, -, spaces, parentheses)
  const validatePhone = (phone: string): boolean => {
    const trimmed = phone.trim();
    if (!trimmed) return false;
    const validFormat = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]+$/.test(trimmed);
    const digits = trimmed.replace(/\D/g, "");
    return validFormat && digits.length >= 8 && digits.length <= 15;
  };

  // Validation flags
  const hasOfficialEmail = Boolean(formData.officialEmail.trim());
  const hasPersonalEmail = Boolean(formData.personalEmail.trim());
  const isOfficialEmailValid = !hasOfficialEmail || validateEmail(formData.officialEmail);
  const isPersonalEmailValid = !hasPersonalEmail || validateEmail(formData.personalEmail);
  const hasAtLeastOneValidEmail =
    (hasOfficialEmail && validateEmail(formData.officialEmail)) ||
    (hasPersonalEmail && validateEmail(formData.personalEmail));
  const isPhoneValid = validatePhone(formData.phone);

  // Form is considered filled when name, company, job title, a valid email, valid phone, and terms are completed
  const isFormFilled = Boolean(
    formData.name.trim() &&
    formData.companyName.trim() &&
    formData.jobTitle.trim() &&
    hasAtLeastOneValidEmail &&
    isOfficialEmailValid &&
    isPersonalEmailValid &&
    isPhoneValid &&
    acceptedTerms
  );

  const handleBlur = (field: "officialEmail" | "personalEmail" | "phone") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizingRef.current = true;
    const startY = e.clientY;
    const startHeight = textareaRef.current?.getBoundingClientRect().height || 14;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isResizingRef.current || !textareaRef.current) return;
      const newHeight = Math.max(14, startHeight + (moveEvent.clientY - startY));
      textareaRef.current.style.height = `${newHeight}px`;
    };

    const onMouseUp = () => {
      isResizingRef.current = false;
      hasUserResizedRef.current = true;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const startY = e.touches[0].clientY;
    const startHeight = textareaRef.current?.getBoundingClientRect().height || 14;

    const onTouchMove = (moveEvent: TouchEvent) => {
      if (moveEvent.touches.length !== 1 || !textareaRef.current) return;
      const newHeight = Math.max(14, startHeight + (moveEvent.touches[0].clientY - startY));
      textareaRef.current.style.height = `${newHeight}px`;
    };

    const onTouchEnd = () => {
      hasUserResizedRef.current = true;
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "message" && textareaRef.current && !hasUserResizedRef.current) {
      textareaRef.current.style.height = "14px";
      if (value.trim().length > 0 && textareaRef.current.scrollHeight > 14) {
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      officialEmail: true,
      personalEmail: true,
      phone: true,
    });

    if (!acceptedTerms) {
      setSubmitStatus("error");
      setStatusMessage("Please accept the terms and conditions and privacy policy.");
      return;
    }

    if (!hasAtLeastOneValidEmail) {
      setSubmitStatus("error");
      setStatusMessage("Please provide a valid official or personal email address.");
      return;
    }

    if (!isOfficialEmailValid || !isPersonalEmailValid) {
      setSubmitStatus("error");
      setStatusMessage("Please ensure all provided email addresses are valid.");
      return;
    }

    if (!isPhoneValid) {
      setSubmitStatus("error");
      setStatusMessage("Please enter a valid mobile number (8 to 15 digits).");
      return;
    }

    if (!isFormFilled) {
      setSubmitStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const emailToSend = formData.officialEmail.trim() || formData.personalEmail.trim();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          companyName: formData.companyName || "N/A",
          jobTitle: formData.jobTitle || "N/A",
          email: emailToSend,
          officialEmail: formData.officialEmail,
          personalEmail: formData.personalEmail,
          phone: formData.phone || "N/A",
          businessChannel: "L'Orientalis Enquiry",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit enquiry. Please try again.");
      }

      setSubmitStatus("success");
      setStatusMessage("Thank you! Your enquiry has been received. Our sourcing team will respond within two working days.");
      setFormData({
        name: "",
        companyName: "",
        jobTitle: "",
        officialEmail: "",
        personalEmail: "",
        phone: "",
        message: "",
      });
      setTouched({});
      setAcceptedTerms(false);
      hasUserResizedRef.current = false;
      if (textareaRef.current) {
        textareaRef.current.style.height = "14px";
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to submit enquiry. Please try again.";
      setSubmitStatus("error");
      setStatusMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-x-clip selection:bg-white/20 selection:text-white">
      {/* 1. HERO SECTION WITH HERO IMAGE & HEADER OVERLAY */}
      <section className="relative w-full">
        {/* L'Orientalis Header floating over hero */}
        <div className="absolute top-0 inset-x-0 z-30">
          <LOrientalisHeader />
        </div>

        {/* Hero Image: Full screen width and height to maintain original ratio */}
        <div className="w-full relative overflow-hidden">
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/55a5dca7-3bfd-4095-dda3-52d8cbd5fa00/public"
            alt="L'Orientalis Hero"
            className="w-full h-auto block object-cover"
          />

          {/* Bottom gradient so it blends seamlessly into the next section with no hard edges */}
          <div
            className="absolute bottom-0 inset-x-0 pointer-events-none z-10"
            style={{
              height: "clamp(60px, 8vw, 120px)",
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0.8) 80%, #000000 100%)",
            }}
          />
        </div>
      </section>

      {/* 2. 64PX GAP, THEN CENTERED INTRO STATEMENT */}
      <section
        className="w-full flex justify-center"
        style={{
          marginTop: "clamp(40px, 4.444vw, 64px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        <p
          style={{
            width: "min(654px, 92vw)",
            maxWidth: "100%",
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "130%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Whether you are planning a hotel menu, stocking a workplace pantry or building a premium beverage programme, we would like to hear from you. Tell us about your venues, your volumes and your timelines, and our sourcing team will respond with a plan built around your needs.
        </p>
      </section>

      {/* 3. 110PX GAP, THEN CONTACT US & DETAILS ROW */}
      <section
        className="w-full max-w-[1440px] mx-auto"
        style={{
          marginTop: "clamp(60px, 7.639vw, 110px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Three elements whose tops are aligned */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-8 md:gap-6">
          {/* Left Column: Contact Us */}
          <div className="flex justify-start">
            <h1
              style={{
                fontFamily: "var(--font-monschone), Monschone, serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "clamp(26px, 2.222vw, 32px)",
                lineHeight: "1.1",
                letterSpacing: "0%",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              Contact Us
            </h1>
          </div>

          {/* Middle Column: 546x273 responsive image + caption in center */}
          <div
            className="flex flex-col items-center mx-auto md:mx-0"
            style={{
              width: "min(546px, 92vw)",
              maxWidth: "100%",
            }}
          >
            <div
              className="w-full relative overflow-hidden"
              style={{
                aspectRatio: "546 / 273",
              }}
            >
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/5127b0c4-9cf7-4a94-385d-0b3226f49300/public"
                alt="L'Orientalis Teas"
                className="w-full h-full object-cover block"
              />
            </div>
            {/* 12px gap, then response time caption under the image and in center */}
            <p
              style={{
                marginTop: "12px",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 200,
                fontStyle: "normal",
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#FFFFFF",
                width: "100%",
                margin: "12px 0 0 0",
              }}
            >
              We respond to business enquiries within two working days.
            </p>
          </div>

          {/* Right Column: info@lorientalis.com */}
          <div className="flex justify-start md:justify-end">
            <a
              href="mailto:info@lorientalis.com"
              className="hover:opacity-80 transition-opacity"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "1.1",
                letterSpacing: "0%",
                textAlign: "right",
                color: "#FFFFFF",
                textDecoration: "underline",
                textDecorationStyle: "solid",
                textUnderlineOffset: "2px",
                margin: 0,
              }}
            >
              info@lorientalis.com
            </a>
          </div>
        </div>
      </section>

      {/* 4. FORM REGION WITH BOTANICAL SIDE IMAGES */}
      <section
        className="relative w-full bg-black pb-20 sm:pb-32"
        style={{
          marginTop: "clamp(12px, 1.389vw, 20px)",
        }}
      >
        <form onSubmit={handleSubmit} className="w-full flex flex-col">
          {/* Top Form Region with Side Botanical Images flush to viewport edges (NO margins) */}
          <div
            className="relative w-full"
            style={{
              paddingTop: "clamp(72px, 9.583vw, 138px)",
            }}
          >
            {/* Left Botanical Image: flush to left edge (no margins), spans full height from below Section 3 to Message */}
            <div
              className="absolute left-0 top-0 bottom-0 pointer-events-none select-none z-0 w-[clamp(130px,14.583vw,210px)] overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 5%, black 12%, black 88%, rgba(0,0,0,0.4) 95%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 5%, black 12%, black 88%, rgba(0,0,0,0.4) 95%, transparent 100%)",
              }}
              aria-hidden="true"
            >
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4e4e461a-a416-4c94-b9b3-c29738837e00/public"
                alt="L'Orientalis botanical left"
                className="w-full h-full object-cover block"
              />
              {/* Softening gradient overlays so side edges dissolve seamlessly into black bg */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 25%, rgba(0,0,0,0.7) 75%, #000000 100%)",
                }}
              />
            </div>

            {/* Right Botanical Image: flush to right edge (no margins), spans full height from below Section 3 to Message */}
            <div
              className="absolute right-0 top-0 bottom-0 pointer-events-none select-none z-0 w-[clamp(130px,14.583vw,210px)] overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 5%, black 12%, black 88%, rgba(0,0,0,0.4) 95%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 5%, black 12%, black 88%, rgba(0,0,0,0.4) 95%, transparent 100%)",
              }}
              aria-hidden="true"
            >
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/494be43c-d9c9-44bc-86f6-6f109d7c9d00/public"
                alt="L'Orientalis botanical right"
                className="w-full h-full object-cover block"
              />
              {/* Softening gradient overlays so side edges dissolve seamlessly into black bg */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to left, rgba(0,0,0,0.15) 0%, transparent 25%, rgba(0,0,0,0.7) 75%, #000000 100%)",
                }}
              />
            </div>

            {/* Center Form Inputs and Word 'Message' */}
            <div
              className="relative z-10 mx-auto px-6 sm:px-8"
              style={{
                width: "min(654px, 92vw)",
                maxWidth: "100%",
              }}
            >
              {/* 6 Minimalist Underline Input Fields */}
              <div className="w-full flex flex-col space-y-7 sm:space-y-8">
                {/* Field 1: Name */}
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white focus:outline-none text-white placeholder-white/75 py-3 text-[14px] sm:text-[15px] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 300,
                    }}
                  />
                </div>

                {/* Field 2: Your company name */}
                <div className="w-full">
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    required
                    className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white focus:outline-none text-white placeholder-white/75 py-3 text-[14px] sm:text-[15px] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 300,
                    }}
                  />
                </div>

                {/* Field 3: Job title */}
                <div className="w-full">
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Job title"
                    required
                    className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white focus:outline-none text-white placeholder-white/75 py-3 text-[14px] sm:text-[15px] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 300,
                    }}
                  />
                </div>

                {/* Field 4: Your official mail address */}
                <div className="w-full">
                  <input
                    type="email"
                    name="officialEmail"
                    value={formData.officialEmail}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("officialEmail")}
                    placeholder="Your official mail address"
                    className={`w-full bg-transparent border-0 border-b py-3 text-[14px] sm:text-[15px] transition-colors duration-200 focus:outline-none placeholder-white/75 text-white ${
                      touched.officialEmail && hasOfficialEmail && !validateEmail(formData.officialEmail)
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-white/60 focus:border-white"
                    }`}
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 300,
                    }}
                  />
                  {touched.officialEmail && hasOfficialEmail && !validateEmail(formData.officialEmail) && (
                    <p className="text-rose-400 text-[11px] sm:text-[12px] mt-1.5 font-light tracking-wide text-left">
                      Please enter a valid email address (e.g. name@company.com).
                    </p>
                  )}
                </div>

                {/* Field 5: Your mail id */}
                <div className="w-full">
                  <input
                    type="email"
                    name="personalEmail"
                    value={formData.personalEmail}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("personalEmail")}
                    placeholder="Your mail id"
                    className={`w-full bg-transparent border-0 border-b py-3 text-[14px] sm:text-[15px] transition-colors duration-200 focus:outline-none placeholder-white/75 text-white ${
                      touched.personalEmail && hasPersonalEmail && !validateEmail(formData.personalEmail)
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-white/60 focus:border-white"
                    }`}
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 300,
                    }}
                  />
                  {touched.personalEmail && hasPersonalEmail && !validateEmail(formData.personalEmail) && (
                    <p className="text-rose-400 text-[11px] sm:text-[12px] mt-1.5 font-light tracking-wide text-left">
                      Please enter a valid email address (e.g. name@domain.com).
                    </p>
                  )}
                </div>

                {/* Field 6: Mobile number */}
                <div className="w-full">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("phone")}
                    placeholder="Mobile number"
                    required
                    className={`w-full bg-transparent border-0 border-b py-3 text-[14px] sm:text-[15px] transition-colors duration-200 focus:outline-none placeholder-white/75 text-white ${
                      touched.phone && formData.phone.trim() && !isPhoneValid
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-white/60 focus:border-white"
                    }`}
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 300,
                    }}
                  />
                  {touched.phone && formData.phone.trim() && !isPhoneValid && (
                    <p className="text-rose-400 text-[11px] sm:text-[12px] mt-1.5 font-light tracking-wide text-left">
                      Please enter a valid mobile number (8 to 15 digits).
                    </p>
                  )}
                </div>
              </div>

              {/* Word 'Message': bottom aligned with bottom of the side images */}
              <div
                className="w-full text-center"
                style={{
                  marginTop: "clamp(72px, 8.5vw, 130px)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-monschone), Monschone, serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "39px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "center",
                    verticalAlign: "middle",
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  Message
                </h2>
              </div>
            </div>
          </div>

          {/* 84PX GAP, THEN THE TEXT FIELD (TEXTAREA) */}
          <div
            className="relative z-10 mx-auto px-6 sm:px-8 w-full"
            style={{
              width: "min(654px, 92vw)",
              maxWidth: "100%",
              marginTop: "84px",
            }}
          >
            {/* Textarea Field with resize adjustment icon same as get-in-touch */}
            <div className="relative w-full border-b border-white/40 focus-within:border-white transition-colors pb-[18px]">
              <textarea
                ref={textareaRef}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={1}
                placeholder="Tell me more about your enquiry."
                className="w-full bg-transparent text-white placeholder-white/50 text-[14px] leading-[14px] tracking-wide focus:outline-none resize-none p-0 h-[14px] min-h-[14px] border-none block"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  lineHeight: "14px",
                  fontWeight: 300,
                }}
              />

              {/* Resize Handle: 18x14px, 2px above the message line */}
              <div
                onMouseDown={handleResizeStart}
                onTouchStart={handleTouchStart}
                className="absolute right-0 bottom-[2px] w-[18px] h-[14px] cursor-ns-resize flex items-center justify-center select-none z-10 group"
                title="Resize message field"
              >
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[14px] text-white/40 group-hover:text-white transition-colors pointer-events-none"
                >
                  <line
                    x1="16"
                    y1="3"
                    x2="6"
                    y2="13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="16"
                    y1="8"
                    x2="11"
                    y2="13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Checkbox and Submit Button Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8">
              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer select-none group max-w-[500px]">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="sr-only peer"
                  required
                />
                <div className="w-[15px] h-[15px] mt-0.5 border border-white/60 bg-transparent flex items-center justify-center peer-checked:bg-white peer-checked:text-black transition-colors shrink-0">
                  {acceptedTerms && (
                    <svg
                      className="w-2.5 h-2.5 text-black stroke-[3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className="text-white/70 group-hover:text-white/90 text-[12px] md:text-[13px] leading-relaxed transition-colors"
                  style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 300 }}
                >
                  By submitting this form, I accept the terms and conditions and privacy policy.
                </span>
              </label>

              {/* Submit Button: kept disabled until form is filled */}
              <button
                type="submit"
                disabled={isSubmitting || !isFormFilled}
                className={`w-[160px] md:w-[170px] h-[48px] rounded-full active:scale-[0.98] transition-all duration-200 uppercase text-[13px] md:text-[14px] font-medium tracking-wider flex items-center justify-center select-none shrink-0 self-end sm:self-center ${
                  isSubmitting
                    ? "bg-[#54585a] text-white opacity-80 cursor-not-allowed"
                    : submitStatus === "success"
                    ? "bg-[#254A36] hover:bg-[#2F5C43] text-white cursor-pointer"
                    : !isFormFilled
                    ? "bg-[#54585a]/40 text-white/30 cursor-not-allowed"
                    : "bg-[#54585a] hover:bg-[#686c6f] text-white cursor-pointer"
                }`}
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>SENDING...</span>
                  </span>
                ) : submitStatus === "success" ? (
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>SENT</span>
                  </span>
                ) : (
                  "SUBMIT"
                )}
              </button>
            </div>

            {/* Status Notifications */}
            {statusMessage && (
              <div
                className={`w-full mt-6 p-4 rounded-xl text-[13px] md:text-[14px] flex items-center gap-3 transition-all ${
                  submitStatus === "success"
                    ? "bg-[#14261C] border border-[#2D6A4F] text-[#74C69D]"
                    : "bg-[#2A1515] border border-[#7F1D1D] text-[#FCA5A5]"
                }`}
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {submitStatus === "success" ? (
                  <svg
                    className="w-5 h-5 shrink-0 text-[#52B788]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 shrink-0 text-[#F87171]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                <div className="flex-1">{statusMessage}</div>
              </div>
            )}
          </div>
        </form>
      </section>

      {/* 5. L'ORIENTALIS FOOTER */}
      <LOrientalisFooter />
    </div>
  );
}
