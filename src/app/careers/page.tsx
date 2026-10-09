"use client";

import React from "react";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-clip selection:bg-white/20 selection:text-white">
      {/* Cloudflare Stream Player SDK */}
      <Script
        src="https://embed.cloudflarestream.com/embed/sdk.latest.js"
        strategy="afterInteractive"
      />

      {/* 1. HEADER */}
      <Header />

      {/* 2. HERO SECTION */}
      <section className="relative w-full pt-[16vw] md:pt-[10vw] px-[4.166vw]">
        {/* Top Header Row: Left Title + Right Description & CTA */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8 pb-[3vw]">
          {/* Main Hero Title */}
          <h1
            className="text-white select-none m-0 p-0"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(34px, 4.4vw, 68px)",
              lineHeight: "1.08",
              letterSpacing: "-0.01em",
            }}
          >
            Every great beverage
            <br />
            starts with people
          </h1>

          {/* Right Column: Paragraph + "View open roles" Button */}
          <div className="flex flex-col items-start md:items-start shrink-0">
            <p
              className="text-[#FFFFFFB3] max-w-[340px] select-none"
              style={{
                fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                fontSize: "clamp(12px, 0.972vw, 14px)",
                lineHeight: "1.45",
              }}
            >
              Join WAE and help shape future-ready beverage solutions
              <br className="hidden md:inline" />
              for premium workplaces, hospitality and lifestyle spaces...
            </p>

            <button
              type="button"
              className="mt-5 px-6 py-2.5 border border-white/40 hover:border-white text-white transition-colors duration-200 text-[12px] md:text-[13px] tracking-wide select-none cursor-pointer"
              style={{
                fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
              }}
            >
              View open roles
            </button>
          </div>
        </div>

        {/* Hero Video Asset */}
        <div
          className="relative w-full overflow-hidden rounded-[2px] bg-black"
          style={{ position: "relative", paddingTop: "56.25%" }}
        >
          <iframe
            src="https://customer-nqls4utgv1ytiyat.cloudflarestream.com/ea476f8b02a53580ea70a7d08ff52f3a/iframe?muted=true&loop=true&autoplay=true&preload=auto&poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2Fea476f8b02a53580ea70a7d08ff52f3a%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
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

          {/* Subtle gradient vignette on both top and bottom to blend into black background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />
        </div>
      </section>

      {/* 3. STATEMENT / MANIFESTO SECTION */}
      <section className="relative w-full py-[8vw] md:py-[6vw] px-[4.166vw]">
        <div className="w-full max-w-[1360px] mx-auto flex justify-end">
          <h2
            className="text-right select-none m-0 p-0"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(20px, 2.778vw, 40px)",
              lineHeight: "1.35",
              letterSpacing: "-0.01em",
            }}
          >
            <span className="block text-right">
              <span className="text-[#7A7A7A]">From </span>
              <span className="text-white">Water </span>
              <span className="text-[#7A7A7A]">To </span>
              <span className="text-white">Tea </span>
              <span className="text-[#7A7A7A]">To </span>
              <span className="text-white">Coffee, </span>
              <span className="text-[#7A7A7A]">We&apos;re Rethinking How The</span>
            </span>
            <span className="block text-right">
              <span className="text-[#7A7A7A]">World&apos;s Best Spaces </span>
              <span className="text-white">Hydrate, Refresh And Connect. </span>
              <span className="text-[#7A7A7A]">It Takes</span>
            </span>
            <span className="block text-right">
              <span className="text-white">People Who Care About The Source, </span>
              <span className="text-[#7A7A7A]">Obsess Over </span>
              <span className="text-white">The Craft,</span>
            </span>
            <span className="block text-right">
              <span className="text-[#7A7A7A]">And Believe </span>
              <span className="text-white">Sustainability Belongs In Every Cup.</span>
            </span>
          </h2>
        </div>
      </section>

      {/* 4. VISUAL GRID / COLLAGE SECTION */}
      <section className="relative w-full px-[4.166vw] pb-[6vw]">
        <div className="w-full max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[342fr_342fr_624fr] gap-3 md:gap-4 items-stretch">
            {/* Column 1: Two stacked 342x575 images */}
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Top: 342x575 image with top gradient */}
              <div
                className="relative w-full overflow-hidden rounded-[2px] bg-[#161616]"
                style={{ aspectRatio: "342 / 575" }}
              >
                <img
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/eed6a255-a2ed-407a-040a-54bb6806c300/public"
                  alt="Beverage specialists craft and ingredients"
                  className="w-full h-full object-cover select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none z-10" />
              </div>
              {/* Bottom: 342x575 image with bottom gradient */}
              <div
                className="relative w-full overflow-hidden rounded-[2px] bg-[#131313]"
                style={{ aspectRatio: "342 / 575" }}
              >
                <img
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9e635e1f-d4e8-47ef-429a-3ba76e5ef800/public"
                  alt="Coffee bean craft and sourcing"
                  className="w-full h-full object-cover select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10" />
              </div>
            </div>

            {/* Column 2: One 342x575 image + 342x575 Text block */}
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Top: 342x575 image with top gradient */}
              <div
                className="relative w-full overflow-hidden rounded-[2px] bg-[#181818]"
                style={{ aspectRatio: "342 / 575" }}
              >
                <img
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/17a7d7c7-9132-4e53-e6ff-0f3f95ba7600/public"
                  alt="Hospitality and café service"
                  className="w-full h-full object-cover select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none z-10" />
              </div>
              {/* Bottom: 342x575 Text block starting at 50% height of image left to it */}
              <div
                className="relative w-full bg-black overflow-hidden"
                style={{ aspectRatio: "342 / 575" }}
              >
                <div
                  className="absolute left-0 right-0"
                  style={{ top: "50%" }}
                >
                  <p
                    className="text-white select-none text-left m-0 p-0"
                    style={{
                      fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                      fontWeight: 700,
                      fontStyle: "normal",
                      fontSize: "16px",
                      lineHeight: "120%",
                      letterSpacing: "0%",
                    }}
                  >
                    Beverage specialists, Café operators, innovators and hospitality professionals: build the future of beverages with us.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: 624x1170 Feature Video */}
            <div className="flex flex-col">
              <div
                className="relative w-full overflow-hidden rounded-[2px] bg-[#1a1a1a]"
                style={{ position: "relative", paddingTop: "177.77777777777777%" }}
              >
                <iframe
                  src="https://customer-nqls4utgv1ytiyat.cloudflarestream.com/f6ec6d41f7c7fd406464557990c571ff/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2Ff6ec6d41f7c7fd406464557990c571ff%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
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
                {/* Dual top and bottom gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUOTE SECTION */}
      <section className="relative w-full py-[8vw] md:py-[6vw] px-[4.166vw]">
        <div className="w-full max-w-[1360px] mx-auto flex justify-end">
          <h2
            className="select-none m-0 p-0 flex flex-col items-end"
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontSize: "clamp(22px, 2.778vw, 42px)",
              lineHeight: "1.32",
              letterSpacing: "-0.01em",
            }}
          >
            {/* Line 1: Right-aligned flush with right margin */}
            <div className="text-right">
              <span className="text-white">&ldquo;Rooted In Sustainability. </span>
              <span className="text-[#7A7A7A]">Driven By Craft</span>
            </div>
            {/* Line 2: Offset to the left */}
            <div
              className="text-right"
              style={{
                marginRight: "clamp(20px, 14vw, 210px)",
              }}
            >
              <span className="text-white">Built For Premium Spaces. </span>
              <span className="text-[#7A7A7A]">Powered By People&rdquo;</span>
            </div>
          </h2>
        </div>
      </section>

      {/* 6. SAGE GREEN BENTO SECTION */}
      <section className="relative w-full px-[4.166vw] pt-[5vw] pb-[8vw] overflow-visible">
        <div
          className="relative w-full overflow-visible"
          style={{
            backgroundColor: "#5B734C",
            paddingTop: "clamp(60px, 8.5vw, 130px)",
            paddingBottom: "clamp(45px, 6vw, 90px)",
            paddingLeft: "clamp(20px, 3.5vw, 55px)",
            paddingRight: "clamp(20px, 3.5vw, 55px)",
          }}
        >
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-6 relative overflow-visible">
            {/* Left Block: Overhangs LEFT edge of green box into outer black margin */}
            <div
              className="w-full lg:w-[38%] flex flex-col shrink-0 relative z-20"
              style={{
                marginLeft: "calc(-1 * clamp(25px, 4.166vw, 65px))",
              }}
            >
              {/* Barista placeholder div: overhangs left boundary, starts below green top header */}
              <div
                className="w-full aspect-[405/365] bg-[#3E5133] shadow-2xl relative overflow-hidden rounded-[2px]"
                aria-label="Barista placeholder"
              />
              {/* Category labels: Tea, Coffee, Machine spread below the image */}
              <div className="flex items-center justify-between w-full pt-4 md:pt-6 px-4 md:px-8">
                <span
                  className="text-[#98AD8D] text-[13px] md:text-[14px] select-none"
                  style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
                >
                  Tea
                </span>
                <span
                  className="text-[#98AD8D] text-[13px] md:text-[14px] select-none"
                  style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
                >
                  Coffee
                </span>
                <span
                  className="text-[#98AD8D] text-[13px] md:text-[14px] select-none"
                  style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
                >
                  Machine
                </span>
              </div>
            </div>

            {/* Middle Block: "Better Beverages Begin With..." Heading & Description */}
            <div className="w-full lg:w-[35%] flex flex-col justify-start pt-2 md:pt-6 lg:pt-8 px-2 md:px-0">
              <h3
                className="select-none m-0 p-0"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontSize: "clamp(28px, 3.472vw, 50px)",
                  lineHeight: "1.12",
                  letterSpacing: "0%",
                }}
              >
                <span className="block text-white">Better</span>
                <span className="block text-white">Beverages</span>
                <span className="block text-[#213C19]">Begin With</span>
                <span className="block">
                  <span className="text-white">People </span>
                  <span className="text-[#213C19]">Who</span>
                </span>
                <span className="block">
                  <span className="text-white">Grow </span>
                  <span className="text-[#213C19]">With</span>
                </span>
                <span className="block text-[#213C19]">Every Serve.</span>
              </h3>

              {/* Thin Divider Line */}
              <div className="w-[70px] h-[1px] bg-[#213C19]/35 my-6" />

              {/* Description Paragraph */}
              <p
                className="text-[#213C19] max-w-[440px] select-none"
                style={{
                  fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                  fontSize: "clamp(12px, 0.972vw, 14px)",
                  lineHeight: "1.5",
                }}
              >
                At WAE F&B, you&apos;ll work across the full beverage journey, from responsible
                water sourcing to crafted tea and coffee experiences. You&apos;ll learn from
                experienced teams, work with leading brands and premium clients, and grow
                into roles that shape how people pause, perform and connect every day.
              </p>
            </div>

            {/* Right Block: Cup / Serve Placeholder overhanging RIGHT edge of green box */}
            <div
              className="w-full lg:w-[23%] flex justify-end shrink-0 relative z-20"
              style={{
                marginRight: "calc(-1 * clamp(25px, 4.166vw, 65px))",
              }}
            >
              <div
                className="w-full aspect-[4/5] bg-[#3E5133] shadow-2xl relative overflow-hidden rounded-[2px]"
                aria-label="Cup placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <Footer />
    </main>
  );
}
