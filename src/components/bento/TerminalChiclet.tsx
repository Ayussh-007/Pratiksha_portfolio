"use client";

import React, { useState, useRef, useEffect } from "react";
import { CornerDownLeft, Terminal, Copy, Check } from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { useTheme } from "@/context/ThemeContext";
import { SKILLS, TERMINAL_HELP, PERSONAL_INFO } from "@/data/portfolio-data";

const QUICK_COMMANDS = [
  "about",
  "rover",
  "skills",
  "club",
  "strengths",
  "instagram",
  "email",
  "clear",
];

export function TerminalChiclet() {
  const { playUiSound } = useTheme();
  const [input, setInput] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [logs, setLogs] = useState<{ id: string; command: string; output: React.ReactNode }[]>([
    {
      id: "init-1",
      command: "init",
      output: (
        <div className="space-y-1">
          <p className="text-emerald-400 font-mono text-xs font-bold">
            ● Pratiksha Naik Terminal [B.Tech AI &amp; DS @ SAKEC] initialized.
          </p>
          <p className="text-slate-400 font-mono text-[11px]">
            Click any command pill below or type in the input:
          </p>
        </div>
      ),
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const copyEmailDirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    playUiSound("sparkle");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const executeCommand = (rawCmd: string) => {
    const t = rawCmd.trim().toLowerCase();
    if (!t) return;
    playUiSound("click");

    let out: React.ReactNode = null;
    switch (t) {
      case "help":
      case "?":
        out = (
          <div className="bg-black/50 p-2.5 rounded-lg border border-white/10 text-cyan-300 font-mono text-[11px] whitespace-pre-wrap">
            {TERMINAL_HELP}
          </div>
        );
        break;

      case "about":
      case "bio":
        out = (
          <div className="text-[11px] text-slate-200 font-mono space-y-1 leading-relaxed bg-black/50 p-3 rounded-xl border border-white/10">
            <p><strong className="text-pink-300">Name:</strong> {PERSONAL_INFO.name} ({PERSONAL_INFO.age} Yrs)</p>
            <p><strong className="text-cyan-300">Degree:</strong> {PERSONAL_INFO.degree}</p>
            <p><strong className="text-purple-300">College:</strong> {PERSONAL_INFO.college}</p>
            <p><strong className="text-yellow-300">Club:</strong> {PERSONAL_INFO.club}</p>
            <p className="text-slate-300 pt-1 leading-relaxed">{PERSONAL_INFO.bio}</p>
          </div>
        );
        break;

      case "rover":
      case "project":
      case "disaster_rover":
        out = (
          <div className="text-[11px] text-amber-300 font-mono space-y-1.5 bg-black/50 p-3 rounded-xl border border-amber-500/20">
            <p className="font-bold text-amber-200 text-xs">
              ★ AI Disaster Assessment Rover for Emergency Response
            </p>
            <p className="text-slate-300 leading-relaxed">
              Wirelessly controlled, sensor-equipped robotic vehicle designed to navigate hazardous disaster environments (collapsed structures, chemical leaks, fire incidents, earthquake debris).
            </p>
            <p className="text-cyan-300 pt-1">
              <strong>Primary Mission:</strong> Autonomous &amp; remote vitality and structural telemetry before human rescue entry.
            </p>
            <p className="text-yellow-300 pt-0.5 font-bold">
              Git Repo: https://github.com/Ayussh-007/Disaster_rover
            </p>
          </div>
        );
        break;

      case "skills":
      case "stack":
        out = (
          <div className="bg-black/50 p-3 rounded-xl border border-white/10 space-y-2">
            <div className="text-[11px] font-bold text-cyan-300 font-mono">
              Core Technical &amp; Design Skills:
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono text-slate-300">
              {SKILLS.map((s) => (
                <div key={s.name} className="flex items-center gap-1.5">
                  <span className="text-purple-400 font-bold">▹</span>
                  <span className="text-slate-200">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "club":
      case "cogniscience":
        out = (
          <div className="text-[11px] text-pink-300 font-mono space-y-1.5 bg-black/50 p-3 rounded-xl border border-pink-500/20">
            <p className="font-bold text-pink-200 text-xs">★ CogniScience Club — SAKEC</p>
            <p className="text-slate-300 leading-relaxed">
              Active member participating in Artificial Intelligence, machine learning discussions, workshops, technical presentations, and collaborative student initiatives at Shah &amp; Anchor Kutchhi Engineering College.
            </p>
          </div>
        );
        break;

      case "strengths":
      case "values":
        out = (
          <div className="text-[11px] font-mono text-cyan-200 space-y-1 bg-black/50 p-3 rounded-xl border border-cyan-500/20">
            <p className="font-bold text-cyan-300 text-xs">Core Strengths &amp; Professional Values:</p>
            <p className="text-slate-200">✓ Communication &amp; Public Speaking</p>
            <p className="text-slate-200">✓ Teamwork &amp; Active Collaboration</p>
            <p className="text-slate-200">✓ Leadership &amp; Responsibility</p>
            <p className="text-slate-200">✓ Problem-Solving &amp; Continuous Learning</p>
          </div>
        );
        break;

      case "instagram":
      case "ig":
        out = (
          <div className="text-pink-300 font-mono text-xs bg-black/50 p-2.5 rounded-xl border border-pink-500/20 flex items-center justify-between">
            <span>Instagram: <strong>{PERSONAL_INFO.instagramHandle}</strong></span>
            <span className="text-[10px] text-slate-400 font-normal">(instagram.com/pratikshaa_naik)</span>
          </div>
        );
        break;

      case "email":
      case "contact":
        out = (
          <div className="text-emerald-300 font-mono text-xs bg-black/50 p-2.5 rounded-xl border border-emerald-500/20 flex items-center justify-between gap-2">
            <div>
              <span className="text-[10px] text-slate-400 block font-normal">Official SAKEC Email:</span>
              <span className="font-bold text-emerald-200 text-xs">{PERSONAL_INFO.email}</span>
            </div>
            <button
              type="button"
              onClick={copyEmailDirect}
              className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold cursor-pointer border border-emerald-500/30"
            >
              {copiedEmail ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              <span>{copiedEmail ? "Copied!" : "Copy"}</span>
            </button>
          </div>
        );
        break;

      case "clear":
      case "cls":
        setLogs([]);
        setInput("");
        return;

      default:
        out = (
          <p className="text-rose-400 font-mono text-xs">
            Unknown command: &quot;{t}&quot;. Click a button below or type &apos;help&apos;.
          </p>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, command: rawCmd, output: out },
    ]);
    setInput("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <ChicletCard
      gradientClass="bg-slate-950 text-white border border-slate-800"
      className="w-full min-h-[340px] sm:min-h-[420px] p-4 sm:p-5 md:p-6 flex flex-col justify-between"
    >
      <div>
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-mono text-slate-400 ml-2 font-bold">pratiksha@sakec:~</span>
          </div>
          <Terminal className="h-4 w-4 text-slate-500" />
        </div>

        {/* Quick Clickable Buttons (All fully clickable and responsive) */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {QUICK_COMMANDS.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                executeCommand(cmd);
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-400/50 text-xs font-mono text-cyan-300 hover:text-white transition-all cursor-pointer select-none active:scale-95 shadow-xs"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Output Console Log Area */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="max-h-[180px] sm:max-h-[220px] overflow-y-auto space-y-2.5 font-mono text-xs pr-1"
        >
          {logs.map((l) => (
            <div key={l.id} className="space-y-1">
              <div className="text-slate-400 flex items-center gap-1.5 text-xs">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-purple-400 font-semibold">~</span>
                <span className="text-white font-mono">{l.command}</span>
              </div>
              <div className="pl-3">{l.output}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>
      </div>

      {/* Interactive Command Input Form */}
      <form
        onSubmit={handleFormSubmit}
        className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2 font-mono text-xs"
      >
        <span className="text-emerald-400 font-bold">➜</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'about', 'rover', 'skills', 'email'..."
          className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono text-xs py-1"
        />
        <button
          type="submit"
          className="p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer shadow-sm select-none"
          title="Run command"
        >
          <CornerDownLeft className="h-3.5 w-3.5" />
        </button>
      </form>
    </ChicletCard>
  );
}
