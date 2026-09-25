"use client";

import React, { useRef, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import LOrientalisHeader from "@/components/LOrientalisHeader";

export default function LOrientalisPage() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("sourcing");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-hidden selection:bg-[#365944] selection:text-white">
      {/* Cloudflare Stream Player SDK */}
      <Script
        src="https://embed.cloudflarestream.com/embed/sdk.latest.js"
        strategy="afterInteractive"
      />

      {/* HERO SECTION WITH VIDEO & OVERLAY */}
      <section className="relative w-full bg-black overflow-hidden" id="hero">
        {/* 16:9 Video Canvas (paddingTop: 56.25% based on 1440px wide reference) */}
        <div
          className="relative w-full overflow-hidden"
          style={{ position: "relative", paddingTop: "56.25%" }}
        >
          {/* Cloudflare Stream Video Iframe - Autoplay, Muted, Loop */}
          <iframe
            ref={iframeRef}
            src="https://customer-nqls4utgv1ytiyat.cloudflarestream.com/646c1e22d36d5dc9459d4080ac0e4508/iframe?poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2F646c1e22d36d5dc9459d4080ac0e4508%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true&muted=true&loop=true&controls=false&preload=auto"
            loading="lazy"
            style={{
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          />

          {/* Subtle Top & Bottom Cinematic Gradient for Readability */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 32%, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.55) 100%)",
            }}
          />

          {/* Bottom portion behind text: solid black with 30px gradual gradient above it */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none z-10"
            style={{
              height: "calc(46.8px + 30px)",
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0px, #000000 30px, #000000 100%)",
            }}
          />

          {/* HERO OVERLAY CONTENT */}
          <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between">
            {/* TOP AREA: Header + 96px Gap + Titles */}
            <div className="w-full flex flex-col">
              {/* Lorientalis Header (53px from top, px-40px) */}
              <LOrientalisHeader />

              {/* 96px below header (96 / 1440 * 100vw = 6.667vw) */}
              <div
                className="w-full flex items-end justify-between"
                style={{
                  marginTop: "6.667vw", // 96px at 1440px
                  paddingLeft: "2.778vw", // 40px at 1440px
                  paddingRight: "2.778vw", // 40px at 1440px
                }}
              >
                {/* On left: Beverage Botanicals */}
                <h1
                  className="select-none"
                  style={{
                    fontFamily: "var(--font-monschone), serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "3.889vw", // 56px at 1440px (56 / 1440 * 100vw)
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#FFFFFF",
                  }}
                >
                  Beverage Botanicals
                </h1>

                {/* On right: L’orientalis Tea & Coffee */}
                <span
                  className="select-none"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: "1.25vw", // 18px at 1440px (18 / 1440 * 100vw)
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "center",
                    verticalAlign: "bottom",
                    color: "#FFFFFF",
                  }}
                >
                  L’orientalis Tea &amp; Coffee
                </span>
              </div>
            </div>

            {/* BOTTOM AREA: The Growing Regions (Left Bottom) */}
            <div
              className="relative w-full flex items-end justify-start pointer-events-none"
              style={{
                paddingLeft: "2.778vw", // 40px at 1440px
                paddingRight: "2.778vw", // 40px at 1440px
                paddingBottom: "0px",
              }}
            >
              {/* Bottom Left: The Growing Regions Above The Tropic Of Cancer */}
              <div
                className="flex flex-col text-left select-none pointer-events-auto"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "130%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                }}
              >
                <span>The Growing Regions</span>
                <span>Above The Tropic Of Cancer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRADIENT SECTION UNDER HERO */}
      <div
        className="relative w-full flex items-center justify-center z-20"
        style={{
          width: "100%",
          height: "calc(214px + 46.8px + 42.8px)",
          marginTop: "-46.8px",
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 70.44%)",
        }}
      >
        <button
          type="button"
          onClick={handleScrollDown}
          className="relative z-10 pointer-events-auto cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95"
          style={{
            width: "214px",
            height: "214px",
          }}
          aria-label="Scroll down"
        >
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d6afe7e6-daff-4bb6-60ef-d53bd6a88e00/public"
            alt="Scroll down"
            width={214}
            height={214}
            priority
            unoptimized
            className="w-[214px] h-[214px] object-contain select-none pointer-events-none animate-scroll-oscillate"
            style={{
              WebkitMaskImage:
                "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0) 100%)",
              maskImage:
                "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0) 100%)",
            }}
          />
        </button>

        {/* Overlaying gradient of black covering all of the oscillating area */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 70.44%)",
          }}
        />
      </div>

      {/* SOURCING & BOTANICALS STORY SECTION */}
      <section
        id="sourcing"
        className="relative w-full bg-black text-white"
        style={{
          paddingLeft: "2.778vw", // 40px at 1440px
          paddingRight: "2.778vw", // 40px at 1440px
          paddingTop: "6.944vw", // 100px at 1440px
          paddingBottom: "8.333vw", // 120px at 1440px
        }}
      >
        {/* Section Intro */}
        <div className="max-w-[88vw] mx-auto mb-[5.556vw]">
          <div className="flex items-center gap-[0.833vw] mb-[1.389vw]">
            <span
              className="text-[#DEE2C9] uppercase tracking-[0.25em]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "0.833vw", // 12px at 1440px
                fontWeight: 600,
                letterSpacing: "0.25em",
              }}
            >
              Himalayan Terroir · Origin Profile
            </span>
            <div className="h-[1px] w-[3vw] bg-[#DEE2C9]/40" />
          </div>

          <h2
            className="text-white mb-[2vw]"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "4.167vw", // 60px at 1440px
              lineHeight: "1.1",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Above The Tropic Of Cancer
          </h2>

          <p
            className="text-white/80 max-w-[65vw]"
            style={{
              fontFamily: "var(--font-poly), 'Poly', serif",
              fontStyle: "italic",
              fontSize: "1.667vw", // 24px at 1440px
              lineHeight: "1.5",
              fontWeight: 400,
            }}
          >
            Where Himalayan terroir meets the cup — L’ORIENTALIS brings
            extraordinary botanicals, origins, and flavour into focus.
          </p>
        </div>

        {/* Narrative Columns */}
        <div className="max-w-[88vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[3.5vw] border-t border-white/10 pt-[4.5vw] mb-[6vw]">
          {/* Pillar 1 */}
          <div className="flex flex-col">
            <span
              className="text-[#365944] mb-[1vw]"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "1.667vw",
              }}
            >
              01
            </span>
            <h3
              className="text-white mb-[0.8vw]"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "1.528vw", // 22px at 1440px
                fontWeight: 400,
              }}
            >
              High-Altitude Elevation
            </h3>
            <p
              className="text-white/70"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "0.972vw", // 14px at 1440px
                lineHeight: "1.65",
                fontWeight: 400,
              }}
            >
              Cultivated in microclimates perched above cloud lines. The thin
              mountain air and intense sunlight generate concentrated botanical
              oils with unmistakable clarity.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col">
            <span
              className="text-[#365944] mb-[1vw]"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "1.667vw",
              }}
            >
              02
            </span>
            <h3
              className="text-white mb-[0.8vw]"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "1.528vw",
                fontWeight: 400,
              }}
            >
              Single-Estate Harvest
            </h3>
            <p
              className="text-white/70"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "0.972vw",
                lineHeight: "1.65",
                fontWeight: 400,
              }}
            >
              Plucked with seasonal discipline at dawn. Every batch is traced
              directly to ancestral estates where harvest methods remain
              unhurried and gentle.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col">
            <span
              className="text-[#365944] mb-[1vw]"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "1.667vw",
              }}
            >
              03
            </span>
            <h3
              className="text-white mb-[0.8vw]"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "1.528vw",
                fontWeight: 400,
              }}
            >
              Craft Botanical Expression
            </h3>
            <p
              className="text-white/70"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "0.972vw",
                lineHeight: "1.65",
                fontWeight: 400,
              }}
            >
              Precision thermal curves allow the natural terroir to express
              itself: wild blossoms, crushed evergreen, and a sweet lingering
              finish.
            </p>
          </div>
        </div>

        {/* Sensory Card Bento */}
        <div className="max-w-[88vw] mx-auto bg-white/[0.02] border border-white/10 rounded-2xl p-[3.5vw] mb-[6vw]">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-[3vw] gap-4">
            <div>
              <span
                className="text-[#DEE2C9] uppercase tracking-[0.2em] block mb-[0.5vw]"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "0.764vw",
                  fontWeight: 600,
                }}
              >
                Sensory Profile
              </span>
              <h3
                className="text-white"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontSize: "2.222vw", // 32px at 1440px
                  fontWeight: 400,
                }}
              >
                Aroma &amp; Palate Dynamics
              </h3>
            </div>
            <div className="flex items-center gap-[1.2vw]">
              <span
                className="px-[1vw] py-[0.4vw] rounded-full border border-white/20 text-white/80"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "0.833vw",
                }}
              >
                High Altitude (2,400m)
              </span>
              <span
                className="px-[1vw] py-[0.4vw] rounded-full border border-white/20 text-white/80"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "0.833vw",
                }}
              >
                Himalayan Slopes
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-[2vw]">
            <div className="p-[1.5vw] bg-black/40 rounded-xl border border-white/5">
              <span
                className="text-white/40 block mb-[0.5vw]"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "0.764vw",
                  textTransform: "uppercase",
                }}
              >
                Nose
              </span>
              <p
                className="text-white"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "1.042vw",
                  fontWeight: 500,
                }}
              >
                Wild alpine flora, dew-soaked stone, fresh cedar
              </p>
            </div>

            <div className="p-[1.5vw] bg-black/40 rounded-xl border border-white/5">
              <span
                className="text-white/40 block mb-[0.5vw]"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "0.764vw",
                  textTransform: "uppercase",
                }}
              >
                Body
              </span>
              <p
                className="text-white"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "1.042vw",
                  fontWeight: 500,
                }}
              >
                Crisp herbal warmth, mountain berries, silky density
              </p>
            </div>

            <div className="p-[1.5vw] bg-black/40 rounded-xl border border-white/5">
              <span
                className="text-white/40 block mb-[0.5vw]"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "0.764vw",
                  textTransform: "uppercase",
                }}
              >
                Finish
              </span>
              <p
                className="text-white"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "1.042vw",
                  fontWeight: 500,
                }}
              >
                Subtle pine resonance, sweet botanical finish
              </p>
            </div>

            <div className="p-[1.5vw] bg-black/40 rounded-xl border border-white/5">
              <span
                className="text-white/40 block mb-[0.5vw]"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "0.764vw",
                  textTransform: "uppercase",
                }}
              >
                Serving
              </span>
              <p
                className="text-white"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "1.042vw",
                  fontWeight: 500,
                }}
              >
                Cold brew pour or gentle 75°C infusion
              </p>
            </div>
          </div>
        </div>

        {/* Contact / Enquire Section */}
        <div
          id="contact"
          className="max-w-[88vw] mx-auto flex flex-col md:flex-row items-center justify-between py-[4vw] border-t border-b border-white/10 gap-6"
        >
          <div>
            <h3
              className="text-white mb-[0.5vw]"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "1.806vw", // 26px at 1440px
                fontWeight: 400,
              }}
            >
              Enquire for Private Allocation
            </h3>
            <p
              className="text-white/60"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "0.972vw", // 14px at 1440px
              }}
            >
              Curated allocations for connoisseurs and bespoke hospitality programs.
            </p>
          </div>

          <div className="flex items-center gap-[2vw]">
            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors duration-200"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "0.972vw",
              }}
            >
              &larr; Back to Home
            </Link>

            <div
              className="font-manrope font-bold text-[0.972vw] leading-[1.528vw] tracking-[0%] cursor-pointer group/btn transition-opacity duration-300 hover:opacity-90 select-none px-[1.5vw] py-[0.7vw] rounded-full border border-white/20 bg-white/5"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 700,
                fontSize: "0.972vw",
              }}
            >
              <span className="animate-enquire-shimmer">
                Enquire now &gt;
              </span>
            </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="max-w-[88vw] mx-auto pt-[4vw] flex flex-col md:flex-row items-center justify-between text-white/40 text-[0.833vw]">
          <span style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
            PRÊT À BOIRE · All rights reserved
          </span>
          <span
            style={{
              fontFamily: "var(--font-poly), 'Poly', serif",
              fontStyle: "italic",
            }}
          >
            By WAE
          </span>
        </footer>
      </section>
    </main>
  );
}
