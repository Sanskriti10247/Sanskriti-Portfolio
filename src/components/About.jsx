import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLightbulb, FaCogs, FaUsers, FaBookOpen, FaTasks, FaHeartbeat } from "react-icons/fa";
import avatar from "../assets/avatar.jpg";

// Importing Icons in the About section
function About() {
  const qualities = [
    { icon: <FaLightbulb />, text: "I love asking why and finding smarter ways to solve problems" },
    { icon: <FaCogs />, text: "I’m not afraid of putting in long hours or trying again when something doesn’t work" },
    { icon: <FaHeartbeat />, text: "I stay calm under pressure and push through when things get tough" },
    { icon: <FaTasks />, text: "I take pride in staying organized and following through on commitments" },
    { icon: <FaUsers />, text: "I enjoy collaborating, learning from others, and growing with every experience" },
    { icon: <FaBookOpen />, text: "I’m a quick learner, always eager to expand my knowledge and skills" },
  ];

  return (
    <section
      id="about"
      className="bg-gray-900 text-white px-8 pt-12 pb-16 relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <img
              src={avatar}
              alt="Sanskriti Avatar"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-pink-500 shadow-[0_0_50px_rgba(236,72,153,0.8)] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Right side  */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
      
          <h2 className="text-6xl font-bold mb-6 text-pink-400 drop-shadow-lg text-center md:text-left">
            About Me
          </h2>

          {/* Paragraphs to know me better*/}
          <p className="text-xl text-pink-300 mb-8 font-semibold">
            <Typewriter
              words={[
                "Curious. Persistent. Creative. 🌸✨",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>

          {/* Core Writeups in Highlight Cards */}
          <div className="space-y-6">
            {[
              "-I believe that hard work, curiosity, and consistency can unlock almost anything.",
              "-I never stop at 'good enough' — I always push my limits and explore the why behind things.",
              "-Every challenge is an opportunity to grow both technically and personally.",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.4 + i * 0.2 }}
                className="p-4 rounded-lg bg-gradient-to-r from-pink-600/20 via-pink-500/10 to-pink-600/20 shadow-md hover:shadow-lg transition-all"
              >
                <p className="text-lg text-gray-200">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Bullet Points with Icons */}
          <motion.ul
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {qualities.map((q, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/80 transition-colors"
              >
                <span className="text-pink-400 text-xl">{q.icon}</span>
                <span className="text-gray-300">{q.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
