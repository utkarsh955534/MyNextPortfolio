"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050816] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-white">Utkarsh </span>
              <span className="text-cyan-400">Mishra</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Full Stack Developer passionate about building modern,
              scalable and responsive web applications using React,
              Next.js, Node.js and MongoDB.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#about" className="hover:text-cyan-400 duration-300">
                About
              </a>

              <a href="#skills" className="hover:text-cyan-400 duration-300">
                Skills
              </a>

              <a href="#projects" className="hover:text-cyan-400 duration-300">
                Projects
              </a>

              <a href="#education" className="hover:text-cyan-400 duration-300">
                Education
              </a>

              <a href="#contact" className="hover:text-cyan-400 duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/utkarsh955534"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-cyan-400/30 flex justify-center items-center text-xl text-gray-300 hover:bg-cyan-400 hover:text-black hover:scale-110 duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/utkarsh-mishra-2b3791360/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-cyan-400/30 flex justify-center items-center text-xl text-gray-300 hover:bg-cyan-400 hover:text-black hover:scale-110 duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="w-12 h-12 rounded-full border border-cyan-400/30 flex justify-center items-center text-xl text-gray-300 hover:bg-cyan-400 hover:text-black hover:scale-110 duration-300"
              >
                <FaEnvelope />
              </a>

            </div>

            <p className="text-gray-500 mt-6">
              Let's build something amazing together.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center">
            © {year}{" "}
            <span className="text-cyan-400 font-semibold">
              Utkarsh Mishra
            </span>
            . All Rights Reserved.
          </p>

          <a
            href="#"
            className="mt-5 md:mt-0 w-11 h-11 rounded-full bg-cyan-400 text-black flex justify-center items-center hover:scale-110 duration-300"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
