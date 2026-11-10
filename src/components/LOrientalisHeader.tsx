"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LOrientalisHeaderProps {
  className?: string;
  onMouseEnterElement?: () => void;
  onMouseLeaveElement?: () => void;
}

export default function LOrientalisHeader({
  className = "",
  onMouseEnterElement,
  onMouseLeaveElement,
}: LOrientalisHeaderProps) {
  const pathname = usePathname();
  const isSourcing = pathname?.includes("/sourcing");
  const isContact = pathname?.includes("/contact");
  const [scrolled, setScrolled] = React.useState(false);
  const [sourcingHovered, setSourcingHovered] = React.useState(false);
  const [contactHovered, setContactHovered] = React.useState(false);

  const isSourcingActive = !!isSourcing;
  const isContactActive = !!isContact;
  const isSourcingHighlighted = isSourcingActive || sourcingHovered;
  const isContactHighlighted = isContactActive || contactHovered;

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 flex items-center justify-between pointer-events-none select-none transition-all duration-300 ${className}`}
      style={{
        paddingTop: scrolled ? "clamp(18px, 2.2vw, 32px)" : "clamp(24px, 3.681vw, 53px)",
        paddingLeft: "2.778vw",
        paddingRight: "2.778vw",
        transition: "padding-top 0.3s ease",
      }}
    >
      {/* Background gradient for enhanced contrast & readability */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none -z-10 transition-all duration-300"
        style={{
          height: "calc(100% + 40px)",
          minHeight: "110px",
          background: scrolled
            ? "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 65%, rgba(0, 0, 0, 0) 100%)"
            : "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.45) 55%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Left Navigation: "Sourcing" */}
      <div
        className="relative inline-flex flex-col items-start group"
        onMouseEnter={() => {
          setSourcingHovered(true);
          onMouseEnterElement?.();
        }}
        onMouseLeave={() => {
          setSourcingHovered(false);
          onMouseLeaveElement?.();
        }}
      >
        <Link
          href="/lorientalis/sourcing"
          className="pointer-events-auto cursor-pointer inline-flex items-center transition-all duration-300 text-white"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: isSourcingHighlighted ? 700 : 600,
            fontStyle: "normal",
            fontSize: isSourcingHighlighted
              ? "clamp(14px, 1.111vw, 16px)" // 16px at 1440px
              : "clamp(13px, 0.972vw, 14px)", // 14px at 1440px
            lineHeight: "clamp(12px, 0.875vw, 13px)", // 12.6px at 1440px
            letterSpacing: "-0.5px",
            verticalAlign: "middle",
            color: "#FFFFFF",
          }}
        >
          Sourcing
        </Link>
        <div
          className={`absolute left-[-2.778vw] -bottom-3 sm:-bottom-4 h-[1px] bg-white pointer-events-none transition-all duration-300 ease-out origin-left ${
            isSourcingHighlighted
              ? "opacity-100 scale-x-100"
              : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
          }`}
          style={{ width: "calc(100% + 2.778vw + 24px)" }}
        />
      </div>

      {/* Middle: Logo (213 x 20.78) */}
      <Link
        href="/lorientalis"
        className="absolute left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer flex items-center justify-center transition-opacity duration-200 hover:opacity-85"
        onMouseEnter={onMouseEnterElement}
        onMouseLeave={onMouseLeaveElement}
        aria-label="L'ORIENTALIS Home"
      >
        <img
          src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/207d6bb1-13d1-4ebc-92fb-bca6fc1e3b00/public"
          alt="L'ORIENTALIS"
          className="object-contain"
          style={{
            width: "clamp(130px, 14.792vw, 213px)", // 213px at 1440px (213 / 1440 * 100vw)
            height: "clamp(13px, 1.443vw, 20.78px)", // 20.78px at 1440px (20.78 / 1440 * 100vw)
          }}
        />
      </Link>

      {/* Right Navigation: "Contact" */}
      <div
        className="relative inline-flex flex-col items-end group"
        onMouseEnter={() => {
          setContactHovered(true);
          onMouseEnterElement?.();
        }}
        onMouseLeave={() => {
          setContactHovered(false);
          onMouseLeaveElement?.();
        }}
      >
        <Link
          href="/lorientalis/contact"
          className="pointer-events-auto cursor-pointer inline-flex items-center transition-all duration-300 text-white"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: isContactHighlighted ? 700 : 600,
            fontStyle: "normal",
            fontSize: isContactHighlighted
              ? "clamp(14px, 1.111vw, 16px)" // 16px at 1440px
              : "clamp(13px, 0.972vw, 14px)", // 14px at 1440px
            lineHeight: "clamp(12px, 0.875vw, 13px)", // 12.6px at 1440px
            letterSpacing: "-0.5px",
            verticalAlign: "middle",
            color: "#FFFFFF",
          }}
        >
          Contact
        </Link>
        <div
          className={`absolute right-[-2.778vw] -bottom-3 sm:-bottom-4 h-[1px] bg-white pointer-events-none transition-all duration-300 ease-out origin-right ${
            isContactHighlighted
              ? "opacity-100 scale-x-100"
              : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
          }`}
          style={{ width: "calc(100% + 2.778vw + 24px)" }}
        />
      </div>
    </header>
  );
}
