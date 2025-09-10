import React from "react";
import axios from "axios";

function RazorpayCheckout({ amount, user }) {
  // Dynamically load Razorpay checkout script
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    // Load Razorpay script
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      // 1️⃣ Create order from backend
      const { data: order } = await axios.post(
        "http://localhost:4040/api/payments/create-order",
        { amount }
      );

      // 2️⃣ Razorpay options
      const options = {
        key: order.key || process.env.REACT_APP_RAZORPAY_KEY_ID, // Fallback if needed
        amount: order.amount,
        currency: order.currency,
        name: "Velvo E-commerce",
        description: "Order Payment",
        order_id: order.id,
        handler: async function (response) {
          try {
            // 3️⃣ Verify payment on backend
            await axios.post(
              "http://localhost:4040/api/payments/verify-payment",
              response
            );
            alert("✅ Payment Verified Successfully!");
          } catch (err) {
            console.error(err);
            alert("❌ Payment Verification Failed!");
          }
        },
        prefill: {
          name: user?.name || "Guest",
          email: user?.email || "guest@example.com",
          contact: user?.contact || "0000000000",
        },
        theme: { color: "#000000" },
        modal: {
          ondismiss: function () {
            alert("❌ Payment Cancelled by user");
          },
        },
      };

      // 4️⃣ Open Razorpay checkout
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong while initiating payment");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
    >
      Pay ₹{amount}
    </button>
  );
}

export default RazorpayCheckout;
