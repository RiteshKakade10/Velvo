import React from 'react'
import { motion } from 'framer-motion'
import BGImage from "../../assets/MEn/mensNewBg.jpg";

export default function MensNewArrival() {
  return (
    <div
      className="pt-40 pb-20 px-4 md:px-16 text-white min-h-screen relative"
      style={{
        backgroundImage: `url(${BGImage})`,
        backgroundSize: "cover",      
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        width: "100%",                
      }}
    >

      
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10">
       <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-center mb-10 
                    bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 
                    bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,0,0.7)] 
                    tracking-wide"
        >
          Men's New Arrivals
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-200 italic tracking-wide text-center mt-4"
        >
          "Style isn’t just what you wear, it’s how you carry yourself."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-200 italic tracking-wide text-center mt-2"
        >
          "Redefine your wardrobe with the latest trends in menswear."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-gray-200 italic tracking-wide text-center mt-2"
        >
          "Velvo – crafted for men who stand out."
        </motion.p>

       
       

       
      </div>
    </div>
  )
}
