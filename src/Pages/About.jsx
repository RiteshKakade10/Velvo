import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/About/about44.jpg";

const About = () => {
  return (
    <div className="pt-35 bg-white text-black min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src={image1}
          alt="Velvo Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Centered Text */}
        <motion.h1
          className="relative z-20 text-4xl md:text-6xl font-extrabold tracking-wide text-center text-black px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Velvo – Elevate Everything
        </motion.h1>
      </section>

      {/* Purpose Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Purpose
        </motion.h2>
        <motion.p
          className="text-black text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At Velvo, fashion is not just style — it’s a voice. We exist to empower
          the next generation with bold, minimal, and sustainable fashion that
          speaks louder than words.
        </motion.p>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              title: "Bold Design",
              desc: "We push boundaries in every collection — celebrating individuality and edge.",
              delay: 0,
            },
            {
              title: "Quality",
              desc: "Crafted from premium materials, made to last, made to move with you.",
              delay: 0.2,
            },
            {
              title: "Sustainability",
              desc: "We’re committed to conscious fashion and reducing waste through innovation.",
              delay: 0.4,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-black">
                {item.title}
              </h3>
              <p className="text-black">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>
        <motion.p
          className="text-black text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Velvo started in 2025 with a vision: to create fashion that means
          something. From humble beginnings to a rising movement, we’ve grown by
          staying true to our values — creativity, courage, and community.
        </motion.p>
      </section>
    </div>
  );
};

export default About;
