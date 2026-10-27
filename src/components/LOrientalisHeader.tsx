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
  const [scrolled, setScrolled] = React.useState(false);

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
      {/* Background gradient & backdrop blur for enhanced contrast & readability */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none -z-10 transition-all duration-300"
        style={{
          height: "calc(100% + 40px)",
          minHeight: "110px",
          background: scrolled
            ? "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 65%, rgba(0, 0, 0, 0) 100%)"
            : "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.45) 55%, rgba(0, 0, 0, 0) 100%)",
          backdropFilter: scrolled ? "blur(1.2px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(1.2px)" : "none",
        }}
      />

      {/* Left Navigation: "Sourcing" */}
      <div className="relative inline-flex flex-col items-start">
        <Link
          href="/lorientalis/sourcing"
          className="pointer-events-auto cursor-pointer transition-opacity duration-200 hover:opacity-75 inline-flex items-center"
          onMouseEnter={onMouseEnterElement}
          onMouseLeave={onMouseLeaveElement}
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: "0.972vw", // 14px at 1440px (14 / 1440 * 100vw)
            lineHeight: "0.875vw", // 12.6px at 1440px (12.6 / 1440 * 100vw)
            letterSpacing: "-0.035vw", // -0.5px at 1440px (-0.5 / 1440 * 100vw)
            verticalAlign: "middle",
            color: "#FFFFFF",
          }}
        >
          Sourcing
        </Link>
        {isSourcing && (
          <div
            className="absolute left-[-2.778vw] -bottom-3 sm:-bottom-4 h-[1px] bg-white pointer-events-none"
            style={{ width: "calc(100% + 2.778vw + 24px)" }}
          />
        )}
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
            width: "14.792vw", // 213px at 1440px (213 / 1440 * 100vw)
            height: "1.443vw", // 20.78px at 1440px (20.78 / 1440 * 100vw)
          }}
        />
      </Link>

      {/* Right Navigation: "Contact" */}
      <Link
        href="/lorientalis/contact"
        className="pointer-events-auto cursor-pointer transition-opacity duration-200 hover:opacity-75 inline-flex items-center"
        onMouseEnter={onMouseEnterElement}
        onMouseLeave={onMouseLeaveElement}
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 600,
          fontStyle: "normal",
          fontSize: "0.972vw", // 14px at 1440px (14 / 1440 * 100vw)
          lineHeight: "0.875vw", // 12.6px at 1440px (12.6 / 1440 * 100vw)
          letterSpacing: "-0.035vw", // -0.5px at 1440px (-0.5 / 1440 * 100vw)
          verticalAlign: "middle",
          color: "#FFFFFF",
        }}
      >
        Contact
      </Link>
    </header>
  );
}
