"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface LOrientalisFooterProps {
  className?: string;
  id?: string;
}

export default function LOrientalisFooter({
  className = "",
  id = "contact",
}: LOrientalisFooterProps) {
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f944e769-4d53-4737-1415-e379403c6900/public",
      href: "https://linkedin.com",
    },
    {
      name: "Instagram",
      icon: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1c0755e5-5c07-4e1c-31f7-066dde50cb00/public",
      href: "https://instagram.com",
    },
    {
      name: "Facebook",
      icon: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3f100468-318f-4c5c-b006-b304966d4100/public",
      href: "https://facebook.com",
    },
    {
      name: "X",
      icon: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/abb4c68a-3cf5-425e-f2d9-62cb73630100/public",
      href: "https://x.com",
    },
    {
      name: "YouTube",
      icon: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/5e07270e-f6f2-466a-0a14-316b9a397000/public",
      href: "https://youtube.com",
    },
  ];

  return (
    <footer id={id} className={`relative w-full bg-black text-white overflow-hidden ${className}`}>
      {/* TOP BORDER WITH SPECIFIED GRADIENT */}
      <div
        className="w-full h-[1px]"
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 52.12%, rgba(255, 255, 255, 0) 98.55%)",
        }}
      />

      {/* UPPER FOOTER CONTENT */}
      <div
        className="w-full pt-[clamp(44px,4vw,64px)] pb-[clamp(40px,3.5vw,56px)]"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-0">
          {/* COLUMN 1: INFO */}
          <div className="flex-1 lg:max-w-[280px] lg:pr-8 flex flex-col justify-start">
            <h3
              className="text-white select-none uppercase"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "140%",
                letterSpacing: "0%",
              }}
            >
              INFO
            </h3>
            {/* Small horizontal dash */}
            <div className="w-[20px] h-[1px] bg-white/70 mt-2 mb-6" />

            <ul
              className="space-y-3.5 select-none"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0%",
              }}
            >
              <li>
                <Link
                  href="/cookies"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Term of use
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* VERTICAL DIVIDER 1 */}
          <div className="hidden lg:block w-[1px] bg-white/15 self-stretch shrink-0" />

          {/* COLUMN 2: FOLLOW US */}
          <div className="flex-1 lg:max-w-[340px] lg:px-10 flex flex-col justify-start">
            <h3
              className="text-white select-none uppercase"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "140%",
                letterSpacing: "0%",
              }}
            >
              FOLLOW US
            </h3>
            {/* Small horizontal dash */}
            <div className="w-[20px] h-[1px] bg-white/70 mt-2 mb-6" />

            {/* Social media icons with 15px gap, 24x24 size */}
            <div className="flex items-center gap-[15px]">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-110 opacity-90 hover:opacity-100"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* VERTICAL DIVIDER 2 */}
          <div className="hidden lg:block w-[1px] bg-white/15 self-stretch shrink-0" />

          {/* COLUMN 3: NEWSLETTER */}
          <div className="flex-1 lg:pl-12 flex flex-col items-start lg:items-end justify-start">
            <div className="w-full max-w-[440px] flex flex-col">
              <h3
                className="text-white select-none mb-6"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "140%",
                }}
              >
                Subscribe to our newsletter
              </h3>

              <form onSubmit={handleSubscribe} className="w-full flex flex-col">
                {/* Input box */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="w-full h-[48px] px-4 bg-transparent border border-white/80 text-center text-white placeholder-white/50 text-[14px] focus:outline-none focus:border-white transition-colors"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                  }}
                />

                {/* Checkbox row */}
                <label className="flex items-center gap-2.5 mt-4 cursor-pointer select-none group">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="sr-only peer"
                    required
                  />
                  <div className="w-[14px] h-[14px] border border-white/80 bg-transparent flex items-center justify-center peer-checked:bg-white peer-checked:text-black transition-colors shrink-0">
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
                    className="text-white/80 group-hover:text-white text-[13px] leading-[18px] transition-colors"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    i have read and accept the tearms of the privacy polocy
                  </span>
                </label>

                {/* SIGN UP button */}
                <button
                  type="submit"
                  className="self-end mt-6 w-[140px] h-[44px] border border-white/80 bg-transparent text-white hover:bg-white hover:text-black transition-all duration-200 cursor-pointer flex items-center justify-center uppercase"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {subscribed ? "JOINED" : "SIGN UP"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* LOWER FOOTER: TEA LEAVES IMAGE WITH GRADIENT OVERLAY & COPYRIGHT */}
      <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] overflow-hidden select-none">
        {/* Bottom background image */}
        <Image
          src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e1c525de-5d53-4a6d-24e8-7f7405a6d100/public"
          alt="Tea leaves foliage"
          fill
          unoptimized
          className="object-cover object-bottom w-full h-full"
        />

        {/* Gradient overlay: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 112.97%) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 112.97%)",
          }}
        />

        {/* CONTENT OVER THE LEAVES */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none z-10">
          {/* Horizontal line running across the screen */}
          <div className="w-full h-[1px] bg-white/20 mb-8" />

          {/* Copyright text aligned to the left */}
          <div
            className="w-full flex items-center text-white/90"
            style={{
              paddingLeft: "2.778vw",
              paddingRight: "2.778vw",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "140%",
              letterSpacing: "0%",
            }}
          >
            <span className="inline-flex items-center justify-center w-[16px] h-[16px] rounded-full border border-white text-[10px] mr-2.5 font-sans leading-none">
              c
            </span>
            <span>Copy Right WAE F&amp;B (P) Ltd. 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
