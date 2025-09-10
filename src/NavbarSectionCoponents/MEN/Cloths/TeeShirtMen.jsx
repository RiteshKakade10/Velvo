import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";
import ClassicTee from "../../../assets/Men/TopCategories/TeeShirtMenwhite.jpg";
import BlackOversize from "../../../assets/Men/TopCategories/blackoversize.jpg";
import GraphicPrint from "../../../assets/Men/TopCategories/GraphicPrintTee.jpg";
import StripedCotton from "../../../assets/Men/TopCategories/StripedCotton.jpg";
import TshirtBg from "../../../assets/Men/TopCategories/BGNewMens.jpg"; 
import HeroVideo from "../../../assets/Men/TopCategories/herobgvideo.mp4"; 

const products = [
  { id: 1, name: "Classic White Tee", price: "₹899", image: ClassicTee, category: "Classic" },
  { id: 2, name: "Black Oversized Tee", price: "₹1,199", image: BlackOversize, category: "Oversized" },
  { id: 3, name: "Graphic Print Tee", price: "₹1,499", image: GraphicPrint, category: "Graphic" },
  { id: 4, name: "Striped Cotton Tee", price: "₹1,099", image: StripedCotton, category: "Striped" },
];

const categories = ["All", "Classic", "Oversized", "Graphic", "Striped"];

function TeeShirtMen() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div
      className="min-h-screen p-0 text-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${TshirtBg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="pt-25 relative z-10">
        {/* ✅ Hero Video Section */}
        <section className="relative rounded-2xl overflow-hidden shadow-2xl mx-4 mt-8">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-4xl mx-auto text-center py-24 px-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
              Men’s Premium T-Shirts
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
             Crafted with premium materials and a contemporary design, our Palermo men’s t-shirts combine comfort and sophistication to elevate your everyday style. Perfect for those who value both fashion and quality.
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() =>
                document
                  .getElementById("products")
                  .scrollIntoView({ behavior: "smooth" })
              }
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-blue-400/50 transition-all duration-300 ease-in-out"
            >
              Click Here To Shop
            </motion.button>
          </motion.div>
        </section>


        <section className="relative rounded-2xl overflow-hidden shadow-2xl mx-4 mt-8">
        {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-4xl mx-auto text-center py-24 px-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
              Classic Fit, Modern Edge
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
             Sleek designs crafted for comfort and confidence.
            </p>
          </motion.div>
        </section>

        {/* ✅ Sticky Subheader */}
        <div id="products" className="sticky top-0 z-20 bg-black/60 backdrop-blur-md rounded-xl shadow-md flex justify-center gap-4 p-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 text-sm font-semibold rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-amber-400 text-black shadow-md"
                  : "text-white hover:text-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 pb-12">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden group relative border border-white/20 hover:border-white/40 hover:shadow-2xl transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="p-5 text-center">
                <h2 className="text-xl font-semibold text-white tracking-wide">
                  {product.name}
                </h2>
                <p className="text-lg font-bold text-amber-400 mt-2">
                  {product.price}
                </p>
              </div>

              {/* Hover Actions */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition">
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeeShirtMen;
