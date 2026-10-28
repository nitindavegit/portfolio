import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <SmoothScroll>
            <Cursor />
            <Navbar />
            <main className="relative">
                <Hero />
                <Marquee />
                <About />
                <Expertise />
                <Work />
                <Experience />
                <Contact />
                <Footer />
            </main>
        </SmoothScroll>
    );
}
