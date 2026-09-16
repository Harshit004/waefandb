import React from "react";

export default function Header() {
  return (
    <header
      className="absolute top-0 left-0 w-full h-[200px] z-30 flex items-start justify-between pointer-events-none"
      style={{
        background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
        paddingTop: "31px",
        paddingLeft: "4.166vw",
        paddingRight: "4.166vw",
      }}
    >
      <div className="flex items-center pointer-events-auto">
        <img
          src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a408ada7-d032-418a-d952-f65e7548f800/public"
          alt="Logo"
          style={{
            width: "3.4027vw",
            height: "auto",
          }}
          className="object-contain"
        />
      </div>
    </header>
  );
}
