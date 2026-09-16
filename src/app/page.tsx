"use client";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex">
        {/* 3 Video Columns */}
        {[
          {
            title: "Botanicals",
            paddingTop: "177.77777777777777%",
            videoSrc:
              "https://customer-nqls4utgv1ytiyat.cloudflarestream.com/5af2ef198ed6c47fdb0fe9ae934ff12b/iframe?poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2F5af2ef198ed6c47fdb0fe9ae934ff12b%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
            desc: "Where Himalayan terroir meets the cup  L’ORIENTALIS brings extraordinary botanicals, origins and flavour into focus."
          },
          {
            title: "Essentials",
            paddingTop: "66.81818181818183%",
            videoSrc:
              "https://customer-nqls4utgv1ytiyat.cloudflarestream.com/06f1fd10797ff51f37e920d1fa3024c4/iframe?poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2F06f1fd10797ff51f37e920d1fa3024c4%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
            desc: "BREWMATIC turns precision into craft, giving every botanical the engineering control to reveal its fullest character."
          },
          {
            title: "Experiences",
            paddingTop: "177.77777777777777%",
            videoSrc:
              "https://customer-nqls4utgv1ytiyat.cloudflarestream.com/a21247027c6b5e37d2ed35f814704c77/iframe?poster=https%3A%2F%2Fcustomer-nqls4utgv1ytiyat.cloudflarestream.com%2Fa21247027c6b5e37d2ed35f814704c77%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
            desc: "PRÊT À BOIRE brings botanicals, precision and human craft together transforming every pour into an experience worth remembering."
          }
        ].map((col, idx) => (
          <div
            key={idx}
            className="relative flex-1 h-full border-r border-white/5 last:border-r-0 group cursor-pointer overflow-hidden flex flex-col justify-center bg-black"
          >
            {/* Video embed */}
            <div
              className="w-full shrink-0"
              style={{ position: "relative", paddingTop: col.paddingTop }}
            >
              <iframe
                src={col.videoSrc}
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
            </div>

            {/* Dark Overlay (disappears on hover) */}
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-0 z-10 pointer-events-none"></div>

            {/* Bottom Gradient for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>

            {/* Text Content */}
            <div className="absolute bottom-[5vw] left-[4.166vw] right-[4.166vw] flex flex-col z-20 pointer-events-none">
              <span
                className="font-monschone font-normal text-[24px] text-white leading-[48px] tracking-[0%] mb-[4px] block"
                style={{
                  fontFamily: "var(--font-monschone), serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "24px",
                  lineHeight: "48px",
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
