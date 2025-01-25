/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        chatInOut: {
          "0%": {
            transform: "translateY(-30px) translateX(-90px) scale(0)",
            opacity: "0",
          }, // Start (fade-in)
          "8%": { transform: "translateY(0)", opacity: "1" }, // Fully visible
          "92%": { transform: "translateY(0)", opacity: "1" }, // Idle state
          "100%": {
            transform: "translateY(-30px) translate(-90px) scale(0)",
            opacity: "0",
          }, // Fade-out
        },
      },
      animation: {
        breathe: "breathe 2s ease-in-out infinite",
        chatIn: "chatInOut 7s ease-in-out infinite",
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
