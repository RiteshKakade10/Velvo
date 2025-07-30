import React from 'react'
import { motion } from 'framer-motion'

export default function Palermo() {
  return (
    <div className="pt-24 bg-neutral-950 text-white px-6 md:px-20 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide text-white">
          Palermo Collection
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Discover timeless elegance with the Palermo Collection. 
          Designed with premium materials and modern aesthetics to 
          elevate your lifestyle and fashion sense.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          Shop Now
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1606813908475-3dba7c9a4b8c"
          alt="Palermo Shoes"
          className="w-full max-w-3xl rounded-2xl shadow-xl"
        />
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <div className="bg-neutral-900 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-gray-400 text-sm">
            Handcrafted using top-quality materials for lasting durability and style.
          </p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Comfort Fit</h3>
          <p className="text-gray-400 text-sm">
            Engineered for all-day comfort with superior cushioning technology.
          </p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Timeless Design</h3>
          <p className="text-gray-400 text-sm">
            Minimalist, modern design that pairs perfectly with any outfit.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
