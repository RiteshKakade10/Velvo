import React from "react";
import { motion } from "framer-motion";

function CareersPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Join Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          We’re looking for passionate, creative, and driven individuals to
          shape the future with us.
        </motion.p>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-8 md:px-20 bg-gradient-to-b from-black to-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-12 text-center"
        >
          Why Work With Us?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Innovation",
              desc: "Be part of cutting-edge projects that make a difference.",
            },
            {
              title: "Growth",
              desc: "Learn, grow, and excel in your career with constant support.",
            },
            {
              title: "Culture",
              desc: "Work in a collaborative, fun, and inspiring environment.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 px-8 md:px-20 bg-black">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-12 text-center"
        >
          Open Roles
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              role: "Frontend Developer",
              location: "Remote / On-site",
              type: "Full-time",
            },
            {
              role: "Backend Engineer",
              location: "Remote",
              type: "Full-time",
            },
            {
              role: "UI/UX Designer",
              location: "On-site (Mumbai)",
              type: "Internship",
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold">{job.role}</h3>
                <p className="text-gray-400">
                  {job.location} • {job.type}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-4 md:mt-0 bg-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
