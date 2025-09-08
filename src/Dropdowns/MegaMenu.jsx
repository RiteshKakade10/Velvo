import React from 'react';
import { Link } from 'react-router-dom';

const MegaMenu = ({ type, isMobile = false, onClose }) => {
  

const menus = {
    "new ⚡️": [
      {
        title: "Fast Lane Drip",
        items: ["Nitro ⚡️", "Mostro", "Palermo", "FENTY x SMURFS", "Jersey Styling", "Formula F1", "Launch Calendar"]
      },
      {
        title: "New Arrivals",
        items: ["Men's New Arrivals", "Women's New Arrivals", "Kid’s New Arrivals"]
      },
      {
        title: "Sneaker Store",
        items: ["Mostro", "Palermo", "Speedcat", "RS Collection", "Suede", "Rider"]
      },
    ],
    men: [
      {
        title: "Top Categories",
        items: ["T-Shirts", "Shoes", "Shorts", "Jackets", "Tracksuits", "Accessories"]
      },
      // {
      //   title: "Collections",
      //   items: ["BMW M Motorsport", "Scuderia Ferrari", "Mercedes AMG", "PUMA x One8"]
      // },
      {
        title: "Footwear",
        items: ["Running Shoes", "Sneakers", "Slides", "Training Shoes"]
      }
      // {
      //   title: "Sportswear",
      //   items: ["Cricket", "Football", "Running", "Gym & Training"]
      // }
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
      // {
      //   title: "Collections",
      //   items: ["Forever Faster", "PUMA x DUA LIPA", "Smurfs", "Studio Collection"]
      // }
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
    // motarsport: [
    //   {
    //     title: "F1 Teams",
    //     items: ["Scuderia Ferrari", "BMW M Motorsport", "Mercedes AMG"]
    //   },
    //   {
    //     title: "Motorsport Footwear",
    //     items: ["Speedcat", "Drift Cat", "Kart Cat"]
    //   },
    //   {
    //     title: "Jackets & Tees",
    //     items: ["Bomber Jackets", "Race Tees", "Driver Merch"]
    //   }
    // ],
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
    // nitro: [
    //   {
    //     title: "Nitro Running Tech",
    //     items: ["Deviate Nitro", "Velocity Nitro", "Liberate Nitro", "Magnify Nitro"]
    //   },
    //   {
    //     title: "For Activities",
    //     items: ["Road Running", "Trail Running", "Long Distance"]
    //   },
    //   {
    //     title: "For You",
    //     items: ["Men's Nitro", "Women's Nitro", "Nitro Elite"]
    //   }
    //]
  };

  const content = menus[type];
  if (!content) return null;

  const slugify = (text) =>
    text
      .trim()
      .toLowerCase()
      .replace(/’/g, '')
      .replace(/'/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+$/, '')
      .replace(/^[-]+/, '');

  return (
    <div className={`w-full ${isMobile ? '' : 'relative overflow-x-hidden'}`}>
      <div
        className={`${
          isMobile
            ? 'bg-black text-white w-full py-2 px-2'
            : 'bg-white text-black shadow-lg border border-gray-200 rounded-md min-w-[600px] max-w-[90vw] mx-auto p-4 grid grid-cols-2 md:grid-cols-4 gap-4 z-50'
        }`}
      >
        {content.map((col, index) => (
          <div key={index} className={`${isMobile ? 'mb-3' : ''}`}>
            <h4 className={`font-semibold mb-1 text-sm ${isMobile ? 'text-gray-300' : 'text-gray-800'}`}>
              {col.title}
            </h4>
            <ul className="text-sm">
              {col.items.map((item, idx) => {
                const slug = slugify(item);
                const path = `/New/${slug}`;
                return (
                  <li key={idx}>
                    <Link
                      to={path}
                      className={`block px-2 py-1 rounded-md transition-all duration-200
                        ${isMobile
                          ? 'text-gray-200 hover:bg-gray-800 hover:text-white'
                          : 'text-gray-700 hover:bg-black hover:text-white'
                        }`}
                      onClick={() => {
                        if (isMobile && onClose) {
                          onClose(); // 🔥 Close the navbar
                        }
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;


