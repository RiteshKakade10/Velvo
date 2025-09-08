import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

// Rider Shoes Data
const riderShoes = [
  {
    id: 1,
    title: "Rider Classic",
    price: "₹5,999",
    image:
      "https://images.unsplash.com/photo-1606813903080-8c784c0a07cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Future Rider",
    price: "₹6,499",
    image:
      "https://images.unsplash.com/photo-1616627452110-1d1bbf3de64b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Rider Play On",
    price: "₹7,299",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Rider Vintage",
    price: "₹6,799",
    image:
      "https://images.unsplash.com/photo-1600180758895-42d21ef1c2b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Rider Premium",
    price: "₹8,199",
    image:
      "https://images.unsplash.com/photo-1611605698335-8e2a31c2f3f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Rider Bold",
    price: "₹7,899",
    image:
      "https://images.unsplash.com/photo-1603808033192-e8b6f841c05e?auto=format&fit=crop&w=800&q=80",
  },
];

function RiderShoes() {
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
          Riding Shoes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Step into the future of streetwear with Puma Rider — bold designs,
          modern comfort, and premium style made for every rider.
        </motion.p>
      </div>

      {/* Collection Grid */}
      <div className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {riderShoes.map((item) => (
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

export default RiderShoes;
