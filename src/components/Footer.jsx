//Imports for social media icons
import {
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaMedium,
    FaQuora,
    FaEnvelope,
    FaYoutube,
  } from "react-icons/fa";
  
  function Footer() {
    return (
      <footer className="relative bg-gray-900 text-gray-400 py-10">
        {/* Gradient line on top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-purple-500" />
  
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex justify-center flex-wrap gap-12 text-4xl">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sanskriti988/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
  
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@Sanskriti_988"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <FaYoutube />
            </a>
  
            {/* Twitter (X) */}
            <a
              href="https://x.com/Sanskriti988"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              <FaTwitter />
            </a>
  
            {/* Instagram */}
            <a
              href="https://www.instagram.com/sansk_ritiiiiiiii/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
  
            {/* Medium */}
            <a
              href="https://medium.com/@kumarisanskriti889"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <FaMedium />
            </a>
  
            {/* Quora */}
            <a
              href="https://www.quora.com/profile/Sanskriti-628"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <FaQuora />
            </a>
  
            {/* Mail */}
            <a
              href="mailto:Kumarisanskriti889@gmail.com"
              className="hover:text-purple-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
  
          {/* Footer text */}
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Sanskriti. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  