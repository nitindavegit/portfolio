"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
    text: string;
    className?: string;
    delay?: number;
    stagger?: number;
    once?: boolean;
};

export default function AnimatedText({
    text,
    className = "",
    delay = 0,
    stagger = 0.04,
    once = true,
}: Props) {
    const words = text.split(" ");
    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={i} className="reveal-mask">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "110%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once, margin: "-10% 0px" }}
                        transition={{ duration: 0.8, ease, delay: delay + i * stagger }}
                    >
                        {word}
                        {i < words.length - 1 ? "\u00A0" : ""}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
