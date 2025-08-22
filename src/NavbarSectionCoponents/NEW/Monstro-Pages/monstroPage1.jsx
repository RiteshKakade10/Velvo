import React, { useState } from "react";
import Shoes1 from '../../../assets/New1/ShoesMostro/Shoes1.jpg';


export default function MonstroPage1() {
 const shoes = [
  { id: 1, Name: "Monstro AirMax X1", Prize: 11000, type: "Running",Image:Shoes1},
  { id: 2, Name: "Monstro FlexRun 2.0", Prize: 9500, type: "Running",Image:Shoes1},
  { id: 3, Name: "Monstro StreetSneak Pro", Prize: 12500, type: "Sneakers",Image:Shoes1},
  { id: 4, Name: "Monstro PowerStride", Prize: 8000, type: "Sports",Image:Shoes1},
  { id: 5, Name: "Monstro EliteFormals", Prize: 15000, type: "Formal",Image:Shoes1},
  { id: 6, Name: "Monstro AeroBoost", Prize: 10500, type: "Running",Image:Shoes1},
  { id: 7, Name: "Monstro UrbanEdge", Prize: 13500, type: "Sneakers",Image:Shoes1},
  { id: 8, Name: "Monstro ChillStep", Prize: 7000, type: "Casual",Image:Shoes1},
  { id: 9, Name: "Monstro PrimeFormals X", Prize: 16000, type: "Formal",Image:Shoes1},
  { id: 10, Name: "Monstro SpeedRush V2", Prize: 9800, type: "Sports",Image:Shoes1},
  { id: 11, Name: "Monstro HyperTrack", Prize: 14500, type: "Running",Image:Shoes1},
  { id: 13, Name: "Monstro GlideFormals", Prize: 15500, type: "Formal",Image:Shoes1},
  { id: 14, Name: "Monstro RapidX", Prize: 8800, type: "Sports",Image:Shoes1},
  { id: 15, Name: "Monstro TrendStep", Prize: 9900, type: "Casual" ,Image:Shoes1},
  { id: 16, Name: "Monstro MaxBoost Pro", Prize: 13800, type: "Running" ,Image:Shoes1},
  { id: 17, Name: "Monstro StreetLegend", Prize: 14200, type: "Sneakers" ,Image:Shoes1},
  { id: 18, Name: "Monstro ClassicFormals", Prize: 17000, type: "Formal" ,Image:Shoes1},
  { id: 19, Name: "Monstro FlexStride", Prize: 9400, type: "Sports" ,Image:Shoes1},
  { id: 20, Name: "Monstro EasyWalk", Prize: 7500, type: "Casual" ,Image:Shoes1}
];


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  //Calculate page indexes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShoes = shoes.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(shoes.length / itemsPerPage);

  const handleAddToCart = (shoe) => {
  fetch("http://localhost:4040/Cart", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(shoe),
  })
  .then(() => {
    console.log("Shoe added to cart:", shoe);
  })
  .catch((err) => {
    console.error(err);
  });
};


  return (
    <div className="pt-40 min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 font-inter">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-16">
         Monstro Shoes Collection
      </h1>

      {/* Shoes per page */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-6">
        {currentShoes.map((shoe, index) => (
          <div
            key={shoe.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex justify-center items-center">
              <img
                src={shoe.Image}
                alt={shoe.Name}
                className="w-full max-w-md rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {shoe.Name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The{" "}
                <span className="font-semibold text-purple-700">
                  {shoe.Name}
                </span>{" "}
                from our <span className="italic">{shoe.type}</span> series brings
                you comfort, durability, and unmatched style.
              </p>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-purple-700">
                  ₹{shoe.Prize.toLocaleString()}
                </span>
                <button onClick={()=>handleAddToCart(shoe)} className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    
      <div className="pb-10 flex justify-center mt-16 space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-6 py-1 bg-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-400 transition"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === i + 1
                ? "bg-purple-700 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-6 py-2 bg-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-400 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
