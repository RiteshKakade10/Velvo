import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const jackets = [
  {
    id: 1,
    name: "Leather Biker Jacket",
    price: "₹4,999",
    image: "https://via.placeholder.com/400x500.png?text=Leather+Jacket",
  },
  {
    id: 2,
    name: "Denim Blue Jacket",
    price: "₹2,499",
    image: "https://via.placeholder.com/400x500.png?text=Denim+Jacket",
  },
  {
    id: 3,
    name: "Bomber Black Jacket",
    price: "₹3,799",
    image: "https://via.placeholder.com/400x500.png?text=Bomber+Jacket",
  },
  {
    id: 4,
    name: "Winter Puffer Jacket",
    price: "₹5,299",
    image: "https://via.placeholder.com/400x500.png?text=Puffer+Jacket",
  },
];

function Jackets() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-5xl font-bold tracking-wide"
        >
          Men’s Jackets Collection
        </motion.h1>
      </div>

      {/* Products Grid */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {jackets.map((jacket) => (
          <motion.div
            key={jacket.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden group relative"
          >
            <img
              src={jacket.image}
              alt={jacket.name}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="p-5">
              <h2 className="text-lg font-semibold">{jacket.name}</h2>
              <p className="text-gray-400">{jacket.price}</p>
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

export default Jackets;
