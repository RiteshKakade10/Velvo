import React from 'react';
import img1 from '../../assets/New1/FentySmurfs/Image.jpeg';
import img2 from '../../assets/New1/FentySmurfs/Image2.jpeg';
import img3 from '../../assets/New1/FentySmurfs/Image3.jpeg';
import img4 from '../../assets/New1/FentySmurfs/Image4.jpeg';
import img5 from '../../assets/New1/FentySmurfs/Image5.jpeg';

const shoes = [
  { name: 'Smurf Blue Blaze', price: '₹8,499', image: img1 },
  { name: 'Smurf Mono Fade', price: '₹9,199', image: img2 },
  { name: 'Glowstep Skycore', price: '₹7,899', image: img3 },
  { name: 'Smurf Mono Fade', price: '₹9,199', image: img4 },
  { name: 'Glowstep Skycore', price: '₹7,899', image: img5 },
];

export default function FENTYxSMURFS() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <main className="flex-grow pt-28 pb-0 px-6 md:px-20">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            FENTY x THE SMURFS
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-6">
            Rihanna’s iconic fashion house, FENTY, partners with the legendary Smurfs for a bold and playful streetwear capsule. High-fashion meets blue nostalgia in a drop that’s as fierce as it is fun.
          </p>
          <ul className="text-gray-300 text-left text-sm md:text-base space-y-2 max-w-xl mx-auto mb-10">
            <li>• Oversized hoodies, bold puffers, street-style staples</li>
            <li>• Statement jewelry & bags with Smurf detailing</li>
            <li>• Limited-edition unisex sneakers</li>
            <li>• Sustainable fabrics with high-fashion finishes</li>
          </ul>
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md">
            Explore the Drop
          </button>
        </section>

        {/* Product Grid */}
        <section className="mt-20 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Sneaker Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {shoes.map((shoe, index) => (
              <div key={index} className="text-center">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-64 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">{shoe.name}</h3>
                <p className="text-indigo-300 mt-1 text-lg">{shoe.price}</p>
                <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-md">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
