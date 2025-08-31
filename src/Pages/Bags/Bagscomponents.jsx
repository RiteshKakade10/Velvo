import React, { useState } from "react";
import { motion } from "framer-motion";
import BagBg from "../../assets/Bags/bag9.jpg";
import bag1 from "../../assets/Bags/purse2.jpg";
import bag2 from "../../assets/Bags/purse1.jpg";
import bag3 from "../../assets/Bags/purse1.jpg";
import bag4 from "../../assets/Bags/purse2.jpg";
import bag5 from "../../assets/Bags/purse1.jpg";
import bgVid from "../../assets/Bags/bagsBG.mp4";

export default function Bagscomponents() {
  const bags = [
    { id: 1, img: bag1, title: "Classic Leather Bag", price: "₹3,499" },
    { id: 2, img: bag2, title: "Travel Backpack", price: "₹2,199" },
    { id: 3, img: bag3, title: "Luxury Handbag", price: "₹5,899" },
    { id: 4, img: bag4, title: "Sports Duffel Bag", price: "₹1,799" },
    { id: 5, img: bag5, title: "Casual Tote Bag", price: "₹1,299" },
    { id: 6, img: bag1, title: "Office Bag", price: "₹3,999" },
    { id: 7, img: bag2, title: "Laptop Backpack", price: "₹2,499" },
    { id: 8, img: bag3, title: "Designer Handbag", price: "₹6,199" },
    { id: 9, img: bag4, title: "Gym Duffel", price: "₹1,999" },
    { id: 10, img: bag5, title: "Shopping Tote", price: "₹1,499" },
    { id: 11, img: bag4, title: "Gym Duffel", price: "₹1,999" },
    { id: 12, img: bag5, title: "Shopping Tote", price: "₹1,499" },
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = bags.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(bags.length / productsPerPage);

  return (
    <div className="relative pt-24 px-6 md:px-20 min-h-screen text-white bg-black">
      {/* Background */}
      <img
        src={BagBg}
        alt="Bags Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* HERO */}
      <section className="relative rounded-2xl overflow-hidden shadow-2xl h-[80vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
            Premium Bags Collection
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Discover elegance, comfort, and durability with our exclusive range
            of bags — perfect for work, travel, and everyday lifestyle.
          </p>

          {/* Jump Button */}
          <motion.button
            onClick={() =>
              document
                .getElementById("products")
                .scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 ease-in-out"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </section>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        {[
          {
            title: "Durable Quality",
            text: "Crafted with premium materials for long-lasting use.",
          },
          {
            title: "Stylish Designs",
            text: "Modern, elegant, and versatile bags for every occasion.",
          },
          {
            title: "Comfort & Utility",
            text: "Spacious and ergonomic designs to fit your lifestyle.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/20 hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.text}</p>
          </div>
        ))}
      </motion.div>

      {/* Product Showcase */}
      <section className="mt-24 relative pb-20" id="products">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl shadow-2xl"
        >
          {/* Left Video Section */}
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <video
              src={bgVid}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold">
                Stylish & Practical Bags
              </h2>
              <p className="text-sm md:text-base text-gray-200 max-w-sm">
                Whether it’s a business meeting, a weekend trip, or a casual
                outing, our bag collection fits every moment of your lifestyle.
              </p>
            </div>
          </div>

          {/* Right Grid (Paginated Products) */}
          <div className="grid grid-cols-2 gap-6">
            {currentProducts.map((bag) => (
              <motion.div
                key={bag.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/10 rounded-2xl shadow-lg overflow-hidden border border-white/20"
              >
                <img
                  src={bag.img}
                  alt={bag.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{bag.title}</h3>
                  <p className="text-gray-300">{bag.price}</p>
                  <motion.button className="mt-3 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 ease-in-out">
                    Buy
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-10 relative z-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-red-600 disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-gray-300">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-red-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
