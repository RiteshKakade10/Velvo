import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <section className="w-full h-[60vh] md:h-[75vh] flex flex-col items-center justify-center relative overflow-hidden">
        <img
          src="/images/velvo-hero.jpg"
          alt="Velvo Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <motion.h1
          className="relative text-4xl md:text-6xl font-bold tracking-wide text-center px-4 text-white z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Velvo – Elevate Everything
        </motion.h1>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Purpose
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At Velvo, fashion is not just style — it's a voice. We exist to empower
          the next generation with bold, minimal, and sustainable fashion that
          speaks louder than words.
        </motion.p>
      </section>

      {/* Values Section */}
      <section className="bg-neutral-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2">Bold Design</h3>
            <p className="text-gray-400">
              We push boundaries in every collection — celebrating individuality
              and edge.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-400">
              Crafted from premium materials, made to last, made to move with
              you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-400">
              We’re committed to conscious fashion and reducing waste through
              innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Velvo started in 2025 with a vision: to create fashion that means
          something. From humble beginnings to a rising movement, we’ve grown by
          staying true to our values — creativity, courage, and community.
        </motion.p>
      </section>

      {/* Contact Section */}
      <section className="bg-neutral-950 py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        {/* Contact Info */}
        <motion.div
          className="text-gray-300 text-lg space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>
            <span className="font-semibold text-white">📧 Email:</span>{" "}
            riteshkakade1096@gmail.com
          </p>
          <p>
            <span className="font-semibold text-white">📞 Phone:</span> +91
            8626081096
          </p>
          <p>
            <span className="font-semibold text-white">📍 Location:</span> Pune,
            India
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
