import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/Home/Home3.jpg'; 
import tshirt1 from '../assets/whitetshirt.jpg';
import tshirt2 from '../assets/womenshirt.jpg';
import tshirt3 from '../assets/tshirt3.jpg';

export default function Home() {
  return (
    <div className="pt-20 min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">   
        {/* Background Hero Image */}
        <img
          src={heroImage}
          alt="Velvo Hero"
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-16">
          {/* Left Text */}
          <div className="flex flex-col justify-center text-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-6xl font-extrabold mb-6 text-white drop-shadow-lg"
            >
              Welcome to VELVO
            </motion.h1>

            <p className="text-lg md:text-xl leading-relaxed font-[Kugile] text-gray-100">
              At Velvo, fashion is more than just clothing —
              it’s a statement of identity. From bold streetwear
              to premium lifestyle pieces, we craft every design
              to help you express confidence, creativity,
              and authentic style.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("gallery-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                        text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
            >
              Explore Collection ↓
            </button>
          </div>

          {/* Right Hero Image */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-[85%] h-[70vh] rounded-2xl overflow-hidden shadow-xl border-4 border-white/30">
              <img
                src={heroImage}
                alt="Velvo Fashion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section id="gallery-section" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          Discover The Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img src={tshirt1} alt="Velvo 1" className="w-full h-[400px] object-cover hover:scale-105 transition duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img src={tshirt2} alt="Velvo 2" className="w-full h-[400px] object-cover hover:scale-105 transition duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img src={tshirt3} alt="Velvo 3" className="w-full h-[400px] object-cover hover:scale-105 transition duration-500" />
          </div>
        </div>
      </section>
         <section id="gallery-section" className="relative py-20 px-0">
            <div className="w-screen bg-gray-600 text-white text-center py-3 px-4 text-sm sm:text-base font-semibold tracking-wide">
              EXTRA 10% ON ORDERS ABOVE ₹4499 — Discount auto-applied at checkout | *Exclusions Apply
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-16">
            </div>
      </section>

      
    </div>
  );
}


{/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img src={tshirt1} alt="Velvo 1" className="w-full h-[400px] object-cover hover:scale-105 transition duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img src={tshirt2} alt="Velvo 2" className="w-full h-[400px] object-cover hover:scale-105 transition duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img src={tshirt3} alt="Velvo 3" className="w-full h-[400px] object-cover hover:scale-105 transition duration-500" />
          </div>
        </div> */}