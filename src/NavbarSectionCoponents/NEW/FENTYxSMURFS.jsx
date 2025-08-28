import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/New1/FentySmurfs/Image.jpeg';
import img2 from '../../assets/New1/FentySmurfs/Image2.jpeg';
import img3 from '../../assets/New1/FentySmurfs/Image3.jpeg';
import img4 from '../../assets/New1/FentySmurfs/Image4.jpeg';
import img5 from '../../assets/New1/FentySmurfs/Image5.jpeg';
import heroBg from '../../assets/New1/FentySmurfs/bg.jpg';

const shoes = [
  { name: 'Smurf Blue Blaze', price: '₹8,499', image: img1 },
  { name: 'Smurf Mono Fade', price: '₹9,199', image: img2 },
  { name: 'Glowstep Skycore', price: '₹7,899', image: img3 },
  { name: 'Smurf Mono Fade', price: '₹9,199', image: img4 },
  { name: 'Glowstep Skycore', price: '₹7,899', image: img5 },
];

export default function FENTYxSMURFS() {
  return (
    <div
      className="min-h-screen flex flex-col text-black"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <main className="flex-grow pt-28 pb-16 px-6 md:px-20 relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-20 px-6"
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

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-gray-300 text-left text-sm md:text-base space-y-2 max-w-xl mx-auto mb-10"
          >
            <li>• Oversized hoodies, bold puffers, street-style staples</li>
            <li>• Statement jewelry & bags with Smurf detailing</li>
            <li>• Limited-edition unisex sneakers</li>
            <li>• Sustainable fabrics with high-fashion finishes</li>
          </motion.ul>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-700 
                       text-white font-semibold rounded-full shadow-lg hover:shadow-xl 
                       transition-all duration-300"
          >
            Explore the Drop
          </motion.button>
        </motion.section>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {shoes.map((shoe, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl
                           border border-white/20 transform transition-all duration-300"
              >
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-white">{shoe.name}</h3>
                <p className="text-indigo-300 font-medium">{shoe.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
