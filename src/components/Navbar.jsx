import { motion } from "framer-motion";

function Navbar() {
  const navItems = [
    //The Navbar Pages are Linked to the Sections
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md text-white flex justify-between items-center px-8 py-3 shadow-md z-50"
      >
      {/* Left side */}
      <motion.h1
        className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Let's Code
      </motion.h1>

      {/* Right side */}
      <ul className="flex space-x-8 text-lg">
        {navItems.map((item, idx) => (
          <motion.li
            key={idx}
            whileHover={{ scale: 1.2, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative group"
          >
            <a
              href={item.href}
              className="relative z-10 font-medium transition-colors duration-300"
            >
              {item.name}
            </a>

            <span className="absolute inset-0 w-3 h-3 -left-5 top-1/2 transform -translate-y-1/2 bg-pink-400 rounded-full blur-md opacity-0 group-hover:opacity-100 animate-ping"></span>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
