import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/Home/Home3.jpg'; 
import bagVideo from '../assets/Home/bagshomepage.mp4';
import Contact from '../Pages/Contact.jsx';
import Mostro from '../NavbarSectionCoponents/NEW/Mostro.jsx';
import Palermo from '../NavbarSectionCoponents/NEW/Palermo.jsx';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20 min-h-screen bg-neutral-950 text-white">
      
      {/* ---------------- Hero Section ---------------- */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">   
  {/* Background Hero Image */}
            <img
              src={heroImage}
              alt="Velvo Hero"
              className="absolute inset-0 w-full h-full object-cover object-top z-0"
            />

            {/* Hero Content */}
            <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="pt-90 text-5xl sm:text-6xl font-extrabold mb-6 text-black drop-shadow-lg"
              >
                Welcome to Velvo
              </motion.h1>

              <p className="text-lg md:text-xl leading-relaxed font-[Kugile] text-black max-w-2xl mx-auto">
                At Velvo, fashion is more than just clothing —
                it’s a statement of identity. From bold streetwear
                to premium lifestyle pieces, we craft every design
                to help you express confidence, creativity,
                and authentic style.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("bag-video-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                          text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
              >
                Explore Collection ↓
              </button>
            </div>
          </section>
      <section
        id="bag-video-section"
        className="pt-0 pb-0 relative w-full h-[90vh] flex items-center justify-center overflow-hidden mt-20"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={bagVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Text Content */}
        <div className="relative z-20 text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl"
          >
            Redefining Bags for the Modern Era
          </motion.h2>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Premium design. Ultimate durability. Unmatched style.  
            Discover our exclusive bag collection crafted for everyday legends.
          </p>
          <Link to="/ladies-bags">
          <button className="mt-8 px-10 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 
                            text-white text-lg font-semibold rounded-full shadow-lg 
                            hover:opacity-90 transition">
            Shop Bags →
          </button>
          </Link>
        </div>
      </section>

      {/* ---------------- Other Sections ---------------- */}
      <section className="relative py-10 px-6 max-w-7xl mx-auto space-y-16">
        <Palermo />
        <Mostro />
        <Contact />
      </section>
    </div>
  );
}
