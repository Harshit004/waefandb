"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GRID_IMAGES = [
  {
    src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4dee6347-42a5-4afb-e2d6-832ed22fdc00/public",
    alt: "Artisan preparation",
  },
  {
    src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/99404c7d-fce0-456e-ee7b-b630d774dc00/public",
    alt: "Pure water glass",
  },
  {
    src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2203d18d-31d5-4816-0954-93f0fe86ed00/public",
    alt: "Himalayan coffee roasting",
  },
  {
    src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e5372d97-eebc-4e97-cbed-099fd88a8b00/public",
    alt: "Finest green tea selection",
  },
  {
    src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f17a37d5-9a00-450a-3c33-456c34cc6400/public",
    alt: "Tasting vessel",
  },
];

const BUSINESS_CHANNELS = [
  "HOTELS",
  "LEISURE",
  "WORKPLACE",
  "HEALTHCARE",
  "COLLEGES & UNIVERSITY",
  "TRAVEL",
  "OTHER",
];

export default function GetInTouchPage() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    jobTitle: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedChannel, setSelectedChannel] = useState<string>("");
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isResizingRef = useRef(false);

  const isFormFilled = Boolean(
    formData.name.trim() &&
    formData.companyName.trim() &&
    formData.jobTitle.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    acceptedTerms
  );

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizingRef.current = true;
    const startY = e.clientY;
    const startHeight = textareaRef.current?.getBoundingClientRect().height || 72;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isResizingRef.current || !textareaRef.current) return;
      const newHeight = Math.max(72, startHeight + (moveEvent.clientY - startY));
      textareaRef.current.style.height = `${newHeight}px`;
    };

    const onMouseUp = () => {
      isResizingRef.current = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const startY = e.touches[0].clientY;
    const startHeight = textareaRef.current?.getBoundingClientRect().height || 72;

    const onTouchMove = (moveEvent: TouchEvent) => {
      if (moveEvent.touches.length !== 1 || !textareaRef.current) return;
      const newHeight = Math.max(72, startHeight + (moveEvent.touches[0].clientY - startY));
      textareaRef.current.style.height = `${newHeight}px`;
    };

    const onTouchEnd = () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
  };

  // Layout alignment refs and states
  const gridSectionRef = useRef<HTMLElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const getInTouchRef = useRef<HTMLDivElement>(null);
  const [leftPadding, setLeftPadding] = useState<string>("6.65vw");
  const [headlineMarginTop, setHeadlineMarginTop] = useState<number>(100);

  useEffect(() => {
    const updateLayout = () => {
      // 1. Align horizontal left padding with Image 2's left boundary
      if (image2Ref.current) {
        const rect = image2Ref.current.getBoundingClientRect();
        if (rect.left > 0) {
          setLeftPadding(`${rect.left}px`);
        }
      }

      // 2. Ensure headline starts exactly 152px below "GET IN TOUCH"
      if (getInTouchRef.current && gridSectionRef.current) {
        const gitRect = getInTouchRef.current.getBoundingClientRect();
        const gridRect = gridSectionRef.current.getBoundingClientRect();
        // Target top of headline is 152px below the bottom of GET IN TOUCH
        const targetTop = gitRect.bottom + 152;
        const spacingFromGridBottom = targetTop - gridRect.bottom;
        setHeadlineMarginTop(Math.max(spacingFromGridBottom, 60));
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    // Double check after images finish loading or rendering
    const timer = setTimeout(updateLayout, 150);
    return () => {
      window.removeEventListener("resize", updateLayout);
      clearTimeout(timer);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      setSubmitStatus("error");
      setStatusMessage("Please accept the Privacy Policy and Terms and Conditions.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          companyName: formData.companyName,
          jobTitle: formData.jobTitle,
          email: formData.email,
          phone: formData.phone,
          businessChannel: selectedChannel,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit enquiry. Please try again.");
      }

      setSubmitStatus("success");
      setStatusMessage("Thank you! Your enquiry has been received. Our team will get back to you shortly.");
      setFormData({
        name: "",
        companyName: "",
        jobTitle: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedChannel("");
      setAcceptedTerms(false);
    } catch (error: unknown) {
      const errorText =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.";
      setSubmitStatus("error");
      setStatusMessage(errorText);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-clip selection:bg-white/20 selection:text-white">
      {/* HEADER COMPONENT */}
      <Header />

      {/* TOP IMAGE GRID SECTION */}
      <section
        ref={gridSectionRef}
        className="relative w-full overflow-hidden bg-black pt-[3vw] pb-[2.5vw] flex items-center justify-center select-none"
      >
        <div className="flex items-center justify-center gap-[1.1vw] shrink-0 min-w-full">
          {/* Image 1: Leftmost (bleeds slightly off screen) */}
          <div className="relative shrink-0 w-[27vw] h-[19vw] max-w-[420px] max-h-[300px] overflow-hidden bg-black">
            <img
              src={GRID_IMAGES[0].src}
              alt={GRID_IMAGES[0].alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Top Black Gradient Blend */}
            <div
              className="absolute top-0 left-0 right-0 h-[38%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 100%)",
              }}
            />
            {/* Bottom Black Gradient Blend */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[38%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 100%)",
              }}
            />
          </div>

          {/* Image 2: Hand holding glass of water */}
          <div
            ref={image2Ref}
            className="relative shrink-0 w-[27vw] max-w-[420px]"
          >
            <div className="relative w-full h-[19vw] max-h-[300px] overflow-hidden bg-black">
              <img
                src={GRID_IMAGES[1].src}
                alt={GRID_IMAGES[1].alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Top Black Gradient Blend */}
              <div
                className="absolute top-0 left-0 right-0 h-[38%] pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 100%)",
                }}
              />
              {/* Bottom Black Gradient Blend */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[38%] pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 100%)",
                }}
              />
            </div>

            {/* GET IN TOUCH: exactly 61px below the second image */}
            <div
              ref={getInTouchRef}
              className="absolute left-0 pointer-events-auto select-none"
              style={{
                top: "calc(100% + 61px)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="block text-[14px] md:text-[0.972vw] text-white uppercase tracking-[0.04em]"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 500,
                }}
              >
                GET IN TOUCH
              </span>
            </div>
          </div>

          {/* Image 3: Center Taller Coffee Beans in Roaster */}
          <div className="relative shrink-0 w-[30.5vw] h-[38vw] max-w-[480px] max-h-[580px] overflow-hidden bg-black z-10">
            <img
              src={GRID_IMAGES[2].src}
              alt={GRID_IMAGES[2].alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Top Black Gradient Blend */}
            <div
              className="absolute top-0 left-0 right-0 h-[38%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 100%)",
              }}
            />
            {/* Bottom Black Gradient Blend */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[38%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 100%)",
              }}
            />
          </div>

          {/* Image 4: Hand with bamboo scoop & tea leaves */}
          <div className="relative shrink-0 w-[27vw] h-[19vw] max-w-[420px] max-h-[300px] overflow-hidden bg-black">
            <img
              src={GRID_IMAGES[3].src}
              alt={GRID_IMAGES[3].alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Top Black Gradient Blend */}
            <div
              className="absolute top-0 left-0 right-0 h-[38%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 100%)",
              }}
            />
            {/* Bottom Black Gradient Blend */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[38%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 100%)",
              }}
            />
          </div>

          {/* Image 5: Rightmost (bleeds slightly off screen) */}
          <div className="relative shrink-0 w-[27vw] h-[19vw] max-w-[420px] max-h-[300px] overflow-hidden bg-black">
            <img
              src={GRID_IMAGES[4].src}
              alt={GRID_IMAGES[4].alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Top Black Gradient Blend */}
            <div
              className="absolute top-0 left-0 right-0 h-[38%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 100%)",
              }}
            />
            {/* Bottom Black Gradient Blend */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[38%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* CONTENT & FORM CONTAINER */}
      <div
        className="w-full"
        style={{
          paddingLeft: leftPadding,
          paddingRight: leftPadding,
        }}
      >
        {/* HEADLINE: exactly 152px below GET IN TOUCH */}
        <h1
          className="text-white text-[32px] sm:text-[44px] md:text-[3.5vw] leading-[1.18]"
          style={{
            marginTop: `${headlineMarginTop}px`,
            fontFamily: "var(--font-monschone), serif",
            fontWeight: 400,
            letterSpacing: "0%",
          }}
        >
          <span>Water, tea </span>
          <span className="text-[#7C7C7C]">and</span>
          <span> coffee,</span>
          <br />
          <span>delivered </span>
          <span className="text-[#7C7C7C]">to</span>
          <span> one standard.</span>
        </h1>

        {/* INTRO PARAGRAPH: exactly 104px below headline, spanning across the page width */}
        <p
          className="text-white/80 text-[14px] md:text-[1.05vw] leading-[1.7] w-full"
          style={{
            marginTop: "104px",
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
          }}
        >
          Interested in crafting a refined, high-quality beverage programme for
          your space? Pretaboir&eacute; brings together precision, consistency,
          and elevated taste designed for modern workplaces and premium
          environments. Connect with us to explore how Pretaboir&eacute; can
          transform your coffee offering into a seamless, sophisticated
          experience tailored to your brand.
        </p>

        {/* FORM SECTION: exactly 134px below content paragraph */}
        <form
          onSubmit={handleSubmit}
          className="w-full"
          style={{ marginTop: "134px" }}
        >
          {/* TWO-COLUMN ROW: Form Inputs on Left, Tea Image on Right */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
            {/* LEFT COLUMN: 5 Pill Inputs + Business Channels */}
            <div className="w-full lg:flex-1 lg:max-w-[680px] xl:max-w-[720px] flex flex-col">
              {/* 5 Capsule/Pill Inputs */}
              <div className="w-full flex flex-col space-y-3.5">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="NAME*"
                  className="w-full h-[52px] md:h-[3.6vw] max-h-[56px] px-6 rounded-full bg-[#2A2B2A] border border-white/5 text-white placeholder-[#8A8A8A] text-[12px] md:text-[13px] uppercase tracking-wider focus:outline-none focus:border-white/30 focus:bg-[#323332] transition-colors"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                />

                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="YOUR COMPANY NAME *"
                  className="w-full h-[52px] md:h-[3.6vw] max-h-[56px] px-6 rounded-full bg-[#2A2B2A] border border-white/5 text-white placeholder-[#8A8A8A] text-[12px] md:text-[13px] uppercase tracking-wider focus:outline-none focus:border-white/30 focus:bg-[#323332] transition-colors"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                />

                <input
                  type="text"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="JOB TITLE / FUNCTION*"
                  className="w-full h-[52px] md:h-[3.6vw] max-h-[56px] px-6 rounded-full bg-[#2A2B2A] border border-white/5 text-white placeholder-[#8A8A8A] text-[12px] md:text-[13px] uppercase tracking-wider focus:outline-none focus:border-white/30 focus:bg-[#323332] transition-colors"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="YOUR OFFICIAL EMAIL ADDRESS*"
                  className="w-full h-[52px] md:h-[3.6vw] max-h-[56px] px-6 rounded-full bg-[#2A2B2A] border border-white/5 text-white placeholder-[#8A8A8A] text-[12px] md:text-[13px] uppercase tracking-wider focus:outline-none focus:border-white/30 focus:bg-[#323332] transition-colors"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="YOUR MOBILE NUMBER*"
                  className="w-full h-[52px] md:h-[3.6vw] max-h-[56px] px-6 rounded-full bg-[#2A2B2A] border border-white/5 text-white placeholder-[#8A8A8A] text-[12px] md:text-[13px] uppercase tracking-wider focus:outline-none focus:border-white/30 focus:bg-[#323332] transition-colors"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                />
              </div>

              {/* YOUR BUSINESS CHANNEL SECTION */}
              <div className="mt-10 md:mt-[3vw]">
                <h3
                  className="text-white text-[24px] md:text-[1.8vw] mb-4"
                  style={{
                    fontFamily: "var(--font-monschone), serif",
                    fontWeight: 400,
                  }}
                >
                  Your business channel
                </h3>

                {/* Grid of Pill Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-3.5">
                  {BUSINESS_CHANNELS.map((channel) => {
                    const isSelected = selectedChannel === channel;
                    return (
                      <button
                        key={channel}
                        type="button"
                        onClick={() =>
                          setSelectedChannel(isSelected ? "" : channel)
                        }
                        className={`h-[48px] px-5 rounded-full flex items-center gap-3 transition-colors text-left border cursor-pointer ${isSelected
                          ? "bg-[#383A38] border-white/40 text-white"
                          : "bg-[#2A2B2A] border-white/5 text-[#8E8E93] hover:text-white hover:bg-[#323332]"
                          }`}
                        style={{
                          fontFamily: "var(--font-manrope), sans-serif",
                          fontSize: "12px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        <span
                          className={`w-[14px] h-[14px] rounded-full border flex items-center justify-center shrink-0 transition-colors ${isSelected ? "border-white" : "border-[#7E7E7E]"
                            }`}
                        >
                          {isSelected && (
                            <span className="w-[6px] h-[6px] rounded-full bg-white" />
                          )}
                        </span>
                        <span className="uppercase truncate">{channel}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: TEA CUP IMAGE BESIDE THE FORM (NO ROUNDED CORNERS) */}
            <div className="w-full lg:w-[35vw] lg:max-w-[480px] xl:max-w-[520px] shrink-0 self-stretch flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-[460px] h-[480px] sm:h-[560px] lg:h-[620px] rounded-none overflow-hidden bg-black"
                style={{
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
                }}
              >
                <img
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8e9abddf-cd49-40ba-a6a4-32f1bcf6eb00/public"
                  alt="Pretaboire Tea and Coffee"
                  className="w-full h-full object-cover rounded-none"
                />
                {/* Soft gradient edge overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.5) 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* MESSAGE SECTION (Spanning Full Width) */}
          <div className="mt-12 md:mt-[3.5vw] w-full">
            <h3
              className="text-white text-[24px] md:text-[1.8vw] mb-6"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontWeight: 400,
              }}
            >
              Message
            </h3>

            <div className="relative w-full border-b border-white/40 focus-within:border-white transition-colors">
              <textarea
                ref={textareaRef}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={2}
                placeholder="TELL US MORE ABOUT YOUR ENQUIRY"
                className="w-full bg-transparent text-white placeholder-[#7C7C7C] text-[13px] md:text-[14px] uppercase tracking-wider focus:outline-none resize-none pb-[52px] min-h-[72px]"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              />

              {/* Resize Handle: 18x14px, 8px above the message line */}
              <div
                onMouseDown={handleResizeStart}
                onTouchStart={handleTouchStart}
                className="absolute right-0 bottom-[8px] w-[18px] h-[14px] cursor-ns-resize flex items-center justify-center select-none z-10 group"
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
          </div>

          {/* CHECKBOX AND SUBMIT BUTTON ROW */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8 mb-12">
            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer select-none group max-w-[620px]">
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
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                By submitting this form I have read and understand the{" "}
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms-of-use"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Terms and Conditions
                </Link>
                . *
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !isFormFilled}
              className={`w-[160px] md:w-[170px] h-[48px] rounded-full active:scale-[0.98] transition-all duration-200 uppercase text-[13px] md:text-[14px] font-medium tracking-wider flex items-center justify-center select-none shrink-0 self-end sm:self-center ${
                isSubmitting
                  ? "bg-[#383A38] text-white opacity-80 cursor-not-allowed"
                  : submitStatus === "success"
                  ? "bg-[#254A36] hover:bg-[#2F5C43] text-white cursor-pointer"
                  : !isFormFilled
                  ? "bg-[#2A2B2A] text-white/30 border border-white/5 cursor-not-allowed"
                  : "bg-[#4E5250] hover:bg-[#5E6360] text-white cursor-pointer"
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

          {/* Status Feedback Notification */}
          {submitStatus === "success" && (
            <div
              className="w-full mt-2 mb-10 p-4 rounded-2xl bg-[#14261C] border border-[#2D6A4F] text-[#74C69D] text-[13px] md:text-[14px] flex items-center gap-3 transition-all"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
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
              <div className="flex-1">{statusMessage}</div>
            </div>
          )}

          {submitStatus === "error" && (
            <div
              className="w-full mt-2 mb-10 p-4 rounded-2xl bg-[#2A1515] border border-[#7F1D1D] text-[#FCA5A5] text-[13px] md:text-[14px] flex items-center justify-between gap-3 transition-all"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-[#EF4444]"
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
                <span>{statusMessage}</span>
              </div>
              <button
                type="button"
                onClick={() => setSubmitStatus("idle")}
                className="text-white/60 hover:text-white text-xs underline cursor-pointer shrink-0"
              >
                Dismiss
              </button>
            </div>
          )}
        </form>
      </div>

      {/* GIANT "Contact" WATERMARK BEFORE FOOTER */}
      <div className="relative w-full overflow-visible select-none pointer-events-none flex justify-center items-center z-0 pt-16 md:pt-20 pb-0">
        <h2
          className="text-center font-normal tracking-normal select-none pointer-events-none block"
          style={{
            fontFamily: "var(--font-monschone), Monschone, serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "clamp(140px, 24vw, 360px)",
            lineHeight: "1",
            paddingTop: "0.18em",
            paddingBottom: "0px",
            marginBottom: "clamp(-80px, -5.5vw, -30px)",
            letterSpacing: "0%",
            textAlign: "center",
            backgroundImage:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.28) 55%, rgba(255, 255, 255, 0) 78%, rgba(255, 255, 255, 0) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          Contact
        </h2>
      </div>

      {/* NEW FOOTER COMPONENT */}
      <Footer className="relative z-30" paddingTop="0" showTopGradient />
    </main>
  );
}
