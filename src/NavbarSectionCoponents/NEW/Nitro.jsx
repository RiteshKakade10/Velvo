import React from 'react'
import { motion } from 'framer-motion'

export default function Nitro() {
  return (
    <div className="pt-24 min-h-screen bg-neutral-950 text-white px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide text-white">
          Nitro Series
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Experience lightning speed and unmatched comfort with our Nitro collection. 
          Engineered for performance, built for lifestyle. Step up your sneaker game.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          Explore Collection
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1600180758890-6c87457f39b9" // You can replace this with your Velvo shoe image
          alt="Nitro Shoe"
          className="w-full max-w-3xl rounded-2xl shadow-xl"
        />
      </motion.div>
    </div>
  )
}
