import React, { useState } from "react";
import { motion } from "framer-motion";
import Shoes1 from "../../../assets/New1/ShoesMostro/Shoes1.jpg";

export default function MonstroPage1() {
  const shoes = [
    { id: 1, Name: "Monstro AirMax X1", Prize: 11000, type: "Running", Image: Shoes1 },
    { id: 2, Name: "Monstro FlexRun 2.0", Prize: 9500, type: "Running", Image: Shoes1 },
    { id: 3, Name: "Monstro StreetSneak Pro", Prize: 12500, type: "Sneakers", Image: Shoes1 },
    { id: 4, Name: "Monstro PowerStride", Prize: 8000, type: "Sports", Image: Shoes1 },
    { id: 5, Name: "Monstro EliteFormals", Prize: 15000, type: "Formal", Image: Shoes1 },
    { id: 6, Name: "Monstro AeroBoost", Prize: 10500, type: "Running", Image: Shoes1 },
    { id: 7, Name: "Monstro UrbanEdge", Prize: 13500, type: "Sneakers", Image: Shoes1 },
    { id: 8, Name: "Monstro ChillStep", Prize: 7000, type: "Casual", Image: Shoes1 },
    { id: 9, Name: "Monstro PrimeFormals X", Prize: 16000, type: "Formal", Image: Shoes1 },
    { id: 10, Name: "Monstro SpeedRush V2", Prize: 9800, type: "Sports", Image: Shoes1 },
    { id: 11, Name: "Monstro HyperTrack", Prize: 14500, type: "Running", Image: Shoes1 },
    { id: 13, Name: "Monstro GlideFormals", Prize: 15500, type: "Formal", Image: Shoes1 },
    { id: 14, Name: "Monstro RapidX", Prize: 8800, type: "Sports", Image: Shoes1 },
    { id: 15, Name: "Monstro TrendStep", Prize: 9900, type: "Casual", Image: Shoes1 },
    { id: 16, Name: "Monstro MaxBoost Pro", Prize: 13800, type: "Running", Image: Shoes1 },
    { id: 17, Name: "Monstro StreetLegend", Prize: 14200, type: "Sneakers", Image: Shoes1 },
    { id: 18, Name: "Monstro ClassicFormals", Prize: 17000, type: "Formal", Image: Shoes1 },
    { id: 19, Name: "Monstro FlexStride", Prize: 9400, type: "Sports", Image: Shoes1 },
    { id: 20, Name: "Monstro EasyWalk", Prize: 7500, type: "Casual", Image: Shoes1 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShoes = shoes.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(shoes.length / itemsPerPage);

  const handleAddToCart = (shoe) => {
    fetch("http://localhost:4040/Cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(shoe),
    })
      .then(() => console.log("Shoe added to cart:", shoe))
      .catch((err) => console.error(err));
  };

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 font-inter">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
        Monstro Shoes Collection 👟
      </h1>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {currentShoes.map((shoe, index) => (
          <motion.div
            key={shoe.id}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative bg-gradient-to-b from-white/80 to-white/50 
                       backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden"
          >
            {/* Image with hover zoom */}
            <div className="relative overflow-hidden">
              <img
                src={shoe.Image}
                alt={shoe.Name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <button
                  onClick={() => handleAddToCart(shoe)}
                  className="px-6 py-2 bg-gradient-to-r from-purple-700 to-purple-900 
                             text-white text-sm font-semibold rounded-full shadow-md hover:opacity-90 transition"
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-wide group-hover:text-purple-700 transition">
                {shoe.Name}
              </h3>
              <p className="text-sm text-gray-500 italic">{shoe.type} Series</p>
              <p className="text-2xl font-extrabold text-purple-700">₹{shoe.Prize.toLocaleString()}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-16 gap-3 pb-12">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 font-medium shadow hover:bg-gray-300 transition disabled:opacity-40"
        >
          ⬅ Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-5 py-2 rounded-full font-semibold shadow-md transition ${
              currentPage === i + 1
                ? "bg-purple-700 text-white scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 font-medium shadow hover:bg-gray-300 transition disabled:opacity-40"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
