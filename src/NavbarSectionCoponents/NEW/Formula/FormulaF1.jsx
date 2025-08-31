import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import F1Bg from '../../../assets/FormulaF1/formula_dress2.jpeg';  
import bgVid from '../../../assets/FormulaF1/bg.mp4';

export default function FormulaF1() {
  return (
    <div className="relative pt-24 px-6 md:px-20 min-h-screen text-white bg-black">
      <section className="relative rounded-2xl overflow-hidden shadow-2xl h-[80vh] flex items-center justify-center">
        
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVid}
          autoPlay
          loop
          muted
          playsInline
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
            Formula F1 Collection
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Experience the speed, power, and precision of Formula 1.  
            Inspired by cutting-edge engineering and adrenaline-fueled design,  
            this collection captures the essence of the racing world.
          </p>

          {/* <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 ease-in-out"
          >
            Shop Now
          </motion.button> */}
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
          { title: "Racing Precision", text: "Inspired by F1 engineering with performance-driven designs." },
          { title: "Aerodynamic Comfort", text: "Crafted for both speed and everyday wear with advanced materials." },
          { title: "Bold Aesthetics", text: "Stand out with styles influenced by the adrenaline of racing circuits." },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/20 hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.text}</p>
          </div>
        ))}
      </motion.div>

      {/* F1 Racing Lifestyle Section */}
      <section className="mt-24 relative pb-20">
        {/* Background with Parallax feel */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${F1Bg})` }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl"
        >
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Formula 1 Lifestyle
            </h2>

            <p className="text-gray-200 mb-4 leading-relaxed">
              Formula 1 is more than just a sport — it’s a way of life. From Monaco 
              to Monza, the world’s most iconic tracks inspire a culture of speed, 
              innovation, and passion.
            </p>
            <p className="text-gray-200 mb-6 leading-relaxed">
              The Formula F1 Collection embodies this spirit — merging the thrill 
              of racing with fashion-forward design, so you can carry the energy of 
              the track wherever you go.
            </p>

            <Link to="/formulapage1">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 ease-in-out"
            >
              Discover More
            </motion.button>
            </Link>
          </div>

          {/* Right - Image */}
          <motion.img
            src={F1Bg}
            alt="Formula 1 Lifestyle"
            className="rounded-2xl shadow-xl object-cover w-full h-[350px] hover:shadow-red-400/40 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </section>
    </div>
  );
}
