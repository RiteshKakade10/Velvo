import React from 'react';

const products = [
  {
    id: 1,
    name: 'Casual T-Shirt',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155228c2e1?auto=format&fit=crop&w=600&q=80',
    price: '₹699',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    image: 'https://images.unsplash.com/photo-1618354691221-6c9527f32174?auto=format&fit=crop&w=600&q=80',
    price: '₹1,999',
  },
  {
    id: 3,
    name: 'Checked Shirt',
    image: 'https://images.unsplash.com/photo-1520975922203-a485f1baf7e9?auto=format&fit=crop&w=600&q=80',
    price: '₹899',
  },
  {
    id: 4,
    name: 'Hoodie',
    image: 'https://images.unsplash.com/photo-1602810318383-32820f57c8b0?auto=format&fit=crop&w=600&q=80',
    price: '₹1,299',
  },
];

export default function Men() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Men's Clothing</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
              <p className="mt-1 text-gray-500">{item.price}</p>
              <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
