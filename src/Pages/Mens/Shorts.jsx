import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const shorts = [
  {
    id: 1,
    name: "Velvo Classic Cotton Shorts",
    price: "₹1,299",
    image: "https://via.placeholder.com/400x500.png?text=Cotton+Shorts",
  },
  {
    id: 2,
    name: "Velvo Sports Active Shorts",
    price: "₹1,499",
    image: "https://via.placeholder.com/400x500.png?text=Sports+Shorts",
  },
  {
    id: 3,
    name: "Velvo Denim Casual Shorts",
    price: "₹1,799",
    image: "https://via.placeholder.com/400x500.png?text=Denim+Shorts",
  },
  {
    id: 4,
    name: "Velvo Linen Summer Shorts",
    price: "₹1,599",
    image: "https://via.placeholder.com/400x500.png?text=Linen+Shorts",
  },
];

function Shorts() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Brand Banner */}
      <div
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-5xl font-bold tracking-wide"
        >
          Velvo Men’s Shorts Collection
        </motion.h1>
      </div>

      {/* Products Grid */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {shorts.map((short) => (
          <motion.div
            key={short.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden group relative"
          >
            <img
              src={short.image}
              alt={short.name}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="p-5">
              <h2 className="text-lg font-semibold">{short.name}</h2>
              <p className="text-gray-400">{short.price}</p>
            </div>

            {/* Hover Actions */}
            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                <Heart className="w-5 h-5 text-black" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                <ShoppingCart className="w-5 h-5 text-black" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Shorts;
