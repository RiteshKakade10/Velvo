import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="w-full h-[60vh] md:h-[75vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/images/velvo-hero.jpg')` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold tracking-wide text-center px-4">
            Velvo – Elevate Everything
          </h1>
        </div>
      </section>

      {/* Purpose Section */}
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
          className="text-gray-700 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At Velvo, fashion is not just style — it's a voice. We exist to empower the next generation with bold, minimal, and sustainable fashion that speaks louder than words.
        </motion.p>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Bold Design</h3>
            <p className="text-gray-600">
              We push boundaries in every collection — celebrating individuality and edge.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">
              Crafted from premium materials, made to last, made to move with you.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We’re committed to conscious fashion and reducing waste through innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Velvo started in 2025 with a vision: to create fashion that means something. From humble beginnings to a rising movement, we’ve grown by staying true to our values — creativity, courage, and community.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h2> */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center text-gray-600 text-sm">
          <p>Email:riteshkakade1096@gmail.com</p>
          <p>Phone: +91 8626081096</p>
          <p>Location: Pune, India</p>
        </div>
      </section>
    </div>
  );
};

export default About;
