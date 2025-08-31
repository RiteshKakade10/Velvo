import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/About/about44.jpg";

const About = () => {
  const values = [
  {
    title: "Avant-Garde Elegance",
    desc: "Redefining style with bold, sophisticated designs that celebrate individuality and exclusivity.",
    delay: 0,
  },
  {
    title: "Exquisite Craftsmanship",
    desc: "Meticulously curated materials and impeccable tailoring to create timeless, luxurious pieces.",
    delay: 0.2,
  },
  {
    title: "Sustainable Luxury",
    desc: "Innovating responsibly to reduce environmental impact while delivering unparalleled elegance.",
    delay: 0.4,
  },
];


  return (
    <main className="pt-28 min-h-screen bg-neutral-950 flex flex-col lg:flex-row">
      {/* Left Side - Image */}
      <div className="lg:w-1/2 w-full h-64 lg:h-auto">
        <img
          src={aboutImage}
          alt="About Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Grid Content */}
      <div className="lg:w-1/2 w-full flex items-center justify-center px-6 py-24 sm:py-32 lg:px-16 text-black">
        <div className="grid gap-8 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Ethos</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-black">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
