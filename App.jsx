import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import About from "./src/components/About";
import Skills from "./src/components/Skills";
import Education from "./src/components/Education";
import Projects from "./src/components/Projects";
import Achievements from "./src/components/Achievements";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import Scaler from "./src/components/ScalerStuff/Scaler";

function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
    });

    // Animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup when Home is unmounted
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Scaler />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
