import React from "react";

export default function Header() {
  return (
    <header
      className="absolute top-0 left-0 w-full h-[13.889vw] z-30 flex items-start justify-between pointer-events-none"
      style={{
        background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
        paddingTop: "2.153vw",
        paddingLeft: "4.166vw",
        paddingRight: "4.166vw",
      }}
    >
      {/* Left Logo */}
      <div className="flex items-center h-[3.4027vw] pointer-events-auto">
        <img
          src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a408ada7-d032-418a-d952-f65e7548f800/public"
          alt="Logo"
          style={{
            width: "3.4027vw",
            height: "auto",
          }}
          className="object-contain cursor-pointer"
        />
      </div>

      {/* Right Navigation */}
      <div className="flex items-center h-[3.4027vw] pointer-events-auto select-none">
        {/* Circular Globe Icon */}
        <img
          src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d9b5adda-a339-430f-fef7-1ab710cc9800/public"
          alt="Globe"
          className="object-contain"
          style={{
            width: "1.042vw",
            height: "1.042vw",
          }}
        />

        {/* 6.5px gap -> "EN" */}
        <span
          className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
          style={{
            marginLeft: "0.451vw",
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "0.972vw",
            lineHeight: "120%",
            letterSpacing: "0%",
            color: "#FFFFFF",
          }}
        >
          EN
        </span>

        {/* 18px gap -> "MENU" */}
        <span
          className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
          style={{
            marginLeft: "1.25vw",
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "0.972vw",
            lineHeight: "120%",
            letterSpacing: "0%",
            color: "#FFFFFF",
          }}
        >
          MENU
        </span>

        {/* 34px gap -> "By" */}
        <span
          style={{
            marginLeft: "2.361vw",
            fontFamily: "var(--font-poly), 'Poly', serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "0.972vw",
            lineHeight: "120%",
            letterSpacing: "0%",
            color: "#FFFFFF",
          }}
        >
          By
        </span>

        {/* 5px gap -> "WAE" */}
        <span
          style={{
            marginLeft: "0.347vw",
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "0.972vw",
            lineHeight: "120%",
            letterSpacing: "0%",
            color: "#FFFFFF",
          }}
        >
          WAE
        </span>

        {/* 18px gap -> 24px X 24px external link image */}
        <img
          src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d6e9e78c-d124-43a1-9cd1-ee3369efc000/public"
          alt="External link"
          className="object-contain cursor-pointer transition-opacity duration-200 hover:opacity-80"
          style={{
            marginLeft: "1.25vw",
            width: "1.667vw",
            height: "1.667vw",
          }}
        />
      </div>
    </header>
  );
}

