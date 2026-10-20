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

  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Auto-grow textarea smoothly
    if (name === "message" && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.max(40, textareaRef.current.scrollHeight)}px`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptedTerms) {
      setSubmitStatus("error");
      setStatusMessage("Please accept the terms and conditions and privacy policy.");
      return;
    }

    if (!formData.name.trim() || (!formData.officialEmail.trim() && !formData.personalEmail.trim())) {
      setSubmitStatus("error");
      setStatusMessage("Please provide your name and an email address.");
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
      setAcceptedTerms(false);
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
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
      {/* 1. L'ORIENTALIS HEADER */}
      <LOrientalisHeader />

      {/* 2. HERO / COFFEE BEANS & MANUAL GRINDER SECTION */}
      <section className="relative w-full pt-10 sm:pt-14 pb-16 sm:pb-24 overflow-hidden">
        {/* Background Dark Coffee Beans Aesthetic & Vignette Gradients */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Ambient dark roasted coffee gradient texture */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 35%, rgba(45, 28, 18, 0.45) 0%, rgba(18, 11, 7, 0.75) 50%, #000000 85%)",
            }}
          />

          {/* Subtle micro-texture simulation for coffee beans backdrop */}
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px), radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Top subtle fade from header */}
          <div
            className="absolute top-0 inset-x-0 h-40"
            style={{
              background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          />

          {/* Bottom blend into pure black */}
          <div
            className="absolute bottom-0 inset-x-0 h-48"
            style={{
              background: "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.85) 60%, rgba(0, 0, 0, 0) 100%)",
            }}
          />
        </div>

        {/* Hero Content Container */}
        <div
          className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center"
          style={{
            paddingLeft: "2.778vw",
            paddingRight: "2.778vw",
          }}
        >
          {/* MANUAL COFFEE GRINDER PLACEHOLDER DIV */}
          <div
            className="relative w-[clamp(260px,23vw,340px)] aspect-square mx-auto mt-4 sm:mt-6 mb-12 sm:mb-16 flex items-center justify-center group"
            aria-label="Manual Coffee Grinder Placeholder"
          >
            {/* Outer wooden grinder base silhouette placeholder */}
            <div
              className="relative w-full h-full rounded-[2.2rem] sm:rounded-[2.6rem] p-6 sm:p-8 flex flex-col items-center justify-center transition-transform duration-500 hover:scale-[1.02]"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, #2f1d13 0%, #1a0f0a 65%, #0d0805 100%)",
                boxShadow:
                  "0 25px 60px -15px rgba(0, 0, 0, 0.9), inset 0 2px 4px rgba(255, 255, 255, 0.12), inset 0 -4px 10px rgba(0, 0, 0, 0.7)",
                border: "1px solid rgba(139, 90, 52, 0.35)",
              }}
            >
              {/* Inner Grinder Bowl Placeholder */}
              <div
                className="relative w-[68%] aspect-square rounded-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle at 45% 45%, #23150e 0%, #0e0805 70%, #050302 100%)",
                  boxShadow:
                    "inset 0 8px 24px rgba(0, 0, 0, 0.95), 0 4px 12px rgba(0, 0, 0, 0.5)",
                  border: "2px solid rgba(184, 134, 88, 0.4)",
                }}
              >
                {/* Coffee Beans Bed Texture in Bowl (Placeholder) */}
                <div
                  className="absolute inset-2 rounded-full opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 35%, rgba(100, 60, 35, 0.5) 0%, rgba(35, 20, 12, 0.8) 60%, rgba(15, 8, 4, 1) 100%)",
                  }}
                />

                {/* Crank Axle Hub */}
                <div
                  className="w-7 h-7 rounded-full z-10"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 35%, #e2e8f0 0%, #94a3b8 40%, #475569 85%, #1e293b 100%)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.8), inset 0 1px 2px rgba(255,255,255,0.8)",
                  }}
                />

                {/* Crank Arm Placeholder with soft metallic sheen */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 h-[5px] sm:h-[6px] w-[58%] rounded-full origin-left rotate-[-22deg] z-10"
                  style={{
                    background:
                      "linear-gradient(90deg, #94a3b8 0%, #e2e8f0 30%, #64748b 80%, #334155 100%)",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.6)",
                  }}
                >
                  {/* Wooden Knob on Crank */}
                  <div
                    className="absolute -right-3 -top-2.5 w-7 h-7 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 35% 35%, #5a361e 0%, #301b0f 70%, #150a05 100%)",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.9), inset 0 1px 2px rgba(255,255,255,0.25)",
                      border: "1px solid rgba(139, 90, 52, 0.5)",
                    }}
                  />
                </div>
              </div>

              {/* Asset Placeholder subtle tag */}
              <div className="absolute bottom-2.5 inset-x-0 text-center">
                <span
                  className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-sans text-white/35 font-light"
                >
                  Manual Coffee Grinder
                </span>
              </div>
            </div>
          </div>

          {/* Centered Intro Statement */}
          <p
            className="max-w-[700px] text-center text-white/90 font-normal leading-[1.65]"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(14px, 1.11vw, 16.5px)",
              letterSpacing: "-0.01em",
            }}
          >
            Whether you are planning a hotel menu, stocking a workplace pantry or building a premium beverage
            programme, we would like to hear from you. Tell us about your venues, your volumes and your
            timelines, and our sourcing team will respond with a plan built around your needs.
          </p>
        </div>
      </section>

      {/* 3. CONTACT US & TEA DETAILS ROW */}
      <section
        className="relative z-10 w-full max-w-[1440px] mx-auto mt-6 sm:mt-10 mb-14 sm:mb-20"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
          {/* Left Column: "Contact Us" Title */}
          <div className="md:col-span-3 flex items-center md:items-start justify-center md:justify-start">
            <h1
              className="text-white font-normal leading-tight text-center md:text-left"
              style={{
                fontFamily: "var(--font-monschone), var(--font-judson), serif",
                fontSize: "clamp(34px, 3.4vw, 52px)",
                letterSpacing: "0.01em",
              }}
            >
              Contact Us
            </h1>
          </div>

          {/* Center Column: Tea leaves in bamboo basket Placeholder + Caption */}
          <div className="md:col-span-6 flex flex-col items-center justify-center">
            {/* TEA LEAVES IN BAMBOO BASKET PLACEHOLDER DIV */}
            <div
              className="relative w-full max-w-[460px] aspect-[16/10] rounded-sm overflow-hidden flex flex-col items-center justify-center group"
              style={{
                background:
                  "radial-gradient(circle at 45% 45%, #2a1810 0%, #150d08 60%, #080503 100%)",
                border: "1px solid rgba(184, 134, 88, 0.25)",
                boxShadow:
                  "0 15px 35px -10px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.1)",
              }}
              aria-label="Tea leaves in bamboo basket placeholder"
            >
              {/* Warm amber & bamboo glow highlights */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 40%, rgba(217, 119, 6, 0.25) 0%, transparent 65%)",
                }}
              />

              {/* Red canister hint placeholder */}
              <div
                className="absolute left-6 top-6 w-20 h-28 -rotate-12 rounded-t-lg opacity-45 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, #b91c1c 0%, #7f1d1d 50%, #450a0a 100%)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
                }}
              />

              {/* Circular woven bamboo rim placeholder */}
              <div
                className="w-[72%] aspect-square rounded-full border border-amber-700/30 flex items-center justify-center relative pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(20, 12, 8, 0.7) 0%, rgba(10, 6, 4, 0.95) 100%)",
                }}
              >
                <span
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans text-amber-200/50 text-center px-4 font-light"
                >
                  Tea Leaves &amp; Bamboo Basket
                </span>
              </div>
            </div>

            {/* Response turnaround caption directly below */}
            <p
              className="text-center text-white/70 font-sans tracking-wide mt-3 text-[12px] sm:text-[13px]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
              }}
            >
              We respond to business enquiries within two working days.
            </p>
          </div>

          {/* Right Column: Email address */}
          <div className="md:col-span-3 flex items-center md:items-start justify-center md:justify-end">
            <a
              href="mailto:info@lorientalis.com"
              className="text-white/90 hover:text-white transition-opacity duration-200 text-center md:text-right"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(13.5px, 1.04vw, 15px)",
                letterSpacing: "-0.01em",
              }}
            >
              info@lorientalis.com
            </a>
          </div>
        </div>
      </section>

      {/* 4. FORM SECTION WITH AMBIENT CHERRY SIDE VIGNETTES */}
      <section className="relative w-full overflow-hidden bg-black pb-12 sm:pb-20">
        {/* LEFT COFFEE CHERRIES SIDE VIGNETTE PLACEHOLDER */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[18vw] max-w-[280px] pointer-events-none z-0"
          aria-hidden="true"
        >
          {/* Organic rich crimson glow blending into black */}
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at 0% 50%, rgba(168, 28, 40, 0.28) 0%, rgba(100, 15, 22, 0.16) 45%, rgba(0, 0, 0, 0) 80%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          />
        </div>

        {/* RIGHT COFFEE CHERRIES SIDE VIGNETTE PLACEHOLDER */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[18vw] max-w-[280px] pointer-events-none z-0"
          aria-hidden="true"
        >
          {/* Symmetrical crimson glow blending into black */}
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at 100% 50%, rgba(168, 28, 40, 0.28) 0%, rgba(100, 15, 22, 0.16) 45%, rgba(0, 0, 0, 0) 80%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          />
        </div>

        {/* Form Container */}
        <div className="relative z-10 w-full max-w-[680px] mx-auto px-6 sm:px-8">
          <form onSubmit={handleSubmit} className="w-full flex flex-col">
            {/* 6 Minimalist Underline Fields */}
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
                  className="w-full bg-transparent border-0 border-b border-white/40 focus:border-white focus:outline-none text-white placeholder-white/50 py-3 text-[14px] sm:text-[15px] transition-colors duration-200"
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
                  className="w-full bg-transparent border-0 border-b border-white/40 focus:border-white focus:outline-none text-white placeholder-white/50 py-3 text-[14px] sm:text-[15px] transition-colors duration-200"
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
                  className="w-full bg-transparent border-0 border-b border-white/40 focus:border-white focus:outline-none text-white placeholder-white/50 py-3 text-[14px] sm:text-[15px] transition-colors duration-200"
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
                  placeholder="Your official mail address"
                  className="w-full bg-transparent border-0 border-b border-white/40 focus:border-white focus:outline-none text-white placeholder-white/50 py-3 text-[14px] sm:text-[15px] transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 300,
                  }}
                />
              </div>

              {/* Field 5: Your mail id */}
              <div className="w-full">
                <input
                  type="email"
                  name="personalEmail"
                  value={formData.personalEmail}
                  onChange={handleInputChange}
                  placeholder="Your mail id"
                  className="w-full bg-transparent border-0 border-b border-white/40 focus:border-white focus:outline-none text-white placeholder-white/50 py-3 text-[14px] sm:text-[15px] transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 300,
                  }}
                />
              </div>

              {/* Field 6: Mobile number */}
              <div className="w-full">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Mobile number"
                  className="w-full bg-transparent border-0 border-b border-white/40 focus:border-white focus:outline-none text-white placeholder-white/50 py-3 text-[14px] sm:text-[15px] transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 300,
                  }}
                />
              </div>
            </div>

            {/* "Message" Section Title */}
            <div className="w-full text-center mt-16 sm:mt-24 mb-6 sm:mb-8">
              <h2
                className="text-white font-normal text-center"
                style={{
                  fontFamily: "var(--font-monschone), var(--font-judson), serif",
                  fontSize: "clamp(30px, 2.8vw, 42px)",
                  letterSpacing: "0.01em",
                }}
              >
                Message
              </h2>
            </div>

            {/* Textarea Field */}
            <div className="w-full relative">
              <textarea
                ref={textareaRef}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={1}
                placeholder="Tell me more about your enquiry."
                className="w-full bg-transparent border-0 border-b border-white/40 focus:border-white focus:outline-none text-white placeholder-white/50 py-3 text-[14px] sm:text-[15px] resize-y min-h-[44px] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 300,
                }}
              />
            </div>

            {/* Terms and Conditions Checkbox */}
            <label className="flex items-center gap-3 mt-6 sm:mt-8 select-none cursor-pointer group">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="sr-only peer"
                required
              />
              <div className="w-[15px] h-[15px] border border-white/60 bg-transparent flex items-center justify-center peer-checked:bg-white peer-checked:border-white transition-colors duration-150 shrink-0">
                {acceptedTerms && (
                  <svg
                    className="w-2.5 h-2.5 text-black stroke-[3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span
                className="text-white/80 group-hover:text-white text-[12px] sm:text-[13px] transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 300,
                }}
              >
                By submitting this form, I accept the terms and conditions and privacy policy.
              </span>
            </label>

            {/* Status alerts */}
            {statusMessage && (
              <div
                className={`mt-6 text-sm text-center py-2 px-4 rounded ${
                  submitStatus === "success"
                    ? "bg-emerald-950/60 border border-emerald-500/50 text-emerald-300"
                    : "bg-rose-950/60 border border-rose-500/50 text-rose-300"
                }`}
              >
                {statusMessage}
              </div>
            )}

            {/* SUBMIT BUTTON ROW */}
            <div className="w-full flex justify-end mt-8 sm:mt-10 mb-20 sm:mb-28">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[160px] sm:w-[175px] h-[46px] rounded-full text-white uppercase flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 active:scale-[0.98]"
                style={{
                  backgroundColor: "#54585a",
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 500,
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                }}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 5. L'ORIENTALIS FOOTER */}
      <LOrientalisFooter />
    </div>
  );
}
