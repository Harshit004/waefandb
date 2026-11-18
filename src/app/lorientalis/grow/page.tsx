"use client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import LOrientalisHeader from "@/components/LOrientalisHeader";
import LOrientalisFooter from "@/components/LOrientalisFooter";

export default function LorientalisGrowPage() {
  // State for Hero Background Carousel in Section 1
  // After delay: 800ms, Smart animate with Spring: { mass: 1, stiffness: 56.64, damping: 11.29 }
  const [heroIndex, setHeroIndex] = useState<number>(0);
  const [isHeroTransitioning, setIsHeroTransitioning] = useState<boolean>(true);

  const heroSlides = [
    {
      src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/94da132b-c938-49ac-0ed3-1e2015466d00/public",
      alt: "L'Orientalis Grow - Slide 1",
    },
    {
      src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3f3f97fb-9d1f-4ec5-8a18-daf7d15d8c00/public",
      alt: "L'Orientalis Grow - Slide 2",
    },
    {
      src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cfec52da-0073-415c-c87a-31256b04ab00/public",
      alt: "L'Orientalis Grow - Slide 3",
    },
    {
      src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/94da132b-c938-49ac-0ed3-1e2015466d00/public",
      alt: "L'Orientalis Grow - Slide 1 (Loop Clone)",
    },
  ];

  // State for Varieties Carousel in Section 3
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  // State for Tea Processing Carousel in Section 7
  const [teaCarouselIndex, setTeaCarouselIndex] = useState<number>(0);

  const teaCarouselCards = [
    {
      title: "Plucking",
      src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6be53395-3d41-48b2-7f85-f649fe63bb00/public",
      alt: "Tea Processing Step 1: Plucking",
    },
    {
      title: "Withering & Rolling",
      src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f8309fa5-4306-4291-4e84-10504334ec00/public",
      alt: "Tea Processing Step 2: Withering & Rolling",
    },
    {
      title: "Oxidation",
      src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/00120c15-7f88-4cee-15bc-2b2f090dde00/public",
      alt: "Tea Processing Step 3: Oxidation",
    },
    {
      title: "Firing & Sorting",
      src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/932a60a4-e676-4b9e-9352-93e9a70b4600/public",
      alt: "Tea Processing Step 4: Firing & Sorting",
    },
  ];

  // Preload all carousel and key images immediately to eliminate blank gap / flash
  const carouselPreloadUrls = [
    // Hero carousel slides
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/94da132b-c938-49ac-0ed3-1e2015466d00/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3f3f97fb-9d1f-4ec5-8a18-daf7d15d8c00/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cfec52da-0073-415c-c87a-31256b04ab00/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/64a6dc17-fe78-4a88-e444-ba509b264e00/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6505f8ad-dade-44b8-383e-7e6acc0e4700/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6be53395-3d41-48b2-7f85-f649fe63bb00/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f8309fa5-4306-4291-4e84-10504334ec00/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/00120c15-7f88-4cee-15bc-2b2f090dde00/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/932a60a4-e676-4b9e-9352-93e9a70b4600/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/19a872e6-ab1a-4e13-5418-e4696516b200/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1b7c6f5b-d55b-4628-bb7f-e298bf350000/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f49876c7-d404-49ce-ae41-96eafae25100/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1817607b-7d3f-40fd-240b-00e7494aa000/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a1889dbf-09ab-4d34-ff69-72146f980600/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ee6b4282-18d0-4e52-bcb4-4dea1cc54500/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ae223981-b9eb-4ef8-192b-2e0d1b6f6f00/public",
  ];

  carouselPreloadUrls.forEach((url) => {
    ReactDOM.preload(url, { as: "image" });
  });

  useEffect(() => {
    carouselPreloadUrls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
    });
  }, []);

  // Auto-advancing Hero Carousel:
  // 2 seconds per frame
  // Change to: "next frame";
  // Animate: Smart animate; Spring: { mass: 1, stiffness: 56.64, damping: 11.29 };
  useEffect(() => {
    if (!isHeroTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsHeroTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }

    // When reaching the loop clone (last slide), snap back to 0 without transition after spring settles (950ms)
    if (heroIndex === heroSlides.length - 1) {
      const snapTimer = setTimeout(() => {
        setIsHeroTransitioning(false);
        setHeroIndex(0);
      }, 950);
      return () => clearTimeout(snapTimer);
    }

    // Delay: 2000ms (2s) on first mount / after snap, or 950ms transition + 2000ms delay (2950ms) on subsequent frames
    const delay = heroIndex === 0 ? 2000 : 2950;
    const timer = setTimeout(() => {
      setHeroIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [heroIndex, isHeroTransitioning, heroSlides.length]);

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

        {/* HERO ARTWORK CAROUSEL LAYER: Spans end-to-end top-to-bottom left-to-right with Smart Animate spring physics */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
          <div
            id="hero-carousel-track"
            className="flex w-full h-full"
            style={{
              transform: `translateX(-${heroIndex * 100}%)`,
              transition: isHeroTransitioning
                ? "transform 950ms linear(0, 0.0585 5%, 0.1924 10%, 0.355 15%, 0.5164 20%, 0.6599 25%, 0.7778 30%, 0.8687 35%, 0.9344 40%, 0.9788 45%, 1.0063 50%, 1.0212 55%, 1.0275 60%, 1.0281 65%, 1.0254 70%, 1.0212 75%, 1.0165 80%, 1.0121 85%, 1.0083 90%, 1.0052 95%, 1 100%)"
                : "none",
              willChange: "transform",
            }}
          >
            {heroSlides.map((slide, idx) => (
              <div key={idx} className="w-full h-full relative shrink-0">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  unoptimized
                  className="object-cover object-center pointer-events-none"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                />
              </div>
            ))}
          </div>
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
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                    }}
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
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                    }}
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
                unoptimized
                sizes="(max-width: 768px) 100vw, 862px"
                className="object-cover pointer-events-none"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
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
              The Most Common Varieties Of Coffee.
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
              Arabica And Robusta Dominate Commercial Coffee Worldwide. Less Common Species Such As Liberica And Excelsa Are Gaining Ground With Specialty Buyers.
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
                  unoptimized
                  sizes="(max-width: 768px) 50vw, 515px"
                  className="object-cover pointer-events-none"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
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
                  unoptimized
                  sizes="(max-width: 768px) 50vw, 515px"
                  className="object-cover pointer-events-none"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
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
        <div
          className="relative select-none overflow-hidden"
          style={{
            marginLeft: "calc(-1 * clamp(16px, 3.125vw, 75px))",
            marginRight: "calc(-1 * clamp(16px, 3.125vw, 75px))",
            width: "calc(100% + 2 * clamp(16px, 3.125vw, 75px))",
          }}
        >
          {/* Slides Track with smooth translation */}
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-[clamp(20px,2.5vw,54px)]"
              style={{
                transform:
                  carouselIndex === 0
                    ? "translateX(clamp(16px, 3.125vw, 75px))"
                    : "translateX(calc(100vw - clamp(16px, 3.125vw, 75px) - (2 * clamp(300px, 90.938vw, 2095px) + clamp(20px, 2.5vw, 54px))))",
              }}
            >
              {/* SLIDE 1: ARABICA */}
              <div
                className="shrink-0 flex flex-col"
                style={{
                  width: "clamp(300px, 90.938vw, 2095px)",
                }}
              >
                {/* Slide 1 Image (1164x595 at 1280px, maintaining ratio) */}
                <div
                  className="relative overflow-hidden rounded-[4px] w-full bg-[#18261C]"
                  style={{
                    aspectRatio: "1164 / 595",
                  }}
                >
                  <Image
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/64a6dc17-fe78-4a88-e444-ba509b264e00/public"
                    alt="Arabica Botanical and Chemical Terroir Slide"
                    fill
                    priority
                    loading="eager"
                    unoptimized
                    sizes="(max-width: 1280px) 100vw, 2095px"
                    className="object-cover"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                    }}
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
                {/* Slide 2 Image (1164x595 at 1280px, maintaining ratio) */}
                <div
                  className="relative overflow-hidden rounded-[4px] w-full bg-[#18261C]"
                  style={{
                    aspectRatio: "1164 / 595",
                  }}
                >
                  <Image
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6505f8ad-dade-44b8-383e-7e6acc0e4700/public"
                    alt="Robusta Botanical and Chemical Terroir Slide"
                    fill
                    priority
                    loading="eager"
                    unoptimized
                    sizes="(max-width: 1280px) 100vw, 2095px"
                    className="object-cover"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                    }}
                  />
                </div>
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
            There Is No Single Perfect Roast, Only The Right One For Your Guest And Your Menu. Three Things Are Worth Knowing.
          </p>
        </div>

        {/* 1200x400 Panoramic Roast Spectrum Image (maintaining 1200/400 ratio) */}
        <div
          className="relative w-full overflow-hidden rounded-[2px] select-none"
          style={{
            aspectRatio: "1200 / 400",
          }}
        >
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c0aa6785-736b-407a-d36b-2daff6ea3f00/public"
            alt="Coffee Bean Roast Spectrum: Dark Roast to Light Roast"
            fill
            sizes="(max-width: 1280px) 100vw, 2160px"
            priority
            unoptimized
            className="object-cover pointer-events-none"
            style={{
              imageRendering: "-webkit-optimize-contrast",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          />
        </div>

        {/* 25px gap at 1280px */}
        <div className="h-[clamp(16px,1.953vw,45px)]" />

        {/* Static Roast Indicator Bar */}
        <div className="w-full select-none">
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

        {/* Varieties Row: Light Roast & Medium Roast with green background ONLY around text (90% circle height, vertically centered) */}
        <div
          className="w-[calc(100%+2*clamp(16px,3.125vw,75px))] -mx-[clamp(16px,3.125vw,75px)] select-none"
        >
          <div
            className="w-full flex flex-col lg:flex-row items-center justify-between relative"
            style={{
              paddingBottom: "calc(clamp(10px, 1.172vw, 24px) + clamp(13px, 1.25vw, 24px) * 1.2)",
            }}
          >
            {/* Left Column: Green Text Box (Light Roast) */}
            <div
              className="w-full lg:flex-1 relative flex items-center justify-start z-0 py-4 lg:py-0"
              style={{
                minHeight: "clamp(135px, 16.313vw, 324px)", // 90% of 232px circle = 208.8px at 1280px
              }}
            >
              <div className="variety-box-left-bg" />
              <div
                className="relative z-10 w-full"
                style={{
                  paddingLeft: "clamp(16px, 3.125vw, 75px)",
                  paddingRight: "clamp(16px, 2.5vw, 40px)",
                }}
              >
                <p
                  className="m-0 text-[#D5D5D5] text-left max-w-[clamp(260px,24vw,520px)]"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px
                    lineHeight: "120%",
                    letterSpacing: "0%",
                  }}
                >
                  Light Brown With A Subtle Roasted Taste, Suited To Milder Cups. It Yields The Most Acidic Coffee. The Beans Have A Matte Surface Because The Oils Stay Inside.
                </p>
              </div>
            </div>

            {/* Center: Two Circles 232x232 with Labels below */}
            <div className="flex items-center justify-center gap-[clamp(20px,4.375vw,80px)] shrink-0 z-10 relative my-6 lg:my-0">
              {/* Circle 1: Light Roast */}
              <div className="relative flex flex-col items-center">
                <div
                  className="rounded-full shrink-0 shadow-2xl transition-transform hover:scale-[1.02] relative overflow-hidden"
                  style={{
                    width: "clamp(150px, 18.125vw, 360px)", // 232px at 1280px
                    height: "clamp(150px, 18.125vw, 360px)",
                    aspectRatio: "1 / 1",
                    backgroundColor: "#000000",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Image
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ee6b4282-18d0-4e52-bcb4-4dea1cc54500/public"
                    alt="Light Roast Coffee"
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 1280px) 232px, 360px"
                    className="object-cover pointer-events-none"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                    }}
                  />
                </div>
                <span
                  className="absolute top-full mt-[clamp(10px,1.172vw,24px)] text-[#D5D5D5] text-center whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(13px, 1.25vw, 24px)", // 16px at 1280px
                    lineHeight: "120%",
                    letterSpacing: "0%",
                  }}
                >
                  Light Roast Coffee
                </span>
              </div>

              {/* Circle 2: Medium Roast */}
              <div className="relative flex flex-col items-center">
                <div
                  className="rounded-full shrink-0 shadow-2xl transition-transform hover:scale-[1.02] relative overflow-hidden"
                  style={{
                    width: "clamp(150px, 18.125vw, 360px)", // 232px at 1280px
                    height: "clamp(150px, 18.125vw, 360px)",
                    aspectRatio: "1 / 1",
                    backgroundColor: "#000000",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Image
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ae223981-b9eb-4ef8-192b-2e0d1b6f6f00/public"
                    alt="Medium Roast Coffee"
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 1280px) 232px, 360px"
                    className="object-cover pointer-events-none"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                    }}
                  />
                </div>
                <span
                  className="absolute top-full mt-[clamp(10px,1.172vw,24px)] text-[#D5D5D5] text-center whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(13px, 1.25vw, 24px)", // 16px at 1280px
                    lineHeight: "120%",
                    letterSpacing: "0%",
                  }}
                >
                  Medium Roast Coffee
                </span>
              </div>
            </div>

            {/* Right Column: Green Text Box (Medium Roast) */}
            <div
              className="w-full lg:flex-1 relative flex items-center justify-end z-0 py-4 lg:py-0"
              style={{
                minHeight: "clamp(135px, 16.313vw, 324px)", // 90% of 232px circle = 208.8px at 1280px
              }}
            >
              <div className="variety-box-right-bg" />
              <div
                className="relative z-10 w-full flex justify-end"
                style={{
                  paddingRight: "clamp(16px, 3.125vw, 75px)",
                  paddingLeft: "clamp(16px, 2.5vw, 40px)",
                }}
              >
                <p
                  className="m-0 text-[#D5D5D5] text-right max-w-[clamp(260px,24vw,520px)]"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px
                    lineHeight: "120%",
                    letterSpacing: "0%",
                  }}
                >
                  Medium Brown With A Stronger Flavour And A Non-Oily Surface. Often Called &quot;American Roast&quot; Or The Breakfast Blend, It Is The Safest Crowd-Pleaser For High-Footfall Spaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 114px gap after roast labels */}
        <div className="h-[clamp(65px,8.906vw,160px)] select-none" />

        {/* Dark Roast Section with 1200x347 Image and Gradient Background */}
        <div className="relative w-full flex flex-col select-none">
          {/* Gradient background starting at 50% of image height and extending behind the text */}
          <div className="dark-roast-gradient-bg" />

          {/* 1200x347 Dark Roast Image */}
          <div
            className="relative w-full overflow-hidden rounded-[2px] shadow-2xl z-10"
            style={{
              aspectRatio: "1200 / 347",
            }}
          >
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/19a872e6-ab1a-4e13-5418-e4696516b200/public"
              alt="Glistening Dark Roast Coffee Beans"
              fill
              unoptimized
              priority
              sizes="(max-width: 1280px) 100vw, 2160px"
              className="object-cover pointer-events-none"
              style={{
                imageRendering: "-webkit-optimize-contrast",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            />
          </div>

          {/* 54px gap below image */}
          <div className="h-[clamp(30px,4.219vw,80px)]" />

          {/* Dark Roast Narrative Text */}
          <div className="relative z-10 w-full">
            <p
              className="m-0 select-none"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                }}
              >
                Dark Roast Coffee
              </span>
              <span
                className="text-[#D5D5D5]"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 500,
                  textTransform: "capitalize",
                }}
              >
                {" "}&ndash; Shiny Black Beans With An Oily Surface And Pronounced Bitterness. It Is The Least Acidic Of The Three. Dark Roasts Range From Slightly Dark To Charred, And The Names Are Often Used Interchangeably.
              </span>
            </p>
          </div>
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
            unoptimized
            className="object-cover pointer-events-none"
            style={{
              imageRendering: "-webkit-optimize-contrast",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
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
        {/* 64px gap after title: clamp(28px, 5vw, 115px) */}
        <div
          className="w-full flex items-start justify-end select-none"
          style={{
            marginBottom: "clamp(28px, 5vw, 115px)",
          }}
        >
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

        {/* Narrative Block with 1 line gap, justified, Title Case, #D5D5D5 */}
        {/* 100px gap below narrative: clamp(44px, 7.813vw, 180px) */}
        <div
          className="w-full select-none"
          style={{
            marginBottom: "clamp(44px, 7.813vw, 180px)",
          }}
        >
          <p
            className="m-0"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px
              lineHeight: "120%",
              letterSpacing: "0%",
              textAlign: "justify",
              color: "#D5D5D5",
              marginBottom: "1.2em", // 1 line gap
            }}
          >
            Tea Processing Is Just Controlled Dehydration And Oxidation.
          </p>
          <p
            className="m-0"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px
              lineHeight: "120%",
              letterSpacing: "0%",
              textAlign: "justify",
              color: "#D5D5D5",
            }}
          >
            All Teas Come From A Single Plant Species: Camellia Sinensis. Whether That Harvest Ends Up As A Crisp Green, A Roasty Oolong, Or A Heavy Black Tea Comes Down To How Much Heat, Air, And Pressure Workers Apply To The Leaf.
          </p>
        </div>

        {/* =========================================================================
            TEA PROCESSING CAROUSEL (719x524 cards, 116px gap at 1280px)
            ========================================================================= */}
        <div
          className="relative select-none overflow-hidden"
          style={{
            marginLeft: "calc(-1 * clamp(16px, 3.125vw, 75px))",
            marginRight: "calc(-1 * clamp(16px, 3.125vw, 75px))",
            width: "calc(100% + 2 * clamp(16px, 3.125vw, 75px))",
          }}
        >
          {/* Slides Track with smooth translation */}
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-[clamp(16px,9.063vw,208px)]"
              style={{
                transform:
                  teaCarouselIndex === 0
                    ? "translateX(clamp(16px, 3.125vw, 75px))"
                    : teaCarouselIndex === 1
                      ? "translateX(calc(clamp(16px, 3.125vw, 75px) - 1 * (clamp(280px, 56.172vw, 1295px) + clamp(16px, 9.063vw, 208px))))"
                      : teaCarouselIndex === 2
                        ? "translateX(calc(clamp(16px, 3.125vw, 75px) - 2 * (clamp(280px, 56.172vw, 1295px) + clamp(16px, 9.063vw, 208px))))"
                        : "translateX(calc(100vw - clamp(16px, 3.125vw, 75px) - (4 * clamp(280px, 56.172vw, 1295px) + 3 * clamp(16px, 9.063vw, 208px))))",
              }}
            >
              {teaCarouselCards.map((card, idx) => (
                <div
                  key={card.alt}
                  onClick={() => setTeaCarouselIndex(idx)}
                  className="shrink-0 flex flex-col cursor-pointer"
                  style={{
                    width: "clamp(280px, 56.172vw, 1295px)",
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-[4px] w-full bg-[#162319]"
                    style={{
                      aspectRatio: "719 / 524",
                    }}
                  >
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      unoptimized
                      priority
                      loading="eager"
                      sizes="(max-width: 1280px) 60vw, 1295px"
                      className="object-cover"
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows (same as coffee carousel: 24x24, 30px apart, 77px gap above) */}
        <div className="w-full flex items-center justify-end mt-[clamp(36px,6.016vw,138px)] gap-[clamp(20px,2.344vw,54px)]">
          {/* Left / Previous Arrow */}
          <button
            type="button"
            onClick={() => setTeaCarouselIndex((prev) => Math.max(0, prev - 1))}
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
                stroke={teaCarouselIndex > 0 ? "#FFFFFF" : "#383636"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Right / Next Arrow */}
          <button
            type="button"
            onClick={() => setTeaCarouselIndex((prev) => Math.min(3, prev + 1))}
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
                stroke={teaCarouselIndex < 3 ? "#FFFFFF" : "#383636"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
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
            unoptimized
            className="object-cover pointer-events-none"
            style={{
              imageRendering: "-webkit-optimize-contrast",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
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

        {/* Variety of Teas: Two Rows with green background ONLY around text (90% circle height, vertically centered) */}
        <div className="w-full flex flex-col gap-[clamp(48px,9.375vw,150px)] select-none">
          {/* ROW 1: Green Tea & CTC Tea */}
          <div className="w-[calc(100%+2*clamp(16px,3.125vw,75px))] -mx-[clamp(16px,3.125vw,75px)]">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between relative pb-[clamp(24px,2.5vw,48px)]">
              {/* Green Tea Narrative (Left Green Box) */}
              <div
                className="w-full lg:flex-1 relative flex items-center justify-start z-0 py-4 lg:py-0"
                style={{
                  minHeight: "clamp(135px, 16.313vw, 324px)", // 90% of 232px circle = 208.8px at 1280px
                }}
              >
                <div className="variety-box-left-bg" />
                <div
                  className="relative z-10 w-full"
                  style={{
                    paddingLeft: "clamp(16px, 3.125vw, 75px)",
                    paddingRight: "clamp(16px, 2.5vw, 40px)",
                  }}
                >
                  <p
                    className="m-0 text-[#D5D5D5] text-left max-w-[clamp(260px,24vw,520px)]"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px
                      lineHeight: "120%",
                      letterSpacing: "0%",
                    }}
                  >
                    Unoxidised, Because Heat Is Applied Early To Halt The Enzymes. Fresh, Grassy And Light, With A Clean Finish. A Strong Fit For Wellness-Led Menus And Premium Hospitality.
                  </p>
                </div>
              </div>

              {/* Center: Green Tea & CTC Tea Circles 232x232 with Labels below */}
              <div className="flex items-center justify-center gap-[clamp(20px,4.375vw,80px)] shrink-0 z-10 relative my-6 lg:my-0">
                {/* Green Tea Circle */}
                <div className="relative flex flex-col items-center">
                  <div
                    className="rounded-full shrink-0 shadow-2xl transition-transform hover:scale-[1.02] relative overflow-hidden"
                    style={{
                      width: "clamp(150px, 18.125vw, 360px)", // 232px at 1280px
                      height: "clamp(150px, 18.125vw, 360px)",
                      aspectRatio: "1 / 1",
                      backgroundColor: "#000000",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <Image
                      src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1b7c6f5b-d55b-4628-bb7f-e298bf350000/public"
                      alt="Green Tea"
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 1280px) 232px, 360px"
                      className="object-cover pointer-events-none"
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </div>
                  <span
                    className="absolute top-full mt-[clamp(10px,1.172vw,24px)] text-[#D5D5D5] text-center whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(13px, 1.25vw, 24px)", // 16px at 1280px
                      lineHeight: "120%",
                      letterSpacing: "0%",
                    }}
                  >
                    Green Tea
                  </span>
                </div>

                {/* CTC Tea Circle */}
                <div className="relative flex flex-col items-center">
                  <div
                    className="rounded-full shrink-0 shadow-2xl transition-transform hover:scale-[1.02] relative overflow-hidden"
                    style={{
                      width: "clamp(150px, 18.125vw, 360px)", // 232px at 1280px
                      height: "clamp(150px, 18.125vw, 360px)",
                      aspectRatio: "1 / 1",
                      backgroundColor: "#000000",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <Image
                      src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f49876c7-d404-49ce-ae41-96eafae25100/public"
                      alt="CTC Tea"
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 1280px) 232px, 360px"
                      className="object-cover pointer-events-none"
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </div>
                  <span
                    className="absolute top-full mt-[clamp(10px,1.172vw,24px)] text-[#D5D5D5] text-center whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(13px, 1.25vw, 24px)", // 16px at 1280px
                      lineHeight: "120%",
                      letterSpacing: "0%",
                    }}
                  >
                    CTC Tea
                  </span>
                </div>
              </div>

              {/* CTC Tea Narrative (Right Green Box) */}
              <div
                className="w-full lg:flex-1 relative flex items-center justify-end z-0 py-4 lg:py-0"
                style={{
                  minHeight: "clamp(135px, 16.313vw, 324px)", // 90% of 232px circle = 208.8px at 1280px
                }}
              >
                <div className="variety-box-right-bg" />
                <div
                  className="relative z-10 w-full flex justify-end"
                  style={{
                    paddingRight: "clamp(16px, 3.125vw, 75px)",
                    paddingLeft: "clamp(16px, 2.5vw, 40px)",
                  }}
                >
                  <p
                    className="m-0 text-[#D5D5D5] text-right max-w-[clamp(260px,24vw,520px)]"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px
                      lineHeight: "120%",
                      letterSpacing: "0%",
                    }}
                  >
                    Crush, Tear, Curl Is A Machine Method For Black Tea Where Leaves Pass Through Toothed Rollers, Emerging As Small Pellets. It Brews Fast, Strong, And Consistent. Reviews Show Higher Theaflavin And Thearubigin In CTC Teas Than Orthodox Ones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: Black Tea & Orthodox Tea */}
          <div className="w-[calc(100%+2*clamp(16px,3.125vw,75px))] -mx-[clamp(16px,3.125vw,75px)]">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between relative pb-[clamp(24px,2.5vw,48px)]">
              {/* Black Tea Narrative (Left Green Box) */}
              <div
                className="w-full lg:flex-1 relative flex items-center justify-start z-0 py-4 lg:py-0"
                style={{
                  minHeight: "clamp(135px, 16.313vw, 324px)", // 90% of 232px circle = 208.8px at 1280px
                }}
              >
                <div className="variety-box-left-bg" />
                <div
                  className="relative z-10 w-full"
                  style={{
                    paddingLeft: "clamp(16px, 3.125vw, 75px)",
                    paddingRight: "clamp(16px, 2.5vw, 40px)",
                  }}
                >
                  <p
                    className="m-0 text-[#D5D5D5] text-left max-w-[clamp(260px,24vw,520px)]"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px
                      lineHeight: "120%",
                      letterSpacing: "0%",
                    }}
                  >
                    Fully Oxidised For A Deeper Colour And A Bolder, Malty Character. It Is The Most Familiar Choice For Breakfast Service And For Pairing With Milk.
                  </p>
                </div>
              </div>

              {/* Center: Black Tea & Orthodox Tea Circles 232x232 with Labels below */}
              <div className="flex items-center justify-center gap-[clamp(20px,4.375vw,80px)] shrink-0 z-10 relative my-6 lg:my-0">
                {/* Black Tea Circle */}
                <div className="relative flex flex-col items-center">
                  <div
                    className="rounded-full shrink-0 shadow-2xl transition-transform hover:scale-[1.02] relative overflow-hidden"
                    style={{
                      width: "clamp(150px, 18.125vw, 360px)", // 232px at 1280px
                      height: "clamp(150px, 18.125vw, 360px)",
                      aspectRatio: "1 / 1",
                      backgroundColor: "#000000",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <Image
                      src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1817607b-7d3f-40fd-240b-00e7494aa000/public"
                      alt="Black Tea"
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 1280px) 232px, 360px"
                      className="object-cover pointer-events-none"
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </div>
                  <span
                    className="absolute top-full mt-[clamp(10px,1.172vw,24px)] text-[#D5D5D5] text-center whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(13px, 1.25vw, 24px)", // 16px at 1280px
                      lineHeight: "120%",
                      letterSpacing: "0%",
                    }}
                  >
                    Black Tea
                  </span>
                </div>

                {/* Orthodox Tea Circle */}
                <div className="relative flex flex-col items-center">
                  <div
                    className="rounded-full shrink-0 shadow-2xl transition-transform hover:scale-[1.02] relative overflow-hidden"
                    style={{
                      width: "clamp(150px, 18.125vw, 360px)", // 232px at 1280px
                      height: "clamp(150px, 18.125vw, 360px)",
                      aspectRatio: "1 / 1",
                      backgroundColor: "#000000",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <Image
                      src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a1889dbf-09ab-4d34-ff69-72146f980600/public"
                      alt="Orthodox Tea"
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 1280px) 232px, 360px"
                      className="object-cover pointer-events-none"
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </div>
                  <span
                    className="absolute top-full mt-[clamp(10px,1.172vw,24px)] text-[#D5D5D5] text-center whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(13px, 1.25vw, 24px)", // 16px at 1280px
                      lineHeight: "120%",
                      letterSpacing: "0%",
                    }}
                  >
                    Orthodox Tea
                  </span>
                </div>
              </div>

              {/* Orthodox Tea Narrative (Right Green Box) */}
              <div
                className="w-full lg:flex-1 relative flex items-center justify-end z-0 py-4 lg:py-0"
                style={{
                  minHeight: "clamp(135px, 16.313vw, 324px)", // 90% of 232px circle = 208.8px at 1280px
                }}
              >
                <div className="variety-box-right-bg" />
                <div
                  className="relative z-10 w-full flex justify-end"
                  style={{
                    paddingRight: "clamp(16px, 3.125vw, 75px)",
                    paddingLeft: "clamp(16px, 2.5vw, 40px)",
                  }}
                >
                  <p
                    className="m-0 text-[#D5D5D5] text-right max-w-[clamp(260px,24vw,520px)]"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(14px, 1.406vw, 28px)", // 18px at 1280px
                      lineHeight: "120%",
                      letterSpacing: "0%",
                    }}
                  >
                    Processed In The Traditional Sequence Of Plucking, Withering, Rolling, Oxidation And Drying [9], With The Leaf Kept Whole Or In Large Pieces. It Gives A More Nuanced, Layered Cup And Suits Premium And Speciality Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. L'ORIENTALIS GLOBAL FOOTER */}
      <LOrientalisFooter />
    </main>
  );
}

