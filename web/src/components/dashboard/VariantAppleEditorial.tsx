"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Search } from "lucide-react";
import { Quicksand } from "next/font/google";
import { mockHousingUnits, mockNavigator, mockTiles, mockUser } from "@/lib/mock-data";
import { navIcons, PhoneShell, tileIcons } from "./shared";

// Quicksand has no true italic cut in Google Fonts — "italic" below is a
// browser-synthesized (oblique) slant applied via the `italic` utility class.
const display = Quicksand({
  subsets: ["latin"],
  weight: ["600", "700"],
});

// Reference palette, literally: pale blue-gray canvas, cream/white cards,
// one bold accent (yellow), black for text/controls. No blue.
const YELLOW = "#f0e64c";

function ProgressRing({ value, size = 46 }: { value: number; size?: number }) {
  const stroke = 5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-black/[0.1]"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={YELLOW}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - value) }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[11px] font-semibold text-ink">
          {mockNavigator.stepIndex}/{mockNavigator.stepCount}
        </span>
      </div>
    </div>
  );
}

export function DashboardVariantAppleEditorial() {
  const [screen, setScreen] = useState<"dashboard" | "repository">("dashboard");
  const progress = mockNavigator.stepIndex / mockNavigator.stepCount;

  return (
    <PhoneShell>
      <div
        onClick={() => setScreen((s) => (s === "dashboard" ? "repository" : "dashboard"))}
        className="relative flex-1 cursor-pointer overflow-y-auto bg-[#dde4e6]"
      >
        {screen === "dashboard" ? (
          <div className="relative px-5 pb-32 pt-8">
            <header className="flex items-center justify-end gap-2">
              <button
                type="button"
                aria-label="Search"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
              >
                <Search className="h-4 w-4 text-ink" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Messages"
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-ink"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  />
                </svg>
                {mockUser.unreadMessages > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-black px-1 text-[9px] font-semibold text-white ring-2 ring-[#dde4e6]">
                    {mockUser.unreadMessages}
                  </span>
                )}
              </button>
            </header>

            <p className="mt-7 text-[11px] font-medium uppercase tracking-[0.08em] text-ink-soft">
              Good afternoon
            </p>
            <h1
              className={`${display.className} text-[44px] leading-[1] tracking-tight text-ink`}
              style={{ fontStyle: "italic" }}
            >
              {mockUser.name}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-7 flex items-center gap-3 rounded-full bg-white py-2.5 pl-2.5 pr-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
            >
              <ProgressRing value={progress} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[15px] font-semibold text-ink">
                  {mockNavigator.title}
                </p>
                <p className="truncate text-[11px] text-ink-soft">
                  Step {mockNavigator.stepIndex} of {mockNavigator.stepCount} · {mockNavigator.stage}
                </p>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
                <ChevronRight className="h-4 w-4" strokeWidth={2} />
              </div>
            </motion.div>

            <p className="mb-2 mt-8 px-1 text-[11px] font-medium uppercase tracking-[0.08em] text-ink-soft">
              Quick access
            </p>
            <div className="flex flex-col gap-2.5">
              {mockTiles.map((tile, i) => {
                const Icon = tileIcons[tile.key];
                const isFeatured = i === 0;
                return (
                  <motion.div
                    key={tile.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                    className="flex items-center gap-3 rounded-full py-2.5 pl-2.5 pr-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                    style={{ backgroundColor: isFeatured ? YELLOW : "#ffffff" }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/70">
                      <Icon className="h-5 w-5 text-ink" strokeWidth={1.5} />
                    </div>
                    <p className="flex-1 truncate text-[15px] font-semibold text-ink">
                      {tile.label}
                    </p>
                    {tile.badge && (
                      <span className="flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold text-white">
                        {tile.badge}
                      </span>
                    )}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="relative px-5 pb-32 pt-8">
            <p className="text-[12px] text-ink-soft">Tap anywhere to go back</p>
            <h1
              className={`${display.className} mt-1 text-[36px] leading-[1] tracking-tight text-ink`}
              style={{ fontStyle: "italic" }}
            >
              Housing Repository
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 grid grid-cols-2 gap-3"
            >
              {mockHousingUnits.map((unit, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-md"
                >
                  <img
                    src={unit.image}
                    alt={unit.city}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                  <span
                    className="absolute left-2.5 top-2.5 rounded-full px-2 py-1 text-[10px] font-semibold text-ink"
                    style={{ backgroundColor: YELLOW }}
                  >
                    {unit.units} units
                  </span>
                  <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-2">
                    <p className="truncate text-[12px] font-semibold text-white">
                      {unit.city}
                    </p>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        )}

        <nav className="absolute inset-x-4 bottom-4 flex items-center justify-around rounded-full bg-white py-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.1)]">
          {navIcons.map((Icon, i) => (
            <div
              key={i}
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                i === 0 ? "bg-black text-white" : "text-ink-soft/50"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </div>
          ))}
        </nav>
      </div>
    </PhoneShell>
  );
}
