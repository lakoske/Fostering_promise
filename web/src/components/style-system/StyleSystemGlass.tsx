"use client";

import { motion } from "framer-motion";
import { Bell, ChevronRight, GraduationCap, Menu, User, Wallet } from "lucide-react";
import { iconGradientId, IconGradientDefs, StatusBar } from "@/components/dashboard/shared";

const colors = [
  { name: "Brand Blue", token: "brand-blue", hex: "#2859BF" },
  { name: "Brand Blue Dark", token: "brand-blue-dark", hex: "#1C3F8C" },
  { name: "Brand Teal", token: "brand-teal", hex: "#4DDACF" },
  { name: "Brand Teal Dark", token: "brand-teal-dark", hex: "#2FB8AC" },
  { name: "Ink", token: "ink", hex: "#1D1D1F" },
  { name: "Ink Soft", token: "ink-soft", hex: "#6E6E73" },
  { name: "Neutral (canvas)", token: "neutral", hex: "#F5F5F7" },
  { name: "Surface", token: "surface", hex: "#FFFFFF" },
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

export function StyleSystemGlass() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-10 sm:px-10">
      <IconGradientDefs />

      <header className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-blue via-brand-blue to-brand-teal-dark px-8 py-12 text-white">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-brand-teal/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <p className="relative text-[13px] font-semibold uppercase tracking-[0.16em] text-white/70">
          Style System
        </p>
        <h1 className="relative mt-2 text-[40px] font-extralight tracking-tight">
          Apple Glass
        </h1>
        <p className="relative mt-2 max-w-lg text-[14px] leading-relaxed text-white/80">
          Blue → teal gradient canvas with frosted, translucent surfaces. Soft depth from
          layered blur and light borders rather than hard shadows.
        </p>
      </header>

      <Section
        title="Color palette"
        description="Blue and teal carry brand and primary actions; ink/ink-soft handle all text; neutral is the base canvas."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {colors.map((c) => (
            <div key={c.token} className="overflow-hidden rounded-2xl border border-black/5">
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
        description="System font (Inter), always paired with extralight display weights for a light, airy feel — never bold headings."
      >
        <div className="space-y-5 rounded-[24px] border border-black/5 bg-white p-6">
          <div>
            <p className="text-[34px] font-extralight leading-[1.05] tracking-tight text-ink">
              Amara
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-ink-soft">
              Display · 34px · font-extralight (200)
            </p>
          </div>
          <div>
            <p className="text-[17px] font-semibold text-ink">Proof Of Income</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-ink-soft">
              Card title · 17px · font-semibold (600)
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
            <p className="text-[11px] font-medium uppercase tracking-wide text-ink-soft/70">
              Good afternoon
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-ink-soft">
              Eyebrow / label · 11px · font-medium, uppercase, tracked
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Material — glass surfaces"
        description="The signature card treatment: a soft white gradient with translucency, a hairline border, an inset highlight, and a 2xl backdrop blur, floating over the colored blur fields on the canvas below."
      >
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-blue via-brand-blue to-brand-teal-dark p-8">
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-brand-teal/30 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-xs rounded-[24px] border border-white/40 bg-gradient-to-br from-white/45 via-white/35 to-white/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-teal/15">
              <Wallet className="h-5 w-5" strokeWidth={1.25} color={`url(#${iconGradientId})`} />
            </div>
            <p className="mt-4 text-[14px] font-medium text-ink">Your Digital Wallet</p>
          </motion.div>
        </div>
        <p className="mt-3 text-[12px] text-ink-soft">
          border-white/40 · bg-gradient from-white/45 via-white/35 to-white/20 · backdrop-blur-2xl
          · shadow inset highlight
        </p>
      </Section>

      <Section
        title="Buttons"
        description="Primary actions are solid brand-blue pills. Secondary actions reuse the glass material. All controls scale to 95% on press (active:scale-95 / whileTap)."
      >
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="rounded-full bg-brand-blue px-6 py-3 text-[14px] font-semibold text-white transition-transform duration-150 active:scale-95"
          >
            Primary — I Have It
          </button>
          <button
            type="button"
            className="rounded-full border border-black/10 bg-gradient-to-b from-white to-neutral px-6 py-3 text-[14px] font-medium text-ink-soft transition-transform duration-150 active:scale-95"
          >
            Secondary — Back
          </button>
          <span className="cursor-pointer text-[13px] font-medium text-brand-blue transition-transform duration-150 active:scale-95">
            Text link — How Do I Get It?
          </span>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="scale-95 rounded-full bg-brand-blue-dark px-6 py-3 text-[14px] font-semibold text-white"
          >
            Primary — pressed
          </button>
          <button
            type="button"
            className="scale-95 rounded-full border border-black/10 bg-neutral px-6 py-3 text-[14px] font-medium text-ink-soft"
          >
            Secondary — pressed
          </button>
        </div>
      </Section>

      <Section title="Chips & badges">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-brand-blue px-4 py-2 text-[12px] font-medium text-white">
            Active tag
          </span>
          <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-[12px] font-medium text-ink-soft">
            Inactive tag
          </span>
          <span className="flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-brand-blue px-1.5 text-[11px] font-semibold text-white">
            3
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-[11px] font-semibold text-white">
            15
          </span>
        </div>
      </Section>

      <Section title="List row">
        <div className="max-w-sm overflow-hidden rounded-[24px] border border-black/5 bg-white">
          <div className="flex items-center gap-3 border-b border-black/5 px-4 py-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-teal/15">
              <Bell className="h-5 w-5" strokeWidth={1.25} color={`url(#${iconGradientId})`} />
            </div>
            <p className="flex-1 text-[14px] font-medium text-ink">Birth records</p>
            <ChevronRight className="h-4 w-4 text-ink-soft/40" />
          </div>
          <div className="flex items-center gap-3 px-4 py-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-teal/15">
              <User className="h-5 w-5" strokeWidth={1.25} color={`url(#${iconGradientId})`} />
            </div>
            <p className="flex-1 text-[14px] font-medium text-ink">Driver&apos;s license</p>
            <ChevronRight className="h-4 w-4 text-ink-soft/40" />
          </div>
        </div>
      </Section>

      <Section
        title="Icons"
        description="24px stroke icons (lucide, strokeWidth 1.25–1.75) sit in a 44–48px circle with a faint blue→teal duotone gradient, matched to a matching gradient icon fill."
      >
        <div className="flex flex-wrap gap-3">
          {[GraduationCap, Bell, User, Menu].map((Icon, i) => (
            <div
              key={i}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-teal/15"
            >
              <Icon className="h-5 w-5" strokeWidth={1.25} color={`url(#${iconGradientId})`} />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Navigation & status bar"
        description="Bottom nav mirrors the card material; the active tab gets a soft brand-blue tint. Status bar is transparent and inherits the canvas color underneath it."
      >
        <div className="max-w-sm rounded-[28px] bg-gradient-to-br from-brand-blue via-brand-blue to-brand-teal-dark p-4">
          <StatusBar light />
        </div>
        <nav className="mt-4 flex max-w-sm items-center justify-around rounded-full border border-black/10 bg-gradient-to-b from-white to-neutral py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          {[GraduationCap, Bell, User, Menu].map((Icon, i) => (
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
      </Section>
    </div>
  );
}
