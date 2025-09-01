import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqSections = [
  {
    title: "How To Place An Order",
    items: [
      {
        q: "Steps to place an order",
        a: `Browse the article of your choice → View details → Select size → Add to cart → Enter shipping address → Choose payment option (NetBanking, Card, Wallet, or COD) → Confirm order. You’ll receive SMS & Email confirmation.`,
      },
      {
        q: "Can I add item or change size after placing an order?",
        a: "Currently, size changes or adding new items isn’t possible. Please place a new order and return/cancel the existing one.",
      },
      {
        q: "Can I change my delivery address?",
        a: "No, the shipping address cannot be changed once an order is successfully placed.",
      },
      {
        q: "What emails will I receive?",
        a: "1) Order confirmation email. 2) Shipping confirmation with tracking link. 3) Delivery confirmation.",
      },
    ],
  },
  {
    title: "Payment",
    items: [
      {
        q: "Which payment methods do you accept?",
        a: "Credit Cards, Debit Cards, Internet Banking, UPI, COD, Wallets. (No international cards).",
      },
      {
        q: "What if my payment fails but money is debited?",
        a: "Amount is auto-refunded within 7 business days. If not, contact us with Transaction ID, Order date, Bank name. Refunds are completed within 15 days max.",
      },
      {
        q: "Is COD available?",
        a: "Yes, COD is available for orders below ₹7499 with an additional non-refundable fee of ₹99.",
      },
    ],
  },
  {
    title: "Delivery",
    items: [
      {
        q: "How to track my order?",
        a: "Login → Profile → Orders → Select order → Track. Or WhatsApp us at 6364929121.",
      },
      {
        q: "How long does delivery take?",
        a: "Orders ship in 3 days, delivery within 5 working days after shipment (serviceable locations).",
      },
      {
        q: "Why can’t you ship my order?",
        a: "Possible reasons: Item out of stock, failed quality check, or location not serviceable.",
      },
    ],
  },
  {
    title: "Returns & Cancellations",
    items: [
      {
        q: "How do I return my product?",
        a: "Go to Profile → Orders → Select order → Initiate Return. Or WhatsApp us at 6364929121. Refunds processed within 48 hours after quality check.",
      },
      {
        q: "How do I cancel my order?",
        a: "Raise a request before dispatch. If already shipped, refuse delivery.",
      },
      {
        q: "When will I get my refund?",
        a: "Prepaid: 5–15 working days. COD: Refund link shared via SMS/Email within 48 hours (valid for 7 days).",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        q: "How do I reset my password?",
        a: "Login → Profile → Forgot Password → Follow steps.",
      },
      {
        q: "Does Puma offer product warranty?",
        a: "Yes, all Puma products come with a 90-day warranty (T&C apply).",
      },
      {
        q: "Do I need an account to order?",
        a: "No, you can checkout as guest. But having an account saves your details for faster checkout.",
      },
    ],
  },
  {
    title: "Promotions & Vouchers",
    items: [
      {
        q: "How do I apply a voucher code?",
        a: "Enter the code under 'Coupon Code' at checkout. Make sure the voucher applies to your products.",
      },
      {
        q: "Will my voucher be refunded if I cancel?",
        a: "Discount vouchers are not refunded in case of returns/cancellations.",
      },
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState({ section: null, index: null });

  const toggle = (sectionIndex, itemIndex) => {
    setOpen(
      open.section === sectionIndex && open.index === itemIndex
        ? { section: null, index: null }
        : { section: sectionIndex, index: itemIndex }
    );
  };

  return (
    <div className="pt-40 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Help Center & FAQs
        </motion.h1>

        {/* Sections */}
        {faqSections.map((section, sIndex) => (
          <div
            key={sIndex}
            className="mb-10 last:mb-0" // removes extra margin after last section
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.items.map((item, iIndex) => (
                <div
                  key={iIndex}
                  className="bg-neutral-900 rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggle(sIndex, iIndex)}
                    className="w-full text-left px-4 sm:px-6 py-4 flex justify-between items-center focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-semibold">
                      {item.q}
                    </span>
                    <motion.span
                      initial={false}
                      animate={{
                        rotate:
                          open.section === sIndex && open.index === iIndex
                            ? 45
                            : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="text-xl sm:text-2xl font-bold"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {open.section === sIndex && open.index === iIndex && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 sm:px-6 pb-4 text-gray-300 text-sm sm:text-base"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
