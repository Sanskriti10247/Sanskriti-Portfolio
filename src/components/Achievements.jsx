import { useState } from "react";
import { motion } from "framer-motion";
// Importing Icons
import {
  FaMedal,
  FaTrophy,
  FaCertificate,
  FaAward,
  FaListOl,
  FaUserGraduate,
  FaCrown,
  FaUsers,
  FaUtensils,
  FaRobot,
  FaLightbulb,
  FaCode,
  FaGithub,
  FaLaptopCode,
  FaBook,
} from "react-icons/fa";

// Importing BADGES
import badge50 from "../assets/Badges/50DaysBadge.gif";
import badge100 from "../assets/Badges/100Daysbadge.gif";
import sqlBadge from "../assets/Badges/50SqlQuestions.gif";
import julyBadge from "../assets/Badges/JulyBadge.gif";
import augustBadge from "../assets/Badges/AugustBadge.gif";
import codechefBadge from "../assets/Badges/Codechef.jpg";
import pullShark from "../assets/Badges/PullShark.jpg";
import gssocBadge from "../assets/Badges/GSSoC24.jpg";
import postmanBadge from "../assets/Badges/Postman.jpg";
import ssocBadge from "../assets/Badges/Ssoc24.jpg";
import oscBadge from "../assets/Badges/OSC.jpg";
import duolingoJuly from "../assets/Badges/DuolingoJulyBadge.jpeg";
import DaysDuo from "../assets/Badges/Duo250Days.jpeg";

