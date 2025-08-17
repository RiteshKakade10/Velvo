import React from 'react';
import Shoes1 from '../../assets/New1/ShoesMostro/Shoes1.jpg';
import Shoes2 from '../../assets/New1/ShoesMostro/Shoes2.jpg';
import Shoes3 from '../../assets/New1/ShoesMostro/Shoes3.jpg';
import Shoes4 from '../../assets/New1/ShoesMostro/Shoes4.jpg';
import Shoes5 from '../../assets/New1/ShoesMostro/Shoes5.jpg';

const monstroFashion = [
  { name: 'Mostro Core Black Sneakers', price: '₹6,999', category: 'Footwear', image: Shoes1 },
  { name: 'Mostro White Flame Sneakers', price: '₹7,499', category: 'Footwear', image: Shoes2 },
  { name: 'Mostro Shadow Grey Sneakers', price: '₹6,499', category: 'Footwear', image: Shoes3 },
  { name: 'Monstro Blue Flame Sneakers', price: '₹7,499', category: 'Footwear', image: Shoes4 },
  { name: 'Mostro Black T-shirt', price: '₹1,299', category: 'Apparel', image: Shoes5 },
  { name: 'Mostro Graphic Hoodie', price: '₹2,999', category: 'Apparel', image: 'https://images.unsplash.com/photo-1578632616428-f6825c9b8f2d?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Mostro Slim-Fit Jeans', price: '₹3,499', category: 'Apparel', image: 'https://images.unsplash.com/photo-1560731478-f80e9a7e0d37?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Mostro Signature Cap', price: '₹999', category: 'Accessories', image: 'https://images.unsplash.com/photo-1582234036109-17c1815f9e83?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Monstro Sport Socks (3-Pack)', price: '₹499', category: 'Accessories', image: 'https://images.unsplash.com/photo-1616892550186-b4844391216b?q=80&w=1974&auto=format&fit=crop' }
];

export default function Mostro() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-6">

      {/* Full-width discount header */}
      <header className="w-screen -mx-6 bg-gradient-to-r from-red to-indigo-400 text-white text-center py-12 shadow-md mb-12">
        <h2 className="text-4xl font-extrabold tracking-wide uppercase">
          🔥 Big Sale! Get Up To 40% Off On Mostro Collection 🔥
        </h2>
        <p className="text-lg md:text-xl font-medium mt-4">
          Limited Time Offer — Shop Now & Save More!
        </p>
      </header>

      {/* Intro section */}
      <section className="pt-3 min-h-screen flex flex-col items-center justify-start px-8 py-20">
        <h1 class="text-5xl md:text-7xl font-extrabold text-center mb-8 
           text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]
           tracking-wide">
          Mostro Sneakers
        </h1>
        <p className="max-w-3xl text-center text-lg md:text-xl text-gray-300 leading-relaxed">
          The <span className="text-blue-400 font-bold">Mostro Collection</span> is designed 
          to redefine your style. Inspired by modern streetwear and engineered 
          for maximum comfort, these sneakers bring together <span className="text-indigo-400">performance</span>, 
          <span className="text-blue-300"> elegance</span>, and <span className="text-indigo-500">bold looks</span>.  
          Whether on the streets or in the spotlight, step into confidence with Mostro.
        </p>

        <button 
          onClick={() => document.getElementById("sneakers-section").scrollIntoView({ behavior: "smooth" })}
          className="mt-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 
                     rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out font-semibold">
          Explore Collection ↓
        </button>
      </section>

      {/* Product grid */}
      <div id="sneakers-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {monstroFashion.map((sneaker, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={sneaker.image}
              alt={sneaker.name}
              className="w-72 h-72 object-cover rounded-b-2xl shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold tracking-wide">
              {sneaker.name}
            </h3>
            <p className="mt-2 text-lg font-bold text-gray-300">
              {sneaker.price}
            </p>
            <button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 
                               rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
