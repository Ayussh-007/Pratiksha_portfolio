"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { Project } from "@/types";
import { useTheme } from "@/context/ThemeContext";

const COLOR_MAP: Record<string, { bg: string; text: string; badge: string }> = {
  "ai-disaster-rover": {
    bg: "bg-gradient-to-br from-amber-600 via-orange-700 to-rose-950 text-white",
    text: "text-white",
    badge: "bg-amber-950/60 text-amber-200",
  },
  "dbms-sql-platform": {
    bg: "bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-950 text-white",
    text: "text-white",
    badge: "bg-cyan-950/60 text-cyan-200",
  },
  "uiux-canva-design-studio": {
    bg: "bg-gradient-to-br from-pink-600 via-rose-700 to-purple-950 text-white",
    text: "text-white",
    badge: "bg-pink-950/60 text-pink-200",
  },
  "dsa-algorithms-suite": {
    bg: "bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-950 text-white",
    text: "text-white",
    badge: "bg-emerald-950/60 text-emerald-200",
  },
};

interface ProjectChicletTileProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  className?: string;
}

export function ProjectChicletTile({
  project,
  onOpenModal,
  className = "col-span-full sm:col-span-6",
}: ProjectChicletTileProps) {
  const { playUiSound } = useTheme();
  const theme = COLOR_MAP[project.id] || {
    bg: "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white",
    text: "text-white",
    badge: "bg-black/40 text-slate-200",
  };

  return (
    <ChicletCard
      gradientClass={theme.bg}
      className={`${className} min-h-[240px] sm:min-h-[300px] md:min-h-[340px] cursor-pointer group`}
      onClick={() => {
        playUiSound("sparkle");
        onOpenModal(project);
      }}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span
          className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${theme.badge} border border-white/20`}
        >
          {project.categoryLabel}
        </span>
        {project.year && (
          <span className="text-xs font-mono opacity-80">{project.year}</span>
        )}
      </div>

      <div className="my-auto">
        <h2 className="font-display font-black tracking-tight uppercase text-xl sm:text-2xl md:text-3xl text-white flex items-center justify-between group-hover:underline decoration-white/40 underline-offset-4">
          <span>{project.title}</span>
          <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-100/90 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="pt-3 mt-4 border-t border-white/20 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-black/30 border border-white/10 text-[10px] font-mono text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </ChicletCard>
  );
}
