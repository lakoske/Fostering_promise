"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Search } from "lucide-react";
import { Shantell_Sans } from "next/font/google";
import { mockHousingUnits, mockNavigator, mockTiles, mockUser } from "@/lib/mock-data";
import { iconGradientId, navIcons, PhoneShell, tileIcons } from "./shared";

const display = Shantell_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
});

function ProgressRing({ value, size = 44 }: { value: number; size?: number }) {
  const stroke = 4;
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
          className="text-black/[0.08]"
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
        <span className="text-[11px] font-semibold text-ink">
          {mockNavigator.stepIndex}/{mockNavigator.stepCount}
        </span>
      </div>
    </div>
  );
}

function HatchAccent({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <pattern
          id="editorial-hatch"
          width="7"
          height="7"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" strokeWidth="2.5" />
        </pattern>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#editorial-hatch)" />
    </svg>
  );
}

export function DashboardVariantAppleEditorial() {
  const [screen, setScreen] = useState<"dashboard" | "repository">("dashboard");
  const progress = mockNavigator.stepIndex / mockNavigator.stepCount;

  return (
    <PhoneShell>
      <div
        onClick={() => setScreen((s) => (s === "dashboard" ? "repository" : "dashboard"))}
        className="relative flex-1 cursor-pointer overflow-y-auto bg-[#dde6e8]"
      >
        {screen === "dashboard" ? (
          <div className="relative px-5 pb-32 pt-8">
            <header className="flex items-center justify-between">
              <img
                src="/images/mockup-assets/avatar-amara.png"
                alt={mockUser.name}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-white/80"
              />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Search"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/85 shadow-sm"
                >
                  <Search className="h-4 w-4 text-ink-soft" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  aria-label="Messages"
                  className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/85 shadow-sm"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-ink-soft"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                    />
                  </svg>
                  {mockUser.unreadMessages > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-brand-blue px-1 text-[9px] font-semibold text-white ring-2 ring-[#dde6e8]">
                      {mockUser.unreadMessages}
                    </span>
                  )}
                </button>
              </div>
            </header>

            <h1
              className={`${display.className} mt-6 text-[32px] italic leading-[1.05] text-ink`}
            >
              Hello, {mockUser.name}!
            </h1>

            <div className="relative mt-6">
              <HatchAccent className="pointer-events-none absolute -left-3 -top-4 h-14 w-14 text-brand-teal/30" />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative flex items-center gap-3 rounded-full bg-white/90 py-2 pl-2.5 pr-2 shadow-[0_6px_24px_rgba(0,0,0,0.07)]"
              >
                <ProgressRing value={progress} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14px] font-semibold text-ink">
                    {mockNavigator.title}
                  </p>
                  <p className="truncate text-[11px] text-ink-soft">
                    Step {mockNavigator.stepIndex} of {mockNavigator.stepCount} · {mockNavigator.stage}
                  </p>
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                  <ChevronRight className="h-4 w-4" strokeWidth={2} />
                </div>
              </motion.div>
            </div>

            <p className="mb-2 mt-7 px-1 text-[11px] font-medium uppercase tracking-wide text-ink-soft/70">
              Quick access
            </p>
            <div className="flex flex-col gap-2.5">
              {mockTiles.map((tile, i) => {
                const Icon = tileIcons[tile.key];
                return (
                  <motion.div
                    key={tile.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                    className="flex items-center gap-3 rounded-full bg-white/90 py-2 pl-2.5 pr-2 shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-teal/15">
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.25}
                        color={`url(#${iconGradientId})`}
                      />
                    </div>
                    <p className="flex-1 truncate text-[14px] font-medium text-ink">
                      {tile.label}
                    </p>
                    {tile.badge && (
                      <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand-blue px-1 text-[10px] font-semibold text-white">
                        {tile.badge}
                      </span>
                    )}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white">
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
            <h1 className={`${display.className} mt-1 text-[28px] italic text-ink`}>
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
                  className="relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-md"
                >
                  <img
                    src={unit.image}
                    alt={unit.city}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-ink">
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

        <nav className="absolute inset-x-4 bottom-4 flex items-center justify-around rounded-full bg-white/95 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl">
          {navIcons.map((Icon, i) => (
            <div
              key={i}
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                i === 0 ? "bg-brand-blue text-white" : "text-ink-soft/45"
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
