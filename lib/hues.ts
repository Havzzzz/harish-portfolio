import type { Hue } from "@/content/site";

// Literal class strings so Tailwind can statically extract them
export const HUE_TEXT: Record<Hue, string> = {
  cyan: "text-cyan",
  magenta: "text-magenta",
  violet: "text-violet",
};

export const HUE_BG: Record<Hue, string> = {
  cyan: "bg-cyan",
  magenta: "bg-magenta",
  violet: "bg-violet",
};

export const HUE_BORDER: Record<Hue, string> = {
  cyan: "border-cyan",
  magenta: "border-magenta",
  violet: "border-violet",
};

export const HUE_CHIP_ACTIVE: Record<Hue | "all", string> = {
  all: "border-fg bg-fg text-ink",
  cyan: "border-cyan bg-cyan text-ink",
  magenta: "border-magenta bg-magenta text-ink",
  violet: "border-violet bg-violet text-ink",
};

export const HUE_CARD_HOVER: Record<Hue, string> = {
  cyan: "hover:border-cyan/60",
  magenta: "hover:border-magenta/60",
  violet: "hover:border-violet/60",
};
