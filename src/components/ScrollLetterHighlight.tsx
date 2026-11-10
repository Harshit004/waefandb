"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";

interface ScrollLetterHighlightProps {
  lines: string[];
  className?: string;
  style?: React.CSSProperties;
  baseColor?: string; // unhighlighted / lighter base color (default: "#717171")
  highlightColor?: string; // highlighted color (default: "#FFFFFF")
  startThreshold?: number; // viewport ratio when animation starts (default: 0.85)
  endThreshold?: number; // viewport ratio when animation finishes (default: 0.25)
}

function parseHexColor(hex: string): [number, number, number] {
  if (hex.startsWith("#")) {
    let clean = hex.slice(1);
    if (clean.length === 3) {
      clean = clean
        .split("")
        .map((c) => c + c)
        .join("");
    }
    const num = parseInt(clean, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }
  return [113, 113, 113];
}

export default function ScrollLetterHighlight({
  lines,
  className = "",
  style = {},
  baseColor = "#717171",
  highlightColor = "#FFFFFF",
  startThreshold = 0.85,
  endThreshold = 0.25,
}: ScrollLetterHighlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const [smoothProgress, setSmoothProgress] = useState(0);

  const [baseR, baseG, baseB] = useMemo(
    () => parseHexColor(baseColor),
    [baseColor]
  );
  const [highR, highG, highB] = useMemo(
    () => parseHexColor(highlightColor),
    [highlightColor]
  );

  // Precompute lines, words, and character global indexes
  const { linesData, totalChars, accessibleText } = useMemo(() => {
    let globalIndex = 0;
    const linesData = lines.map((line) => {
      const wordsArr = line.trim().split(/\s+/);
      const words = wordsArr.map((word, wIdx) => {
        const chars = word.split("").map((char) => {
          const charObj = { char, globalIndex };
          globalIndex++;
          return charObj;
        });

        const hasTrailingSpace = wIdx < wordsArr.length - 1;
        let spaceGlobalIndex: number | undefined;
        if (hasTrailingSpace) {
          spaceGlobalIndex = globalIndex;
          globalIndex++;
        }

        return {
          chars,
          hasTrailingSpace,
          spaceGlobalIndex,
        };
      });

      return { words };
    });

    const accessibleText = lines.join(" ");

    return { linesData, totalChars: Math.max(globalIndex, 1), accessibleText };
  }, [lines]);

  useEffect(() => {
    const updateTarget = (isInitial = false) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startY = windowHeight * startThreshold;
      const endY = windowHeight * endThreshold;
      const raw = (startY - rect.top) / (startY - endY);
      const clamped = Math.min(Math.max(raw, 0), 1);

      targetProgressRef.current = clamped;
      if (isInitial) {
        currentProgressRef.current = clamped;
        setSmoothProgress(clamped);
      }
    };

    const onScroll = () => {
      updateTarget(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial calculation on mount
    updateTarget(true);

    let animId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Exponential smoothing for butter-smooth animation
      const lambda = 14;
      const factor = 1 - Math.exp(-lambda * dt);
      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.0003) {
        const nextVal = current + diff * factor;
        currentProgressRef.current = nextVal;
        setSmoothProgress(nextVal);
      } else if (current !== target) {
        currentProgressRef.current = target;
        setSmoothProgress(target);
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(animId);
    };
  }, [startThreshold, endThreshold]);

  // Color calculation per letter
  const getLetterColor = (index: number) => {
    // Soft transition window (~4-5 characters wide)
    const spread = 0.05;
    const start = (index / totalChars) * (1 - spread);
    const end = start + spread;

    if (smoothProgress <= start) {
      return baseColor;
    }
    if (smoothProgress >= end) {
      return highlightColor;
    }

    const localT = (smoothProgress - start) / (end - start);
    // Smoothstep easing
    const smoothT = localT * localT * (3 - 2 * localT);

    const r = Math.round(baseR + (highR - baseR) * smoothT);
    const g = Math.round(baseG + (highG - baseG) * smoothT);
    const b = Math.round(baseB + (highB - baseB) * smoothT);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div ref={containerRef} className={className} style={style}>
      <p className="space-y-0" aria-label={accessibleText}>
        {linesData.map((line, lIdx) => (
          <span key={lIdx} className="block" aria-hidden="true">
            {line.words.map((word, wIdx) => (
              <span key={wIdx} className="inline-block whitespace-nowrap">
                {word.chars.map((c) => (
                  <span
                    key={c.globalIndex}
                    style={{
                      color: getLetterColor(c.globalIndex),
                      transition: "color 0.1s ease-out",
                    }}
                  >
                    {c.char}
                  </span>
                ))}
                {word.hasTrailingSpace && word.spaceGlobalIndex !== undefined && (
                  <span
                    key={word.spaceGlobalIndex}
                    style={{
                      color: getLetterColor(word.spaceGlobalIndex),
                      transition: "color 0.1s ease-out",
                    }}
                  >
                    &nbsp;
                  </span>
                )}
              </span>
            ))}
          </span>
        ))}
      </p>
    </div>
  );
}

