"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useTheme } from "@/context/ThemeContext";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Footer() {
  const { playUiSound } = useTheme();

  const scrollToTop = () => {
    playUiSound("pop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full max-w-6xl mx-auto mt-6 px-4">
      {/* Horizontal Gradient Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
        {/* Brand & Stack Info */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 font-mono text-xs font-bold text-white shadow-sm">
            PN
          </div>
          <div>
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 font-mono">Portfolio</span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              {PERSONAL_INFO.degree} • {PERSONAL_INFO.collegeShort} ({PERSONAL_INFO.club})
            </p>
          </div>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="mt-4 text-center text-xs font-mono text-slate-600">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. • {PERSONAL_INFO.email}
      </div>
    </footer>
  );
}
