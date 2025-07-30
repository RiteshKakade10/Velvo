import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Luxury Watch',
    category: 'Accessories',
    price: '₹8,499',
    image: '/images/watch.jpg',
  },
  {
    id: 2,
    title: 'Slim Fit Shirt',
    category: 'Clothing',
    price: '₹1,299',
    image: '/images/shirt.jpg',
  },
  {
    id: 3,
    title: 'Running Shoes',
    category: 'Footwear',
    price: '₹3,499',
    image: '/images/shoes.jpg',
  },
  {
    id: 4,
    title: 'Leather Jacket',
    category: 'Clothing',
    price: '₹5,999',
    image: '/images/jacket.jpg',
  },
];

export default function MensNewArrival() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-16 text-white min-h-screen bg-neutral-950">
      <motion.h1 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Men's New Arrivals
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="border rounded-2xl overflow-hidden p-4 shadow-md hover:shadow-lg transition"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.category}</p>
            <p className="text-lg font-bold text-gray-800 mt-2">{item.price}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
