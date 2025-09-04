import React from "react";
import { motion } from "framer-motion";
import BGVID from "../../../assets/Women/WomenNewArrivals/newarrivalbg.mp4";
import IMG1 from "../../../assets/Women/WomenNewArrivals/RedEveningDress.jpg";
import IMG2 from "../../../assets/Women/WomenNewArrivals/whitecroptop.jpg";
import IMG3 from "../../../assets/Women/WomenNewArrivals/blueskinnyjeans.jpg";
import IMG4 from "../../../assets/Women/WomenNewArrivals/highheels.jpg";

import IMG5 from "../../../assets/Women/WomenNewArrivals/FloralMaxiDress.jpg";
import IMG6 from "../../../assets/Women/WomenNewArrivals/DenimJacket.jpg";
import IMG7 from "../../../assets/Women/WomenNewArrivals/Silkdress.jpg";
import IMG8 from "../../../assets/Women/WomenNewArrivals/AnkleStrapSandals.jpg";

const products = [
  {
    id: 1,
    name: "Red Evening Dress",
    price: "$109.99",
    description: "Elegant red dress for special occasions.",
    image: IMG1,
  },
  {
    id: 2,
    name: "Classic White Top",
    price: "$39.99",
    description: "Stylish white top with a modern design.",
    image: IMG2,
  },
  {
    id: 3,
    name: "Skinny Jeans",
    price: "$59.99",
    description: "Trendy skinny jeans with perfect fit.",
    image: IMG3,
  },
  {
    id: 4,
    name: "High Heels",
    price: "$89.99",
    description: "Premium leather high heels for an elegant look.",
    image: IMG4,
  },
  {
    id: 5,
    name: "Floral Maxi Dress",
    price: "$119.99",
    description: "Flowy summer maxi dress with vibrant floral prints.",
    image: IMG5,
  },
  {
    id: 6,
    name: "Denim Jacket",
    price: "$79.99",
    description: "Trendy cropped denim jacket for a casual chic look.",
    image: IMG6, 
  },
  {
    id: 7,
    name: "Silk Dress",
    price: "$69.99",
    description: "Elegant silk blouse with a relaxed fit and soft feel.",
    image: IMG7, 
  },
  {
    id: 8,
    name: "Ankle Strap Sandals",
    price: "$99.99",
    description: "Stylish leather sandals with comfortable ankle straps.",
    image: IMG8, 
  },
];

export default function KidsNewArrival() {
  return (
    <div className="text-white min-h-screen relative overflow-hidden bg-neutral-950">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden pt-20">
        <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-contain"
        >
        <source src={BGVID} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-center text-white uppercase"
          >
            Kid's New Arrival's
          </motion.h1>
        </div>
      </div>

      {/* Product Grid */}
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
                <h2 className="text-xl font-bold text-white group-hover:text-pink-500 transition-colors">
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
