"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import LOrientalisHeader from "@/components/LOrientalisHeader";
import LOrientalisFooter from "@/components/LOrientalisFooter";

/**
 * Green hand-drawn loop brand accent image.
 * Renders behind text via lower z-index (z-0) while text has higher z-index (z-10) within an isolated stacking context.
 * Uses official Cloudflare image asset: 73ab85b3-67e2-4103-e9c0-3fa0bec8f300
 */
function GreenLoop({ className = "" }: { className?: string }) {
  return (
    <img
      src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/73ab85b3-67e2-4103-e9c0-3fa0bec8f300/public"
      alt=""
      aria-hidden="true"
      className={`absolute pointer-events-none select-none left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[82.5%] max-w-none h-auto z-0 ${className}`}
    />
  );
}

/**
 * Geometric 6-blade pinwheel logo icon for "Sustainable Future Together".
 */
function PinwheelIcon({ className = "w-6 h-6 text-[#48A663]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Central folded petal blades */}
        <path d="M16 16L16 6C18.5 6 20.5 7.5 21 10L16 16Z" fill="currentColor" fillOpacity="0.25" />
        <path d="M16 16L24.66 11C26 13.2 25.5 15.8 23.5 17.5L16 16Z" fill="currentColor" fillOpacity="0.25" />
        <path d="M16 16L24.66 21C24.5 23.5 22.5 25.5 20 25.5L16 16Z" fill="currentColor" fillOpacity="0.25" />
        <path d="M16 16L16 26C13.5 26 11.5 24.5 11 22L16 16Z" fill="currentColor" fillOpacity="0.25" />
        <path d="M16 16L7.34 21C6 18.8 6.5 16.2 8.5 14.5L16 16Z" fill="currentColor" fillOpacity="0.25" />
        <path d="M16 16L7.34 11C7.5 8.5 9.5 6.5 12 6.5L16 16Z" fill="currentColor" fillOpacity="0.25" />
        {/* Central hub */}
        <circle cx="16" cy="16" r="1.8" fill="currentColor" />
      </g>
    </svg>
  );
}

/**
 * Standardized high-fidelity image placeholder div.
 */
