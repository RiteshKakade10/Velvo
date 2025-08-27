import React from 'react';
import img1 from '../../assets/New1/FentySmurfs/Image.jpeg';
import img2 from '../../assets/New1/FentySmurfs/Image2.jpeg';
import img3 from '../../assets/New1/FentySmurfs/Image3.jpeg';
import img4 from '../../assets/New1/FentySmurfs/Image4.jpeg';
import img5 from '../../assets/New1/FentySmurfs/Image5.jpeg';
// Background image for hero section
import heroBg from '../../assets/New1/FentySmurfs/bg.jpg';

const shoes = [
  { name: 'Smurf Blue Blaze', price: '₹8,499', image: img1 },
  { name: 'Smurf Mono Fade', price: '₹9,199', image: img2 },
  { name: 'Glowstep Skycore', price: '₹7,899', image: img3 },
  { name: 'Smurf Mono Fade', price: '₹9,199', image: img4 },
  { name: 'Glowstep Skycore', price: '₹7,899', image: img5 },
];

export default function FENTYxSMURFS() {
  return (
    <div
      className="min-h-screen flex flex-col text-black"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability */}
      

      <main className="flex-grow pt-28 pb-0 px-6 md:px-20 relative z-10">
        {/* Hero Section */}
        <section className="text-center py-20 px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white stylish-heading">
              FENTY x THE SMURFS
            </h1>
            <p className="text-base md:text-lg text-white mb-6 max-w-3xl mx-auto stylish-text">
              Rihanna’s iconic fashion house, FENTY, partners with the legendary Smurfs for a bold and playful streetwear capsule.
              High-fashion meets blue nostalgia in a drop that’s as fierce as it is fun.
            </p>
            <ul className="text-white text-left text-sm md:text-base space-y-2 max-w-xl mx-auto mb-10 stylish-text">
              <li>• Oversized hoodies, bold puffers, street-style staples</li>
              <li>• Statement jewelry & bags with Smurf detailing</li>
              <li>• Limited-edition unisex sneakers</li>
              <li>• Sustainable fabrics with high-fashion finishes</li>
            </ul>
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md stylish-text">
              Explore the Drop
            </button>
          </section>

        {/* Product Grid */}
        <section>
          <h2>Click here to buy products</h2>
        </section>
      </main>
    </div>
  );
}
