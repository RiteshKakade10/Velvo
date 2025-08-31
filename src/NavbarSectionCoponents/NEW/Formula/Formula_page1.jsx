import React, { useState } from "react";
import { motion } from "framer-motion";

import Img1 from "../../../assets/FormulaF1/f111.jpeg";
import Img2 from "../../../assets/FormulaF1/ferrariwhite.jpeg";
import Img3 from "../../../assets/FormulaF1/ferrariblack.jpeg";
import Img4 from "../../../assets/FormulaF1/formula_dress1.jpeg";
import Img5 from "../../../assets/FormulaF1/formula_dress2.jpeg";
import Img6 from "../../../assets/FormulaF1/malbro.jpeg";
import Img7 from "../../../assets/FormulaF1/Merce1.jpeg";
import Img8 from "../../../assets/FormulaF1/pgm.jpeg";

const Formula_page1 = () => {
  const images = [
    { id: 1, src: Img1, title: "Marlboro" },
    { id: 2, src: Img2, title: "Racing Jersey 2" },
    { id: 3, src: Img3, title: "Racing Jersey 3" },
    { id: 4, src: Img4, title: "Racing Jersey 4" },
    { id: 5, src: Img5, title: "Racing Jersey 5" },
    { id: 6, src: Img6, title: "Racing Jersey 6" },
    { id: 7, src: Img1, title: "Racing Jersey 7" },
    { id: 8, src: Img2, title: "Racing Jersey 8" },
    { id: 9, src: Img3, title: "Racing Jersey 9" },
    { id: 10, src: Img5, title: "Racing Jersey 10" },
    { id: 11, src: Img7, title: "Racing Jersey 11" },
    { id: 12, src: Img8, title: "Racing Jersey 12" },
     { id: 6, src: Img6, title: "Racing Jersey 6" },
    { id: 7, src: Img1, title: "Racing Jersey 7" },
    { id: 8, src: Img2, title: "Racing Jersey 8" },
    { id: 9, src: Img3, title: "Racing Jersey 9" },
    { id: 10, src: Img5, title: "Racing Jersey 10" },
    { id: 11, src: Img7, title: "Racing Jersey 11" },
    { id: 12, src: Img8, title: "Racing Jersey 12" },
     { id: 6, src: Img6, title: "Racing Jersey 6" },
    { id: 7, src: Img1, title: "Racing Jersey 7" },
    { id: 8, src: Img2, title: "Racing Jersey 8" },
    { id: 9, src: Img3, title: "Racing Jersey 9" },
    { id: 10, src: Img5, title: "Racing Jersey 10" },
    { id: 11, src: Img7, title: "Racing Jersey 11" },
    { id: 12, src: Img8, title: "Racing Jersey 12" },
     { id: 6, src: Img6, title: "Racing Jersey 6" },
    { id: 7, src: Img1, title: "Racing Jersey 7" },
    { id: 8, src: Img2, title: "Racing Jersey 8" },
    { id: 9, src: Img3, title: "Racing Jersey 9" },
    { id: 10, src: Img5, title: "Racing Jersey 10" },
    { id: 11, src: Img7, title: "Racing Jersey 11" },
    { id: 12, src: Img8, title: "Racing Jersey 12" },
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedImages = images.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pt-40 pb-10 px-6 md:px-20 min-h-screen bg-black text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Formula F1 Collection
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {selectedImages.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/20"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 rounded-2xl">
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <button className="w-full bg-red-600 hover:bg-red-500 text-white py-2 rounded-xl transition">
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-500"
          }`}
        >
          Previous
        </button>

        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-500"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Formula_page1;
