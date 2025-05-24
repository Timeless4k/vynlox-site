import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Base colors
        dark: {
          DEFAULT: "#0F172A",
          lighter: "#1E293B",
          light: "#334155",
        },
        emerald: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
        cyan: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
          dark: "#0891B2",
        },
        muted: "#94A3B8",
        card: "#1E293B",
        border: "#334155",
        
        // Semantic colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          hover: "#059669",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          hover: "#0891B2",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        "h1": ["clamp(3rem, 5vw, 4rem)", { lineHeight: "1.1", fontWeight: "700" }],
        "body": ["clamp(1rem, 1.5vw, 1.125rem)", { lineHeight: "1.6" }],
        "cta": ["clamp(0.875rem, 1vw, 1rem)", { lineHeight: "1.5", fontWeight: "500", letterSpacing: "0.05em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(16, 185, 129, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(16, 185, 129, 0.8)" },
        },
        "pulse": {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      boxShadow: {
        "glow": "0 0 15px rgba(16, 185, 129, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config 