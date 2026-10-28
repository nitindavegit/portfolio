import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-grotesk)", "sans-serif"],
                serif: ["var(--font-serif)", "serif"],
            },
            colors: {
                ink: "#0A0A0A",
                paper: "#FAFAF8",
                accent: "#FF4D2E",
            },
            letterSpacing: {
                tightest: "-0.05em",
            },
            fontSize: {
                "10xl": ["10rem", { lineHeight: "0.9" }],
                "11xl": ["14rem", { lineHeight: "0.85" }],
            },
            transitionTimingFunction: {
                smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
            },
        },
    },
    plugins: [],
};

export default config;
