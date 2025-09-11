import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../../../assets/Kids/KidsNewArrivals/KidsBG.jpg"; 
import IMG1 from '../../../assets/Kids/KidsNewArrivals/Girls/ForalFrokGirls.jpg';
import IMG2 from '../../../assets/Kids/KidsNewArrivals/Boys/cartoonTshirt.jpg';
import IMG3 from '../../../assets/Kids/KidsNewArrivals/Boys/casualShorts.jpg';
import IMG4 from '../../../assets/Kids/KidsNewArrivals/Boys/sportSneakers.jpg';
import IMG5 from '../../../assets/Kids/KidsNewArrivals/Boys/miniJacket.jpg';
import IMG6 from '../../../assets/Kids/KidsNewArrivals/Girls/cozyhoodie.jpg';
import IMG7 from '../../../assets/Kids/KidsNewArrivals/Girls/partyWear.jpg';
import IMG8 from '../../../assets/Kids/KidsNewArrivals/Girls/comfirtsandles.jpg';

const products = [
  { id: 1, name: "Floral Frock", price: "$49.99", description: "Cute floral frock perfect for birthdays and parties.", image: IMG1 },
  { id: 2, name: "Cartoon T-Shirt", price: "$19.99", description: "Soft cotton t-shirt with fun cartoon print.", image: IMG2 },
  { id: 3, name: "Casual Shorts", price: "$24.99", description: "Lightweight and comfy shorts for daily wear.", image: IMG3 },
  { id: 4, name: "Sporty Sneakers", price: "$39.99", description: "Durable sneakers for active kids, perfect for school and playtime.", image: IMG4 },
  { id: 5, name: "Mini Denim Jacket", price: "$34.99", description: "Trendy denim jacket for a stylish casual look.", image: IMG5 },
  { id: 6, name: "Cozy Hoodie", price: "$29.99", description: "Soft hoodie to keep kids warm during chilly evenings.", image: IMG6 },
  { id: 7, name: "Party Wear Set", price: "$59.99", description: "Complete outfit set for kids' special occasions.", image: IMG7 },
  { id: 8, name: "Comfort Sandals", price: "$22.99", description: "Light and comfy sandals for everyday adventures.", image: IMG8 },
];

export default function KidsNewArrival() {
  return (
    <div className="text-white min-h-screen relative overflow-hidden bg-neutral-950">
      {/* ✅ Hero Section with Image */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden pt-20">
        <img
          src={HeroImage}
          alt="Kids New Arrivals"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-center text-white uppercase"
          >
            Kids' New Arrivals
          </motion.h1>

          {/* ✅ Added Subheader */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg md:text-xl text-white text-center max-w-2xl"
          >
            Discover the latest fashion for your little ones – trendy, comfy, and fun!
          </motion.p>
        </div>
      </div>

      {/* ✅ Product Grid */}
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
                  className="w-full h-72 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col gap-3">
                <h2 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                  {product.name}
                </h2>
                <p className="text-gray-400 text-sm">{product.description}</p>
                <p className="text-lg font-semibold text-white">
                  {product.price}
                </p>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#facc15" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-lg 
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
