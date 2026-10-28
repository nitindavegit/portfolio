"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="border-t border-ink/10 px-6 md:px-10 py-12 max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                <div>
                    <div className="font-display font-medium tracking-tightest text-3xl">
                        {PROFILE.name}
                        <span className="text-accent">.</span>
                    </div>
                    <p className="text-ink/50 text-sm mt-2 max-w-xs">{PROFILE.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-2">
                    {PROFILE.socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            className="link-underline text-sm text-ink/70 hover:text-ink transition-colors"
                        >
                            {s.label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-12 pt-6 border-t border-ink/10 text-xs text-ink/40">
                <span>© {new Date().getFullYear()} {PROFILE.name} — All rights reserved</span>
                <motion.span
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                    Built with care · Designed in pixels
                </motion.span>
            </div>
        </footer>
    );
}
