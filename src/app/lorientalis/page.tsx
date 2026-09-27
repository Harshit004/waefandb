"use client";

import React, { useRef, useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import LOrientalisHeader from "@/components/LOrientalisHeader";

const FARMER_STORIES = [
  {
    id: "farmer-1",
    mainImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/bf664857-908e-4c4f-5b73-e0c73f466a00/public",
    subImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1e743b2b-96c5-47aa-6e51-d5cfcf479500/public",
    altMain: "Farmer sorting harvested tea leaves",
    altSub: "Fresh green tea leaves in bamboo basket",
  },
  {
    id: "farmer-2",
    mainImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/83d42008-4488-4f9d-16a6-3feb024da200/public",
    subImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2af0ab00-9e88-4faf-76bd-9431b0ce5300/public",
    altMain: "Tea estate workers with bicycles along harvest trail",
    altSub: "Sunlit vibrant Camellia sinensis foliage",
  },
  {
    id: "farmer-3",
    mainImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c9c90188-dd47-418a-e0f3-6c45c6ca8a00/public",
    subImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d71b371c-884d-42db-40fe-3d35467cf100/public",
    altMain: "Harvesting tea on steep eastern slope",
    altSub: "Hands holding freshly harvested coffee cherries",
  },
];

const FARMERS_INTRO_IMAGE =
  "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d619873b-8dc9-4d33-383b-ab43e5558800/public";

export default function LOrientalisPage() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const hasCompletedRef = useRef(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!carouselContainerRef.current) return;
      const rect = carouselContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollDistance = rect.height - windowHeight;
      if (totalScrollDistance <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollDistance;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      setScrollProgress(clampedProgress);

      if (clampedProgress >= 0.98) {
        hasCompletedRef.current = true;
        setHasCompleted(true);
      }

      // Enforce: user cannot go below this section until they have scrolled through the carousel
      if (!hasCompletedRef.current && currentScroll > totalScrollDistance) {
        window.scrollTo({
          top: window.scrollY + rect.top + totalScrollDistance,
          behavior: "instant",
        });
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const introPhase = Math.min(scrollProgress / 0.16, 1);
  const introScale = 0.65 + introPhase * 0.35;
  const introTextShift = introPhase * 240;

  const horizontalPhase =
    scrollProgress > 0.16 ? (scrollProgress - 0.16) / 0.84 : 0;
  const trackTranslateX = horizontalPhase * 300;

  const activeStoryIndex =
    horizontalPhase < 0.38 ? 0 : horizontalPhase < 0.72 ? 1 : 2;

  const scrollToStory = (index: number) => {
    if (!carouselContainerRef.current) return;
    const rect = carouselContainerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollDistance =
      carouselContainerRef.current.offsetHeight - windowHeight;
    const containerTopOnPage = window.scrollY + rect.top;

    const targetHori = [0.33, 0.66, 1.0][index];
    const targetProgress = 0.16 + targetHori * 0.84;
    const targetScrollY =
      containerTopOnPage + targetProgress * totalScrollDistance;
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  const handleScrollDown = () => {
    const nextSection =
      document.getElementById("our-story") ||
      document.getElementById("sourcing");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-clip selection:bg-[#365944] selection:text-white">
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
          paddingBottom: "0px",
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

            {/* Paragraph & Read more without underline */}
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
                className="inline font-semibold text-[#7CC055] hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  textAlign: "justify",
                  verticalAlign: "bottom",
                  textTransform: "capitalize",
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

      {/* TEA: BORN IN THE EASTERN TEA BELT SECTION */}
      <section
        id="tea"
        className="relative w-full bg-black text-white overflow-hidden"
        style={{
          paddingLeft: "2.778vw", // 40px at 1440px - consistent across page
          paddingRight: "2.778vw", // 40px at 1440px - consistent across page
          paddingTop: "106px", // 106px below the previous section
          paddingBottom: "0px",
        }}
      >
        {/* ROW: LEFT VERTICALLY CENTERED CONTENT + RIGHT IMAGE (542x492) */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-[60px] xl:gap-[80px]">
          {/* Left Content: Vertically centered relative to the image */}
          <div className="flex flex-col justify-center flex-1 w-full max-w-[650px] lg:max-w-none">
            {/* TEA label on left and Headline on right */}
            <div className="flex items-start justify-between gap-6 w-full">
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
                className="shrink-0 mt-1 select-none uppercase tracking-wider"
              >
                TEA
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 3.472vw, 50px)", // 50px at 1440px
                  lineHeight: "clamp(38px, 4.028vw, 58px)", // 58px at 1440px
                  letterSpacing: "0%",
                  textAlign: "right",
                  color: "#FFFFFF",
                }}
                className="text-right"
              >
                Born in the
                <br />
                Eastern Tea Belt
              </h3>
            </div>

            {/* Paragraph & Read more without underline */}
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
              The eastern tea-growing corridor is one of the most complex and
              nuanced environments for Camellia sinensis — fog-fed mornings,
              sharp diurnal shifts, and soil chemistry that few other regions can
              replicate.{" "}
              <button
                type="button"
                className="inline font-semibold text-[#7CC055] hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  textAlign: "justify",
                  verticalAlign: "bottom",
                  textTransform: "capitalize",
                  color: "#7CC055",
                }}
              >
                Read more
              </button>
            </p>
          </div>

          {/* Right Image: 542px x 492px */}
          <div
            className="relative w-full max-w-[542px] overflow-hidden shrink-0"
            style={{
              aspectRatio: "542 / 492",
              maxHeight: "492px",
            }}
          >
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/db504952-404c-4e2a-b53b-ca641c861b00/public"
              alt="Born in the Eastern Tea Belt"
              width={542}
              height={492}
              priority
              unoptimized
              className="w-full h-full object-cover select-none"
            />
          </div>
        </div>
      </section>

      {/* THE GROWING CONDITIONS SECTION */}
      <section
        id="conditions"
        className="relative w-full bg-black text-white overflow-hidden"
        style={{
          paddingLeft: "2.778vw", // 40px at 1440px - consistent across page
          paddingRight: "2.778vw", // 40px at 1440px - consistent across page
          paddingTop: "140px", // 140px below previous section
          paddingBottom: "clamp(60px, 6.944vw, 100px)",
        }}
      >
        {/* SECTION HEADER: The Growing Conditions. (Text align right) */}
        <div className="w-full flex justify-end">
          <h2
            style={{
              fontFamily: "var(--font-monschone), serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 3.333vw, 48px)", // 48px at 1440px
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "right",
            }}
          >
            <span className="text-[#717171]">The </span>
            <span className="text-white">Growing </span>
            <span className="text-[#717171]">Conditions.</span>
          </h2>
        </div>

        {/* 82px GAP */}
        <div className="w-full h-[50px] md:h-[82px]" />

        {/* 4-COLUMN IMAGE GRID (8px gap in between) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[21fr_29fr_28fr_22fr] gap-[8px] items-stretch">
          {/* COLUMN 1 */}
          <div className="flex flex-col justify-between h-auto lg:h-[720px]">
            {/* 1st image from left */}
            <div className="relative w-full h-[320px] lg:h-[450px] overflow-hidden shrink-0">
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/be887867-48d0-4ce7-e871-5602ab391a00/public"
                alt="Growing region atmospheric landscape"
                fill
                priority
                unoptimized
                className="object-cover select-none"
              />
            </div>

            {/* Bottom text block */}
            <div className="flex flex-col justify-between flex-1 pt-6 pb-1">
              <h3
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 3.333vw, 48px)", // 48px at 1440px
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                }}
              >
                26°N 92°E
              </h3>

              <p
                className="mt-6 lg:mt-0 text-white"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  verticalAlign: "bottom",
                }}
              >
                The precise conditions where tea &amp; coffee thrive. .
              </p>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="relative w-full h-[480px] lg:h-[720px] overflow-hidden">
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/46f1a3e2-7611-4f35-e5c4-5b144f98aa00/public"
              alt="Ripening coffee cherries on branch"
              fill
              priority
              unoptimized
              className="object-cover select-none"
            />
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col justify-start h-auto lg:h-[720px]">
            {/* 3rd image */}
            <div className="relative w-full h-[380px] lg:h-[540px] overflow-hidden shrink-0">
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c4dba0b5-c106-48c2-fa18-22e979ede500/public"
                alt="Ripening botanicals branch"
                fill
                priority
                unoptimized
                className="object-cover select-none"
              />
            </div>

            {/* Description below 3rd image */}
            <p
              className="mt-4 lg:mt-6 text-white"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "24px",
                letterSpacing: "0%",
                verticalAlign: "bottom",
              }}
            >
              The eastern tea-growing corridor is one of the most complex and
              nuanced environments for Camellia sinensis.
            </p>
          </div>

          {/* COLUMN 4 */}
          <div className="relative w-full h-[480px] lg:h-[720px] overflow-hidden">
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/31bed202-ecaa-478d-4275-033a8dcbda00/public"
              alt="Tea foliage in morning mist"
              fill
              priority
              unoptimized
              className="object-cover select-none"
            />
          </div>
        </div>
      </section>

      {/* SINGLE ORIGIN / 3 STATE MAP SECTION */}
      <section
        id="single-origin"
        className="relative w-full bg-black text-white overflow-hidden py-[80px] lg:py-[120px]"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto flex flex-col">
          {/* TOP LEFT: Coordinates & Subtitle */}
          <div className="flex flex-col items-start z-10">
            <h2
              style={{
                fontFamily: "var(--font-judson), Judson, serif",
                fontWeight: 700,
                fontSize: "clamp(48px, 5.857vw, 84.35px)",
                lineHeight: "100%",
                letterSpacing: "0%",
                textTransform: "uppercase",
                color: "#1F3D2B",
              }}
            >
              26°N 92°E
            </h2>
            <span
              className="mt-3 text-white"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              SINGLE ORIGIN – 3 State
            </span>
          </div>

          {/* MAP GRAPHIC CONTAINER: 964px x 534px */}
          <div className="relative w-full max-w-[964px] aspect-[964/534] mx-auto mt-4 lg:mt-[-30px]">
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f21b619f-d319-4d5a-ee4d-517eca07bb00/public"
              alt="Northeast India single origin tea and coffee growing districts map"
              fill
              priority
              unoptimized
              className="object-contain select-none pointer-events-none"
            />

            {/* 3 INTERACTIVE PULSING DOTS */}
            {[
              {
                name: "Meghalaya",
                left: "23.86%",
                top: "49.98%",
                delay: "0s",
              },
              {
                name: "Nagaland",
                left: "54.80%",
                top: "30.98%",
                delay: "0.9s",
              },
              {
                name: "Assam",
                left: "73.84%",
                top: "47.34%",
                delay: "1.8s",
              },
            ].map((dot) => (
              <div
                key={dot.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer group"
                style={{
                  left: dot.left,
                  top: dot.top,
                  width: "36.29px",
                  height: "36.29px",
                }}
                aria-label={dot.name}
              >
                {/* Outer pulsing halo which appears and disappears gradually (#1F3D2B) */}
                <div
                  className="absolute rounded-full bg-[#1F3D2B] animate-dot-halo pointer-events-none"
                  style={{
                    width: "36.29px",
                    height: "36.29px",
                    animationDelay: dot.delay,
                  }}
                />

                {/* The white circle (36.29px x 36.29px) */}
                <div
                  className="relative w-[36.29px] h-[36.29px] rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  {/* Circle inside the white circle is #1F3D2B */}
                  <div className="w-[18px] h-[18px] rounded-full bg-[#1F3D2B]" />
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM RIGHT: Growing Districts description */}
          <div className="w-full flex justify-end mt-4 lg:mt-6">
            <p
              className="text-white max-w-[460px]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "24px",
                letterSpacing: "0%",
                textAlign: "right",
                verticalAlign: "bottom",
              }}
            >
              L&apos;ORIENTALIS sources exclusively from these growing<br />
              districts — each district contributing a distinct altitude,<br />
              microclimate and flavour signature.
            </p>
          </div>
        </div>
      </section>

      {/* 140PX GAP ABOVE */}
      <div className="w-full h-[140px]" />

      {/* FARMERS ANIMATED HORIZONTAL CAROUSEL SECTION */}
      <section
        id="farmers"
        ref={carouselContainerRef}
        className="relative w-full h-[450vh] bg-black text-white"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-black">
          {/* HORIZONTAL CAROUSEL TRACK */}
          <div
            className="flex h-full will-change-transform"
            style={{
              width: "400vw",
              transform: `translateX(-${trackTranslateX}vw)`,
              transition: "transform 0.08s linear",
            }}
          >
            {/* SLIDE 1: INTRO (FARMERS BIG TEXT + EXPANDING IMAGE) */}
            <div
              className="relative w-screen shrink-0 h-full flex items-center justify-center overflow-hidden"
              style={{
                paddingLeft: "2.778vw",
                paddingRight: "2.778vw",
              }}
            >
              {/* BIG TEXT: Farmers */}
              <div className="absolute top-[8%] lg:top-[12%] left-[2.778vw] z-10 select-none pointer-events-none">
                <h2
                  className="text-white whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(64px, 13.88vw, 200px)",
                    lineHeight: "24px",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                    transform: `translateX(-${introTextShift}px)`,
                    transition: "transform 0.05s linear",
                  }}
                >
                  Farmers
                </h2>
              </div>

              {/* INTRO IMAGE: EXPANDING FROM CENTER */}
              <div className="relative w-full max-w-[1158px] h-[60vh] lg:h-[768px] max-h-[768px] mx-auto overflow-hidden flex items-center justify-center">
                <div
                  className="relative w-full h-full transition-transform duration-100 ease-out"
                  style={{
                    transform: `scale(${introScale})`,
                  }}
                >
                  <Image
                    src={FARMERS_INTRO_IMAGE}
                    alt="Farmers harvesting tea in the highlands"
                    fill
                    priority
                    unoptimized
                    className="object-cover select-none"
                  />
                </div>
              </div>
            </div>

            {/* SLIDES 2, 3, 4: FARMER STORIES */}
            {FARMER_STORIES.map((story) => {
              return (
                <div
                  key={story.id}
                  className="w-screen shrink-0 h-full flex items-center"
                  style={{
                    paddingLeft: "2.778vw",
                    paddingRight: "2.778vw",
                  }}
                >
                  <div className="w-full h-[72vh] lg:h-[768px] max-h-[768px] flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
                    {/* LEFT COLUMN: Main Image (60% width) */}
                    <div className="relative w-full lg:w-[60%] h-[380px] lg:h-full overflow-hidden shrink-0">
                      <Image
                        src={story.mainImage}
                        alt={story.altMain}
                        fill
                        unoptimized
                        className="object-cover select-none"
                      />

                      {/* 3 THUMBNAILS AT BOTTOM-LEFT */}
                      <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 flex items-center gap-2.5 z-20">
                        {FARMER_STORIES.map((thumb, tIdx) => {
                          const isActive = activeStoryIndex === tIdx;
                          return (
                            <button
                              key={thumb.id}
                              onClick={() => scrollToStory(tIdx)}
                              className={`relative w-[36px] h-[44px] lg:w-[46px] lg:h-[54px] overflow-hidden transition-all duration-300 cursor-pointer ${
                                isActive
                                  ? "border-2 border-white scale-105 shadow-xl shadow-black/80"
                                  : "border border-white/40 opacity-70 hover:opacity-100 hover:scale-102"
                              }`}
                              aria-label={`Jump to farmer story ${tIdx + 1}`}
                            >
                              <Image
                                src={thumb.mainImage}
                                alt={`Thumbnail ${tIdx + 1}`}
                                fill
                                sizes="54px"
                                unoptimized
                                className="object-cover select-none pointer-events-none"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: 40% width (Top Text, Secondary Image, Bottom Text) */}
                    <div className="relative w-full lg:w-[40%] flex flex-col justify-between py-2 lg:py-6 pl-0 lg:pl-6">
                      {/* Top text */}
                      <p
                        className="text-white select-none"
                        style={{
                          fontFamily: "var(--font-manrope), sans-serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "24px",
                          letterSpacing: "0%",
                          textAlign: "right",
                          verticalAlign: "middle",
                        }}
                      >
                        The eastern tea-growing corridor is one of the most
                        complex and nuanced environments.
                      </p>

                      {/* Secondary Image: square aspect ratio */}
                      <div className="relative w-[200px] sm:w-[240px] lg:w-[280px] xl:w-[320px] aspect-square ml-auto my-4 lg:my-auto overflow-hidden">
                        <Image
                          src={story.subImage}
                          alt={story.altSub}
                          fill
                          unoptimized
                          className="object-cover select-none"
                        />
                      </div>

                      {/* Bottom text */}
                      <p
                        className="text-white select-none"
                        style={{
                          fontFamily: "var(--font-manrope), sans-serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "24px",
                          letterSpacing: "0%",
                          textAlign: "right",
                          verticalAlign: "middle",
                        }}
                      >
                        The eastern tea-growing corridor is one of the most
                        complex and nuanced environments for Camellia sinensis.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* PROGRESS LINE AT BOTTOM OF STICKY CAROUSEL */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-30 pointer-events-none">
            <div
              className="h-full bg-white/70 transition-all duration-75 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </section>

      {/* 140PX GAP BELOW */}
      <div className="w-full h-[140px]" />

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
