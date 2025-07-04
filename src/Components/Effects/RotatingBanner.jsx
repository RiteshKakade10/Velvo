import { useEffect, useState } from 'react';

const RotatingBanner = () => {
  const messages = [
    "SOLVE YOUR QUERIES FASTER THAN EVER! SEND US A 'HI' ON WHATSAPP AT 6364929121 CLICK HERE",
    "FREE RETURNS AND FREE EXCHANGE.",
    "⚡️1-DAY EXPRESS DELIVERY NOW AVAILABLE IN BANGALORE!",
    "EXTRA 5% OFF AND FREE SHIPPING ON ALL ONLINE PAYMENTS"
  ];

  const [index, setIndex] = useState(0);

  // Change message every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3500); // 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-red-600 text-white text-sm py-2 text-center">
      {messages[index]}
    </div>
  );
};

export default RotatingBanner;
