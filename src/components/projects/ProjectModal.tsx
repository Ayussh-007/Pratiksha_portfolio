"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Layers,
  Calendar,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/types";
import { useTheme } from "@/context/ThemeContext";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { accentConfig, playUiSound } = useTheme();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playUiSound("pop");
            onClose();
          }}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-[#0b0f1d] border border-white/15 p-4 sm:p-6 md:p-8 shadow-2xl z-10 custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              playUiSound("pop");
              onClose();
            }}
            aria-label="Close project modal"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all z-20 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header Pill */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold font-mono"
              style={{
                backgroundColor: `${accentConfig.primaryColor}25`,
                border: `1px solid ${accentConfig.primaryColor}60`,
                color: accentConfig.primaryColor,
              }}
            >
              {project.categoryLabel}
            </span>
            {project.year && (
              <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                <Calendar className="h-3.5 w-3.5" />
                <span>{project.year}</span>
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="mt-1.5 text-base sm:text-lg text-slate-300 font-medium">
            {project.tagline}
          </p>

          {/* Thumbnail Preview Banner */}
          <div className="relative mt-4 sm:mt-6 h-48 sm:h-64 md:h-80 w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 896px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1d] via-transparent to-transparent opacity-80" />
          </div>

          {/* Key Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3"
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl shrink-0"
                    style={{
                      backgroundColor: `${accentConfig.primaryColor}20`,
                      color: accentConfig.primaryColor,
                    }}
                  >
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white font-mono">
                      {metric.value}
                    </div>
                    <div className="text-xs text-slate-400">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Long Description */}
          <div className="space-y-4 my-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <Sparkles className="h-4 w-4" style={{ color: accentConfig.primaryColor }} />
              <span>Architectural Overview</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="my-6 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
              Key Capabilities & Innovations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="my-6 space-y-2.5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <Layers className="h-4 w-4 text-slate-400" />
              <span>Technologies Deployed</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playUiSound("sparkle")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white shadow-lg cursor-pointer transition-transform active:scale-95"
                  style={{
                    background: `linear-gradient(135deg, ${accentConfig.primaryColor}, ${accentConfig.secondaryColor})`,
                  }}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Launch Live Preview</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playUiSound("click")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>View Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                playUiSound("pop");
                onClose();
              }}
              className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Back to Bento Grid
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
