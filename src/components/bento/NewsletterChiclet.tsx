"use client";

import React, { useState } from "react";
import { Send, Check, Sparkles, Mail, Copy } from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { ConfettiButton } from "@/components/ui/ConfettiButton";
import { InstagramIcon } from "@/components/ui/Icons";
import { useTheme } from "@/context/ThemeContext";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function NewsletterChiclet() {
  const { playUiSound } = useTheme();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playUiSound("sparkle");
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playUiSound("sparkle");
    setSubmitted(true);
  };

  return (
    <ChicletCard
      gradientClass="bg-gradient-to-b from-sky-950 via-slate-900 to-indigo-950 text-white"
      className="col-span-full py-8 sm:py-10 md:py-14 text-center flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Decorative Radial Background */}
      <div className="absolute inset-0 bg-radial-gradient from-sky-500/20 via-transparent to-transparent pointer-events-none blur-2xl" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-cyan-300">
          <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
          <span>Connect &amp; Collaborate</span>
        </div>

        <h2 className="font-display font-black tracking-tight uppercase text-3xl sm:text-4xl md:text-5xl text-white">
          Let’s Build Impactful Solutions
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-lg mx-auto leading-relaxed font-normal">
          Interested in collaborating on AI, robotics, software development, or student initiatives? Drop your email or connect directly.
        </p>

        {submitted ? (
          <div className="p-5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-sm max-w-md mx-auto flex items-center justify-center gap-2.5">
            <Check className="h-5 w-5 text-emerald-400 shrink-0" />
            <span>Message transmitted! I will respond to your inquiry promptly.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 py-3 rounded-2xl bg-black/50 border border-white/20 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 font-mono"
            />
            <ConfettiButton
              type="submit"
              variant="primary"
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-xl hover:brightness-110 cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>Connect</span>
            </ConfettiButton>
          </form>
        )}

        <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 transition-colors cursor-pointer bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-xl border border-white/10"
          >
            <Mail className="h-3.5 w-3.5 text-cyan-300" />
            <span>{PERSONAL_INFO.email}</span>
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400 ml-1" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-slate-400 ml-1" />
            )}
          </button>
          <span>•</span>
          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-pink-300 hover:text-pink-200 underline"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            <span>{PERSONAL_INFO.instagramHandle}</span>
          </a>
        </div>
      </div>
    </ChicletCard>
  );
}
