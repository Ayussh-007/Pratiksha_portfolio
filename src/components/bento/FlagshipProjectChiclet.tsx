"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, ExternalLink } from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/types";
import { useTheme } from "@/context/ThemeContext";

interface FlagshipProjectChicletProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  className?: string;
}

export function FlagshipProjectChiclet({
  project,
  onOpenModal,
  className = "col-span-full sm:col-span-6 lg:col-span-6 min-h-[440px]",
}: FlagshipProjectChicletProps) {
  const { playUiSound } = useTheme();

  return (
    <ChicletCard
      ribbonText="FLAGSHIP PROJECT"
      ribbonColor="bg-yellow-300 text-slate-950 font-black"
      gradientClass="bg-gradient-to-b from-amber-600 via-orange-700 to-rose-900 text-white"
      className={`${className} group overflow-hidden`}
    >
      {/* Inset Screenshot Banner */}
      <div
        onClick={() => {
          playUiSound("sparkle");
          onOpenModal(project);
        }}
        className="relative -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 h-52 sm:h-60 overflow-hidden border-b border-white/20 cursor-pointer"
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950 via-transparent to-transparent opacity-90 pointer-events-none" />
      </div>

      {/* Title & Tagline */}
      <div className="mt-auto">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-black/40 border border-white/20 text-[10px] font-mono font-bold text-amber-300">
            {project.categoryLabel}
          </span>
          {project.year && (
            <span className="text-xs font-mono text-amber-200">{project.year}</span>
          )}
        </div>

        <h2
          onClick={() => {
            playUiSound("sparkle");
            onOpenModal(project);
          }}
          className="font-display font-black tracking-tight uppercase text-2xl sm:text-3xl md:text-4xl text-white flex items-center justify-between group-hover:text-amber-200 transition-colors cursor-pointer"
        >
          <span>{project.title}</span>
          <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-slate-100/90 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics / Attributes Row */}
        {project.metrics && (
          <div className="mt-4 pt-3 border-t border-white/20 flex flex-wrap items-center gap-2">
            {project.metrics.map((m, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] font-mono text-amber-200"
              >
                <TrendingUp className="h-3 w-3 text-emerald-400" />
                <span>{m.label}: <strong className="text-white">{m.value}</strong></span>
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons: GitHub Link & Case Study */}
        <div className="mt-4 pt-3 border-t border-white/20 flex flex-wrap items-center gap-2">
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                playUiSound("pop");
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/50 hover:bg-black/70 border border-white/30 text-white text-xs font-mono font-bold shadow-md active:scale-95 transition-all cursor-pointer select-none"
            >
              <GithubIcon className="h-4 w-4 text-cyan-300" />
              <span>GitHub Repo</span>
              <ExternalLink className="h-3 w-3 text-slate-300" />
            </a>
          )}

          <button
            type="button"
            onClick={() => {
              playUiSound("sparkle");
              onOpenModal(project);
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-slate-950 text-xs font-bold shadow-md hover:bg-slate-100 active:scale-95 transition-all cursor-pointer select-none"
          >
            <span>Overview &amp; Telemetry</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </ChicletCard>
  );
}
