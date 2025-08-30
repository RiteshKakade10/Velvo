import React, { useState } from "react";
import { motion } from "framer-motion";
import Nitro1 from "../../../assets/New1/ShoesMostro/Shoes1.jpg";

export default function NitroPage1() {
  const shoes = [
    { id: 1, name: "Nitro Blaze Runner", price: "₹11,500", type: "Running", image: Nitro1 },
    { id: 2, name: "Nitro AirFlex 2.0", price: "₹9,800", type: "Running", image: Nitro1 },
    { id: 3, name: "Nitro StreetElite", price: "₹12,500", type: "Sneakers", image: Nitro1 },
    { id: 4, name: "Nitro PowerStride", price: "₹8,500", type: "Sports", image: Nitro1 },
    { id: 5, name: "Nitro UrbanFormals", price: "₹15,000", type: "Formal", image: Nitro1 },
    { id: 6, name: "Nitro AeroBoost", price: "₹10,800", type: "Running", image: Nitro1 },
    { id: 7, name: "Nitro GlideStep", price: "₹13,500", type: "Sneakers", image: Nitro1 },
    { id: 8, name: "Nitro ChillStep", price: "₹7,800", type: "Casual", image: Nitro1 },
    { id: 9, name: "Nitro HyperVolt", price: "₹11,800", type: "Sports", image: Nitro1 },
    { id: 10, name: "Nitro ShadowFlex", price: "₹14,200", type: "Sneakers", image: Nitro1 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShoes = shoes.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(shoes.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-28 px-6 md:px-12">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-center text-white tracking-tight mb-16">
        Nitro Shoes Collection ⚡
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {currentShoes.map((shoe, index) => (
          <motion.div
            key={shoe.id}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative bg-gradient-to-b from-white/10 to-white/5 
                       backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden">
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 
                                   text-white text-sm font-semibold rounded-full shadow-md hover:opacity-90 transition">
                  🛒 Shop Now
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-indigo-300 transition">
                {shoe.name}
              </h3>
              <p className="text-lg font-semibold text-indigo-400">{shoe.price}</p>
              <p className="text-sm text-gray-400 italic">{shoe.type} Series</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-16 gap-3 pb-12">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-5 py-2 rounded-full bg-white/10 text-white font-medium shadow hover:bg-white/20 transition disabled:opacity-40"
        >
          ⬅ Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-5 py-2 rounded-full font-semibold shadow-md transition ${
              currentPage === i + 1
                ? "bg-indigo-500 text-white scale-105"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-5 py-2 rounded-full bg-white/10 text-white font-medium shadow hover:bg-white/20 transition disabled:opacity-40"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
