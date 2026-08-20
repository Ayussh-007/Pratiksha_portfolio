"use client";

import React, { useState } from "react";
import { HeroChiclet } from "@/components/bento/HeroChiclet";
import { AvatarChiclet } from "@/components/bento/AvatarChiclet";
import { NowPlayingChiclet } from "@/components/bento/NowPlayingChiclet";
import { WeatherChiclet } from "@/components/bento/WeatherChiclet";
import { PhilosophyChiclet } from "@/components/bento/PhilosophyChiclet";
import { ProjectChicletTile } from "@/components/bento/ProjectChicletTile";
import { TechStackChiclet } from "@/components/bento/TechStackChiclet";
import { ExperienceChiclet } from "@/components/bento/ExperienceChiclet";
import { TerminalChiclet } from "@/components/bento/TerminalChiclet";
import { QuoteChiclet } from "@/components/bento/QuoteChiclet";
import { SocialChicletsRow } from "@/components/bento/SocialChicletsRow";
import { NewsletterChiclet } from "@/components/bento/NewsletterChiclet";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { HireMeModal } from "@/components/contact/HireMeModal";
import { BackgroundMesh } from "@/components/ui/BackgroundMesh";
import { Footer } from "@/components/footer/Footer";
import { PROJECTS } from "@/data/portfolio-data";
import { Project } from "@/types";

export default function PortfolioHome() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const roverProject = PROJECTS.find((p) => p.id === "ai-disaster-rover") || PROJECTS[0];
  const dbmsProject = PROJECTS.find((p) => p.id === "dbms-sql-platform") || PROJECTS[1];

  return (
    <div id="home" className="relative min-h-screen selection:bg-pink-500 selection:text-white pb-12">
      {/* Dynamic Animated Ambient Mesh */}
      <BackgroundMesh />

      {/* Main Greg Ives-style Master Bento Tray */}
      <div className="w-full max-w-7xl mx-auto pt-4 sm:pt-6 md:pt-8 px-2 sm:px-4 md:px-6">
        <div className="p-1.5 sm:p-2 md:p-4 bg-slate-900/90 shadow-2xl shadow-black/80 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-white/10 backdrop-blur-2xl">
          <main className="grid grid-cols-12 gap-2 sm:gap-3">
            {/* Row 1: Skewed Hero Identity + Cutout Portrait */}
            <HeroChiclet />
            <AvatarChiclet />

            {/* Row 2: Focus Audio Track (Sleek Horizontal Player) */}
            <div className="col-span-full">
              <NowPlayingChiclet />
            </div>

            {/* Row 2: Weather / Time Node + Core Values */}
            <div className="col-span-full md:col-span-6">
              <WeatherChiclet />
            </div>
            <div className="col-span-full md:col-span-6">
              <PhilosophyChiclet />
            </div>

            {/* Row 3: Project Tiles */}
            <div id="projects" className="col-span-full grid grid-cols-12 gap-2 sm:gap-3">
              <ProjectChicletTile
                project={dbmsProject}
                onOpenModal={(p) => setActiveModalProject(p)}
                className="col-span-full sm:col-span-6 md:col-span-6"
              />
              <ProjectChicletTile
                project={roverProject}
                onOpenModal={(p) => setActiveModalProject(p)}
                className="col-span-full sm:col-span-6 md:col-span-6"
              />
            </div>

            {/* Row 5: Chunky Vibrant Social Chiclets (Instagram, LinkedIn, Email) */}
            <SocialChicletsRow />

            {/* Row 6: Skills Arsenal + Interactive CLI Terminal */}
            <div id="stack" className="col-span-full grid grid-cols-12 gap-2 sm:gap-3">
              <TechStackChiclet />
              <div id="terminal" className="col-span-full md:col-span-4 flex flex-col">
                <TerminalChiclet />
              </div>
            </div>

            {/* Row 7: Academic Journey & Milestones */}
            <div id="experience" className="col-span-full">
              <ExperienceChiclet />
            </div>

            {/* Row 8: Core Philosophy Quote */}
            <QuoteChiclet />

            {/* Row 9: Connect & Transmission Box */}
            <div id="contact" className="col-span-full">
              <NewsletterChiclet />
            </div>
          </main>
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      {/* Priority Booking Modal */}
      <HireMeModal />

      {/* Footer */}
      <Footer />
    </div>
  );
}
