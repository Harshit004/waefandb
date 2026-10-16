"use client";

import React from "react";
import LOrientalisHeader from "@/components/LOrientalisHeader";
import LOrientalisFooter from "@/components/LOrientalisFooter";

export default function SourcingPage() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between overflow-x-clip selection:bg-[#365944] selection:text-white">
      {/* 1. L'ORIENTALIS HEADER */}
      <LOrientalisHeader />

      {/* 2. SOURCING HERO & CONTENT SECTION */}
      <section
        id="sourcing"
        className="relative w-full flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10 py-24 sm:py-32"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Subtle decorative background glow */}
        <div
          className="absolute inset-0 pointer-events-none -z-10 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(54, 89, 68, 0.35) 0%, rgba(0, 0, 0, 0) 70%)",
          }}
        />

        <div className="max-w-[880px] mx-auto flex flex-col items-center">
          {/* Eyebrow / Tagline */}
          <span
            className="text-[#DEE2C9] uppercase tracking-[0.25em] text-[12px] sm:text-[13px] mb-4 select-none opacity-90"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 500,
            }}
          >
            L&apos;ORIENTALIS &bull; ORIGIN &amp; HARVEST
          </span>

          {/* Page Heading */}
          <h1
            className="text-white select-none mb-6"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(36px, 5vw, 68px)",
              lineHeight: "1.1",
              letterSpacing: "-0.01em",
            }}
          >
            Sourcing
          </h1>

          {/* Delicate horizontal divider */}
          <div
            className="w-[80px] h-[1px] mb-8"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)",
            }}
          />

          {/* Narrative description */}
          <p
            className="text-white/80 max-w-[620px] select-none text-[15px] sm:text-[17px] leading-[1.65]"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 300,
            }}
          >
            Rooted in generational mastery and direct partnerships with heritage
            growers across pristine mountain slopes. Every batch is cultivated
            with care, respect for community traditions, and uncompromised fidelity
            to origin.
          </p>
        </div>
      </section>

      {/* 3. L'ORIENTALIS FOOTER */}
      <LOrientalisFooter />
    </main>
  );
}
