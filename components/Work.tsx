"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WORK } from "@/lib/data";
import AnimatedText from "./AnimatedText";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Work() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    // translate the track horizontally as we scroll through the pinned section
    const x = useTransform(scrollYProgress, [0, 1], ["2%", "-78%"]);

    return (
        <section id="work" ref={ref} className="relative">
            {/* intro */}
            <div className="px-6 md:px-10 py-24 md:py-32 max-w-[1600px] mx-auto">
                <div className="flex items-end justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-ink/40">
                        (Selected Work)
                    </span>
                    <h2 className="font-display font-medium tracking-tightest text-5xl md:text-7xl text-right">
                        <AnimatedText text="Things I've built" />
                    </h2>
                </div>
            </div>

            {/* pinned horizontal track */}
            <div className="relative h-[300vh]">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-6 md:gap-10 pl-6 md:pl-10 pr-10">
                        {WORK.map((p, i) => (
                            <ProjectCard key={i} p={p} index={i} />
                        ))}
                        {/* trailing CTA card */}
                        <div className="shrink-0 w-[80vw] md:w-[42vw] h-[68vh] flex flex-col justify-center">
                            <p className="font-serif italic text-3xl md:text-5xl text-ink/70 max-w-md">
                                More in the works — and under NDA.
                            </p>
                            <a
                                href="#contact"
                                className="link-underline mt-8 font-display text-lg tracking-tight w-max"
                            >
                                Let's talk →
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* scroll hint */}
            <div className="px-6 md:px-10 pb-10 max-w-[1600px] mx-auto flex items-center gap-4 text-ink/40 text-xs uppercase tracking-[0.2em]">
                <span className="h-px w-16 bg-ink/20" />
                Drag / scroll to explore
            </div>
        </section>
    );
}

function ProjectCard({
    p,
    index,
}: {
    p: (typeof WORK)[number];
    index: number;
}) {
    return (
        <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="group shrink-0 w-[85vw] md:w-[44vw] h-[68vh] flex flex-col justify-between border border-ink/10 rounded-2xl p-8 md:p-10 bg-paper hover:bg-ink hover:text-paper transition-colors duration-500 ease-smooth overflow-hidden relative"
        >
            {/* top */}
            <div className="flex items-start justify-between">
                <div>
                    <div className="text-xs uppercase tracking-[0.2em] opacity-50">
                        {p.category}
                    </div>
                    <div className="text-xs mt-1 opacity-50">{p.year}</div>
                </div>
                <div className="font-display text-sm opacity-40">{p.n}</div>
            </div>

            {/* center title */}
            <div className="my-10">
                <h3 className="font-display font-medium tracking-tightest text-4xl md:text-6xl leading-[0.9]">
                    {p.title.split(" — ")[0]}
                </h3>
                {p.title.includes(" — ") && (
                    <p className="font-serif italic text-2xl md:text-3xl mt-2 opacity-70">
                        {p.title.split(" — ")[1]}
                    </p>
                )}
            </div>

            {/* bottom */}
            <div>
                <p className="text-base md:text-lg leading-relaxed opacity-70 max-w-md mb-6">
                    {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                        <span
                            key={m}
                            className="text-xs px-3 py-1 rounded-full border border-current/20 opacity-80"
                        >
                            {m}
                        </span>
                    ))}
                </div>
            </div>

            {/* accent corner */}
            <span className="absolute top-6 right-6 text-accent text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                ↗
            </span>
        </motion.article>
    );
}
