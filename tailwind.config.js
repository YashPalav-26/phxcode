/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark mode theme
        dark: {
          bg: "#1e1e1e",
          "bg-secondary": "#252526",
          "bg-tertiary": "#2d2d2d",
          border: "#3c3c3c",
          text: "#d4d4d4",
          "text-secondary": "#cccccc",
          "text-muted": "#858585",
          accent: "#007acc",
          success: "#2ea44f",
        },
        // Light mode theme
        light: {
          bg: "#ffffff",
          "bg-secondary": "#f8f8f8",
          "bg-tertiary": "#f3f3f3",
          border: "#e0e0e0",
          text: "#1f2937",
          "text-secondary": "#374151",
          "text-muted": "#6b7280",
          accent: "#0066b8",
          success: "#2ea44f",
        },
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["13px", { lineHeight: "19px" }],
        base: ["14px", { lineHeight: "21px" }],
        lg: ["16px", { lineHeight: "24px" }],
      },
      fontFamily: {
        mono: [
          "'JetBrains Mono'",
          "'Fira Code'",
          "'Consolas'",
          "monospace",
        ],
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        base: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
        md: "0 10px 15px -3px rgb(0 0 0 / 0.15)",
        lg: "0 20px 25px -5px rgb(0 0 0 / 0.2)",
      },
      borderRadius: {
        DEFAULT: "6px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        full: "9999px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      transitionDuration: {
        "150": "150ms",
        "200": "200ms",
        "300": "300ms",
      },
    },
  },
  plugins: [],
};
