"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

interface ConfettiButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  confettiColors?: string[];
  type?: "button" | "submit" | "reset";
}

export function ConfettiButton({
  children,
  className = "",
  variant = "primary",
  onClick,
  confettiColors,
  type = "button",
  ...props
}: ConfettiButtonProps) {
  const { accentConfig, playUiSound } = useTheme();
  const [isSparkling, setIsSparkling] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      playUiSound("sparkle");
      setIsSparkling(true);

      if (typeof window !== "undefined") {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
          particleCount: 40,
          spread: 55,
          origin: { x: Math.max(0.1, Math.min(0.9, x)), y: Math.max(0.1, Math.min(0.9, y)) },
          colors: confettiColors || [
            accentConfig.primaryColor,
            accentConfig.secondaryColor,
            "#ffffff",
            "#ec4899",
          ],
          ticks: 150,
          gravity: 1.2,
          scalar: 0.85,
        });
      }
      setTimeout(() => setIsSparkling(false), 500);
    } catch {
      // safe fallback
    }

    if (onClick) {
      onClick(e);
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:brightness-110";
      case "secondary":
        return "bg-white/10 hover:bg-white/15 text-white font-medium border border-white/10 hover:border-white/20";
      case "outline":
        return "border border-white/20 hover:border-white/40 text-slate-200 hover:text-white bg-transparent hover:bg-white/5";
      case "ghost":
        return "text-slate-300 hover:text-white hover:bg-white/5";
    }
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm transition-all duration-200 cursor-pointer overflow-hidden select-none",
        getVariantStyles(),
        className
      )}
      {...props}
    >
      {isSparkling && (
        <span className="absolute inset-0 bg-white/20 pointer-events-none animate-ping" />
      )}
      {children}
    </motion.button>
  );
}
