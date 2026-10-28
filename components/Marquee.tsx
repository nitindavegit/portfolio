"use client";

import { MARQUEE_WORDS } from "@/lib/data";

export default function Marquee() {
    const row = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
    return (
        <section className="border-y border-ink/10 py-6 md:py-8 overflow-hidden bg-paper">
            <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
                {row.map((w, i) => (
                    <span key={i} className="flex items-center gap-10">
                        <span className="font-display text-2xl md:text-4xl tracking-tightest text-ink/80">
                            {w}
                        </span>
                        <span className="text-accent text-2xl md:text-4xl">✦</span>
                    </span>
                ))}
            </div>
        </section>
    );
}
