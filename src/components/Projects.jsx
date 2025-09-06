import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Sanskriti10247/repos?per_page=100")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (repo) => repo.name.trim().toLowerCase() !== "googlecolabworks" // Excluding the 'googlecolabworks' repo
        );
        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return (
      <section className="bg-gray-950 text-white px-8 py-20">
        <h2 className="text-4xl font-bold text-center">Loading Projects...</h2>
      </section>
    );
  }

  // Separating originals and forks
  const originals = repos.filter((r) => !r.fork);
  const forks = repos.filter((r) => r.fork);

  // Ensure Sanskriti10247 and Sanskriti-Portfolio appears first
  const prioritized = [
    ...originals.filter(
      (r) =>
        r.name.toLowerCase() === "sanskriti10247" ||
        r.name.toLowerCase() === "sanskriti-portfolio"
    ),
    ...originals.filter(
      (r) =>
        r.name.toLowerCase() !== "sanskriti10247" &&
        r.name.toLowerCase() !== "sanskriti-portfolio"
    ),
  ];

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white px-8 py-20 relative overflow-hidden"
    >
      {/* === Title ==== */}
      <h2 className="text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        💻 Projects
      </h2>

      {/* Originals */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {prioritized.map((repo, i) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-gray-900/80 border border-green-500/30 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform flex flex-col"
          >
            {/* Repo Preview */}
            <img
              src={`https://opengraph.githubassets.com/1/Sanskriti10247/${repo.name}`}
              alt={repo.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-green-400 mb-2">
                {repo.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-lg italic flex-1">
                “{repo.description || "No description provided"}”
              </p>

              <div className="mt-4 flex gap-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:underline"
                >
                  <FaGithub /> Repo
                </a>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-400 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== Forked Section ===== */}
      {forks.length > 0 && (
        <div className="mt-32">
          <h3 className="text-3xl font-bold text-center text-yellow-400 mb-10">
            Forked Repos for Contributions
          </h3>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {forks.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-4 rounded-lg bg-gray-800 border border-yellow-500/30 shadow flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <FaCodeBranch className="text-yellow-400" />
                <span className="font-medium">{repo.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
