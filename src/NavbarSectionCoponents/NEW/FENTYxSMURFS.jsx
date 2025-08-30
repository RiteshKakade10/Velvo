import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/New1/FentySmurfs/Image.jpeg';
import img2 from '../../assets/New1/FentySmurfs/Image2.jpeg';
import img3 from '../../assets/New1/FentySmurfs/Image3.jpeg';
import img4 from '../../assets/New1/FentySmurfs/Image4.jpeg';
import img5 from '../../assets/New1/FentySmurfs/Image5.jpeg';
import heroBg from '../../assets/New1/FentySmurfs/bg.jpg';
import BgVideo from "../../assets/New1/FentySmurfs/fentysf.mp4";

const shoes = [
  { name: 'Smurf Blue Blaze', price: '₹8,499', image: img1 },
  { name: 'Smurf Mono Fade', price: '₹9,199', image: img2 },
  { name: 'Glowstep Skycore', price: '₹7,899', image: img3 },
  { name: 'Smurf Mono Fade', price: '₹9,199', image: img4 },
  { name: 'Glowstep Skycore', price: '₹7,899', image: img5 },
];

export default function FENTYxSMURFS() {
  return (
    <div className="flex flex-col text-black">
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
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
          className="relative z-10 px-6"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-300 to-indigo-600"
          >
            FENTY x THE SMURFS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base md:text-lg text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed"
          >
            Rihanna’s iconic fashion house, FENTY, partners with the legendary Smurfs
            for a bold and playful streetwear capsule. High-fashion meets blue nostalgia
            in a drop that’s as fierce as it is fun.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-700 
                       text-white font-semibold rounded-full shadow-lg hover:shadow-xl 
                       transition-all duration-300"
          >
            Explore the Drop
          </motion.button>
        </motion.div>
      </section>
      <main
        className="flex-grow pt-28 pb-16 px-6 md:px-20 relative bg-neutral-950">
    
        {/* Product Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-20"
        >
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
            Click here to buy products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {shoes.map((shoe, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl 
                          rounded-3xl shadow-lg border border-white/20 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 
                                      text-white text-sm font-semibold rounded-full shadow-md hover:opacity-90 transition">
                      Shop Now
                    </button>
                  </div>
                </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-indigo-300 transition">
          {shoe.name}
        </h3>
        <p className="text-lg font-semibold text-indigo-400">{shoe.price}</p>
      </div>
    </motion.div>
  ))}
</div>
        </motion.section>
      </main>
    </div>
  );
}
