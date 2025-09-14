import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import codingGirl from "../assets/Coding.json";
import resume from "../assets/Sanskriti_new_Cv.pdf";

// Hero Section
function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center 
                 bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white 
                 relative overflow-hidden px-6 pt-20 md:pt-34"
    >
      {/* Background Blobs */}
      <motion.div
        animate={{ y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-pink-500 
                   rounded-full mix-blend-screen blur-3xl opacity-50"
      />
      <motion.div
        animate={{ y: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-[26rem] h-[26rem] bg-purple-600 
                   rounded-full mix-blend-screen blur-3xl opacity-50"
      />

      {/* Left Side */}
      <div className="z-10 max-w-3xl space-y-6 text-center">
      <motion.h2
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight -mt-8"
>
  Hi, I’m <span className="text-pink-400">Sanskriti</span>
</motion.h2>

        {/* Typewriter Subheading (always centered) */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mt-4 text-center"
        >
          <Typewriter
            words={[
              " Full Stack Developer ",
              " UI/UX Designer ",
              " Problem Solver ",
              " Aspiring Entrepreneur ",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.h3>

        {/* CTA Buttons (always centered) */}
        <div className="flex flex-wrap gap-4 pt-6 justify-center">
          <motion.a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            className="px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg
                       text-white bg-gradient-to-r from-pink-500 to-purple-600
                       shadow-[0_0_25px_rgba(236,72,153,0.7)] transition-all"
          >
            📄 Resume
          </motion.a>
          <motion.a
            href="https://github.com/Sanskriti10247"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            className="px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg
                       text-white bg-gradient-to-r from-purple-600 to-pink-500
                       shadow-[0_0_25px_rgba(236,72,153,0.7)] transition-all"
          >
            💻 GitHub
          </motion.a>
        </div>
      </div>

      {/* Right Side (Lottie Animation) */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] mt-10 md:mt-0 md:ml-20"
      >
        <Lottie animationData={codingGirl} loop />
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm sm:text-base"
      >
        ↓ Scroll to Explore
      </motion.div>
    </section>
  );
}

export default Hero;
