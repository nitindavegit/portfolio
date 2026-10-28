"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import AnimatedText from "./AnimatedText";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
    return (
        <section className="px-6 md:px-10 py-32 md:py-48 max-w-[1600px] mx-auto">
            <div className="flex items-end justify-between mb-16 md:mb-24">
                <span className="text-xs uppercase tracking-[0.2em] text-ink/40">
                    (Trajectory)
                </span>
                <h2 className="font-display font-medium tracking-tightest text-5xl md:text-7xl text-right">
                    <AnimatedText text="Where I've been" />
                </h2>
            </div>

            <div className="relative">
                {/* vertical line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-ink/10" />

                {EXPERIENCE.map((e, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-15% 0px" }}
                        transition={{ duration: 0.7, ease, delay: i * 0.08 }}
                        className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mb-16 md:mb-24 ${i % 2 === 0 ? "" : "md:[direction:rtl]"
                            }`}
                    >
                        {/* dot */}
                        <span className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent ring-4 ring-paper" />

                        <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16 md:[direction:ltr]"}`}>
                            <div className="text-xs uppercase tracking-[0.2em] text-ink/40 mb-2">
                                {e.year}
                            </div>
                            <h3 className="font-display text-2xl md:text-3xl tracking-tightest">
                                {e.role}
                            </h3>
                            <div className="text-ink/50 text-sm mt-1">{e.company}</div>
                            <p className="text-ink/60 text-base leading-relaxed mt-4 max-w-sm md:max-w-xs md:[&]:ml-auto">
                                {e.desc}
                            </p>
                        </div>
                        <div className="hidden md:block" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
