import React from 'react';
import { useCart } from '../CartContext'; // Assuming CartContext is correctly set up
import {Link} from 'react-router-dom'

const CartDropdown = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <div className="pt-40 min-h-screen bg-gray-50 px-4 sm:px-8 font-inter"> {/* Changed bg-white to bg-gray-50 for subtle background */}
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg shadow-md max-w-lg mx-auto">
          <p className="text-xl text-gray-600 mb-4">Your cart is empty.</p>
          <p className="text-gray-500 text-center max-w-sm">
            Looks like you haven't added anything to your cart yet. Please <Link className="text-blue-700 underline" to="/acc">Sign in</Link> to view your saved Cart!
          </p>
          {/* You might want to add a "Go to Shop" button here */}
          {/* <Link to="/" className="mt-6 bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg">
            Start Shopping
          </Link> */}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg"> {/* Added container for cart items */}
          <div className="space-y-6"> {/* Adjusted spacing */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 pb-6 last:border-b-0 last:pb-0" // Added border and padding for each item
              >
                <div className="flex items-center gap-6 w-full sm:w-3/4"> {/* Increased gap */}
                  <img
                    src={item.image || `https://placehold.co/96x96/E2E8F0/1A202C?text=Product`} // Fallback placeholder image
                    alt={item.title}
                    className="w-28 h-28 object-cover rounded-lg shadow-sm" // Larger image, rounded corners
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-base">Price: ₹{item.price.toLocaleString('en-IN')}</p> {/* Formatted price */}
                    <div className="flex items-center mt-3 space-x-3"> {/* Increased spacing */}
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-bold transition-colors duration-200 text-lg" // Styled buttons
                      >
                        -
                      </button>
                      <span className="text-lg font-medium text-gray-800">{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-bold transition-colors duration-200 text-lg" // Styled buttons
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-0 text-right w-full sm:w-1/4">
                  <p className="text-2xl font-bold text-purple-700 mb-2">
                    ₹{(item.qty * item.price).toLocaleString('en-IN')}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 text-sm hover:underline font-medium" // Stronger red for remove
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-8 text-2xl font-bold text-right text-gray-900 border-t border-gray-200 pt-6">
            <span>Order Total: ₹{total.toLocaleString('en-IN')}</span>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
