import React from "react";
import { motion } from "framer-motion";
import BagsHero from '../../assets/Bags/purse1.jpg';
import BagsLifestyle from '../../assets/Bags/purse2.jpg';
import { Link } from "react-router-dom";
export default function Bags() {
  return (
    <div className="relative pt-40 px-6 md:px-20 min-h-screen text-white bg-black">
      <section className="relative h-screen w-full overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={BagsHero}
          alt="Bags Collection"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Bags Collection
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Explore our exclusive range of handcrafted bags — designed for style,
            durability, and everyday comfort. A perfect balance of fashion and
            functionality.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-red-400/50 transition-all duration-300 ease-in-out"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        {[
          {
            title: "Handcrafted",
            text: "Each bag is made with precision and care by skilled artisans.",
          },
          {
            title: "Durable Materials",
            text: "Built with high-quality leather and fabrics for long-lasting use.",
          },
          {
            title: "Stylish & Modern",
            text: "A perfect blend of timeless design and contemporary fashion.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/20 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= LIFESTYLE SECTION ================= */}
      <section className="mt-24 relative pb-20">
        {/* Background with Parallax */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${BagsLifestyle})` }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl"
        >
          {/* Text Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
              Bags for Every Occasion
            </h2>

            <p className="text-gray-200 mb-4 leading-relaxed">
              Whether you’re heading to work, traveling the world, or enjoying
              a casual day out, our bags are designed to match your lifestyle
              with elegance and practicality.
            </p>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Choose from a variety of designs — from sleek leather totes to
              stylish crossbody bags. Each piece is a statement of quality,
              made to carry not just your essentials but also your personality.
            </p>

            <Link to="/bags-page1">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-red-400/50 transition-all duration-300 ease-in-out"
            >
              Discover More
            </motion.button>
            </Link>
          </div>

          {/* Image Side */}
          <motion.img
            src={BagsLifestyle}
            alt="Bags Lifestyle"
            className="rounded-2xl shadow-xl object-cover w-full h-[350px] hover:shadow-gray-400/40 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </section>
    </div>
  );
}
