import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // ── Override standard tailwind colors with Petal brand ──
        zinc: {
          50: "var(--petal-bg-light)",
          100: "var(--petal-card)",
          200: "var(--petal-bg-gradient-end)",
          300: "#F8D7E0",
          400: "var(--petal-text-secondary)",
          500: "var(--petal-text-secondary)",
          600: "var(--petal-text-secondary)",
          700: "var(--petal-text-main)",
          800: "var(--petal-text-main)",
          900: "var(--petal-text-main)",
        },
        pink: {
          50: "var(--petal-bg-light)",
          100: "var(--petal-bg-gradient-end)",
          200: "#F8D7E0",
          300: "var(--petal-pink)",
          400: "var(--petal-pink)",
          500: "var(--petal-pink-strong)",
          600: "#A9244D",
        },
        // ── Brand tokens ──────────────────────────────────────────────
        "surface-1": "hsl(var(--surface-1))",
        "surface-2": "hsl(var(--surface-2))",
        "surface-3": "hsl(var(--surface-3))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "pink-sm": "0 0 12px 0 hsl(var(--primary) / 0.35)",
        "pink-md": "0 0 24px 4px hsl(var(--primary) / 0.35)",
        "pink-lg": "0 0 48px 8px hsl(var(--primary) / 0.35)",
      },
      backgroundImage: {
        "pink-radial":
          "radial-gradient(ellipse at center, hsl(var(--primary) / 0.25) 0%, transparent 70%)",
        "dark-gradient":
          "linear-gradient(135deg, hsl(var(--surface-1)) 0%, hsl(var(--background)) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
