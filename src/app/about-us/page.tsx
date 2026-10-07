"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Easily replaceable asset placeholders - swap with real URLs when provided
const ABOUT_PLACEHOLDERS = {
  // Hero section assets
  heroFarmer:
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
  heroTea:
    "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",

  // Craft & apparatus 3-column collage assets
  craftPourOver:
    "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
  craftBeansRoaster:
    "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=1200&q=80",
  craftEspresso:
    "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",

  // "From Origin To Cup" section assets
  originTeaEstate:
    "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  originCoffeeCherries:
    "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=800&q=80",
};

export default function AboutUsPage() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-clip selection:bg-white/20 selection:text-white">
      {/* 1. MAIN HEADER COMPONENT */}
      <Header />

      {/* 2. HERO SECTION */}
      <section className="relative w-full pt-[9vw] md:pt-[10vw] pb-[6vw] px-[4.166vw]">
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[4vw]">
          {/* Left Column: Tall Farmer Portrait with "WAE Beverage Initiative" overlay */}
          <div className="relative w-full lg:w-[46vw] h-[75vw] sm:h-[65vw] lg:h-[60vw] max-h-[880px] overflow-hidden bg-[#111111] shrink-0">
            <img
              src={ABOUT_PLACEHOLDERS.heroFarmer}
              alt="Farmer with coffee cherries"
              className="w-full h-full object-cover select-none"
              loading="eager"
            />

            {/* Gradient shadow to guarantee legibility of title */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0) 60%)",
              }}
            />

            {/* Overlay Title: "WAE Beverage Initiative" */}
            <div className="absolute bottom-[2.5vw] left-[2.5vw] z-10 select-none">
              <h1 className="font-normal m-0 p-0">
                <span
                  className="block text-white uppercase"
                  style={{
                    fontFamily: "var(--font-monschone), serif",
                    fontSize: "clamp(30px, 3.8vw, 56px)",
                    lineHeight: "1.02",
                    letterSpacing: "-0.01em",
                  }}
                >
                  WAE
                </span>
                <span
                  className="block text-white mt-1"
                  style={{
                    fontFamily: "var(--font-monschone), serif",
                    fontSize: "clamp(26px, 3.3vw, 48px)",
                    lineHeight: "1.05",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Beverage Initiative
                </span>
              </h1>
            </div>
          </div>

          {/* Right Column: Square Tea Leaves Image + Mission Statement */}
          <div className="w-full lg:w-[40vw] flex flex-col items-start lg:items-end lg:pt-[5vw]">
            <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[19vw]">
              {/* Square Image Placeholder */}
              <div className="w-full aspect-square overflow-hidden bg-[#111111] mb-[1.8vw]">
                <img
                  src={ABOUT_PLACEHOLDERS.heroTea}
                  alt="Tea plantation leaves"
                  className="w-full h-full object-cover select-none"
                  loading="eager"
                />
              </div>

              {/* Description Paragraph */}
              <p
                className="text-white/80 select-none"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(12px, 0.95vw, 14.5px)",
                  lineHeight: "1.6",
                }}
              >
                WAE&apos;s beverage initiative extends its engineering standard
                beyond water — bringing tea and coffee into the same system of
                quality, consistency and reliability, for premium spaces that
                expect more from every serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY / STATEMENT QUOTE SECTION */}
      <section className="relative w-full py-[8vw] lg:py-[10vw] px-[4.166vw]">
        <div className="w-full max-w-[1080px] lg:max-w-[72vw] mx-auto text-center">
          <h2
            className="font-normal select-none"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(22px, 2.35vw, 38px)",
              lineHeight: "1.38",
              letterSpacing: "0.01em",
            }}
          >
            <span className="text-white/40">Years Of </span>
            <span className="text-white">Field Knowledge</span>
            <span className="text-white/40">. Trusted Local </span>
            <span className="text-white">Relationships</span>
            <span className="text-white/40">. An Understanding Of Origin, </span>
            <span className="text-white">Earned Over Time</span>
            <span className="text-white/40">. This Is What </span>
            <span className="text-white">WAE</span>
            <span className="text-white/40"> Brings To Every </span>
            <span className="text-white">Beverage</span>
            <span className="text-white/40"> It Serves.</span>
          </h2>
        </div>
      </section>

      {/* 4. THREE-COLUMN CRAFT & APPARATUS COLLAGE SECTION */}
      <section className="relative w-full py-[4vw] lg:py-[6vw] px-[4.166vw]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.8fr_1fr] items-stretch gap-8 lg:gap-[2.5vw]">
          {/* Column 1 (Left): Top Pour-over Image + Bottom Narrative */}
          <div className="flex flex-col justify-between gap-8 lg:gap-0">
            {/* Top Pour-over Image */}
            <div className="w-full aspect-[3/4] max-h-[380px] lg:max-h-none overflow-hidden bg-[#111111]">
              <img
                src={ABOUT_PLACEHOLDERS.craftPourOver}
                alt="Barista brewing pour-over coffee"
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </div>

            {/* Bottom Narrative Text */}
            <p
              className="text-white/75 select-none lg:pt-[4vw]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(12px, 0.9vw, 13.5px)",
                lineHeight: "1.6",
              }}
            >
              sourcing, brewing and serving them with the same rigour applied to
              purity, consistency and performance. For hotels, offices,
              airports and premium hospitality spaces, this means one partner,
              already trusted for water, now delivering a complete beverage
              standard.
            </p>
          </div>

          {/* Column 2 (Center): Dominant Roasted Coffee Beans Roaster Image */}
          <div className="w-full h-[65vw] sm:h-[55vw] lg:h-[54vw] max-h-[820px] overflow-hidden bg-[#111111]">
            <img
              src={ABOUT_PLACEHOLDERS.craftBeansRoaster}
              alt="Freshly roasted coffee beans cooling in roaster"
              className="w-full h-full object-cover select-none"
              loading="lazy"
            />
          </div>

          {/* Column 3 (Right): Top Narrative + Bottom Espresso Extraction Image */}
          <div className="flex flex-col justify-between gap-8 lg:gap-0">
            {/* Top Narrative Text */}
            <p
              className="text-white/75 select-none lg:pb-[4vw]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(12px, 0.9vw, 13.5px)",
                lineHeight: "1.6",
              }}
            >
              Having built its reputation on water infrastructure, WAE now
              extends that same discipline to tea and coffee —
            </p>

            {/* Bottom Espresso Machine Image */}
            <div className="w-full aspect-[3/4] max-h-[380px] lg:max-h-none overflow-hidden bg-[#111111]">
              <img
                src={ABOUT_PLACEHOLDERS.craftEspresso}
                alt="Espresso shot pulling into cup"
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. "FROM ORIGIN TO CUP" SAGE GREEN BENTO SECTION */}
      <section className="relative w-full px-[4.166vw] pt-[6vw] pb-[10vw]">
        <div
          className="relative w-full rounded-[16px] md:rounded-[20px] p-[5vw] lg:p-[4.5vw] overflow-visible"
          style={{
            backgroundColor: "#55684B",
          }}
        >
          {/* Top Row: Huge Title on Left + Origin Summary on Right */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0">
            {/* Left Title: "From Origin To Cup" */}
            <h2
              className="select-none font-normal m-0 p-0"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "clamp(42px, 5.8vw, 86px)",
                lineHeight: "0.95",
                letterSpacing: "-0.02em",
              }}
            >
              <span className="block text-[#E8EDE2]">From</span>
              <span className="block text-[#27381E]">Origin</span>
              <span className="block text-[#27381E]">To Cup</span>
            </h2>

            {/* Right Summary Paragraph */}
            <p
              className="text-[#E8EDE2]/80 select-none max-w-[420px] lg:max-w-[27vw]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(12px, 0.95vw, 14px)",
                lineHeight: "1.6",
              }}
            >
              WAE traces every ingredient back to where it began — the estates,
              growers and terrains that give tea and coffee their character,
              held to the same standard WAE applies to water.
            </p>
          </div>

          {/* Thin Horizontal Divider */}
          <div className="w-full h-[1px] bg-white/20 my-[4.5vw]" />

          {/* Middle/Right: Item 1 - Tea Estate At Sunrise */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-end gap-6 md:gap-[3vw] mb-[8vw] lg:mb-[6vw]">
            {/* Text description (left of image) */}
            <div className="md:text-right max-w-[340px] lg:max-w-[24vw] order-2 md:order-1">
              <h3
                className="text-[#27381E] font-semibold tracking-normal"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(15px, 1.1vw, 17px)",
                  lineHeight: "1.3",
                }}
              >
                1. Tea Estate At Sunrise
              </h3>
              <p
                className="text-[#27381E]/80 mt-2 sm:mt-3"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(12px, 0.95vw, 14px)",
                  lineHeight: "1.55",
                }}
              >
                Sourced from tea gardens selected for altitude, soil and season,
                not volume.
              </p>
            </div>

            {/* Tea Estate Image (right) */}
            <div className="w-[180px] sm:w-[220px] lg:w-[19vw] aspect-[4/5] overflow-hidden rounded-[4px] bg-[#3B4A34] shrink-0 order-1 md:order-2">
              <img
                src={ABOUT_PLACEHOLDERS.originTeaEstate}
                alt="Tea estate at sunrise"
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bottom/Left: Item 2 - Coffee cherries, hand-picked */}
          {/* Note: The image overlaps slightly past the bottom boundary for a layered editorial feel */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-start gap-6 md:gap-[3vw] relative z-20">
            {/* Coffee Cherries Image (left, overlapping bottom boundary) */}
            <div className="w-[180px] sm:w-[220px] lg:w-[19vw] aspect-[4/5] overflow-hidden rounded-[4px] bg-[#3B4A34] shrink-0 shadow-2xl lg:translate-y-[3vw]">
              <img
                src={ABOUT_PLACEHOLDERS.originCoffeeCherries}
                alt="Hand sorting red coffee cherries"
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </div>

            {/* Text description (right of image) */}
            <div className="max-w-[340px] lg:max-w-[26vw] pb-2 lg:translate-y-[3vw]">
              <h3
                className="text-[#27381E] font-semibold tracking-normal"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(15px, 1.1vw, 17px)",
                  lineHeight: "1.3",
                }}
              >
                2. Coffee cherries, hand-picked
              </h3>
              <p
                className="text-[#27381E]/80 mt-2 sm:mt-3"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(12px, 0.95vw, 14px)",
                  lineHeight: "1.55",
                }}
              >
                Harvested at peak ripeness, from growers WAE works with directly
                and repeatedly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER COMPONENT */}
      <Footer className="pt-[4vw]" />
    </main>
  );
}
