import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const shorts = [
  { id: 1, name: "Velvo Classic Cotton Shorts", price: "₹1,299", image: "https://via.placeholder.com/400x500.png?text=Cotton+Shorts", category: "Cotton" },
  { id: 2, name: "Velvo Sports Active Shorts", price: "₹1,499", image: "https://via.placeholder.com/400x500.png?text=Sports+Shorts", category: "Sports" },
  { id: 3, name: "Velvo Denim Casual Shorts", price: "₹1,799", image: "https://via.placeholder.com/400x500.png?text=Denim+Shorts", category: "Denim" },
  { id: 4, name: "Velvo Linen Summer Shorts", price: "₹1,599", image: "https://via.placeholder.com/400x500.png?text=Linen+Shorts", category: "Linen" },
];

const categories = ["All", "Cotton", "Sports", "Denim", "Linen"];

function Shorts() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredShorts =
    activeCategory === "All"
      ? shorts
      : shorts.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen p-0 text-white bg-black relative">
      {/* Hero Section */}
      <section className="relative h-[50vh] rounded-2xl overflow-hidden shadow-2xl mx-4 mt-8">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1400&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/58"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto text-center py-24 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
            Velvo Men’s Shorts Collection
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Premium fabrics, modern designs, and effortless comfort—perfect for every occasion.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() =>
              document
                .getElementById("shorts-products")
                .scrollIntoView({ behavior: "smooth" })
            }
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-blue-400/50 transition-all duration-300 ease-in-out"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </section>

      {/* Sticky Categories */}
      <div
        id="shorts-products"
        className="sticky top-0 z-20 bg-black/60 backdrop-blur-md rounded-xl shadow-md flex justify-center gap-4 p-3 mt-8 mb-8 mx-4"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 text-sm font-semibold rounded-full transition-all duration-300 ${
              activeCategory === cat
                ? "bg-amber-400 text-black shadow-md"
                : "text-white hover:text-amber-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Shorts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 pb-12">
        {filteredShorts.map((short) => (
          <motion.div
            key={short.id}
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden group relative border border-white/20 hover:border-white/40 hover:shadow-2xl transition-all"
          >
            <img
              src={short.image}
              alt={short.name}
              className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-white tracking-wide">
                {short.name}
              </h2>
              <p className="text-lg font-bold text-amber-400 mt-2">
                {short.price}
              </p>
            </div>

            {/* Hover Actions */}
            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition">
                <Heart className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Shorts;
