import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImgBG from "../assets/CareerPage/bgCareer.jpg";

function CareersPage() {
  const [openForm, setOpenForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    experience: "",
    resume: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:4040/EmpApplication", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, job: selectedJob }),
    });

    if (response.ok) {
      console.log("Data Submitted Successfully!!");
      setOpenForm(false);
    } else {
      console.log("Failed to submit:", response.statusText);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

  const jobs = [
    { role: "Frontend Developer", location: "Remote / On-site", type: "Full-time", Experience: "0-2" },
    { role: "Graphics Designer", location: "On-site (Pune)", type: "Full-Time", Experience: "0-1" },
    { role: "Backend Engineer", location: "Remote", type: "Full-time", Experience: "4-6" },
    { role: "UI/UX Designer", location: "On-site (Pune)", type: "Internship", Experience: "0-2" },
    { role: "DevOps Engineer", location: "Remote", type: "Full-time", Experience: "1-2" },
    { role: "Data Analytics", location: "On-site (Pune)", type: "Internship", Experience: "2-4" },
  ];

  return (
    <div className="pt-30 text-white min-h-screen flex flex-col">
      {/* Hero Background */}
      <img src={ImgBG} alt="" className="absolute inset-0 w-full h-full object-cover -z-10" />
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

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
          We’re looking for passionate, creative, and driven individuals to shape the future with us.
        </motion.p>
      </section>

      {/* Why Work With Us */}
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
            { title: "Innovation", desc: "Be part of cutting-edge projects that make a difference." },
            { title: "Growth", desc: "Learn, grow, and excel in your career with constant support." },
            { title: "Culture", desc: "Work in a collaborative, fun, and inspiring environment." },
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
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold">{job.role}</h3>
                <p className="text-gray-400">
                  {job.location} • {job.type} • {job.Experience} yrs exp
                </p>
              </div>
              <motion.button
                onClick={() => {
                  setSelectedJob(job.role);
                  setOpenForm(true);
                }}
                whileHover={{ scale: 1.1 }}
                className="mt-4 md:mt-0 bg-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenForm(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                ✖
              </button>

              <h2 className="text-2xl font-bold mb-4 text-center">
                Apply for {selectedJob}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                {/* Date of Birth */}
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                {/* Experience */}
                <input
                  type="number"
                  name="experience"
                  placeholder="Experience (in years)"
                  value={formData.experience}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-2 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                {/* Resume */}
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-700 text-white outline-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-500 transition-all"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CareersPage;
