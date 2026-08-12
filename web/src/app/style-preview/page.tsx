"use client";

import { useState } from "react";
import { DashboardVariantAppleEditorial } from "@/components/dashboard/VariantAppleEditorial";
import { DashboardVariantAppleGlass } from "@/components/dashboard/VariantAppleGlass";

const variants = [
  {
    key: "apple-glass",
    label: "Apple Glass (blue+teal)",
    Component: DashboardVariantAppleGlass,
  },
  {
    key: "apple-editorial",
    label: "Apple Editorial",
    Component: DashboardVariantAppleEditorial,
  },
] as const;

export default function StylePreviewPage() {
  const [active, setActive] = useState<(typeof variants)[number]["key"]>(
    variants[0].key,
  );
  const Active = variants.find((v) => v.key === active)!.Component;

  return (
    <div className="flex min-h-dvh flex-col items-center bg-[#e9e9e6] py-6">
      <div className="mb-4 flex flex-wrap justify-center gap-2 rounded-full bg-white p-1 shadow-sm">
        {variants.map((v) => (
          <button
            key={v.key}
            type="button"
            onClick={() => setActive(v.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === v.key
                ? "bg-brand-blue text-white"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
      <Active />
    </div>
  );
}
