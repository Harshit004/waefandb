"use client";

import React from "react";
import Script from "next/script";
import GetInTouchHeader from "@/components/GetInTouchHeader";
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
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e2eb31d1-d675-42fb-b5f2-0d20d724b700/public",
  originCoffeeCherries:
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a5b8bead-c1f1-4ff4-2ec1-6a03175d1f00/public",
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
      <GetInTouchHeader />

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
                  fontSize: "clamp(35.2px, 4.62vw, 70.4px)",
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
                  fontSize: "clamp(30.8px, 4.07vw, 59.4px)",
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
              className="relative w-full overflow-hidden bg-black mb-6 lg:mb-[2.2vw] rounded-[2px]"
              style={{
                aspectRatio: "248 / 257",
              }}
            >
              <iframe
                src="https://customer-nqls4utgv1ytiyat.cloudflarestream.com/1e6a8cb22a643cdf4df1cf08c79a375f/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2F1e6a8cb22a643cdf4df1cf08c79a375f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                loading="lazy"
                className="border-0 absolute top-0 left-0 w-full h-full"
                style={{
                  border: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  transform: "scale(1.98)",
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
                lineHeight: "130%",
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
        <div className="w-full max-w-[1400px] lg:max-w-[92vw] mx-auto text-center">
          <h2
            className="font-normal select-none m-0 p-0"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "clamp(26px, 3.472vw, 50px)",
              lineHeight: "115%",
              letterSpacing: "0%",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            <span className="block md:whitespace-nowrap">
              <span className="text-white/40">Years Of </span>
              <span className="text-white">Field Knowledge</span>
              <span className="text-white/40">. Trusted Local </span>
              <span className="text-white">Relationships</span>
              <span className="text-white/40">. An</span>
            </span>
            <span className="block md:whitespace-nowrap">
              <span className="text-white/40">Understanding Of Origin, </span>
              <span className="text-white">Earned Over Time</span>
              <span className="text-white/40">.</span>
            </span>
            <span className="block md:whitespace-nowrap">
              <span className="text-white/40">This Is What </span>
              <span className="text-white">WAE</span>
              <span className="text-white/40"> Brings To Every </span>
              <span className="text-white">Beverage</span>
              <span className="text-white/40"> It Serves.</span>
            </span>
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
                lineHeight: "130%",
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
                lineHeight: "130%",
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
      <section id="origin-section" className="relative w-full px-[4.166vw] pt-[6vw]">
        <div
          id="origin-green-box"
          className="relative w-full overflow-visible rounded-none"
          style={{
            backgroundImage:
              "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d01a5267-20eb-4f94-c863-ca3bbbbfe600/public')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#5B734C",
            paddingTop: "clamp(30px, 2.78vw, 40px)",
            paddingLeft: "clamp(20px, 3.6vw, 55px)",
            paddingRight: "clamp(20px, 3.6vw, 55px)",
            paddingBottom: "clamp(35px, 4vw, 60px)",
          }}
        >
          {/* Top Row: Title & Divider on Left + Origin Summary on Right */}
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
            {/* Heading: "From origin to cup" */}
            <div className="flex flex-col items-start">
              <h2
                className="select-none m-0 p-0"
                style={{
                  fontFamily: "var(--font-monschone), 'Monschone', serif",
                  fontWeight: 400,
                  fontSize: "clamp(48px, 6.667vw, 96px)",
                  lineHeight: "clamp(52px, 6.944vw, 100px)",
                  letterSpacing: "0%",
                }}
              >
                <span className="block text-white">From</span>
                <span className="block text-[#213C19]">origin</span>
                <span className="block text-[#213C19]">to cup</span>
              </h2>

              {/* Thin Divider Line below heading */}
              <div className="w-[180px] sm:w-[220px] md:w-[250px] h-[1px] bg-white/40 mt-5 md:mt-6" />
            </div>

            {/* Top-Right Summary Paragraph */}
            <div className="shrink-0 text-left md:text-right max-w-[430px]">
              <p
                className="text-white select-none text-left md:text-right m-0 p-0"
                style={{
                  fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "130%",
                  letterSpacing: "0%",
                  textAlign: "right",
                }}
              >
                WAE traces every ingredient back to where it began - the
                <br className="hidden md:inline" />
                estates, growers and terrains that give tea and coffee their
                <br className="hidden md:inline" />
                character, held to the same standard WAE applies to water.
              </p>
            </div>
          </div>

          {/* Middle Row: Item 1 (Text on Left + Tea Estate Image on Right) */}
          <div className="w-full flex flex-col-reverse md:flex-row items-start md:items-end justify-end gap-5 md:gap-6 lg:gap-8 mt-6 md:-mt-14 lg:-mt-20">
            {/* Item 1 Text (right-aligned, aligned with bottom of image) */}
            <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-[400px] lg:max-w-[28vw] pb-1">
              <h3
                className="text-[#213C19] select-none text-left md:text-right m-0 p-0"
                style={{
                  fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 1.806vw, 26px)",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "right",
                }}
              >
                1. Tea Estate At Sunrise
              </h3>
              <p
                className="text-white select-none text-left md:text-right mt-3 m-0 p-0"
                style={{
                  fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(15px, 1.25vw, 18px)",
                  lineHeight: "130%",
                  letterSpacing: "0%",
                  textAlign: "right",
                }}
              >
                Sourced from tea gardens selected for altitude,
                <br className="hidden md:inline" />
                soil and season, not volume.
              </p>
            </div>

            {/* First Image: Tea Estate At Sunrise (323x429) */}
            <div
              className="w-full sm:w-[280px] lg:w-[22.431vw] max-w-[323px] shrink-0 overflow-hidden shadow-xl rounded-none"
              style={{
                aspectRatio: "323 / 429",
              }}
            >
              <img
                src={ABOUT_PLACEHOLDERS.originTeaEstate}
                alt="Tea estate at sunrise"
                className="w-full h-full object-cover select-none"
                style={{ aspectRatio: "323 / 429" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Bottom Area: Item 2 (Coffee Cherries Image on Left + Text on Right) */}
          <div
            id="origin-bottom-row"
            className="w-full flex flex-col md:flex-row items-start justify-start gap-5 md:gap-6 lg:gap-8 mt-12 md:mt-16 lg:mt-20 relative z-20 origin-bottom-row"
          >
            {/* Coffee Cherries Image: flush with heading left, overhanging bottom boundary */}
            <div
              className="w-full sm:w-[280px] lg:w-[22.431vw] max-w-[323px] shrink-0 overflow-hidden shadow-2xl rounded-none relative z-20"
              style={{
                aspectRatio: "323 / 429",
                marginBottom: "calc(-1 * clamp(50px, 6.5vw, 110px))",
              }}
            >
              <img
                src={ABOUT_PLACEHOLDERS.originCoffeeCherries}
                alt="Coffee cherries, hand-picked"
                className="w-full h-full object-cover select-none"
                style={{ aspectRatio: "323 / 429" }}
                loading="lazy"
              />
            </div>

            {/* Item 2 Text (right of coffee cherries image, aligned with image top) */}
            <div className="flex flex-col items-start text-left max-w-[460px] lg:max-w-[36vw] pt-1">
              <h3
                className="text-[#213C19] select-none text-left m-0 p-0"
                style={{
                  fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 1.806vw, 26px)",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "left",
                }}
              >
                2. Coffee cherries, hand-picked
              </h3>
              <p
                className="text-white select-none text-left mt-3 m-0 p-0"
                style={{
                  fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(15px, 1.25vw, 18px)",
                  lineHeight: "130%",
                  letterSpacing: "0%",
                  textAlign: "left",
                }}
              >
                Harvested at peak ripeness, from growers WAE
                <br className="hidden md:inline" />
                works with directly and repeatedly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 311px gap between Section 5 and Footer */}
      <div
        className="w-full"
        style={{
          height: "clamp(180px, 21.597vw, 311px)",
        }}
        aria-hidden="true"
      />

      {/* 6. FOOTER COMPONENT */}
      <Footer className="pt-0" />
    </main>
  );
}
