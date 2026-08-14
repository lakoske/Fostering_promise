"use client";

import { useState } from "react";
import { StyleSystemEditorial } from "@/components/style-system/StyleSystemEditorial";
import { StyleSystemGlass } from "@/components/style-system/StyleSystemGlass";

const variants = [
  {
    key: "apple-glass",
    label: "Apple Glass (blue+teal)",
    Component: StyleSystemGlass,
  },
  {
    key: "apple-editorial",
    label: "Apple Editorial",
    Component: StyleSystemEditorial,
  },
] as const;

export default function StyleSystemPage() {
  const [active, setActive] = useState<(typeof variants)[number]["key"]>(
    variants[0].key,
  );
  const Active = variants.find((v) => v.key === active)!.Component;

  return (
    <div className="min-h-dvh bg-[#e9e9e6]">
      <div className="sticky top-0 z-10 flex justify-center bg-[#e9e9e6]/80 py-4 backdrop-blur-sm">
        <div className="flex gap-2 rounded-full bg-white p-1 shadow-sm">
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
      </div>
      <Active />
    </div>
  );
}
