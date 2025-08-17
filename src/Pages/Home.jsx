import React from 'react';
import { motion } from 'framer-motion';
import whitetshirt from '../assets/whitetshirt.jpg';
import tshirt2 from '../assets/womenshirt.jpg';
import tshirt3 from '../assets/tshirt3.jpg';
import { useCart } from '../CartContext';
import { useWishlist } from './Contexts/WishlistContext';

export default function Home() {
  const { toggleWishlist, wishlistItems } = useWishlist();
  const { addToCart, cartItems } = useCart();

  const allProducts = {
    Featured: [
      { id: 1, title: 'Classic Tee', image: whitetshirt, price: 999 },
      { id: 2, title: 'Bold Hoodie', image: tshirt2, price: 1299 },
      { id: 3, title: 'Summer Shirt', image: tshirt3, price: 899 },
      { id: 4, title: 'Streetwear Oversize Tee', image: whitetshirt, price: 1099 },
    ],
    Men: [
      { id: 5, title: 'Men T-Shirt', image: whitetshirt, price: 849 },
      { id: 6, title: 'Men Polo', image: tshirt3, price: 1099 },
      { id: 7, title: 'Men Classic Shirt', image: tshirt2, price: 999 },
      { id: 8, title: 'Men Oversized Hoodie', image: whitetshirt, price: 1399 },
    ],
    Hoodies: [
      {
        id: 9,
        title: 'Grey Hoodie',
        image: 'https://images.unsplash.com/photo-1618354691373-1e5e3bcb756b?w=600&h=400&fit=crop&auto=format',
        price: 1399,
      },
      {
        id: 10,
        title: 'Zip-Up Hoodie',
        image: 'https://images.unsplash.com/photo-1602810310925-e0ba3f9d012b?w=600&h=400&fit=crop&auto=format',
        price: 1499,
      },
      {
        id: 11,
        title: 'Black Hoodie',
        image: 'https://images.unsplash.com/photo-1602810311005-1d2e7e0eabc3?w=600&h=400&fit=crop&auto=format',
        price: 1599,
      },
      {
        id: 12,
        title: 'White Minimal Hoodie',
        image: 'https://images.unsplash.com/photo-1594633312681-5f47f5f3c84f?w=600&h=400&fit=crop&auto=format',
        price: 1499,
      },
    ],
    Accessories: [
      {
        id: 13,
        title: 'Cap',
        image: 'https://images.unsplash.com/photo-1583267743650-d4cd9685d107?w=600&h=400&fit=crop&auto=format',
        price: 499,
      },
      {
        id: 14,
        title: 'Backpack',
        image: 'https://images.unsplash.com/photo-1611042552788-14b2c46a8b79?w=600&h=400&fit=crop&auto=format',
        price: 999,
      },
      {
        id: 15,
        title: 'Leather Wallet',
        image: 'https://images.unsplash.com/photo-1592503253544-8e1478933a8c?w=600&h=400&fit=crop&auto=format',
        price: 799,
      },
      {
        id: 16,
        title: 'Sunglasses',
        image: 'https://images.unsplash.com/photo-1520962918287-7448c2878f65?w=600&h=400&fit=crop&auto=format',
        price: 1299,
      },
    ],
  };

  // Flatten all products into a single array
  const mergedProducts = Object.values(allProducts).flat();

  return (
    <div className="pt-45 min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="text-center py-16 px-4">
        <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold 
                      text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] mb-8"
          >
            Welcome to VELVO
          </motion.h1>
        <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          At <span className="text-red-400 font-bold">VELVO</span>, we believe fashion is more than 
          just clothing — it’s a <span className="text-indigo-400">statement of identity</span>.  
          Our collections are inspired by <span className="text-blue-300">modern streetwear</span>, 
          balanced with <span className="text-indigo-400">timeless elegance</span> and crafted for 
          <span className="text-blue-400">unmatched comfort</span>.  
          <br /><br />
          From <span className="text-blue-400">bold everyday fits</span> to 
          <span className="text-indigo-400">premium lifestyle pieces</span>,  
          every design is made to help you express confidence, creativity, and 
          <span className="text-blue-400">authentic style</span>.  
          Step into the world of <span className="text-blue-400 font-semibold">VELVO</span> — 
          where fashion meets <span className="text-indigo-400">performance</span> and 
          <span className="text-blue-400">attitude</span>.
        </p>

        <button 
          onClick={()=>document.getElementById("sneakers-section").scrollIntoView({ behavior: "smooth" })}
          className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                     text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
        >
          Explore Collection ↓
        </button>
      </section>

      {/* All Products in ONE GRID */}
      <section id="sneakers-section" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center 
                       text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
          All Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {mergedProducts.map((item) => {
            const inCart = cartItems.find((ci) => ci.id === item.id);
            const inWishlist = wishlistItems.some((wi) => wi.id === item.id);

            return (
              <motion.div
                key={item.id}
                className="bg-gray-900 rounded-b-2xl shadow-md hover:shadow-xl p-5 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">₹{item.price}</p>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-3 w-full bg-gradient-to-r from-blue-500 to-indigo-600 
                             hover:opacity-90 text-white font-medium py-2 rounded-full transition shadow-md"
                >
                  {inCart ? `Add More (${inCart.qty})` : 'Add to Cart'}
                </button>

                <button
                  onClick={() => toggleWishlist(item)}
                  className={`mt-2 w-full border ${
                    inWishlist
                      ? 'border-indigo-500 text-blue-400'
                      : 'border-gray-600 text-gray-300'
                  } py-2 rounded-full hover:bg-indigo-50/10 transition font-medium`}
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
