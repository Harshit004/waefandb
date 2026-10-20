"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LOrientalisHeader from "@/components/LOrientalisHeader";
import LOrientalisFooter from "@/components/LOrientalisFooter";

export default function LorientalisSourcingPage() {
  // State for Growers Gallery interactive spotlight
  const [activeGrowerIndex, setActiveGrowerIndex] = useState<number>(3); // Center focal default

  // State for Coffee Processing Horizontal Slider
  const [activeCoffeeStep, setActiveCoffeeStep] = useState<number>(0);
  const coffeeSectionRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Keyboard navigation for coffee slider
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveCoffeeStep((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveCoffeeStep((prev) => Math.min(2, prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      setActiveCoffeeStep((prev) => Math.min(2, prev + 1));
    } else if (diff < -50) {
      setActiveCoffeeStep((prev) => Math.max(0, prev - 1));
    }
    setTouchStart(null);
  };

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-clip selection:bg-[#365944] selection:text-white">
      {/* 1. L'ORIENTALIS HEADER */}
      <LOrientalisHeader />

      {/* =========================================================================
          SECTION 1: HERO - CULTURE & TRADE + NORTH-EAST MAP
          ========================================================================= */}
      <section
        id="sourcing-hero"
        className="relative w-full pt-[clamp(32px,3.8vw,56px)] pb-[clamp(40px,4.5vw,68px)]"
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
        <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] min-h-[220px] max-h-[560px] rounded-[2px] overflow-hidden border border-white/10 bg-neutral-950 group select-none shadow-2xl">
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
        className="w-full pt-[clamp(48px,6vw,96px)] pb-[clamp(40px,5vw,80px)] flex flex-col items-center"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Centered Heading Block */}
        <div className="max-w-[820px] mx-auto text-center flex flex-col items-center select-none">
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

        {/* Multi-Photo Collage / Interactive Focal Gallery (Screenshot 3 & Video) */}
        <div className="w-full max-w-[1360px] mt-[clamp(36px,4.5vw,72px)] flex items-center justify-center gap-2 sm:gap-3 md:gap-4 overflow-hidden select-none">
          {/* Peeking Far-Left Thumbnail */}
          <div
            className={`hidden xl:block w-[7vw] max-w-[90px] aspect-[3/4] rounded-[2px] border border-white/10 bg-neutral-950 shrink-0 cursor-pointer overflow-hidden transition-all duration-500 ease-out ${
              activeGrowerIndex === 0 ? "opacity-100 scale-105 border-white/40" : "opacity-40 hover:opacity-75"
            }`}
            onMouseEnter={() => setActiveGrowerIndex(0)}
          >
            <div className="relative w-full h-full">
              <Image
                src="/lorientalis/sourcing/grower-drying-bed.jpg"
                alt="Estate Preview"
                fill
                sizes="100px"
                className="object-cover filter grayscale contrast-125"
              />
            </div>
          </div>

          {/* Left Stack (2 Small Stacked Photos) */}
          <div className="flex flex-col gap-2 sm:gap-3 shrink-0">
            {/* Top: Drying cherries on tarp */}
            <div
              className={`relative w-[85px] sm:w-[110px] md:w-[130px] aspect-[4/3] rounded-[2px] border bg-neutral-900/60 overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                activeGrowerIndex === 1
                  ? "border-[#DEE2C9] scale-[1.04] shadow-lg shadow-black/60 z-10"
                  : "border-white/10 hover:border-white/30"
              }`}
              onMouseEnter={() => setActiveGrowerIndex(1)}
            >
              <Image
                src="/lorientalis/sourcing/grower-drying-bed.jpg"
                alt="Drying Bed on Burlap"
                fill
                sizes="140px"
                className="object-cover"
              />
            </div>

            {/* Bottom: Harvesting basket */}
            <div
              className={`relative w-[85px] sm:w-[110px] md:w-[130px] aspect-[4/3] rounded-[2px] border bg-neutral-900/60 overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                activeGrowerIndex === 2
                  ? "border-[#DEE2C9] scale-[1.04] shadow-lg shadow-black/60 z-10"
                  : "border-white/10 hover:border-white/30"
              }`}
              onMouseEnter={() => setActiveGrowerIndex(2)}
            >
              <Image
                src="/lorientalis/sourcing/grower-harvest-basket.jpg"
                alt="Ripe Harvest Cherries Basket"
                fill
                sizes="140px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Left Medium Portrait (Farmer sorting beans) */}
          <div
            className={`relative w-[110px] sm:w-[150px] md:w-[190px] aspect-[3/4] rounded-[2px] border bg-neutral-900/80 overflow-hidden cursor-pointer shrink-0 transition-all duration-500 ease-out ${
              activeGrowerIndex === 2
                ? "border-white/40 scale-[1.02] shadow-xl z-10"
                : "border-white/10 hover:border-white/30"
            }`}
            onMouseEnter={() => setActiveGrowerIndex(2)}
          >
            <Image
              src="/lorientalis/sourcing/grower-sorting-beans.jpg"
              alt="Farmer Sorting Cherries"
              fill
              sizes="200px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Focal Center Large Portrait (Woman with woven bamboo tea basket) */}
          <div
            className={`relative w-[200px] sm:w-[280px] md:w-[360px] lg:w-[420px] aspect-[4/5] rounded-[2px] border bg-neutral-900 overflow-hidden cursor-pointer shrink-0 shadow-2xl transition-all duration-500 ease-out ${
              activeGrowerIndex === 3
                ? "border-white/40 scale-[1.01] shadow-2xl z-20"
                : "border-white/20 hover:border-white/30"
            }`}
            onMouseEnter={() => setActiveGrowerIndex(3)}
          >
            <Image
              src="/lorientalis/sourcing/grower-focal-portrait.jpg"
              alt="Community Tea Harvester"
              fill
              priority
              sizes="420px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Medium Portrait (Grower portrait with foliage) */}
          <div
            className={`relative w-[110px] sm:w-[150px] md:w-[190px] aspect-[3/4] rounded-[2px] border bg-neutral-900/80 overflow-hidden cursor-pointer shrink-0 transition-all duration-500 ease-out ${
              activeGrowerIndex === 4
                ? "border-white/40 scale-[1.02] shadow-xl z-10"
                : "border-white/10 hover:border-white/30"
            }`}
            onMouseEnter={() => setActiveGrowerIndex(4)}
          >
            <Image
              src="/lorientalis/sourcing/grower-smiling-foliage.jpg"
              alt="Estate Worker in Coffee Foliage"
              fill
              sizes="200px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Stack (2 Small Stacked Photos) */}
          <div className="flex flex-col gap-2 sm:gap-3 shrink-0">
            {/* Top: Plucking cherries from shrub */}
            <div
              className={`relative w-[85px] sm:w-[110px] md:w-[130px] aspect-[4/3] rounded-[2px] border bg-neutral-900/60 overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                activeGrowerIndex === 5
                  ? "border-[#DEE2C9] scale-[1.04] shadow-lg shadow-black/60 z-10"
                  : "border-white/10 hover:border-white/30"
              }`}
              onMouseEnter={() => setActiveGrowerIndex(5)}
            >
              <Image
                src="/lorientalis/sourcing/grower-plucking-cherries.jpg"
                alt="Plucking Ripe Cherries"
                fill
                sizes="140px"
                className="object-cover"
              />
            </div>

            {/* Bottom: Raking cherries on bed */}
            <div
              className={`relative w-[85px] sm:w-[110px] md:w-[130px] aspect-[4/3] rounded-[2px] border bg-neutral-900/60 overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                activeGrowerIndex === 6
                  ? "border-[#DEE2C9] scale-[1.04] shadow-lg shadow-black/60 z-10"
                  : "border-white/10 hover:border-white/30"
              }`}
              onMouseEnter={() => setActiveGrowerIndex(6)}
            >
              <Image
                src="/lorientalis/sourcing/grower-raking-cherries.jpg"
                alt="Raking Coffee Cherries on Raised Beds"
                fill
                sizes="140px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Peeking Far-Right Thumbnail */}
          <div
            className={`hidden xl:block w-[7vw] max-w-[90px] aspect-[3/4] rounded-[2px] border border-white/10 bg-neutral-950 shrink-0 cursor-pointer overflow-hidden transition-all duration-500 ease-out ${
              activeGrowerIndex === 6 ? "opacity-100 scale-105 border-white/40" : "opacity-40 hover:opacity-75"
            }`}
            onMouseEnter={() => setActiveGrowerIndex(6)}
          >
            <div className="relative w-full h-full">
              <Image
                src="/lorientalis/sourcing/grower-raking-cherries.jpg"
                alt="Estate Preview"
                fill
                sizes="100px"
                className="object-cover filter grayscale contrast-125"
              />
            </div>
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

        {/* Centered B&W Farmer Carrier Portrait (Screenshot 4 & Video) */}
        <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[3/4] rounded-[2px] border border-white/10 bg-neutral-900 overflow-hidden shadow-2xl my-4 select-none group">
          <Image
            src="/lorientalis/sourcing/coffee-carrier-bw.jpg"
            alt="Mountain Harvest Carrier with Woven Basket"
            fill
            sizes="420px"
            className="object-cover filter grayscale contrast-115 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
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
          SECTION 5: COFFEE PROCESSING - INTERACTIVE CAROUSEL & WATERMARK
          ========================================================================= */}
      <section
        id="coffee-processing"
        ref={coffeeSectionRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full pt-[clamp(32px,4vw,64px)] pb-[clamp(56px,7vw,110px)] overflow-hidden"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Subtle Background Watermark: "COFFEE" */}
        <div
          className="w-full select-none pointer-events-none mb-4 sm:mb-6 flex items-center justify-between"
          aria-hidden="true"
        >
          <span
            className="text-[#FFFFFF1A] tracking-[-0.02em] font-normal block"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(64px, 12vw, 170px)",
              lineHeight: "0.85",
            }}
          >
            COFFEE
          </span>

          {/* Stepper controls (Arrows + Pills) */}
          <div className="pointer-events-auto flex items-center gap-3 pr-2">
            <button
              type="button"
              onClick={() => setActiveCoffeeStep((prev) => Math.max(0, prev - 1))}
              disabled={activeCoffeeStep === 0}
              aria-label="Previous processing step"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                activeCoffeeStep === 0
                  ? "border-white/10 text-white/20 cursor-not-allowed"
                  : "border-white/30 text-white hover:border-white hover:bg-white/10 cursor-pointer"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setActiveCoffeeStep((prev) => Math.min(2, prev + 1))}
              disabled={activeCoffeeStep === 2}
              aria-label="Next processing step"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                activeCoffeeStep === 2
                  ? "border-white/10 text-white/20 cursor-not-allowed"
                  : "border-white/30 text-white hover:border-white hover:bg-white/10 cursor-pointer"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Process Step Selector Pills */}
        <div className="w-full flex items-center gap-2 sm:gap-4 mb-8 overflow-x-auto pb-2 scrollbar-none select-none">
          {[
            { id: 0, label: "01 / Natural Process (Dry Method)" },
            { id: 1, label: "02 / Washed Process (Wet Method)" },
            { id: 2, label: "03 / Semi-Washed or Honey Process" },
          ].map((step) => {
            const isActive = activeCoffeeStep === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveCoffeeStep(step.id)}
                className={`px-4 py-2 rounded-full text-[12px] sm:text-[13px] tracking-wider uppercase transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-md"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {step.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Carousel Slider Track */}
        <div className="relative w-full overflow-hidden">
          <div
            className="w-full flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(-${activeCoffeeStep * 100}%)`,
            }}
          >
            {/* STEP 1: NATURAL PROCESS (DRY METHOD) */}
            <div className="w-full shrink-0 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center">
              {/* Left Column: Natural Process Title & Narrative */}
              <div className="md:col-span-5 flex flex-col justify-center select-none">
                <div className="flex flex-col items-start">
                  <h3
                    className="text-white select-none m-0 mb-4"
                    style={{
                      fontFamily: "var(--font-monschone), serif",
                      fontSize: "clamp(28px, 3.2vw, 44px)",
                      lineHeight: "1.15",
                      fontWeight: 400,
                    }}
                  >
                    Natural Process
                    <br />
                    (Dry Method)
                  </h3>

                  <p
                    className="text-[#FFFFFF99] text-[13px] sm:text-[14px] leading-[1.65] max-w-[460px] m-0 mb-6"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    In This Time-Tested Method, Freshly Picked Cherries Are Spread On
                    Wide Surfaces To Dry Whole In The Sun, Then Hulled To Remove The
                    Skin And Pulp. Slow And Low-Input, It Brings A Fuller Body And
                    Fruit-Forward Sweetness, And It Rewards Careful, Consistent
                    Drying.
                  </p>

                  {/* Step Accent Tag */}
                  <div className="flex items-center gap-2 text-white/40 text-[11px] uppercase tracking-[0.18em]">
                    <span className="w-2 h-2 rounded-full bg-[#365944]" />
                    <span>Time-Tested &bull; Sun Dried &bull; Fruit-Forward</span>
                  </div>
                </div>
              </div>

              {/* Center Accent Image: Cherries Preparation */}
              <div className="hidden md:flex md:col-span-2 items-center justify-center">
                <div className="relative w-full aspect-[4/3] rounded-[2px] border border-white/10 bg-neutral-900 overflow-hidden shadow-xl">
                  <Image
                    src="/lorientalis/sourcing/coffee-process-natural-accent.jpg"
                    alt="Cherries ready for sun-drying"
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Large Photo of Sun Drying Beds */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="relative w-full aspect-[3/4] max-w-[440px] rounded-[2px] border border-white/10 bg-neutral-900 overflow-hidden shadow-2xl group">
                  <Image
                    src="/lorientalis/sourcing/coffee-process-natural-beds.jpg"
                    alt="Sun-Drying Cherries On Raised Burlap Beds"
                    fill
                    sizes="440px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* STEP 2: WASHED PROCESS (WET METHOD) */}
            <div className="w-full shrink-0 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center">
              {/* Left Column: Washing Cherries in Clean Water Stream */}
              <div className="md:col-span-5 flex justify-center md:justify-start">
                <div className="relative w-full aspect-[3/4] max-w-[440px] rounded-[2px] border border-white/10 bg-neutral-900 overflow-hidden shadow-2xl group">
                  <Image
                    src="/lorientalis/sourcing/coffee-process-washed-stream.jpg"
                    alt="Washing Ripe Red Cherries In Pure Stream Water"
                    fill
                    sizes="440px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Center Column: Description */}
              <div className="md:col-span-5 flex flex-col justify-center select-none md:pl-4">
                <div className="flex flex-col items-start">
                  <h3
                    className="text-white select-none m-0 mb-4"
                    style={{
                      fontFamily: "var(--font-monschone), serif",
                      fontSize: "clamp(28px, 3.2vw, 44px)",
                      lineHeight: "1.15",
                      fontWeight: 400,
                    }}
                  >
                    Washed Process
                    <br />
                    (Wet Method)
                  </h3>

                  <p
                    className="text-[#FFFFFF99] text-[13px] sm:text-[14px] leading-[1.65] max-w-[460px] m-0 mb-6"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    Here, The Skin And Pulp Are Removed Soon After Harvest, And The
                    Beans Are Soaked And Washed In Clean Water Before Drying. The
                    Result Is A Clean, Bright And Consistent Cup With Clear Acidity,
                    Though It Requires More Water And Infrastructure.
                  </p>

                  <div className="flex items-center gap-2 text-white/40 text-[11px] uppercase tracking-[0.18em]">
                    <span className="w-2 h-2 rounded-full bg-[#365944]" />
                    <span>Clean Cup &bull; Bright Acidity &bull; High Clarity</span>
                  </div>
                </div>
              </div>

              {/* Right Accent Image: Washed parchment beans */}
              <div className="hidden md:flex md:col-span-2 items-center justify-center">
                <div className="relative w-full aspect-[3/4] rounded-[2px] border border-white/10 bg-neutral-900 overflow-hidden shadow-xl">
                  <Image
                    src="/lorientalis/sourcing/coffee-process-washed-beans.jpg"
                    alt="Clean Washed Parchment Beans"
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* STEP 3: SEMI-WASHED OR HONEY PROCESS */}
            <div className="w-full shrink-0 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center">
              {/* Left Column: Left Accent Image & Text */}
              <div className="md:col-span-6 flex flex-col md:flex-row items-center gap-6 select-none">
                <div className="relative w-full md:w-[180px] aspect-[4/3] md:aspect-[3/4] rounded-[2px] border border-white/10 bg-neutral-900 overflow-hidden shrink-0 shadow-xl">
                  <Image
                    src="/lorientalis/sourcing/coffee-process-honey-accent.jpg"
                    alt="Beans drying on raised honey beds"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col items-start">
                  <h3
                    className="text-white select-none m-0 mb-4"
                    style={{
                      fontFamily: "var(--font-monschone), serif",
                      fontSize: "clamp(28px, 3.2vw, 44px)",
                      lineHeight: "1.15",
                      fontWeight: 400,
                    }}
                  >
                    Semi-Washed or
                    <br />
                    Honey Process
                  </h3>

                  <p
                    className="text-[#FFFFFF99] text-[13px] sm:text-[14px] leading-[1.65] max-w-[440px] m-0 mb-6"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    The Skin Is Removed, But Part Of The Sticky Fruit Layer Stays On The
                    Bean As It Dries. The Result Is A Cup With The Sweetness Of A Natural
                    And More Of The Clarity Of A Washed, With Lower Water Use Than The
                    Full Wet Method.
                  </p>

                  <div className="flex items-center gap-2 text-white/40 text-[11px] uppercase tracking-[0.18em]">
                    <span className="w-2 h-2 rounded-full bg-[#365944]" />
                    <span>Sticky Mucilage &bull; Honey Sweetness &bull; Eco Friendly</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Large Photo of Honey Process Beans in Hands */}
              <div className="md:col-span-6 flex justify-center md:justify-end">
                <div className="relative w-full aspect-[3/4] max-w-[440px] rounded-[2px] border border-white/10 bg-neutral-900 overflow-hidden shadow-2xl group">
                  <Image
                    src="/lorientalis/sourcing/coffee-process-honey-beans.jpg"
                    alt="Hands holding golden honey process coffee beans"
                    fill
                    sizes="440px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
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
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-[2px] border border-white/10 bg-neutral-900 overflow-hidden shadow-2xl select-none group">
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
              <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-[2px] border border-white/10 bg-neutral-900 overflow-hidden shadow-2xl select-none group">
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
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/6] min-h-[200px] max-h-[500px] rounded-[2px] border border-white/10 bg-neutral-900 overflow-hidden shadow-2xl select-none group">
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
