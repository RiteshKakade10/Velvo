import React from 'react';
import Shoes1 from '../../assets/New1/ShoesMostro/Shoes1.jpg'
import Shoes2 from '../../assets/New1/ShoesMostro/Shoes2.jpg'
import Shoes3 from '../../assets/New1/ShoesMostro/Shoes3.jpg'
import Shoes4 from '../../assets/New1/ShoesMostro/Shoes4.jpg'
import Shoes5 from '../../assets/New1/ShoesMostro/Shoes5.jpg'

const sneakers = [
  {
    name: 'Mostro Core Black',
    price: '₹6,999',
    image: Shoes1,
  },
  {
    name: 'Mostro White Flame',
    price: '₹7,499',
    image: Shoes2,
  },
  {
    name: 'Mostro Shadow Grey',
    price: '₹6,499',
    image: Shoes3,
  },
  {
    name: 'Mostro Blue Flame',
    price: '₹7,499',
    image: Shoes4,
  },
  {
    name: 'Mostro Red Grey',
    price: '₹6,499',
    image: Shoes5,
  },
];

// Define your footer content directly within this component, or you could import a separate Footer component
// if you want to keep the Mostro component itself cleaner.
const FooterContent = () => (
  <footer className="bg-gray-800 text-white py-8 px-4 sm:px-12 mt-16">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
      <div className="mb-4 sm:mb-0">
        <p className="text-lg font-semibold">Mostro Sneakers</p>
        <p className="text-sm text-gray-400">Step up your style game.</p>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
      </div>
      <p className="text-sm text-gray-500 mt-4 sm:mt-0">
        &copy; {new Date().getFullYear()} Mostro Inc. All rights reserved.
      </p>
    </div>
  </footer>
);


export default function Mostro() {
  return (
    
    // The main container now holds both the content and the footer
    <div className="pt-10 flex flex-col min-h-screen bg-neutral-950 text-white">
      {/* Main Content (adjust pt-20 based on navbar height) */}
      <main className="flex-grow px-4 sm:px-12 pt-24 pb-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-gray-800 tracking-wide">
          Mostro Sneakers Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sneakers.map((sneaker, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={sneaker.image}
                alt={sneaker.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {sneaker.name}
                </h3>
                <p className="mt-2 text-lg text-indigo-600 font-medium">
                  {sneaker.price}
                </p>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* The Footer is now directly rendered here within the Mostro component's div */}
      
    </div>
  );
}