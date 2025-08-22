import React from 'react';
import Image11 from '../../assets/Monstro/Monstro1.jpg';
import { Link } from 'react-router-dom';

export default function Mostro() {
  return (
    <div className="min-h-screen text-black flex flex-col items-center justify-center py-8 px-6 bg-gray-50">
      {/* Header / Promo Banner */}
        <header className="w-screen -mx-6 bg-gradient-to-r from-red to-indigo-400 text-black text-center py-12 shadow-md mb-12">
        <h2 className="text-4xl font-extrabold tracking-wide uppercase">
          🔥 Big Sale! Get Up To 40% Off On Mostro Collection 🔥
        </h2>
        <p className="text-lg md:text-xl font-medium mt-4">
          Limited Time Offer — Shop Now & Save More!
        </p>
      </header>

      {/* Intro section */}
      <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center px-8 py-20">
        {/* Left Grid: Logo */}
        <div className="flex items-center justify-center">
          <img
            src={Image11}
            alt="Mostro Logo"
            className="w-[70%] md:w-[80%] opacity-100"
          />
        </div>

        {/* Middle Grid: Title & Button */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            Mostro Sneakers
          </h1>
          <Link to="/monstro-page1">
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                                text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Right Grid: Description */}
        <div className="flex items-center justify-center">
          <p className="max-w-md text-lg md:text-xl text-gray-950 leading-relaxed font-sans text-center md:text-left">
            The Mostro Collection is designed to redefine your style. Inspired by modern
            streetwear and engineered for maximum comfort, these sneakers bring together
            performance, elegance, and bold looks. Step into confidence with Mostro.
          </p>
        </div>
      </section>
    </div>
  );
}
