import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

// Sample sneaker data
const sneakers = [
  {
    id: 1,
    name: "SpeedCat Classic",
    price: "$120",
    img: "https://images.unsplash.com/photo-1606813902916-1236a1a36a1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "SpeedCat Runner",
    price: "$140",
    img: "https://images.unsplash.com/photo-1612902372914-3aaf8c6f9b2c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "SpeedCat Street",
    price: "$160",
    img: "https://images.unsplash.com/photo-1600185365939-7c9f09d5c1f7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "SpeedCat Pro",
    price: "$180",
    img: "https://images.unsplash.com/photo-1612831669955-7b54f93a9f68?auto=format&fit=crop&w=800&q=80",
  },
];

function SpeedCat() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          SpeedCat Sneakers
        </h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Step into the future of streetwear with premium sneakers designed for
          comfort, style, and performance.
        </p>
      </motion.div>

      {/* Sneakers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {sneakers.map((shoe, index) => (
          <motion.div
            key={shoe.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative group">
              <img
                src={shoe.img}
                alt={shoe.name}
                className="w-full h-64 object-cover group-hover:opacity-90 transition duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200"
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{shoe.name}</h3>
              <p className="text-gray-400 mb-3">{shoe.price}</p>
              <button className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-400 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-all duration-300">
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SpeedCat;