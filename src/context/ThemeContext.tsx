"use client";

import React, { createContext, useContext, useState } from "react";
import { ThemeAccentKey, ThemeAccentConfig } from "@/types";
import { ACCENT_THEMES } from "@/data/portfolio-data";

interface ThemeContextType {
  currentAccent: ThemeAccentKey;
  accentConfig: ThemeAccentConfig;
  setAccent: (accent: ThemeAccentKey) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean | ((prev: boolean) => boolean)) => void;
  playUiSound: (type?: "click" | "pop" | "sparkle") => void;
  isHireModalOpen: boolean;
  setIsHireModalOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentAccent, setCurrentAccent] = useState<ThemeAccentKey>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("pratiksha_portfolio_accent") as ThemeAccentKey;
        if (saved && ACCENT_THEMES[saved]) {
          return saved;
        }
      } catch {
        // ignore storage errors
      }
    }
    return "violet";
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState<boolean>(false);

  const setAccent = (accent: ThemeAccentKey) => {
    setCurrentAccent(accent);
    try {
      localStorage.setItem("pratiksha_portfolio_accent", accent);
    } catch {
      // ignore storage errors
    }
  };

  const playUiSound = (type: "click" | "pop" | "sparkle" = "click") => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      const now = audioCtx.currentTime;
      if (type === "pop") {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === "sparkle") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.15); // D6
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(320, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch {
      // AudioContext might be blocked until user interacts
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentAccent,
        accentConfig: ACCENT_THEMES[currentAccent] || ACCENT_THEMES.violet,
        setAccent,
        soundEnabled,
        setSoundEnabled,
        playUiSound,
        isHireModalOpen,
        setIsHireModalOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
