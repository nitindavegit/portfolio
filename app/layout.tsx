import type { Metadata } from "next";
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const grotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-grotesk",
    display: "swap",
});

const serif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-serif",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Nitin Dave — AI Engineer",
    description:
        "AI Engineer building intelligent systems, large language models, and production-grade machine learning pipelines.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${grotesk.variable} ${serif.variable}`}
        >
            <body className="grain font-sans antialiased">{children}</body>
        </html>
    );
}
