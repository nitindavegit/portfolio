"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROFILE } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

    return (
        <section
            id="top"
            ref={ref}
            className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-10 pt-24"
        >
            <motion.div style={{ y, opacity, scale }} className="max-w-[1600px] w-full mx-auto">
                {/* eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.4 }}
                    className="flex items-center gap-3 mb-8 md:mb-12 text-xs uppercase tracking-[0.2em] text-ink/40"
                >
                    <span className="h-px w-10 bg-ink/30" />
                    {PROFILE.location}
                </motion.div>

                {/* name */}
                <h1 className="font-display font-medium tracking-tightest leading-[0.85] text-[19vw] md:text-[14vw] xl:text-[11rem]">
                    {["Nitin", "Dave"].map((word, wi) => (
                        <span key={wi} className="reveal-mask">
                            <motion.span
                                className="inline-block"
                                initial={{ y: "115%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, ease, delay: 0.5 + wi * 0.12 }}
                            >
                                {word}
                            </motion.span>
                            {wi === 0 && <span className="inline-block w-[0.3em]" />}
                        </span>
                    ))}
                </h1>

                {/* role line */}
                <div className="mt-6 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="font-serif italic text-3xl md:text-5xl text-ink/80"
                    >
                        AI Engineer
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease, delay: 1.05 }}
                        className="max-w-md text-ink/60 text-base md:text-lg leading-relaxed tracking-tight"
                    >
                        {PROFILE.intro}
                    </motion.p>
                </div>
            </motion.div>

            {/* scroll cue */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40"
            >
                <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
                <motion.span
                    className="block h-10 w-px bg-ink/30"
                    animate={{ scaleY: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
}
