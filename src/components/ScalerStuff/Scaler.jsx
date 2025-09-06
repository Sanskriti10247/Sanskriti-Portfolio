import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaTicketAlt, FaExternalLinkAlt } from "react-icons/fa";


// Scaler Component for letting people know about SST
function Scaler() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // from .env
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY; 
        const handle = "@Sanskriti_988";

        // 1. Finding channelId from handle
        const searchRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${handle}&key=${apiKey}`
        );
        const searchData = await searchRes.json();
        console.log("Search Data:", searchData);

        if (!searchData.items?.length) return;
        const channelId = searchData.items[0].id.channelId;

        // 2. Getting uploads playlist from channelId
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
        );
        const channelData = await channelRes.json();
        console.log("Channel Data:", channelData);

        const uploadsPlaylistId =
          channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // 3. Fetching latest videos
        const videosRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=3&key=${apiKey}`
        );
        const videosData = await videosRes.json();
        console.log("Videos Data:", videosData);

        if (!videosData.items) return;
        setVideos(
          videosData.items.map((item) => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
          }))
        );
      } catch (err) {
        console.error("Error fetching YouTube videos:", err); // Logging the error for debugging
      }
    };

    fetchVideos();
  }, []);

  return (
    <section
      id="scaler"
      className="bg-gray-950 text-white px-8 py-20 relative overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[25rem] h-[25rem] bg-pink-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-purple-600 rounded-full blur-3xl opacity-20" />

      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
          🚀 Scaler Connect
        </h2>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Explore my journey with Scaler – from opportunities to discounts and
          video insights.
        </p>
      </div>

      {/* NSET + Referral Code */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2"
      >
        {/* NSET Registration */}
        <div className="flex flex-col items-center text-center bg-gray-900/70 p-8 rounded-xl border border-pink-500/30 shadow-lg hover:scale-105 transition-transform">
          <FaExternalLinkAlt className="text-pink-400 text-5xl mb-4" />
          <h3 className="text-2xl font-bold mb-3 text-white">
            Register for NSET
          </h3>
          <p className="text-gray-400 mb-4">
            Take the <strong>Scaler National Scholarship & Entrance Test</strong>{" "}
            today!
          </p>
          <a
            href="https://bit.ly/3UgNo9O"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-400 to-purple-500 px-6 py-3 rounded-lg font-semibold text-white hover:shadow-lg"
          >
            Register Now
          </a>
        </div>

        {/* Referral Code */}
        <div className="flex flex-col items-center text-center bg-gray-900/70 p-8 rounded-xl border border-purple-500/30 shadow-lg hover:scale-105 transition-transform">
          <FaTicketAlt className="text-purple-400 text-5xl mb-4" />
          <h3 className="text-2xl font-bold mb-3 text-white">
            Special Discount
          </h3>
          <p className="text-gray-400 mb-4">
            Use my referral code to get a registration fee discount!
          </p>
          <span className="text-2xl font-extrabold text-pink-400 bg-gray-800 px-6 py-2 rounded-lg tracking-wider">
            KUMAF518
          </span>
        </div>
      </motion.div>

      {/* Special Message */}
<div className="max-w-2xl mx-auto mt-16 text-center">
  <p className="text-gray-300 text-xl italic leading-relaxed">
    “I am developing <span className="text-pink-400 font-semibold">ScalerConnect</span> – 
    a readdressal app for all students to manage their learning journey.<br />
    Soon, it will be built as a <span className="text-purple-400">full-stack app</span>.<br /><br />
    For now, check out these references and my Scaler-related videos below!”
  </p>
</div>


     {/* YouTube Scaler Videos */}
<div className="max-w-5xl mx-auto mt-8 text-center">
  <h3 className="text-3xl font-bold text-white mb-10">
    🎥 Latest Videos on SST
  </h3>
  <div className="grid gap-12 md:grid-cols-3">
    {videos.map((video) => (
      <div key={video.id}>
        <iframe
          width="100%"
          height="220"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        />
        <p className="text-gray-300 mt-4 text-sm">{video.title}</p>
      </div>
    ))}
  </div>


      </div>
    </section>
  );
}

export default Scaler;
