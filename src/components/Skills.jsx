import { motion } from "framer-motion";
// Importing Icons for Skills Mastered
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFirebase,
  SiVercel,
  SiLinux,
  SiGooglecloud,
  SiFigma,
  SiAdobephotoshop,
  SiRedux,
  SiGraphql,
} from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Languages",
      color: "from-yellow-400 to-orange-500",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "Python", icon: <SiPython className="text-green-400" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
      ],
    },
    {
      title: "Databases",
      color: "from-green-400 to-emerald-600",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-orange-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      ],
    },
    {
      title: "DevOps & Platforms",
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Git", icon: <SiGit className="text-red-500" /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
        { name: "Linux", icon: <SiLinux className="text-orange-400" /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-400" /> },
      ],
    },
    {
      title: "Design & Collaboration",
      color: "from-pink-400 to-violet-500",
      skills: [
        { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-950 text-white px-8 py-20 relative overflow-hidden"
>
   
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-pink-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-600 rounded-full blur-3xl opacity-20" />

      <h2 className="text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
        ⚡Skills 
      </h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-transparent h-full opacity-50" />

        <div className="space-y-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-gray-900/70 backdrop-blur-lg shadow-lg border border-gray-700"
            >
              {/* Category */}
              <h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}
              >
                {cat.title}
              </h3>

              {/* Skills  */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
                {cat.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="text-5xl mb-2 transition-transform duration-300 group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]">
                      {skill.icon}
                    </div>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
