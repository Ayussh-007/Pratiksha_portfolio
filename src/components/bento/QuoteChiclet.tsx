"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { TESTIMONIALS } from "@/data/portfolio-data";
import { useTheme } from "@/context/ThemeContext";

export function QuoteChiclet() {
  const { playUiSound } = useTheme();
  const [likes, setLikes] = useState<number>(48);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  const t = TESTIMONIALS[0];

  const handleLike = () => {
    playUiSound("sparkle");
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <ChicletCard
      gradientClass="bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 text-white"
      className="col-span-full min-h-[200px] sm:min-h-[240px] p-4 sm:p-6 md:p-10"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Quote text with giant quote mark */}
        <div className="flex items-start gap-4">
          <div className="text-6xl sm:text-8xl font-display font-black text-cyan-300 leading-none -mt-4 shrink-0 select-none opacity-80">
            “
          </div>
          <div className="space-y-2">
            <blockquote className="text-base sm:text-lg md:text-xl font-light text-slate-100 leading-relaxed max-w-3xl">
              {t.content}
            </blockquote>
          </div>
        </div>

        {/* Author info & controls */}
        <div className="shrink-0 flex flex-col md:items-end gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-white/20">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
              <Image src={t.avatar} alt={t.name} fill sizes="48px" className="object-cover" />
            </div>
            <div>
              <p className="font-display font-black tracking-wide uppercase text-lg text-white">
                {t.name}
              </p>
              <p className="text-xs font-mono text-cyan-200">
                {t.role} • SAKEC
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <button
              onClick={handleLike}
              className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/40 hover:bg-black/60 border border-white/20 text-xs font-mono text-slate-200 transition-colors cursor-pointer"
            >
              <Heart className={`h-3.5 w-3.5 ${hasLiked ? "fill-rose-400 text-rose-400" : "text-slate-300"}`} />
              <span>{likes}</span>
            </button>
          </div>
        </div>
      </div>
    </ChicletCard>
  );
}
