import { motion } from "framer-motion";
import { FaEnvelope, FaHandshake } from "react-icons/fa";

import GoogleMeetLogo from "../assets/Google_Meet-Logo.wine.svg"; 
import FaceTimeLogo from "../assets/Facetime.jpeg";

//Contact Page for getting in touch, if needed!
function Contact() {
  return (
<section id="contact" className="bg-gray-950 text-white px-8 pt-2 pb-10 relative overflow-hidden">


      {/* ===== Title ===== */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <FaHandshake className="text-pink-400 text-5xl" />
        <h2 className="text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
          Get in touch
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto bg-gray-900/80 border border-pink-500/30 rounded-xl p-10 shadow-lg space-y-12"
      >
        {/* FaceTime Call */}
        <div className="flex flex-col items-center text-center">
          <a
            href="facetime://your-number-or-appleid"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={FaceTimeLogo}
              alt="FaceTime Logo"
              className="w-24 h-24 mb-4 bg-white rounded-full p-3"
            />
          </a>
          <strong className="text-white text-xl">Schedule a Call</strong>
        </div>

        {/* Google Meet (correct logo) */}
        <div className="flex flex-col items-center text-center">
          <a
            href="https://calendar.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={GoogleMeetLogo}
              alt="Google Meet Logo"
              className="w-24 h-24 mb-4 rounded-full bg-white p-2"
            />
          </a>
          <strong className="text-white text-xl">Schedule a Google Meet</strong>
        </div>

        {/* Emails */}
        <div className="flex flex-col items-center text-center">
          <FaEnvelope className="text-purple-400 text-5xl mb-4" />
          <strong className="text-white text-xl mb-2">Write a Mail to:</strong>
          <div className="space-y-2">
            <a
              href="mailto:Kumarisanskriti889@gmail.com"
              className="block text-gray-300 hover:underline"
            >
              Kumarisanskriti889@gmail.com
            </a>
            <a
              href="mailto:Sanskriti.24bcs10247@sst.scaler.com"
              className="block text-gray-300 hover:underline"
            >
              Sanskriti.24bcs10247@sst.scaler.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
