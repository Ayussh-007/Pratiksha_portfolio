"use client";

import React, { useState, useEffect } from "react";
import { CloudSun, MapPin, Compass } from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function WeatherChiclet() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        new Intl.DateTimeFormat("en-US", {
          timeZone: PERSONAL_INFO.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(now)
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ChicletCard
      gradientClass="bg-gradient-to-b from-sky-500 via-blue-700 to-indigo-900 text-white"
      className="col-span-full sm:col-span-6 md:col-span-4 min-h-[220px] sm:min-h-[280px]"
    >
      {/* Top Graphic */}
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-sky-200 uppercase tracking-wider">
            <MapPin className="h-3.5 w-3.5 text-yellow-300" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
          <p className="text-[11px] font-mono text-sky-200/80">
            IST ({PERSONAL_INFO.utcOffset}) • {timeStr || "10:30 PM"}
          </p>
        </div>

        {/* 3D Weather Icon visual */}
        <div className="relative -mt-2 -mr-2">
          <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-40 rounded-full animate-pulse" />
          <CloudSun className="relative h-14 w-14 text-yellow-300 drop-shadow-xl" />
        </div>
      </div>

      {/* Bottom Display */}
      <div className="mt-auto pt-6">
        <div className="text-xs font-mono uppercase tracking-widest text-sky-200 font-bold mb-1">
          Atmosphere Node
        </div>
        <h2 className="font-display font-black tracking-wide uppercase text-2xl sm:text-3xl md:text-4xl text-white">
          28°C Clear
        </h2>
        <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-sky-200/90 pt-2 border-t border-white/20">
          <span className="flex items-center gap-1">
            <Compass className="h-3 w-3 text-yellow-300" />
            <span>19.0760° N, 72.8777° E</span>
          </span>
          <span className="text-emerald-300 font-semibold">● 99.9% Uptime</span>
        </div>
      </div>
    </ChicletCard>
  );
}
