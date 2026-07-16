"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#050816] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Contact
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Let's Work Together
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project, internship opportunity, or just want to say hello?
            Feel free to reach out. I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div className="space-y-8">

            <div className="bg-[#111827] p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-cyan-500 flex justify-center items-center text-2xl text-black">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-400">
                    utkarshmishra1012005@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-cyan-500 flex justify-center items-center text-2xl text-black">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-400">
                    +91 95553 42280
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-cyan-500 flex justify-center items-center text-2xl text-black">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-gray-400">
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-5 pt-4">

              <a
                href="https://github.com/utkarsh955534"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-cyan-400 flex justify-center items-center hover:bg-cyan-400 hover:text-black transition text-xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/utkarsh-mishra-2b3791360/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-cyan-400 flex justify-center items-center hover:bg-cyan-400 hover:text-black transition text-xl"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="bg-[#111827] p-8 rounded-3xl border border-white/10">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div>
                <label className="block mb-2 text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-[#1F2937] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#1F2937] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-[#1F2937] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full bg-[#1F2937] border border-gray-700 rounded-xl px-5 py-4 outline-none resize-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-700 text-black font-bold py-4 rounded-xl transition duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
