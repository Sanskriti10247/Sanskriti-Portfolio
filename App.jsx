
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

//The Home Page
function Home() {
  return (

    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Scaler/>
      <Achievements />
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default Home;
