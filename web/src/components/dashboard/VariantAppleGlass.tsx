"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import {
  mockCalendar,
  mockHousingUnits,
  mockInfoTopics,
  mockNavigator,
  mockNavigatorTask,
  mockResourceServices,
  mockTiles,
  mockUser,
  mockWalletDescription,
  mockWalletDocuments,
} from "@/lib/mock-data";
import type { Screen } from "./screen-nav";
import { tileHrefToScreen } from "./screen-nav";
import {
  iconGradientId,
  infoTopicIcons,
  navIcons,
  PhoneShell,
  resourceServiceIcons,
  StatusBar,
  tileIcons,
  walletDocumentIcons,
} from "./shared";

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

function BackRow({ onBack }: { onBack: () => void }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="flex items-center gap-1 text-[12px] font-medium text-ink-soft transition-transform duration-150 active:scale-95"
    >
      <ChevronLeft className="h-3.5 w-3.5" strokeWidth={2} />
      Back
    </button>
  );
}

export function DashboardVariantAppleGlass() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const progress = mockNavigator.stepIndex / mockNavigator.stepCount;
  const isWelcome = screen === "welcome";

  return (
    <PhoneShell>
      <div
        className={`relative flex flex-1 flex-col overflow-hidden ${
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
                  onClick={() => setScreen("dashboard")}
                  className="mt-10 w-full max-w-[220px] rounded-full bg-white/90 py-3.5 text-[15px] font-semibold text-brand-blue-dark shadow-[0_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-transform duration-150 active:scale-95"
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
                      className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-white/80 to-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-transform duration-150 active:scale-90"
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
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setScreen("navigator")}
                    className="mt-7 flex cursor-pointer items-center gap-4 rounded-[28px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
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
                          whileTap={{ scale: 0.96 }}
                          transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                          onClick={() => setScreen(tileHrefToScreen[tile.href])}
                          className="relative flex cursor-pointer flex-col gap-4 rounded-[24px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
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
              ) : screen === "navigator" ? (
                <div className="relative px-5 pb-32 pt-6">
                  <BackRow onBack={() => setScreen("dashboard")} />
                  <h1 className="mt-1 text-[28px] font-extralight tracking-tight text-ink">
                    Housing Navigator
                  </h1>

                  <div className="mt-6 flex items-center gap-2">
                    {Array.from({ length: mockNavigator.stepCount }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full ${
                          i === mockNavigator.stepIndex - 1
                            ? "w-6 bg-brand-blue"
                            : "w-1.5 bg-ink-soft/20"
                        }`}
                      />
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 rounded-[28px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
                  >
                    <p className="text-[17px] font-semibold text-ink">
                      {mockNavigatorTask.title}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                      {mockNavigatorTask.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => setScreen("dashboard")}
                      className="mt-5 w-full rounded-full bg-brand-blue py-3 text-[14px] font-semibold text-white transition-transform duration-150 active:scale-95"
                    >
                      {mockNavigatorTask.primaryCta}
                    </button>
                    <button
                      type="button"
                      onClick={() => setScreen("infoPortal")}
                      className="mt-4 w-full text-center text-[13px] font-medium text-brand-blue transition-transform duration-150 active:scale-95"
                    >
                      {mockNavigatorTask.secondaryCta}
                    </button>
                  </motion.div>

                  <div className="mt-6 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setScreen("dashboard")}
                      className="flex-1 rounded-full border border-white/40 bg-gradient-to-b from-white/45 to-white/20 py-3 text-center text-[14px] font-medium text-ink-soft backdrop-blur-xl transition-transform duration-150 active:scale-95"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setScreen("repository")}
                      className="flex-1 rounded-full bg-brand-blue py-3 text-center text-[14px] font-medium text-white transition-transform duration-150 active:scale-95"
                    >
                      Next
                    </button>
                  </div>
                </div>
              ) : screen === "repository" ? (
                <div className="relative px-5 pb-32 pt-6">
                  <BackRow onBack={() => setScreen("dashboard")} />
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
                        className="overflow-hidden rounded-[20px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-transform duration-150 active:scale-[0.97]"
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
              ) : screen === "infoPortal" ? (
                <div className="relative px-5 pb-32 pt-6">
                  <BackRow onBack={() => setScreen("dashboard")} />
                  <h1 className="mt-1 text-[28px] font-extralight tracking-tight text-ink">
                    Housing 101 Info Portal
                  </h1>

                  <div className="mt-6 flex items-center gap-2 rounded-full border border-white/40 bg-gradient-to-b from-white/45 to-white/20 px-4 py-3 backdrop-blur-xl">
                    <Search className="h-4 w-4 text-ink-soft/60" strokeWidth={1.75} />
                    <span className="text-[13px] text-ink-soft/60">Search...</span>
                  </div>

                  <div className="mt-4 flex gap-2">
                    {["Housing", "Credit"].map((tag, i) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={i === 0 ? () => setScreen("repository") : undefined}
                        className={`rounded-full px-4 py-2 text-[12px] font-medium transition-transform duration-150 active:scale-95 ${
                          i === 0
                            ? "bg-brand-blue text-white"
                            : "border border-white/40 bg-gradient-to-b from-white/45 to-white/20 text-ink-soft backdrop-blur-xl"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 grid grid-cols-2 gap-3"
                  >
                    {mockInfoTopics.map((topic, i) => {
                      const Icon = infoTopicIcons[topic.key];
                      return (
                        <div
                          key={topic.key}
                          className="flex flex-col gap-4 rounded-[24px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-transform duration-150 active:scale-[0.97]"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-teal/15">
                            <Icon
                              className="h-5 w-5"
                              strokeWidth={1.25}
                              color={`url(#${iconGradientId})`}
                            />
                          </div>
                          <p className="text-[14px] font-medium leading-tight text-ink">
                            {topic.label}
                          </p>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              ) : screen === "wallet" ? (
                <div className="relative px-5 pb-32 pt-6">
                  <BackRow onBack={() => setScreen("dashboard")} />
                  <h1 className="mt-1 text-[28px] font-extralight tracking-tight text-ink">
                    Your Digital Wallet
                  </h1>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                    {mockWalletDescription}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 overflow-hidden rounded-[24px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
                  >
                    {mockWalletDocuments.map((doc, i) => {
                      const Icon = walletDocumentIcons[doc.key];
                      return (
                        <div
                          key={doc.key}
                          className={`flex items-center gap-3 px-4 py-3.5 transition-transform duration-150 active:scale-[0.98] ${
                            i !== mockWalletDocuments.length - 1
                              ? "border-b border-white/40"
                              : ""
                          }`}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-teal/15">
                            <Icon
                              className="h-5 w-5"
                              strokeWidth={1.25}
                              color={`url(#${iconGradientId})`}
                            />
                          </div>
                          <p className="flex-1 text-[14px] font-medium text-ink">
                            {doc.label}
                          </p>
                          <ChevronRight className="h-4 w-4 text-ink-soft/40" />
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              ) : screen === "mentor" ? (
                <div className="relative px-5 pb-32 pt-6">
                  <BackRow onBack={() => setScreen("dashboard")} />
                  <h1 className="mt-1 text-[28px] font-extralight tracking-tight text-ink">
                    Mentor Connect
                  </h1>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 rounded-[28px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <ChevronLeft className="h-4 w-4 text-ink-soft/50" />
                      <p className="text-[14px] font-semibold text-ink">{mockCalendar.month}</p>
                      <ChevronRight className="h-4 w-4 text-ink-soft/50" />
                    </div>
                    <div className="mt-4 grid grid-cols-7 gap-y-2 text-center">
                      {mockCalendar.weekDays.map((d) => (
                        <span key={d} className="text-[10px] font-medium text-ink-soft/50">
                          {d}
                        </span>
                      ))}
                      {mockCalendar.days.flat().map((day, i) => (
                        <div key={i} className="flex items-center justify-center py-0.5">
                          {day > 0 && (
                            <span
                              className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] ${
                                mockCalendar.highlighted.includes(day)
                                  ? "bg-brand-blue font-semibold text-white"
                                  : "text-ink-soft"
                              }`}
                            >
                              {day}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <div className="mt-5 rounded-[24px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
                    <p className="text-[14px] font-semibold text-ink">Schedule time to meet</p>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-ink-soft">
                      Your mentor wants to connect and has proposed two dates. Please pick one!
                    </p>
                    <div className="mt-3 flex gap-2">
                      {mockCalendar.proposedDates.map((date, i) => (
                        <span
                          key={date}
                          className={`rounded-full px-3 py-1.5 text-[12px] font-medium transition-transform duration-150 active:scale-95 ${
                            i === 0
                              ? "bg-brand-blue text-white"
                              : "border border-white/40 text-ink-soft"
                          }`}
                        >
                          {date}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative px-5 pb-32 pt-6">
                  <BackRow onBack={() => setScreen("dashboard")} />
                  <h1 className="mt-1 text-[28px] font-extralight tracking-tight text-ink">
                    Resources
                  </h1>

                  <div className="mt-6 flex items-center gap-2 rounded-full border border-white/40 bg-gradient-to-b from-white/45 to-white/20 px-4 py-3 backdrop-blur-xl">
                    <Search className="h-4 w-4 text-ink-soft/60" strokeWidth={1.75} />
                    <span className="text-[13px] text-ink-soft/60">Search...</span>
                  </div>

                  <p className="mt-6 text-[15px] font-semibold text-ink">
                    Get services you need!
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 overflow-hidden rounded-[24px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
                  >
                    {mockResourceServices.map((service, i) => {
                      const Icon = resourceServiceIcons[service.key];
                      return (
                        <div
                          key={service.key}
                          className={`flex items-center gap-3 px-4 py-3.5 transition-transform duration-150 active:scale-[0.98] ${
                            i !== mockResourceServices.length - 1
                              ? "border-b border-white/40"
                              : ""
                          }`}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-teal/15">
                            <Icon
                              className="h-5 w-5"
                              strokeWidth={1.25}
                              color={`url(#${iconGradientId})`}
                            />
                          </div>
                          <p className="flex-1 text-[14px] font-medium text-ink">
                            {service.label}
                          </p>
                          <ChevronRight className="h-4 w-4 text-ink-soft/40" />
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              )}
            </>
          )}
        </div>

        {!isWelcome && (
          <nav className="absolute inset-x-4 bottom-4 flex items-center justify-around rounded-full border border-white/40 bg-gradient-to-b from-white/45 to-white/20 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
            {navIcons.map((Icon, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setScreen(i === 2 ? "welcome" : "dashboard")}
                aria-label={i === 0 ? "Home" : i === 2 ? "Sign out" : "Back to home"}
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-150 active:scale-90 ${
                  i === 0 ? "bg-brand-blue/10 text-brand-blue" : "text-ink-soft/50"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </button>
            ))}
          </nav>
        )}
      </div>
    </PhoneShell>
  );
}
