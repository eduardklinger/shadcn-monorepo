import type { Config } from "tailwindcss";

import { shadcnPreset } from "./src/lib/shadcn-preset";

const config: Omit<Config, "content" | "presets"> = {
  presets: [shadcnPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../apps/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/*.{js,ts,jsx,tsx,html}",
    "!../../apps/**/node_modules/**",
    "!../../packages/**/node_modules/**",
  ],
};

export default config;
