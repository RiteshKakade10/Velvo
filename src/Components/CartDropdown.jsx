import React from 'react';
import { useCart } from '../CartContext';

const CartDropdown = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <div className="pt-40 min-h-screen bg-white px-4 sm:px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center border-b pb-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-3/4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-500 text-sm">Price: ₹{item.price}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 text-right sm:w-1/4">
                  <p className="text-lg font-bold text-purple-700">
                    ₹{item.qty * item.price}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-10 text-xl font-semibold text-right text-gray-800">
            <span>Total: ₹{total.toLocaleString('en-IN')}</span>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full text-lg font-semibold transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
