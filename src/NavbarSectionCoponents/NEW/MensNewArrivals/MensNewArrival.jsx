import React from "react";
import { motion } from "framer-motion";
import BGIMG from "../../../assets/Men/NewArrivals/mensbg.jpg";
import IMG1 from '../../../assets/Men/NewArrivals/denimJacket.jpg'
import IMG2 from '../../../assets/Men/NewArrivals/whitetshirtmens.jpg'
import IMG3 from '../../../assets/Men/NewArrivals/slimfitjeans.jpg'
import IMG4 from '../../../assets/Men/NewArrivals/leathershoes.jpg'
// import IMG5 from '../../../assets/Men/NewArrivals/denimJacket.jpg'

// Sample product data (replace with your assets)
const products = [
  {
    id: 1,
    name: "Denim Jacket",
    price: "$89.99",
    description: "Premium rugged denim jacket with modern fit.",
    image: IMG1,
  },
  {
    id: 2,
    name: "Classic White Shirt",
    price: "$49.99",
    description: "Timeless cotton shirt for every occasion.",
    image: IMG2,
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    price: "$69.99",
    description: "Trendy slim fit jeans crafted for comfort.",
    image: IMG3,
  },
  {
    id: 4,
    name: "Leather Boots",
    price: "$129.99",
    description: "Premium handcrafted boots for a bold look.",
    image: IMG4,
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: "$89.99",
    description: "Premium rugged denim jacket with modern fit.",
    image: IMG1,
  },
  {
    id: 6,
    name: "Classic White Shirt",
    price: "$49.99",
    description: "Timeless cotton shirt for every occasion.",
    image: IMG2,
  },
  {
    id: 7,
    name: "Slim Fit Jeans",
    price: "$69.99",
    description: "Trendy slim fit jeans crafted for comfort.",
    image: IMG3,
  },
  {
    id: 8,
    name: "Leather Boots",
    price: "$129.99",
    description: "Premium handcrafted boots for a bold look.",
    image: IMG4,
  },
];

export default function MensNewArrival() {
  return (
    <div className="text-white min-h-screen relative overflow-hidden bg-neutral-950">
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden pt-20">
        <img
          src={BGIMG} 
          alt="Men's New Arrivals"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>


        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-center text-white uppercase"
          >
            Men's New Arrivals
          </motion.h1>
        </div>
      </div>

      {/* --- Product Grid Section --- */}
      <div className="relative z-20 max-w-7xl mx-auto pt-20 pb-20 px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden 
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Product Image */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col gap-3">
                <h2 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  {product.name}
                </h2>
                <p className="text-gray-400 text-sm">{product.description}</p>
                <p className="text-lg font-semibold text-yellow-400">
                  {product.price}
                </p>
                 <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#e11d48" }} // hover animation
                                whileTap={{ scale: 0.95 }} // tap animation
                                transition={{ type: "spring", stiffness: 300 }}
                                className="px-6 py-3 rounded-xl text-white font-semibold shadow-lg 
                                            hover:shadow-2xl focus:outline-none"
                                >
                                Buy Now
                  </motion.button>              
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
