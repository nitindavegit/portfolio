"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STATEMENT =
    "I build the systems that let machines reason, retrieve, and respond — turning frontier research into software people actually use. Quietly obsessed with latency, evaluation, and the details that separate a demo from a product.";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.85", "end 0.45"],
    });

    const words = STATEMENT.split(" ");

    return (
        <section
            id="about"
            ref={ref}
            className="relative px-6 md:px-10 py-32 md:py-48 max-w-[1600px] mx-auto"
        >
            <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease }}
                    className="col-span-12 md:col-span-3 text-xs uppercase tracking-[0.2em] text-ink/40"
                >
                    (About)
                </motion.span>
            </div>

            <p className="font-display font-medium tracking-tightest text-3xl md:text-5xl xl:text-6xl leading-[1.15]">
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + 1 / words.length;
                    return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
                })}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 md:mt-32 border-t border-ink/10 pt-10">
                {[
                    ["30+", "Models shipped"],
                    ["4M+", "Daily inferences"],
                    ["12", "Production systems"],
                    ["∞", "Hours in evals"],
                ].map(([n, l], i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                    >
                        <div className="font-display text-5xl md:text-6xl tracking-tightest">{n}</div>
                        <div className="text-sm text-ink/50 mt-2">{l}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function Word({
    progress,
    range,
    children,
}: {
    progress: any;
    range: [number, number];
    children: string;
}) {
    const opacity = useTransform(progress, range, [0.12, 1]);
    const y = useTransform(progress, range, [8, 0]);
    return (
        <motion.span style={{ opacity, y }} className="inline-block mr-[0.28em]">
            {children}
        </motion.span>
    );
}
