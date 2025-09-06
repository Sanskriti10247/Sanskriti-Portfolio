
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Scaler from "../components/ScalerStuff/Scaler";

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
