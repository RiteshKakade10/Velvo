import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // install lucide-react for icons

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="pt-40 bg-black text-white py-20 px-6 font-inter">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Let’s build the future of fashion — together.
        </h2>
        <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          VELVO isn’t just a brand — it’s a community. Contact us to become a
          part of it.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-900 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-center space-y-6 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-white" />
              <p>riteshkakade1096@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-white" />
              <p>+91 8626081096</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-white" />
              <p>Pune, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
