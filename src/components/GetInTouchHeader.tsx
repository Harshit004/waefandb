import React from "react";
import Link from "next/link";

interface GetInTouchHeaderProps {
  className?: string;
  onMouseEnterElement?: () => void;
  onMouseLeaveElement?: () => void;
  onMenuClick?: () => void;
}

export default function GetInTouchHeader({
  className = "",
  onMouseEnterElement,
  onMouseLeaveElement,
  onMenuClick,
}: GetInTouchHeaderProps = {}) {
  return (
    <header
      className={`absolute top-0 left-0 w-full h-[13.889vw] z-30 flex items-start justify-between pointer-events-none ${className}`}
      style={{
        background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
        paddingTop: "2.153vw",
        paddingLeft: "4.166vw",
        paddingRight: "4.166vw",
      }}
    >
      {/* Left Logo */}
      <Link
        href="/"
        className="flex items-center h-[3.4027vw] pointer-events-auto cursor-pointer"
        onMouseEnter={onMouseEnterElement}
        onMouseLeave={onMouseLeaveElement}
      >
        <img
          src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a408ada7-d032-418a-d952-f65e7548f800/public"
          alt="Logo"
          style={{
            width: "3.4027vw",
            height: "auto",
          }}
          className="object-contain cursor-pointer"
        />
      </Link>

      {/* Right Menu Icon (42x42px at 1440px -> 2.917vw) */}
      <div
        className="flex items-center h-[3.4027vw] pointer-events-auto select-none"
        onMouseEnter={onMouseEnterElement}
        onMouseLeave={onMouseLeaveElement}
      >
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Menu"
          className="flex items-center justify-center p-0 bg-transparent border-none cursor-pointer transition-opacity duration-200 hover:opacity-80 focus:outline-none"
        >
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/15b5475b-bd3f-40c0-6957-34d8bdc1f000/public"
            alt="Menu"
            className="object-contain cursor-pointer"
            style={{
              width: "2.917vw",
              height: "2.917vw",
            }}
          />
        </button>
      </div>
    </header>
  );
}
