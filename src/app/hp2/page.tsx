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
                            <p className="font-manrope font-normal text-[0.937vw] text-white/90 leading-[1.4] mb-[2vw] max-w-[85%]">
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

            {/* SECTION 2: BELIEF */}
            <section className="relative w-full bg-black pt-[17vw] pb-[8.8vw] px-[17.43vw] flex flex-col items-center justify-center text-center">
                <div className="w-[65.27vw] flex flex-col items-center justify-center">
                    {/* Top category label */}
                    <span className="font-manrope font-medium text-[0.729vw] leading-[120%] tracking-[0.2em] uppercase text-white mb-[2vw]">
                        An Exquisite Crafted Cafe
                    </span>

                    {/* Main Headline */}
                    <h2 className="text-[3.333vw] leading-[3.854vw] tracking-normal mb-[3.28vw]">
                        <span className="font-monschone font-normal">PRETÀBOIRE</span>{" "}
                        <span className="font-monschone font-light text-white/90">was built on a</span>
                        <br />
                        <span className="font-monschone font-light text-white/90">simple belief:</span>
                    </h2>

                    {/* Description Paragraph */}
                    <p className="font-manrope font-normal text-[1.145vw] leading-[1.6] text-white/80 max-w-[48vw] mb-[4.84vw]">
                        when beverages are treated with intelligence, people drink differently. This is a café where tea is approached with reverence, coffee is engineered with precision, and every cup reflects an uncompromising respect for craft.
                    </p>

                    {/* Footer Subtext */}
                    <p className="font-manrope font-medium text-[0.729vw] leading-[1.6] tracking-[0.2em] uppercase text-white max-w-[35vw]">
                        Enter a space where drinking becomes
                        <br />
                        an experience of discernment.
                    </p>
                </div>
            </section>
            {/* SECTION 3: WHO WE ARE */}
            <section className="relative bg-white w-full pt-[148px] px-[8.33vw]">
                {/* Background Image Layer */}
                <div className="absolute inset-0 bottom-[229px] z-0">
                    <Image
                        src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d7562235-59b3-4312-f0c1-e3385591e600/public"
                        alt="Section 3 Background"
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
                {/* Lower White Part */}
                <div className="absolute bottom-0 left-0 w-full h-[229px] bg-white z-0" />

                {/* Content Container */}
                <div className="relative z-10 w-full flex flex-col">
                    <h3 className="font-manrope font-bold text-[15px] leading-[130%] text-[#111111] uppercase tracking-normal mb-[64px]">
                        WHO WE ARE
                    </h3>

                    {/* Columns */}
                    <div className="flex w-full justify-between">
                        {/* Left Column (Means) */}
                        <div className="w-[30.0694vw] flex flex-col">
                            <h2 className="font-monschone font-normal text-[58px] leading-[58px] text-[#111111] mb-[29px]">
                                Means
                            </h2>
                            <h4 className="font-manrope font-bold text-[20px] leading-[28px] text-[#111111] mb-[28px]">
                                PRETÀBOIRE : ready to drink.
                            </h4>
                            <p className="font-manrope font-normal text-[20px] leading-[28px] text-[#111111] mb-[28px]">
                                In French, it is a simple phrase. In practice, it is an exacting standard.<br />
                                Readiness here has nothing to do with speed. It is the result of preparation so deliberate that by the time a beverage reaches the guest, every decision has already been made at the source, at the brew, at the moment of presentation.
                            </p>
                            <p className="font-manrope font-bold text-[20px] leading-[28px] text-[#111111]">
                                Prepared in sourcing.<br />
                                Prepared in brewing.<br />
                                Prepared in presentation.
                            </p>
                        </div>

                        {/* Right Column (Story) */}
                        <div className="w-[30.0694vw] flex flex-col">
                            <h2 className="font-monschone font-normal text-[58px] leading-[58px] text-[#111111] mb-[29px]">
                                Story
                            </h2>
                            <h4 className="font-manrope font-bold text-[20px] leading-[28px] text-[#111111] mb-[28px]">
                                Founded on a paradox.
                            </h4>
                            <p className="font-manrope font-normal text-[20px] leading-[28px] text-[#111111] mb-[28px]">
                                The great cafés of France shaped culture over a single perfect cup. Then convenience arrived and the café lost its soul.
                            </p>
                            <h4 className="font-manrope font-bold text-[20px] leading-[28px] text-[#111111] mb-[28px]">
                                We saw it. We refused it.
                            </h4>
                            <p className="font-manrope font-normal text-[20px] leading-[28px] text-[#111111] mb-[28px]">
                                PretàBoire was built as a correction - where beverage science, French tradition, and uncompromising hospitality converge.
                            </p>
                            <p className="font-manrope font-normal text-[20px] leading-[28px] text-[#111111]">
                                The café experience, restored to what it always should have been.
                            </p>
                        </div>
                    </div>

                    {/* Video Section with Overlay Cards */}
                    <div className="relative w-full mt-[148px] h-[42.498vw]">
                        {/* The Main Video Background */}
                        <video
                            src="/3044454-uhd_3840_2160_25fps.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />

                        {/* Tea Card */}
                        <div className="absolute top-0 left-0 w-[10.5vw] h-[14.166vw] bg-[#FFFBF1] flex items-center justify-center z-10">
                            <span className="font-monschone font-normal text-[24px] leading-[130%] text-[#111111]">Tea</span>
                        </div>

                        {/* Coffee Card (offset to the right) */}
                        <div className="absolute top-[14.166vw] left-[10.5vw] w-[10.5vw] h-[14.166vw] bg-[#FFFBF1] flex items-center justify-center z-10">
                            <span className="font-monschone font-normal text-[24px] leading-[130%] text-[#111111]">Coffee</span>
                        </div>

                        {/* Water Card */}
                        <div className="absolute top-[28.332vw] left-0 w-[10.5vw] h-[14.166vw] bg-[#FFFBF1] flex items-center justify-center z-10">
                            <span className="font-monschone font-normal text-[24px] leading-[130%] text-[#111111]">Water</span>
                        </div>

                        {/* Empty Right Card */}
                        <div className="absolute top-[144px] right-0 w-[10.5vw] h-[14.166vw] bg-[#FFFBF1] z-10"></div>

                        {/* Circular Button */}
                        <div className="absolute bottom-[2vw] right-[2.5vw] w-[2.5vw] h-[2.5vw] bg-[#FFFBF1] rounded-full z-10"></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: DETAILS THAT MAKE THE DIFFERENCE */}
            <section className="relative w-full bg-white text-[#1F3D2B] pt-[7.5vw] pb-[10.416vw] px-[12.29166vw] flex flex-col items-center">
                {/* Main Section Header */}
                <h2 className="font-monschone font-normal text-[4.583vw] leading-[5.208vw] text-center text-[#1F3D2B]">
                    Details that make <br /> the difference
                </h2>

                {/* 117px Gap */}
                <div className="h-[6.093vw]"></div>

                {/* Alternate Layout Containers */}
                <div className="w-full flex flex-col gap-[7.812vw]">

                    {/* Row 1: Image Left, Text Right */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[5vw]">
                        {/* Image */}
                        <div className="w-[36.8055vw] relative overflow-hidden">
                            <Image
                                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2e5aeb3d-8716-4d39-9bf5-a70a9f82c700/public"
                                alt="Lorieantalis"
                                width={706}
                                height={706}
                                className="w-full h-[669px] object-cover"
                                unoptimized
                            />
                        </div>

                        {/* Text Details */}
                        <div className="w-[27.84vw] text-left flex flex-col">
                            <h3 className="font-monschone font-normal text-[1.875vw] leading-[2.5vw] text-[#1F3D2B] capitalize mb-[0.3vw]">
                                Lorieantalis
                            </h3>
                            <p className="font-manrope font-semibold text-[0.833vw] leading-[1.562vw] text-[#1F3D2B] uppercase tracking-wider mb-[2.083vw]">
                                TEA AND COFFEE - TWO EXPRESSIONS, ONE ORIGIN
                            </p>

                            {/* Description Details */}
                            <div className="font-manrope font-normal text-[0.833vw] leading-[130%] text-[#5C605E] flex flex-col gap-[1.5vw]">
                                <p>
                                    LORIANTALIS means sourced from the east. It is not a blend or a trend it is a provenance. Climate, soil chemistry, harvest timing, and centuries of eastern cultural interpretation are embedded in every leaf and bean. This is what makes it different.
                                </p>
                                <p className="font-bold">
                                    Tea and coffee
                                </p>
                                <div className="flex flex-col gap-[0.8vw]">
                                    <p>LORIEANTALIS is served two ways at PRÊT À BOIRE:</p>
                                    <ul className="list-none pl-0 flex flex-col gap-[0.5vw]">
                                        <li className="flex items-start gap-[0.5vw]">
                                            <span className="mt-[0.2vw]">•</span>
                                            <span>As tea - slow, layered, intellectually refined. Each cup reflects the full complexity of its eastern origin.</span>
                                        </li>
                                        <li className="flex items-start gap-[0.5vw]">
                                            <span className="mt-[0.2vw]">•</span>
                                            <span>As coffee - precise, deliberate, rich with the same depth of sourcing.</span>
                                        </li>
                                    </ul>
                                    <p className="mt-[0.5vw]">
                                        Both beverages are an expression of the same ingredient, the same philosophy.
                                    </p>
                                </div>
                            </div>

                            {/* 72px Gap & Button */}
                            <div className="mt-[3.75vw]">
                                <button className="w-[9.739vw] h-[2.604vw] min-w-[150px] min-h-[40px] border border-[#1F3D2B] flex items-center justify-center font-sans font-normal text-[0.833vw] text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-white transition-all cursor-pointer uppercase">
                                    EXPLORE NOW
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Text Left, Image Right */}
                    <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-[5vw]">
                        {/* Image */}
                        <div className="w-[36.8055vw] relative overflow-hidden">
                            <Image
                                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f7085d0e-c453-4e5d-7bcb-54f4cdcae000/public"
                                alt="De'le Atmosphere"
                                width={706}
                                height={706}
                                className="w-full h-[669px] object-cover"
                                unoptimized
                            />
                        </div>

                        {/* Text Details */}
                        <div className="w-[27.84vw] text-left flex flex-col">
                            <h3 className="font-monschone font-normal text-[1.875vw] leading-[2.5vw] text-[#1F3D2B] capitalize mb-[0.3vw]">
                                De'le Atmosphere
                            </h3>
                            <p className="font-manrope font-semibold text-[0.833vw] leading-[1.562vw] text-[#1F3D2B] uppercase tracking-wider mb-[2.083vw]">
                                CARBON NEUTRAL - STILL ALKALINE WATER
                            </p>

                            {/* Description Details */}
                            <div className="font-manrope font-normal text-[0.833vw] leading-[130%] text-[#5C605E] flex flex-col gap-[1.5vw]">
                                <p>
                                    Water is the most overlooked element at any table. Here, it is among the most deliberate. What arrives in your glass has been held to the same scrutiny as every ingredient, every pour, every detail that defines this experience.
                                </p>
                                <p>
                                    This is not hydration as an afterthought. It is water as a statement of what Pretaboire de' le Atmosphere believes: that true refinement leaves nothing unconsidered, and that the finest experiences are felt in exactly the details most places ignore.
                                </p>
                            </div>

                            {/* 72px Gap & Button */}
                            <div className="mt-[3.75vw]">
                                <button className="w-[9.739vw] h-[2.604vw] min-w-[150px] min-h-[40px] border border-[#1F3D2B] flex items-center justify-center font-sans font-normal text-[0.833vw] text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-white transition-all cursor-pointer uppercase">
                                    EXPLORE NOW
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 5: CAROUSEL SECTION */}
            <section className="relative w-full bg-[#DEE2C9] text-[#1F3D2B] py-[5.677vw] flex flex-col items-center">
                {/* Text Section Above Carousel */}
                <div className="w-full px-[17.0833vw] flex flex-col items-center text-center">
                    <h2 className="font-monschone font-normal text-[4.27vw] leading-[4.947vw] text-[#1F3D2B]">
                        Where service <br /> meets provenance, every<br /> detail is intentional.
                    </h2>

                    {/* Another ptext container: py-90px px-13.4375vw */}
                    <div className="py-[4.687vw] px-[13.4375vw] flex flex-col items-center">
                        <p className="font-manrope font-medium text-[1.041vw] leading-[1.3] text-[#111111] max-w-[50vw]">
                            Every barista trained in origin, not just technique. Every selection drawn from the 23rd parallel north above Tropic of Cancer - where altitude, climate, and terroir produce coffee of rare complexity.
                        </p>
                        {/* gap worth a line height */}
                        <div className="h-[1.354vw]"></div>
                        <p className="font-manrope font-medium text-[1.041vw] leading-[1.3] text-[#111111] max-w-[50vw]">
                            Nothing on this menu exists by default. Every cup is traceable, intentional, and held to a single standard.
                        </p>
                        {/* gap worth a line's height */}
                        <div className="h-[1.354vw]"></div>
                        <p className="font-manrope font-bold text-[1.041vw] leading-[1.3] text-[#111111] max-w-[50vw]">
                            This is Pret à Boire - As you like it!
                        </p>
                    </div>

                    {/* Button: border 1px solid #1F3D2B */}
                    <button className="w-[15vw] h-[2.604vw] min-w-[200px] min-h-[44px] border border-[#1F3D2B] flex items-center justify-center font-sans font-normal text-[0.833vw] text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-white transition-all cursor-pointer uppercase">
                        EXPLORE OUR SOLUTIONS
                    </button>
                </div>

                {/* 154px Gap below button */}
                <div className="h-[8.02vw]"></div>

                {/* Carousel Container */}
                <div className="w-full relative flex flex-col">
                    {/* Scrollable Track */}
                    <div
                        ref={carouselRef}
                        onScroll={handleCarouselScroll}
                        className="w-full overflow-x-auto flex gap-[8.055vw] px-[12.29166vw] scroll-smooth scrollbar-none snap-x snap-mandatory"
                    >
                        {/* Slide 1 */}
                        <div className="flex flex-col shrink-0 snap-start">
                            <div className="h-[22.447vw] w-[32.812vw] relative">
                                <Image
                                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0bc9e9be-37a6-4ff6-d7d7-bf9523499000/public"
                                    alt="SkymarkOne_Image_0"
                                    width={630}
                                    height={431}
                                    className="w-full h-full object-cover rounded-[4px]"
                                    unoptimized
                                />
                            </div>
                            <span className="font-manrope font-semibold text-[0.833vw] leading-[3.385vw] text-[#1F3D2B] uppercase mt-[0.5vw]">
                                SkymarkOne _Image_0
                            </span>
                        </div>

                        {/* Slide 2 */}
                        <div className="flex flex-col shrink-0 snap-start">
                            <div className="h-[22.447vw] w-[32.812vw] relative">
                                <Image
                                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0bc9e9be-37a6-4ff6-d7d7-bf9523499000/public"
                                    alt="SkymarkOne_Image_1"
                                    width={630}
                                    height={431}
                                    className="w-full h-full object-cover rounded-[4px]"
                                    unoptimized
                                />
                            </div>
                            <span className="font-manrope font-semibold text-[0.833vw] leading-[3.385vw] text-[#1F3D2B] uppercase mt-[0.5vw]">
                                SkymarkOne _Image_1
                            </span>
                        </div>

                        {/* Slide 3 */}
                        <div className="flex flex-col shrink-0 snap-start">
                            <div className="h-[22.447vw] w-[32.812vw] relative">
                                <Image
                                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0bc9e9be-37a6-4ff6-d7d7-bf9523499000/public"
                                    alt="SkymarkOne_Image_2"
                                    width={630}
                                    height={431}
                                    className="w-full h-full object-cover rounded-[4px]"
                                    unoptimized
                                />
                            </div>
                            <span className="font-manrope font-semibold text-[0.833vw] leading-[3.385vw] text-[#1F3D2B] uppercase mt-[0.5vw]">
                                SkymarkOne _Image_2
                            </span>
                        </div>

                        {/* Slide 4 */}
                        <div className="flex flex-col shrink-0 snap-start">
                            <div className="h-[22.447vw] w-[32.812vw] relative">
                                <Image
                                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0bc9e9be-37a6-4ff6-d7d7-bf9523499000/public"
                                    alt="SkymarkOne_Image_3"
                                    width={630}
                                    height={431}
                                    className="w-full h-full object-cover rounded-[4px]"
                                    unoptimized
                                />
                            </div>
                            <span className="font-manrope font-semibold text-[0.833vw] leading-[3.385vw] text-[#1F3D2B] uppercase mt-[0.5vw]">
                                SkymarkOne _Image_3
                            </span>
                        </div>

                        {/* Slide 5 */}
                        <div className="flex flex-col shrink-0 snap-start">
                            <div className="h-[22.447vw] w-[32.812vw] relative">
                                <Image
                                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0bc9e9be-37a6-4ff6-d7d7-bf9523499000/public"
                                    alt="SkymarkOne_Image_4"
                                    width={630}
                                    height={431}
                                    className="w-full h-full object-cover rounded-[4px]"
                                    unoptimized
                                />
                            </div>
                            <span className="font-manrope font-semibold text-[0.833vw] leading-[3.385vw] text-[#1F3D2B] uppercase mt-[0.5vw]">
                                SkymarkOne _Image_4
                            </span>
                        </div>
                        {/* Spacer to preserve right padding on scroll */}
                        <div className="shrink-0 w-[12.29166vw] -ml-[8.055vw]" />
                    </div>

                    {/* Navigation Controls (Bottom Right aligned) */}
                    <div className="self-end mr-[3.055vw] mt-[2vw] flex items-center gap-[2.5vw]">
                        {/* Numerical Slide Indicator (activeSlide ─── 5) */}
                        <div className="flex items-center gap-[0.8vw] font-manrope text-[0.833vw] font-medium text-[#1F3D2B]">
                            <span>{activeSlide}</span>
                            <span className="w-[2vw] h-[1px] bg-[#1F3D2B] opacity-60"></span>
                            <span>5</span>
                        </div>

                        {/* Chevron Buttons Container (114px x 49px equivalent) */}
                        <div className="flex items-center gap-[0.833vw]">
                            <button
                                onClick={slideLeft}
                                className="w-[2.552vw] h-[2.552vw] min-w-[40px] min-h-[40px] rounded-full border border-[#1F3D2B]/40 hover:border-[#1F3D2B] flex items-center justify-center text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-white transition-all cursor-pointer"
                            >
                                <svg width="1.2vw" height="1.2vw" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                onClick={slideRight}
                                className="w-[2.552vw] h-[2.552vw] min-w-[40px] min-h-[40px] rounded-full border border-[#1F3D2B]/40 hover:border-[#1F3D2B] flex items-center justify-center text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-white transition-all cursor-pointer"
                            >
                                <svg width="1.2vw" height="1.2vw" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: GET IN TOUCH */}
            <section className="relative w-full bg-white py-[5.208vw] px-[12.395833vw] flex flex-col items-center text-center">
                {/* Label */}
                <p className="font-manrope font-bold text-[0.833vw] leading-[3.385vw] text-[#1F3D2B] uppercase tracking-normal">
                    Get in Touch
                </p>

                {/* Heading */}
                <h2 className="font-monschone font-normal text-[3.125vw] leading-[3.385vw] text-[#1F3D2B]">
                    Find Your Perfect Cafe Solution
                </h2>

                {/* 27px gap */}
                <div className="h-[1.406vw]" />

                {/* Body */}
                <p className="font-manrope font-medium text-[1.041vw] leading-[1.3] text-[#111111]">
                    Not sure where to begin? Connect with us to discover a café ecosystem tailored<br />to your space, your guests, and your standard of service.
                </p>

                {/* 58px gap */}
                <div className="h-[3.020vw]" />

                {/* Button */}
                <button className="w-[15vw] h-[2.604vw] min-w-[200px] min-h-[44px] border border-[#1F3D2B] flex items-center justify-center font-manrope font-normal text-[0.833vw] text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-white transition-all cursor-pointer uppercase tracking-normal">
                    GET IN TOUCH
                </button>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#1F3D2B] text-white">
                {/* Main Footer Grid */}
                <div className="w-full flex items-stretch">

                    {/* Column 1: INFO */}
                    <div className="flex flex-col w-[16.5vw] px-[3.055vw] pt-[4.166vw] pb-[3.125vw]">
                        <h4 className="font-monschone font-normal text-[0.937vw] leading-[1.4] text-white mb-[1.041vw]">
                            INFO
                        </h4>
                        <div className="w-[1.666vw] h-[1px] bg-white/40 mb-[1.25vw]" />
                        <nav className="flex flex-col gap-[0.416vw]">
                            {["Cookies", "Privacy policy", "Term of use", "Accessibility", "Sitemap"].map((item) => (
                                <a key={item} href="#" className="font-manrope font-normal text-[0.833vw] leading-[1.4] text-white/80 hover:text-white transition-colors">
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-[1px] bg-white shrink-0" />

                    {/* Column 2: FOLLOW US */}
                    <div className="flex flex-col w-[15.5vw] px-[3.055vw] pt-[4.166vw] pb-[3.125vw]">
                        <h4 className="font-monschone font-normal text-[0.937vw] leading-[1.4] text-white mb-[1.041vw]">
                            FOLLOW US
                        </h4>
                        <div className="w-[1.666vw] h-[1px] bg-white/40 mb-[1.25vw]" />
                        <div className="flex items-center gap-[1.041vw]">
                            {/* LinkedIn */}
                            <a href="#" className="text-white/80 hover:text-white transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="text-white/80 hover:text-white transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="text-white/80 hover:text-white transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            {/* X / Twitter */}
                            <a href="#" className="text-white/80 hover:text-white transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" className="text-white/80 hover:text-white transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1F3D2B" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-[1px] bg-white shrink-0" />

                    {/* Column 3: PRETABOIRE */}
                    <div className="flex flex-col w-[16.5vw] px-[3.055vw] pt-[4.166vw] pb-[3.125vw]">
                        <h4 className="font-monschone font-normal text-[0.937vw] leading-[1.4] text-white mb-[1.041vw]">
                            PRETABOIRE
                        </h4>
                        <div className="w-[1.666vw] h-[1px] bg-white/40 mb-[1.25vw]" />
                        <p className="font-manrope font-normal text-[0.833vw] leading-[1.4] text-white/80 mb-[1.25vw]">
                            SkymarkOne, Noida
                        </p>
                        <p className="font-manrope font-normal text-[0.833vw] leading-[1.4] text-white/80">
                            247/2, D Block, Sector 63,<br />
                            Gautambuddha Nagar,<br />
                            Noida, Uttar Pradesh 201309
                        </p>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-[1px] bg-white shrink-0" />

                    {/* Column 4: Newsletter */}
                    <div className="flex flex-col flex-1 px-[3.055vw] pt-[4.166vw] pb-[3.125vw]">
                        <p className="font-manrope font-normal text-[0.833vw] leading-[1.4] text-white mb-[1.041vw]">
                            Subscribe to our newsletter
                        </p>

                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-[473px] h-[2.604vw] bg-white text-[#1F3D2B] font-manrope text-[0.833vw] placeholder:text-[#1F3D2B]/60 text-center pt-[0.781vw] pb-[0.677vw] px-[6.770vw] outline-none mb-[0.833vw]"
                        />

                        {/* Checkbox */}
                        <label className="flex items-start gap-[0.416vw] mb-[1.25vw] cursor-pointer">
                            <input type="checkbox" className="mt-[0.15vw] accent-white shrink-0" />
                            <span className="font-manrope font-normal text-[0.729vw] leading-[1.4] text-white/70">
                                I have read and accept the terms of the{" "}
                                <a href="#" className="underline text-white/80 hover:text-white">privacy policy</a>
                            </span>
                        </label>

                        {/* Sign Up Button */}
                        <button className="w-[7.291vw] min-w-[120px] h-[2.604vw] min-h-[42px] border border-white flex items-center justify-center text-white text-[0.833vw] leading-[1.3] hover:bg-white hover:text-[#1F3D2B] transition-all cursor-pointer uppercase" style={{ fontFamily: "'Helvetica Now Text', Helvetica, Arial, sans-serif", fontWeight: 400 }}>
                            SIGN UP
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full border-t border-white px-[12.395833vw] py-[1.25vw] flex items-center gap-[0.625vw]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60 shrink-0">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M15 9.354a4 4 0 100 5.292" />
                    </svg>
                    <span className="font-manrope font-normal text-[0.729vw] leading-[1.4] text-white">
                        Copy Right&nbsp; WAE F&B (P) Ltd. 2026
                    </span>
                </div>
            </footer>
        </main>
    );
}
