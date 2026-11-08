import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        surface: "#DCDCDC",
        ink: "#1C1C1C",
        muted: "#5F5F5F",
        accent: "#085C77",
        accentdot: "#FF5A2C",
      },
      boxShadow: {
        raised: "8px 8px 16px rgba(0,0,0,0.18), -8px -8px 16px rgba(255,255,255,0.85)",
        "raised-sm": "4px 4px 9px rgba(0,0,0,0.18), -4px -4px 9px rgba(255,255,255,0.85)",
        "raised-mobile": "5px 5px 10px rgba(0,0,0,0.18), -5px -5px 10px rgba(255,255,255,0.85)",
        pressed: "inset 5px 5px 10px rgba(0,0,0,0.18), inset -5px -5px 10px rgba(255,255,255,0.85)",
      },
      borderRadius: {
        card: "28px",
      },
      fontFamily: {
        sans: ["Poppins", "Nunito", "Kantumruy Pro", "Noto Sans Khmer", "system-ui", "sans-serif"],
      },
      fontSize: {
        heading: ["clamp(40px, 6vw, 72px)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        h2: ["clamp(26px, 3.6vw, 34px)", { lineHeight: "1.2", fontWeight: "600" }],
      },
      screens: {
        desk: "981px",
      },
    },
  },
} satisfies Config;
