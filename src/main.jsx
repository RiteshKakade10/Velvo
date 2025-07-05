import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { WishlistProvider } from './Components/Contexts/WishlistContext';
import { CartProvider } from './CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);
