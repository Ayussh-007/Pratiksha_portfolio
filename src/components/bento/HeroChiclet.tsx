"use client";

import React, { useState } from "react";
import { Copy, Check, ArrowUpRight, GraduationCap, Users } from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { ConfettiButton } from "@/components/ui/ConfettiButton";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useTheme } from "@/context/ThemeContext";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function HeroChiclet() {
  const { playUiSound } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playUiSound("sparkle");
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <ChicletCard
      gradientClass="bg-[#7000FF] text-white"
      className="col-span-full md:col-span-8 min-h-[340px] sm:min-h-[380px] md:min-h-[420px]"
    >
      <div className="pt-2">
        {/* Academic & Club Status Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 border border-white/20 text-xs font-mono font-medium backdrop-blur-md">
            <GraduationCap className="h-4 w-4 text-pink-300" />
            <span className="text-pink-200 font-semibold">{PERSONAL_INFO.college}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-500/20 border border-pink-400/30 text-xs font-mono font-medium backdrop-blur-md">
            <Users className="h-3.5 w-3.5 text-pink-300" />
            <span className="text-pink-200 font-semibold">{PERSONAL_INFO.club}</span>
          </div>
        </div>

        {/* Skewed Display Title */}
        <h1 className="skew-heading font-black tracking-tight uppercase text-3xl sm:text-4xl md:text-6xl/tight text-white mb-4 sm:mb-6 flex flex-col gap-1 sm:gap-2">
          <span className="text-2xl sm:text-3xl md:text-5xl opacity-90">Hey, I'm</span>
          <span className="underline decoration-pink-400 decoration-wavy decoration-2 underline-offset-4 sm:underline-offset-8 text-4xl sm:text-5xl md:text-7xl/tight">{PERSONAL_INFO.name}</span>
        </h1>

        {/* Description Bio */}
        <div className="text-sm sm:text-base md:text-lg text-slate-100/90 max-w-2xl leading-relaxed space-y-3 font-medium">
          <p>
            I’m a <strong className="text-white underline decoration-cyan-400 decoration-2 underline-offset-4">19-year-old student</strong> pursuing <strong className="text-white">{PERSONAL_INFO.degree}</strong> at <strong className="text-cyan-200">{PERSONAL_INFO.college}</strong> and an active member of the <strong className="text-pink-300">{PERSONAL_INFO.club}</strong>.
          </p>
          <p className="text-xs sm:text-sm text-slate-200/90 font-normal">
            Passionate about technology, problem-solving, and practical solutions. I build with <strong>C/C++, Java, Python, Web Development, DBMS, SQL, and DSA</strong>, while blending creativity through <strong>UI/UX design and Canva</strong>.
          </p>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="mt-4 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20 flex flex-wrap items-center gap-2 sm:gap-3">
        <a
          href="#projects"
          onClick={() => playUiSound("click")}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-slate-950 text-xs sm:text-sm font-bold shadow-xl hover:bg-slate-100 transition-all border-none"
        >
          <span>AI Rover Project</span>
          <ArrowUpRight className="h-4 w-4 text-purple-700" />
        </a>

        <a
          href={PERSONAL_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playUiSound("pop")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-mono text-xs sm:text-sm shadow-md border border-pink-400/40 transition-all"
        >
          <InstagramIcon className="h-4 w-4" />
          <span>{PERSONAL_INFO.instagramHandle}</span>
        </a>

        <a
          href={PERSONAL_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playUiSound("pop")}
          title="LinkedIn Profile (Updating)"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/80 hover:bg-blue-600 text-white font-mono text-xs sm:text-sm shadow-md border border-blue-400/40 transition-all"
        >
          <LinkedinIcon className="h-4 w-4" />
          <span>LinkedIn</span>
        </a>

        <ConfettiButton
          onClick={handleCopyEmail}
          variant="secondary"
          className="bg-black/30 hover:bg-black/40 text-white font-mono text-xs sm:text-sm border border-white/20"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-400" />
              <span className="text-emerald-300">Email Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 text-slate-200" />
              <span>{PERSONAL_INFO.email}</span>
            </>
          )}
        </ConfettiButton>
      </div>
    </ChicletCard>
  );
}
