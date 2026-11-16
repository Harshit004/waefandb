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
  // State for Arabica / Robusta tabs in Section 4
  const [activeSpecies, setActiveSpecies] = useState<"arabica" | "robusta">("arabica");

  // State for Roast Spectrum in Section 5
  const [activeRoast, setActiveRoast] = useState<"dark" | "medium" | "light">("medium");

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
          className="relative z-30 w-full flex flex-col md:flex-row items-start md:items-end select-none pb-[clamp(18px,3.8vh,42px)] gap-6 md:gap-0"
          style={{
            paddingLeft: "clamp(14px, 2.778vw, 40px)",
            paddingRight: "clamp(14px, 2.778vw, 40px)",
          }}
        >
          {/* Left: Know More Button */}
          {/* Vertical center aligned with narrative text center */}
          <div className="shrink-0 mb-0 md:mb-[clamp(40px,5.8vh,66px)]">
            <button
              type="button"
              onClick={() => handleScrollTo("coffee")}
              className="inline-flex items-center gap-2.5 sm:gap-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer select-none shrink-0 group rounded-none h-[40px] sm:h-[46px] px-3.5 sm:px-4"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.406vw, 18px)", // 18px at 1280px
                lineHeight: "120%",
                letterSpacing: "0%",
                textAlign: "right",
              }}
            >
              <span>Know More</span>
              {/* Arrow as big as button text, pointing down-right */}
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 shrink-0"
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
          {/* pl-[clamp(24px,6.406vw,82px)] guarantees the 82px minimum gap between button and narrative text */}
          <div className="ml-auto flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-[clamp(16px,3.672vw,47px)] pl-[clamp(24px,6.406vw,82px)]">
            {/* Philosophy Narrative: bottom aligned with bottom of coffee/tea images */}
            <p
              className="m-0 select-none text-left sm:text-right mb-0 sm:mb-[clamp(28px,4vh,44px)]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(12px, 1.406vw, 18px)", // 18px at 1280px
                lineHeight: "120%",
                letterSpacing: "0%",
                textAlign: "right",
                color: "#DBDBDB",
                maxWidth: "clamp(280px, 36.25vw, 464px)",
              }}
            >
              Quality In The Cup Is Decided At The Farm. For Procurement And Hospitality Leaders, Understanding How Coffee And Tea Are Grown Is The First Step To Specifying Them With Confidence And To Holding A Supplier Accountable.
            </p>

            {/* Coffee & Tea Thumbnail Cards (202x202 at 1280px) */}
            <div className="flex items-end gap-[clamp(14px,2.656vw,34px)] shrink-0 select-none">
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
                    width: "clamp(120px, 15.781vw, 202px)",
                    height: "clamp(120px, 15.781vw, 202px)",
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
                    fontSize: "clamp(12px, 1.406vw, 18px)",
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
                    width: "clamp(120px, 15.781vw, 202px)",
                    height: "clamp(120px, 15.781vw, 202px)",
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
                    fontSize: "clamp(12px, 1.406vw, 18px)",
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
      <section
        id="coffee"
        className="w-full flex flex-col justify-center overflow-hidden bg-black select-none"
        style={{
          paddingTop: "clamp(56px, 7vw, 100px)",
          paddingBottom: "clamp(56px, 7vw, 100px)",
          paddingLeft: "clamp(16px, 3.125vw, 40px)",
          paddingRight: "clamp(16px, 3.125vw, 40px)",
        }}
      >
        {/* Section Heading Row with Horizontal Gradient Divider */}
        {/* Heading: Monschone, 400, Regular, 64px, line-height 100% */}
        {/* HR beside it: 1px solid border-image-source gradient 90deg, width 321px at 1280px, 95px gap below */}
        <div className="w-full flex items-end gap-3 sm:gap-4 mb-[clamp(48px,7.422vw,95px)] select-none">
          <h2
            className="m-0 text-white font-normal whitespace-nowrap"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 64px)", // 64px at 1280px
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Coffee
          </h2>
          <div
            className="h-[1px] shrink-0 mb-[4px] sm:mb-[6px]"
            style={{
              width: "clamp(160px, 25.078vw, 321px)", // 321px at 1280px
              background:
                "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
        </div>

        {/* 3-Column Content Layout: Left Terroir | Center Portrait Botanical | Right Varietals */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-0 select-none">
          {/* Left Column: Terroir Overview (inward right-aligned) */}
          <div className="w-full lg:w-[clamp(240px,25.469vw,326px)] shrink-0 flex flex-col justify-start lg:pt-[clamp(160px,28.438vw,364px)] pr-0 lg:pr-[clamp(12px,1.875vw,24px)]">
            <p
              className="m-0 text-[#DBDBDB] font-normal text-left lg:text-right lg:ml-auto"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.406vw, 18px)", // 18px at 1280px
                lineHeight: "120%",
                letterSpacing: "0%",
                maxWidth: "clamp(260px, 24.219vw, 310px)",
              }}
            >
              Soil, Climate, Sunlight, Vegetation, And Altitude Shape Coffee&apos;s Flavour. This Combination, Called Terroir, Is Key In Single-Origin Coffee From One Farm Or Region, Giving It A Unique, Complex Taste.
            </p>
          </div>

          {/* Center Column: Central Portrait Image of Coffee Plant with Cherries & White Blossoms (479x740 at 1280px) */}
          <div className="shrink-0 flex justify-center">
            <div
              className="relative overflow-hidden shrink-0"
              style={{
                width: "clamp(280px, 37.422vw, 479px)",
                height: "clamp(432px, 57.812vw, 740px)",
                aspectRatio: "479 / 740",
              }}
            >
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/efdeefd5-de98-441d-a37f-ec36eaf44b00/public"
                alt="Coffee Plant with Ripe Cherries and White Blossoms"
                fill
                priority
                unoptimized
                className="object-cover pointer-events-none"
              />
            </div>
          </div>

          {/* Right Column: Two Stacked Varietal & Altitude Factor Blocks (inward left-aligned) */}
          <div className="w-full lg:w-[clamp(260px,30.781vw,394px)] shrink-0 flex flex-col justify-between lg:pt-[clamp(40px,7.656vw,98px)] lg:pb-[clamp(40px,8.281vw,106px)] pl-0 lg:pl-[clamp(16px,2.5vw,32px)] gap-6 lg:gap-0">
            {/* Top Text Block */}
            <div>
              <p
                className="m-0 text-[#DBDBDB] font-normal text-left"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.406vw, 18px)", // 18px at 1280px
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  maxWidth: "clamp(280px, 28.516vw, 365px)",
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
                  fontSize: "clamp(14px, 1.406vw, 18px)", // 18px at 1280px
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  maxWidth: "clamp(280px, 28.516vw, 365px)",
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
      <section
        id="varieties"
        className="w-full flex flex-col justify-center overflow-hidden"
        style={{
          paddingTop: "clamp(48px, 6vw, 90px)",
          paddingBottom: "clamp(48px, 6vw, 90px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Section Heading Row with Line on Left leading to "Varieties" on Right */}
        <div className="w-full flex items-center justify-end mb-10 sm:mb-14 select-none">
          <div className="flex-1 mr-6 sm:mr-8 h-px bg-gradient-to-l from-white/30 via-white/10 to-transparent" />
          <h2
            className="m-0 text-white font-normal whitespace-nowrap"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(32px, 3.8vw, 56px)",
              lineHeight: "100%",
            }}
          >
            Varieties
          </h2>
        </div>

        {/* Content Row: Description on Left, Arabica & Robusta Green Cards on Right */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8 lg:gap-14 select-none mb-14 sm:mb-18">
          {/* Left: Heading & Description */}
          <div className="max-w-[500px]">
            <h3
              className="m-0 text-white font-normal mb-4"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(20px, 2.1vw, 30px)",
                lineHeight: "130%",
              }}
            >
              The Most Common Varieties Of Coffee.
            </h3>
            <p
              className="m-0 text-[#A0A0A0] font-normal leading-[160%]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(13px, 1.05vw, 15px)",
              }}
            >
              Arabica And Robusta Dominate Commercial Coffee Worldwide. Less Common Species Such As Liberica And Excelsa Are Gaining Ground With Specialty Buyers.
            </p>
          </div>

          {/* Right: Two Green Bean Cards (Arabica & Robusta) */}
          <div className="flex items-center gap-5 sm:gap-7 shrink-0">
            {/* Arabica Card */}
            <button
              type="button"
              onClick={() => setActiveSpecies("arabica")}
              className={`flex flex-col items-center gap-2 group cursor-pointer text-left transition-transform duration-300 ${
                activeSpecies === "arabica" ? "scale-105" : "opacity-80 hover:opacity-100"
              }`}
            >
              <div
                className={`rounded-[4px] overflow-hidden border p-3 flex flex-col items-center justify-center transition-all duration-300 ${
                  activeSpecies === "arabica"
                    ? "border-[#48A663] bg-[#163821] shadow-lg shadow-[#163821]/50"
                    : "border-white/10 bg-[#102418] hover:border-white/30"
                }`}
                style={{
                  width: "clamp(110px, 11.5vw, 160px)",
                  height: "clamp(110px, 11.5vw, 160px)",
                }}
              >
                <VisualPlaceholder
                  label="Arabica Bean"
                  sublabel="S-Curve Center Cut"
                  aspectRatio="1/1"
                  theme="green"
                  iconType="beans"
                  className="w-full h-full p-1 border-0 bg-transparent"
                />
              </div>
              <span
                className={`text-[13px] sm:text-[14px] font-medium transition-colors ${
                  activeSpecies === "arabica" ? "text-white" : "text-white/70"
                }`}
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Arabica
              </span>
            </button>

            {/* Robusta Card */}
            <button
              type="button"
              onClick={() => setActiveSpecies("robusta")}
              className={`flex flex-col items-center gap-2 group cursor-pointer text-left transition-transform duration-300 ${
                activeSpecies === "robusta" ? "scale-105" : "opacity-80 hover:opacity-100"
              }`}
            >
              <div
                className={`rounded-[4px] overflow-hidden border p-3 flex flex-col items-center justify-center transition-all duration-300 ${
                  activeSpecies === "robusta"
                    ? "border-[#48A663] bg-[#163821] shadow-lg shadow-[#163821]/50"
                    : "border-white/10 bg-[#102418] hover:border-white/30"
                }`}
                style={{
                  width: "clamp(110px, 11.5vw, 160px)",
                  height: "clamp(110px, 11.5vw, 160px)",
                }}
              >
                <VisualPlaceholder
                  label="Robusta Bean"
                  sublabel="Straight Center Cut"
                  aspectRatio="1/1"
                  theme="green"
                  iconType="beans"
                  className="w-full h-full p-1 border-0 bg-transparent"
                />
              </div>
              <span
                className={`text-[13px] sm:text-[14px] font-medium transition-colors ${
                  activeSpecies === "robusta" ? "text-white" : "text-white/70"
                }`}
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Robusta
              </span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            SECTION 4: SPECIES DEEP-DIVE BANNER (ARABICA / ROBUSTA INTERACTIVE)
            ========================================================================= */}
        <div className="w-full select-none">
          {/* Header Row above the banner */}
          <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-3 border-b border-white/10">
            {/* Species Badge */}
            <div className="flex items-center gap-2.5">
              <span className="text-[#48A663] text-lg font-bold">☕</span>
              <h4
                className="m-0 text-white font-medium text-[18px] sm:text-[20px]"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {activeSpecies === "arabica" ? "Arabica" : "Robusta"}
              </h4>
            </div>

            {/* Description quote */}
            <p
              className="m-0 text-[#B5B5B5] max-w-[620px] text-[12px] sm:text-[13.5px] leading-[150%]"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              {activeSpecies === "arabica"
                ? "Coffee Arabica Is Descended From The Original Coffee Trees Discovered In Ethiopia. These Trees Produce Fine, Mild, Aromatic Coffees That Bring The Highest Prices On The World Market."
                : "Coffea Canephora (Robusta) is hardy, high-yielding, and native to central and western sub-Saharan Africa. It produces bold, full-bodied coffee with almost double the caffeine of Arabica and exceptional crema density."}
            </p>
          </div>

          {/* Large Dual-Panel Green Feature Banner */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 rounded-[4px] border border-[#274B35]/60 overflow-hidden bg-[#112418] shadow-2xl">
            {/* Left Panel: Macro Botanical Photography with Chemical Molecular Line Art Overlay */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[360px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1B3E29] to-[#0A170F]">
              {/* Chemical Structure Line Overlay (HO, CO2H, OH caffeine bonds) */}
              <div className="absolute inset-0 opacity-25 pointer-events-none flex items-center justify-center p-4">
                <svg
                  className="w-full h-full max-w-[340px]"
                  viewBox="0 0 200 160"
                  fill="none"
                  stroke="#48A663"
                  strokeWidth={1.5}
                >
                  <polygon points="100,20 140,43 140,89 100,112 60,89 60,43" />
                  <polygon points="140,43 180,66 180,112 140,89" />
                  <line x1="60" y1="89" x2="30" y2="106" />
                  <line x1="100" y1="112" x2="100" y2="140" />
                  <text x="20" y="120" fill="#48A663" fontSize="10" fontFamily="sans-serif">
                    HO
                  </text>
                  <text x="95" y="155" fill="#48A663" fontSize="10" fontFamily="sans-serif">
                    CO₂H
                  </text>
                  <text x="175" y="60" fill="#48A663" fontSize="10" fontFamily="sans-serif">
                    OH
                  </text>
                  <text x="50" y="30" fill="#48A663" fontSize="10" fontFamily="sans-serif">
                    CH₃
                  </text>
                </svg>
              </div>

              {/* Placeholder Label inside */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/40 border border-white/10 w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#48A663] animate-pulse" />
                  <span className="text-[11px] uppercase tracking-wider text-white/70">
                    Phytochemical Terroir Analysis
                  </span>
                </div>

                <div className="mt-20">
                  <span className="text-white text-base sm:text-lg font-medium block">
                    {activeSpecies === "arabica"
                      ? "Coffea Arabica Foliage & Ripe Clusters"
                      : "Coffea Canephora Dense Yield Stems"}
                  </span>
                  <span className="text-white/60 text-xs">
                    Natural trigonelline, chlorogenic acid & sucrose molecular composition
                  </span>
                </div>
              </div>
            </div>

            {/* Right Panel: Varieties list & Worldwide production stat */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-b from-[#13281B] to-[#0A160F] border-t lg:border-t-0 lg:border-l border-[#274B35]/40">
              {/* Popular Varieties Sub-block */}
              <div>
                <span
                  className="text-white/60 text-xs uppercase tracking-widest block mb-2"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  Popular Varieties
                </span>
                <p
                  className="m-0 text-white text-base sm:text-lg font-medium"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  {activeSpecies === "arabica"
                    ? "Bourbon, Caturra, Geisha, Yirgacheffe, Typica"
                    : "Conilon, Java, Nana, Kouillou, Niaouli"}
                </p>
              </div>

              {/* Big Stat Callout Block */}
              <div className="mt-8 sm:mt-12 pt-6 border-t border-white/10">
                <span
                  className="text-white/60 text-xs uppercase tracking-widest block mb-2"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  Percentage Of Coffee Produced Globally
                </span>
                <p className="m-0 text-white">
                  <span className="text-sm text-white/80 mr-2 font-normal">
                    Approximately
                  </span>
                  <span
                    className="font-bold text-3xl sm:text-4xl text-[#48A663] mr-2"
                    style={{ fontFamily: "var(--font-monschone), serif" }}
                  >
                    {activeSpecies === "arabica" ? "57%" : "43%"}
                  </span>
                  <span className="text-sm text-white/80 font-normal">
                    Of The World&apos;s Coffee Production*
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Slider Arrow Controls */}
          <div className="w-full flex items-center justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() =>
                setActiveSpecies(activeSpecies === "arabica" ? "robusta" : "arabica")
              }
              aria-label="Previous Species"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all cursor-pointer"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveSpecies(activeSpecies === "arabica" ? "robusta" : "arabica")
              }
              aria-label="Next Species"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all cursor-pointer"
            >
              &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: KNOW YOUR ROASTS & DEGREE SPECTRUM
          ========================================================================= */}
      <section
        id="roasts"
        className="w-full flex flex-col justify-center overflow-hidden"
        style={{
          paddingTop: "clamp(56px, 7vw, 110px)",
          paddingBottom: "clamp(56px, 7vw, 110px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Section Heading Row with horizontal line */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-14 select-none">
          <div className="flex items-center flex-1">
            <h2
              className="m-0 text-white font-normal whitespace-nowrap"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "clamp(30px, 3.6vw, 54px)",
                lineHeight: "100%",
              }}
            >
              Know your roasts
            </h2>
            <div className="flex-1 ml-6 sm:ml-8 h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent" />
          </div>

          {/* Right Sub-narrative */}
          <p
            className="m-0 text-[#A0A0A0] text-left sm:text-right text-[12px] sm:text-[13.5px] max-w-[420px] leading-[150%]"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            There Is No Single Perfect Roast, Only The Right One For Your Guest And Your Menu. Three Things Are Worth Knowing
          </p>
        </div>

        {/* Panoramic Roast Gradient Asset Banner */}
        <div
          className="w-full rounded-[2px] overflow-hidden shadow-2xl border border-white/10 select-none mb-6"
          style={{
            aspectRatio: "21/6",
            minHeight: "clamp(180px, 20vw, 320px)",
          }}
        >
          <VisualPlaceholder
            label="Asset Placeholder: Coffee Bean Roast Spectrum Gradient"
            sublabel="Panoramic spectrum of roasted beans transitioning seamlessly from pitch-black French/Italian roast on left, to chocolate Vienna/City roast in middle, to cinnamon light roast on right"
            theme="roast"
            iconType="beans"
            className="h-full border-0 bg-gradient-to-r from-[#0C0604] via-[#3D1E10] to-[#9E6C47]"
          />
        </div>

        {/* Roast Spectrum Selector Bar & Tabs */}
        <div className="w-full flex flex-col items-center gap-5 select-none mb-14 sm:mb-18">
          {/* Continuous gradient horizontal slider indicator */}
          <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-[#1A0A05] via-[#A85A2A] to-[#D6B086] relative">
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg border-2 border-black transition-all duration-300"
              style={{
                left:
                  activeRoast === "dark"
                    ? "16%"
                    : activeRoast === "medium"
                    ? "50%"
                    : "84%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* 3 Pills: Dark Roast | Medium Roast | Light Roast */}
          <div className="flex items-center justify-between w-full max-w-[800px] gap-3">
            <button
              type="button"
              onClick={() => setActiveRoast("dark")}
              className={`px-4 sm:px-6 py-2 rounded-full border text-[11px] sm:text-[13px] font-medium tracking-wide transition-all cursor-pointer ${
                activeRoast === "dark"
                  ? "border-white bg-white/15 text-white"
                  : "border-white/20 text-white/60 hover:text-white hover:border-white/40"
              }`}
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Dark Roast Coffee
            </button>

            <button
              type="button"
              onClick={() => setActiveRoast("medium")}
              className={`px-4 sm:px-6 py-2 rounded-full border text-[11px] sm:text-[13px] font-medium tracking-wide transition-all cursor-pointer ${
                activeRoast === "medium"
                  ? "border-white bg-white/15 text-white"
                  : "border-white/20 text-white/60 hover:text-white hover:border-white/40"
              }`}
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Medium Roast Coffee
            </button>

            <button
              type="button"
              onClick={() => setActiveRoast("light")}
              className={`px-4 sm:px-6 py-2 rounded-full border text-[11px] sm:text-[13px] font-medium tracking-wide transition-all cursor-pointer ${
                activeRoast === "light"
                  ? "border-white bg-white/15 text-white"
                  : "border-white/20 text-white/60 hover:text-white hover:border-white/40"
              }`}
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Light Roast Coffee
            </button>
          </div>
        </div>

        {/* 2 Circular Highlight Cards: Light Roast & Medium Roast */}
        <div className="w-full flex flex-col select-none mb-14 sm:mb-18">
          <h3
            className="m-0 text-white font-normal text-center mb-10"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(20px, 2.2vw, 32px)",
            }}
          >
            The Most Common Varieties Of Coffee.
          </h3>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center max-w-[1100px] mx-auto">
            {/* Light Roast Detail Card */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-[2px] bg-neutral-950 border border-white/10">
              <p
                className="m-0 text-[#C4C4C4] text-[12px] sm:text-[13.5px] leading-[160%] flex-1"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Light Brown With A Subtle Roasted Taste, Suited To Milder Cups. It Yields The Most Acidic Coffee. The Beans Have A Matte Surface Because The Oils Stay Inside.
              </p>
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-amber-200/30 shadow-xl">
                  <VisualPlaceholder
                    label="Light Roast"
                    aspectRatio="1/1"
                    theme="roast"
                    iconType="beans"
                    className="p-1 border-0 bg-gradient-to-br from-[#966743] to-[#5C391E]"
                  />
                </div>
                <span
                  className="text-[11px] sm:text-[12px] text-white/70"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  Light Roast Coffee
                </span>
              </div>
            </div>

            {/* Medium Roast Detail Card */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-[2px] bg-neutral-950 border border-white/10">
              <div className="flex flex-col items-center gap-2 shrink-0 order-2 sm:order-1">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-amber-600/30 shadow-xl">
                  <VisualPlaceholder
                    label="Medium Roast"
                    aspectRatio="1/1"
                    theme="roast"
                    iconType="beans"
                    className="p-1 border-0 bg-gradient-to-br from-[#5E3219] to-[#261208]"
                  />
                </div>
                <span
                  className="text-[11px] sm:text-[12px] text-white/70"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  Medium Roast Coffee
                </span>
              </div>
              <p
                className="m-0 text-[#C4C4C4] text-[12px] sm:text-[13.5px] leading-[160%] flex-1 order-1 sm:order-2"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Medium Brown With A Stronger Flavour And A Non-Oily Surface. Often Called &quot;American Roast&quot; Or The Breakfast Blend. It Is The Safest Crowd-Pleaser For High-Footfall Spaces.
              </p>
            </div>
          </div>
        </div>

        {/* Full-bleed Dark Roast Banner */}
        <div className="w-full flex flex-col select-none">
          <div
            className="w-full rounded-[2px] overflow-hidden shadow-2xl border border-white/10 mb-4"
            style={{
              aspectRatio: "21/8",
              minHeight: "clamp(220px, 24vw, 360px)",
            }}
          >
            <VisualPlaceholder
              label="Asset Placeholder: Glistening Dark Roast Coffee Beans"
              sublabel="Close-up of deep charcoal-brown roasted coffee beans with glistening natural lipid oils and dark French/Italian sheen"
              theme="coffee"
              iconType="beans"
              className="h-full border-0 bg-gradient-to-b from-[#1C0E07] via-[#0D0603] to-black"
            />
          </div>
          <p
            className="m-0 text-[#B0B0B0] text-[12px] sm:text-[13.5px] leading-[160%] max-w-[1000px]"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            <strong className="text-white font-medium">Dark Roast Coffee</strong> &ndash; Shiny Black Beans With An Oily Surface And Pronounced Bitterness. It Is The Least Acidic Of The Three. Dark Roasts Range From Slightly Dark To Charred, And The Names Are Often Used Interchangeably.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: DISCOVER YOUR PERFECT TEA BANNER
          ========================================================================= */}
      <section
        id="tea"
        className="w-full flex flex-col justify-center overflow-hidden"
        style={{
          paddingTop: "clamp(48px, 6vw, 90px)",
          paddingBottom: "clamp(48px, 6vw, 90px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        <div
          className="relative w-full rounded-[2px] overflow-hidden shadow-2xl border border-[#274B35]/50 flex flex-col justify-end p-8 sm:p-12 lg:p-16 select-none bg-gradient-to-b from-[#1A3826] via-[#102418] to-[#08120C]"
          style={{
            aspectRatio: "21/9",
            minHeight: "clamp(300px, 34vw, 540px)",
          }}
        >
          {/* Background Topographic Mountain Estate Texture */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
              fill="none"
              stroke="#48A663"
              strokeWidth={1}
            >
              <path d="M0,150 Q250,90 500,160 T1000,120" />
              <path d="M0,220 Q250,180 500,240 T1000,200" />
              <path d="M0,300 Q250,270 500,320 T1000,290" />
              <path d="M0,380 Q250,350 500,400 T1000,370" />
            </svg>
          </div>

          {/* Center Teacup on Saucer Placeholder Graphic */}
          <div className="relative z-10 flex flex-col items-center text-center mx-auto my-auto py-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-red-500/40 bg-gradient-to-br from-[#8A2B1A] to-[#40120B] shadow-2xl flex items-center justify-center mb-6">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border border-amber-300/30 bg-gradient-to-tr from-[#A8321D] to-[#E05C38] flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white/20 blur-[1px]" />
              </div>
            </div>

            <h2
              className="m-0 text-white font-normal"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "clamp(28px, 3.4vw, 48px)",
                lineHeight: "110%",
                textShadow: "0 2px 10px rgba(0,0,0,0.6)",
              }}
            >
              Discover Your Perfect Tea
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: TEA PROCESSING - CONTROLLED DEHYDRATION & OXIDATION
          ========================================================================= */}
      <section
        id="tea-processing"
        className="w-full flex flex-col justify-center overflow-hidden"
        style={{
          paddingTop: "clamp(48px, 6vw, 90px)",
          paddingBottom: "clamp(48px, 6vw, 90px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Heading Row with horizontal line leading to "Tea Processing" on right */}
        <div className="w-full flex items-center justify-end mb-8 sm:mb-12 select-none">
          <div className="flex-1 mr-6 sm:mr-8 h-px bg-gradient-to-l from-white/30 via-white/10 to-transparent" />
          <h2
            className="m-0 text-white font-normal whitespace-nowrap"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(30px, 3.6vw, 54px)",
              lineHeight: "100%",
            }}
          >
            Tea Processing
          </h2>
        </div>

        {/* Narrative Intro */}
        <div className="w-full max-w-[820px] mb-10 sm:mb-14 select-none">
          <h3
            className="m-0 text-white font-normal text-[16px] sm:text-[18px] mb-3"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Tea Processing Is Just Controlled Dehydration And Oxidation.
          </h3>
          <p
            className="m-0 text-[#A0A0A0] text-[13px] sm:text-[14.5px] leading-[160%]"
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
                style={{ fontFamily: "var(--font-monschone), serif" }}
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
      <section
        id="tea-ritual"
        className="w-full flex justify-center overflow-hidden"
        style={{
          paddingTop: "clamp(32px, 4vw, 64px)",
          paddingBottom: "clamp(48px, 6vw, 90px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        <div
          className="w-full rounded-[2px] overflow-hidden shadow-2xl border border-white/10 select-none"
          style={{
            aspectRatio: "21/8",
            minHeight: "clamp(260px, 28vw, 460px)",
          }}
        >
          <VisualPlaceholder
            label="Asset Placeholder: Amber Teacup on Open Botanical Volume"
            sublabel="A fluted amber glass cup filled with steaming golden tea, resting on an open book in warm natural morning sunlight with dried tea herbs"
            theme="roast"
            iconType="cup"
            className="h-full border-0 bg-gradient-to-r from-[#3B1E12] via-[#5C2E17] to-[#1F0E08]"
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: VARIETY OF TEAS - 2X2 CARD SPREAD
          ========================================================================= */}
      <section
        id="variety-of-teas"
        className="w-full flex flex-col justify-center overflow-hidden"
        style={{
          paddingTop: "clamp(48px, 6vw, 90px)",
          paddingBottom: "clamp(64px, 8vw, 120px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Section Heading Row with Horizontal Divider */}
        <div className="w-full flex items-center mb-10 sm:mb-14 select-none">
          <h2
            className="m-0 text-white font-normal whitespace-nowrap"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(30px, 3.6vw, 54px)",
              lineHeight: "100%",
            }}
          >
            Variety of Teas
          </h2>
          <div className="flex-1 ml-6 sm:ml-8 h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent" />
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

