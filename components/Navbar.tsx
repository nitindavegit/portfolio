"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { PROFILE, NAV_LINKS } from "@/lib/data";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const [progress, setProgress] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        setProgress(v);
    });

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="fixed top-0 left-0 right-0 z-[100]"
            >
                <div
                    className={`transition-all duration-500 ease-smooth ${scrolled
                            ? "backdrop-blur-xl bg-paper/70 border-b border-ink/5"
                            : "bg-transparent border-b border-transparent"
                        }`}
                >
                    <nav className="max-w-[1600px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
                        <a
                            href="#top"
                            className="font-display font-medium tracking-tightest text-lg"
                        >
                            {PROFILE.name.split(" ").map((w) => w[0]).join("")}
                            <span className="text-accent">.</span>
                        </a>

                        <div className="hidden md:flex items-center gap-8">
                            {NAV_LINKS.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    className="link-underline text-sm tracking-tight text-ink/70 hover:text-ink transition-colors"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>

                        <a
                            href={`mailto:${PROFILE.email}`}
                            className="group flex items-center gap-2 text-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            <span className="hidden sm:inline tracking-tight">Available for work</span>
                        </a>
                    </nav>
                </div>
                <motion.div
                    className="h-[2px] bg-accent origin-left"
                    style={{ scaleX: progress }}
                />
            </motion.header>
        </>
    );
}
