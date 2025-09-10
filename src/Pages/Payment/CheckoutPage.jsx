import React from "react";
import RazorpayCheckout from "../Payment/RazorpayCheckout.jsx";

function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-xl mb-4">Your Order</h2>
        <p className="mb-4">Velvo Premium T-shirt</p>
        <p className="text-lg font-semibold mb-6">Total: ₹500</p>
        <RazorpayCheckout amount={500} />
      </div>
    </div>
  );
}

export default CheckoutPage;
