import React, { useState } from 'react';
import { motion } from 'framer-motion';
import whitetshirt from '../assets/whitetshirt.jpg';
import tshirt2 from '../assets/womenshirt.jpg';
import tshirt3 from '../assets/tshirt3.jpg';
import { useCart } from '../CartContext';
import { useWishlist } from './Contexts/WishlistContext';

export default function Home() {
  const { toggleWishlist, wishlistItems } = useWishlist();
  const { addToCart, cartItems } = useCart();
  const [activeTab, setActiveTab] = useState('Featured');

  const tabs = ['Featured', 'Men', 'Hoodies', 'Accessories'];

  const allProducts = {
    Featured: [
      { id: 1, title: 'Classic Tee', image: whitetshirt, price: 999 },
      { id: 2, title: 'Bold Hoodie', image: tshirt2, price: 1299 },
      { id: 3, title: 'Summer Shirt', image: tshirt3, price: 899 },
      { id: 4, title: 'Printed Tee', image: tshirt3, price: 799 },
      { id: 5, title: 'Urban Fit', image: tshirt2, price: 1199 },
      { id: 6, title: 'Casual Crew', image: whitetshirt, price: 899 },
      { id: 7, title: 'Classic Tee', image: whitetshirt, price: 999 },
      { id: 8, title: 'Bold Hoodie', image: tshirt2, price: 1299 },
      { id: 9, title: 'Summer Shirt', image: tshirt3, price: 899 },
    ],
    Men: [
      { id: 7, title: 'Men T-Shirt', image: whitetshirt, price: 849 },
      { id: 8, title: 'Men Polo', image: tshirt3, price: 1099 },
      { id: 9, title: 'Men Classic Shirt', image: tshirt2, price: 999 },
      { id: 10, title: 'Men Fit Tee', image: whitetshirt, price: 799 },
      { id: 11, title: 'Men Oversized', image: tshirt3, price: 899 },
    ],
    Hoodies: [
      {
        id: 12,
        title: 'Grey Hoodie',
        image: 'https://images.unsplash.com/photo-1618354691373-1e5e3bcb756b?w=600&h=400&fit=crop&auto=format',
        price: 1399,
      },
      {
        id: 13,
        title: 'Zip-Up Hoodie',
        image: 'https://images.unsplash.com/photo-1602810310925-e0ba3f9d012b?w=600&h=400&fit=crop&auto=format',
        price: 1499,
      },
      {
        id: 14,
        title: 'Pullover Hoodie',
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=400&fit=crop&auto=format',
        price: 1299,
      },
      {
        id: 15,
        title: 'Navy Hoodie',
        image: 'https://images.unsplash.com/photo-1602810310471-d141fbfbd0dc?w=600&h=400&fit=crop&auto=format',
        price: 1399,
      },
      {
        id: 16,
        title: 'Cropped Hoodie',
        image: 'https://images.unsplash.com/photo-1600185366143-1c3f48f5849b?w=600&h=400&fit=crop&auto=format',
        price: 1199,
      },
    ],
    Accessories: [
      {
        id: 17,
        title: 'Wrist Band',
        image: 'https://images.unsplash.com/photo-1610945265065-44b0c5397b43?w=600&h=400&fit=crop&auto=format',
        price: 399,
      },
      {
        id: 18,
        title: 'Cap',
        image: 'https://images.unsplash.com/photo-1583267743650-d4cd9685d107?w=600&h=400&fit=crop&auto=format',
        price: 499,
      },
      {
        id: 19,
        title: 'Backpack',
        image: 'https://images.unsplash.com/photo-1611042552788-14b2c46a8b79?w=600&h=400&fit=crop&auto=format',
        price: 999,
      },
      {
        id: 20,
        title: 'Socks (Pack of 3)',
        image: 'https://images.unsplash.com/photo-1597099315732-4d51d397767b?w=600&h=400&fit=crop&auto=format',
        price: 299,
      },
      {
        id: 21,
        title: 'Tote Bag',
        image: 'https://images.unsplash.com/photo-1598032899407-9aaed5803671?w=600&h=400&fit=crop&auto=format',
        price: 599,
      },
    ],
  };

  const currentItems = allProducts[activeTab];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-black"
        >
          Welcome to VELVO
        </motion.h1> 
        <p className="mt-3 text-md sm:text-lg text-black max-w-xl mx-auto">
          Elevate your fashion game — modern fits, clean styles, and comfort that lasts.
        </p>
        <button className="mt-6 px-6 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-full font-semibold transition duration-300">
          Explore Collection
        </button>
      </section>

      {/* Tabs */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeTab === tab
                  ? 'bg-purple-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentItems.map((item) => {
            const inCart = cartItems.find((ci) => ci.id === item.id);
            const inWishlist = wishlistItems.some((wi) => wi.id === item.id);

            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg p-5 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">₹{item.price}</p>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(item)}
                  className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-full transition"
                >
                  {inCart ? `Add More (${inCart.qty})` : 'Add to Cart'}
                </button>

                {/* Toggle Wishlist */}
                <button
                  onClick={() => toggleWishlist(item)}
                  className={`mt-2 w-full border ${
                    inWishlist ? 'border-pink-500 text-pink-600' : 'border-gray-300 text-gray-600'
                  } py-2 rounded-full hover:bg-pink-50 transition font-medium`}
                >
                  {inWishlist ? '❤️ Added to Wishlist' : '🤍 Add to Wishlist'}
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}