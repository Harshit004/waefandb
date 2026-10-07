"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-clip selection:bg-white/20 selection:text-white">
      {/* 1. HEADER */}
      <Header />

      {/* 2. HERO SECTION */}
      <section className="relative w-full pt-[16vw] md:pt-[10vw] px-[4.166vw]">
        {/* Top Header Row: Left Title + Right Description & CTA */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8 pb-[3vw]">
          {/* Main Hero Title */}
          <h1
            className="text-white select-none m-0 p-0"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(34px, 4.4vw, 68px)",
              lineHeight: "1.08",
              letterSpacing: "-0.01em",
            }}
          >
            Every great beverage
            <br />
            starts with people
          </h1>

          {/* Right Column: Paragraph + "View open roles" Button */}
          <div className="flex flex-col items-start md:items-start shrink-0">
            <p
              className="text-[#FFFFFFB3] max-w-[340px] select-none"
              style={{
                fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                fontSize: "clamp(12px, 0.972vw, 14px)",
                lineHeight: "1.45",
              }}
            >
              Join WAE and help shape future-ready beverage solutions
              <br className="hidden md:inline" />
              for premium workplaces, hospitality and lifestyle spaces...
            </p>

            <button
              type="button"
              className="mt-5 px-6 py-2.5 border border-white/40 hover:border-white text-white transition-colors duration-200 text-[12px] md:text-[13px] tracking-wide select-none cursor-pointer"
              style={{
                fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
              }}
            >
              View open roles
            </button>
          </div>
        </div>

        {/* Hero Image: Placeholder empty div with cinematic gradient overlay */}
        <div
          className="relative w-full aspect-[16/9] md:aspect-[2.1/1] max-h-[620px] bg-[#141414] overflow-hidden rounded-[2px]"
        >
          {/* Subtle gradient vignette to blend into black background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
        </div>
      </section>

      {/* 3. STATEMENT / MANIFESTO SECTION */}
      <section className="relative w-full py-[8vw] md:py-[6vw] px-[4.166vw]">
        <div className="w-full max-w-[1360px] mx-auto flex justify-end">
          <h2
            className="text-right select-none m-0 p-0"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(20px, 2.778vw, 40px)",
              lineHeight: "1.35",
              letterSpacing: "-0.01em",
            }}
          >
            <span className="block text-right">
              <span className="text-[#7A7A7A]">From </span>
              <span className="text-white">Water </span>
              <span className="text-[#7A7A7A]">To </span>
              <span className="text-white">Tea </span>
              <span className="text-[#7A7A7A]">To </span>
              <span className="text-white">Coffee, </span>
              <span className="text-[#7A7A7A]">We&apos;re Rethinking How The</span>
            </span>
            <span className="block text-right">
              <span className="text-[#7A7A7A]">World&apos;s Best Spaces </span>
              <span className="text-white">Hydrate, Refresh And Connect. </span>
              <span className="text-[#7A7A7A]">It Takes</span>
            </span>
            <span className="block text-right">
              <span className="text-white">People Who Care About The Source, </span>
              <span className="text-[#7A7A7A]">Obsess Over </span>
              <span className="text-white">The Craft,</span>
            </span>
            <span className="block text-right">
              <span className="text-[#7A7A7A]">And Believe </span>
              <span className="text-white">Sustainability Belongs In Every Cup.</span>
            </span>
          </h2>
        </div>
      </section>

      {/* 4. VISUAL GRID / COLLAGE SECTION */}
      <section className="relative w-full px-[4.166vw] pb-[6vw]">
        <div className="w-full max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-stretch">
            {/* Column 1: Two stacked placeholders */}
            <div className="md:col-span-3 flex flex-col gap-3 md:gap-4">
              {/* Top: Tall placeholder */}
              <div
                className="w-full aspect-[3/4] bg-[#161616] overflow-hidden rounded-[2px]"
                aria-label="Image placeholder"
              />
              {/* Bottom: Square placeholder */}
              <div
                className="w-full aspect-[1/1] bg-[#131313] overflow-hidden rounded-[2px]"
                aria-label="Image placeholder"
              />
            </div>

            {/* Column 2: One tall placeholder + Text block */}
            <div className="md:col-span-3 flex flex-col gap-3 md:gap-4">
              {/* Top: Tall placeholder (matches Column 1 top) */}
              <div
                className="w-full aspect-[3/4] bg-[#181818] overflow-hidden rounded-[2px]"
                aria-label="Image placeholder"
              />
              {/* Bottom: Text block */}
              <div className="w-full aspect-[1/1] flex flex-col justify-end p-4 md:p-6 bg-black">
                <p
                  className="text-white select-none text-left"
                  style={{
                    fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                    fontSize: "clamp(12px, 0.972vw, 14px)",
                    lineHeight: "1.45",
                  }}
                >
                  Beverage specialists, Café
                  <br />
                  operators, innovators and
                  <br />
                  hospitality professionals
                  <br />
                  build the future of
                  <br />
                  beverages with us.
                </p>
              </div>
            </div>

            {/* Column 3: Large feature placeholder spanning full height */}
            <div className="md:col-span-6 flex flex-col">
              <div
                className="w-full h-full min-h-[380px] md:min-h-full aspect-[3/4] md:aspect-auto bg-[#1a1a1a] overflow-hidden rounded-[2px]"
                aria-label="Feature image placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUOTE SECTION */}
      <section className="relative w-full py-[8vw] md:py-[6vw] px-[4.166vw]">
        <div className="w-full max-w-[1360px] mx-auto flex justify-end">
          <h2
            className="select-none m-0 p-0 flex flex-col items-end"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(22px, 2.778vw, 42px)",
              lineHeight: "1.32",
              letterSpacing: "-0.01em",
            }}
          >
            {/* Line 1: Right-aligned flush with right margin */}
            <div className="text-right">
              <span className="text-white">&ldquo;Rooted In Sustainability. </span>
              <span className="text-[#7A7A7A]">Driven By Craft</span>
            </div>
            {/* Line 2: Offset to the left */}
            <div
              className="text-right"
              style={{
                marginRight: "clamp(20px, 14vw, 210px)",
              }}
            >
              <span className="text-white">Built For Premium Spaces. </span>
              <span className="text-[#7A7A7A]">Powered By People&rdquo;</span>
            </div>
          </h2>
        </div>
      </section>

      {/* 6. SAGE GREEN BENTO SECTION */}
      <section className="relative w-full px-[4.166vw] pt-[5vw] pb-[8vw]">
        <div
          className="relative w-full overflow-visible"
          style={{
            backgroundColor: "#5B734C",
            paddingTop: "clamp(45px, 5.2vw, 75px)",
            paddingBottom: "clamp(45px, 5.2vw, 75px)",
            paddingLeft: "clamp(25px, 3.8vw, 55px)",
            paddingRight: "clamp(25px, 3.8vw, 55px)",
          }}
        >
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10">
            {/* Left Block: Elevated/Overhanging Placeholder + Category Tabs */}
            <div className="w-full lg:w-[28%] flex flex-col shrink-0">
              {/* Barista placeholder div with top overhang */}
              <div
                className="w-full aspect-[300/420] bg-[#3E5133] shadow-2xl relative overflow-hidden rounded-[2px]"
                style={{
                  marginTop: "calc(-1 * clamp(35px, 4.8vw, 70px))",
                }}
                aria-label="Barista placeholder"
              />
              {/* Category labels: Tea, Coffee, Machine */}
              <div className="flex items-center justify-between pt-5 px-3">
                <span
                  className="text-[#98AD8D] text-[13px] md:text-[14px] select-none"
                  style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
                >
                  Tea
                </span>
                <span
                  className="text-[#98AD8D] text-[13px] md:text-[14px] select-none"
                  style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
                >
                  Coffee
                </span>
                <span
                  className="text-[#98AD8D] text-[13px] md:text-[14px] select-none"
                  style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
                >
                  Machine
                </span>
              </div>
            </div>

            {/* Middle Block: "Better Beverages Begin With..." Heading & Description */}
            <div className="w-full lg:w-[42%] flex flex-col justify-start">
              <h3
                className="select-none m-0 p-0"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontSize: "clamp(30px, 3.611vw, 52px)",
                  lineHeight: "1.12",
                  letterSpacing: "0%",
                }}
              >
                <span className="block text-white">Better</span>
                <span className="block text-white">Beverages</span>
                <span className="block text-[#213C19]">Begin With</span>
                <span className="block">
                  <span className="text-white">People </span>
                  <span className="text-[#213C19]">Who</span>
                </span>
                <span className="block">
                  <span className="text-white">Grow </span>
                  <span className="text-[#213C19]">With</span>
                </span>
                <span className="block text-[#213C19]">Every Serve.</span>
              </h3>

              {/* Thin Divider Line */}
              <div className="w-[70px] h-[1px] bg-[#213C19]/35 my-6" />

              {/* Description Paragraph */}
              <p
                className="text-[#213C19] max-w-[440px] select-none"
                style={{
                  fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                  fontSize: "clamp(12px, 0.972vw, 14px)",
                  lineHeight: "1.5",
                }}
              >
                At WAE F&B, you&apos;ll work across the full beverage journey, from responsible
                water sourcing to crafted tea and coffee experiences. You&apos;ll learn from
                experienced teams, work with leading brands and premium clients, and grow
                into roles that shape how people pause, perform and connect every day.
              </p>
            </div>

            {/* Right Block: Cup / Serve Placeholder with slight top overhang */}
            <div className="w-full lg:w-[26%] flex justify-end shrink-0">
              <div
                className="w-full aspect-[4/5] bg-[#3E5133] shadow-2xl relative overflow-hidden rounded-[2px]"
                style={{
                  marginTop: "calc(-1 * clamp(25px, 3.5vw, 50px))",
                }}
                aria-label="Cup placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <Footer />
    </main>
  );
}
