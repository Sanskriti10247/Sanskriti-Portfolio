import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

// Education Section with Timeline
function Education() {
  const educationData = [
    {
      school: "St. Mary's Convent School",
      degree: "Elementary Education",
      year: "2014 - 2016",
      Percentage: "98%",
      image: "/Education/St.Marys.jpg",
    },
    {
      school: "Radiant International School",
      degree: "Senior Secondary School",
      year: "2016 - 2024",
      Percentage: "95%",
      image: "/Education/Radiant.jpg",
    },
    {
      school: "Scaler School of Technology",
      degree: "Computer Science",
      year: "2024 - 2028",
      CGR: "7",
      image: "/Education/SST.jpg",
    },
    {
      school: "BITS Pilani",
      degree: "BSc in Computer Science",
      year: "2024 - 2027",
      CGPA: "8.78",
      image: "/Education/BitsPilani.jpg",
    },
  ];

  return (
    <section
      id="education"
      className="bg-gray-900 text-white px-8 pt-12 pb-16 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Title */}
        <h2 className="text-6xl font-bold mb-16 text-center text-pink-400 drop-shadow-lg flex items-center justify-center gap-3">
          <FaGraduationCap className="text-pink-400 drop-shadow-lg" />
          Education
        </h2>

        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-gradient-to-b from-pink-500 via-pink-400 to-pink-600 shadow-[0_0_20px_rgba(236,72,153,0.7)] animate-pulse"></div>

        <div className="space-y-16">
          {educationData.map((edu, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`relative w-full md:w-1/2 px-4 py-4 rounded-xl 
                  bg-gradient-to-r from-pink-600/30 via-pink-500/20 to-pink-600/30 
                  shadow-[0_0_20px_rgba(255,105,180,0.5)] hover:shadow-[0_0_40px_rgba(255,105,180,0.8)]
                  transition-all duration-500
                  ${isLeft ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"}`}
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-40 object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-pink-400 mb-2 drop-shadow-md">
                  {edu.degree}
                </h3>
                <p className="text-gray-200 text-base">{edu.school}</p>
                <p className="text-gray-400 italic text-sm">{edu.year}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
