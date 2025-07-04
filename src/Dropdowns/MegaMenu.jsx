const MegaMenu = ({ type, isMobile = false }) => {
  
  const menus = {
    "new ⚡️": [
      {
        title: "Fast Lane Drip",
        items: ["Nitro ⚡️", "Mostro", "Palermo", "FENTY x SMURFS", "Jersey Styling", "PUMA x RCB", "Launch Calendar"]
      },
      {
        title: "New Arrivals",
        items: ["Men's New Arrivals", "Women's New Arrivals", "Kid’s New Arrivals"]
      },
      {
        title: "Sneaker Store",
        items: ["Mostro", "Palermo", "Speedcat", "RS Collection", "Suede", "Rider"]
      },
      {
        title: "Running Store",
        items: ["Run Clubs", "Nitro", "Softride", "Activewear"]
      },
      {
        title: "Training Store",
        items: ["Strength", "Mobility", "Endurance", "Basics"]
      }
    ],
    men: [
      {
        title: "Top Categories",
        items: ["T-Shirts", "Shoes", "Shorts", "Jackets", "Tracksuits", "Accessories"]
      },
      {
        title: "Collections",
        items: ["BMW M Motorsport", "Scuderia Ferrari", "Mercedes AMG", "PUMA x One8"]
      },
      {
        title: "Footwear",
        items: ["Running Shoes", "Sneakers", "Slides", "Training Shoes"]
      },
      {
        title: "Sportswear",
        items: ["Cricket", "Football", "Running", "Gym & Training"]
      }
    ],
    women: [
      {
        title: "Essentials",
        items: ["Leggings", "Sports Bras", "Tees", "Tops", "Tights"]
      },
      {
        title: "Trendy",
        items: ["Chunky Sneakers", "High-Waist Tights", "Oversized Tees"]
      },
      {
        title: "Footwear",
        items: ["Running", "Training", "Slides", "Sneakers"]
      },
      {
        title: "Collections",
        items: ["Forever Faster", "PUMA x DUA LIPA", "Smurfs", "Studio Collection"]
      }
    ],
    sports: [
      {
        title: "Cricket",
        items: ["Bats", "Balls", "Apparel", "Footwear"]
      },
      {
        title: "Football",
        items: ["Studs", "Kits", "Shin Guards", "Goalkeeper Gloves"]
      },
      {
        title: "Running",
        items: ["Shoes", "Apparel", "Socks"]
      },
      {
        title: "Training",
        items: ["Gym Shoes", "Training T-Shirts", "Bags"]
      }
    ],
    motarsport: [
      {
        title: "F1 Teams",
        items: ["Scuderia Ferrari", "BMW M Motorsport", "Mercedes AMG"]
      },
      {
        title: "Motorsport Footwear",
        items: ["Speedcat", "Drift Cat", "Kart Cat"]
      },
      {
        title: "Jackets & Tees",
        items: ["Bomber Jackets", "Race Tees", "Driver Merch"]
      }
    ],
    lifestyle: [
      {
        title: "Everyday Wear",
        items: ["T-Shirts", "Sneakers", "Slides", "Joggers"]
      },
      {
        title: "Style Collections",
        items: ["Retro Vibes", "Streetwear", "Monochrome Looks"]
      },
      {
        title: "Accessories",
        items: ["Caps", "Socks", "Sling Bags", "Backpacks"]
      }
    ],
    kids: [
      {
        title: "Boys",
        items: ["T-Shirts", "Shorts", "Shoes", "Tracksuits"]
      },
      {
        title: "Girls",
        items: ["Leggings", "Tops", "Sneakers", "Sets"]
      },
      {
        title: "Infants",
        items: ["Onesies", "Mini Sneakers", "Cute Caps"]
      }
    ],
    sale: [
      {
        title: "Deals By Category",
        items: ["Footwear", "Apparel", "Accessories"]
      },
      {
        title: "Deals for",
        items: ["Men", "Women", "Kids"]
      },
      {
        title: "Top Picks",
        items: ["Under ₹999", "Flat 50% Off", "Buy 1 Get 1"]
      }
    ],
    nitro: [
      {
        title: "Nitro Running Tech",
        items: ["Deviate Nitro", "Velocity Nitro", "Liberate Nitro", "Magnify Nitro"]
      },
      {
        title: "For Activities",
        items: ["Road Running", "Trail Running", "Long Distance"]
      },
      {
        title: "For You",
        items: ["Men's Nitro", "Women's Nitro", "Nitro Elite"]
      }
    ]
  };

  const content = menus[type];
  if (!content) return null;

 return (
  <div className={`w-full ${isMobile ? '' : 'relative overflow-x-hidden'}`}>
    <div
      className={`${
        isMobile
          ? 'bg-black text-white w-full py-2 px-3 relative'
          : 'bg-white text-black shadow-lg border border-gray-200 rounded-md min-w-[700px] max-w-[95vw] mx-auto p-6 grid grid-cols-2 md:grid-cols-5 gap-6 z-50'
      }`}
    >
      {content.map((col, index) => (
        <div key={index} className={`${isMobile ? 'mb-4' : ''}`}>
          <h4 className="font-bold mb-2">{col.title}</h4>
          <ul className="text-sm space-y-1">
            {col.items.map((item, idx) => (
              <li
                key={idx}
                className={`cursor-pointer ${
                  isMobile
                    ? 'text-white hover:text-red-500'
                    : 'text-gray-800 hover:underline transition duration-150'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
};

export default MegaMenu;
