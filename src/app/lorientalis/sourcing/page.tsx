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
          SECTION 1: HERO - SOURCING & CULTURE & TRADE + MAP SPREAD
          ========================================================================= */}
      <section
        id="sourcing-hero"
        className="relative w-full pt-[clamp(110px,10vw,155px)]"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Top Header Row: Left Flag & Location Intro | Right SOURCING & Culture & Trade */}
        <div className="w-full flex items-start justify-between">
          {/* Left: Indian Flag + 81px gap + "Above the Tropic of Cancer..." */}
          <div className="flex flex-col items-start z-10">
            {/* 40x27 px Indian Flag (72px gap below sourcing underline bar) */}
            <div
              className="w-[40px] h-[27px] rounded-[2px] overflow-hidden flex flex-col shadow-sm select-none shrink-0"
              title="India"
            >
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-white flex items-center justify-center">
                <div className="w-[6px] h-[6px] rounded-full bg-[#000080]" />
              </div>
              <div className="flex-1 bg-[#138808]" />
            </div>

            {/* 81px below it */}
            <p
              className="m-0 text-white select-none max-w-[280px] sm:max-w-[320px]"
              style={{
                marginTop: "clamp(36px, 5.625vw, 81px)",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(15px, 1.25vw, 18px)",
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            >
              Above the Tropic of Cancer, North-East hills grow our botanicals.
            </p>
          </div>

          {/* Right: SOURCING (top aligned with flag top) + 23px gap + Culture & Trade */}
          <div className="flex flex-col items-end text-right z-10">
            {/* SOURCING */}
            <span
              className="text-right select-none text-white tracking-normal uppercase"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(18px, 1.667vw, 24px)",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              SOURCING
            </span>

            {/* 23px gap then Culture & Trade */}
            <h1
              className="select-none text-white m-0 tracking-normal"
              style={{
                marginTop: "23px",
                fontFamily: "var(--font-monschone), serif",
                fontWeight: 400,
                fontSize: "clamp(48px, 6.667vw, 96px)",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Culture &amp; Trade
            </h1>
          </div>
        </div>

        {/* Map Image: Right under Culture & Trade with no vertical space, 97px ml, 55px mr, 1128x682 */}
        <div
          className="relative w-full flex justify-end select-none"
          style={{
            marginTop: "0px",
            paddingLeft: "clamp(0px, 6.7vw, 97px)",
            paddingRight: "clamp(0px, 3.8vw, 55px)",
          }}
        >
          <div
            className="relative w-full select-none"
            style={{
              maxWidth: "1128px",
              aspectRatio: "1128 / 682",
            }}
          >
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3aab055b-3df4-4a5c-7016-3cb021b6b300/public"
              alt="North East India Sourcing Map"
              fill
              priority
              unoptimized
              sizes="(max-width: 1200px) 100vw, 1128px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Coordinates & Origin Row */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mt-6 md:mt-2">
          {/* Left Block: 26 N 92 E + 20px gap + SINGLE ORIGIN - 3 State */}
          <div className="flex flex-col items-start select-none">
            <h3
              className="m-0 uppercase"
              style={{
                fontFamily: "var(--font-judson), 'Judson', serif",
                fontWeight: 700,
                fontSize: "clamp(42px, 5.858vw, 84.35px)",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#E8D8BE",
              }}
            >
              26°N 92°E
            </h3>
            <span
              style={{
                marginTop: "20px",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 500,
                fontSize: "clamp(14px, 1.25vw, 18px)",
                lineHeight: "24px",
                letterSpacing: "0%",
                color: "#FFFFFF",
              }}
            >
              SINGLE ORIGIN - 3 State
            </span>
          </div>

          {/* Right Block: Three states, one origin... middle aligned with left block */}
          <p
            className="m-0 text-right select-none max-w-[440px]"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.25vw, 18px)",
              lineHeight: "120%",
              letterSpacing: "0%",
              color: "#DBDBDB",
            }}
          >
            Three states, one origin: Meghalaya, Assam, Nagaland, where mist, altitude and shade shape our cup.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: VIDEO SPREAD (138px gap, 1222x688)
          ========================================================================= */}
      <section
        id="sourcing-video"
        className="w-full flex justify-center"
        style={{
          marginTop: "clamp(64px, 9.58vw, 138px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        <div
          className="w-full rounded-[2px] overflow-hidden shadow-2xl relative select-none"
          style={{
            aspectRatio: "1222 / 688",
          }}
        >
          <iframe
            src="https://customer-nqls4utgv1ytiyat.cloudflarestream.com/750f04fe7b11c349371c94680caf9c4b/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2F750f04fe7b11c349371c94680caf9c4b%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
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
      </section>

      {/* =========================================================================
          SECTION 3: ROOTED IN COMMUNITY (119px gap, 17px, 98px, 224px gap to grid)
          ========================================================================= */}
      <section
        id="community-growers"
        className="w-full flex flex-col items-center overflow-x-clip"
        style={{
          marginTop: "clamp(56px, 8.26vw, 119px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Headings & Narrative Block */}
        <div
          className="w-full max-w-[820px] mx-auto text-center flex flex-col items-center select-none"
        >
          <span
            className="block text-center select-none"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(18px, 1.667vw, 24px)",
              lineHeight: "120%",
              letterSpacing: "0%",
              color: "#DBDBDB",
            }}
          >
            Rooted in Community
          </span>

          {/* 17px gap then Honouring the Growers Behind Every Cup */}
          <h2
            className="text-center select-none m-0"
            style={{
              marginTop: "17px",
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 3.333vw, 48px)",
              lineHeight: "120%",
              letterSpacing: "0%",
              color: "#DBDBDB",
            }}
          >
            Honouring the Growers Behind Every Cup
          </h2>

          {/* 98px gap then Reliable supply narrative */}
          <p
            className="text-center select-none m-0 mx-auto max-w-[820px]"
            style={{
              marginTop: "clamp(48px, 6.8vw, 98px)",
              fontFamily: "'Helvetica', Arial, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(15px, 1.25vw, 18px)",
              lineHeight: "120%",
              letterSpacing: "0%",
              color: "#DBDBDB",
            }}
          >
            Reliable supply depends on the people who grow it. Across North East
            India, we work with farming communities and estates, many of them
            multi-generational, and look for ways to keep more value at the farm
            gate. For our partners, that means stable supply, visibility from
            farm to cup and a sourcing story that holds up in ESG and procurement
            reviews.
          </p>
        </div>

        {/* 224px gap then the image grid (Interactive Accordion: First/Last half-cropped, hover expands) */}
        <div
          className="relative w-screen left-1/2 -translate-x-1/2 overflow-x-hidden select-none flex items-center justify-center py-8"
          style={{
            marginTop: "clamp(80px, 15.55vw, 224px)",
          }}
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
          SECTION 4: THE JOURNEY OF COFFEE: FROM BEAN TO BREW (203px gap, 36px, 170px, 493x667 image + 882x66 text)
          ========================================================================= */}
      <section
        id="journey-coffee"
        className="w-full flex flex-col items-center text-center select-none"
        style={{
          marginTop: "clamp(80px, 14.1vw, 203px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        <h3
          className="text-white select-none m-0 text-center"
          style={{
            fontFamily: "var(--font-monschone), serif",
            fontWeight: 400,
            fontSize: "clamp(24px, 2.778vw, 40px)",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          The Journey of Coffee:
        </h3>

        {/* 36px gap then From Bean to Brew */}
        <h2
          className="text-white select-none m-0 text-center"
          style={{
            marginTop: "36px",
            fontFamily: "var(--font-monschone), serif",
            fontWeight: 400,
            fontSize: "clamp(48px, 6.667vw, 96px)",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          From Bean to Brew
        </h2>

        {/* 170px gap then 493x667 image with overlapping 882x66 text */}
        <div
          className="relative w-full flex flex-col items-center"
          style={{
            marginTop: "clamp(70px, 11.8vw, 170px)",
          }}
        >
          {/* Centered Carrier Portrait (493 x 667) */}
          <div
            className="relative w-full max-w-[493px] aspect-[493/667] rounded-[2px] overflow-hidden select-none shadow-2xl"
            style={{
              width: "clamp(300px, 34.236vw, 493px)",
              height: "clamp(406px, 46.319vw, 667px)",
            }}
          >
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/159a4588-9d3e-43d7-6f00-3df487d43e00/public"
              alt="Mountain Harvest Carrier with Woven Basket"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 493px"
              className="object-cover"
            />
          </div>

          {/* Overlapping Text Box (882 x 66, centered with image) */}
          <div
            className="relative z-10 -mt-[33px] px-4 w-full max-w-[882px] flex justify-center text-center select-none"
          >
            <p
              className="m-0 text-center"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.25vw, 18px)",
                lineHeight: "120%",
                letterSpacing: "0%",
                color: "#DBDBDB",
              }}
            >
              Once harvested, coffee cherries must be processed quickly to
              prevent spoilage. Today there are two contrasting methods, one
              centuries old and one technology-led, along with hybrids of both.
              The method shapes the cup, and the care taken shapes its
              consistency.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE TEA PRODUCTION PROCESS (64px, 137px gap, 398x677 image, CTC Tea, 156px gap, 301x302 image, 110px gap, Orthodox tea, 102px gap, 1200x498 image, 102px gap, Green tea, 130px gap to footer)
          ========================================================================= */}
      <section
        id="tea-process"
        className="w-full flex flex-col items-center select-none"
        style={{
          marginTop: "clamp(80px, 12.5vw, 180px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Main Section Heading: "THE TEA PRODUCTION PROCESS" */}
        <h2
          className="text-center font-normal tracking-[0.08em] uppercase select-none m-0"
          style={{
            fontFamily: "var(--font-monschone), serif",
            fontSize: "clamp(32px, 4.444vw, 64px)",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          <span className="text-white/40">THE </span>
          <span className="text-white">TEA </span>
          <span className="text-white/40">PRODUCTION PROCESS</span>
        </h2>

        {/* 137px gap then CTC TEA Block (w-full container spanning between Sourcing and Contact) */}
        <div
          className="w-full flex flex-col md:flex-row items-start justify-between"
          style={{ marginTop: "clamp(56px, 9.51vw, 137px)" }}
        >
          {/* Left Column: 398 x 677 Harvester Woman Image */}
          <div
            className="relative w-full max-w-[398px] aspect-[398/677] rounded-[2px] overflow-hidden shadow-2xl select-none shrink-0"
            style={{
              width: "clamp(280px, 27.64vw, 398px)",
              height: "clamp(476px, 47.01vw, 677px)",
            }}
          >
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/51ca3f6a-9a8d-44ab-f3d5-747021c76800/public"
              alt="Tea Plucker Woman"
              fill
              unoptimized
              sizes="398px"
              className="object-cover"
            />
          </div>

          {/* Right Column: CTC Tea Text + 156px gap + 301x302 Image */}
          <div className="flex-1 flex flex-col justify-between self-stretch mt-8 md:mt-0 pl-0 md:pl-12">
            {/* CTC Tea Description */}
            <div className="select-none max-w-[660px]">
              <p className="m-0 leading-tight">
                <span
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-monschone), serif",
                    fontWeight: 400,
                    fontSize: "clamp(28px, 3.333vw, 48px)",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  CTC Tea
                </span>
                <span
                  style={{
                    fontFamily: "'Helvetica', Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(16px, 1.667vw, 24px)",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                    color: "#AEAEAE",
                  }}
                >
                  {" "} : CTC (Crush, Tear, Curl) makes up over 85% of the market.
                  Leaves are mechanically cut, torn and curled into uniform
                  granules for a strong, bold cup with higher caffeine. It suits
                  high-volume service.
                </span>
              </p>
            </div>

            {/* 156px under it: 301x302 Terraced Hills Image (aligned right) */}
            <div
              className="w-full flex justify-end"
              style={{ marginTop: "clamp(48px, 10.83vw, 156px)" }}
            >
              <div
                className="relative rounded-[2px] overflow-hidden shadow-2xl shrink-0"
                style={{
                  width: "clamp(200px, 20.9vw, 301px)",
                  height: "clamp(200px, 20.97vw, 302px)",
                  aspectRatio: "301 / 302",
                }}
              >
                <Image
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3a7e85fd-e8d8-4385-b8ce-d6fa4d08d000/public"
                  alt="Terraced Tea Hills"
                  fill
                  unoptimized
                  sizes="301px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 110px below it, Orthodox Tea Text (right aligned) */}
        <div
          className="w-full flex justify-end select-none"
          style={{ marginTop: "clamp(48px, 7.63vw, 110px)" }}
        >
          <p className="m-0 text-right max-w-[760px] leading-tight">
            <span
              className="text-white"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.333vw, 48px)",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Orthodox Tea
            </span>
            <span
              style={{
                fontFamily: "'Helvetica', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 1.667vw, 24px)",
                lineHeight: "120%",
                letterSpacing: "0%",
                color: "#AEAEAE",
              }}
            >
              {" "} : Orthodox tea uses traditional or manual methods, producing a
              delicate cup with less caffeine. Sold as loose or whole leaf, it
              suits premium black teas and signature menus.
            </span>
          </p>
        </div>

        {/* 102px below it: 1200 x 498 Green Tea Flush Image */}
        <div
          className="w-full flex justify-center"
          style={{ marginTop: "clamp(48px, 7.08vw, 102px)" }}
        >
          <div
            className="relative w-full aspect-[1200/498] rounded-[2px] overflow-hidden shadow-2xl select-none"
          >
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ca262eda-b665-4ba1-3ef4-1baa5bf22e00/public"
              alt="Vibrant Green Tea Flush Leaves"
              fill
              unoptimized
              sizes="(max-width: 1200px) 100vw, 1440px"
              className="object-cover"
            />
          </div>
        </div>

        {/* 102px below it: Green Tea Text (left aligned) */}
        <div
          className="w-full select-none"
          style={{ marginTop: "clamp(48px, 7.08vw, 102px)" }}
        >
          <p className="m-0 text-left leading-tight max-w-[1100px]">
            <span
              className="text-white"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.333vw, 48px)",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Green Tea
            </span>
            <span
              style={{
                fontFamily: "'Helvetica', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 1.667vw, 24px)",
                lineHeight: "120%",
                letterSpacing: "0%",
                color: "#AEAEAE",
              }}
            >
              {" "} : Green tea is made from unoxidized leaves and is one of the
              least processed types of tea, which helps retain its natural
              antioxidants and beneficial polyphenols. It offers a fresh, light
              flavor with subtle grassy notes and a gentle caffeine boost,
              making it a popular choice for a healthy, refreshing drink.
            </span>
          </p>
        </div>

        {/* 130px spacing below it to footer */}
        <div
          className="w-full"
          style={{ height: "clamp(60px, 9.02vw, 130px)" }}
        />
      </section>

      {/* L'ORIENTALIS FOOTER */}
      <LOrientalisFooter />
    </main>
  );
}
