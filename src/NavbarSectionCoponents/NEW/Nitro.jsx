import React from 'react'
import { motion } from 'framer-motion'
import BGImage from "../../assets/Nitro/nitro2.jpg";
import { Link } from 'react-router-dom';

export default function Nitro() {
  return (
    <div
      className="pt-24 min-h-screen bg-white text-black px-6 md:px-20 relative"
      style={{
        backgroundImage: `url(${BGImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
        width: "100%",
        height: "100vh",
      }}
    >
      
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
