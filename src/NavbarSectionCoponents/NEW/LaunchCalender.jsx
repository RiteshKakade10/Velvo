import React from "react";

import Img1 from '../../assets/LaunchCalender/shoes1.jpg'
import Img2 from '../../assets/LaunchCalender/cloth1.jpg'
import Img3 from '../../assets/LaunchCalender/cloth2.jpg'
import Img4 from '../../assets/LaunchCalender/cloth3.jpg'
import Img5 from '../../assets/LaunchCalender/shoes2.jpg'

const launches = [
  {
    date: "2025-09-01",
    product: "Autumn Collection Jacket",
    description: "A stylish autumn jacket for the fall season.",
    image: Img2,
  },
  {
    date: "2025-09-10",
    product: "Limited Edition Sneakers",
    description: "Sneakers with unique design and limited availability.",
    image: Img5,
  },
  {
    date: "2025-09-15",
    product: "Premium Jecket",
    description: "Premium leather Jacket with elegant design.",
    image: Img4,
  },
  {
    date: "2025-09-20",
    product: "Sports Shoes",
    description: "Popular Sports Shoes back in stock with new colors.",
    image: Img1,
  },
];

// Group launches by date
const getLaunchesByDate = () => {
  const grouped = {};
  launches.forEach((launch) => {
    if (!grouped[launch.date]) grouped[launch.date] = [];
    grouped[launch.date].push(launch);
  });
  return grouped;
};

function LaunchCalendar() {
  const launchesByDate = getLaunchesByDate();

  return (
    <div className="pt-28 bg-neutral-950 min-h-screen">
      {/* Page Header */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-14 text-center text-white tracking-widest uppercase">
        Launch Calendar
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12">
        {Object.keys(launchesByDate).map((date) => (
          <div
            key={date}
            className="bg-neutral-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Date Header */}
            <div className="bg-white text-black text-center py-3 font-semibold text-sm tracking-widest uppercase">
              {new Date(date).toDateString()}
            </div>

            {/* Launch Cards */}
            {launchesByDate[date].map((launch, index) => (
              <div
                key={index}
                className="p-6 border-t border-neutral-800 flex flex-col gap-4"
              >
                {/* Product Image */}
                {launch.image && (
                  <div className="relative w-full rounded-xl overflow-hidden shadow-md">
                    <img
                      src={launch.image}
                      alt={launch.product}
                      className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                  {launch.product}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {launch.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LaunchCalendar;
