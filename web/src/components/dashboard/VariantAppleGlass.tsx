"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { mockHousingUnits, mockNavigator, mockTiles, mockUser } from "@/lib/mock-data";
import { iconGradientId, navIcons, PhoneShell, StatusBar, tileIcons } from "./shared";

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
        <span className="text-[13px] font-medium text-ink">
          {mockNavigator.stepIndex}/{mockNavigator.stepCount}
        </span>
      </div>
    </div>
  );
}

type Screen = "welcome" | "dashboard" | "repository";
const nextScreen: Record<Screen, Screen> = {
  welcome: "dashboard",
  dashboard: "repository",
  repository: "welcome",
};

export function DashboardVariantAppleGlass() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const progress = mockNavigator.stepIndex / mockNavigator.stepCount;
  const isWelcome = screen === "welcome";

  return (
    <PhoneShell>
      <div
        onClick={() => setScreen((s) => nextScreen[s])}
        className={`relative flex flex-1 cursor-pointer flex-col overflow-hidden ${
          isWelcome
            ? "bg-gradient-to-br from-brand-blue via-brand-blue to-brand-teal-dark"
            : "bg-neutral"
        }`}
      >
        {!isWelcome && (
          <>
            {/* soft color fields — live on the outer canvas (behind status bar + content both) so there's no seam between the two */}
            <div className="pointer-events-none absolute -left-16 -top-20 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-brand-teal/25 blur-3xl" />
          </>
        )}

        <StatusBar light={isWelcome} />

        <div className="relative flex-1 overflow-y-auto overflow-x-hidden">
          {isWelcome ? (
            <div className="absolute inset-0 flex flex-col px-6 pb-24 pt-6 text-center">
              <div className="pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full bg-brand-teal/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 bottom-40 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

              <p className="relative text-[13px] font-semibold uppercase tracking-[0.16em] text-white/70">
                My Housing Platform
              </p>

              <div className="relative mt-12 flex flex-1 flex-col items-center">
                <img
                  src="/images/mockup-assets/avatar-amara.png"
                  alt={mockUser.name}
                  className="h-28 w-28 rounded-full object-cover ring-4 ring-white/30"
                />
                <p className="mt-8 text-[14px] text-white/70">Welcome back</p>
                <p className="mt-1 text-[34px] font-extralight text-white">{mockUser.name}</p>

                <button
                  type="button"
                  className="mt-10 w-full max-w-[220px] rounded-full bg-white/90 py-3.5 text-[15px] font-semibold text-brand-blue-dark shadow-[0_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-xl"
                >
                  Click to log in
                </button>
              </div>

              <div className="relative rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-[12px] text-white/80 backdrop-blur-xl">
                You have {mockUser.unreadMessages} messages waiting.{" "}
                <span className="font-semibold text-white">Log in to get started.</span>
              </div>
            </div>
          ) : (
            <>
              {screen === "dashboard" ? (
                <div className="relative px-5 pb-32 pt-6">
                  <header className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wide text-ink-soft/70">
                        Good afternoon
                      </p>
                      <h1 className="text-[36px] font-extralight leading-[1.05] tracking-tight text-ink">
                        {mockUser.name}
                      </h1>
                    </div>
                    <button
                      type="button"
                      aria-label="Messages"
                      className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-white/80 to-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-xl"
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
                    className="mt-7 flex items-center gap-4 rounded-[28px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
                  >
                    <ProgressRing value={progress} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[16px] font-semibold tracking-tight text-ink">
                        {mockNavigator.title}
                      </p>
                      <p className="truncate text-[12px] text-ink-soft">
                        Current stage · {mockNavigator.stage}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-ink-soft/50" />
                  </motion.div>

                  <p className="mb-2 mt-7 px-1 text-[11px] font-medium uppercase tracking-wide text-ink-soft/70">
                    Quick access
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {mockTiles.map((tile, i) => {
                      const Icon = tileIcons[tile.key];
                      return (
                        <motion.div
                          key={tile.key}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                          className="relative flex flex-col gap-4 rounded-[24px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
                        >
                          {tile.badge && (
                            <span className="absolute right-3 top-3 flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-brand-blue px-1.5 text-[11px] font-semibold text-white">
                              {tile.badge}
                            </span>
                          )}
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-teal/15">
                            <Icon
                              className="h-5 w-5"
                              strokeWidth={1.25}
                              color={`url(#${iconGradientId})`}
                            />
                          </div>
                          <div className="flex items-end justify-between gap-2">
                            <p className="text-[14px] font-medium leading-tight text-ink">
                              {tile.label}
                            </p>
                            <ChevronRight className="h-4 w-4 shrink-0 text-ink-soft/40" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="relative px-5 pb-32 pt-6">
                  <p className="text-[12px] text-ink-soft">Tap anywhere to continue</p>
                  <h1 className="mt-1 text-[28px] font-extralight tracking-tight text-ink">
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
                        className="overflow-hidden rounded-[20px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
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
            </>
          )}
        </div>

        {!isWelcome && (
          <nav className="absolute inset-x-4 bottom-4 flex items-center justify-around rounded-full border border-white/40 bg-gradient-to-b from-white/45 to-white/20 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
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
        )}
      </div>
    </PhoneShell>
  );
}
