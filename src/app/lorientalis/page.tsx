"use client";

import React, { useRef } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import LOrientalisHeader from "@/components/LOrientalisHeader";

export default function LOrientalisPage() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handleScrollDown = () => {
    const nextSection =
      document.getElementById("our-story") ||
      document.getElementById("sourcing");
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
              pointerEvents: "none",
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen={true}
          />

          {/* Subtly dark gradient tint */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)",
            }}
          />

          {/* GRADUAL GRADIENT & 60% BLACK BACKDROP FOR HERO BOTTOM TEXT */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
            style={{
              height: "calc(46.8px + 30px)",
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 38.96%, #000000 100%)",
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
                {/* Beverage Botanicals */}
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

      {/* OUR STORY SECTION */}
      <section
        id="sourcing"
        className="relative w-full bg-black overflow-hidden flex flex-col justify-between"
        style={{
          paddingLeft: "2.778vw", // 40px at 1440px - consistent across page
          paddingRight: "2.778vw", // 40px at 1440px - consistent across page
          paddingTop: "clamp(36px, 3.472vw, 50px)",
          paddingBottom: "clamp(48px, 4.861vw, 72px)",
          minHeight: "clamp(540px, 43.55vw, 680px)",
        }}
      >
        <span id="our-story" className="sr-only" />

        {/* Background image layover on top of black background */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3fc1344b-d12d-4975-b4f5-3862a4956400/public"
            alt="Our Story Background"
            fill
            priority
            unoptimized
            className="object-cover object-center w-full h-full"
          />
        </div>

        {/* TOP ROW: OUR STORY (Left) & HEADLINE (Right) */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Top Left: OUR STORY */}
          <h2
            className="uppercase select-none text-[#717171]"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: "clamp(32px, 3.333vw, 48px)", // 48px at 1440px
              lineHeight: "100%",
              letterSpacing: "0%",
              verticalAlign: "bottom",
              textTransform: "uppercase",
              color: "#717171",
            }}
          >
            OUR STORY
          </h2>

          {/* Top Right: Headline */}
          <div
            className="text-right ml-auto max-w-full md:max-w-[720px] lg:max-w-[820px]"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "clamp(26px, 3.194vw, 46px)", // 46px at 1440px
              lineHeight: "clamp(34px, 4.097vw, 59px)", // 59px at 1440px
              letterSpacing: "0%",
              textAlign: "right",
              color: "#717171",
            }}
          >
            <p className="space-y-0">
              <span className="block">
                {"For years, "}
                <span className="text-white font-medium">WAE</span>
                {" worked with"}
              </span>
              <span className="block">the most fundamental</span>
              <span className="block">ingredient in every</span>
              <span className="block text-white font-medium">brewed beverage</span>
            </p>
          </div>
        </div>

        {/* BOTTOM LEFT: 477px Paragraph */}
        <div
          className="relative z-10 w-full mt-12 md:mt-16"
          style={{
            maxWidth: "477px",
          }}
        >
          <p
            className="text-white text-left"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#FFFFFF",
            }}
          >
            For years, WAE worked with the most fundamental ingredient in every
            brewed beverage: WATER. We studied its chemistry, engineered its
            purity, and calibrated its mineral balance — learning precisely how
            it shapes extraction, aroma, acidity, sweetness and mouthfeel. Having
            mastered the invisible ingredient, the move into speciality coffee
            and tea was not diversification. It was a natural continuation.
          </p>
        </div>
      </section>

      {/* COFFEE: GROWN IN THE SHADOW OF THE EASTERN HILLS SECTION */}
      <section
        id="coffee"
        className="relative w-full bg-black text-white overflow-hidden"
        style={{
          paddingLeft: "2.778vw", // 40px at 1440px - consistent across page
          paddingRight: "2.778vw", // 40px at 1440px - consistent across page
          paddingTop: "clamp(60px, 6.944vw, 100px)",
          paddingBottom: "clamp(60px, 6.944vw, 100px)",
        }}
      >
        {/* TOP ROW: LEFT IMAGE (542x492) + RIGHT VERTICALLY CENTERED CONTENT */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[60px] xl:gap-[80px]">
          {/* Left Image: 542px x 492px */}
          <div
            className="relative w-full max-w-[542px] overflow-hidden shrink-0"
            style={{
              aspectRatio: "542 / 492",
              maxHeight: "492px",
            }}
          >
            <Image
              src="/images/coffee-cherries.png"
              alt="Coffee cherries grown in the shadow of the Eastern Hills"
              width={542}
              height={492}
              priority
              unoptimized
              className="w-full h-full object-cover select-none"
            />
          </div>

          {/* Right Content: Vertically centered relative to the image */}
          <div className="flex flex-col justify-center flex-1 w-full max-w-[650px] lg:max-w-none">
            {/* Headline and COFFEE label */}
            <div className="flex items-start justify-between gap-6 w-full">
              <h3
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 3.472vw, 50px)", // 50px at 1440px
                  lineHeight: "clamp(38px, 4.028vw, 58px)", // 58px at 1440px
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                }}
              >
                Grown in the
                <br />
                Shadow of the
                <br />
                Eastern Hills
              </h3>

              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "right",
                  color: "#FFFFFF",
                }}
                className="shrink-0 mt-1 select-none uppercase tracking-wider"
              >
                COFFEE
              </span>
            </div>

            {/* Paragraph & Read more */}
            <p
              className="mt-8 md:mt-10 text-white"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "24px",
                letterSpacing: "0%",
                textAlign: "justify",
                verticalAlign: "bottom",
              }}
            >
              Our coffee is cultivated across altitudes where cool nights and
              mineral-rich soil slow the cherry&apos;s ripening — concentrating
              sugars and acidity long before the bean ever meets a roaster. Most
              origin stories stop at geography.{" "}
              <button
                type="button"
                className="inline font-semibold text-[#7CC055] underline hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  textAlign: "justify",
                  verticalAlign: "bottom",
                  textTransform: "capitalize",
                  textDecoration: "underline",
                  textDecorationStyle: "solid",
                  color: "#7CC055",
                }}
              >
                Read more
              </button>
            </p>
          </div>
        </div>

        {/* 106px GAP */}
        <div className="w-full h-[60px] md:h-[106px]" />

        {/* ORIGIN, CRAFT, AROMA SECTION */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 relative items-center">
          {/* 1. Origin */}
          <div className="relative flex items-center justify-center gap-3.5 py-4">
            <div className="w-[21px] h-[21px] relative shrink-0 flex items-center justify-center">
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/631940a4-ab0d-43a2-e167-55886e37d900/public"
                alt="Origin"
                width={21}
                height={21}
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="flex flex-col text-left justify-center">
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "10px",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                  color: "#5C605E",
                }}
              >
                Origin
              </span>
              <span
                className="mt-[6px]"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "10px",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                }}
              >
                Integrity
              </span>
            </div>

            {/* Vertical divider on right */}
            <div
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[50px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50.96%, rgba(255, 255, 255, 0.04) 100%)",
              }}
            />
          </div>

          {/* 2. Craft */}
          <div className="relative flex items-center justify-center gap-3.5 py-4">
            <div className="w-[16.5px] h-[16.5px] relative shrink-0 flex items-center justify-center">
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/60d75e66-cf34-4f4a-1fa2-01aec9bb0700/public"
                alt="Craft"
                width={17}
                height={17}
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="flex flex-col text-left justify-center">
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "10px",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                  color: "#5C605E",
                }}
              >
                Craft
              </span>
              <span
                className="mt-[6px]"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "10px",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                }}
              >
                Precision
              </span>
            </div>

            {/* Vertical divider on right */}
            <div
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[50px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50.96%, rgba(255, 255, 255, 0.04) 100%)",
              }}
            />
          </div>

          {/* 3. Aroma */}
          <div className="relative flex items-center justify-center gap-3.5 py-4">
            <div className="w-[14px] h-[21px] relative shrink-0 flex items-center justify-center">
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/36b003bd-4c40-49d8-5eba-cc2b16ee7e00/public"
                alt="Aroma"
                width={14}
                height={21}
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="flex flex-col text-left justify-center">
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "10px",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                  color: "#5C605E",
                }}
              >
                Aroma
              </span>
              <span
                className="mt-[6px]"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "10px",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                }}
              >
                Fidelity
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & ENQUIRY SECTION */}
      <section
        className="relative w-full bg-black text-white"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Contact / Enquire Section */}
        <div
          id="contact"
          className="w-full flex flex-col md:flex-row items-center justify-between py-[4vw] border-t border-b border-white/10 gap-6"
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
        <footer className="w-full pt-[4vw] pb-[2vw] flex flex-col md:flex-row items-center justify-between text-white/40 text-[0.833vw]">
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
