import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import BgVideo from "../../assets/Nitro/nitroshoes.mp4";

export default function Nitro() {
  return (
    <div
      className="pt-24 min-h-screen bg-white text-black px-6 md:px-20 relative">
        <video
                className="absolute inset-0 w-full h-full object-cover"
                src={BgVideo}
                autoPlay
                loop
                muted
                playsInline
              />
      
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-4xl mx-auto text-center mt-32"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide text-white">
          Nitro Series
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Experience lightning speed and unmatched comfort with our Nitro collection. 
          Engineered for performance, built for lifestyle. Step up your sneaker game.
        </p>

        <Link to="/nitro-page1">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          Explore Collection
        </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}
