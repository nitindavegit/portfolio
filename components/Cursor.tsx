"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
    const [hovering, setHovering] = useState(false);
    const [hidden, setHidden] = useState(true);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
    const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setHidden(false);
        };
        const overInteractive = (e: MouseEvent) => {
            const t = e.target as HTMLElement;
            if (t.closest("a, button, [data-cursor]")) setHovering(true);
            else setHovering(false);
        };
        const leave = () => setHidden(true);

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", overInteractive);
        document.documentElement.addEventListener("mouseleave", leave);

        // activate custom-cursor styling only when fine pointer
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            document.body.classList.add("custom-cursor-active");
        }

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", overInteractive);
            document.documentElement.removeEventListener("mouseleave", leave);
            document.body.classList.remove("custom-cursor-active");
        };
    }, [x, y]);

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
            style={{ x: ringX, y: ringY }}
            animate={{ opacity: hidden ? 0 : 1 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className="rounded-full border border-ink/60 flex items-center justify-center"
                animate={{
                    width: hovering ? 56 : 28,
                    height: hovering ? 56 : 28,
                    backgroundColor: hovering ? "rgba(255,77,46,0.08)" : "rgba(0,0,0,0)",
                    borderColor: hovering ? "rgba(255,77,46,0.9)" : "rgba(10,10,10,0.4)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{ translateX: "-50%", translateY: "-50%" }}
            >
                <motion.span
                    className="block rounded-full bg-accent"
                    animate={{ scale: hovering ? 0 : 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    style={{ width: 4, height: 4 }}
                />
            </motion.div>
        </motion.div>
    );
}
