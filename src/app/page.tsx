"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(2);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Centered slide-based scrolling logic
  const slideLeft = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const slides = Array.from(container.children) as HTMLElement[];
      const slideElements = slides.filter(el => el.tagName === 'DIV' && el.children.length > 0 && el.offsetWidth > 100);

      const prevIndex = Math.max(activeSlide - 2, 0); // 0-indexed prev slide
      const prevSlide = slideElements[prevIndex];
      if (prevSlide) {
        const containerWidth = container.offsetWidth;
        const targetScroll = prevSlide.offsetLeft - (containerWidth - prevSlide.offsetWidth) / 2;
        container.scrollTo({ left: targetScroll, behavior: "smooth" });
      }
    }
  };

  const slideRight = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const slides = Array.from(container.children) as HTMLElement[];
      const slideElements = slides.filter(el => el.tagName === 'DIV' && el.children.length > 0 && el.offsetWidth > 100);

      const nextIndex = Math.min(activeSlide, slideElements.length - 1); // 0-indexed next slide
      const nextSlide = slideElements[nextIndex];
      if (nextSlide) {
        const containerWidth = container.offsetWidth;
        const targetScroll = nextSlide.offsetLeft - (containerWidth - nextSlide.offsetWidth) / 2;
        container.scrollTo({ left: targetScroll, behavior: "smooth" });
      }
    }
  };

  const handleCarouselScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      const slides = Array.from(container.children) as HTMLElement[];
      const slideElements = slides.filter(el => el.tagName === 'DIV' && el.children.length > 0 && el.offsetWidth > 100);

      let closestIndex = 0;
      let minDistance = Infinity;

      slideElements.forEach((slide, idx) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(containerCenter - slideCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveSlide(closestIndex + 1);
    }
  };

  // Center Slide 2 (index 1) on load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const slides = Array.from(container.children) as HTMLElement[];
        const slideElements = slides.filter(el => el.tagName === 'DIV' && el.children.length > 0 && el.offsetWidth > 100);

        const slide2 = slideElements[1]; // Slide 2
        if (slide2) {
          const containerWidth = container.offsetWidth;
          const targetScroll = slide2.offsetLeft - (containerWidth - slide2.offsetWidth) / 2;
          container.scrollLeft = targetScroll;
          setActiveSlide(2);
        }
      }
    }, 150); // Small delay to guarantee elements are fully mounted and sized

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex">
        {/* 3 Video Columns */}
        {[
          {
            video: "/4974759-hd_1080_2048_25fps (Tea).mp4",
            title: "Nu Tea",
            desc: "Intelligent brewing architecture where precision engineering transforms water and leaves into consistent expression."
          },
          {
            video: "/Coffee_Animation.mp4",
            title: "Nu Coffee",
            desc: "A calibrated coffee philosophy balancing origin character, extraction science, and contemporary café ritual."
          },
          {
            video: "/freepik_camera-still-_kling_1080p_16-9_24fps_91974.mp4",
            title: "Nu Water",
            desc: "Water-conscious culinary pairings designed to harmonise hydration, mineral balance, and mindful nourishment."
          }
        ].map((col, idx) => (
          <div
            key={idx}
            className="relative flex-1 h-full border-r border-white/5 last:border-r-0 group cursor-pointer"
            onMouseEnter={(e) => {
              const vid = e.currentTarget.querySelector('video');
              if (vid) vid.play();
            }}
            onMouseLeave={(e) => {
              const vid = e.currentTarget.querySelector('video');
              if (vid) {
                vid.pause();
                vid.currentTime = 0;
              }
            }}
          >
            <video
              src={col.video}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Dark Overlay (disappears on hover) */}
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-0 z-10 pointer-events-none"></div>

            {/* Bottom Gradient for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>

            {/* Text Content */}
            <div className="absolute bottom-[5vw] left-[4.166vw] right-[4.166vw] flex flex-col z-20 pointer-events-none">
              <h2 className="font-monschone font-normal text-[2.8vw] text-white mb-[1.5vw]">
                {col.title}
              </h2>
              <p className="font-manrope font-normal text-[0.937vw] text-white leading-[1.4] mb-[2vw] max-w-[85%]">
                {col.desc}
              </p>
              <div className="font-manrope font-bold text-[0.729vw] text-white flex items-center gap-[0.5vw]">
                See more <span className="text-[1vw]">›</span>
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

        {/* Navbar overlaying all columns */}
        <nav className="absolute top-[1.927vw] left-[4.166vw] right-[4.166vw] z-30 flex items-center justify-between font-manrope font-medium text-[0.729vw] leading-[120%] uppercase tracking-normal">
          <div className="flex items-center gap-[3vw]">
            <Link href="#" className="hover:opacity-70 transition-opacity">Solution</Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">Product</Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">Manifesto</Link>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/37f3aa68-da07-48f0-2b29-0ef6cf4c5800/public"
              alt="Logo"
              width={136}
              height={19.74}
              className="w-[7.083vw] h-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-[2vw]">
            <Link href="#" className="hover:opacity-70 transition-opacity">Get In Touch</Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">Menu</Link>
            <div className="w-[1.145vw] h-[1.197vw] bg-white rounded-[50%]"></div>
          </div>
        </nav>
      </section>
    </main>
  );
}
