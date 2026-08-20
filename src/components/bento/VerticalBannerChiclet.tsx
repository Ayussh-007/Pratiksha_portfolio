"use client";

import React from "react";
import { ChicletCard } from "./ChicletCard";

interface VerticalBannerChicletProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function VerticalBannerChiclet({
  title = "PROJECT VAULT",
  subtitle = "CURATED WORK",
  className = "col-span-full sm:col-span-3 md:col-span-2 sm:row-span-2",
}: VerticalBannerChicletProps) {
  return (
    <ChicletCard
      gradientClass="bg-gradient-to-b from-indigo-900 via-purple-950 to-slate-950 text-slate-100"
      className={`${className} min-h-[220px] sm:min-h-[360px] flex items-center justify-center p-4 sm:p-6`}
    >
      <div className="text-center sm:text-left flex flex-col items-center justify-center h-full">
        <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest mb-2 sm:mb-0 sm:[writing-mode:vertical-lr] sm:rotate-180">
          {subtitle}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-widest text-white sm:[writing-mode:vertical-lr] sm:rotate-180 sm:p-0 my-auto">
          {title}
        </h2>
      </div>
    </ChicletCard>
  );
}
