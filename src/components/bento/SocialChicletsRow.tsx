"use client";

import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { useTheme } from "@/context/ThemeContext";

export function SocialChicletsRow() {
  const { playUiSound } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playUiSound("sparkle");
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="col-span-full grid grid-cols-1 sm:grid-cols-3 gap-3">
      {/* 1. Instagram Chiclet */}
      <a
        href={PERSONAL_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => playUiSound("pop")}
        className="block group"
      >
        <ChicletCard
          gradientClass="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 hover:brightness-110 text-white"
          className="p-4 sm:p-5 md:p-6 min-h-[110px] sm:min-h-[140px] flex flex-col justify-between cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <InstagramIcon className="h-6 w-6 text-white" />
            <ArrowUpRight className="h-5 w-5 text-white/80 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div>
            <div className="font-display font-black uppercase text-xl sm:text-2xl tracking-wide text-white">
              Instagram
            </div>
            <div className="text-xs font-mono text-pink-100 font-semibold mt-0.5">
              {PERSONAL_INFO.instagramHandle}
            </div>
          </div>
        </ChicletCard>
      </a>

      {/* 2. LinkedIn Chiclet */}
      <a
        href={PERSONAL_INFO.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => playUiSound("pop")}
        title="LinkedIn Profile"
        className="block group"
      >
        <ChicletCard
          gradientClass="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 hover:brightness-110 text-white"
          className="p-4 sm:p-5 md:p-6 min-h-[110px] sm:min-h-[140px] flex flex-col justify-between cursor-pointer border border-white/20"
        >
          <div className="flex items-center justify-between">
            <LinkedinIcon className="h-6 w-6 text-cyan-300" />
            <ArrowUpRight className="h-5 w-5 text-white/80 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div>
            <div className="font-display font-black uppercase text-xl sm:text-2xl tracking-wide text-white">
              LinkedIn
            </div>
            <div className="text-xs font-mono text-cyan-200 mt-0.5">
              Pratiksha Naik
            </div>
          </div>
        </ChicletCard>
      </a>

      {/* 3. Direct Official Email Chiclet */}
      <div
        onClick={handleCopyEmail}
        className="block group cursor-pointer"
      >
        <ChicletCard
          gradientClass="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 hover:brightness-110 text-white"
          className="p-4 sm:p-5 md:p-6 min-h-[110px] sm:min-h-[140px] flex flex-col justify-between border border-white/20"
        >
          <div className="flex items-center justify-between">
            <Mail className="h-6 w-6 text-yellow-300" />
            <div className="p-1 rounded-lg bg-black/30 border border-white/20">
              {copied ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4 text-white" />
              )}
            </div>
          </div>
          <div>
            <div className="font-display font-black uppercase text-xl sm:text-2xl tracking-wide text-white flex items-center justify-between">
              <span>Official Email</span>
              {copied && (
                <span className="text-[11px] font-mono text-emerald-300 font-bold lowercase">
                  copied!
                </span>
              )}
            </div>
            <div className="text-xs font-mono text-blue-100 truncate mt-0.5">
              {PERSONAL_INFO.email}
            </div>
          </div>
        </ChicletCard>
      </div>
    </div>
  );
}
