"use client";

import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  CheckCircle2,
  Code2,
  Database,
  Palette,
  Users,
} from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { SKILLS, PERSONAL_INFO } from "@/data/portfolio-data";
import { useTheme } from "@/context/ThemeContext";

type SkillTab = "all" | "languages" | "database" | "design" | "leadership";

const SKILL_TABS: { id: SkillTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "all", label: "All Skills", icon: Layers },
  { id: "languages", label: "Languages & DSA", icon: Code2 },
  { id: "database", label: "DBMS & AI", icon: Database },
  { id: "design", label: "Web & UI/UX", icon: Palette },
  { id: "leadership", label: "Leadership & Club", icon: Users },
];

export function TechStackChiclet() {
  const { playUiSound } = useTheme();
  const [activeTab, setActiveTab] = useState<SkillTab>("all");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const filteredSkills = SKILLS.filter((skill) => {
    if (activeTab === "all") return true;
    if (activeTab === "languages") {
      return ["Python", "Java", "C / C++", "Data Structures & Algorithms (DSA)"].includes(skill.name);
    }
    if (activeTab === "database") {
      return ["DBMS", "SQL", "Artificial Intelligence & Data Science", "Robotics & Telemetry"].includes(skill.name);
    }
    if (activeTab === "design") {
      return ["Web Development", "UI/UX Design", "Canva"].includes(skill.name);
    }
    if (activeTab === "leadership") {
      return [
        "Communication & Public Speaking",
        "Teamwork & Leadership",
        "CogniScience Club Member",
      ].includes(skill.name);
    }
    return true;
  });

  const handleTabClick = (e: React.MouseEvent, tabId: SkillTab) => {
    e.preventDefault();
    e.stopPropagation();
    playUiSound("click");
    setActiveTab(tabId);
  };

  const handleSkillClick = (e: React.MouseEvent, skillName: string) => {
    e.preventDefault();
    e.stopPropagation();
    playUiSound("pop");
    setSelectedSkill(selectedSkill === skillName ? null : skillName);
  };

  return (
    <ChicletCard
      gradientClass="bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white"
      className="col-span-full md:col-span-8 min-h-[360px] sm:min-h-[420px] p-4 sm:p-6 md:p-8 flex flex-col justify-between"
    >
      <div>
        {/* Header & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/40 border border-white/20 shrink-0">
              <Layers className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <h2 className="font-display font-black tracking-tight uppercase text-2xl sm:text-3xl text-white">
                Skills &amp; Capabilities
              </h2>
              <p className="text-xs font-mono text-cyan-200">
                Technical foundation, creative tools &amp; leadership strengths
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 p-1 rounded-xl bg-black/50 border border-white/20 max-w-full overflow-x-auto">
            {SKILL_TABS.map((tab) => {
              const isSelected = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={(e) => handleTabClick(e, tab.id)}
                  className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-mono font-bold transition-all cursor-pointer select-none active:scale-95 ${
                    isSelected
                      ? "bg-white text-slate-950 shadow-md ring-2 ring-white/50"
                      : "text-slate-200 hover:text-white hover:bg-white/15"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Cards Grid (Clickable Skill Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredSkills.map((skill) => {
            const isHighlighted = selectedSkill === skill.name;
            return (
              <div
                key={skill.name}
                onClick={(e) => handleSkillClick(e, skill.name)}
                className={`flex flex-col justify-between p-3.5 rounded-2xl transition-all duration-200 shadow-sm cursor-pointer border select-none transform hover:-translate-y-0.5 ${
                  isHighlighted
                    ? "bg-black/80 border-cyan-400 ring-2 ring-cyan-400/40"
                    : "bg-black/35 hover:bg-black/55 border-white/20 hover:border-white/40"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="h-2.5 w-2.5 rounded-full shrink-0 shadow-sm"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className="text-xs sm:text-sm font-bold text-white truncate">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-200 bg-white/10 px-2 py-0.5 rounded-md shrink-0 border border-white/10">
                    {skill.level}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${skill.levelPercentage}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Meta Strip */}
      <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between text-xs font-mono text-cyan-200 gap-2">
        <span className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
          <span>B.Tech AI &amp; DS • {PERSONAL_INFO.club}</span>
        </span>
        <span className="flex items-center gap-1 text-emerald-300">
          <CheckCircle2 className="h-3.5 w-3.5" />
          <span>{filteredSkills.length} Skills Listed</span>
        </span>
      </div>
    </ChicletCard>
  );
}
