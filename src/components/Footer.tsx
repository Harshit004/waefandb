"use client";

import React from "react";
import Link from "next/link";

interface FooterProps {
  className?: string;
  id?: string;
  paddingTop?: string | number;
  showTopGradient?: boolean;
}

export default function Footer({
  className = "",
  id = "footer",
  paddingTop = "2.5vw",
  showTopGradient = true,
}: FooterProps) {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f944e769-4d53-4737-1415-e379403c6900/public",
      href: "https://linkedin.com",
    },
    {
      name: "Facebook",
      icon: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3f100468-318f-4c5c-b006-b304966d4100/public",
      href: "https://facebook.com",
    },
    {
      name: "YouTube",
      icon: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/5e07270e-f6f2-466a-0a14-316b9a397000/public",
      href: "https://youtube.com",
    },
  ];

  return (
    <footer
      id={id}
      className={`relative w-full bg-transparent text-white ${className}`}
      style={{
        paddingLeft: "4.166vw",
        paddingRight: "4.166vw",
        paddingTop: paddingTop,
        paddingBottom: "2.5vw",
      }}
    >
      {/* 200px Gradient on top of the footer */}
      {showTopGradient && (
        <div
          className="absolute top-0 left-0 right-0 w-full h-[200px] pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 10.41%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      )}

      {/* 3 Main Columns */}
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-0">
        {/* COLUMN 1: INFO */}
        <div className="flex-1 lg:max-w-[240px] lg:pr-8 flex flex-col justify-start">
          <h3
            className="text-white select-none uppercase"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "140%",
              letterSpacing: "0%",
            }}
          >
            INFO
          </h3>
          <div className="w-[20px] h-[1px] bg-white/70 mt-2 mb-6" />

          <ul
            className="space-y-3.5 select-none"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
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
            <li>
              <Link
                href="/wae-professional"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                WAE Professional
              </Link>
            </li>
            <li>
              <Link
                href="/solution"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Solution
              </Link>
            </li>
          </ul>
        </div>

        {/* VERTICAL DIVIDER 1 */}
        <div
          className="hidden lg:block w-[1px] bg-[#ffffff] self-stretch shrink-0 opacity-100"
          style={{ width: "1px", backgroundColor: "#ffffff", opacity: 1 }}
        />

        {/* COLUMN 2: FOLLOW US */}
        <div className="flex-1 lg:max-w-[280px] lg:px-8 flex flex-col justify-start">
          <h3
            className="text-white select-none uppercase"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "140%",
              letterSpacing: "0%",
            }}
          >
            FOLLOW US
          </h3>
          <div className="w-[20px] h-[1px] bg-white/70 mt-2 mb-6" />

          {/* 3 Social Media Icons: LinkedIn, Facebook, YouTube */}
          <div className="flex items-center gap-[16px] mb-8">
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
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] object-contain"
                />
              </a>
            ))}
          </div>

          <p
            className="text-white/80 hover:text-white transition-colors cursor-pointer text-[14px]"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
            }}
          >
            Sign up to our newsletter
          </p>
        </div>

        {/* VERTICAL DIVIDER 2 */}
        <div
          className="hidden lg:block w-[1px] bg-[#ffffff] self-stretch shrink-0 opacity-100"
          style={{ width: "1px", backgroundColor: "#ffffff", opacity: 1 }}
        />

        {/* COLUMN 3: WAE F&B */}
        <div className="flex-[2.5] lg:pl-10 flex flex-col justify-start">
          <h3
            className="text-white select-none uppercase"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "140%",
              letterSpacing: "0%",
            }}
          >
            WAE F&amp;B
          </h3>
          <div className="w-[20px] h-[1px] bg-white/70 mt-2 mb-6" />

          {/* 3 Location Cards in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
            {/* Card 1: Office */}
            <div
              className="flex flex-col space-y-4"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "14px",
                lineHeight: "150%",
              }}
            >
              <div>
                <h4 className="text-white font-medium mb-1">Office</h4>
                <p className="text-white/75 text-[13px] leading-relaxed">
                  H - 18, H Block, Sector 63,<br />
                  Noida, Uttar Pradesh 201309
                </p>
              </div>

              <div>
                <h4 className="text-white font-medium mb-1">Contact</h4>
                <p className="text-white/75 text-[13px] leading-relaxed">
                  Phone - +91 1204069800,<br />
                  Email - info@waecrop.com<br />
                  marketing@waecrop.com
                </p>
              </div>
            </div>

            {/* Card 2: Cafe - 1 */}
            <div
              className="flex flex-col space-y-4"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "14px",
                lineHeight: "150%",
              }}
            >
              <div>
                <h4 className="text-white font-medium mb-1">Cafe - 1</h4>
                <p className="text-white/75 text-[13px] leading-relaxed">
                  H - 18, H Block, Sector 63,<br />
                  Noida, Uttar Pradesh 201309
                </p>
              </div>

              <div>
                <h4 className="text-white font-medium mb-1">Contact</h4>
                <p className="text-white/75 text-[13px] leading-relaxed">
                  Phone - +91 1204069800,<br />
                  Email - info@waecrop.com<br />
                  marketing@waecrop.com
                </p>
              </div>
            </div>

            {/* Card 3: Cafe - 1 */}
            <div
              className="flex flex-col space-y-4"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "14px",
                lineHeight: "150%",
              }}
            >
              <div>
                <h4 className="text-white font-medium mb-1">Cafe - 1</h4>
                <p className="text-white/75 text-[13px] leading-relaxed">
                  H - 18, H Block, Sector 63,<br />
                  Noida, Uttar Pradesh 201309
                </p>
              </div>

              <div>
                <h4 className="text-white font-medium mb-1">Contact</h4>
                <p className="text-white/75 text-[13px] leading-relaxed">
                  Phone - +91 1204069800,<br />
                  Email - info@waecrop.com<br />
                  marketing@waecrop.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL FULL-WIDTH DIVIDER */}
      <div className="w-full h-[1px] bg-white/20 mt-14 mb-8" />

      {/* COPYRIGHT ROW */}
      <div
        className="w-full flex items-center text-white/75 text-[14px]"
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 400,
        }}
      >
        <span>&copy; 2026 WAE F&amp;B. All rights reserved.</span>
      </div>
    </footer>
  );
}