function Achievements() {
  // Hall of Fame List
  const awards = [
    { year: "Class 6", text: "Inter School Swimming Competition – Bronze Medal", icon: <FaMedal className="text-orange-400 text-2xl" /> },
    { year: "Class 7", text: "Behes Debater – Silver Medal", icon: <FaMedal className="text-gray-300 text-2xl" /> },
    { year: "Class 8", text: "All Asia 11th Rank Debater – WSC", icon: <FaListOl className="text-yellow-300 text-2xl" /> },
    { year: "Class 10", text: "Dainik Jagran Medhavi Chatra Award", icon: <FaTrophy className="text-yellow-400 text-2xl" /> },
    { year: "Multiple Years", text: "Scholar’s Award ×4", icon: <FaCertificate className="text-pink-400 text-2xl" /> },
    { year: "College 1st Yr", text: "Tech Excellence Award – Scaler", icon: <FaAward className="text-purple-400 text-2xl" /> },
  ];

  // Leadership Roles
  const schoolLeadership = [
    { role: "Prefect to the VP", place: "Radiant International School", year: "Class 9 (2020–21)", icon: <FaCrown className="text-yellow-400 text-3xl" /> },
    { role: "Dy. Head Girl", place: "Radiant International School", year: "Class 11 (2022–23)", icon: <FaUserGraduate className="text-pink-400 text-3xl" /> },
  ];

  const collegeLeadership = [
    { role: "Core Member – E-Cell", place: "Scaler School of Technology", year: "College 1st Yr", icon: <FaLightbulb className="text-red-400 text-3xl" /> },
    { role: "Creator’s Club Elite", place: "Scaler School of Technology", year: "College 1st Yr", icon: <FaUsers className="text-purple-400 text-3xl" /> },
    { role: "Core Food Committee Member", place: "Scaler School of Technology", year: "College 1st Yr", icon: <FaUtensils className="text-green-400 text-3xl" /> },
    { role: "Drone Club – Member", place: "Scaler School of Technology", year: "College 1st Yr", icon: <FaRobot className="text-blue-400 text-3xl" /> },
  ];

  // GitHub & Dev
  const devAchievements = [
    { title: "GSSoC '24 Contributor", desc: "Contributed to Open Source in GirlScript Summer of Code", icon: <FaAward className="text-pink-400 text-3xl" /> },
    { title: "Postman Student Expert", desc: "Certified API Testing & Development", icon: <FaCertificate className="text-orange-400 text-3xl" /> },
    { title: "SSOC Contributor", desc: "Social Summer of Code – Open Source Contributions", icon: <FaMedal className="text-green-400 text-3xl" /> },
    { title: "OSC Contributor", desc: "Open Source Connect – Community Contributions", icon: <FaMedal className="text-blue-400 text-3xl" /> },
  ];

  // CP Platforms
  const cpPlatforms = [
    { name: "CodeChef", link: "https://www.codechef.com/users/sanskriti_988", icon: <FaCode className="text-purple-400 text-3xl" /> },
    { name: "LeetCode", link: "https://leetcode.com/u/Sanskriti10247/", icon: <FaLaptopCode className="text-yellow-400 text-3xl" /> },
    { name: "AtCoder", link: "https://atcoder.jp/users/Sanskriti889", icon: <FaCode className="text-red-400 text-3xl" /> },
    { name: "Codeforces", link: "https://codeforces.com/profile/Sanskriti10247", icon: <FaCode className="text-blue-400 text-3xl" /> },
    { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/user/sanskriti10247/", icon: <FaBook className="text-green-400 text-3xl" /> },
  ];

  // Badges & Certifications
  const badgeCategories = {
    LeetCode: [
      { name: "50 days of LeetCode", img: badge50 },
      { name: "100 days of LeetCode", img: badge100 },
      { name: "50 SQL Queries", img: sqlBadge },
      { name: "July LeetCoding Challenge", img: julyBadge },
      { name: "August LeetCoding Challenge", img: augustBadge },
    ],
    CodeChef: [{ name: "CodeChef Badge", img: codechefBadge }],
    Github: [{ name: "Pull Shark", img: pullShark }],
    GSSoC: [{ name: "GSSoC Badge", img: gssocBadge }],
    Postman: [{ name: "Postman Student Expert", img: postmanBadge }],
    SSOC: [{ name: "SSOC Contributor", img: ssocBadge }],
    OSC: [{ name: "OSC Contributor", img: oscBadge }],
    Duolingo: [{ name: "Duolingo July Badge", img: duolingoJuly }, { name: "Duolingo 250 Days", img: DaysDuo }],
  };

  const [activeCategory, setActiveCategory] = useState("All");
  const allBadges = Object.values(badgeCategories).flat();
  const displayedBadges = activeCategory === "All" ? allBadges : badgeCategories[activeCategory];

  return (
    <section id="achievements" className="bg-gray-950 text-white px-4 sm:px-6 md:px-8 pb-12 relative overflow-x-hidden">
      {/* ===== Title ===== */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
        🏆 Achievements
      </h2>

      {/* Academics Section */}
      <div className="mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-400 mb-8 flex justify-center items-center gap-3">
          <FaBook className="text-blue-400 text-3xl" /> Academics
        </h3>

        {/* CP Tracker */}
        <div className="mb-12">
          <h4 className="text-xl sm:text-2xl font-semibold text-center text-green-300 mb-6">
            CP Tracker
          </h4>
          <div className="flex justify-center mb-10">
            <iframe
              src="https://codolio.com/profile/Sanskriti988"
              title="Codolio Profile"
              className="w-full max-w-4xl h-[300px] sm:h-[400px] md:h-[450px] rounded-xl border border-green-400"
            ></iframe>
          </div>
        </div>

        {/* CP Platforms */}
        <div className="mb-16">
          <h4 className="text-xl sm:text-2xl font-semibold text-center text-yellow-300 mb-6">
            CP Platforms
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {cpPlatforms.map((p, i) => (
              <motion.a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="p-6 rounded-xl bg-gray-900/70 border border-green-500/30 shadow-lg hover:scale-105 transition-transform flex flex-col items-center text-center"
              >
                <div className="mb-3">{p.icon}</div>
                <h4 className="text-lg font-bold text-yellow-300">{p.name}</h4>
              </motion.a>
            ))}
          </div>
        </div>

        {/* GitHub & Dev Section */}
        <div>
          <h4 className="text-xl sm:text-2xl font-semibold text-center text-pink-300 mb-6 flex justify-center items-center gap-2">
            <FaGithub className="text-2xl" /> GitHub & Dev
          </h4>

          {/* GitHub Stats */}
          <div className="flex justify-center mb-10 px-2">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Sanskriti10247&show_icons=true&theme=radical"
              alt="GitHub Stats"
              className="w-full max-w-lg rounded-lg shadow-lg border border-pink-400"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {devAchievements.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="p-6 rounded-xl bg-gray-900/70 border border-gray-500/30 shadow-lg hover:scale-105 transition-transform flex flex-col items-center"
              >
                {d.icon}
                <h4 className="text-xl font-bold text-yellow-300 mt-2">{d.title}</h4>
                <p className="text-gray-300">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mb-24 sm:mb-32">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-purple-400 mb-12">
          Leadership & Roles
        </h3>
        <div className="max-w-5xl mx-auto space-y-16">
          {/* RIS */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-center text-pink-300 mb-8">
              Leadership at RIS (Radiant International School)
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              {schoolLeadership.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="p-6 rounded-xl bg-gray-900/70 border border-pink-500/30 shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
                >
                  {l.icon}
                  <h4 className="text-xl font-bold text-yellow-300 mt-2">{l.role}</h4>
                  <p className="text-gray-300">{l.place}</p>
                  <p className="text-sm text-gray-400">{l.year}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SST */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-center text-purple-300 mb-8">
              Leadership at SST (Scaler School of Technology)
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              {collegeLeadership.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="p-6 rounded-xl bg-gray-900/70 border border-purple-500/30 shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
                >
                  {l.icon}
                  <h4 className="text-xl font-bold text-pink-300 mt-2">{l.role}</h4>
                  <p className="text-gray-300">{l.place}</p>
                  <p className="text-sm text-gray-400">{l.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificates & Awards Section */}
      <div className="mb-24 sm:mb-32">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-yellow-400 mb-12">
          Hall of Fame
        </h3>

        {/* List of Awards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {awards.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-5 rounded-lg bg-pink-600/40 shadow-lg border border-pink-500/30 flex items-center gap-4 hover:scale-105 transition-transform"
            >
              {m.icon}
              <div>
                <p className="font-bold text-yellow-300">{m.year}</p>
                <p>{m.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges Section */}
        <div className="mt-16">
          <h4 className="text-xl sm:text-2xl font-semibold text-center text-green-300 mb-8">
            Badges & Certifications
          </h4>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-lg ${
                activeCategory === "All" ? "bg-green-500 text-black" : "bg-gray-800 text-white"
              }`}
            >
              All
            </button>
            {Object.keys(badgeCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg ${
                  activeCategory === category ? "bg-green-500 text-black" : "bg-gray-800 text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Badges Display */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {displayedBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center bg-gray-900/70 p-3 sm:p-4 rounded-xl shadow-lg border border-green-400/30 hover:scale-105 transition-transform"
              >
                <a href={badge.img} target="_blank" rel="noopener noreferrer">
                  <img
                    src={badge.img}
                    alt={badge.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain rounded-lg cursor-pointer"
                  />
                </a>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-center">{badge.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
