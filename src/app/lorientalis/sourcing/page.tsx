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

  // Hover state for Section 4B: Coffee Processing Methods (0 = Natural, 1 = Washed, 2 = Honey)
  const [activeCoffeeSlide, setActiveCoffeeSlide] = useState(0);

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

        {/* Map Image: Centered, no margin/padding above/below, increased size to fill gaps */}
        <div className="relative w-full flex justify-center items-center select-none m-0 p-0">
          <div
            className="relative w-full select-none"
            style={{
              maxWidth: "1380px",
              aspectRatio: "1270 / 768",
            }}
          >
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3aab055b-3df4-4a5c-7016-3cb021b6b300/public"
              alt="North East India Sourcing Map"
              fill
              priority
              unoptimized
              sizes="(max-width: 1400px) 100vw, 1380px"
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
          SECTION 2: VIDEO SPREAD (Spans across screen, bottom-cropped to fit in viewport)
          ========================================================================= */}
      <section
        id="sourcing-video"
        className="w-full flex justify-center"
        style={{
          marginTop: "clamp(24px, 6.1vw, 88px)",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        <div
          className="w-full rounded-[2px] overflow-hidden shadow-2xl relative select-none"
          style={{
            height: "calc(100vh - clamp(210px, 25vh, 260px))",
            maxHeight: "calc((100vw - 5.556vw) * (9 / 16))",
            minHeight: "220px",
          }}
        >
          <iframe
            src="https://customer-nqls4utgv1ytiyat.cloudflarestream.com/750f04fe7b11c349371c94680caf9c4b/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2F750f04fe7b11c349371c94680caf9c4b%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
            style={{
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "calc((100vw - 5.556vw) * (9 / 16))",
              minHeight: "100%",
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
        }}
      >
        {/* Headings & Narrative Block */}
        <div
          className="w-full max-w-[1360px] mx-auto text-center flex flex-col items-center select-none"
          style={{
            paddingLeft: "2.778vw",
            paddingRight: "2.778vw",
          }}
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
            Rooted In Community
          </span>

          {/* 17px gap then Honouring The Growers Behind Every Cup (strictly ONE line) */}
          <h2
            className="text-center select-none m-0 whitespace-nowrap"
            style={{
              marginTop: "17px",
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "clamp(24px, 3.2vw, 48px)",
              lineHeight: "120%",
              letterSpacing: "0%",
              color: "#DBDBDB",
            }}
          >
            Honouring The Growers Behind Every Cup
          </h2>

          {/* 98px gap then Reliable supply narrative (3 balanced lines matching design) */}
          <p
            className="text-center select-none m-0 mx-auto max-w-[1360px]"
            style={{
              marginTop: "clamp(48px, 6.8vw, 98px)",
              fontFamily: "'Helvetica', Arial, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.18vw, 17px)",
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "#DBDBDB",
            }}
          >
            Reliable Supply Depends On The People Who Grow It. Across North East India, We Work With Farming Communities And Estates,<br className="hidden lg:inline" />
            {" "}Many Of Them Multi-Generational, And Look For Ways To Keep More Value At The Farm Gate. For Our Partners, That Means Stable<br className="hidden lg:inline" />
            {" "}Supply, Visibility From Farm To Cup And A Sourcing Story That Holds Up In ESG And Procurement Reviews.
          </p>
        </div>

        {/* 224px gap then the image grid (Interactive Accordion: First/Last half-cropped, spans end-to-end of screen) */}
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
              gap: "max(16px, calc((100vw - 1090px) / 6))",
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
              transition: "transform 2500ms cubic-bezier(0.16, 1, 0.3, 1)",
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
                      "width 2500ms cubic-bezier(0.16, 1, 0.3, 1), height 2500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 2500ms ease, box-shadow 2500ms ease",
                    willChange: "width, height",
                    transform: "translateZ(0)",
                  }}
                  onMouseEnter={() => setActiveCol(0)}
                >
                  <Image
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f12c0095-3f7d-4a20-5db8-593299423f00/public"
                    alt="Grower harvesting"
                    fill
                    unoptimized
                    sizes="501px"
                    className="object-cover pointer-events-none transition-transform duration-[2500ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            })()}

            {/* Column 1: Stacked images in resting state, comes on the side when hovered */}
            {(() => {
              const d1 = Math.abs(1 - effectiveActiveCol);
              const isColActive = effectiveActiveCol === 1;
              const isTopActive = isColActive && activeStackedChoice === "top";
              const isBottomActive = isColActive && activeStackedChoice === "bottom";

              // Dimensions for active vs resting/tier
              const activeW = "clamp(260px, 34.792vw, 501px)";
              const activeH = "clamp(265px, 35.486vw, 511px)";
              const smallW = d1 === 1 ? "clamp(60px, 8vw, 110px)" : "clamp(48px, 6.319vw, 91px)";
              const smallH = d1 === 1 ? "clamp(70px, 9.3vw, 128px)" : "clamp(56px, 7.361vw, 106px)";

              const topW = isTopActive ? activeW : smallW;
              const topH = isTopActive ? activeH : smallH;
              const topZ = isTopActive ? 30 : 10;
              const topOpacity = isTopActive ? 1 : isBottomActive ? 0.75 : d1 === 1 ? 0.85 : 0.65;

              const bottomW = isBottomActive ? activeW : smallW;
              const bottomH = isBottomActive ? activeH : smallH;
              const bottomZ = isBottomActive ? 30 : 10;
              const bottomOpacity = isBottomActive ? 1 : isTopActive ? 0.75 : d1 === 1 ? 0.85 : 0.65;

              const sideGap = "clamp(12px, 1.5vw, 20px)";
              const restingGap = "clamp(16px, 2.778vw, 40px)";

              // Resting: stacked vertically (top at top, bottom at bottom)
              // When active: companion comes on the side (vertically centered alongside active image)
              // Column 1: bottom hovered -> top goes on right; top hovered -> bottom goes on left
              let topX = "0px";
              let topY = `calc(-1 * (${smallH} / 2 + ${restingGap} / 2))`;
              let bottomX = "0px";
              let bottomY = `calc(${smallH} / 2 + ${restingGap} / 2)`;

              if (isColActive) {
                if (isBottomActive) {
                  bottomX = `calc(-1 * (${smallW} + ${sideGap}) / 2)`;
                  bottomY = "0px";
                  topX = `calc((${activeW} + ${sideGap}) / 2)`;
                  topY = "0px";
                } else {
                  topX = `calc((${smallW} + ${sideGap}) / 2)`;
                  topY = "0px";
                  bottomX = `calc(-1 * (${activeW} + ${sideGap}) / 2)`;
                  bottomY = "0px";
                }
              }

              return (
                <div
                  className="relative shrink-0 flex items-center justify-center"
                  style={{
                    width: isColActive ? `calc(${activeW} + ${smallW} + ${sideGap})` : smallW,
                    height: isColActive ? activeH : `calc(${smallH} * 2 + ${restingGap})`,
                    zIndex: isColActive ? 30 : d1 === 1 ? 20 : 10,
                    transition:
                      "width 2500ms cubic-bezier(0.16, 1, 0.3, 1), height 2500ms cubic-bezier(0.16, 1, 0.3, 1)",
                    willChange: "width, height",
                  }}
                >
                  {/* Top Image: left two image column top */}
                  <div
                    className="absolute overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                    style={{
                      top: "50%",
                      left: "50%",
                      width: topW,
                      height: topH,
                      zIndex: topZ,
                      opacity: topOpacity,
                      boxShadow: isTopActive
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.95)"
                        : "0 10px 20px -8px rgba(0, 0, 0, 0.5)",
                      pointerEvents: "auto",
                      transform: `translate(-50%, -50%) translate3d(${topX}, ${topY}, 0)`,
                      transition:
                        "width 2500ms cubic-bezier(0.16, 1, 0.3, 1), height 2500ms cubic-bezier(0.16, 1, 0.3, 1), transform 2500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 2500ms ease, box-shadow 2500ms ease",
                      willChange: "width, height, transform",
                    }}
                    onMouseEnter={() => {
                      setActiveCol(1);
                      setActiveStackedChoice("top");
                    }}
                  >
                    <Image
                      src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6085039f-c122-4b95-cbea-08b5fc61e900/public"
                      alt="Raking Coffee Cherries on Raised Bed"
                      fill
                      unoptimized
                      sizes="501px"
                      className="object-cover pointer-events-none transition-transform duration-[2500ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Bottom Image: left two image column bottom */}
                  <div
                    className="absolute overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                    style={{
                      top: "50%",
                      left: "50%",
                      width: bottomW,
                      height: bottomH,
                      zIndex: bottomZ,
                      opacity: bottomOpacity,
                      boxShadow: isBottomActive
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.95)"
                        : "0 10px 20px -8px rgba(0, 0, 0, 0.5)",
                      pointerEvents: "auto",
                      transform: `translate(-50%, -50%) translate3d(${bottomX}, ${bottomY}, 0)`,
                      transition:
                        "width 2500ms cubic-bezier(0.16, 1, 0.3, 1), height 2500ms cubic-bezier(0.16, 1, 0.3, 1), transform 2500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 2500ms ease, box-shadow 2500ms ease",
                      willChange: "width, height, transform",
                    }}
                    onMouseEnter={() => {
                      setActiveCol(1);
                      setActiveStackedChoice("bottom");
                    }}
                  >
                    <Image
                      src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/16a67e44-41e9-4655-bfbe-013a61a25000/public"
                      alt="Farmer Sorting Cherries"
                      fill
                      unoptimized
                      sizes="501px"
                      className="object-cover pointer-events-none transition-transform duration-[2500ms] ease-out group-hover:scale-105"
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
                      "width 2500ms cubic-bezier(0.16, 1, 0.3, 1), height 2500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 2500ms ease, box-shadow 2500ms ease",
                    willChange: "width, height",
                    transform: "translateZ(0)",
                  }}
                  onMouseEnter={() => setActiveCol(2)}
                >
                  <Image
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4bc88755-8242-4362-28a9-1131fbd9e000/public"
                    alt="Plucking Ripe Cherries"
                    fill
                    unoptimized
                    sizes="501px"
                    className="object-cover pointer-events-none transition-transform duration-[2500ms] ease-out group-hover:scale-105"
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
                      "width 2500ms cubic-bezier(0.16, 1, 0.3, 1), height 2500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 2500ms ease, box-shadow 2500ms ease",
                    willChange: "width, height",
                    transform: "translateZ(0)",
                  }}
                  onMouseEnter={() => setActiveCol(3)}
                >
                  <Image
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4c3fc691-5b51-4cbd-0c69-978333aa7500/public"
                    alt="Community Tea Harvester"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 280px, 501px"
                    className="object-cover pointer-events-none transition-transform duration-[2500ms] ease-out group-hover:scale-105"
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
                      "width 2500ms cubic-bezier(0.16, 1, 0.3, 1), height 2500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 2500ms ease, box-shadow 2500ms ease",
                    willChange: "width, height",
                    transform: "translateZ(0)",
                  }}
                  onMouseEnter={() => setActiveCol(4)}
                >
                  <Image
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3d7d81ea-596a-45f1-d8d5-6a94e6282e00/public"
                    alt="Estate Worker in Coffee Foliage"
                    fill
                    unoptimized
                    sizes="501px"
                    className="object-cover pointer-events-none transition-transform duration-[2500ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            })()}

            {/* Column 5: Stacked images in resting state, expands on hover without hiding the other image */}
            {(() => {
              const d5 = Math.abs(5 - effectiveActiveCol);
              const isColActive = effectiveActiveCol === 5;
              const isTopActive = isColActive && activeStackedChoice === "top";
              const isBottomActive = isColActive && activeStackedChoice === "bottom";

              // Dimensions for active vs resting/tier
              const activeW = "clamp(260px, 34.792vw, 501px)";
              const activeH = "clamp(265px, 35.486vw, 511px)";
              const smallW = d5 === 1 ? "clamp(60px, 8vw, 110px)" : "clamp(48px, 6.319vw, 91px)";
              const smallH = d5 === 1 ? "clamp(70px, 9.3vw, 128px)" : "clamp(56px, 7.361vw, 106px)";

              const topW = isTopActive ? activeW : smallW;
              const topH = isTopActive ? activeH : smallH;
              const topZ = isTopActive ? 30 : 10;
              const topOpacity = isTopActive ? 1 : isBottomActive ? 0.75 : d5 === 1 ? 0.85 : 0.65;

              const bottomW = isBottomActive ? activeW : smallW;
              const bottomH = isBottomActive ? activeH : smallH;
              const bottomZ = isBottomActive ? 30 : 10;
              const bottomOpacity = isBottomActive ? 1 : isTopActive ? 0.75 : d5 === 1 ? 0.85 : 0.65;

              const sideGap = "clamp(12px, 1.5vw, 20px)";
              const restingGap = "clamp(16px, 2.778vw, 40px)";

              // Resting: stacked vertically (top at top, bottom at bottom)
              // When active: companion comes on the side (vertically centered alongside active image)
              // Column 2 (col 5) vice versa:
              // bottom hovered -> top goes on LEFT; top hovered -> bottom goes on RIGHT
              let topX = "0px";
              let topY = `calc(-1 * (${smallH} / 2 + ${restingGap} / 2))`;
              let bottomX = "0px";
              let bottomY = `calc(${smallH} / 2 + ${restingGap} / 2)`;

              if (isColActive) {
                if (isBottomActive) {
                  bottomX = `calc((${smallW} + ${sideGap}) / 2)`;
                  bottomY = "0px";
                  topX = `calc(-1 * (${activeW} + ${sideGap}) / 2)`;
                  topY = "0px";
                } else {
                  topX = `calc(-1 * (${smallW} + ${sideGap}) / 2)`;
                  topY = "0px";
                  bottomX = `calc((${activeW} + ${sideGap}) / 2)`;
                  bottomY = "0px";
                }
              }

              return (
                <div
                  className="relative shrink-0 flex items-center justify-center"
                  style={{
                    width: isColActive ? `calc(${activeW} + ${smallW} + ${sideGap})` : smallW,
                    height: isColActive ? activeH : `calc(${smallH} * 2 + ${restingGap})`,
                    zIndex: isColActive ? 30 : d5 === 1 ? 20 : 10,
                    transition:
                      "width 2500ms cubic-bezier(0.16, 1, 0.3, 1), height 2500ms cubic-bezier(0.16, 1, 0.3, 1)",
                    willChange: "width, height",
                  }}
                >
                  {/* Top Image: next two image column top */}
                  <div
                    className="absolute overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                    style={{
                      top: "50%",
                      left: "50%",
                      width: topW,
                      height: topH,
                      zIndex: topZ,
                      opacity: topOpacity,
                      boxShadow: isTopActive
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.95)"
                        : "0 10px 20px -8px rgba(0, 0, 0, 0.5)",
                      pointerEvents: "auto",
                      transform: `translate(-50%, -50%) translate3d(${topX}, ${topY}, 0)`,
                      transition:
                        "width 2500ms cubic-bezier(0.16, 1, 0.3, 1), height 2500ms cubic-bezier(0.16, 1, 0.3, 1), transform 2500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 2500ms ease, box-shadow 2500ms ease",
                      willChange: "width, height, transform",
                    }}
                    onMouseEnter={() => {
                      setActiveCol(5);
                      setActiveStackedChoice("top");
                    }}
                  >
                    <Image
                      src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e585b365-6678-4603-f51b-6bdae13c0800/public"
                      alt="Harvested Coffee Cherries"
                      fill
                      unoptimized
                      sizes="501px"
                      className="object-cover pointer-events-none transition-transform duration-[2500ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Bottom Image: next two image column bottom */}
                  <div
                    className="absolute overflow-hidden bg-neutral-900 group cursor-pointer shrink-0 rounded-[2px]"
                    style={{
                      top: "50%",
                      left: "50%",
                      width: bottomW,
                      height: bottomH,
                      zIndex: bottomZ,
                      opacity: bottomOpacity,
                      boxShadow: isBottomActive
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.95)"
                        : "0 10px 20px -8px rgba(0, 0, 0, 0.5)",
                      pointerEvents: "auto",
                      transform: `translate(-50%, -50%) translate3d(${bottomX}, ${bottomY}, 0)`,
                      transition:
                        "width 2500ms cubic-bezier(0.16, 1, 0.3, 1), height 2500ms cubic-bezier(0.16, 1, 0.3, 1), transform 2500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 2500ms ease, box-shadow 2500ms ease",
                      willChange: "width, height, transform",
                    }}
                    onMouseEnter={() => {
                      setActiveCol(5);
                      setActiveStackedChoice("bottom");
                    }}
                  >
                    <Image
                      src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b2106a0f-beba-4255-e99c-4eecc5abf000/public"
                      alt="Raking Coffee Cherries on Raised Beds"
                      fill
                      unoptimized
                      sizes="501px"
                      className="object-cover pointer-events-none transition-transform duration-[2500ms] ease-out group-hover:scale-105"
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
                      "width 2500ms cubic-bezier(0.16, 1, 0.3, 1), height 2500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 2500ms ease, box-shadow 2500ms ease",
                    willChange: "width, height",
                    transform: "translateZ(0)",
                  }}
                  onMouseEnter={() => setActiveCol(6)}
                >
                  <div className="absolute inset-0" style={{ transform: "scaleX(-1)" }}>
                    <Image
                      src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f12c0095-3f7d-4a20-5db8-593299423f00/public"
                      alt="Estate Preview"
                      fill
                      unoptimized
                      sizes="501px"
                      className="object-cover pointer-events-none transition-transform duration-[2500ms] ease-out group-hover:scale-105"
                    />
                  </div>
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
          SECTION 4B: COFFEE PROCESSING METHODS (Fits screen height, 418:667 & 187:667 dual states)
          ========================================================================= */}
      <section
        id="coffee-processing"
        className="relative w-full bg-black text-white overflow-hidden select-none"
        style={{
          marginTop: "clamp(32px, 4vw, 64px)",
          height: "100vh",
          minHeight: "560px",
          maxHeight: "920px",
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
          paddingTop: "clamp(24px, 3.5vh, 48px)",
          paddingBottom: "clamp(20px, 3vh, 36px)",
          boxSizing: "border-box",
          // CSS custom properties for responsive image scaling adhering strictly to 418:667, 639:587, and 187:667
          ["--img-h" as string]: "clamp(340px, calc(100vh - clamp(200px, 25vh, 260px)), 560px)",
          ["--w-exp" as string]: "calc(var(--img-h) * 418 / 667)",
          ["--w-exp2" as string]: "calc(var(--img-h) * 639 / 587)",
          ["--w-con" as string]: "calc(var(--img-h) * 187 / 667)",
          ["--gap" as string]: "clamp(24px, 3vw, 48px)",
          ["--offset-0" as string]: "max(clamp(320px, 32vw, 480px), calc(100vw - 2.778vw - var(--w-exp) - var(--gap) - var(--w-exp2) + clamp(100px, 12vw, 180px)))",
        }}
      >
        {/* Background Watermark: "COFFEE" (Overlapped by Image 1 top-left on the second 'E') */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            zIndex: 1,
            top: "clamp(24px, 3.5vh, 48px)",
            left: "2.778vw",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "clamp(72px, 8.5vw, 128px)",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "rgba(255, 255, 255, 0.2)",
              textTransform: "uppercase",
            }}
          >
            Coffee
          </span>
        </div>

        {/* Track Container: Holds all three columns with smooth 1000ms transitions */}
        <div
          className="relative z-10 w-full"
          style={{
            marginTop: "calc(clamp(72px, 8.5vw, 128px) * 0.45)",
            height: "calc(var(--img-h) + clamp(100px, 13vh, 135px))",
          }}
        >
          {/* Column 0: Image 1 (Natural Process) */}
          <div
            className="absolute top-0 left-0 shrink-0 flex flex-col items-end"
            style={{
              width: activeCoffeeSlide === 0 ? "var(--w-exp)" : "var(--w-con)",
              transform:
                activeCoffeeSlide === 0
                  ? "translateX(var(--offset-0))"
                  : "translateX(0px)",
              transition:
                "transform 2500ms cubic-bezier(0.16, 1, 0.3, 1), width 2500ms cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform, width",
              zIndex: activeCoffeeSlide === 0 ? 30 : 10,
            }}
            onMouseEnter={() => setActiveCoffeeSlide(0)}
            onClick={() => setActiveCoffeeSlide(0)}
          >
            {/* Heading: Positioned to the left of Image 1 near its bottom */}
            <div
              className="absolute select-none pointer-events-none z-20"
              style={{
                right: "calc(100% + clamp(16px, 2vw, 32px))",
                bottom: "clamp(6px, 1vh, 14px)",
                whiteSpace: "nowrap",
                textAlign: "right",
                opacity: activeCoffeeSlide === 0 ? 1 : 0,
                transform:
                  activeCoffeeSlide === 0
                    ? "translateY(0)"
                    : "translateY(30px)",
                transition:
                  "opacity 2500ms cubic-bezier(0.16, 1, 0.3, 1), transform 2500ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <h3
                className="m-0 text-white"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontSize: "clamp(22px, 2.8vw, 42px)",
                  lineHeight: "105%",
                  letterSpacing: "0%",
                  textAlign: "right",
                }}
              >
                Natural Process<br />(Dry Method)
              </h3>
            </div>

            {/* Image 1 Container: Sits at top of track, overlapping bottom-right of second 'E' of COFFEE */}
            <div
              className="relative w-full overflow-hidden cursor-pointer rounded-[2px]"
              style={{
                height: "var(--img-h)",
              }}
            >
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/dbaee4e4-224c-4aba-77e6-d9f48d8a6100/public"
                alt="Natural Process Dry Method Cherries on Raised Beds"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 418px"
                className="object-cover select-none pointer-events-none"
              />
            </div>

            {/* Description: Positioned DIRECTLY under Image 1, right-aligned to Image 1's right edge, extending left in 3 lines */}
            <div
              className="absolute z-20"
              style={{
                top: "calc(var(--img-h) + clamp(10px, 1.5vh, 16px))",
                right: 0,
                width: "max-content",
                maxWidth: "calc(var(--offset-0) + var(--w-exp) - 2.778vw)",
                opacity: activeCoffeeSlide === 0 ? 1 : 0,
                transform:
                  activeCoffeeSlide === 0
                    ? "translateY(0)"
                    : "translateY(30px)",
                transition:
                  "opacity 2500ms cubic-bezier(0.16, 1, 0.3, 1), transform 2500ms cubic-bezier(0.16, 1, 0.3, 1)",
                pointerEvents: activeCoffeeSlide === 0 ? "auto" : "none",
              }}
            >
              <p
                className="m-0 select-none text-right"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(11px, 0.95vw, 15px)",
                  lineHeight: "135%",
                  letterSpacing: "0%",
                  color: "#DBDBDB",
                }}
              >
                <span className="block whitespace-nowrap">
                  In This Time-Tested Method, Freshly Picked Cherries Are Spread On Wide Surfaces To Dry
                </span>
                <span className="block whitespace-nowrap">
                  Whole In The Sun, Then Hulled To Remove The Skin And Pulp. Slow And Low-Input, It Brings A
                </span>
                <span className="block whitespace-nowrap">
                  Fuller Body And Fruit-Forward Sweetness, And It Rewards Careful, Consistent Drying.
                </span>
              </p>
            </div>
          </div>

          {/* Column 1: Washed Process (Text above + Image 2) */}
          <div
            className="absolute top-0 left-0 shrink-0 flex flex-col justify-end items-end"
            style={{
              width: activeCoffeeSlide === 2 ? "var(--w-con)" : "var(--w-exp2)",
              transform:
                activeCoffeeSlide === 0
                  ? "translateX(calc(var(--offset-0) + var(--w-exp) + var(--gap)))"
                  : activeCoffeeSlide === 1
                  ? "translateX(calc((100vw - 5.556vw - var(--w-exp2)) / 2))"
                  : "translateX(calc(var(--w-con) + var(--gap)))",
              transition:
                "transform 2500ms cubic-bezier(0.16, 1, 0.3, 1), width 2500ms cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform, width",
              zIndex: activeCoffeeSlide === 1 ? 30 : 10,
            }}
            onMouseEnter={() => setActiveCoffeeSlide(1)}
            onClick={() => setActiveCoffeeSlide(1)}
          >
            {/* Washed Process Text (Positioned above Image 2, right-aligned in 3 lines) */}
            <div
              className="w-full flex flex-col items-end text-right overflow-visible mb-3"
              style={{
                opacity: activeCoffeeSlide === 1 ? 1 : 0,
                transform:
                  activeCoffeeSlide === 1
                    ? "translateX(0) translateY(0)"
                    : activeCoffeeSlide === 2
                    ? "translateX(-60px)"
                    : "translateY(-30px)",
                transition:
                  "opacity 2500ms cubic-bezier(0.16, 1, 0.3, 1), transform 2500ms cubic-bezier(0.16, 1, 0.3, 1)",
                pointerEvents: activeCoffeeSlide === 1 ? "auto" : "none",
                minHeight: "clamp(85px, 11vh, 115px)",
              }}
            >
              <h3
                className="m-0 text-white select-none whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontSize: "clamp(22px, 2.6vw, 40px)",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "right",
                }}
              >
                Washed Process (Wet Method)
              </h3>
              <p
                className="m-0 select-none text-right"
                style={{
                  marginTop: "8px",
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(11px, 0.95vw, 15px)",
                  lineHeight: "135%",
                  letterSpacing: "0%",
                  color: "#DBDBDB",
                  width: "max-content",
                  maxWidth: "clamp(520px, 55vw, 760px)",
                }}
              >
                <span className="block whitespace-nowrap">
                  Here, The Skin And Pulp Are Removed Soon After Harvest, And The Beans Are Soaked And Washed
                </span>
                <span className="block whitespace-nowrap">
                  In Clean Water Before Drying. The Result Is A Clean, Bright And Consistent Cup. It Is The
                </span>
                <span className="block whitespace-nowrap">
                  Most Water-Intensive Of The Three Methods, Which Makes Water Management Part Of Quality.
                </span>
              </p>
            </div>

            {/* Image 2 Container */}
            <div
              className="relative w-full overflow-hidden cursor-pointer rounded-[2px]"
              style={{
                height: "var(--img-h)",
              }}
            >
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e91fa152-3598-45a8-fb98-83c5c7f99400/public"
                alt="Washed Process Wet Method Hands Washing Cherries in Water"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Column 2: Honey Process (Text above + Image 3) */}
          <div
            className="absolute top-0 left-0 shrink-0 flex flex-col justify-end items-start"
            style={{
              width: activeCoffeeSlide === 2 ? "var(--w-exp)" : "var(--w-con)",
              transform:
                activeCoffeeSlide === 0
                  ? "translateX(calc(var(--offset-0) + var(--w-exp) + var(--gap) + var(--w-exp2) + var(--gap)))"
                  : activeCoffeeSlide === 1
                  ? "translateX(calc(100vw - 5.556vw - var(--w-con)))"
                  : "translateX(calc((100vw - 5.556vw - var(--w-exp)) / 2))",
              transition:
                "transform 2500ms cubic-bezier(0.16, 1, 0.3, 1), width 2500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 2000ms cubic-bezier(0.16, 1, 0.3, 1)",
              opacity: activeCoffeeSlide === 0 ? 0 : 1,
              pointerEvents: activeCoffeeSlide === 0 ? "none" : "auto",
              willChange: "transform, width, opacity",
              zIndex: activeCoffeeSlide === 2 ? 30 : 10,
            }}
            onMouseEnter={() => setActiveCoffeeSlide(2)}
            onClick={() => setActiveCoffeeSlide(2)}
          >
            {/* Semi-Washed or Honey Process Text (Positioned above Image 3, right-aligned in 3 lines, left-aligned with Image 3) */}
            <div
              className="w-full flex flex-col items-start text-right overflow-visible mb-3"
              style={{
                opacity: activeCoffeeSlide === 2 ? 1 : 0,
                transform:
                  activeCoffeeSlide === 2
                    ? "translateX(0) translateY(0)"
                    : activeCoffeeSlide === 1
                    ? "translateX(60px)"
                    : "translateY(-30px)",
                transition:
                  "opacity 2500ms cubic-bezier(0.16, 1, 0.3, 1), transform 2500ms cubic-bezier(0.16, 1, 0.3, 1)",
                pointerEvents: activeCoffeeSlide === 2 ? "auto" : "none",
                minHeight: "clamp(85px, 11vh, 115px)",
              }}
            >
              <div className="flex flex-col items-end text-right">
                <h3
                  className="m-0 text-white select-none whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-monschone), serif",
                    fontWeight: 400,
                    fontSize: "clamp(22px, 2.6vw, 40px)",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "right",
                  }}
                >
                  Semi-Washed or Honey Process
                </h3>
                <p
                  className="m-0 select-none text-right"
                  style={{
                    marginTop: "8px",
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(11px, 0.95vw, 15px)",
                    lineHeight: "135%",
                    letterSpacing: "0%",
                    color: "#DBDBDB",
                    width: "max-content",
                    maxWidth: "clamp(520px, 55vw, 760px)",
                  }}
                >
                  <span className="block whitespace-nowrap">
                    The Skin Is Removed, But Part Of The Sticky Fruit Layer Stays On The Bean
                  </span>
                  <span className="block whitespace-nowrap">
                    As It Dries. The Result Is A Cup With The Sweetness Of A Natural And More
                  </span>
                  <span className="block whitespace-nowrap">
                    Of The Clarity Of A Washed, With Lower Water Use Than The Full Wet Method.
                  </span>
                </p>
              </div>
            </div>

            {/* Image 3 Container */}
            <div
              className="relative w-full overflow-hidden cursor-pointer rounded-[2px]"
              style={{
                height: "var(--img-h)",
              }}
            >
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/256b619b-b2c8-42db-df09-f94d7fd94a00/public"
                alt="Semi-Washed or Honey Process Handful of Beans"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 418px"
                className="object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE TEA PRODUCTION PROCESS (148px gap from Section 4B)
          ========================================================================= */}
      <section
        id="tea-process"
        className="w-full flex flex-col items-center select-none"
        style={{
          marginTop: "clamp(70px, 10.28vw, 148px)",
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
            {/* CTC Tea Description - width up to margin */}
            <div className="select-none w-full">
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
                    color: "#FFFFFF73",
                  }}
                >
                  {" "} : CTC (Crush, Tear, Curl) makes up over 85% of the market.
                  Leaves are mechanically cut, torn and curled into uniform
                  granules for a strong, bold cup with higher caffeine. It suits
                  high-volume service.
                </span>
              </p>
            </div>

            {/* 156px under it: Terraced Hills Image expanded by 20% (361x362, aligned right) */}
            <div
              className="w-full flex justify-end"
              style={{ marginTop: "clamp(48px, 10.83vw, 156px)" }}
            >
              <div
                className="relative rounded-[2px] overflow-hidden shadow-2xl shrink-0"
                style={{
                  width: "clamp(240px, 25.08vw, 361px)",
                  height: "clamp(240px, 25.16vw, 362px)",
                  aspectRatio: "301 / 302",
                }}
              >
                <Image
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3a7e85fd-e8d8-4385-b8ce-d6fa4d08d000/public"
                  alt="Terraced Tea Hills"
                  fill
                  unoptimized
                  sizes="361px"
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
                color: "#FFFFFF73",
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

        {/* 72px gap then Green Tea Title & Description (centered per design) */}
        <div
          className="w-full flex flex-col items-center select-none"
          style={{ marginTop: "clamp(36px, 5vw, 72px)" }}
        >
          <h3
            className="text-center text-white m-0"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 3.333vw, 48px)",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Green Tea
          </h3>

          <p
            className="text-center m-0 max-w-[940px]"
            style={{
              marginTop: "25px",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(15px, 1.25vw, 18px)",
              lineHeight: "130%",
              letterSpacing: "0%",
              color: "#FFFFFF73",
            }}
          >
            Green tea is made from unoxidized leaves and is one of the least processed types of tea, which helps retain its natural antioxidants and beneficial polyphenols. It offers a fresh, light flavor with subtle grassy notes and a gentle caffeine boost, making it a popular choice for a healthy, refreshing drink.
          </p>
        </div>

        {/* 111px gap then footer */}
        <div
          className="w-full"
          style={{ height: "clamp(48px, 7.7vw, 111px)" }}
        />
      </section>

      {/* L'ORIENTALIS FOOTER */}
      <LOrientalisFooter />
    </main>
  );
}
