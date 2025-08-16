import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  //handelling submit
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:4040/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!response.ok) throw new Error("Failed to send message");

    alert("Message sent successfully!");
    setForm({ name: '', email: '', message: '' });
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div>
      {/* Contact Section */}
      <section className="pt-40 bg-white py-20 px-6 max-w-4xl mx-auto font-inter">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
         “Let’s build the future of fashion — together.”
        </h2>
        <p className="text-center text-gray-600 text-base md:text-lg max-w-xl mx-auto mb-8">
        VELVO isn’t just a brand — it’s a community. Contact us to become a part of it.
        </p>
        

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center text-gray-600 text-sm">
          <p>Email: riteshkakade1096@gmail.com</p>
          <p>Phone: +91 8626081096</p>
          <p>Location: Pune, India</p>
        </div>
      </section>
    </div>
  );
}
