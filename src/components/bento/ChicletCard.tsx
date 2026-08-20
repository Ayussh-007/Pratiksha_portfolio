"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChicletCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  gradientClass?: string;
  ribbonText?: string;
  ribbonColor?: string;
}

export function ChicletCard({
  children,
  className = "",
  gradientClass = "bg-slate-800",
  ribbonText,
  ribbonColor = "bg-amber-300 text-slate-950",
  ...props
}: ChicletCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.006 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "chiclet-tile relative flex flex-col justify-end p-4 sm:p-6 md:p-8",
        gradientClass,
        className
      )}
      {...props}
    >
      {/* Ribbon Badge (if specified) */}
      {ribbonText && (
        <div className="absolute top-0 right-0 overflow-hidden w-36 h-36 pointer-events-none z-20">
          <div
            className={cn(
              "absolute top-6 -right-10 w-44 py-1 text-center font-mono font-black text-[10px] uppercase tracking-widest rotate-45 shadow-lg",
              ribbonColor
            )}
          >
            {ribbonText}
          </div>
        </div>
      )}

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
