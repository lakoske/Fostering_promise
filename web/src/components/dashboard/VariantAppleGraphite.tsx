"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Manrope } from "next/font/google";
import { mockHousingUnits, mockNavigator, mockTiles, mockUser } from "@/lib/mock-data";
import { navIcons, PhoneShell, tileIcons } from "./shared";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

function ProgressRing({ value, size = 60 }: { value: number; size?: number }) {
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
          className="text-white/10"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          className="text-sky"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - value) }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[13px] font-medium text-white/90">
          {mockNavigator.stepIndex}/{mockNavigator.stepCount}
        </span>
      </div>
    </div>
  );
}

export function DashboardVariantAppleGraphite() {
  const [screen, setScreen] = useState<"dashboard" | "repository">("dashboard");
  const progress = mockNavigator.stepIndex / mockNavigator.stepCount;

  return (
    <PhoneShell>
      <div
        onClick={() => setScreen((s) => (s === "dashboard" ? "repository" : "dashboard"))}
        className="relative flex-1 cursor-pointer overflow-y-auto bg-gradient-to-b from-graphite to-graphite-deep"
      >
        {/* soft color fields behind the graphite glass panels */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 overflow-hidden">
          <div className="absolute -left-16 -top-20 h-72 w-72 rounded-full bg-sky/20 blur-3xl" />
          <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-sky/10 blur-3xl" />
        </div>

        {screen === "dashboard" ? (
          <div className="relative px-5 pb-32 pt-8">
            <header className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-white/40">
                  Good afternoon
                </p>
                <h1
                  className={`${manrope.className} text-[26px] font-light leading-[1.1] tracking-tight text-white/95`}
                >
                  {mockUser.name}
                </h1>
              </div>
              <button
                type="button"
                aria-label="Messages"
                className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-sky/90 to-sky-dark/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  />
                </svg>
                {mockUser.unreadMessages > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-graphite px-1 text-[10px] font-semibold text-sky ring-2 ring-graphite">
                    {mockUser.unreadMessages}
                  </span>
                )}
              </button>
            </header>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-7 flex items-center gap-4 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.04] to-white/[0.02] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            >
              <ProgressRing value={progress} />
              <div className="min-w-0 flex-1">
                <p className="text-[16px] font-semibold tracking-tight text-white/95">
                  {mockNavigator.title}
                </p>
                <p className="truncate text-[12px] text-white/45">
                  Current stage · {mockNavigator.stage}
                </p>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-white/30" />
            </motion.div>

            <p className="mb-2 mt-7 px-1 text-[11px] font-medium uppercase tracking-wide text-white/35">
              Quick access
            </p>
            <div className="flex flex-col gap-3">
              {mockTiles.map((tile, i) => {
                const Icon = tileIcons[tile.key];
                return (
                  <motion.div
                    key={tile.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                    className="flex w-full items-center gap-3 rounded-[22px] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.04] to-white/[0.02] px-4 py-3.5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_24px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-gradient-to-br from-sky/25 to-sky/5 text-sky">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <p className="flex-1 text-[15px] font-medium text-white/90">
                      {tile.label}
                    </p>
                    {tile.badge && (
                      <span className="flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-sky px-1.5 text-[11px] font-semibold text-white">
                        {tile.badge}
                      </span>
                    )}
                    <ChevronRight className="h-3.5 w-3.5 text-white/25" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="relative px-5 pb-32 pt-8">
            <p className="text-[12px] text-white/40">Tap anywhere to go back</p>
            <h1
              className={`${manrope.className} mt-1 text-[24px] font-light tracking-tight text-white/95`}
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
                  className="overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.04] to-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_24px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
                >
                  <img
                    src={unit.image}
                    alt={unit.city}
                    className="h-24 w-full object-cover opacity-90"
                  />
                  <div className="p-2.5">
                    <p className="text-[13px] font-semibold text-white/90">
                      {unit.units} units
                    </p>
                    <p className="truncate text-[11px] text-white/40">{unit.city}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        )}

        <nav className="absolute inset-x-4 bottom-4 flex items-center justify-around rounded-full border border-white/10 bg-gradient-to-b from-graphite-panel/90 via-graphite-panel/85 to-graphite/90 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_30px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
          {navIcons.map((Icon, i) => (
            <div
              key={i}
              className={`flex h-9 w-9 items-center justify-center rounded-full ${
                i === 0 ? "bg-sky/20 text-sky" : "text-white/35"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </div>
          ))}
        </nav>
      </div>
    </PhoneShell>
  );
}
