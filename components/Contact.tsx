"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROFILE } from "@/lib/data";
import Magnetic from "./Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

    return (
        <section
            id="contact"
            ref={ref}
            className="relative px-6 md:px-10 py-40 md:py-56 max-w-[1600px] mx-auto text-center overflow-hidden"
        >
            <motion.div style={{ y }} className="flex flex-col items-center">
                <span className="text-xs uppercase tracking-[0.2em] text-ink/40 mb-8">
                    (Contact)
                </span>

                <h2 className="font-display font-medium tracking-tightest leading-[0.85] text-[16vw] md:text-[12vw] xl:text-[10rem]">
                    {["Let's", "build"].map((w, i) => (
                        <span key={i} className="reveal-mask">
                            <motion.span
                                className="inline-block"
                                initial={{ y: "115%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                            >
                                {w}
                            </motion.span>
                            {i === 0 && <span className="inline-block w-[0.3em]" />}
                        </span>
                    ))}
                    <span className="font-serif italic font-normal text-accent">something.</span>
                </h2>

                <Magnetic strength={0.5} className="mt-16">
                    <a
                        href={`mailto:${PROFILE.email}`}
                        className="group relative inline-flex items-center justify-center h-40 w-40 md:h-52 md:w-52 rounded-full bg-ink text-paper font-display text-xl md:text-2xl tracking-tight overflow-hidden"
                    >
                        <span className="relative z-10 flex flex-col items-center gap-1">
                            <span>Say</span>
                            <span className="font-serif italic font-normal">hello</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-paper/60 mt-1">
                                get in touch
                            </span>
                        </span>
                        <span className="absolute inset-0 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-500 ease-smooth" />
                    </a>
                </Magnetic>

                <a
                    href={`mailto:${PROFILE.email}`}
                    className="link-underline mt-10 text-lg tracking-tight text-ink/80"
                >
                    {PROFILE.email}
                </a>
            </motion.div>
        </section>
    );
}