function ImagePlaceholder({
  label,
  sublabel,
  aspectRatio,
  className = "",
}: {
  label: string;
  sublabel?: string;
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full bg-[#0d0d0d] rounded-[2px] overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none group transition-all duration-300 ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Subtle ambient gradient mesh in placeholder */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-neutral-900/40 to-[#122215]/30 pointer-events-none" />

      {/* Decorative camera/image icon */}
      <div className="relative z-10 w-11 h-11 rounded-full bg-neutral-900 flex items-center justify-center mb-3 text-neutral-400 group-hover:scale-105 transition-all duration-300 shadow-lg">
        <svg
          className="w-5 h-5 text-neutral-400 group-hover:text-[#48A663] transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      <span className="relative z-10 font-mono text-xs uppercase tracking-wider text-neutral-300 font-medium">
        {label}
      </span>
      {sublabel && (
        <span className="relative z-10 text-[11px] text-neutral-500 mt-1 max-w-[280px]">
          {sublabel}
        </span>
      )}
    </div>
  );
}

export default function LorientalisSustainabilityPage() {
  // Scroll-driven animation state for the farm landscape placeholder
  const farmRef = useRef<HTMLDivElement>(null);
  const [farmProgress, setFarmProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (farmRef.current) {
            const rect = farmRef.current.getBoundingClientRect();
            const vh = window.innerHeight;
            // Starts expanding when element enters bottom 85% of screen
            // Fully expanded when element reaches center area (around 45% of screen)
            const startY = vh * 0.85;
            const endY = vh * 0.45;
            const rawProgress = (startY - rect.top) / (startY - endY);
            const clamped = Math.min(1, Math.max(0, rawProgress));
            setFarmProgress(clamped);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Calculate dynamic dimensions for farm landscape placeholder (364x205 -> 733x404)
  const farmWidth = Math.round(364 + (733 - 364) * farmProgress);
  const farmHeight = Math.round(205 + (404 - 205) * farmProgress);

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-clip selection:bg-[#365944] selection:text-white">
      {/* 1. L'ORIENTALIS GLOBAL HEADER */}
      <LOrientalisHeader />

      {/* =========================================================================
          SECTION 1: HERO - SUSTAINABLE ENVIRONMENT
          ========================================================================= */}
      <section
        id="sustainability-hero"
        className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-center overflow-hidden"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Hero Background Image */}
        <Image
          src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/76182cd2-7048-411f-53fc-38396d961000/public"
          alt="Sustainable environment tea picker in lush garden"
          fill
          priority
          unoptimized
          className="object-cover object-center pointer-events-none"
        />

        {/* Ambient Dark Gradient Overlays for Readability and Seamless Bottom Blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

        {/* Hero Content Block (Left-Aligned) */}
        <div className="relative z-10 max-w-[850px] pt-24 sm:pt-28 pb-16 flex flex-col items-start">
          {/* Supporting a */}
          <span
            className="block text-[#DBDBDB] select-none font-normal"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(18px, 1.667vw, 24px)",
              lineHeight: "100%",
              letterSpacing: "0%",
              marginBottom: "clamp(14px, 1.389vw, 20px)",
            }}
          >
            Supporting a
          </span>

          {/* Sustainable environment */}
          <h1
            className="m-0 select-none text-white tracking-normal font-normal"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "clamp(46px, 6.667vw, 96px)",
              lineHeight: "clamp(52px, 7.36vw, 106px)",
              letterSpacing: "0%",
              marginBottom: "clamp(8px, 0.694vw, 10px)",
            }}
          >
            Sustainable
            <br />
            envi<span className="relative inline-block isolate"><span className="relative z-10">ron</span><GreenLoop className="w-[92.5%] top-[50%]" /></span>ment
          </h1>

          {/* Subtitle / Narrative */}
          <p
            className="m-0 select-none text-[#DBDBDB] max-w-[540px] font-normal"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(11px, 0.833vw, 12px)",
              lineHeight: "135%",
              letterSpacing: "0%",
              marginBottom: "clamp(24px, 2.5vw, 36px)",
            }}
          >
            Responsible sourcing for tea and coffee, built into every cup we serve your spaces.
          </p>

          {/* Sustainable Future Together Badge Image (131x40) */}
          <div
            className="relative select-none"
            style={{
              width: "clamp(105px, 9.1vw, 131px)",
              height: "clamp(32px, 2.78vw, 40px)",
            }}
          >
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9ffc0059-980f-4445-60c8-25b31df02500/public"
              alt="Sustainable Future Together"
              width={131}
              height={40}
              unoptimized
              priority
              className="w-full h-full object-contain object-left pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: GROWING COFFEE AND TEA IN A CHANGING CLIMATE
          ========================================================================= */}
      <section
        id="changing-climate"
        className="relative w-full flex flex-col items-center text-center overflow-hidden"
        style={{
          paddingTop: "clamp(64px, 8vw, 110px)",
          paddingBottom: "clamp(64px, 8vw, 110px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Greenish wave in the background matching design */}
        <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden flex items-center justify-center">
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/87d91547-58ef-40f7-f370-e2673d4f6b00/public"
            alt=""
            aria-hidden="true"
            className="w-full max-w-[1440px] h-auto object-contain pointer-events-none select-none opacity-95"
            style={{
              transform: "scale(1.05)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[960px] mx-auto flex flex-col items-center">
          {/* Section Heading */}
          <h2
            className="m-0 select-none text-white tracking-normal"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 3.6vw, 54px)",
              lineHeight: "1.2",
            }}
          >
            G<span className="relative inline-block isolate mx-[1px]"><span className="relative z-10">row</span><GreenLoop className="w-[90%] top-[48%]" /></span>ing Coffee And Tea In A
            <br />
            Changing Climate
          </h2>

          {/* Narrative Paragraph 1 */}
          <p
            className="m-0 select-none text-[#DBDBDB] max-w-[850px]"
            style={{
              marginTop: "clamp(32px, 4vw, 56px)",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.15vw, 17px)",
              lineHeight: "160%",
            }}
          >
            Most Of The World&apos;s Coffee And Tea Is Grown By Smallholder Farmers On Small Plots.
            Their Harvests Are Sorted, Graded And Aggregated Before They Reach Your Facility. That
            Supply Chain Is Only As Resilient As The Farms Behind It. For These Farming Communities,
            Coffee And Tea Are Often The Primary Source Of Livelihood, And In Many Growing Regions
            Other Economic Options Are Limited.
          </p>

          {/* Farm Landscape Video: expands from 364x205 to 733x404 on scroll with 87px gap above & below */}
          <div
            ref={farmRef}
            className="w-full flex items-center justify-center select-none"
            style={{
              marginTop: "clamp(48px, 6.04vw, 87px)",
              marginBottom: "clamp(48px, 6.04vw, 87px)",
            }}
          >
            <div
              className="relative overflow-hidden rounded-[2px] bg-neutral-900 shadow-2xl transition-all duration-300 ease-out flex items-center justify-center max-w-full"
              style={{
                width: `min(100%, ${farmWidth}px)`,
                height: `${farmHeight}px`,
                aspectRatio: `${farmWidth} / ${farmHeight}`,
                transition: "width 0.35s cubic-bezier(0.16, 1, 0.3, 1), height 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                willChange: "width, height",
              }}
            >
              <iframe
                src="https://customer-nqls4utgv1ytiyat.cloudflarestream.com/8dbddb80a01b0aeccc717c5f8080ef4d/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2F8dbddb80a01b0aeccc717c5f8080ef4d%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                style={{
                  border: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen={true}
              />
            </div>
          </div>

          {/* Narrative Paragraph 2 */}
          <p
            className="m-0 select-none text-[#DBDBDB] max-w-[850px]"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.15vw, 17px)",
              lineHeight: "160%",
            }}
          >
            Both Crops Are Climate-Sensitive. Shifts In Temperature And Rainfall Affect Plant
            Health, Yield And Quality. For An Enterprise Buyer, This Is A Continuity Issue As Much
            As A Sustainability Issue. Supporting Farmers Today Protects The Consistency, Quality
            And Availability Of What You Serve Tomorrow.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PROTECTING TREES, PREVENTING DEFORESTATION
          ========================================================================= */}
      <section
        id="protecting-trees"
        className="relative w-full bg-black flex justify-center overflow-hidden"
        style={{
          paddingTop: "clamp(64px, 7.5vw, 120px)",
          paddingBottom: "clamp(100px, 15.28vw, 220px)",
          paddingLeft: "2.778vw",
          paddingRight: "0px",
        }}
      >
        <div className="w-full relative flex flex-col lg:block">
          {/* Coffee Branch Image (Positioned on the right, flush right, arching into center) */}
          <div
            className="order-2 lg:order-none relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-10 shrink-0 select-none flex items-center justify-end ml-auto pointer-events-none mt-10 lg:mt-0"
            style={{
              width: "clamp(320px, 48vw, 700px)",
              height: "clamp(360px, 52vw, 760px)",
            }}
          >
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a8d01890-8b24-4e3c-6bf6-4832b5482100/public"
              alt="Coffee branch with cherries and foliage"
              fill
              unoptimized
              priority
              className="object-contain object-right pointer-events-none"
            />
          </div>

          {/* Left / Center Content: Heading + Narrative matching screenshot placement & line breaks */}
          <div className="order-1 lg:order-none relative z-20 max-w-[1100px] flex flex-col items-start text-left select-none">
            <h2
              className="m-0 text-white tracking-normal font-normal"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "clamp(30px, 3.472vw, 50px)",
                lineHeight: "1.18",
              }}
            >
              Protecting{" "}
              <span className="relative inline-block isolate">
                <span className="relative z-10">Trees</span>
                <GreenLoop className="w-[85%] top-[48%]" />
              </span>
              , Preventing
              <br />
              Deforestation
            </h2>

            <div
              className="flex flex-col gap-6 text-white font-normal"
              style={{
                marginTop: "clamp(32px, 3.8vw, 54px)",
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(13px, 1.042vw, 15px)",
                lineHeight: "160%",
              }}
            >
              <p className="m-0 text-white">
                <span className="lg:block">
                  Coffee And Tea Are Perennial Crops. They Grow On Trees And Shrubs That, With Good
                </span>{" "}
                <span className="lg:block">
                  Agricultural Practice, Stay Productive For Decades. That Makes Them A Natural Fit For
                </span>{" "}
                <span className="lg:block">
                  Landscapes Where Forest Cover Matters.
                </span>{" "}
                <span className="lg:block">
                  At L&apos;Orientalis, We Work With Growers Who Follow Practices That Keep Plantations Healthy
                </span>{" "}
                <span className="lg:block">
                  And Productive Without Clearing New Land. These Include Shade Management, Soil Care
                </span>{" "}
                <span className="lg:block">
                  And Responsible Harvesting.
                </span>
              </p>
              <p className="m-0 text-white">
                <span className="lg:block">
                  We See Land Stewardship As The Basis Of A Supply Chain That Lasts, And We Expect The Same Standard Across Every Origin We
                </span>{" "}
                <span className="lg:block">
                  Work With.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FROM ORIGIN TO OUTLET, ACCOUNTABLE AT EVERY STEP
          ========================================================================= */}
      <section
        id="origin-to-outlet"
        className="relative w-full overflow-hidden select-none"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
      >
        {/* Full-bleed panoramic video banner */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            paddingTop: "52.734375%",
            minHeight: "clamp(460px, 52.734375vw, 1012px)",
          }}
        >
          {/* Background Cloudflare Stream Video */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <iframe
              src="https://customer-nqls4utgv1ytiyat.cloudflarestream.com/fc1aae211ee303771b943705fd7aa728/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2Ffc1aae211ee303771b943705fd7aa728%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
              style={{
                border: "none",
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
              }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen={true}
            />

            {/* Subtle ambient overlays matching screenshot 1 */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.0) 65%, rgba(0,0,0,0.5) 100%)",
              }}
            />
          </div>

          {/* Overlay Text Content matching Screenshot 1 text placement & typography */}
          <div
            className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none"
            style={{
              paddingTop: "clamp(32px, 4.167vw, 60px)",
              paddingBottom: "clamp(28px, 3.889vw, 56px)",
              paddingLeft: "clamp(24px, 3.472vw, 50px)",
              paddingRight: "clamp(24px, 3.472vw, 50px)",
            }}
          >
            {/* Top Left: Heading */}
            <div className="max-w-[720px]">
              <h2
                className="m-0 text-white tracking-normal font-normal"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontSize: "clamp(26px, 3.333vw, 48px)",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textShadow: "0 2px 10px rgba(0,0,0,0.45)",
                }}
              >
                From Origin To Outlet,
                <br />
                Accountable At Every Step
              </h2>
            </div>

            {/* Bottom Right: Narrative Text */}
            <div className="self-end max-w-[1160px] text-right">
              <p
                className="m-0 text-white text-right font-normal"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(12px, 1.25vw, 18px)",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  textShadow: "0 2px 8px rgba(0,0,0,0.75)",
                }}
              >
                <span className="md:block">
                  Sustainability Does Not Stop At The Farm Gate. WAE Brings One Operating Standard To Every Stage Of The Beverage
                </span>{" "}
                <span className="md:block">
                  Journey, From How Tea And Coffee Are Sourced To How They Are Served And What Happens To The Waste.
                </span>{" "}
                <span className="md:block">
                  Every Cup We Deliver To Your Spaces Is Held To The Same Standard Of Responsible Sourcing, Careful Handling And Minimal
                </span>{" "}
                <span className="md:block">
                  Waste, Whichever Origin It Comes From.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CENTRED EMBLEM DIVIDER
          ========================================================================= */}
      <div
        className="w-full flex items-center justify-center select-none bg-black"
        style={{
          paddingLeft: "clamp(24px, 17vw, 17vw)",
          paddingRight: "clamp(24px, 17vw, 17vw)",
          paddingTop: "clamp(24px, 3.2vw, 44px)",
          paddingBottom: "clamp(24px, 3.2vw, 44px)",
        }}
      >
        <div className="w-full relative flex items-center justify-center">
          {/* Border-image gradient line spanning across */}
          <div
            className="absolute inset-x-0 h-0"
            style={{
              border: "1px solid",
              borderBottom: "none",
              borderLeft: "none",
              borderRight: "none",
              borderImageSource:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50.96%, rgba(255, 255, 255, 0.04) 100%)",
              borderImageSlice: 1,
            }}
          />

          {/* Pinwheel icon in the middle (39x39) */}
          <div className="relative z-10 px-4 sm:px-5 bg-black flex items-center justify-center">
            <div
              className="relative shrink-0 select-none"
              style={{ width: "39px", height: "39px" }}
            >
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3acb7cdc-43b8-4afc-a3a7-a8892b2ed100/public"
                alt="WAE Pinwheel emblem"
                width={39}
                height={39}
                unoptimized
                priority
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 6: RECYCLING GROUNDS
          ========================================================================= */}
      <section
        id="recycling-grounds"
        className="relative w-full bg-black flex flex-col lg:flex-row items-center justify-between overflow-hidden"
        style={{
          paddingTop: "clamp(56px, 6.5vw, 100px)",
          paddingBottom: "clamp(56px, 6.5vw, 100px)",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        {/* Left Column: Heading + 99px Gap + Narrative (6.875vw margin left) */}
        <div className="relative z-20 flex-1 flex flex-col items-start text-left select-none ml-6 lg:ml-[6.875vw] max-w-[640px]">
          <h2
            className="m-0 text-white tracking-normal font-normal"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 3.333vw, 48px)",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Recycling{" "}
            Gr<span className="relative inline-block isolate"><span className="relative z-10">ou</span><GreenLoop className="w-[97.5%] top-[48%]" /></span>nds
          </h2>

          {/* 99px gap between heading and body */}
          <div
            className="w-full"
            style={{ height: "clamp(36px, 6.875vw, 99px)" }}
            aria-hidden="true"
          />

          <p
            className="m-0 text-white font-normal"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(13px, 1.25vw, 18px)",
              lineHeight: "120%",
              letterSpacing: "0%",
            }}
          >
            <span className="md:block">Every Cup Leaves Something Behind. Spent Coffee</span>{" "}
            <span className="md:block">Grounds And Used Tea Leaves Are Organic Material Rich</span>{" "}
            <span className="md:block">In Nutrients. In Most Facilities They Go To Landfill.</span>{" "}
            <span className="md:block">We Help Our Partners Treat Them As A Resource Instead.</span>{" "}
            <span className="md:block">Collected At The Point Of Service, They Can Be Diverted</span>{" "}
            <span className="md:block">To Composting And Other Organic Recycling Routes. This</span>{" "}
            <span className="md:block">Reduces Waste Volumes And Supports The Circular Goals</span>{" "}
            <span className="md:block">Many Of Our Clients Have Already Committed To.</span>
          </p>
        </div>

        {/* Right Column: Recycling Grounds Image (Flush Right, no margin/padding) */}
        <div
          className="relative z-10 shrink-0 select-none flex items-center justify-end ml-auto mt-10 lg:mt-0"
          style={{
            width: "clamp(320px, 45.5vw, 656px)",
            height: "clamp(340px, 46.5vw, 670px)",
          }}
        >
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/268e5671-2de0-4151-e50f-6dbd8cfef700/public"
            alt="Spent coffee grounds and fresh coffee cherries in hands"
            fill
            unoptimized
            priority
            className="object-cover object-center pointer-events-none"
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WIDE TEA PLANTATION LANDSCAPE (PANORAMIC)
          ========================================================================= */}
      <section
        id="plantation-landscape"
        className="w-full flex justify-center overflow-hidden"
        style={{
          paddingTop: "clamp(32px, 4vw, 64px)",
          paddingBottom: "clamp(48px, 6vw, 90px)",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <div className="relative w-full aspect-[21/9] min-h-[260px] sm:min-h-[380px] lg:min-h-[500px] overflow-hidden select-none">
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9c4353cb-26cc-495c-ccc5-67b687bb2000/public"
            alt="Panoramic tea estate landscape"
            fill
            unoptimized
            priority
            className="object-cover object-center pointer-events-none"
            sizes="100vw"
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CLOSING TAGLINE & COMMITMENT
          ========================================================================= */}
      <section
        id="sustainability-closing"
        className="w-full bg-black flex flex-col items-center text-center select-none"
        style={{
          paddingTop: "clamp(56px, 7vw, 100px)",
          paddingBottom: "clamp(72px, 9vw, 130px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Main Tagline: Better Sourcing. Less Waste. One Standard. */}
        <h2
          className="m-0 text-center tracking-normal font-normal"
          style={{
            fontSize: "clamp(26px, 3.8vw, 54px)",
            lineHeight: "1.2",
            letterSpacing: "0%",
          }}
        >
          <span
            className="text-white"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
            }}
          >
            Better
          </span>{" "}
          <span
            style={{
              fontFamily: "var(--font-poly), 'Poly', serif",
              fontWeight: 400,
              color: "#8A8A8E",
            }}
          >
            Sourcing. Less Waste. One
          </span>{" "}
          <span
            className="text-white"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
            }}
          >
            Standard.
          </span>
        </h2>

        {/* Narrative subtext matching screenshot line breaks */}
        <p
          className="m-0 text-white text-center font-normal max-w-[850px]"
          style={{
            marginTop: "clamp(24px, 2.5vw, 36px)",
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(13px, 1.1vw, 16px)",
            lineHeight: "150%",
            letterSpacing: "0%",
          }}
        >
          <span className="sm:block">
            From The Farms We Source From To The Cups We Serve, WAE Is Committed
          </span>{" "}
          <span className="sm:block">
            To Beverage Programmes That Respect People And The Planet.
          </span>
        </p>
      </section>

      {/* =========================================================================
          SECTION 9: L'ORIENTALIS GLOBAL FOOTER
          ========================================================================= */}
      <LOrientalisFooter />
    </main>
  );
}
