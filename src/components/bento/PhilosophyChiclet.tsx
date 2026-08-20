"use client";

import React, { useState } from "react";
import { Sparkles, RefreshCw, ArrowRight } from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { useTheme } from "@/context/ThemeContext";

const PUNCHLINES = [
  {
    q: "My Core Belief?",
    a: "Technical knowledge is only one part — communication, teamwork, leadership, and public speaking make a complete professional.",
  },
  {
    q: "What Drives Me?",
    a: "Exploring AI, robotics, and emerging technologies to build practical solutions with meaningful real-world impact.",
  },
  {
    q: "Tech & Creativity?",
    a: "Blending strong programming (C++, Java, Python, SQL, DSA) with creative UI/UX design and Canva.",
  },
  {
    q: "Key Initiative?",
    a: "AI Disaster Assessment Rover for Emergency Response in hazardous environments.",
  },
];

export function PhilosophyChiclet() {
  const { playUiSound } = useTheme();
  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    playUiSound("pop");
    setIsFlipping(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % PUNCHLINES.length);
      setIsFlipping(false);
    }, 120);
  };

  const item = PUNCHLINES[index];

  return (
    <ChicletCard
      gradientClass="bg-lime-400 text-slate-950 cursor-pointer select-none"
      className="col-span-full md:col-span-4 min-h-[220px] sm:min-h-[280px] group transition-transform active:scale-[0.99]"
      onClick={() => handleNext()}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-widest text-slate-900">
        <span className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-slate-950" />
          <span>Core Values &amp; Vision</span>
        </span>
        <button
          type="button"
          onClick={handleNext}
          className="p-1.5 rounded-lg bg-black/10 hover:bg-black/20 text-slate-950 transition-all cursor-pointer hover:rotate-45"
          title="Cycle to next value"
          aria-label="Cycle next value"
        >
          <RefreshCw className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Content Guaranteed Visible & Smooth */}
      <div className="my-auto pt-3 sm:pt-4 pb-2 min-h-[100px] sm:min-h-[140px] flex flex-col justify-center">
        <div
          className={`transition-all duration-200 transform ${
            isFlipping ? "opacity-0 translate-y-2 scale-98" : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          <h2 className="skew-heading font-black tracking-tight uppercase text-2xl sm:text-3xl text-slate-950 leading-tight">
            {item.q}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-2.5 leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-3 border-t border-slate-950/20 flex items-center justify-between text-xs font-mono font-bold text-slate-900">
        <div className="flex items-center gap-2">
          <span>Click to cycle ({index + 1}/{PUNCHLINES.length})</span>
          {/* Visual pill dots */}
          <div className="flex items-center gap-1">
            {PUNCHLINES.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-4 bg-slate-950" : "w-1.5 bg-slate-950/30"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-950 text-lime-400 hover:bg-slate-900 cursor-pointer font-bold shadow-sm transition-transform active:scale-95"
        >
          <span>Next</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </ChicletCard>
  );
}
