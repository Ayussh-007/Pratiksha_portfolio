"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, GraduationCap, Users } from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function AvatarChiclet() {
  return (
    <ChicletCard
      gradientClass="bg-gradient-to-b from-cyan-600 via-blue-700 to-indigo-950 text-white"
      className="col-span-full md:col-span-4 min-h-[320px] sm:min-h-[380px] md:min-h-[440px] overflow-hidden flex flex-col justify-between"
    >
      {/* Top Academic & Club Pill */}
      <div className="flex items-center justify-between z-10">
        <span className="px-3 py-1 rounded-full bg-black/40 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md flex items-center gap-1.5 shadow-md">
          <GraduationCap className="h-3.5 w-3.5 text-cyan-300" />
          <span>B.Tech AI &amp; DS</span>
        </span>
        <span className="text-[11px] font-mono text-cyan-200 flex items-center gap-1 bg-black/30 px-2.5 py-1 rounded-full border border-white/10">
          <Users className="h-3 w-3 text-pink-300" />
          <span>CogniScience Club</span>
        </span>
      </div>

      {/* Center Avatar Visual - Cropped deeper from bottom and pulled down */}
      <div className="relative mx-auto mt-3 sm:mt-4 mb-2 w-40 h-48 sm:w-52 sm:h-60 md:w-60 md:h-68 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl bg-slate-900/60 group">
        <Image
          src={PERSONAL_INFO.avatarUrl}
          alt={PERSONAL_INFO.name}
          fill
          sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, 240px"
          priority
          className="object-cover object-[50%_0%] translate-y-5 scale-110 group-hover:scale-115 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 pointer-events-none" />
      </div>

      {/* Bottom Tagline */}
      <div className="z-10 text-center mt-1">
        <h3 className="font-display font-black tracking-wide uppercase text-xl text-white flex items-center justify-center gap-1.5">
          <span>{PERSONAL_INFO.name}</span>
          <Sparkles className="h-4 w-4 text-yellow-300" />
        </h3>
        <p className="text-xs font-mono text-cyan-200/90 mt-0.5">
          {PERSONAL_INFO.college}
        </p>
      </div>
    </ChicletCard>
  );
}
