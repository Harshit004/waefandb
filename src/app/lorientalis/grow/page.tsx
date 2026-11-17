"use client";

import React, { useState } from "react";
import Image from "next/image";
import LOrientalisHeader from "@/components/LOrientalisHeader";
import LOrientalisFooter from "@/components/LOrientalisFooter";

/**
 * Reusable visual placeholder component tailored for L'Orientalis Grow page.
 * Offers custom botanical / coffee / tea gradient atmospheres, icons, and aspect ratios.
 */
function VisualPlaceholder({
  label,
  sublabel,
  aspectRatio,
  minHeight,
  theme = "dark",
  iconType = "image",
  className = "",
  children,
}: {
  label: string;
  sublabel?: string;
  aspectRatio?: string;
  minHeight?: string;
  theme?: "dark" | "coffee" | "tea" | "green" | "roast";
  iconType?: "image" | "coffee" | "tea" | "branch" | "cup" | "molecule" | "beans";
  className?: string;
  children?: React.ReactNode;
}) {
  const gradientMap = {
    dark: "from-[#111111] via-[#090909] to-[#040404]",
    coffee: "from-[#2C1910] via-[#1A0E08] to-[#0D0704]",
    tea: "from-[#142A1E] via-[#0C1A12] to-[#060D09]",
    green: "from-[#1B3B28] via-[#102418] to-[#08120C]",
    roast: "from-[#2B1B14] via-[#180E09] to-[#0A0503]",
  };

  const borderMap = {
    dark: "border-neutral-800/80 hover:border-neutral-700",
    coffee: "border-[#4A2E1D]/50 hover:border-[#6B422A]",
    tea: "border-[#274B35]/50 hover:border-[#3E7453]",
    green: "border-[#2E5B3D]/50 hover:border-[#46865A]",
    roast: "border-[#4F2D19]/50 hover:border-[#733F23]",
  };

  const accentColorMap = {
    dark: "#737373",
    coffee: "#C2895B",
    tea: "#5FA777",
    green: "#48A663",
    roast: "#D48B47",
  };

  return (
    <div
      className={`relative w-full rounded-[2px] border ${borderMap[theme]} bg-gradient-to-br ${gradientMap[theme]} overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none group transition-all duration-300 ${className}`}
      style={{
        aspectRatio: aspectRatio || undefined,
        minHeight: minHeight || undefined,
      }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${accentColorMap[theme]}25 0%, transparent 70%)`,
        }}
      />

      {children ? (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          {children}
        </div>
      ) : (
        <>
          {/* Decorative Icon badge */}
          <div
            className="relative z-10 w-11 h-11 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-105 shadow-xl"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.45)",
              border: `1px solid ${accentColorMap[theme]}40`,
            }}
          >
            {iconType === "tea" && (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke={accentColorMap[theme]}
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 009-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 009 9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18M3 12h18"
                />
              </svg>
            )}
            {iconType === "coffee" && (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke={accentColorMap[theme]}
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
                />
              </svg>
            )}
            {iconType === "cup" && (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke={accentColorMap[theme]}
                strokeWidth={1.5}
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
              </svg>
            )}
            {iconType === "beans" && (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke={accentColorMap[theme]}
                strokeWidth={1.5}
              >
                <ellipse cx="12" cy="12" rx="6" ry="9" transform="rotate(30 12 12)" />
                <path
                  d="M10 6c2 3 0 9 4 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {iconType === "branch" && (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke={accentColorMap[theme]}
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 20c8-2 12-6 16-16M9 15c-3-1-5-4-5-7 3 0 6 2 7 5M15 9c1-3 4-5 7-5 0 3-2 6-5 7"
                />
              </svg>
            )}
            {iconType === "image" && (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke={accentColorMap[theme]}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            )}
          </div>

          <p className="relative z-10 text-xs sm:text-sm font-medium text-white/90 tracking-wide max-w-[280px]">
            {label}
          </p>
          {sublabel && (
            <p className="relative z-10 text-[10px] sm:text-xs text-white/50 mt-1 max-w-[240px]">
              {sublabel}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default function LorientalisGrowPage() {
  // State for Varieties Carousel in Section 3
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  // State for Tea Processing Step in Section 7
  const [activeTeaStep, setActiveTeaStep] = useState(0);

  const teaProcessingSteps = [
    {
      title: "Plucking",
      tag: "Step 01",
      desc: "Harvesters Pick Young Growth Off The Bushes. They Usually Stick To The Classic 'Two Leaves And A Bud' Standard: These Tender Top Shoots Hold The Densest Concentration Of Natural Sugars And Aromatic Oils. Hand-Picking Matters Here Because Rough Handling Can Bruise The Leaves Prematurely And Spoil The Flavour Before Processing Even Starts.",
      aspectLabel: "Harvester in Garden Plucking Tender Leaf Shoots",
    },
    {
      title: "Withering & Rolling",
      tag: "Step 02",
      desc: "Fresh leaves are spread across shaded bamboo troughs where airflow reduces internal moisture by up to 50%. The leaves are then gently rolled to rupture cell walls, dispersing essential oils and preparing enzymes for uniform character development.",
      aspectLabel: "Withering Leaves on Bamboo Trays & Traditional Hand-Rolling",
    },
    {
      title: "Oxidation (Fermentation)",
      tag: "Step 03",
      desc: "Leaves rest in temperature and humidity controlled oxidation rooms. Oxygen reacts with catechins and theaflavins, transforming green leaf pigments into deep coppery tones and unlocking complex floral, honey, or malty aroma compounds.",
      aspectLabel: "Controlled Oxidation Tables with Coppery Brown Leaves",
    },
    {
      title: "Firing & Sorting",
      tag: "Step 04",
      desc: "Careful hot-air baking halts enzymatic action at the precise sensory peak. The tea is dried down to 3% moisture for shelf stability, then meticulously graded by leaf size from whole Orthodox leaves to dense CTC granules.",
      aspectLabel: "Charcoal & Hot Air Roaster with Finished Black Leaf Grading",
    },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-clip selection:bg-[#365944] selection:text-white">
      {/* 1. L'ORIENTALIS GLOBAL HEADER */}
      <LOrientalisHeader />

      {/* =========================================================================
          SECTION 1: HERO - GROW & BOTANICAL BRANCH
          ========================================================================= */}
      <section
        id="grow-hero"
        className="relative w-full h-[100dvh] flex flex-col justify-end overflow-hidden bg-black select-none"
      >
        {/* Background ambient lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[60vw] h-[50vh] opacity-25"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, #365944 0%, transparent 65%)",
            }}
          />
        </div>

        {/* HERO ARTWORK LAYER: Spans end-to-end top-to-bottom left-to-right in intact ratio of dimensions */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/94da132b-c938-49ac-0ed3-1e2015466d00/public"
            alt="L'Orientalis Grow"
            fill
            priority
            unoptimized
            className="object-cover object-center pointer-events-none"
          />
        </div>

        {/* BOTTOM HERO LAYER: Know More button, Narrative Text & Coffee/Tea Cards */}
        <div
          className="relative z-30 w-full flex flex-col md:flex-row items-start md:items-end select-none pb-[clamp(18px,3.8vh,60px)] gap-6 md:gap-0"
          style={{
            paddingLeft: "clamp(14px, 2.778vw, 80px)",
            paddingRight: "clamp(14px, 2.778vw, 80px)",
          }}
        >
          {/* Left: Know More Button */}
          {/* Vertical center aligned with narrative text center */}
          <div className="shrink-0 mb-0 md:mb-[clamp(40px,5.8vh,90px)]">
            <button
              type="button"
              onClick={() => handleScrollTo("coffee")}
              className="inline-flex items-center gap-2.5 sm:gap-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer select-none shrink-0 group rounded-none h-[clamp(40px,3.594vw,72px)] px-[clamp(14px,1.25vw,26px)]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px, responsive on larger screens
                lineHeight: "120%",
                letterSpacing: "0%",
                textAlign: "right",
              }}
            >
              <span>Know More</span>
              {/* Arrow as big as button text, pointing down-right */}
              <svg
                className="w-[clamp(18px,1.406vw,28px)] h-[clamp(18px,1.406vw,28px)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path d="M6 6L18 18M18 18H9M18 18V9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Right Group: Narrative Text + strict 47px gap + Coffee/Tea Cards */}
          {/* ml-auto keeps cards at right margin, and keeps text strictly 47px from coffee card */}
          {/* pl-[clamp(24px,6.406vw,160px)] guarantees the 82px minimum gap between button and narrative text at 1280px, responsive on larger screens */}
          <div className="ml-auto flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-[clamp(16px,3.672vw,94px)] pl-[clamp(24px,6.406vw,160px)]">
            {/* Philosophy Narrative: bottom aligned with bottom of coffee/tea images */}
            <p
              className="m-0 select-none text-left sm:text-right mb-0 sm:mb-[clamp(28px,4vh,60px)]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(13px, 1.406vw, 28px)", // 18px at 1280px, responsive on larger screens
                lineHeight: "120%",
                letterSpacing: "0%",
                textAlign: "right",
                color: "#DBDBDB",
                maxWidth: "clamp(280px, 36.25vw, 750px)", // 464px at 1280px
              }}
            >
              Quality In The Cup Is Decided At The Farm. For Procurement And Hospitality Leaders, Understanding How Coffee And Tea Are Grown Is The First Step To Specifying Them With Confidence And To Holding A Supplier Accountable.
            </p>

            {/* Coffee & Tea Thumbnail Cards (202x202 at 1280px, maintaining 1:1 ratio) */}
            <div className="flex items-end gap-[clamp(14px,2.656vw,68px)] shrink-0 select-none">
              {/* Coffee thumbnail card */}
              <button
                type="button"
                onClick={() => handleScrollTo("coffee")}
                className="flex flex-col items-end group cursor-pointer text-right p-0 bg-transparent border-none focus:outline-none"
                style={{
                  transition: "transform 300ms cubic-bezier(0.7, -0.4, 0.4, 1.4)",
                }}
              >
                <div
                  className="relative overflow-hidden rounded-[14px] transition-transform group-hover:scale-[1.03] group-active:scale-[0.98]"
                  style={{
                    width: "clamp(120px, 15.781vw, 364px)", // 202px at 1280px, responsive on larger screens
                    height: "clamp(120px, 15.781vw, 364px)",
                    aspectRatio: "1 / 1",
                    transitionTimingFunction: "cubic-bezier(0.7, -0.4, 0.4, 1.4)",
                    transitionDuration: "300ms",
                  }}
                >
                  <Image
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/791ac191-2ccd-471d-04cb-40e6f8763900/public"
                    alt="Coffee - Ripe Cherries"
                    fill
                    unoptimized
                    priority
                    className="object-cover pointer-events-none"
                  />
                </div>
                <div
                  className="mt-2.5 sm:mt-3 px-3 sm:px-3.5 py-1 rounded-[2px] transition-opacity duration-300 group-hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(270deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(12px, 1.406vw, 28px)", // 18px at 1280px
                    lineHeight: "120%",
                    letterSpacing: "0%",
                    textAlign: "right",
                    color: "#FFFFFF",
                  }}
                >
                  Coffee
                </div>
              </button>

              {/* Tea thumbnail card */}
              <button
                type="button"
                onClick={() => handleScrollTo("tea")}
                className="flex flex-col items-end group cursor-pointer text-right p-0 bg-transparent border-none focus:outline-none"
                style={{
                  transition: "transform 300ms cubic-bezier(0.7, -0.4, 0.4, 1.4)",
                }}
              >
                <div
                  className="relative overflow-hidden rounded-[14px] transition-transform group-hover:scale-[1.03] group-active:scale-[0.98]"
                  style={{
                    width: "clamp(120px, 15.781vw, 364px)", // 202px at 1280px, responsive on larger screens
                    height: "clamp(120px, 15.781vw, 364px)",
                    aspectRatio: "1 / 1",
                    transitionTimingFunction: "cubic-bezier(0.7, -0.4, 0.4, 1.4)",
                    transitionDuration: "300ms",
                  }}
                >
                  <Image
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/65c7379f-c2f3-4deb-3f37-25f791402500/public"
                    alt="Tea - Camellia Sinensis Flush"
                    fill
                    unoptimized
                    priority
                    className="object-cover pointer-events-none"
                  />
                </div>
                <div
                  className="mt-2.5 sm:mt-3 px-3 sm:px-3.5 py-1 rounded-[2px] transition-opacity duration-300 group-hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(270deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(12px, 1.406vw, 28px)", // 18px at 1280px
                    lineHeight: "120%",
                    letterSpacing: "0%",
                    textAlign: "right",
                    color: "#FFFFFF",
                  }}
                >
                  Tea
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: COFFEE TERROIR & BOTANICAL SPREAD
          ========================================================================= */}
      {/* Gap from Hero: 72px at 1280px (clamp(38px, 5.625vw, 130px)) */}
      {/* Gap to Varieties: 92px at 1280px (clamp(48px, 7.188vw, 165px)) */}
      <section
        id="coffee"
        className="w-full flex flex-col justify-center overflow-hidden bg-black select-none"
        style={{
          paddingTop: "clamp(38px, 5.625vw, 130px)",
          paddingBottom: "clamp(48px, 7.188vw, 165px)",
          paddingLeft: "clamp(16px, 3.125vw, 75px)",
          paddingRight: "clamp(16px, 3.125vw, 75px)",
        }}
      >
        {/* Section Heading Row with Horizontal Gradient Divider */}
        {/* Heading: Monschone, 400, Regular, 64px at 1280px, line-height 100% */}
        {/* HR beside it: 1px solid gradient 90deg, width 321px at 1280px, 95px gap below */}
        {/* Line aligned at 99% of heading height starting from top */}
        <div className="w-full flex items-start gap-3 sm:gap-4 mb-[clamp(48px,7.422vw,171px)] select-none">
          <h2
            className="m-0 text-white font-normal whitespace-nowrap"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 115px)", // 64px at 1280px, responsive on larger screens
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Coffee
          </h2>
          <div
            className="h-[1px] shrink-0"
            style={{
              width: "clamp(160px, 25.078vw, 580px)", // 321px at 1280px, responsive on larger screens
              background:
                "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
              marginTop: "calc(clamp(36px, 5vw, 115px) * 0.99)",
            }}
          />
        </div>

        {/* 3-Column Content Layout: Left Terroir | Center Portrait Botanical | Right Varietals */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-0 select-none">
          {/* Left Column: Terroir Overview (inward right-aligned) */}
          <div className="w-full lg:w-[clamp(240px,25.469vw,585px)] shrink-0 flex flex-col justify-start lg:pt-[clamp(160px,28.438vw,655px)] pr-0 lg:pr-[clamp(12px,1.875vw,40px)]">
            <p
              className="m-0 text-[#DBDBDB] font-normal text-left lg:text-right lg:ml-auto"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px, responsive on larger screens
                lineHeight: "120%",
                letterSpacing: "0%",
                maxWidth: "clamp(260px, 24.219vw, 560px)", // 310px at 1280px
              }}
            >
              Soil, Climate, Sunlight, Vegetation, And Altitude Shape Coffee&apos;s Flavour. This Combination, Called Terroir, Is Key In Single-Origin Coffee From One Farm Or Region, Giving It A Unique, Complex Taste.
            </p>
          </div>

          {/* Center Column: Central Portrait Image of Coffee Plant with Cherries & White Blossoms (479x740 at 1280px, maintaining 479/740 ratio) */}
          <div className="shrink-0 flex justify-center">
            <div
              className="relative overflow-hidden shrink-0"
              style={{
                width: "clamp(280px, 37.422vw, 862px)", // 479px at 1280px, responsive on larger screens
                height: "clamp(432px, 57.812vw, 1332px)", // 740px at 1280px
                aspectRatio: "479 / 740",
              }}
            >
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/efdeefd5-de98-441d-a37f-ec36eaf44b00/public"
                alt="Coffee Plant with Ripe Cherries and White Blossoms"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 862px"
                className="object-cover pointer-events-none"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />
            </div>
          </div>

          {/* Right Column: Two Stacked Varietal & Altitude Factor Blocks (inward left-aligned) */}
          <div className="w-full lg:w-[clamp(260px,30.781vw,710px)] shrink-0 flex flex-col justify-between lg:pt-[clamp(40px,7.656vw,176px)] lg:pb-[clamp(40px,8.281vw,190px)] pl-0 lg:pl-[clamp(16px,2.5vw,50px)] gap-6 lg:gap-0">
            {/* Top Text Block */}
            <div>
              <p
                className="m-0 text-[#DBDBDB] font-normal text-left"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px, responsive on larger screens
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  maxWidth: "clamp(280px, 28.516vw, 660px)", // 365px at 1280px
                }}
              >
                Coffee Varieties, Or Varietals, Are The Different Types Of Coffee Plant, Much As Apples Come In Different Types. Each Has Its Own Profile Of Flavor, Body, Acidity, Sweetness, Finish, And Caffeine.
              </p>
            </div>

            {/* Bottom Text Block */}
            <div>
              <p
                className="m-0 text-[#DBDBDB] font-normal text-left"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px, responsive on larger screens
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  maxWidth: "clamp(280px, 28.516vw, 660px)", // 365px at 1280px
                }}
              >
                Reviews Temperature, Altitude, Shade, Rainfall, And Agronomy As Key Coffee Terroir Factors. A Review Of 73 Studies Found Higher Altitude Consistently Linked To Better Sensory Quality. For Buyers, Terroir Distinguishes Commodity Beans From Traceable Origins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: VARIETIES OVERVIEW & ARABICA / ROBUSTA CARDS
          ========================================================================= */}
      {/* 92px gap from Coffee (via Coffee pb) */}
      {/* 172px gap between content and carousel (mb-[clamp(80px,13.438vw,310px)]) */}
      {/* 172px gap to Know your roasts (pb-[clamp(80px,13.438vw,310px)]) */}
      <section
        id="varieties"
        className="w-full flex flex-col justify-center overflow-hidden"
        style={{
          paddingTop: 0,
          paddingBottom: "clamp(80px, 13.438vw, 310px)",
          paddingLeft: "clamp(16px, 3.125vw, 75px)",
          paddingRight: "clamp(16px, 3.125vw, 75px)",
        }}
      >
        {/* Section Heading Row with Line on Left leading to "Varieties" on Right */}
        {/* after the title 93px gap at 1280px */}
        {/* Line aligned at 99% of heading height starting from top */}
        <div className="w-full flex items-start justify-end mb-[clamp(48px,7.266vw,167px)] select-none">
          <div
            className="flex-1 mr-6 sm:mr-8 h-px bg-gradient-to-l from-white/30 via-white/10 to-transparent"
            style={{
              marginTop: "calc(clamp(32px, 4.375vw, 98px) * 0.99)",
            }}
          />
          <h2
            className="m-0 text-white font-normal whitespace-nowrap"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(32px, 4.375vw, 98px)", // 56px at 1280px, responsive on larger screens
              lineHeight: "100%",
            }}
          >
            Varieties
          </h2>
        </div>

        {/* Content Row: Left Column Narrative + Right Column 2 Bean Cards */}
        {/* left and right section have 60px gap between them at 1280px */}
        {/* 172px under it, the carousel at 1280px */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-[clamp(28px,4.688vw,108px)] select-none mb-[clamp(80px,13.438vw,310px)]">
          {/* Left Column */}
          <div className="w-full lg:max-w-[clamp(480px,45vw,960px)] flex flex-col items-start lg:items-end text-left lg:text-right">
            {/* The most common varieties of coffee */}
            <h3
              className="m-0 text-white font-normal"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(22px, 2.813vw, 64px)", // 36px at 1280px, responsive on larger screens
                lineHeight: "120%",
                letterSpacing: "0%",
                textAlign: "right",
              }}
            >
              The most common varieties of coffee.
            </h3>

            {/* 68px gap then description at 1280px */}
            <div className="h-[clamp(32px,5.313vw,122px)]" />

            {/* Arabica and robusta dominate... */}
            <p
              className="m-0 text-[#DBDBDB] font-normal"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px, responsive on larger screens
                lineHeight: "120%",
                letterSpacing: "0%",
                textAlign: "right",
              }}
            >
              Arabica and robusta dominate commercial coffee worldwide. Less common species such as liberica and excelsa are gaining ground with specialty buyers.
            </p>
          </div>

          {/* Right Column: Two Bean Cards (286x255 at 1280px, maintaining 286/255 ratio) with 60px gap between them */}
          <div className="flex items-start gap-[clamp(24px,4.688vw,108px)] shrink-0 self-center lg:self-end">
            {/* Arabica Card */}
            <div
              onClick={() => setCarouselIndex(0)}
              className="flex flex-col items-start cursor-pointer group"
            >
              <div
                className="relative overflow-hidden rounded-[14px] bg-[#223B2A] transition-transform duration-300 group-hover:scale-[1.02]"
                style={{
                  width: "clamp(180px, 22.344vw, 515px)", // 286px at 1280px, responsive on larger screens
                  height: "clamp(160px, 19.922vw, 459px)", // 255px at 1280px
                  aspectRatio: "286 / 255",
                }}
              >
                <Image
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9aeae92b-105c-42e1-f632-1958a2da6100/public"
                  alt="Arabica Coffee Bean"
                  fill
                  sizes="(max-width: 768px) 50vw, 515px"
                  className="object-cover pointer-events-none"
                />
              </div>

              {/* under it 6px gap, then vertical line 10px gap then its label */}
              <div className="flex items-center mt-[clamp(6px,0.469vw,12px)]">
                <div className="w-[1px] h-[clamp(24px,2.5vw,58px)] bg-[#DBDBDB] shrink-0" />
                <span
                  className="ml-[clamp(10px,0.781vw,20px)] text-[#DBDBDB] transition-colors group-hover:text-white"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(18px, 1.875vw, 42px)", // 24px at 1280px, responsive on larger screens
                    lineHeight: "120%",
                    letterSpacing: "0%",
                  }}
                >
                  Arabica
                </span>
              </div>
            </div>

            {/* Robusta Card */}
            <div
              onClick={() => setCarouselIndex(1)}
              className="flex flex-col items-start cursor-pointer group"
            >
              <div
                className="relative overflow-hidden rounded-[14px] bg-[#223B2A] transition-transform duration-300 group-hover:scale-[1.02]"
                style={{
                  width: "clamp(180px, 22.344vw, 515px)", // 286px at 1280px, responsive on larger screens
                  height: "clamp(160px, 19.922vw, 459px)", // 255px at 1280px
                  aspectRatio: "286 / 255",
                }}
              >
                <Image
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/31a67572-d486-4ee8-a505-e705955e8f00/public"
                  alt="Robusta Coffee Bean"
                  fill
                  sizes="(max-width: 768px) 50vw, 515px"
                  className="object-cover pointer-events-none"
                />
              </div>

              {/* under it 6px gap, then vertical line 10px gap then its label */}
              <div className="flex items-center mt-[clamp(6px,0.469vw,12px)]">
                <div className="w-[1px] h-[clamp(24px,2.5vw,58px)] bg-[#DBDBDB] shrink-0" />
                <span
                  className="ml-[clamp(10px,0.781vw,20px)] text-[#DBDBDB] transition-colors group-hover:text-white"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(18px, 1.875vw, 42px)", // 24px at 1280px, responsive on larger screens
                    lineHeight: "120%",
                    letterSpacing: "0%",
                  }}
                >
                  Robusta
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CAROUSEL SECTION (1164x595 at 1280px, maintaining 1164/595 ratio)
            ========================================================================= */}
        <div className="w-full flex flex-col select-none overflow-hidden">
          {/* Slides Track with smooth translation */}
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-[clamp(20px,2.5vw,54px)]"
              style={{
                transform:
                  carouselIndex === 0
                    ? "translateX(0)"
                    : "translateX(calc(-1 * (clamp(300px, 90.938vw, 2095px) + clamp(20px, 2.5vw, 54px))))",
              }}
            >
              {/* SLIDE 1: ARABICA */}
              <div
                className="shrink-0 flex flex-col"
                style={{
                  width: "clamp(300px, 90.938vw, 2095px)",
                }}
              >
                {/* Slide 1 Header */}
                <div className="w-full flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 mb-3 sm:mb-5">
                  <div className="flex items-center gap-3 shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      className="shrink-0 w-[clamp(24px,2.031vw,46px)] h-[clamp(24px,2.031vw,46px)]"
                    >
                      <ellipse cx="8" cy="12" rx="4.5" ry="6.5" transform="rotate(-20 8 12)" strokeLinecap="round" />
                      <path d="M6 7C8 10 7 14 9 17" strokeLinecap="round" />
                      <ellipse cx="16" cy="12" rx="4.5" ry="6.5" transform="rotate(20 16 12)" strokeLinecap="round" />
                      <path d="M15 7C17 10 16 14 18 17" strokeLinecap="round" />
                    </svg>
                    <span
                      className="text-white font-normal"
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontSize: "clamp(20px, 2.031vw, 46px)", // 26px at 1280px, responsive on larger screens
                        lineHeight: "100%",
                      }}
                    >
                      Arabica
                    </span>
                  </div>

                  <p
                    className="m-0 text-[#DBDBDB] text-[13px] sm:text-[clamp(13px,1.133vw,24px)] leading-[150%] text-left sm:text-right"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      maxWidth: "clamp(450px, 45.313vw, 1040px)",
                    }}
                  >
                    Coffea Arabica Is Descended From The Original Coffee Trees Discovered In Ethiopia. These Trees Produce Fine, Mild, Aromatic Coffees That Bring The Highest Prices On The World Market.
                  </p>
                </div>

                {/* Slide 1 Image (1164x595 at 1280px, maintaining ratio) */}
                <div
                  className="relative overflow-hidden rounded-[4px] w-full"
                  style={{
                    aspectRatio: "1164 / 595",
                  }}
                >
                  <Image
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/64a6dc17-fe78-4a88-e444-ba509b264e00/public"
                    alt="Arabica Botanical and Chemical Terroir Slide"
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 2095px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* SLIDE 2: ROBUSTA */}
              <div
                className="shrink-0 flex flex-col"
                style={{
                  width: "clamp(300px, 90.938vw, 2095px)",
                }}
              >
                {/* Slide 2 Header */}
                <div className="w-full flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 mb-3 sm:mb-5">
                  <div className="flex items-center gap-3 shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      className="shrink-0 w-[clamp(24px,2.031vw,46px)] h-[clamp(24px,2.031vw,46px)]"
                    >
                      <ellipse cx="8" cy="12" rx="4.5" ry="6.5" transform="rotate(-20 8 12)" strokeLinecap="round" />
                      <path d="M6 7C8 10 7 14 9 17" strokeLinecap="round" />
                      <ellipse cx="16" cy="12" rx="4.5" ry="6.5" transform="rotate(20 16 12)" strokeLinecap="round" />
                      <path d="M15 7C17 10 16 14 18 17" strokeLinecap="round" />
                    </svg>
                    <span
                      className="text-white font-normal"
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontSize: "clamp(20px, 2.031vw, 46px)", // 26px at 1280px, responsive on larger screens
                        lineHeight: "100%",
                      }}
                    >
                      Robusta
                    </span>
                  </div>

                  <p
                    className="m-0 text-[#DBDBDB] text-[13px] sm:text-[clamp(13px,1.133vw,24px)] leading-[150%] text-left sm:text-right"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      maxWidth: "clamp(450px, 45.313vw, 1040px)",
                    }}
                  >
                    Coffea Canephora, Commonly Known As Robusta, Is Native To Central And Western Sub-Saharan Africa. It Is Hardier, Yields More, And Contains Roughly Twice The Caffeine Of Arabica.
                  </p>
                </div>

                {/* Slide 2 Image (1164x595 at 1280px, maintaining ratio) */}
                <div
                  className="relative overflow-hidden rounded-[4px] w-full"
                  style={{
                    aspectRatio: "1164 / 595",
                  }}
                >
                  <Image
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6505f8ad-dade-44b8-383e-7e6acc0e4700/public"
                    alt="Robusta Botanical and Chemical Terroir Slide"
                    fill
                    sizes="(max-width: 1280px) 100vw, 2095px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 77px gap then 2 navigation arrows 24x24 30px apart at 1280px */}
          {/* when inactive 2px solid #383636, when active: 2px solid #FFFFFF */}
          <div className="w-full flex items-center justify-end mt-[clamp(36px,6.016vw,138px)] gap-[clamp(20px,2.344vw,54px)]">
            {/* Left / Previous Arrow */}
            <button
              type="button"
              onClick={() => setCarouselIndex(0)}
              aria-label="Previous Slide"
              className="w-[clamp(24px,1.875vw,44px)] h-[clamp(24px,1.875vw,44px)] flex items-center justify-center p-0 bg-transparent border-0 cursor-pointer transition-opacity hover:opacity-80"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M5 12L11 6M5 12L11 18"
                  stroke={carouselIndex === 1 ? "#FFFFFF" : "#383636"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Right / Next Arrow */}
            <button
              type="button"
              onClick={() => setCarouselIndex(1)}
              aria-label="Next Slide"
              className="w-[clamp(24px,1.875vw,44px)] h-[clamp(24px,1.875vw,44px)] flex items-center justify-center p-0 bg-transparent border-0 cursor-pointer transition-opacity hover:opacity-80"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke={carouselIndex === 0 ? "#FFFFFF" : "#383636"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: KNOW YOUR ROASTS & DEGREE SPECTRUM
          ========================================================================= */}
      {/* 172px gap from Varieties Carousel (via Varieties pb) */}
      {/* 172px gap between Roast Spectrum and Most Common Varieties (mb-[clamp(80px,13.438vw,310px)]) */}
      {/* 172px gap to Tea Processing Big Image (pb-[clamp(80px,13.438vw,310px)]) */}
      <section
        id="roasts"
        className="w-full flex flex-col justify-center overflow-hidden"
        style={{
          paddingTop: 0,
          paddingBottom: "clamp(80px, 13.438vw, 310px)",
          paddingLeft: "clamp(16px, 3.125vw, 75px)",
          paddingRight: "clamp(16px, 3.125vw, 75px)",
        }}
      >
        {/* Section Heading Row with horizontal line at 99% of heading height */}
        {/* Under the title 58px gap at 1280px */}
        <div className="w-full flex items-start gap-4 mb-[clamp(30px,4.531vw,104px)] select-none">
          <h2
            className="m-0 text-white font-normal whitespace-nowrap"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(30px, 4.219vw, 98px)", // 54px at 1280px, responsive on larger screens
              lineHeight: "100%",
            }}
          >
            Know your roasts
          </h2>
          <div
            className="h-[1px] shrink-0"
            style={{
              width: "clamp(120px, 16.797vw, 387px)", // 215px at 1280px, responsive on larger screens
              background:
                "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
              marginTop: "calc(clamp(30px, 4.219vw, 98px) * 0.99)",
            }}
          />
        </div>

        {/* Narrative text right-aligned + 71px gap below at 1280px */}
        <div className="w-full flex justify-end mb-[clamp(36px,5.547vw,128px)] select-none">
          <p
            className="m-0 select-none text-right"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px, responsive on larger screens
              lineHeight: "120%",
              letterSpacing: "0%",
              textAlign: "right",
              color: "#D5D5D5",
              maxWidth: "clamp(320px, 37.969vw, 875px)", // 486px at 1280px
            }}
          >
            There is no single perfect roast, only the right one for your guest and your menu. Three things are worth knowing.
          </p>
        </div>

        {/* 1200x400 Panoramic Roast Spectrum Image (maintaining 1200/400 ratio) */}
        <div
          className="relative w-full mx-auto overflow-hidden rounded-[2px] select-none"
          style={{
            maxWidth: "clamp(320px, 93.75vw, 2160px)",
            aspectRatio: "1200 / 400",
          }}
        >
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c0aa6785-736b-407a-d36b-2daff6ea3f00/public"
            alt="Coffee Bean Roast Spectrum: Dark Roast to Light Roast"
            fill
            sizes="(max-width: 1280px) 100vw, 2160px"
            priority
            className="object-cover pointer-events-none"
          />
        </div>

        {/* 25px gap at 1280px */}
        <div className="h-[clamp(16px,1.953vw,45px)]" />

        {/* Static Roast Indicator Bar */}
        <div
          className="w-full mx-auto select-none"
          style={{
            maxWidth: "clamp(320px, 93.75vw, 2160px)",
          }}
        >
          {/* Dots and Connecting Gradient Line */}
          <div className="relative w-full h-[clamp(14px,1.5vw,32px)] flex items-center">
            {/* Gradient connecting line */}
            <div
              className="absolute h-[clamp(2px,0.2vw,4px)] top-1/2 -translate-y-1/2"
              style={{
                left: "clamp(48px, 6.5%, 140px)",
                right: "clamp(48px, 6.5%, 140px)",
                background:
                  "linear-gradient(90deg, #B3473A 0%, #D89C46 30%, #E5C24C 50%, #B5BE51 75%, #A8BA54 100%)",
              }}
            />

            {/* Left Dot: Dark Roast */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[clamp(12px,1.25vw,28px)] h-[clamp(12px,1.25vw,28px)] rounded-full bg-white border border-[#222222] shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              style={{ left: "clamp(48px, 6.5%, 140px)" }}
            />

            {/* Center Dot: Medium Roast */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[clamp(12px,1.25vw,28px)] h-[clamp(12px,1.25vw,28px)] rounded-full bg-white border border-[#222222] shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              style={{ left: "50%" }}
            />

            {/* Right Dot: Light Roast */}
            <div
              className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 w-[clamp(12px,1.25vw,28px)] h-[clamp(12px,1.25vw,28px)] rounded-full bg-white border border-[#222222] shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              style={{ right: "clamp(48px, 6.5%, 140px)" }}
            />
          </div>

          {/* Labels Row */}
          <div className="relative w-full mt-[clamp(10px,1.25vw,24px)] h-[clamp(28px,3vw,56px)]">
            {/* Dark Roast Pill */}
            <div
              className="absolute top-0 -translate-x-1/2 px-[clamp(8px,1.25vw,24px)] py-[clamp(3px,0.469vw,10px)] rounded-[4px] whitespace-nowrap"
              style={{
                left: "clamp(48px, 6.5%, 140px)",
                backgroundColor: "rgba(255, 255, 255, 0.13)", // #FFFFFF21
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 500,
                fontSize: "clamp(12px, 1.25vw, 24px)", // 16px at 1280px, responsive on larger screens
                lineHeight: "120%",
                letterSpacing: "0%",
                color: "#D5D5D5",
              }}
            >
              Dark Roast Coffee
            </div>

            {/* Medium Roast Pill */}
            <div
              className="absolute top-0 -translate-x-1/2 px-[clamp(8px,1.25vw,24px)] py-[clamp(3px,0.469vw,10px)] rounded-[4px] whitespace-nowrap"
              style={{
                left: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.13)", // #FFFFFF21
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 500,
                fontSize: "clamp(12px, 1.25vw, 24px)", // 16px at 1280px, responsive on larger screens
                lineHeight: "120%",
                letterSpacing: "0%",
                color: "#D5D5D5",
              }}
            >
              Medium Roast Coffee
            </div>

            {/* Light Roast Pill */}
            <div
              className="absolute top-0 translate-x-1/2 px-[clamp(8px,1.25vw,24px)] py-[clamp(3px,0.469vw,10px)] rounded-[4px] whitespace-nowrap"
              style={{
                right: "clamp(48px, 6.5%, 140px)",
                backgroundColor: "rgba(255, 255, 255, 0.13)", // #FFFFFF21
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 500,
                fontSize: "clamp(12px, 1.25vw, 24px)", // 16px at 1280px, responsive on larger screens
                lineHeight: "120%",
                letterSpacing: "0%",
                color: "#D5D5D5",
              }}
            >
              Light Roast Coffee
            </div>
          </div>
        </div>

        {/* 172px gap at 1280px */}
        <div className="h-[clamp(80px,13.438vw,310px)]" />

        {/* The most common varieties of coffee. */}
        <h3
          className="m-0 text-white font-normal text-center select-none"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 2.813vw, 64px)", // 36px at 1280px, responsive on larger screens
            lineHeight: "120%",
            letterSpacing: "0%",
          }}
        >
          The Most Common Varieties Of Coffee.
        </h3>

        {/* 110px gap at 1280px */}
        <div className="h-[clamp(55px,8.594vw,198px)]" />

        {/* 4-Item Row: Light Text | Light Roast Circle | Medium Roast Circle | Medium Text */}
        <div
          className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[clamp(24px,3.125vw,60px)] select-none mb-[clamp(36px,4.688vw,108px)]"
          style={{
            maxWidth: "clamp(320px, 93.75vw, 2160px)",
          }}
        >
          {/* Light Roast Narrative (Left) */}
          <div className="w-full lg:w-[clamp(240px,23.047vw,530px)] shrink-0 text-left">
            <p
              className="m-0 text-[#C4C4C4] font-normal"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(13px, 1.172vw, 22px)",
                lineHeight: "150%",
              }}
            >
              Light Brown With A Subtle Roasted Taste, Suited To Milder Cups. It Yields The Most Acidic Coffee. The Beans Have A Matte Surface Because The Oils Stay Inside.
            </p>
          </div>

          {/* Center Group: Two Bean Circles Side-by-Side */}
          <div className="flex items-center gap-[clamp(24px,3.9vw,80px)] shrink-0">
            {/* Circle 1: Light Roast */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="relative overflow-hidden rounded-full shadow-2xl border border-white/10 shrink-0"
                style={{
                  width: "clamp(110px, 13.906vw, 320px)", // 178px at 1280px, responsive on larger screens
                  height: "clamp(110px, 13.906vw, 320px)",
                  aspectRatio: "1 / 1",
                }}
              >
                <Image
                  src="/images/lorientalis/roast-light-circle.png"
                  alt="Light Roast Coffee Beans"
                  fill
                  sizes="(max-width: 768px) 140px, 320px"
                  className="object-cover pointer-events-none"
                />
              </div>
              <span
                className="text-[#D5D5D5] text-center"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(12px, 1.094vw, 22px)",
                  lineHeight: "120%",
                }}
              >
                Light Roast Coffee
              </span>
            </div>

            {/* Circle 2: Medium Roast */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="relative overflow-hidden rounded-full shadow-2xl border border-white/10 shrink-0"
                style={{
                  width: "clamp(110px, 13.906vw, 320px)", // 178px at 1280px, responsive on larger screens
                  height: "clamp(110px, 13.906vw, 320px)",
                  aspectRatio: "1 / 1",
                }}
              >
                <Image
                  src="/images/lorientalis/roast-medium-circle.png"
                  alt="Medium Roast Coffee Beans"
                  fill
                  sizes="(max-width: 768px) 140px, 320px"
                  className="object-cover pointer-events-none"
                />
              </div>
              <span
                className="text-[#D5D5D5] text-center"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(12px, 1.094vw, 22px)",
                  lineHeight: "120%",
                }}
              >
                Medium Roast Coffee
              </span>
            </div>
          </div>

          {/* Medium Roast Narrative (Right) */}
          <div className="w-full lg:w-[clamp(240px,23.047vw,530px)] shrink-0 text-left">
            <p
              className="m-0 text-[#C4C4C4] font-normal"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(13px, 1.172vw, 22px)",
                lineHeight: "150%",
              }}
            >
              Medium Brown With A Stronger Flavour And A Non-Oily Surface. Often Called &quot;American Roast&quot; Or The Breakfast Blend. It Is The Safest Crowd-Pleaser For High-Footfall Spaces.
            </p>
          </div>
        </div>

        {/* Full-bleed Dark Roast Banner (maintaining ratio) */}
        <div
          className="w-full mx-auto flex flex-col select-none"
          style={{
            maxWidth: "clamp(320px, 93.75vw, 2160px)",
          }}
        >
          <div
            className="relative w-full rounded-[2px] overflow-hidden shadow-2xl mb-4"
            style={{
              aspectRatio: "1200 / 260",
            }}
          >
            <Image
              src="/images/lorientalis/roast-dark-banner.png"
              alt="Glistening Dark Roast Coffee Beans"
              fill
              sizes="(max-width: 1280px) 100vw, 2160px"
              className="object-cover pointer-events-none"
            />
          </div>
          <p
            className="m-0 text-[#B0B0B0]"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(13px, 1.172vw, 22px)",
              lineHeight: "150%",
              maxWidth: "clamp(600px, 78.125vw, 1800px)",
            }}
          >
            <strong className="text-white font-medium">Dark Roast Coffee</strong> &ndash; Shiny Black Beans With An Oily Surface And Pronounced Bitterness. It Is The Least Acidic Of The Three. Dark Roasts Range From Slightly Dark To Charred, And The Names Are Often Used Interchangeably.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: DISCOVER YOUR PERFECT TEA BANNER
          ========================================================================= */}
      {/* 172px gap from Roasts Most Common Varieties (via Roasts pb) */}
      {/* 186px gap to Tea Processing Section (pb-[clamp(88px,14.531vw,335px)]) */}
      <section
        id="tea"
        className="w-full flex flex-col justify-center overflow-hidden"
        style={{
          paddingTop: 0,
          paddingBottom: "clamp(88px, 14.531vw, 335px)", // 186px at 1280px, responsive on larger screens
          paddingLeft: "clamp(16px, 3.125vw, 75px)",
          paddingRight: "clamp(16px, 3.125vw, 75px)",
        }}
      >
        <div
          className="relative w-full mx-auto overflow-hidden rounded-[2px] shadow-2xl select-none"
          style={{
            maxWidth: "clamp(320px, 93.75vw, 2400px)", // 1200px at 1280px (93.75vw)
            aspectRatio: "1200 / 717",
          }}
        >
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0847d1da-7556-49c7-9444-c8247984ce00/public"
            alt="Discover Your Perfect Tea"
            fill
            sizes="(max-width: 1280px) 100vw, 2400px"
            priority
            className="object-cover pointer-events-none"
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: TEA PROCESSING - CONTROLLED DEHYDRATION & OXIDATION
          ========================================================================= */}
      {/* 186px gap from Discover Your Perfect Tea banner (via #tea pb) */}
      {/* 107px gap to Amber Teacup on botanical volume (pb-[clamp(54px,8.359vw,192px)]) */}
      <section
        id="tea-processing"
        className="w-full flex flex-col justify-center overflow-hidden"
        style={{
          paddingTop: 0,
          paddingBottom: "clamp(54px, 8.359vw, 192px)", // 107px at 1280px, responsive on larger screens
          paddingLeft: "clamp(16px, 3.125vw, 75px)",
          paddingRight: "clamp(16px, 3.125vw, 75px)",
        }}
      >
        {/* Heading Row with horizontal line leading to "Tea Processing" on right */}
        {/* Line aligned at 99% of heading height starting from top */}
        <div className="w-full flex items-start justify-end mb-8 sm:mb-12 select-none">
          <div
            className="flex-1 mr-6 sm:mr-8 h-px bg-gradient-to-l from-white/30 via-white/10 to-transparent"
            style={{
              marginTop: "calc(clamp(30px, 4.219vw, 98px) * 0.99)",
            }}
          />
          <h2
            className="m-0 text-white font-normal whitespace-nowrap"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(30px, 4.219vw, 98px)", // 54px at 1280px, responsive on larger screens
              lineHeight: "100%",
            }}
          >
            Tea Processing
          </h2>
        </div>

        {/* Narrative Intro */}
        <div className="w-full max-w-[1200px] mb-10 sm:mb-14 select-none">
          <h3
            className="m-0 text-white font-normal text-[16px] sm:text-[clamp(16px,1.406vw,28px)] mb-3"
            style={{ fontFamily: "var(--font-manrope), sans-serif", lineHeight: "100%" }}
          >
            Tea Processing Is Just Controlled Dehydration And Oxidation.
          </h3>
          <p
            className="m-0 text-[#A0A0A0] text-[13px] sm:text-[clamp(13px,1.133vw,22px)] leading-[160%]"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            All Teas Come From A Single Plant Species: Camellia Sinensis. Whether That Harvest Ends Up As A Crisp Green, A Roasty Oolong, Or A Heavy Black Tea Comes Down To How Much Heat, Air, And Pressure Workers Apply To The Leaf.
          </p>
        </div>

        {/* Processing Step Feature Card & Adjacent Preview */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 select-none">
          {/* Active Card with Frosted Glass Text Overlay */}
          <div className="md:col-span-7 relative rounded-[2px] overflow-hidden border border-white/15 min-h-[360px] sm:min-h-[420px] bg-gradient-to-br from-[#1C2E22] to-[#0A120D] p-6 sm:p-10 flex flex-col justify-end">
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1 rounded bg-black/60 border border-white/10">
              <span className="text-[11px] font-mono uppercase text-[#48A663]">
                {teaProcessingSteps[activeTeaStep].tag}
              </span>
            </div>

            {/* Translucent Glass Text Overlay */}
            <div className="relative z-10 p-6 sm:p-8 rounded-[2px] bg-black/65 backdrop-blur-md border border-white/10 max-w-[560px]">
              <h4
                className="m-0 text-white text-xl sm:text-2xl font-medium mb-3"
                style={{ fontFamily: "var(--font-monschone), serif", lineHeight: "100%" }}
              >
                {teaProcessingSteps[activeTeaStep].title}
              </h4>
              <p
                className="m-0 text-[#CFCFCF] text-[12px] sm:text-[13.5px] leading-[160%]"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {teaProcessingSteps[activeTeaStep].desc}
              </p>
            </div>
          </div>

          {/* Right Preview Card */}
          <div className="md:col-span-5 relative rounded-[2px] overflow-hidden border border-white/15 min-h-[360px] sm:min-h-[420px]">
            <VisualPlaceholder
              label="Asset: Fresh Harvested Leaves in Hands & Drying Basket"
              sublabel="Hand-sorted coarse whole Camellia sinensis leaves prepared for artisanal batch drying"
              theme="tea"
              iconType="tea"
              className="h-full border-0 bg-gradient-to-b from-[#203628] via-[#122218] to-[#080F0B]"
            />
          </div>
        </div>

        {/* Step Carousel Navigation Controls */}
        <div className="w-full flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            {teaProcessingSteps.map((step, idx) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveTeaStep(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeTeaStep === idx ? "w-8 bg-[#48A663]" : "w-3 bg-white/20"
                }`}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setActiveTeaStep((prev) =>
                  prev === 0 ? teaProcessingSteps.length - 1 : prev - 1
                )
              }
              aria-label="Previous tea processing step"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all cursor-pointer"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveTeaStep((prev) =>
                  prev === teaProcessingSteps.length - 1 ? 0 : prev + 1
                )
              }
              aria-label="Next tea processing step"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all cursor-pointer"
            >
              &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TEA RITUAL PHOTOGRAPHIC FEATURE BANNER
          ========================================================================= */}
      {/* 107px gap from Tea Processing (via #tea-processing pb) */}
      {/* 160px gap to Varieties of tea (pb-[clamp(80px,12.5vw,288px)]) */}
      <section
        id="tea-ritual"
        className="w-full flex justify-center overflow-hidden"
        style={{
          paddingTop: 0,
          paddingBottom: "clamp(80px, 12.5vw, 288px)", // 160px at 1280px, responsive on larger screens
          paddingLeft: "clamp(16px, 3.125vw, 75px)",
          paddingRight: "clamp(16px, 3.125vw, 75px)",
        }}
      >
        <div
          className="relative w-full mx-auto overflow-hidden rounded-[2px] shadow-2xl select-none"
          style={{
            maxWidth: "clamp(320px, 93.594vw, 2396px)", // 1198px at 1280px (93.594vw)
            aspectRatio: "1198 / 493",
          }}
        >
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f4bff6a7-6b59-4c1e-8248-ffe46fc1f500/public"
            alt="Amber teacup on open botanical volume"
            fill
            sizes="(max-width: 1280px) 100vw, 2396px"
            priority
            className="object-cover pointer-events-none"
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: VARIETY OF TEAS - 2X2 CARD SPREAD
          ========================================================================= */}
      {/* 160px gap from another big image (via #tea-ritual pb) */}
      {/* 185px gap to footer (pb-[clamp(90px,14.453vw,333px)]) */}
      <section
        id="variety-of-teas"
        className="w-full flex flex-col justify-center overflow-hidden"
        style={{
          paddingTop: 0,
          paddingBottom: "clamp(90px, 14.453vw, 333px)", // 185px at 1280px, responsive on larger screens
          paddingLeft: "clamp(16px, 3.125vw, 75px)",
          paddingRight: "clamp(16px, 3.125vw, 75px)",
        }}
      >
        {/* Section Heading Row with Horizontal Divider */}
        {/* Line aligned at 99% of heading height starting from top */}
        <div className="w-full flex items-start mb-10 sm:mb-14 select-none">
          <h2
            className="m-0 text-white font-normal whitespace-nowrap"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(30px, 4.219vw, 98px)", // 54px at 1280px, responsive on larger screens
              lineHeight: "100%",
            }}
          >
            Variety of Teas
          </h2>
          <div
            className="flex-1 ml-6 sm:ml-8 h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent"
            style={{
              marginTop: "calc(clamp(30px, 4.219vw, 98px) * 0.99)",
            }}
          />
        </div>

        {/* 2x2 Grid of Tea Categories */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 select-none">
          {/* Card 1: Green Tea */}
          <div className="p-6 sm:p-8 rounded-[2px] bg-neutral-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p
              className="m-0 text-[#C4C4C4] text-[12px] sm:text-[13.5px] leading-[160%] flex-1"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Unoxidised, Because Heat Is Applied Early To Halt The Enzymes. Fresh, Grassy And Light, With A Clean Finish. A Strong Fit For Wellness-Led Menus And Premium Hospitality.
            </p>
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-emerald-500/30 shadow-xl">
                <VisualPlaceholder
                  label="Green Tea"
                  aspectRatio="1/1"
                  theme="tea"
                  iconType="tea"
                  className="p-1 border-0 bg-gradient-to-br from-[#2D5A3C] to-[#12281A]"
                />
              </div>
              <span
                className="text-[12px] sm:text-[13px] text-white/80"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Green Tea
              </span>
            </div>
          </div>

          {/* Card 2: CTC Tea */}
          <div className="p-6 sm:p-8 rounded-[2px] bg-neutral-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center gap-2 shrink-0 order-2 sm:order-1">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-amber-700/30 shadow-xl">
                <VisualPlaceholder
                  label="CTC Tea"
                  aspectRatio="1/1"
                  theme="coffee"
                  iconType="tea"
                  className="p-1 border-0 bg-gradient-to-br from-[#4A2514] to-[#1C0E07]"
                />
              </div>
              <span
                className="text-[12px] sm:text-[13px] text-white/80"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                CTC Tea
              </span>
            </div>
            <p
              className="m-0 text-[#C4C4C4] text-[12px] sm:text-[13.5px] leading-[160%] flex-1 order-1 sm:order-2"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Crush, Tear, Curl Is A Machine Method For Black Tea Where Leaves Pass Through Toothed Rollers, Emerging As Small Pellets. It Brews Fast, Strong, And Consistent. Reviews Show Higher Theaflavin And Thearubigin In CTC Teas Than Orthodox Ones.
            </p>
          </div>

          {/* Card 3: Black Tea */}
          <div className="p-6 sm:p-8 rounded-[2px] bg-neutral-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p
              className="m-0 text-[#C4C4C4] text-[12px] sm:text-[13.5px] leading-[160%] flex-1"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Fully Oxidised For A Deeper Colour And A Bolder, Malty Character. It Is The Most Familiar Choice For Breakfast Service And For Pairing With Milk.
            </p>
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-neutral-700/40 shadow-xl">
                <VisualPlaceholder
                  label="Black Tea"
                  aspectRatio="1/1"
                  theme="dark"
                  iconType="tea"
                  className="p-1 border-0 bg-gradient-to-br from-[#262626] to-[#0A0A0A]"
                />
              </div>
              <span
                className="text-[12px] sm:text-[13px] text-white/80"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Black Tea
              </span>
            </div>
          </div>

          {/* Card 4: Orthodox Tea */}
          <div className="p-6 sm:p-8 rounded-[2px] bg-neutral-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center gap-2 shrink-0 order-2 sm:order-1">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-emerald-900/40 shadow-xl">
                <VisualPlaceholder
                  label="Orthodox Tea"
                  aspectRatio="1/1"
                  theme="tea"
                  iconType="tea"
                  className="p-1 border-0 bg-gradient-to-br from-[#1C3626] to-[#08120C]"
                />
              </div>
              <span
                className="text-[12px] sm:text-[13px] text-white/80"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Orthodox Tea
              </span>
            </div>
            <p
              className="m-0 text-[#C4C4C4] text-[12px] sm:text-[13.5px] leading-[160%] flex-1 order-1 sm:order-2"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Processed In The Traditional Sequence Of Plucking, Withering, Rolling, Oxidation And Drying [9]. With The Leaf Kept Whole Or In Large Pieces. It Gives A More Nuanced, Layered Cup And Suits Premium And Speciality Service.
            </p>
          </div>
        </div>
      </section>

      {/* 10. L'ORIENTALIS GLOBAL FOOTER */}
      <LOrientalisFooter />
    </main>
  );
}

