import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const toggleWishlist = (item) => {
    setWishlistItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id); // Remove
      } else {
        return [...prev, item]; // Add
      }
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
