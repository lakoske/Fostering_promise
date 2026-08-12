"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { mockHousingUnits, mockNavigator, mockTiles, mockUser } from "@/lib/mock-data";
import { navIcons, PhoneShell, tileIcons } from "./shared";

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
          className="text-black/[0.07]"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          className="text-brand-blue"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - value) }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[13px] font-semibold text-ink">
          {mockNavigator.stepIndex}/{mockNavigator.stepCount}
        </span>
      </div>
    </div>
  );
}

export function DashboardVariantAppleFlat() {
  const [screen, setScreen] = useState<"dashboard" | "repository">("dashboard");
  const progress = mockNavigator.stepIndex / mockNavigator.stepCount;

  return (
    <PhoneShell>
      <div
        onClick={() => setScreen((s) => (s === "dashboard" ? "repository" : "dashboard"))}
        className="relative flex-1 cursor-pointer overflow-y-auto bg-neutral"
      >
        {screen === "dashboard" ? (
          <div className="px-5 pb-32 pt-8">
            <header className="flex items-start justify-between">
              <div>
                <p className="text-[13px] text-ink-soft">Good afternoon</p>
                <h1 className="text-[22px] font-semibold tracking-tight text-ink">
                  {mockUser.name}
                </h1>
              </div>
              <button
                type="button"
                aria-label="Messages"
                className="relative flex h-11 w-11 items-center justify-center rounded-full bg-black/[0.06]"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="text-ink"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  />
                </svg>
                {mockUser.unreadMessages > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand-blue px-1 text-[10px] font-semibold text-white ring-2 ring-neutral">
                    {mockUser.unreadMessages}
                  </span>
                )}
              </button>
            </header>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 flex items-center gap-4 rounded-[28px] border border-black/[0.05] bg-surface p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <ProgressRing value={progress} />
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold text-ink">
                  {mockNavigator.title}
                </p>
                <p className="truncate text-[13px] text-ink-soft">
                  Current stage · {mockNavigator.stage}
                </p>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-ink-soft/50" />
            </motion.div>

            <p className="mb-2 mt-7 px-1 text-[12px] font-medium uppercase tracking-wide text-ink-soft/70">
              Quick access
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="overflow-hidden rounded-[28px] border border-black/[0.05] bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              {mockTiles.map((tile, i) => {
                const Icon = tileIcons[tile.key];
                return (
                  <div
                    key={tile.key}
                    className={`flex w-full items-center gap-3 px-4 py-3.5 text-left ${
                      i !== mockTiles.length - 1 ? "border-b border-black/[0.05]" : ""
                    }`}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-brand-blue/10 text-brand-blue">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <p className="flex-1 text-[15px] font-medium text-ink">
                      {tile.label}
                    </p>
                    {tile.badge && (
                      <span className="flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-brand-blue px-1.5 text-[11px] font-semibold text-white">
                        {tile.badge}
                      </span>
                    )}
                    <ChevronRight className="h-3.5 w-3.5 text-ink-soft/40" />
                  </div>
                );
              })}
            </motion.div>
          </div>
        ) : (
          <div className="px-5 pb-32 pt-8">
            <p className="text-[13px] text-ink-soft">Tap anywhere to go back</p>
            <h1 className="mt-1 text-[22px] font-semibold tracking-tight text-ink">
              Housing Repository
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-5 grid grid-cols-2 gap-3"
            >
              {mockHousingUnits.map((unit, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-[20px] border border-black/[0.05] bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                >
                  <img
                    src={unit.image}
                    alt={unit.city}
                    className="h-24 w-full object-cover"
                  />
                  <div className="p-2.5">
                    <p className="text-[13px] font-semibold text-ink">
                      {unit.units} units
                    </p>
                    <p className="truncate text-[11px] text-ink-soft">{unit.city}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        )}

        <nav className="absolute inset-x-4 bottom-4 flex items-center justify-around rounded-full border border-black/[0.06] bg-white/75 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          {navIcons.map((Icon, i) => (
            <div
              key={i}
              className={`flex h-9 w-9 items-center justify-center rounded-full ${
                i === 0 ? "bg-brand-blue/10 text-brand-blue" : "text-ink-soft/50"
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
