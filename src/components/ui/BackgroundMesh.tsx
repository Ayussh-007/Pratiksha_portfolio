"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export function BackgroundMesh() {
  const { accentConfig } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#06080e]">
      {/* Background Dot / Circuit Grid */}
      <div className="absolute inset-0 bg-abstract-grid opacity-35" />

      {/* Floating Animated Ambient Glowing Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] left-[10%] h-[550px] w-[550px] rounded-full blur-[140px] opacity-25"
        style={{ backgroundColor: accentConfig.primaryColor }}
      />

      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] -right-[10%] h-[600px] w-[600px] rounded-full blur-[160px] opacity-20"
        style={{ backgroundColor: accentConfig.secondaryColor }}
      />

      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[10%] left-[25%] h-[500px] w-[500px] rounded-full blur-[150px] opacity-15"
        style={{ backgroundColor: accentConfig.primaryColor }}
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#06080e]/60 to-[#06080e]/95 pointer-events-none" />
    </div>
  );
}
