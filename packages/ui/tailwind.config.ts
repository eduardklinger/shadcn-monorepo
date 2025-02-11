import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../apps/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/*.{js,ts,jsx,tsx,html}",
    "!../../apps/**/node_modules/**",
    "!../../packages/**/node_modules/**",
  ],
};

export default config;
