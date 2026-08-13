"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Commissioner } from "next/font/google";
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
import {
  infoTopicIcons,
  navIcons,
  PhoneShell,
  resourceServiceIcons,
  StatusBar,
  tileIcons,
  walletDocumentIcons,
} from "./shared";

// Applied to every piece of text in this variant (not just the display heading).
const display = Commissioner({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

type Screen =
  | "welcome"
  | "dashboard"
  | "navigator"
  | "repository"
  | "infoPortal"
  | "wallet"
  | "mentor"
  | "resources";
const nextScreen: Record<Screen, Screen> = {
  welcome: "dashboard",
  dashboard: "navigator",
  navigator: "repository",
  repository: "infoPortal",
  infoPortal: "wallet",
  wallet: "mentor",
  mentor: "resources",
  resources: "welcome",
};

export function DashboardVariantAppleEditorial() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const progress = mockNavigator.stepIndex / mockNavigator.stepCount;

  return (
    <PhoneShell>
      <div
        onClick={() => setScreen((s) => nextScreen[s])}
        className={`${display.className} relative flex flex-1 cursor-pointer flex-col overflow-hidden bg-[#dde4e6]`}
      >
        <StatusBar />

        <div className="relative flex-1 overflow-y-auto overflow-x-hidden">
        {screen === "welcome" ? (
          <div className="absolute inset-0 flex flex-col px-6 pb-24 pt-4 text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              My Housing Platform
            </p>

            <div className="mt-14 flex flex-1 flex-col items-center">
              <img
                src="/images/mockup-assets/avatar-amara.png"
                alt={mockUser.name}
                className="h-28 w-28 rounded-full object-cover ring-4 ring-white"
              />
              <p className="mt-8 text-[14px] text-ink-soft">Welcome back</p>
              <p className="mt-1 text-[36px] font-medium leading-[1.05] text-ink">
                {mockUser.name}
              </p>

              <button
                type="button"
                className="mt-10 w-full max-w-[220px] rounded-full py-3.5 text-[15px] font-bold text-black"
                style={{ backgroundColor: YELLOW }}
              >
                Click to log in
              </button>
            </div>

            <div className="rounded-full bg-white px-5 py-3.5 text-[12px] text-ink-soft shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              You have {mockUser.unreadMessages} messages waiting.{" "}
              <span className="font-semibold text-ink">Log in to get started.</span>
            </div>
          </div>
        ) : screen === "dashboard" ? (
          <div className="relative px-5 pb-32 pt-6">
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
            <h1 className="text-[44px] font-medium leading-[1] tracking-tight text-ink">
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
            <div className="grid grid-cols-2 gap-3">
              {mockTiles.map((tile, i) => {
                const Icon = tileIcons[tile.key];
                const isFeatured = i === 0;
                return (
                  <motion.div
                    key={tile.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                    className="relative flex flex-col gap-4 rounded-[26px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                    style={{ backgroundColor: isFeatured ? YELLOW : "#ffffff" }}
                  >
                    {tile.badge && (
                      <span className="absolute right-3 top-3 flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold text-white">
                        {tile.badge}
                      </span>
                    )}
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70">
                      <Icon className="h-5 w-5 text-ink" strokeWidth={1.5} />
                    </div>
                    <div className="flex items-end justify-between gap-2">
                      <p className="text-[14px] font-normal leading-tight text-ink">
                        {tile.label}
                      </p>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : screen === "navigator" ? (
          <div className="relative px-5 pb-32 pt-6">
            <p className="text-[12px] text-ink-soft">Tap anywhere to continue</p>
            <h1 className="mt-1 text-[32px] font-bold leading-[1] tracking-tight text-ink">
              Housing Navigator
            </h1>

            <div className="mt-6 flex items-center gap-2">
              {Array.from({ length: mockNavigator.stepCount }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full ${
                    i === mockNavigator.stepIndex - 1
                      ? "w-7"
                      : "w-2 bg-black/10"
                  }`}
                  style={i === mockNavigator.stepIndex - 1 ? { backgroundColor: YELLOW } : undefined}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 rounded-[28px] bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
            >
              <p className="text-[18px] font-bold text-ink">{mockNavigatorTask.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                {mockNavigatorTask.description}
              </p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-black py-3 text-[14px] font-bold text-white"
              >
                {mockNavigatorTask.primaryCta}
              </button>
              <p className="mt-4 text-center text-[13px] font-bold text-ink">
                {mockNavigatorTask.secondaryCta}
              </p>
            </motion.div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 rounded-full bg-white py-3 text-center text-[14px] font-bold text-ink-soft shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                Back
              </div>
              <div
                className="flex-1 rounded-full py-3 text-center text-[14px] font-bold text-black"
                style={{ backgroundColor: YELLOW }}
              >
                Next
              </div>
            </div>
          </div>
        ) : screen === "repository" ? (
          <div className="relative px-5 pb-32 pt-6">
            <p className="text-[12px] text-ink-soft">Tap anywhere to continue</p>
            <h1 className="mt-1 text-[36px] font-bold leading-[1] tracking-tight text-ink">
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
        ) : screen === "infoPortal" ? (
          <div className="relative px-5 pb-32 pt-6">
            <p className="text-[12px] text-ink-soft">Tap anywhere to continue</p>
            <h1 className="mt-1 text-[30px] font-bold leading-[1] tracking-tight text-ink">
              Housing 101 Info Portal
            </h1>

            <div className="mt-6 flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <Search className="h-4 w-4 text-ink-soft/60" strokeWidth={1.75} />
              <span className="text-[13px] text-ink-soft/60">Search...</span>
            </div>

            <div className="mt-4 flex gap-2">
              {["Housing", "Credit"].map((tag, i) => (
                <span
                  key={tag}
                  className="rounded-full px-4 py-2 text-[12px] font-bold text-ink"
                  style={{ backgroundColor: i === 0 ? YELLOW : "#ffffff" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 grid grid-cols-2 gap-3"
            >
              {mockInfoTopics.map((topic) => {
                const Icon = infoTopicIcons[topic.key];
                return (
                  <div
                    key={topic.key}
                    className="flex flex-col gap-4 rounded-[24px] bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2eee5]">
                      <Icon className="h-5 w-5 text-ink" strokeWidth={1.5} />
                    </div>
                    <p className="text-[14px] font-normal leading-tight text-ink">
                      {topic.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        ) : screen === "wallet" ? (
          <div className="relative px-5 pb-32 pt-6">
            <p className="text-[12px] text-ink-soft">Tap anywhere to continue</p>
            <h1 className="mt-1 text-[30px] font-bold leading-[1] tracking-tight text-ink">
              Your Digital Wallet
            </h1>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
              {mockWalletDescription}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {mockWalletDocuments.map((doc, i) => {
                const Icon = walletDocumentIcons[doc.key];
                return (
                  <motion.div
                    key={doc.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                    className="flex items-center gap-3 rounded-full bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2eee5]">
                      <Icon className="h-5 w-5 text-ink" strokeWidth={1.5} />
                    </div>
                    <p className="flex-1 text-[14px] font-normal text-ink">{doc.label}</p>
                    <ChevronRight className="h-4 w-4 text-ink-soft/40" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : screen === "mentor" ? (
          <div className="relative px-5 pb-32 pt-6">
            <p className="text-[12px] text-ink-soft">Tap anywhere to continue</p>
            <h1 className="mt-1 text-[30px] font-bold leading-[1] tracking-tight text-ink">
              Mentor Connect
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 rounded-[28px] bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center justify-between">
                <ChevronLeft className="h-4 w-4 text-ink-soft/50" />
                <p className="text-[14px] font-bold text-ink">{mockCalendar.month}</p>
                <ChevronRight className="h-4 w-4 text-ink-soft/50" />
              </div>
              <div className="mt-4 grid grid-cols-7 gap-y-2 text-center">
                {mockCalendar.weekDays.map((d) => (
                  <span key={d} className="text-[10px] font-bold text-ink-soft/50">
                    {d}
                  </span>
                ))}
                {mockCalendar.days.flat().map((day, i) => (
                  <div key={i} className="flex items-center justify-center py-0.5">
                    {day > 0 && (
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-medium text-ink"
                        style={
                          mockCalendar.highlighted.includes(day)
                            ? { backgroundColor: YELLOW, fontWeight: 700 }
                            : undefined
                        }
                      >
                        {day}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="mt-5 rounded-[24px] bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <p className="text-[14px] font-bold text-ink">Schedule time to meet</p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-ink-soft">
                Your mentor wants to connect and has proposed two dates. Please pick one!
              </p>
              <div className="mt-3 flex gap-2">
                {mockCalendar.proposedDates.map((date, i) => (
                  <span
                    key={date}
                    className="rounded-full px-3 py-1.5 text-[12px] font-bold text-ink"
                    style={{ backgroundColor: i === 0 ? YELLOW : "#f2eee5" }}
                  >
                    {date}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative px-5 pb-32 pt-6">
            <p className="text-[12px] text-ink-soft">Tap anywhere to continue</p>
            <h1 className="mt-1 text-[30px] font-bold leading-[1] tracking-tight text-ink">
              Resources
            </h1>

            <div className="mt-6 flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <Search className="h-4 w-4 text-ink-soft/60" strokeWidth={1.75} />
              <span className="text-[13px] text-ink-soft/60">Search...</span>
            </div>

            <p className="mt-6 text-[15px] font-bold text-ink">Get services you need!</p>

            <div className="mt-3 flex flex-col gap-3">
              {mockResourceServices.map((service, i) => {
                const Icon = resourceServiceIcons[service.key];
                return (
                  <motion.div
                    key={service.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                    className="flex items-center gap-3 rounded-full bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2eee5]">
                      <Icon className="h-5 w-5 text-ink" strokeWidth={1.5} />
                    </div>
                    <p className="flex-1 text-[14px] font-normal text-ink">{service.label}</p>
                    <ChevronRight className="h-4 w-4 text-ink-soft/40" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
        </div>

        {screen !== "welcome" && (
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
        )}
      </div>
    </PhoneShell>
  );
}
