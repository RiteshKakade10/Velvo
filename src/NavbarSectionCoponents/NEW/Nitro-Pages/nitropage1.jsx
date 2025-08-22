import React, { useState } from "react";
import Nitro1 from '../../../assets/New1/ShoesMostro/Shoes1.jpg';

export default function NitroPage1() {
  const shoes = [
    { id: 1, Name: "Nitro Blaze Runner", Price: 11500, Type: "Running", Image: Nitro1 },
    { id: 2, Name: "Nitro AirFlex 2.0", Price: 9800, Type: "Running", Image: Nitro1 },
    { id: 3, Name: "Nitro StreetElite", Price: 12500, Type: "Sneakers", Image: Nitro1 },
    { id: 4, Name: "Nitro PowerStride", Price: 8500, Type: "Sports", Image: Nitro1 },
    { id: 5, Name: "Nitro UrbanFormals", Price: 15000, Type: "Formal", Image: Nitro1 },
    { id: 6, Name: "Nitro AeroBoost", Price: 10800, Type: "Running", Image: Nitro1 },
    { id: 7, Name: "Nitro GlideStep", Price: 13500, Type: "Sneakers", Image: Nitro1 },
    { id: 8, Name: "Nitro ChillStep", Price: 7800, Type: "Casual", Image: Nitro1 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShoes = shoes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(shoes.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 font-inter pt-32 px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">
        Nitro Shoes Collection ⚡
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {currentShoes.map((shoe, idx) => (
          <div
            key={shoe.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex justify-center items-center">
              <img
                src={shoe.Image}
                alt={shoe.Name}
                className="w-full max-w-md rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col justify-center text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {shoe.Name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The <span className="font-semibold text-purple-700">{shoe.Name}</span> from our{" "}
                <span className="italic">{shoe.Type}</span> series offers comfort, durability, and
                bold style for every step.
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                <span className="text-2xl md:text-3xl font-extrabold text-purple-700">
                  ₹{shoe.Price.toLocaleString()}
                </span>
                <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-2 pb-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-1 bg-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-400 transition"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === i + 1 ? "bg-purple-700 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-1 bg-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-400 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}




