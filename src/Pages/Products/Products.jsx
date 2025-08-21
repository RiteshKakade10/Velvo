import React, { useEffect, useState } from "react";
import { getProducts } from '../../API/products';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="pt-20 px-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">📦 Product List</h2>
      
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-600 mb-2">{p.description || "No description"}</p>
              <p className="text-blue-500 font-bold mb-2">${p.price}</p>
              <p className="text-gray-500 text-sm">Category: {p.category || "N/A"}</p>
              <p className="text-gray-500 text-sm">Stock: {p.stock || 0}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
