import React, { useState } from "react";
import Nitro1 from "../../../assets/New1/ShoesMostro/Shoes1.jpg";

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
    { id: 9, Name: "Nitro HyperVolt", Price: 11800, Type: "Sports", Image: Nitro1 },
    { id: 10, Name: "Nitro ShadowFlex", Price: 14200, Type: "Sneakers", Image: Nitro1 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // ✅ Show 9 items (3x3 grid)

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShoes = shoes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(shoes.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 font-inter pt-30 px-6 md:px-12">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-center text-gray-900 tracking-tight mb-16">
        Nitro Shoes Collection ⚡
      </h1>

      {/* Grid of Shoes - 3x3 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentShoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-5 flex flex-col items-center"
          >
            {/* Image */}
            <div className="w-full flex justify-center">
              <img
                src={shoe.Image}
                alt={shoe.Name}
                className="w-60 h-60 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="mt-6 text-center space-y-3">
              <h2 className="text-xl font-bold text-gray-900">{shoe.Name}</h2>
              <p className="text-sm text-gray-500 italic">{shoe.Type} Series</p>
              <span className="block text-2xl font-extrabold text-purple-700">
                ₹{shoe.Price.toLocaleString()}
              </span>
            </div>

            {/* Button */}
            <button className="mt-6 w-full bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950 text-white py-3 rounded-2xl font-semibold shadow-lg transform hover:scale-105 transition duration-300">
              🛒 Add to Cart
            </button>
          </div>
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
