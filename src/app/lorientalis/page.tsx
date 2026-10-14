"use client";

import React, { useRef, useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import LOrientalisHeader from "@/components/LOrientalisHeader";
import LOrientalisFooter from "@/components/LOrientalisFooter";

const FARMER_STORIES = [
  {
    id: "farmer-1",
    mainImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/bf664857-908e-4c4f-5b73-e0c73f466a00/public",
    subImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1e743b2b-96c5-47aa-6e51-d5cfcf479500/public",
    altMain: "Farmer sorting harvested tea leaves",
    altSub: "Fresh green tea leaves in bamboo basket",
    text1:
      "We don't procure from this corridor. We partner with the communities who have worked these gardens for generations — whose generational mastery shapes every batch long before it reaches us.",
    text2:
      "From precision plucking at dawn to artisanal leaf selection, the hands behind each harvest carry traditions that give every cup its distinct character and origin fidelity.",
  },
  {
    id: "farmer-2",
    mainImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/83d42008-4488-4f9d-16a6-3feb024da200/public",
    subImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2af0ab00-9e88-4faf-76bd-9431b0ce5300/public",
    altMain: "Tea estate workers with bicycles along harvest trail",
    altSub: "Sunlit vibrant Camellia sinensis foliage",
    text1:
      "Every basket carried down these garden rows represents a relationship, not a transaction. The women who walk these paths at dawn — some on foot, some by bicycle, baskets balanced with practiced ease — are the reason our sourcing model exists at all: built on fair, direct engagement with the communities who grow what we sell.",
    text2:
      "This is what community-first procurement looks like in practice — long-term commitments to growers, transparent pricing, and sourcing decisions made with farming communities, not for them.",
  },
  {
    id: "farmer-3",
    mainImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c9c90188-dd47-418a-e0f3-6c45c6ca8a00/public",
    subImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d71b371c-884d-42db-40fe-3d35467cf100/public",
    altMain: "Harvesting tea on steep eastern slope",
    altSub: "Hands holding freshly harvested coffee cherries",
    text1:
      "The same hills nurturing tea are now home to a new crop taking root — coffee. Smallholder farmers across the region are diversifying, and in each ripe cherry lies the same story: a community investing in quality, resilience and a future beyond a single harvest.",
    text2:
      "Supporting that shift — with fair procurement, consistent demand, and long-term partnership — is how we build a supply chain that grows stronger with the communities it depends on.",
  },
];

const FARMERS_INTRO_IMAGE =
  "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d619873b-8dc9-4d33-383b-ab43e5558800/public";

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function getSlideVerticalStyles(progress: number) {
  const p = clamp01(progress);

  // --- TEXT 1 ---
  // Glides up smoothly and dissolves across the first 35% of the slide dwell
  const text1Phase = clamp01(p / 0.35);
  const text1Y = -text1Phase * 30;
  const text1Opacity = Math.max(0, 1 - text1Phase);

  // --- SECONDARY IMAGE ("THE NEW IMAGE") ---
  // Glides steadily upward in direct 1:1 proportion with the scroll across a wide 75% span of the dwell
  const imgPhase = clamp01((p - 0.10) / 0.75);
  const imageY = 70 * (1 - imgPhase);
  const imageScale = 0.96 + imgPhase * 0.04;
  const imageOpacity = imgPhase;

  // --- TEXT 2 ---
  // Reveals steadily beneath the secondary image
  const text2Phase = clamp01((p - 0.45) / 0.50);
  const text2Y = 320 - text2Phase * 24;
  const text2Opacity = text2Phase;

  return {
    text1: {
      transform: `translate3d(0, ${text1Y.toFixed(2)}px, 0)`,
      opacity: text1Opacity,
    },
    image: {
      transform: `translate3d(0, ${imageY.toFixed(2)}px, 0) scale(${imageScale.toFixed(3)})`,
      opacity: imageOpacity,
    },
    text2: {
      transform: `translate3d(0, ${text2Y.toFixed(2)}px, 0)`,
      opacity: text2Opacity,
    },
  };
}

const COFFEE_BLENDS = [
  { id: "bombay-cutting-1", name: "Bombay Cutting" },
  { id: "commercial-blends", name: "Commercial Blends" },
  { id: "bombay-cutting-2", name: "Bombay Cutting" },
];

const TEA_BLENDS = [
  { id: "orthodox-tea", name: "Orthodox Tea" },
  { id: "green-tea", name: "Green Tea" },
  { id: "ctc-tea", name: "CTC Tea" },
];

const COFFEE_AS_YOU_LIKE_IMAGES = [
  {
    src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/04b81f3c-2946-4b36-e9d1-b48222b9be00/public",
    alt: "Serra Verde Brazilian Coffee",
  },
  {
    src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2dac3f7e-da3d-4e83-d879-3e08eed0e400/public",
    alt: "Organic Coffee Beans",
  },
  {
    src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/10fa5249-0cfb-4da6-723c-a825cab9ca00/public",
    alt: "Aura Artisan Coffee Co.",
  },
];

const TEA_AS_YOU_LIKE_IMAGES = [
  {
    src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4c92b166-f3ad-4966-8cda-8a406153fe00/public",
    alt: "Tea leaves scoop",
  },
  {
    src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e6a884e8-92fb-49da-8ea7-c0d5fec00300/public",
    alt: "Greenfield Fine Ceylon",
  },
  {
    src: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/bf224e84-b26f-491f-c499-bb6d47faa600/public",
    alt: "Selfie Tea Green Tea",
  },
];

export default function LOrientalisPage() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const [activeBeverage, setActiveBeverage] = useState<"coffee" | "tea">("coffee");
  const [selectedBlend, setSelectedBlend] = useState(1);

  const currentBlends = activeBeverage === "coffee" ? COFFEE_BLENDS : TEA_BLENDS;
  const currentImages =
    activeBeverage === "coffee"
      ? COFFEE_AS_YOU_LIKE_IMAGES
      : TEA_AS_YOU_LIKE_IMAGES;

  useEffect(() => {
    let animationFrameId: number;

    const updateTarget = () => {
      if (!carouselContainerRef.current) return;
      const rect = carouselContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollDistance = rect.height - windowHeight;
      if (totalScrollDistance <= 0) return;

      const currentScroll = -rect.top;
      const raw = currentScroll / totalScrollDistance;
      targetProgressRef.current = Math.min(Math.max(raw, 0), 1);
    };

    const onScroll = () => {
      updateTarget();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateTarget();

    // Smooth continuous exponential interpolation loop
    let lastTime = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const lambda = 12;
      const factor = 1 - Math.exp(-lambda * dt);
      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.00002) {
        currentProgressRef.current = current + diff * factor;
        setSmoothProgress(currentProgressRef.current);
      } else if (current !== target) {
        currentProgressRef.current = target;
        setSmoothProgress(target);
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const introPhase = clamp01(smoothProgress / 0.14);
  const introScale = 0.85 + introPhase * 0.15;
  const introTextShift = introPhase * 160;

  // Track translation using continuous, generous transitions in direct proportion with scroll
  const p0 = smoothstep(0.14, 0.28, smoothProgress);
  const p1 = smoothstep(0.44, 0.58, smoothProgress);
  const p2 = smoothstep(0.74, 0.88, smoothProgress);
  const trackTranslatePercent = (p0 + p1 + p2) * 25;

  // Story vertical choreography timers: generous dwell windows directly aligned with scroll speed
  const t0 = clamp01((smoothProgress - 0.28) / 0.16);
  const t1 = clamp01((smoothProgress - 0.58) / 0.16);
  const t2 = clamp01((smoothProgress - 0.88) / 0.12);

  const activeStoryIndex =
    smoothProgress < 0.51 ? 0 : smoothProgress < 0.81 ? 1 : 2;

  const scrollToStory = (index: number) => {
    if (!carouselContainerRef.current) return;
    const rect = carouselContainerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollDistance =
      carouselContainerRef.current.offsetHeight - windowHeight;
    const containerTopOnPage = window.scrollY + rect.top;

    const targetProgress = [0.36, 0.66, 0.94][index];
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
      <section
        id="hero"
        className="relative w-full h-[100dvh] min-h-[620px] bg-black overflow-hidden flex flex-col justify-between"
      >
        {/* Background Video Canvas covering viewport */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Cloudflare Stream Video Iframe - Autoplay, Muted, Loop */}
          <iframe
            ref={iframeRef}
            src="https://customer-nqls4utgv1ytiyat.cloudflarestream.com/646c1e22d36d5dc9459d4080ac0e4508/iframe?poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2F646c1e22d36d5dc9459d4080ac0e4508%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true&muted=true&loop=true&controls=false&preload=auto"
            loading="lazy"
            style={{
              border: "none",
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "max(100vw, 177.78dvh)",
              height: "max(56.25vw, 100dvh)",
              minWidth: "100%",
              minHeight: "100%",
              transform: "translate(-50%, -50%)",
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
                "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 100%)",
            }}
          />
        </div>

        {/* BOTTOM GRADIENT BLENDING HERO INTO BLACK & MATCHING BOTTOM ELEMENTS */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
          style={{
            height: "clamp(220px, 32vh, 360px)",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.85) 65%, #000000 100%)",
          }}
        />

        {/* HERO OVERLAY CONTENT */}
        <div className="relative z-20 w-full h-full pointer-events-none flex flex-col justify-between">
          {/* TOP AREA: Header + Titles */}
          <div className="w-full flex flex-col">
            {/* Lorientalis Header (53px from top, px-40px) */}
            <LOrientalisHeader />

            {/* Titles Row */}
            <div
              className="w-full flex items-end justify-between"
              style={{
                marginTop: "clamp(32px, 5.5vw, 84px)",
                paddingLeft: "2.778vw",
                paddingRight: "2.778vw",
              }}
            >
              {/* Beverage Botanicals */}
              <h1
                className="select-none"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "clamp(32px, 3.889vw, 56px)",
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
                  fontSize: "clamp(14px, 1.25vw, 18px)",
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

          {/* BOTTOM AREA: The Growing Regions (Left) + Scroll Button (Center) */}
          <div
            className="relative w-full flex items-end justify-between pointer-events-none"
            style={{
              paddingLeft: "2.778vw",
              paddingRight: "2.778vw",
              paddingBottom: "clamp(24px, 4vh, 48px)",
            }}
          >
            {/* Bottom Left: The Growing Regions Above The Tropic Of Cancer */}
            <div
              className="flex flex-col text-left select-none pointer-events-auto z-20"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 500,
                fontSize: "clamp(15px, 1.25vw, 18px)",
                lineHeight: "130%",
                letterSpacing: "0%",
                color: "#FFFFFF",
              }}
            >
              <span>The Growing Regions</span>
              <span>Above The Tropic Of Cancer</span>
            </div>

            {/* Bottom Center: Scroll Button */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] md:bottom-[-20px] flex items-center justify-center pointer-events-none z-20">
              <button
                type="button"
                onClick={handleScrollDown}
                className="pointer-events-auto cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95"
                style={{
                  width: "clamp(140px, 14.86vw, 214px)",
                  height: "clamp(140px, 14.86vw, 214px)",
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
                  className="w-full h-full object-contain select-none pointer-events-none animate-scroll-oscillate"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0) 100%)",
                    maskImage:
                      "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

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

          {/* Top edge gradient to blend seamlessly with black above */}
          <div
            className="absolute top-0 left-0 right-0 h-[60px] sm:h-[90px] pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          />

          {/* Bottom edge gradient to blend seamlessly with black below */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[60px] sm:h-[90px] pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
            }}
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
              lineHeight: "130%",
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
        {/* TOP ROW: LEFT IMAGE (596x541) + RIGHT VERTICALLY CENTERED CONTENT */}
        <div className="group/coffee w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[40px] xl:gap-[50px]">
          {/* Left Image: 596px x 541px (+10% width & height) */}
          <div
            className="relative w-full max-w-[596px] overflow-hidden shrink-0 rounded-[2px]"
            style={{
              aspectRatio: "542 / 492",
              maxHeight: "541px",
            }}
          >
            <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover/coffee:scale-110">
              <Image
                src="/images/coffee-cherries.png"
                alt="Coffee cherries grown in the shadow of the Eastern Hills"
                width={596}
                height={541}
                priority
                unoptimized
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* EXPLORE NOW Button on Hover */}
            <div className="absolute inset-0 flex items-end justify-center pb-10 pointer-events-none z-10">
              <Link
                href="#contact"
                className="pointer-events-auto px-8 py-3.5 border border-white bg-black/40 backdrop-blur-[2px] text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover/coffee:opacity-100 translate-y-2 group-hover/coffee:translate-y-0 cursor-pointer flex items-center justify-center select-none"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                EXPLORE NOW
              </Link>
            </div>
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
        {/* ROW: LEFT VERTICALLY CENTERED CONTENT + RIGHT IMAGE (596x541) */}
        <div className="group/tea w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-[40px] xl:gap-[50px]">
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

          {/* Right Image: 596px x 541px (+10% width & height) */}
          <div
            className="relative w-full max-w-[596px] overflow-hidden shrink-0 rounded-[2px]"
            style={{
              aspectRatio: "542 / 492",
              maxHeight: "541px",
            }}
          >
            <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover/tea:scale-110">
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/db504952-404c-4e2a-b53b-ca641c861b00/public"
                alt="Born in the Eastern Tea Belt"
                width={596}
                height={541}
                priority
                unoptimized
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* EXPLORE NOW Button on Hover */}
            <div className="absolute inset-0 flex items-end justify-center pb-10 pointer-events-none z-10">
              <Link
                href="#contact"
                className="pointer-events-auto px-8 py-3.5 border border-white bg-black/40 backdrop-blur-[2px] text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover/tea:opacity-100 translate-y-2 group-hover/tea:translate-y-0 cursor-pointer flex items-center justify-center select-none"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                EXPLORE NOW
              </Link>
            </div>
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

        {/* 4-COLUMN IMAGE GRID WITH SINGLE BACKGROUND IMAGE & BLACK MASKING OVERLAY */}
        <div className="w-full overflow-x-auto lg:overflow-visible scrollbar-none">
          <div className="min-w-[700px] md:min-w-0 w-full relative h-[560px] md:h-[640px] lg:h-[720px] overflow-hidden group cursor-pointer">
            {/* Single continuous background image with smooth hover zoom & shift right */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:translate-x-6 origin-center">
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3989527c-0b2d-46b1-fe4b-a5891c0ff400/public"
                alt="The Growing Conditions botanicals and coffee cherries"
                fill
                priority
                unoptimized
                className="object-cover object-center select-none"
              />
            </div>

            {/* Overall top edge blended gradient */}
            <div
              className="absolute top-0 left-0 right-0 h-[60px] lg:h-[80px] pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
              }}
            />

            {/* Overall bottom edge blended gradient */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[60px] lg:h-[80px] pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
              }}
            />

            {/* Black Masking Grid Overlay: 4 Windows with 8px Black Dividers & Black Text Cards */}
            <div
              className="relative z-10 w-full h-full grid"
              style={{
                gridTemplateColumns: "21fr 8px 29fr 8px 28fr 8px 22fr",
              }}
            >
              {/* COLUMN 1: Top window (450px) + Bottom black card (270px) */}
              <div className="flex flex-col justify-between h-full">
                {/* 1st image window (transparent, reveals underlying image) */}
                <div className="relative w-full h-[320px] lg:h-[450px] shrink-0 pointer-events-none">
                  {/* Blended gradient on bottom edge into the black card below */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[50px] lg:h-[60px] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
                    }}
                  />
                </div>

                {/* Bottom black text card */}
                <div className="w-full flex-1 bg-black flex flex-col justify-between pt-6 pb-2 px-1">
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
                    className="mt-6 lg:mt-0 text-white transition-transform duration-700 ease-out group-hover:-translate-y-[40px]"
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

              {/* 8px BLACK DIVIDER 1 */}
              <div className="w-[8px] h-full bg-black shrink-0 pointer-events-none" />

              {/* COLUMN 2: Full height transparent window (reveals underlying image) */}
              <div className="w-full h-full pointer-events-none" />

              {/* 8px BLACK DIVIDER 2 */}
              <div className="w-[8px] h-full bg-black shrink-0 pointer-events-none" />

              {/* COLUMN 3: Top window (540px) + Bottom black card (180px) */}
              <div className="flex flex-col justify-between h-full">
                {/* 3rd image window (transparent, reveals underlying image) */}
                <div className="relative w-full h-[380px] lg:h-[540px] shrink-0 pointer-events-none">
                  {/* Blended gradient on bottom edge into the black card below */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[50px] lg:h-[60px] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
                    }}
                  />
                </div>

                {/* Description on black background below 3rd window */}
                <div className="w-full flex-1 bg-black pt-4 lg:pt-6 px-1">
                  <p
                    className="text-white transition-transform duration-700 ease-out group-hover:-translate-y-[10px]"
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
              </div>

              {/* 8px BLACK DIVIDER 3 */}
              <div className="w-[8px] h-full bg-black shrink-0 pointer-events-none" />

              {/* COLUMN 4: Full height transparent window (reveals underlying image) */}
              <div className="w-full h-full pointer-events-none" />
            </div>
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
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e07c8e4c-3d68-41df-3bf4-c9807631ab00/public"
              alt="Northeast India single origin tea and coffee growing districts map"
              fill
              priority
              unoptimized
              className="object-contain select-none pointer-events-none"
            />
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
        className="relative w-full h-[1250vh] bg-black text-white"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-black">
          {/* HORIZONTAL CAROUSEL TRACK */}
          <div
            className="flex h-full will-change-transform"
            style={{
              width: "400%",
              transform: `translate3d(-${trackTranslatePercent}%, 0, 0)`,
            }}
          >
            {/* SLIDE 1: INTRO (FARMERS BIG TEXT + EXPANDING IMAGE) */}
            <div
              className="relative w-1/4 shrink-0 h-full flex items-center justify-center overflow-hidden"
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
                  }}
                >
                  Farmers
                </h2>
              </div>

              {/* INTRO IMAGE: EXPANDING FROM CENTER */}
              <div className="relative w-full max-w-[1158px] h-[60vh] lg:h-[768px] max-h-[768px] mx-auto overflow-hidden flex items-center justify-center">
                <div
                  className="relative w-full h-full"
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
            {FARMER_STORIES.map((story, sIdx) => {
              const t = sIdx === 0 ? t0 : sIdx === 1 ? t1 : t2;
              const anim = getSlideVerticalStyles(t);
              return (
                <div
                  key={story.id}
                  className="w-1/4 shrink-0 h-full flex items-center justify-center overflow-hidden"
                  style={{
                    paddingLeft: "2.778vw",
                    paddingRight: "2.778vw",
                  }}
                >
                  <div className="w-full max-w-[1360px] h-[min(640px,78vh)] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 my-auto">
                    {/* LEFT COLUMN: Main Image (58% width) */}
                    <div className="relative w-full lg:w-[58%] h-[340px] sm:h-[420px] lg:h-full max-h-[640px] overflow-hidden shrink-0 rounded-[2px]">
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

                    {/* RIGHT COLUMN: 38% width (Choreographed Vertical Sequence for 3rd, 5th, and last images) */}
                    <div className="relative w-full lg:w-[38%] h-[500px] lg:h-full max-h-[640px] flex items-center justify-end shrink-0">
                      <div className="relative w-full max-w-[420px] h-[520px] lg:h-[560px] overflow-hidden">
                        {/* Small Text 1 */}
                        <div
                          style={{
                            transform: anim.text1.transform,
                            opacity: anim.text1.opacity,
                            willChange: "transform, opacity",
                          }}
                          className="absolute top-0 left-0 w-full pointer-events-none"
                        >
                          <p
                            className="text-white select-none text-left"
                            style={{
                              fontFamily: "var(--font-manrope), sans-serif",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "24px",
                              letterSpacing: "0%",
                            }}
                          >
                            {story.text1}
                          </p>
                        </div>

                        {/* Secondary Image: square aspect ratio (3rd, 5th, last image) */}
                        <div
                          style={{
                            transform: anim.image.transform,
                            opacity: anim.image.opacity,
                            willChange: "transform, opacity",
                          }}
                          className="absolute top-0 left-0 w-[240px] sm:w-[260px] lg:w-[280px] aspect-square overflow-hidden rounded-[2px] shadow-2xl"
                        >
                          <Image
                            src={story.subImage}
                            alt={story.altSub}
                            fill
                            unoptimized
                            className="object-cover select-none"
                          />
                        </div>

                        {/* Small Text 2 */}
                        <div
                          style={{
                            transform: anim.text2.transform,
                            opacity: anim.text2.opacity,
                            willChange: "transform, opacity",
                          }}
                          className="absolute top-0 left-0 w-full pointer-events-none"
                        >
                          <p
                            className="text-white select-none text-left"
                            style={{
                              fontFamily: "var(--font-manrope), sans-serif",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "24px",
                              letterSpacing: "0%",
                            }}
                          >
                            {story.text2}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </section>

      {/* 140PX GAP BELOW CAROUSEL */}
      <div className="w-full h-[140px]" />

      {/* AS YOU LIKE IT SECTION */}
      <section
        id="as-you-like-it"
        className="relative w-full bg-black text-white overflow-hidden py-[clamp(60px,5vw,90px)]"
        style={{
          paddingLeft: "2.778vw",
          paddingRight: "2.778vw",
        }}
      >
        {/* Background image layover on top of black background (same as Our Story) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3fc1344b-d12d-4975-b4f5-3862a4956400/public"
            alt="As You Like It Background Overlay"
            fill
            unoptimized
            className="object-cover object-center w-full h-full opacity-50"
            style={{ opacity: 0.5 }}
          />

          {/* Top edge gradient to blend seamlessly into black above (100px) */}
          <div
            className="absolute top-0 left-0 right-0 h-[100px] pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          />

          {/* Bottom edge gradient to blend seamlessly into black below (200px) */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          />
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 w-full flex flex-col">
          {/* TOP ROW: Title & Description on Left, 3 Buttons on Right */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
            {/* LEFT SIDE: Title & Description */}
            <div className="flex flex-col items-start max-w-[540px]">
              <h2
                className="text-white select-none"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontSize: "clamp(36px, 3.472vw, 50px)",
                  lineHeight: "clamp(44px, 4.028vw, 58px)",
                  letterSpacing: "0%",
                }}
              >
                As you like it
              </h2>

              {/* 46px gap */}
              <div className="w-full h-[46px]" />

              <p
                className="text-white/90 select-none"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  maxWidth: "480px",
                }}
              >
                Consistent, full-bodied profiles built for volume without compromising
                on origin integrity. Roasted for reliability, cup after cup.
              </p>
            </div>

            {/* RIGHT SIDE: 3 Buttons */}
            <div className="flex flex-col items-end gap-6 sm:gap-7 self-start lg:self-auto mt-4 lg:mt-0">
              {currentBlends.map((item, idx) => {
                const isSelected = selectedBlend === idx;
                return (
                  <button
                    key={`${item.id}-${idx}`}
                    onClick={() => setSelectedBlend(idx)}
                    className="flex flex-col items-end group transition-all duration-200 cursor-pointer text-right"
                    style={{
                      fontFamily: "var(--font-monschone), serif",
                      fontWeight: 400,
                      fontSize: "22px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textTransform: "capitalize",
                      color: isSelected ? "#FFFFFF" : "#F2DBB2",
                    }}
                  >
                    <span>{item.name}</span>
                    {/* underline for selected button */}
                    {isSelected ? (
                      <div className="mt-[10px] w-[210px] sm:w-[240px] h-[1px] bg-white transition-all duration-300" />
                    ) : (
                      <div className="mt-[10px] w-0 h-[1px] bg-[#F2DBB2]/30 group-hover:w-full transition-all duration-300" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 46px gap */}
          <div className="w-full h-[46px]" />

          {/* BUTTONS ROW: Active on Left (Boxed) | Inactive on Right (Text) */}
          <div className="relative flex items-center">
            {/* Active Beverage Button (Boxed) */}
            <button
              type="button"
              className="w-[148px] h-[44px] flex items-center justify-center cursor-default border border-white/80 bg-white/10 text-white transition-all duration-300 select-none"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0%",
              }}
            >
              {activeBeverage === "coffee" ? "Coffee" : "Tea"}
            </button>

            {/* Vertical Divider Between Buttons */}
            <div
              className="w-[1px] h-[32px] mx-6 sm:mx-8 shrink-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0) 100%)",
              }}
            />

            {/* Inactive Beverage Button (Unboxed) */}
            <button
              type="button"
              onClick={() => {
                setActiveBeverage(activeBeverage === "coffee" ? "tea" : "coffee");
                setSelectedBlend(1);
              }}
              className="h-[44px] flex items-center justify-center cursor-pointer text-white/60 hover:text-white transition-colors duration-200 select-none"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0%",
              }}
            >
              {activeBeverage === "coffee" ? "Tea" : "Coffee"}
            </button>
          </div>

          {/* GALLERY AREA: VERTICAL DIVIDER LINE ON LEFT + IMAGES BESIDE IT */}
          <div className="relative w-full flex items-stretch">
            {/* CONTINUOUS VERTICAL DIVIDER LINE ALIGNED WITH LEFT EDGE OF ACTIVE BUTTON */}
            <div className="relative shrink-0 w-[1px] self-stretch">
              <div
                className="w-[1px] h-full"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0.1) 100%)",
                }}
              />
            </div>

            {/* IMAGE GRID BESIDE THE VERTICAL DIVIDER */}
            <div className="w-full pt-[36px] lg:pt-[42px] pl-6 sm:pl-7 lg:pl-8 flex flex-col md:flex-row items-center md:items-stretch gap-6 lg:gap-8">
              {/* Image 1: 511x304 ratio */}
              <div
                className="relative w-full max-w-[511px] md:max-w-none md:flex-[511_511_0%] overflow-hidden rounded-[2px] bg-neutral-900"
                style={{ aspectRatio: "511 / 304" }}
              >
                <Image
                  key={`img-0-${activeBeverage}`}
                  src={currentImages[0].src}
                  alt={currentImages[0].alt}
                  fill
                  unoptimized
                  className="object-cover select-none transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Image 2: 274x304 ratio */}
              <div
                className="relative w-full max-w-[274px] md:max-w-none md:flex-[274_274_0%] overflow-hidden rounded-[2px] bg-neutral-900"
                style={{ aspectRatio: "274 / 304" }}
              >
                <Image
                  key={`img-1-${activeBeverage}`}
                  src={currentImages[1].src}
                  alt={currentImages[1].alt}
                  fill
                  unoptimized
                  className="object-cover select-none transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Image 3: 274x304 ratio */}
              <div
                className="relative w-full max-w-[274px] md:max-w-none md:flex-[274_274_0%] overflow-hidden rounded-[2px] bg-neutral-900"
                style={{ aspectRatio: "274 / 304" }}
              >
                <Image
                  key={`img-2-${activeBeverage}`}
                  src={currentImages[2].src}
                  alt={currentImages[2].alt}
                  fill
                  unoptimized
                  className="object-cover select-none transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 140PX GAP BELOW */}
      <div className="w-full h-[140px]" />

      {/* L'ORIENTALIS FOOTER COMPONENT */}
      <LOrientalisFooter />
    </main>
  );
}
