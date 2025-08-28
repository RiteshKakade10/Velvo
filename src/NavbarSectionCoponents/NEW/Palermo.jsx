import React from 'react'
import { motion } from 'framer-motion';
import Image1 from '../../assets/palmero/palmerobg.jpg';
import Image2 from '../../assets/palmero/standLadies1.jpg';

export default function Palermo() {
  return (
    <div className="relative pt-24 px-6 md:px-20 min-h-screen text-white bg-black">
      {/* Hero Section with Background */}
      <section
        className="relative bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundImage: `url(${Image2})` }}
      >
        {/* Dark Overlay */}
       

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto text-center py-24 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
            Palermo Collection
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Discover timeless elegance with the Palermo Collection.
            Designed with premium materials and modern aesthetics to
            elevate your lifestyle and fashion sense.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-blue-400/50 transition-all duration-300 ease-in-out"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        {[
          { title: "Premium Quality", text: "Handcrafted using top-quality materials for lasting durability and style." },
          { title: "Comfort Fit", text: "Engineered for all-day comfort with superior cushioning technology." },
          { title: "Timeless Design", text: "Minimalist, modern design that pairs perfectly with any outfit." },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/20 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.text}</p>
          </div>
        ))}
      </motion.div>
\
      {/* Palermo City Fashion Section */}
      <section className="mt-24 relative pb-20">
        {/* Background with Parallax feel */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${Image1})` }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl"
        >
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white">
              Palermo City Fashion
            </h2>

            <p className="text-gray-200 mb-4 leading-relaxed">
              Palermo, the cultural heart of Sicily, is more than just a city – 
              it’s a runway of Mediterranean style. Known for its vibrant streets, 
              artisanal markets, and timeless architecture, Palermo inspires fashion 
              that blends elegance with effortless charm.
            </p>
            <p className="text-gray-200 mb-6 leading-relaxed">
              From bold patterns influenced by Sicilian tradition to modern tailoring, 
              the city’s fashion reflects a balance of heritage and innovation. 
              This spirit is what we capture in the Palermo Collection — where classic 
              Italian aesthetics meet contemporary trends.
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-blue-400/50 transition-all duration-300 ease-in-out"
            >
              Discover More
            </motion.button>
          </div>

          {/* Right - Image */}
          <motion.img
            src={Image1}
            alt="Palermo City Fashion"
            className="rounded-2xl shadow-xl object-cover w-full h-[350px] hover:shadow-grey-400/40 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </section>
    </div>
  )
}
