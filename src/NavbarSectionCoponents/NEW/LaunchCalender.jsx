import React from 'react';

// Sample data for upcoming fashion product launches
const launches = [
  {
    date: '2025-09-01',
    product: 'Autumn Collection Jacket',
    description: 'A stylish autumn jacket for the fall season.',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Sample video URL
  },
  {
    date: '2025-09-10',
    product: 'Limited Edition Sneakers',
    description: 'Sneakers with unique design and limited availability.',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    date: '2025-09-15',
    product: 'Designer Handbag',
    description: 'Premium leather handbag with elegant design.',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    date: '2025-09-20',
    product: 'Summer Dress Re-release',
    description: 'Popular summer dress back in stock with new colors.',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
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
    <div className="pt-16 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-white tracking-wider">
        Upcoming Fashion Product Launches
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {Object.keys(launchesByDate).map((date) => (
          <div
            key={date}
            className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="bg-indigo-700 text-white text-center py-3 font-semibold tracking-wide">
              {new Date(date).toDateString()}
            </div>

            {launchesByDate[date].map((launch, index) => (
              <div key={index} className="p-4 border-t border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-2">{launch.product}</h3>
                <p className="text-gray-300 mb-4">{launch.description}</p>
                
                {/* Video preview */}
                {launch.video && (
                  <video
                    className="w-full rounded-lg shadow-md"
                    src={launch.video}
                    controls
                    autoPlay={false}
                    loop
                    muted
                  ></video>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LaunchCalendar;
  