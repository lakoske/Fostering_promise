"use client";

import { motion } from "framer-motion";
import { Bell, ChevronRight, GraduationCap, Menu, User, Wallet } from "lucide-react";
import { Commissioner } from "next/font/google";
import { StatusBar } from "@/components/dashboard/shared";

const display = Commissioner({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const YELLOW = "#f0e64c";

const colors = [
  { name: "Yellow (accent)", hex: "#F0E64C" },
  { name: "Canvas", hex: "#DDE4E6" },
  { name: "Card / white", hex: "#FFFFFF" },
  { name: "Icon tile bg", hex: "#F2EEE5" },
  { name: "Ink (text)", hex: "#1D1D1F" },
  { name: "Ink Soft", hex: "#6E6E73" },
];

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-black/5 py-10 first:border-t-0 first:pt-0">
      <div className="mb-6">
        <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-soft/70">
          {title}
        </h2>
        {description && (
          <p className="mt-1.5 max-w-2xl text-[14px] leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

export function StyleSystemEditorial() {
  return (
    <div className={`${display.className} mx-auto w-full max-w-4xl px-6 pb-24 pt-10 sm:px-10`}>
      <header className="relative overflow-hidden rounded-[32px] bg-[#dde4e6] px-8 py-12">
        <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
          Style System
        </p>
        <h1 className="mt-2 text-[40px] font-medium tracking-tight text-ink">Apple Editorial</h1>
        <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-ink-soft">
          Flat, editorial layout inspired by the client&apos;s reference: pale blue-gray canvas,
          crisp white cards, one bold yellow accent, black for text and controls. No blue, no
          blur — contrast and typography carry the hierarchy.
        </p>
      </header>

      <Section
        title="Color palette"
        description="A single accent color (yellow) marks primary actions and highlights. Everything else is white, near-black, or the pale canvas gray."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {colors.map((c) => (
            <div key={c.hex} className="overflow-hidden rounded-2xl border border-black/5">
              <div className="h-16" style={{ backgroundColor: c.hex }} />
              <div className="bg-white px-3 py-2.5">
                <p className="text-[12px] font-medium text-ink">{c.name}</p>
                <p className="text-[11px] uppercase text-ink-soft">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Typography"
        description="Commissioner, applied to every piece of text in this variant. Weight carries emphasis instead of size contrast — medium display headings, bold titles/buttons, normal body/labels."
      >
        <div className="space-y-5 rounded-[24px] border border-black/5 bg-white p-6">
          <div>
            <p className="text-[36px] font-medium leading-[1.05] text-ink">Amara</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-ink-soft">
              Display · 36–44px · font-medium (500)
            </p>
          </div>
          <div>
            <p className="text-[18px] font-bold text-ink">Proof Of Income</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-ink-soft">
              Card title · 18px · font-bold (700)
            </p>
          </div>
          <div>
            <p className="text-[14px] leading-relaxed text-ink-soft">
              Proof that you have a steady way to pay rent (like pay stubs or your SILP/THP
              stipend).
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-ink-soft">
              Body · 13–14px · font-normal (400), text-ink-soft
            </p>
          </div>
          <div>
            <p className="text-[14px] font-normal leading-tight text-ink">Mentor Connect</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-ink-soft">
              Tile / row label · 14px · font-normal (400)
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-soft">
              Good afternoon
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-ink-soft">
              Eyebrow / label · 11px · font-medium, uppercase, tracked
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Material — flat cards"
        description="No blur, no transparency. Cards are solid white (or yellow for the featured tile) with a very soft drop shadow — the reference's crisp, printed-poster feel."
      >
        <div className="rounded-[28px] bg-[#dde4e6] p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-xs rounded-[26px] bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2eee5]">
              <Wallet className="h-5 w-5 text-ink" strokeWidth={1.5} />
            </div>
            <p className="mt-4 text-[14px] font-normal text-ink">Your Digital Wallet</p>
          </motion.div>
        </div>
        <p className="mt-3 text-[12px] text-ink-soft">
          bg-white · rounded-[24–28px] · shadow-[0_2px_10px_rgba(0,0,0,0.05)] · no border, no blur
        </p>
      </Section>

      <Section
        title="Buttons"
        description="Primary actions are solid yellow or solid black pills — always bold text. All controls scale to 95% on press (active:scale-95 / whileTap)."
      >
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="rounded-full px-6 py-3 text-[14px] font-bold text-black transition-transform duration-150 active:scale-95"
            style={{ backgroundColor: YELLOW }}
          >
            Primary — Click to log in
          </button>
          <button
            type="button"
            className="rounded-full bg-black px-6 py-3 text-[14px] font-bold text-white transition-transform duration-150 active:scale-95"
          >
            Primary — I Have It
          </button>
          <button
            type="button"
            className="rounded-full bg-white px-6 py-3 text-[14px] font-bold text-ink-soft shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-transform duration-150 active:scale-95"
          >
            Secondary — Back
          </button>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="scale-95 rounded-full px-6 py-3 text-[14px] font-bold text-black"
            style={{ backgroundColor: YELLOW, filter: "brightness(0.94)" }}
          >
            Primary — pressed
          </button>
          <button
            type="button"
            className="scale-95 rounded-full bg-white px-6 py-3 text-[14px] font-bold text-ink-soft shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
          >
            Secondary — pressed
          </button>
        </div>
      </Section>

      <Section title="Chips & badges">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="rounded-full px-4 py-2 text-[12px] font-bold text-ink"
            style={{ backgroundColor: YELLOW }}
          >
            Active tag
          </span>
          <span className="rounded-full bg-white px-4 py-2 text-[12px] font-bold text-ink shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            Inactive tag
          </span>
          <span className="flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold text-white">
            3
          </span>
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-ink"
            style={{ backgroundColor: YELLOW }}
          >
            15
          </span>
        </div>
      </Section>

      <Section title="List row">
        <div className="flex max-w-sm flex-col gap-3">
          <div className="flex items-center gap-3 rounded-full bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2eee5]">
              <Bell className="h-5 w-5 text-ink" strokeWidth={1.5} />
            </div>
            <p className="flex-1 text-[14px] font-normal text-ink">Birth records</p>
            <ChevronRight className="h-4 w-4 text-ink-soft/40" />
          </div>
          <div className="flex items-center gap-3 rounded-full bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2eee5]">
              <User className="h-5 w-5 text-ink" strokeWidth={1.5} />
            </div>
            <p className="flex-1 text-[14px] font-normal text-ink">Driver&apos;s license</p>
            <ChevronRight className="h-4 w-4 text-ink-soft/40" />
          </div>
        </div>
        <p className="mt-3 text-[12px] text-ink-soft">
          Each row is its own pill (rounded-full), stacked with a gap — not one grouped card with
          dividers.
        </p>
      </Section>

      <Section
        title="Icons"
        description="24px stroke icons (lucide, strokeWidth 1.5, solid text-ink) sit in a flat 40–44px circle filled with the warm off-white icon-tile color — no gradient, no color tint."
      >
        <div className="flex flex-wrap gap-3">
          {[GraduationCap, Bell, User, Menu].map((Icon, i) => (
            <div
              key={i}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2eee5]"
            >
              <Icon className="h-5 w-5 text-ink" strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Navigation & status bar"
        description="Bottom nav is a solid white pill; the active tab is a solid black circle. Status bar text is always dark, since the canvas never goes dark in this variant."
      >
        <div className="max-w-sm rounded-[28px] bg-[#dde4e6] p-4">
          <StatusBar />
        </div>
        <nav className="mt-4 flex max-w-sm items-center justify-around rounded-full bg-white py-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.1)]">
          {[GraduationCap, Bell, User, Menu].map((Icon, i) => (
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
      </Section>
    </div>
  );
}
