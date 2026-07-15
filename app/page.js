"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            Welcome to my Portfolio
          </p>

          <h1 className="text-5xl lg:text-7xl font-black mt-4 leading-tight">
            Hi, I'm
            <br />
            <span className="text-cyan-400">Utkarsh Mishra</span>
          </h1>

          <h2 className="text-2xl mt-6 text-gray-300">
            Full Stack Developer
          </h2>

          <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">
            I build modern, scalable and user-friendly web applications using
            React, Next.js, Node.js, Express.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-7 py-4 rounded-full font-semibold text-black">
              Hire Me
              <FaArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 hover:text-black transition px-7 py-4 rounded-full">
              Resume
              <FaDownload size={18} />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-12">
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-cyan-500 flex justify-center items-center hover:bg-cyan-500 hover:text-black transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full border border-cyan-500 flex justify-center items-center hover:bg-cyan-500 hover:text-black transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full border border-cyan-500 flex justify-center items-center hover:bg-cyan-500 hover:text-black transition"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-full bg-cyan-500 blur-3xl opacity-20"></div>

            <img
              src="/Hero.png"
              alt="Utkarsh"
              className="relative w-[360px] rounded-3xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}