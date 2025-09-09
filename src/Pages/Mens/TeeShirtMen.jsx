import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic White Tee",
    price: "₹899",
    image: "https://via.placeholder.com/400x500.png?text=White+Tee",
  },
  {
    id: 2,
    name: "Black Oversized Tee",
    price: "₹1,199",
    image: "https://via.placeholder.com/400x500.png?text=Black+Tee",
  },
  {
    id: 3,
    name: "Graphic Print Tee",
    price: "₹1,499",
    image: "https://via.placeholder.com/400x500.png?text=Graphic+Tee",
  },
  {
    id: 4,
    name: "Striped Cotton Tee",
    price: "₹1,099",
    image: "https://via.placeholder.com/400x500.png?text=Striped+Tee",
  },
];

function TeeShirtMen() {
  return (
    <div className="min-h-screen bg-neutral-950 p-10 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white text-center mb-12"
      >
        Men’s T-Shirts Collection
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600">{product.price}</p>
            </div>

            {/* Hover Actions */}
            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TeeShirtMen;
