"use client";

import React, { useState } from "react";
import Image from "next/image";
import LOrientalisHeader from "@/components/LOrientalisHeader";
import LOrientalisFooter from "@/components/LOrientalisFooter";

export default function LorientalisSourcingPage() {
  // Rooted In Community dynamic precedence gallery state (defaults to index 3, the middle focal image)
  const [activeCol, setActiveCol] = useState<number | null>(null);
  const [activeStackedChoice, setActiveStackedChoice] = useState<"top" | "bottom">("top");
  const effectiveActiveCol = activeCol !== null ? activeCol : 3;

  // Precedence-based sizing for the 7 columns in Rooted in Community
  const getColDimensions = (colIndex: number) => {
    const d = Math.abs(colIndex - effectiveActiveCol);

    if (d === 0) {
      // ACTIVE: Grows as big as the middle one (501x511)
      return {
        width: "clamp(260px, 34.792vw, 501px)",
        height: "clamp(265px, 35.486vw, 511px)",
        zIndex: 30,
        opacity: 1,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.95)",
      };
    }

    if (d === 1) {
      // Tier 1 Precedence: Medium (158x185)
      return {
        width: "clamp(82px, 10.972vw, 158px)",
        height: "clamp(96px, 12.847vw, 185px)",
        zIndex: 20,
        opacity: 0.85,
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.7)",
      };
    }

    // Tier 2+ Precedence: Smaller (91x106)
    return {
      width: "clamp(48px, 6.319vw, 91px)",
      height: "clamp(56px, 7.361vw, 106px)",
      zIndex: 10,
      opacity: d === 2 ? 0.65 : 0.45,
      boxShadow: "0 10px 20px -8px rgba(0, 0, 0, 0.5)",
    };
  };

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-clip selection:bg-[#365944] selection:text-white">
      {/* 1. L'ORIENTALIS HEADER (Fixed on scroll) */}
      <LOrientalisHeader />

      {/* =========================================================================
          SECTION 1: HERO - CULTURE & TRADE + NORTH-EAST MAP
          ========================================================================= */}
      <section
        id="sourcing-hero"
        className="relative w-full pt-[clamp(110px,10vw,150px)] pb-[clamp(40px,4.5vw,68px)]"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Top Header Row: Left Flag & Intro | Right Eyebrow & Headline */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
          {/* Left Column: Flag + Location description */}
          <div className="flex flex-col items-start max-w-[280px]">
            {/* Indian Flag Badge */}
            <div
              className="w-[28px] h-[18px] rounded-[2px] overflow-hidden flex flex-col shadow-sm mb-4 border border-white/20 select-none"
              title="India"
            >
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-white flex items-center justify-center">
                <div className="w-[4px] h-[4px] rounded-full bg-[#000080]" />
              </div>
              <div className="flex-1 bg-[#138808]" />
            </div>

            <p
              className="text-[#FFFFFFCC] select-none m-0"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(13px, 1.04vw, 15px)",
                lineHeight: "1.45",
                fontWeight: 400,
              }}
            >
              Above The Tropic Of Cancer, North-East Hills Grow Our Botanicals.
            </p>
          </div>

          {/* Right Column: SOURCING Tag + "Culture & Trade" Headline */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <span
              className="text-[#FFFFFFB3] uppercase tracking-[0.2em] mb-2 select-none"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(11px, 0.9vw, 13px)",
                fontWeight: 500,
              }}
            >
              SOURCING
            </span>

            <h1
              className="text-white select-none m-0"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "clamp(44px, 6.2vw, 96px)",
                lineHeight: "1.0",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Culture &amp; Trade
            </h1>
          </div>
        </div>

        {/* MAP VISUAL CONTAINER */}
        <div className="relative w-full my-[clamp(32px,4vw,64px)] flex items-center justify-center">
          <div className="relative w-full max-w-[1200px] aspect-[16/8.5] min-h-[300px] sm:min-h-[420px] md:min-h-[500px] flex items-center justify-center">
            {/* SVG Vector Map of North East India with State Outlines & Tropic of Cancer */}
            <svg
              viewBox="0 0 1000 520"
              className="w-full h-full select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glow filter for map markers */}
                <filter id="marker-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Tropic of Cancer Dashed Reference Line */}
              <line
                x1="40"
                y1="260"
                x2="960"
                y2="260"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1.2"
                strokeDasharray="6 6"
              />

              {/* Tropic of Cancer Label */}
              <text
                x="310"
                y="248"
                fill="rgba(255, 255, 255, 0.85)"
                fontSize="13"
                letterSpacing="0.08em"
                fontFamily="var(--font-manrope), sans-serif"
                fontWeight="500"
              >
                TROPIC OF CANCER
              </text>

              {/* Regional Outer Contour & State Boundaries (Stylized Bronze / Golden Linework) */}
              <path
                d="M140 320 
                   C 110 310, 105 270, 130 250 
                   C 150 230, 190 220, 230 205 
                   C 260 195, 300 200, 340 210 
                   C 390 220, 420 200, 470 190 
                   C 520 180, 560 170, 610 180 
                   C 660 190, 710 160, 740 140 
                   C 765 120, 780 90, 800 80 
                   C 820 70, 840 90, 845 120 
                   C 850 150, 835 180, 820 200 
                   C 800 220, 780 230, 750 240 
                   C 730 245, 715 270, 700 290 
                   C 680 320, 670 340, 640 370 
                   C 620 390, 590 410, 570 420 
                   C 540 430, 480 440, 440 430 
                   C 400 420, 360 410, 330 390 
                   C 310 380, 270 370, 240 370 
                   C 200 370, 170 350, 140 320 Z"
                stroke="#6B593F"
                strokeWidth="1.8"
                fill="rgba(40, 32, 22, 0.08)"
              />

              {/* Internal State Boundaries */}
              {/* Meghalaya Boundary */}
              <path
                d="M 140 320 
                   C 170 315, 230 310, 280 310 
                   C 340 310, 390 320, 410 340 
                   C 390 370, 340 380, 290 375 
                   C 240 370, 180 360, 140 320 Z"
                stroke="#8A7352"
                strokeWidth="1.5"
                fill="rgba(54, 89, 68, 0.06)"
              />

              {/* Assam Valley & Hills Inner Boundaries */}
              <path
                d="M 280 310 
                   C 340 310, 390 280, 460 270 
                   C 510 260, 560 280, 600 300 
                   C 630 315, 650 280, 680 260 
                   C 700 250, 720 230, 740 210"
                stroke="#7D684A"
                strokeWidth="1.2"
                strokeDasharray="4 2"
              />

              {/* Nagaland Inner Outline */}
              <path
                d="M 470 270 
                   C 485 245, 520 240, 550 255 
                   C 575 270, 560 310, 520 320 
                   C 490 330, 475 300, 470 270 Z"
                stroke="#947B58"
                strokeWidth="1.5"
                fill="rgba(54, 89, 68, 0.08)"
              />

              {/* Arunachal Border Path */}
              <path
                d="M 610 180 
                   C 660 190, 700 170, 740 140 
                   C 760 120, 790 90, 810 80"
                stroke="#6B593F"
                strokeWidth="1.2"
              />

              {/* LABELS & ANNOTATIONS */}
              {/* CHINA Label */}
              <text
                x="725"
                y="155"
                fill="rgba(255, 255, 255, 0.5)"
                fontSize="12"
                letterSpacing="0.12em"
                fontFamily="var(--font-manrope), sans-serif"
                fontWeight="500"
              >
                CHINA
              </text>

              {/* ARUNACHAL PRADESH Label */}
              <text
                x="722"
                y="235"
                fill="rgba(255, 255, 255, 0.65)"
                fontSize="12"
                letterSpacing="0.08em"
                fontFamily="var(--font-manrope), sans-serif"
                fontWeight="500"
              >
                ARUNACHAL PRADESH
              </text>

              {/* MARKER 1: MEGHALAYA */}
              <g transform="translate(278, 290)" className="cursor-pointer group">
                <text
                  x="0"
                  y="-16"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="14"
                  letterSpacing="0.1em"
                  fontFamily="var(--font-manrope), sans-serif"
                  fontWeight="600"
                  className="transition-all duration-300 group-hover:fill-[#DEE2C9]"
                >
                  MEGHALAYA
                </text>
                {/* Target Circle Marker */}
                <circle
                  cx="0"
                  cy="0"
                  r="14"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  fill="none"
                  className="transition-all duration-300 group-hover:stroke-[#DEE2C9]"
                />
                <circle cx="0" cy="0" r="9" fill="#2E4D3B" />
                <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

                {/* Sub-locations */}
                <text
                  x="65"
                  y="62"
                  textAnchor="middle"
                  fill="rgba(255, 255, 255, 0.65)"
                  fontSize="10"
                  fontFamily="var(--font-manrope), sans-serif"
                >
                  South-West Khasi Hills
                </text>
                <text
                  x="145"
                  y="50"
                  textAnchor="middle"
                  fill="rgba(255, 255, 255, 0.65)"
                  fontSize="10"
                  fontFamily="var(--font-manrope), sans-serif"
                >
                  West Garo Hills
                </text>
              </g>

              {/* MARKER 2: NAGALAND */}
              <g transform="translate(514, 226)" className="cursor-pointer group">
                <text
                  x="0"
                  y="-16"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="14"
                  letterSpacing="0.1em"
                  fontFamily="var(--font-manrope), sans-serif"
                  fontWeight="600"
                  className="transition-all duration-300 group-hover:fill-[#DEE2C9]"
                >
                  NAGALAND
                </text>
                {/* Target Circle Marker */}
                <circle
                  cx="0"
                  cy="0"
                  r="14"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  fill="none"
                  className="transition-all duration-300 group-hover:stroke-[#DEE2C9]"
                />
                <circle cx="0" cy="0" r="9" fill="#2E4D3B" />
                <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

                {/* Sub-location */}
                <text
                  x="30"
                  y="62"
                  textAnchor="middle"
                  fill="rgba(255, 255, 255, 0.65)"
                  fontSize="10"
                  fontFamily="var(--font-manrope), sans-serif"
                >
                  Wokha, Mokokchung
                </text>
              </g>

              {/* MARKER 3: ASSAM */}
              <g transform="translate(658, 268)" className="cursor-pointer group">
                <text
                  x="20"
                  y="-16"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="14"
                  letterSpacing="0.1em"
                  fontFamily="var(--font-manrope), sans-serif"
                  fontWeight="600"
                  className="transition-all duration-300 group-hover:fill-[#DEE2C9]"
                >
                  ASSAM
                </text>
                {/* Target Circle Marker */}
                <circle
                  cx="0"
                  cy="0"
                  r="14"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  fill="none"
                  className="transition-all duration-300 group-hover:stroke-[#DEE2C9]"
                />
                <circle cx="0" cy="0" r="9" fill="#2E4D3B" />
                <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
              </g>
            </svg>
          </div>
        </div>

        {/* Bottom Coordinates & Summary Row */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-4">
          {/* Coordinates Block */}
          <div className="flex flex-col items-start select-none">
            <span
              className="text-white tracking-tight"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "clamp(34px, 4vw, 58px)",
                lineHeight: "1.0",
              }}
            >
              26&deg;N 92&deg;E
            </span>
            <span
              className="text-[#FFFFFFCC] uppercase tracking-[0.18em] mt-2"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(11px, 0.9vw, 13px)",
                fontWeight: 500,
              }}
            >
              SINGLE ORIGIN &ndash; 3 State
            </span>
          </div>

          {/* Right Narrative */}
          <div className="max-w-[420px] text-left sm:text-right select-none">
            <p
              className="text-[#FFFFFFB3] m-0"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(13px, 1.04vw, 15px)",
                lineHeight: "1.45",
                fontWeight: 400,
              }}
            >
              Three States, One Origin: Meghalaya, Assam, Nagaland, Where Mist,
              Altitude And Shade Shape Our Cup.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: RIPE COFFEE CHERRIES BANNER
          ========================================================================= */}
      <section
        id="coffee-banner"
        className="w-full my-[clamp(24px,3.5vw,48px)]"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] min-h-[220px] max-h-[560px] rounded-[2px] overflow-hidden bg-neutral-950 group select-none shadow-2xl">
          <Image
            src="/lorientalis/sourcing/coffee-cherries-banner.jpg"
            alt="Ripe Red Coffee Cherries and Foliage"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          {/* Subtle vignette gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ROOTED IN COMMUNITY & GROWERS GALLERY
          ========================================================================= */}
      <section
        id="community-growers"
        className="w-full pt-[clamp(48px,6vw,96px)] pb-[clamp(40px,5vw,80px)] flex flex-col items-center overflow-x-clip"
      >
        {/* Centered Heading Block with Section Padding */}
        <div
          className="max-w-[820px] mx-auto text-center flex flex-col items-center select-none"
          style={{
            paddingLeft: "2.778vw",
            paddingRight: "2.778vw",
          }}
        >
          <span
            className="text-[#FFFFFFB3] text-[14px] sm:text-[16px] mb-2 font-normal"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Rooted In Community
          </span>

          <h2
            className="text-white select-none m-0 mb-5"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(30px, 4vw, 56px)",
              lineHeight: "1.15",
              fontWeight: 400,
            }}
          >
            Honouring The Growers Behind Every Cup
          </h2>

          <p
            className="text-[#FFFFFF99] text-[13px] sm:text-[14px] leading-[1.65] max-w-[740px] m-0"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Reliable Supply Depends On The People Who Grow It. Across North East
            India, We Work With Farming Communities And Estates, Many Of Them
            Multi-Generational, And Look For Ways To Keep More Value At The Farm
            Gate. For Our Partners, That Means Stable Supply, Visibility From
            Farm To Cup And A Sourcing Story That Holds Up In ESG And Procurement
            Reviews.
          </p>
        </div>

        {/* Multi-Photo Collage / Growers Gallery (Interactive Accordion: First/Last half-cropped, hover expands to middle size) */}
        <div
          className="relative w-screen left-1/2 -translate-x-1/2 mt-[clamp(36px,4.5vw,72px)] overflow-x-hidden select-none flex items-center justify-center py-8"
          onMouseLeave={() => {
            setActiveCol(null);
            setActiveStackedChoice("top");
          }}
        >
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              gap: "clamp(16px, calc((100vw - 1090px) / 6), 56px)",
              transform:
                effectiveActiveCol === 0
                  ? "translateX(clamp(120px, 16vw, 220px))"
                  : effectiveActiveCol === 1
                  ? "translateX(clamp(60px, 8vw, 110px))"
                  : effectiveActiveCol === 5
                  ? "translateX(clamp(-110px, -8vw, -60px))"
                  : effectiveActiveCol === 6
                  ? "translateX(clamp(-220px, -16vw, -120px))"
                  : "translateX(0px)",
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform",
            }}
          >
            {/* Column 0: Far-Left Image (Half-cropped on resting edge, grows on hover) */}
            {(() => {
              const dim = getColDimensions(0);
              return (
                <div
                  className="relative overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                  style={{
                    width: dim.width,
                    height: dim.height,
                    zIndex: dim.zIndex,
                    opacity: dim.opacity,
                    boxShadow: dim.boxShadow,
                    transition:
                      "width 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease",
                    willChange: "width, height",
                    transform: "translateZ(0)",
                  }}
                  onMouseEnter={() => setActiveCol(0)}
                >
                  <Image
                    src="/lorientalis/sourcing/grower-drying-bed.jpg"
                    alt="Grower harvesting"
                    fill
                    unoptimized
                    sizes="501px"
                    className="object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            })()}

            {/* Column 1: Stacked images in resting state, expands on hover */}
            {(() => {
              const d1 = Math.abs(1 - effectiveActiveCol);
              const dim1 = getColDimensions(1);
              const isTopCollapsed = d1 === 0 ? activeStackedChoice === "bottom" : false;
              const isBottomCollapsed = d1 === 0 ? activeStackedChoice === "top" : d1 === 1;

              return (
                <div
                  className="flex flex-col shrink-0 items-center justify-center"
                  style={{
                    width: dim1.width,
                    zIndex: dim1.zIndex,
                    rowGap: d1 >= 2 ? "clamp(16px, 2.778vw, 40px)" : "0px",
                    transition:
                      "width 0.6s cubic-bezier(0.16, 1, 0.3, 1), row-gap 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    willChange: "width",
                  }}
                >
                  {/* Top Image: grower-harvest-basket */}
                  <div
                    className="relative overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                    style={{
                      width: dim1.width,
                      height: isTopCollapsed ? 0 : dim1.height,
                      opacity: isTopCollapsed ? 0 : dim1.opacity,
                      boxShadow: isTopCollapsed ? "none" : dim1.boxShadow,
                      pointerEvents: isTopCollapsed ? "none" : "auto",
                      transition:
                        "width 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease",
                      willChange: "width, height",
                      transform: "translateZ(0)",
                    }}
                    onMouseEnter={() => {
                      setActiveCol(1);
                      setActiveStackedChoice("top");
                    }}
                  >
                    <Image
                      src="/lorientalis/sourcing/grower-harvest-basket.jpg"
                      alt="Ripe Harvest Cherries Basket"
                      fill
                      unoptimized
                      sizes="501px"
                      className="object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Bottom Image: grower-sorting-beans */}
                  <div
                    className="relative overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                    style={{
                      width: dim1.width,
                      height: isBottomCollapsed ? 0 : dim1.height,
                      opacity: isBottomCollapsed ? 0 : dim1.opacity,
                      boxShadow: isBottomCollapsed ? "none" : dim1.boxShadow,
                      pointerEvents: isBottomCollapsed ? "none" : "auto",
                      transition:
                        "width 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease",
                      willChange: "width, height",
                      transform: "translateZ(0)",
                    }}
                    onMouseEnter={() => {
                      setActiveCol(1);
                      setActiveStackedChoice("bottom");
                    }}
                  >
                    <Image
                      src="/lorientalis/sourcing/grower-sorting-beans.jpg"
                      alt="Farmer Sorting Cherries"
                      fill
                      unoptimized
                      sizes="501px"
                      className="object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              );
            })()}

            {/* Column 2: Left Medium Portrait in resting state (158x185) */}
            {(() => {
              const dim = getColDimensions(2);
              return (
                <div
                  className="relative overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                  style={{
                    width: dim.width,
                    height: dim.height,
                    zIndex: dim.zIndex,
                    opacity: dim.opacity,
                    boxShadow: dim.boxShadow,
                    transition:
                      "width 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease",
                    willChange: "width, height",
                    transform: "translateZ(0)",
                  }}
                  onMouseEnter={() => setActiveCol(2)}
                >
                  <Image
                    src="/lorientalis/sourcing/grower-plucking-cherries.jpg"
                    alt="Plucking Ripe Cherries"
                    fill
                    unoptimized
                    sizes="501px"
                    className="object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            })()}

            {/* Column 3: Central Focal Image (501x511 in resting state) */}
            {(() => {
              const dim = getColDimensions(3);
              return (
                <div
                  className="relative overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                  style={{
                    width: dim.width,
                    height: dim.height,
                    zIndex: dim.zIndex,
                    opacity: dim.opacity,
                    boxShadow: dim.boxShadow,
                    transition:
                      "width 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease",
                    willChange: "width, height",
                    transform: "translateZ(0)",
                  }}
                  onMouseEnter={() => setActiveCol(3)}
                >
                  <Image
                    src="/lorientalis/sourcing/grower-focal-portrait.jpg"
                    alt="Community Tea Harvester"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 280px, 501px"
                    className="object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            })()}

            {/* Column 4: Right Medium Portrait in resting state (158x185) */}
            {(() => {
              const dim = getColDimensions(4);
              return (
                <div
                  className="relative overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                  style={{
                    width: dim.width,
                    height: dim.height,
                    zIndex: dim.zIndex,
                    opacity: dim.opacity,
                    boxShadow: dim.boxShadow,
                    transition:
                      "width 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease",
                    willChange: "width, height",
                    transform: "translateZ(0)",
                  }}
                  onMouseEnter={() => setActiveCol(4)}
                >
                  <Image
                    src="/lorientalis/sourcing/grower-smiling-foliage.jpg"
                    alt="Estate Worker in Coffee Foliage"
                    fill
                    unoptimized
                    sizes="501px"
                    className="object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            })()}

            {/* Column 5: Stacked images in resting state, expands on hover */}
            {(() => {
              const d5 = Math.abs(5 - effectiveActiveCol);
              const dim5 = getColDimensions(5);
              const isTopCollapsed = d5 === 0 ? activeStackedChoice === "bottom" : false;
              const isBottomCollapsed = d5 === 0 ? activeStackedChoice === "top" : d5 === 1;

              return (
                <div
                  className="flex flex-col shrink-0 items-center justify-center"
                  style={{
                    width: dim5.width,
                    zIndex: dim5.zIndex,
                    rowGap: d5 >= 2 ? "clamp(16px, 2.778vw, 40px)" : "0px",
                    transition:
                      "width 0.6s cubic-bezier(0.16, 1, 0.3, 1), row-gap 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    willChange: "width",
                  }}
                >
                  {/* Top Image: grower-raking-cherries */}
                  <div
                    className="relative overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                    style={{
                      width: dim5.width,
                      height: isTopCollapsed ? 0 : dim5.height,
                      opacity: isTopCollapsed ? 0 : dim5.opacity,
                      boxShadow: isTopCollapsed ? "none" : dim5.boxShadow,
                      pointerEvents: isTopCollapsed ? "none" : "auto",
                      transition:
                        "width 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease",
                      willChange: "width, height",
                      transform: "translateZ(0)",
                    }}
                    onMouseEnter={() => {
                      setActiveCol(5);
                      setActiveStackedChoice("top");
                    }}
                  >
                    <Image
                      src="/lorientalis/sourcing/grower-raking-cherries.jpg"
                      alt="Raking Coffee Cherries on Raised Beds"
                      fill
                      unoptimized
                      sizes="501px"
                      className="object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Bottom Image: grower-harvest-basket */}
                  <div
                    className="relative overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                    style={{
                      width: dim5.width,
                      height: isBottomCollapsed ? 0 : dim5.height,
                      opacity: isBottomCollapsed ? 0 : dim5.opacity,
                      boxShadow: isBottomCollapsed ? "none" : dim5.boxShadow,
                      pointerEvents: isBottomCollapsed ? "none" : "auto",
                      transition:
                        "width 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease",
                      willChange: "width, height",
                      transform: "translateZ(0)",
                    }}
                    onMouseEnter={() => {
                      setActiveCol(5);
                      setActiveStackedChoice("bottom");
                    }}
                  >
                    <Image
                      src="/lorientalis/sourcing/grower-harvest-basket.jpg"
                      alt="Harvested Coffee Cherries"
                      fill
                      unoptimized
                      sizes="501px"
                      className="object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              );
            })()}

            {/* Column 6: Far-Right Image (Half-cropped on resting edge, grows on hover) */}
            {(() => {
              const dim = getColDimensions(6);
              return (
                <div
                  className="relative overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                  style={{
                    width: dim.width,
                    height: dim.height,
                    zIndex: dim.zIndex,
                    opacity: dim.opacity,
                    boxShadow: dim.boxShadow,
                    transition:
                      "width 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease",
                    willChange: "width, height",
                    transform: "translateZ(0)",
                  }}
                  onMouseEnter={() => setActiveCol(6)}
                >
                  <Image
                    src="/lorientalis/sourcing/grower-drying-bed.jpg"
                    alt="Estate Preview"
                    fill
                    unoptimized
                    sizes="501px"
                    className="object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE JOURNEY OF COFFEE: FROM BEAN TO BREW
          ========================================================================= */}
      <section
        id="journey-coffee"
        className="w-full pt-[clamp(48px,6vw,96px)] pb-[clamp(32px,4vw,64px)] flex flex-col items-center text-center"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        <span
          className="text-[#FFFFFFB3] text-[14px] sm:text-[16px] mb-2 font-normal select-none"
          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
        >
          The Journey of Coffee:
        </span>

        <h2
          className="text-white select-none m-0 mb-8"
          style={{
            fontFamily: "var(--font-monschone), serif",
            fontSize: "clamp(32px, 4.5vw, 64px)",
            lineHeight: "1.1",
            fontWeight: 400,
          }}
        >
          From Bean to Brew
        </h2>

        {/* Centered B&W Farmer Carrier Portrait (Screenshot 3) */}
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[3/4] bg-neutral-900 overflow-hidden my-4 select-none group">
          <Image
            src="/lorientalis/sourcing/coffee-carrier-bw.jpg"
            alt="Mountain Harvest Carrier with Woven Basket"
            fill
            sizes="420px"
            className="object-cover filter grayscale contrast-115 transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Narrative caption under portrait */}
        <p
          className="text-[#FFFFFF99] text-[12px] sm:text-[13px] leading-[1.65] max-w-[620px] mt-6 select-none"
          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
        >
          Once Harvested, Coffee Cherries Must Be Processed Quickly To Prevent
          Spoilage. Today There Are Two Contrasting Methods, One Centuries Old
          And One Technology-Led, Along With Hybrids Of Both. The Method Shapes
          The Cup, And The Care Taken Shapes Its Consistency.
        </p>
      </section>

      {/* =========================================================================
          SECTION 5: COFFEE PROCESSING - WATERMARK & NATURAL PROCESS SPREAD
          ========================================================================= */}
      <section
        id="coffee-processing"
        className="relative w-full pt-[clamp(32px,4vw,64px)] pb-[clamp(56px,7vw,110px)]"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start">
          {/* Left Column: COFFEE Watermark + Natural Process Description */}
          <div className="md:col-span-4 flex flex-col justify-between self-stretch">
            {/* Watermark: "COFFEE" (Screenshot 2) */}
            <div className="select-none pointer-events-none mb-12 md:mb-20" aria-hidden="true">
              <span
                className="text-[#FFFFFF1F] tracking-[-0.02em] font-normal block"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontSize: "clamp(60px, 9vw, 140px)",
                  lineHeight: "0.85",
                }}
              >
                COFFEE
              </span>
            </div>

            {/* Description Block */}
            <div className="flex flex-col items-center text-center max-w-[420px] mx-auto select-none mt-auto pt-6">
              <h3
                className="text-white select-none m-0 mb-4"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontSize: "clamp(26px, 2.8vw, 42px)",
                  lineHeight: "1.15",
                  fontWeight: 400,
                }}
              >
                Natural Process
                <br />
                (Dry Method)
              </h3>

              <p
                className="text-[#FFFFFF99] text-[12px] sm:text-[13px] leading-[1.65] m-0"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                In This Time-Tested Method, Freshly Picked Cherries Are Spread On
                Wide Surfaces To Dry Whole In The Sun, Then Hulled To Remove The
                Skin And Pulp. Slow And Low-Input, It Brings A Fuller Body And
                Fruit-Forward Sweetness, And It Rewards Careful, Consistent
                Drying.
              </p>
            </div>
          </div>

          {/* Center Column: Sun-Drying Cherries on Raised Burlap Beds (Starts at Top) */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[3/4] bg-neutral-900 overflow-hidden group select-none">
              <Image
                src="/lorientalis/sourcing/coffee-process-natural-beds.jpg"
                alt="Sun-Drying Cherries On Raised Burlap Beds"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Washing Cherries In Mountain Stream (Staggered Downward) */}
          <div className="md:col-span-4 flex justify-center pt-0 md:pt-[clamp(100px,14vw,200px)]">
            <div className="relative w-full max-w-[420px] aspect-[3/4] bg-neutral-900 overflow-hidden group select-none">
              <Image
                src="/lorientalis/sourcing/coffee-process-washed-stream.jpg"
                alt="Washing Ripe Red Cherries In Pure Stream Water"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: THE TEA PRODUCTION PROCESS (CTC, ORTHODOX, GREEN TEA)
          ========================================================================= */}
      <section
        id="tea-process"
        className="w-full pt-[clamp(32px,5vw,80px)] pb-[clamp(48px,6vw,96px)]"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Main Section Heading: "THE TEA PRODUCTION PROCESS" */}
        <h2
          className="text-center font-normal tracking-[0.08em] uppercase select-none mb-[clamp(40px,5vw,80px)]"
          style={{
            fontFamily: "var(--font-monschone), serif",
            fontSize: "clamp(26px, 3.4vw, 54px)",
            lineHeight: "1.1",
          }}
        >
          <span className="text-white/40">THE </span>
          <span className="text-white">TEA </span>
          <span className="text-white/40">PRODUCTION PROCESS</span>
        </h2>

        {/* 6A: CTC TEA */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-[clamp(48px,6vw,96px)]">
          {/* Left Column: Harvester Woman in Morning Light */}
          <div className="md:col-span-5 flex justify-start">
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-[2px] bg-neutral-900 overflow-hidden shadow-2xl select-none group">
              <Image
                src="/lorientalis/sourcing/tea-plucker-portrait.jpg"
                alt="Tea Plucker Woman in Golden Hour Mist"
                fill
                sizes="420px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: CTC Tea Description + Terraced Hills Photo */}
          <div className="md:col-span-7 flex flex-col items-start justify-between h-full">
            {/* CTC Tea Description */}
            <div className="select-none mb-8 max-w-[540px]">
              <p className="m-0 leading-[1.6]">
                <span
                  className="text-white font-normal"
                  style={{
                    fontFamily: "var(--font-monschone), serif",
                    fontSize: "clamp(24px, 2.6vw, 38px)",
                  }}
                >
                  CTC Tea
                </span>
                <span
                  className="text-[#FFFFFF99] text-[13px] sm:text-[14px]"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  {" "}&ndash; CTC (Crush, Tear, Curl) makes up over 85% of the
                  market. Leaves are mechanically cut, torn and curled into
                  uniform granules for a strong, bold cup with higher caffeine.
                  It suits high-volume service.
                </span>
              </p>
            </div>

            {/* Terraced Hills Photo */}
            <div className="w-full flex justify-end">
              <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-[2px] bg-neutral-900 overflow-hidden shadow-2xl select-none group">
                <Image
                  src="/lorientalis/sourcing/tea-terraced-estate.jpg"
                  alt="Terraced Tea Garden Estate Trails"
                  fill
                  sizes="340px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* 6B: ORTHODOX TEA */}
        <div className="w-full flex flex-col items-start mb-[clamp(48px,6vw,96px)] select-none">
          {/* Orthodox Description */}
          <div className="w-full max-w-[620px] mb-8">
            <p className="m-0 leading-[1.6]">
              <span
                className="text-white font-normal"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontSize: "clamp(24px, 2.6vw, 38px)",
                }}
              >
                Orthodox Tea
              </span>
              <span
                className="text-[#FFFFFF99] text-[13px] sm:text-[14px]"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {" "}&ndash; Orthodox tea uses traditional or manual methods,
                producing a delicate cup with less caffeine. Sold as loose or
                whole leaf, it suits premium black teas and signature menus.
              </span>
            </p>
          </div>

          {/* Panoramic Green Tea Flush Banner */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/6] min-h-[200px] max-h-[500px] rounded-[2px] bg-neutral-900 overflow-hidden shadow-2xl select-none group">
            <Image
              src="/lorientalis/sourcing/tea-orthodox-panorama.jpg"
              alt="Vibrant Green Tea Flush Leaves with Mountain Mist"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
          </div>
        </div>

        {/* 6C: GREEN TEA */}
        <div className="w-full flex flex-col items-start select-none">
          <div className="w-full max-w-[720px]">
            <p className="m-0 leading-[1.6]">
              <span
                className="text-white font-normal"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontSize: "clamp(24px, 2.6vw, 38px)",
                }}
              >
                Green Tea
              </span>
              <span
                className="text-[#FFFFFF99] text-[13px] sm:text-[14px]"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {" "}&ndash; Green tea is made from unoxidized leaves and is one
                of the least processed types of tea, which helps retain its
                natural antioxidants and beneficial polyphenols. It offers a
                fresh, light flavor with subtle grassy notes and a gentle
                caffeine boost, making it a popular choice for a healthy,
                refreshing drink.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Spacing above footer */}
      <div className="w-full h-[clamp(32px,5vw,80px)]" />

      {/* 7. L'ORIENTALIS FOOTER */}
      <LOrientalisFooter />
    </main>
  );
}
