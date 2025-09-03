import React from "react";
import { motion } from "framer-motion";

// Sample kids product data (replace with your real images)
const kidsProducts = [
  {
    id: 1,
    name: "Cartoon Hoodie",
    price: "$39.99",
    description: "Comfy hoodie with playful cartoon print.",
    image: "https://via.placeholder.com/400x500.png?text=Cartoon+Hoodie",
  },
  {
    id: 2,
    name: "Rainbow Sneakers",
    price: "$49.99",
    description: "Colorful sneakers for everyday adventures.",
    image: "https://via.placeholder.com/400x500.png?text=Rainbow+Sneakers",
  },
  {
    id: 3,
    name: "Denim Overalls",
    price: "$59.99",
    description: "Classic denim overalls with a modern twist.",
    image: "https://via.placeholder.com/400x500.png?text=Denim+Overalls",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: "$44.99",
    description: "Light and bright summer dress for all fun moments.",
    image: "https://via.placeholder.com/400x500.png?text=Summer+Dress",
  },
];

export default function KidsNewArrival() {
  return (
    <div className="text-white min-h-screen relative bg-neutral-950">
      {/* --- Hero Section --- */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1621122918781-bf3a4e65e73b"
          alt="Kids New Arrivals"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute text-5xl md:text-7xl font-extrabold text-center text-yellow-300 drop-shadow-lg uppercase"
        >
          Kids New Arrivals
        </motion.h1>
      </div>

      {/* --- Product Grid --- */}
      <div className="relative z-20 max-w-7xl mx-auto py-20 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {kidsProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden 
                         hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Product Image */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col gap-3">
                <h2 className="text-xl font-bold text-yellow-300 group-hover:text-pink-400 transition-colors">
                  {product.name}
                </h2>
                <p className="text-gray-300 text-sm">{product.description}</p>
                <p className="text-lg font-semibold text-green-400">
                  {product.price}
                </p>

                {/* Call-to-Action Button */}
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    background:
                      "linear-gradient(90deg, #f472b6, #facc15, #4ade80)",
                    boxShadow: "0px 8px 25px rgba(250,204,21,0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 px-6 py-2 rounded-full font-bold text-white 
                             bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 
                             transition-all duration-300"
                >
                  ✨ Shop Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
