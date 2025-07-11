import React from 'react';
import img1 from '../../assets/New1/FentySmurfs/Image.jpeg'
import img2 from '../../assets/New1/FentySmurfs/Image2.jpeg';
import img3 from '../../assets/New1/FentySmurfs/Image3.jpeg';
import img4 from '../../assets/New1/FentySmurfs/Image4.jpeg';
import img5 from '../../assets/New1/FentySmurfs/Image5.jpeg';


const shoes = [
  {
    name: 'Smurf Blue Blaze',
    price: '₹8,499',
    image: img1,
  },
  {
    name: 'Smurf Mono Fade',
    price: '₹9,199',
    image: img2,
  },
  {
    name: 'Glowstep Skycore',
    price: '₹7,899',
    image: img3,
  },
  {
    name: 'Smurf Mono Fade',
    price: '₹9,199',
    image: img4,
  },
  {
    name: 'Glowstep Skycore',
    price: '₹7,899',
    image: img5,
  },
];

export default function FENTYxSMURFS() {
  return (
    <div className="pt-40 flex flex-col min-h-screen bg-gradient-to-br from-[#0d0d2b] via-[#1a1a40] to-black text-white">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-4 sm:px-8">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 text-center shadow-2xl max-w-2xl transition duration-500 hover:scale-105 hover:shadow-indigo-500/50">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide animate-fade-in-down">
            FENTY x THE SMURFS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-indigo-200 leading-relaxed">
            Rihanna’s iconic fashion house, FENTY, partners with the legendary Smurfs for a bold and playful streetwear capsule. High-fashion meets blue nostalgia in a drop that’s as fierce as it is fun.
          </p>
          <ul className="mt-6 text-indigo-300 text-left text-sm sm:text-base space-y-2">
            <li>🔵 Oversized hoodies, bold puffers, street-style staples</li>
            <li>🔵 Statement jewelry & bags with Smurf detailing</li>
            <li>🔵 Limited-edition unisex sneakers</li>
            <li>🔵 Sustainable fabrics with high-fashion finishes</li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg">
            Explore the Drop
          </button>
        </div>

        {/* Product Section */}
        <section className="mt-20 w-full max-w-7xl px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-indigo-100">
            Sneaker Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shoes.map((shoe, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-indigo-500/40 transition duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold">{shoe.name}</h3>
                  <p className="mt-2 text-indigo-300 text-lg font-medium">{shoe.price}</p>
                  <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
