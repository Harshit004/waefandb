"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LOrientalisHeaderProps {
  className?: string;
  onMouseEnterElement?: () => void;
  onMouseLeaveElement?: () => void;
}

interface NavLinkItemProps {
  href: string;
  label: string;
  isActive: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function NavLinkItem({
  href,
  label,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: NavLinkItemProps) {
  const [hovered, setHovered] = React.useState(false);
  const isHighlighted = isActive || hovered;

  return (
    <div
      className="relative inline-flex flex-col items-center group shrink-0"
      onMouseEnter={() => {
        setHovered(true);
        onMouseEnter?.();
      }}
      onMouseLeave={() => {
        setHovered(false);
        onMouseLeave?.();
      }}
    >
      <Link
        href={href}
        className="pointer-events-auto cursor-pointer inline-flex items-center transition-all duration-300 text-white whitespace-nowrap"
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: isHighlighted ? 700 : 600,
          fontStyle: "normal",
          fontSize: isHighlighted
            ? "clamp(13px, 1.25vw, 16px)" // 16px at 1280px+
            : "clamp(12px, 1.094vw, 14px)", // 14px at 1280px+
          lineHeight: "12.6px",
          letterSpacing: "-0.5px",
          verticalAlign: "middle",
          color: "#FFFFFF",
        }}
      >
        {label}
      </Link>
      <div
        className={`absolute left-0 right-0 -bottom-2 sm:-bottom-2.5 h-[1px] bg-white pointer-events-none transition-all duration-300 ease-out origin-left ${
          isHighlighted
            ? "opacity-100 scale-x-100"
            : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
        }`}
      />
    </div>
  );
}

export default function LOrientalisHeader({
  className = "",
  onMouseEnterElement,
  onMouseLeaveElement,
}: LOrientalisHeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [currentHash, setCurrentHash] = React.useState("");
  const [isGrowSectionVisible, setIsGrowSectionVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined") {
        setCurrentHash(window.location.hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Detect visibility of Growing Conditions section when on main /lorientalis page
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname === "/lorientalis" || pathname === "/lorientalis/") {
      const el = document.getElementById("conditions") || document.getElementById("grow");
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsGrowSectionVisible(entry.isIntersecting);
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    } else {
      setIsGrowSectionVisible(false);
    }
  }, [pathname]);

  const isSourcingActive = !!pathname?.includes("/sourcing");
  const isSustainabilityActive = !!pathname?.includes("/sustainability");
  const isGrowActive =
    !!pathname?.includes("/grow") ||
    (pathname === "/lorientalis" &&
      (currentHash === "#conditions" || currentHash === "#grow" || isGrowSectionVisible));
  const isContactActive = !!pathname?.includes("/contact");

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 flex items-center justify-between pointer-events-none select-none transition-all duration-300 ${className}`}
      style={{
        paddingTop: scrolled ? "clamp(18px, 2.2vw, 32px)" : "clamp(24px, 3.681vw, 53px)",
        paddingLeft: "clamp(14px, 2.778vw, 40px)",
        paddingRight: "clamp(14px, 2.778vw, 40px)",
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

      {/* Left Navigation: "Sourcing" & "Sustainability" */}
      <nav
        aria-label="Left Navigation"
        className="flex items-center gap-[clamp(12px,2.5vw,40px)] z-10"
      >
        <NavLinkItem
          href="/lorientalis/sourcing"
          label="Sourcing"
          isActive={isSourcingActive}
          onMouseEnter={onMouseEnterElement}
          onMouseLeave={onMouseLeaveElement}
        />
        <NavLinkItem
          href="/lorientalis/sustainability"
          label="Sustainability"
          isActive={isSustainabilityActive}
          onMouseEnter={onMouseEnterElement}
          onMouseLeave={onMouseLeaveElement}
        />
      </nav>

      {/* Middle: Brand Logo (213 x 20.78 at 1440px) */}
      <Link
        href="/lorientalis"
        className="absolute left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer flex items-center justify-center transition-opacity duration-200 hover:opacity-85 shrink-0 z-10"
        onMouseEnter={onMouseEnterElement}
        onMouseLeave={onMouseLeaveElement}
        aria-label="L'ORIENTALIS Home"
      >
        <img
          src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/207d6bb1-13d1-4ebc-92fb-bca6fc1e3b00/public"
          alt="L'ORIENTALIS"
          className="object-contain"
          style={{
            width: "clamp(115px, 14.792vw, 213px)", // 213px at 1440px
            height: "clamp(12px, 1.443vw, 20.78px)", // 20.78px at 1440px
          }}
        />
      </Link>

      {/* Right Navigation: "Grow" & "Contact" */}
      <nav
        aria-label="Right Navigation"
        className="flex items-center gap-[clamp(12px,2.5vw,40px)] z-10"
      >
        <NavLinkItem
          href="/lorientalis#conditions"
          label="Grow"
          isActive={isGrowActive}
          onMouseEnter={onMouseEnterElement}
          onMouseLeave={onMouseLeaveElement}
        />
        <NavLinkItem
          href="/lorientalis/contact"
          label="Contact"
          isActive={isContactActive}
          onMouseEnter={onMouseEnterElement}
          onMouseLeave={onMouseLeaveElement}
        />
      </nav>
    </header>
  );
}
