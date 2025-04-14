import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          700: "#374151",
          800: "#1f2937",
        },
        blue:{
          200: "#3b82f6",
          400: "#2563eb",
          500: "#1d4ed8",
          600: "#1e40af",
        },
        "dark-bg": "#111827",
        "dark-secondary": "#374151",
        "dark-accent": "#3b82f6",
        "dark-tertiary": "#1e3a8a",
        "blue-primary": "#3b82f6",
        "stroke-dark": "#374151",
        "stroke-light": "#e5e7eb",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
