import React from 'react';
import { useWishlist } from './Contexts/WishlistContext';

const WishList = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  // ✅ Calculate total price
  const totalPrice = wishlistItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="pt-40 min-h-screen bg-white-100 p-6">
      <h2 className="text-3xl font-semibold mb-2 text-center text-gray-800">
        My Wishlist ({wishlistItems.length})
      </h2>

      {/* ✅ Total */}
      {wishlistItems.length > 0 && (
        <p className="text-center text-lg text-purple-700 mb-6 font-semibold">
          Total: ₹{totalPrice}
        </p>
      )}

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-xl p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 object-contain mb-4 rounded"
              />
              <h3 className="text-lg font-medium text-gray-800">{item.title || item.name}</h3>
              <p className="text-purple-700 font-semibold mt-1">
                ₹{item.price}
              </p>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-auto bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition-all duration-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
