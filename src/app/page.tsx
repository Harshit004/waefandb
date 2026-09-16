"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Header from "@/components/Header";

export default function Home() {
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const playerRefs = useRef<(any | null)[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeCursor, setActiveCursor] = useState<number | null>(null);

  // Helper to get or initialize a Stream player instance
  const getPlayer = (idx: number) => {
    if (!playerRefs.current[idx]) {
      const iframe = iframeRefs.current[idx];
      if (iframe && typeof window !== "undefined" && (window as any).Stream) {
        playerRefs.current[idx] = (window as any).Stream(iframe);
      }
    }
    return playerRefs.current[idx];
  };

  const handleMouseEnter = (idx: number) => {
    setActiveCursor(idx);
    const player = getPlayer(idx);
    if (player) {
      player.play().catch(() => {});
    }
    // Fallback direct postMessage command to ensure instant playback
    const iframe = iframeRefs.current[idx];
    iframe?.contentWindow?.postMessage(
      { __privateUnstableMessageType: "playCommand" },
      "*"
    );
  };

  const handleMouseLeave = (idx: number) => {
    const player = getPlayer(idx);
    if (player) {
      player.pause();
      try {
        player.currentTime = 0;
      } catch {}
    }
    // Fallback direct postMessage commands
    const iframe = iframeRefs.current[idx];
    iframe?.contentWindow?.postMessage(
      { __privateUnstableMessageType: "pauseCommand" },
      "*"
    );
    iframe?.contentWindow?.postMessage(
      {
        __privateUnstableMessageType: "setProperty",
        property: "currentTime",
        value: 0,
      },
      "*"
    );
  };

  useEffect(() => {
    // 60/120fps direct hardware-accelerated pointer tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };
    const handleMouseLeaveDoc = () => {
      setActiveCursor(null);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveDoc);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveDoc);
    };
  }, []);

  useEffect(() => {
    // Attempt initialization once mounted and when Stream is available
    const init = () => {
      if (typeof window !== "undefined" && (window as any).Stream) {
        iframeRefs.current.forEach((iframe, idx) => {
          if (iframe && !playerRefs.current[idx]) {
            playerRefs.current[idx] = (window as any).Stream(iframe);
          }
        });
      }
    };
    init();
    const interval = setInterval(init, 500);
    return () => clearInterval(interval);
  }, []);

  const columns = [
    {
      title: "Botanicals",
      videoSrc:
        "https://customer-nqls4utgv1ytiyat.cloudflarestream.com/5af2ef198ed6c47fdb0fe9ae934ff12b/iframe?poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2F5af2ef198ed6c47fdb0fe9ae934ff12b%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&muted=true&loop=true&controls=false&preload=auto",
      cursorIcon:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/fef200f0-0314-4809-ee31-4e460271d000/public",
      desc: "Where Himalayan terroir meets the cup  L’ORIENTALIS brings extraordinary botanicals, origins and flavour into focus.",
      scale: undefined,
    },
    {
      title: "Essentials",
      // Scaled by 2.66062 to crop landscape 3:2 video into uniform 9:16 portrait
      videoSrc:
        "https://customer-nqls4utgv1ytiyat.cloudflarestream.com/06f1fd10797ff51f37e920d1fa3024c4/iframe?poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2F06f1fd10797ff51f37e920d1fa3024c4%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&muted=true&loop=true&controls=false&preload=auto",
      cursorIcon:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/90634b6f-b31d-424e-7883-8fd6a4db1500/public",
      desc: "BREWMATIC turns precision into craft, giving every botanical the engineering control to reveal its fullest character.",
      scale: 2.66062,
    },
    {
      title: "Experiences",
      videoSrc:
        "https://customer-nqls4utgv1ytiyat.cloudflarestream.com/a21247027c6b5e37d2ed35f814704c77/iframe?poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2Fa21247027c6b5e37d2ed35f814704c77%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&muted=true&loop=true&controls=false&preload=auto",
      cursorIcon:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e17c8663-c1a9-4c60-46b0-45186e10fd00/public",
      desc: "PRÊT À BOIRE brings botanicals, precision and human craft together transforming every pour into an experience worth remembering.",
      scale: undefined,
    },
  ];

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      <Script
        src="https://embed.cloudflarestream.com/embed/sdk.latest.js"
        strategy="afterInteractive"
      />

      {/* Smooth 53x53 Custom Follow Cursor (responsive 3.681vw) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-50 will-change-transform hidden md:block"
        style={{
          width: "3.681vw",
          height: "3.681vw",
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      >
        <div
          className="relative w-full h-full"
          style={{
            opacity: activeCursor !== null ? 1 : 0,
            transform: `scale(${activeCursor !== null ? 1 : 0.4})`,
            transition:
              "opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1), transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {columns.map((col, idx) => (
            <img
              key={idx}
              src={col.cursorIcon}
              alt=""
              className="absolute inset-0 w-[3.681vw] h-[3.681vw] object-contain select-none pointer-events-none"
              style={{
                opacity: activeCursor === idx ? 1 : 0,
                transform: activeCursor === idx ? "scale(1)" : "scale(0.8)",
                transition:
                  "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          ))}
        </div>
      </div>

      {/* SECTION 1: HERO */}
      <section
        className="relative w-full h-screen overflow-hidden bg-black flex"
        onMouseLeave={() => setActiveCursor(null)}
      >
        <Header />
        {/* 3 Video Columns */}
        {columns.map((col, idx) => (
          <div
            key={idx}
            className="relative flex-1 h-full border-r border-white/5 last:border-r-0 group cursor-none overflow-hidden flex flex-col justify-center bg-black"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            {/* Video embed - All standardized to 9:16 portrait (padding-top: 177.77777777777777%) */}
            <div
              className="w-full shrink-0 relative overflow-hidden pointer-events-none"
              style={{ position: "relative", paddingTop: "177.77777777777777%" }}
            >
              <iframe
                ref={(el) => {
                  iframeRefs.current[idx] = el;
                }}
                src={col.videoSrc}
                loading="lazy"
                style={{
                  border: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  transform: col.scale ? `scale(${col.scale})` : undefined,
                  transformOrigin: "center center",
                }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              />
            </div>

            {/* Dark Overlay (disappears on hover) */}
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-0 z-10 pointer-events-none"></div>

            {/* Bottom Gradient for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>

            {/* Text Content */}
            <div className="absolute bottom-[5vw] left-[4.166vw] right-[4.166vw] flex flex-col z-20 pointer-events-none">
              <span
                className="font-monschone font-normal text-[1.667vw] text-white leading-[3.333vw] tracking-[0%] mb-[0.278vw] block"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "1.667vw",
                  lineHeight: "3.333vw",
                  letterSpacing: "0%",
                  color: "#fff",
                }}
              >
                Brewing
              </span>
              <h2 className="font-monschone font-normal text-[2.8vw] text-white mb-[1.5vw]">
                {col.title}
              </h2>
              <p className="font-manrope font-normal text-[0.937vw] text-white leading-[1.4] mb-[2vw] max-w-[85%]">
                {col.desc}
              </p>
              <div
                className="font-manrope font-bold text-[0.972vw] leading-[1.528vw] tracking-[0%] pointer-events-auto cursor-pointer group/btn transition-opacity duration-300 hover:opacity-90 w-fit select-none"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 700,
                  fontSize: "0.972vw",
                  lineHeight: "1.528vw",
                  letterSpacing: "0%",
                }}
              >
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #DEE2C9 0%, #DEE2C9 12%, #365944 24%, #365944 76%, #DEE2C9 88%, #DEE2C9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  Enquire now &gt;
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Top Vignette Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-[20%] z-20 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        ></div>

        {/* Bottom Vignette Overlay */}
        <div
          className="absolute bottom-0 left-0 w-full h-[30%] z-20 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
          }}
        ></div>
      </section>
    </main>
  );
}
