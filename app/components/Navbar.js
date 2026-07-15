"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    "About",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-12">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl md:text-3xl font-extrabold tracking-wide"
        >
          <span className="text-white">Utkarsh</span>{" "}
          <span className="text-cyan-400">Mishra</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => {
            const href = `/${item.toLowerCase()}`;
            const isActive = pathname === href;

            return (
              <a
                key={item}
                href={href}
                className={`relative font-medium transition-all duration-300 group ${
                  isActive
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-400"
                }`}
              >
                {item}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            );
          })}
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 rounded-full bg-cyan-500 text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#22d3ee] cursor-pointer">
            Resume
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-6 bg-[#111111] border-t border-white/10">
          {navLinks.map((item) => {
            const href = `/${item.toLowerCase()}`;
            const isActive = pathname === href;

            return (
              <a
                key={item}
                href={href}
                onClick={() => setOpen(false)}
                className={`transition duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-400"
                }`}
              >
                {item}
              </a>
            );
          })}

          <button className="mt-2 w-full py-3 rounded-lg bg-cyan-500 text-black font-bold hover:scale-[1.02] transition-all duration-300">
            Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;