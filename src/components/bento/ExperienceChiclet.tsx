"use client";

import React, { useState } from "react";
import { GraduationCap, Building2, Calendar, MapPin, ChevronRight } from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { EXPERIENCES } from "@/data/portfolio-data";
import { useTheme } from "@/context/ThemeContext";

export function ExperienceChiclet() {
  const { playUiSound } = useTheme();
  const [activeExp, setActiveExp] = useState(EXPERIENCES[0]?.id || "");

  return (
    <ChicletCard
      gradientClass="bg-gradient-to-br from-purple-800 via-indigo-900 to-slate-900 text-white"
      className="col-span-full md:col-span-8"
    >
      <div className="flex items-center gap-2.5 mb-6">
        <GraduationCap className="h-5 w-5 text-purple-300" />
        <h2 className="font-display font-black tracking-tight uppercase text-2xl sm:text-3xl text-white">
          Academic Journey &amp; Milestones
        </h2>
      </div>

      <div className="space-y-3">
        {EXPERIENCES.map((exp) => {
          const isSelected = activeExp === exp.id;
          return (
            <div
              key={exp.id}
              onClick={() => {
                playUiSound("click");
                setActiveExp(isSelected ? "" : exp.id);
              }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                isSelected
                  ? "bg-black/50 border-white/30 shadow-lg"
                  : "bg-black/20 border-white/10 hover:bg-black/30 hover:border-white/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold uppercase text-base sm:text-lg text-white">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950 text-[10px] font-mono font-black">
                        ONGOING
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-200 mt-0.5">
                    <Building2 className="h-3 w-3" />
                    <span>{exp.company}</span>
                    <span>•</span>
                    <MapPin className="h-3 w-3" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-2 text-xs font-mono text-purple-200">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      isSelected ? "rotate-90 text-white" : "text-purple-400"
                    }`}
                  />
                </div>
              </div>

              {isSelected && (
                <div className="mt-3 pt-3 border-t border-white/15 space-y-2 text-xs text-slate-200">
                  <p className="leading-relaxed">{exp.description}</p>
                  <div className="space-y-1 pt-1">
                    {exp.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-300">
                        <span className="text-pink-400 font-bold">▹</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </ChicletCard>
  );
}
