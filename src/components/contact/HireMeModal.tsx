"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, ShieldCheck, Calendar } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { ConfettiButton } from "@/components/ui/ConfettiButton";

export function HireMeModal() {
  const { isHireModalOpen, setIsHireModalOpen, playUiSound } = useTheme();
  const [selectedService, setSelectedService] = useState("Full-Stack Web App");
  const [budget, setBudget] = useState("$10k - $25k");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isHireModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playUiSound("sparkle");
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setIsHireModalOpen(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playUiSound("pop");
            resetForm();
          }}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-lg rounded-2xl bg-[#0d1424] border border-slate-700 p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={() => {
              playUiSound("pop");
              resetForm();
            }}
            aria-label="Close modal"
            className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>

          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Inquiry Logged
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <strong className="text-white">{name || "Friend"}</strong>! I have logged your project inquiry and will personally respond to <strong className="text-white">{email}</strong> within 24 hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
                >
                  Return to Portfolio
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>Project Planner &amp; Inquiry</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Schedule a Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Share your product vision, timeline, and requirements.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Project Scope Selector */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Full-Stack Web App",
                      "UI/UX Architecture",
                      "Design System",
                      "Consultation",
                      "Senior Full-Time",
                      "Other",
                    ].map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => {
                          setSelectedService(srv);
                          playUiSound("click");
                        }}
                        className={`p-2 rounded-xl text-xs font-medium transition-all text-center border cursor-pointer ${
                          selectedService === srv
                            ? "bg-indigo-600/20 border-indigo-500 text-white font-semibold"
                            : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Estimated Budget Scope
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["$5k — $10k", "$10k — $25k", "$25k+ / Retainer"].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => {
                          setBudget(b);
                          playUiSound("click");
                        }}
                        className={`py-1.5 px-2 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                          budget === b
                            ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                            : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Project Objectives
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your objectives, target timeline, or tech stack..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <ConfettiButton
                  type="submit"
                  variant="primary"
                  className="w-full py-3 text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:brightness-110 shadow-lg shadow-indigo-500/20 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Project Inquiry</span>
                </ConfettiButton>

                <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-400 pt-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Confidentiality guaranteed • 24h response SLA</span>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
