"use client";

import { motion } from "framer-motion";
import { EXPERTISE } from "@/lib/data";
import AnimatedText from "./AnimatedText";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Expertise() {
    return (
        <section
            id="expertise"
            className="relative px-6 md:px-10 py-32 md:py-48 max-w-[1600px] mx-auto"
        >
            <div className="flex items-end justify-between mb-16 md:mb-24">
                <span className="text-xs uppercase tracking-[0.2em] text-ink/40">
                    (Expertise)
                </span>
                <h2 className="font-display font-medium tracking-tightest text-5xl md:text-7xl text-right">
                    <AnimatedText text="What I do" />
                </h2>
            </div>

            <div className="border-t border-ink/10">
                {EXPERTISE.map((item, i) => (
                    <ExpertiseRow key={i} item={item} index={i} />
                ))}
            </div>
        </section>
    );
}

function ExpertiseRow({
    item,
    index,
}: {
    item: (typeof EXPERTISE)[number];
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease, delay: index * 0.05 }}
            className="group border-b border-ink/10 py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-start cursor-pointer transition-colors duration-500 hover:bg-ink/[0.02] px-2 md:px-4 -mx-2 md:-mx-4 rounded-sm"
        >
            <div className="col-span-2 md:col-span-1 font-display text-sm md:text-base text-ink/30 pt-2">
                {item.n}
            </div>

            <div className="col-span-10 md:col-span-4">
                <h3 className="font-display text-2xl md:text-4xl tracking-tightest transition-all duration-500 ease-smooth group-hover:translate-x-2">
                    {item.title}
                </h3>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-6">
                <p className="text-ink/60 text-base md:text-lg leading-relaxed tracking-tight max-w-md">
                    {item.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                    {item.tags.map((t) => (
                        <span
                            key={t}
                            className="text-xs px-3 py-1 rounded-full border border-ink/15 text-ink/60 transition-colors duration-300 group-hover:border-accent/40 group-hover:text-ink"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="col-span-12 md:col-span-2 md:col-start-11 flex md:justify-end items-start pt-2">
                <span className="text-2xl text-ink/20 transition-all duration-500 ease-smooth group-hover:text-accent group-hover:rotate-45">
                    ↗
                </span>
            </div>
        </motion.div>
    );
}
