import React from 'react';
import BgVideo from "../../assets/Monstro/mostropage.mp4";
import { Link } from 'react-router-dom';

export default function Mostro() {
  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center py-8 px-6 overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={BgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Header / Promo Banner */}
        <header className="w-screen -mx-6 bg-gradient-to-r from-red to-indigo-400 text-white text-center py-6 sm:py-12 shadow-md mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide uppercase break-words leading-snug">
            🔥 Big Sale! Get Up To 40% Off On Mostro Collection 🔥
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium mt-3">
            Limited Time Offer — Shop Now & Save More!
          </p>
        </header>

        {/* Intro Section */}
        <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center px-8 py-20">
          {/* Left Grid: Logo */}
          <div className="flex items-center justify-center">
            {/* <img
              src={Image11}
              alt="Mostro Logo"
              className="w-[70%] md:w-[80%] opacity-100"
            /> */}
          </div>

          {/* Middle Grid: Title & Button */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] leading-tight">
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
            <p className="max-w-md text-base sm:text-lg md:text-xl text-white leading-relaxed font-sans text-center md:text-left">
              The Mostro Collection is designed to redefine your style. Inspired by modern
              streetwear and engineered for maximum comfort, these sneakers bring together
              performance, elegance, and bold looks. Step into confidence with Mostro.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
