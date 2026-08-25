import Nav from "@/components/Nav";
import ProgressRail from "@/components/ProgressRail";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Beyond from "@/components/Beyond";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <ProgressRail />
      <Cursor />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Beyond />
      </main>
      <Footer />
    </>
  );
}
