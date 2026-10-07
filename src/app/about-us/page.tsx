"use client";

import React from "react";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Easily replaceable asset placeholders - swap with real URLs when provided
const ABOUT_PLACEHOLDERS = {
  // Hero section assets
  heroFarmer:
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
  heroTea:
    "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",

  // Craft & apparatus 3-column collage assets
  craftPourOver:
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e550a81e-cc7a-492c-287c-d7e5b8cf0500/public",
  craftBeansRoasterVideo:
    "https://customer-nqls4utgv1ytiyat.cloudflarestream.com/fa25d432e73f3fd10080fc5dfee0e634/iframe",
  craftEspresso:
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a83659a4-e5bb-423b-24e9-903afe8f6700/public",

  // "From Origin To Cup" section assets
  originTeaEstate:
    "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  originCoffeeCherries:
    "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=800&q=80",
};

export default function AboutUsPage() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-clip selection:bg-white/20 selection:text-white">
      {/* Cloudflare Stream Player SDK */}
      <Script
        src="https://embed.cloudflarestream.com/embed/sdk.latest.js"
        strategy="afterInteractive"
      />

      {/* 1. MAIN HEADER COMPONENT */}
      <Header />

      {/* 2. HERO SECTION (Full-bleed from top: 0, Header laid over) */}
      <section className="relative w-full flex flex-col lg:flex-row items-stretch bg-black overflow-hidden">
        {/* Left Column (50vw): 720x844 Farmer Image starting from top: 0 and left: 0 */}
        <div
          className="relative w-full lg:w-[50vw] aspect-[720/844] overflow-hidden bg-[#111111] shrink-0"
          style={{ aspectRatio: "720 / 844" }}
        >
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/fe1930f7-4232-426d-1d9c-fee4576a7a00/public"
            alt="WAE Beverage Initiative"
            className="w-full h-full object-cover select-none"
            style={{ aspectRatio: "720 / 844" }}
            loading="eager"
          />

          {/* Smooth black gradient fade at the bottom of the photo */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.95) 100%)",
            }}
          />

          {/* Overlay Title: "WAE Beverage Initiative" */}
          <div className="absolute bottom-[3.5vw] left-[4.166vw] z-20 select-none">
            <h1 className="font-normal m-0 p-0">
              <span
                className="block text-white uppercase"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontSize: "clamp(32px, 4.2vw, 64px)",
                  lineHeight: "1.0",
                  letterSpacing: "-0.01em",
                }}
              >
                WAE
              </span>
              <span
                className="block text-white mt-1.5"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontSize: "clamp(28px, 3.7vw, 54px)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.01em",
                }}
              >
                Beverage Initiative
              </span>
            </h1>
          </div>
        </div>

        {/* Right Column (50vw): Centered 248x257 Video + Mission Statement */}
        <div className="w-full lg:w-[50vw] flex flex-col items-center justify-center px-6 lg:px-0 py-16 lg:py-0 bg-black shrink-0">
          <div className="w-full max-w-[248px] lg:max-w-none lg:w-[17.222vw]">
            {/* 248x257 Responsive Cloudflare Stream Video Container */}
            <div
              className="relative w-full overflow-hidden bg-black mb-6 lg:mb-[2.2vw] rounded-[2px] pointer-events-none"
              style={{
                aspectRatio: "248 / 257",
              }}
            >
              <iframe
                src="https://customer-nqls4utgv1ytiyat.cloudflarestream.com/8171d0626305612ef00ab8ee1331b36d/iframe?poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2F8171d0626305612ef00ab8ee1331b36d%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true&muted=true&loop=true&controls=false&preload=auto"
                loading="lazy"
                className="border-0 absolute top-0 left-0 w-full h-full"
                style={{
                  border: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  transform: "scale(1.8423)",
                  transformOrigin: "center center",
                }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              />
            </div>

            {/* Description Paragraph */}
            <p
              className="text-white select-none"
              style={{
                fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "clamp(13px, 1.111vw, 16px)",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "justify",
              }}
            >
              WAE&apos;s beverage initiative extends its engineering standard
              beyond water — bringing tea and coffee into the same system of
              quality, consistency and reliability, for premium spaces that
              expect more from every serve.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY / STATEMENT QUOTE SECTION */}
      <section
        className="relative w-full px-[4.166vw] select-none"
        style={{
          paddingTop: "clamp(120px, 18.403vw, 265px)",
          paddingBottom: "clamp(120px, 18.403vw, 265px)",
        }}
      >
        <div className="w-full max-w-[1042px] lg:max-w-[72.5vw] mx-auto text-center">
          <h2
            className="font-normal select-none m-0 p-0"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "clamp(24px, 2.778vw, 40px)",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            <span className="text-white/40">Years Of </span>
            <span className="text-white">Field Knowledge</span>
            <span className="text-white/40">. Trusted Local </span>
            <span className="text-white">Relationships</span>
            <span className="text-white/40">. An </span>
            <br className="hidden md:inline" />
            <span className="text-white/40">Understanding Of Origin, </span>
            <span className="text-white">Earned Over Time</span>
            <span className="text-white/40">. </span>
            <br className="hidden md:inline" />
            <span className="text-white/40">This Is What </span>
            <span className="text-white">WAE</span>
            <span className="text-white/40"> Brings To Every </span>
            <span className="text-white">Beverage</span>
            <span className="text-white/40"> It Serves.</span>
          </h2>
        </div>
      </section>

      {/* 4. THREE-COLUMN CRAFT & APPARATUS COLLAGE SECTION */}
      <section className="relative w-full pt-0 pb-[8vw] lg:pb-[10vw] px-[4.166vw]">
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-[0.625vw]">
          {/* Column 1 (Left): Top Pour-over Image (308x428) + Bottom Narrative */}
          <div className="w-full lg:w-[21.389vw] flex flex-col justify-between shrink-0">
            {/* Top Pour-over Image (308x428) */}
            <div
              className="relative w-full overflow-hidden bg-[#111111]"
              style={{
                aspectRatio: "308 / 428",
              }}
            >
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e550a81e-cc7a-492c-287c-d7e5b8cf0500/public"
                alt="Barista brewing pour-over coffee"
                className="w-full h-full object-cover select-none"
                style={{ aspectRatio: "308 / 428" }}
                loading="lazy"
              />
            </div>

            {/* Bottom Narrative Text */}
            <p
              className="text-white select-none pt-6 lg:pt-0"
              style={{
                fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "clamp(13px, 1.111vw, 16px)",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              sourcing, brewing and serving them with the same rigour applied to
              purity, consistency and performance. For hotels, offices,
              airports and premium hospitality spaces, this means one partner,
              already trusted for water, now delivering a complete beverage
              standard.
            </p>
          </div>

          {/* Column 2 (Center): 691x867 Cloudflare Stream Video */}
          <div className="w-full lg:w-[47.986vw] shrink-0 overflow-hidden bg-black">
            <div
              className="relative w-full overflow-hidden bg-black pointer-events-none"
              style={{
                aspectRatio: "691 / 867",
              }}
            >
              <iframe
                src="https://customer-nqls4utgv1ytiyat.cloudflarestream.com/fa25d432e73f3fd10080fc5dfee0e634/iframe?muted=true&loop=true&poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2Ffa25d432e73f3fd10080fc5dfee0e634%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true&controls=false&preload=auto"
                loading="lazy"
                className="border-0 absolute top-0 left-0 w-full h-full"
                style={{
                  border: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  transform: "scale(2.38)",
                  transformOrigin: "center center",
                }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              />
            </div>
          </div>

          {/* Column 3 (Right): Top Narrative + Bottom Espresso Extraction Image (303x428) */}
          <div className="w-full lg:w-[21.042vw] flex flex-col justify-between shrink-0">
            {/* Top Narrative Text */}
            <p
              className="text-white select-none pb-6 lg:pb-0"
              style={{
                fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "clamp(13px, 1.111vw, 16px)",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Having built its reputation on water infrastructure, WAE now
              extends that same discipline to tea and coffee -
            </p>

            {/* Bottom Espresso Machine Image (303x428) */}
            <div
              className="relative w-full overflow-hidden bg-[#111111]"
              style={{
                aspectRatio: "303 / 428",
              }}
            >
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a83659a4-e5bb-423b-24e9-903afe8f6700/public"
                alt="Espresso shot pulling into cup"
                className="w-full h-full object-cover select-none"
                style={{ aspectRatio: "303 / 428" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. "FROM ORIGIN TO CUP" SAGE GREEN BENTO SECTION */}
      <section className="relative w-full px-[4.166vw] pt-[6vw] pb-[10vw]">
        <div
          className="relative w-full rounded-[16px] md:rounded-[20px] p-[5vw] lg:p-[4.5vw] overflow-visible"
          style={{
            backgroundColor: "#55684B",
          }}
        >
          {/* Top Row: Huge Title on Left + Origin Summary on Right */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0">
            {/* Left Title: "From Origin To Cup" */}
            <h2
              className="select-none font-normal m-0 p-0"
              style={{
                fontFamily: "var(--font-monschone), serif",
                fontSize: "clamp(42px, 5.8vw, 86px)",
                lineHeight: "0.95",
                letterSpacing: "-0.02em",
              }}
            >
              <span className="block text-[#E8EDE2]">From</span>
              <span className="block text-[#27381E]">Origin</span>
              <span className="block text-[#27381E]">To Cup</span>
            </h2>

            {/* Right Summary Paragraph */}
            <p
              className="text-[#E8EDE2]/80 select-none max-w-[420px] lg:max-w-[27vw]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(12px, 0.95vw, 14px)",
                lineHeight: "1.6",
              }}
            >
              WAE traces every ingredient back to where it began — the estates,
              growers and terrains that give tea and coffee their character,
              held to the same standard WAE applies to water.
            </p>
          </div>

          {/* Thin Horizontal Divider */}
          <div className="w-full h-[1px] bg-white/20 my-[4.5vw]" />

          {/* Middle/Right: Item 1 - Tea Estate At Sunrise */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-end gap-6 md:gap-[3vw] mb-[8vw] lg:mb-[6vw]">
            {/* Text description (left of image) */}
            <div className="md:text-right max-w-[340px] lg:max-w-[24vw] order-2 md:order-1">
              <h3
                className="text-[#27381E] font-semibold tracking-normal"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(15px, 1.1vw, 17px)",
                  lineHeight: "1.3",
                }}
              >
                1. Tea Estate At Sunrise
              </h3>
              <p
                className="text-[#27381E]/80 mt-2 sm:mt-3"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(12px, 0.95vw, 14px)",
                  lineHeight: "1.55",
                }}
              >
                Sourced from tea gardens selected for altitude, soil and season,
                not volume.
              </p>
            </div>

            {/* Tea Estate Image (right) */}
            <div className="w-[180px] sm:w-[220px] lg:w-[19vw] aspect-[4/5] overflow-hidden rounded-[4px] bg-[#3B4A34] shrink-0 order-1 md:order-2">
              <img
                src={ABOUT_PLACEHOLDERS.originTeaEstate}
                alt="Tea estate at sunrise"
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bottom/Left: Item 2 - Coffee cherries, hand-picked */}
          {/* Note: The image overlaps slightly past the bottom boundary for a layered editorial feel */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-start gap-6 md:gap-[3vw] relative z-20">
            {/* Coffee Cherries Image (left, overlapping bottom boundary) */}
            <div className="w-[180px] sm:w-[220px] lg:w-[19vw] aspect-[4/5] overflow-hidden rounded-[4px] bg-[#3B4A34] shrink-0 shadow-2xl lg:translate-y-[3vw]">
              <img
                src={ABOUT_PLACEHOLDERS.originCoffeeCherries}
                alt="Hand sorting red coffee cherries"
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </div>

            {/* Text description (right of image) */}
            <div className="max-w-[340px] lg:max-w-[26vw] pb-2 lg:translate-y-[3vw]">
              <h3
                className="text-[#27381E] font-semibold tracking-normal"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(15px, 1.1vw, 17px)",
                  lineHeight: "1.3",
                }}
              >
                2. Coffee cherries, hand-picked
              </h3>
              <p
                className="text-[#27381E]/80 mt-2 sm:mt-3"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(12px, 0.95vw, 14px)",
                  lineHeight: "1.55",
                }}
              >
                Harvested at peak ripeness, from growers WAE works with directly
                and repeatedly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER COMPONENT */}
      <Footer className="pt-[4vw]" />
    </main>
  );
}
