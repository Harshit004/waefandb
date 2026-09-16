"use client";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex">
        {/* 3 Video Columns */}
        {[
          {
            video: "/4974759-hd_1080_2048_25fps (Tea).mp4",
            title: "Botanicals",
            desc: "Where Himalayan terroir meets the cup  L’ORIENTALIS brings extraordinary botanicals, origins and flavour into focus."
          },
          {
            video: "/Coffee_Animation.mp4",
            title: "Essentials",
            desc: "BREWMATIC turns precision into craft, giving every botanical the engineering control to reveal its fullest character."
          },
          {
            video: "/freepik_camera-still-_kling_1080p_16-9_24fps_91974.mp4",
            title: "Experiences",
            desc: "PRÊT À BOIRE brings botanicals, precision and human craft together transforming every pour into an experience worth remembering."
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
                Enquire Now <span className="text-[1vw]">›</span>
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
