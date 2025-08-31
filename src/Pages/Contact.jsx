import React, { useState } from "react";
import BgVideo from "../assets/Contact/contactpage.mp4";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    country: "IND",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
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
      setForm({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        country: "US",
        message: "",
        agree: false,
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="pt-15 min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Background Video */}
      <div className="pt-25 relative w-full h-64 lg:h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        
      </div>

      {/* Right - Form Section */}
      <div className="flex items-center justify-center px-6 py-24 sm:py-32 lg:px-16 bg-white">
        <div className="w-full max-w-xl">
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Contact Sales
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Have a question? Our team is ready to help.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  First name
                </label>
                <input
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  Last name
                </label>
                <input
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Company
              </label>
              <input
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Phone number
              </label>
              <div className="flex">
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="rounded-l-md border-gray-300 focus:ring-indigo-600 focus:border-indigo-600"
                >
                  <option value="US">US</option>
                  <option value="IND">IND</option>
                  <option value="CA">CA</option>
                  <option value="EU">EU</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  placeholder="123-456-7890"
                  value={form.phone}
                  onChange={handleChange}
                  className="text-black flex-grow rounded-r-md border-gray-300 focus:ring-indigo-600 focus:border-indigo-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600"
                required
              />
            </div>

            <div className="flex gap-x-2 items-center">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                checked={form.agree}
                onChange={handleChange}
                className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
              />
              <label htmlFor="agree" className="text-sm text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy policy
                </a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
