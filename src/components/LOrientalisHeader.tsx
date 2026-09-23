import React from "react";
import Link from "next/link";

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
  return (
    <header
      className={`relative w-full z-30 flex items-center justify-between pointer-events-none select-none ${className}`}
      style={{
        paddingTop: "3.681vw", // 53px at 1440px wide (53 / 1440 * 100vw)
        paddingLeft: "2.778vw", // 40px at 1440px wide (40 / 1440 * 100vw)
        paddingRight: "2.778vw", // 40px at 1440px wide (40 / 1440 * 100vw)
      }}
    >
      {/* Left Navigation: "Sourcing" */}
      <Link
        href="#sourcing"
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

      {/* Middle: Logo (213 x 20.78) */}
      <Link
        href="/"
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
        href="#contact"
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
