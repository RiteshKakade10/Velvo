import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

// RS Collection Data
const rsCollection = [
  {
    id: 1,
    title: "RS Sneakers Classic",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1606813903080-8c784c0a07cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "RS High-Tops",
    price: "₹5,999",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "RS Limited Edition",
    price: "₹7,499",
    image:
      "https://images.unsplash.com/photo-1600180758895-42d21ef1c2b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "RS Streetwear Shoes",
    price: "₹6,299",
    image:
      "https://images.unsplash.com/photo-1606818724546-1f9c8a8e6b43?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "RS Premium Leather",
    price: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1616627452110-1d1bbf3de64b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "RS Limited Gold Edition",
    price: "₹12,499",
    image:
      "https://images.unsplash.com/photo-1606811831701-0017b8e8121e?auto=format&fit=crop&w=800&q=80",
  },
];

function RSCollection() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-zinc-900 to-black py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide"
        >
          RS Collection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Discover premium sneakers crafted with precision, luxury, and style —
          designed for those who demand more than just footwear.
        </motion.p>
      </div>

      {/* Collection Grid */}
      <div className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {rsCollection.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover"
              />
              <span className="absolute top-3 left-3 bg-yellow-500 text-black px-2 py-1 text-xs font-semibold rounded-full flex items-center">
                <Star className="w-3 h-3 mr-1" /> Premium
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-400 mb-4">{item.price}</p>
              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-2 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RSCollection;
