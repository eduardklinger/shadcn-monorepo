import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import { shadcnPlugin } from "./shadcn-plugin.ts";

export const shadcnPreset = {
  content: [],
  darkMode: ["class"],
  plugins: [shadcnPlugin, animatePlugin],
} satisfies Config;
