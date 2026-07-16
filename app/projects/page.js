"use client";

import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const projects = [
  {
    title: "Portfolio Website",
    image: "/ProHero1.png",
    description:
      "A modern, responsive portfolio built using Next.js and Tailwind CSS with beautiful animations and dark theme.",

    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],

    github: "https://github.com/utkarsh955534/MyNextPortfolio.git",
    live: "https://yourportfolio.vercel.app",
  },

  {
    title: "Get Me A Coffee",
    image: "/tea.gif",
    description:
      "Crowdfunding platform where creators receive support from their audience with secure payments.",

    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],

    github: "https://github.com/yourusername/get-me-a-coffee",
    live: "#",
  },

  {
    title: "Insurance Premium Predictor",
    image: "/Insurance.avif",
    description:
      "Machine Learning web application that predicts health insurance premiums using Random Forest Regression.",

    tech: [
      { name: "RandomForest" },
      { name: "Decision Tree" },
      { name: "Streamlit", },
    ],

    github: "https://github.com/utkarsh955534/Medical-insurance-prediction.git",
    live: "#",
  },

  {
    title: "Fast Fuel",
    image: "/projects/fuel.png",
    description:
      "Fuel station finder that shows nearby petrol pumps, traffic-aware routes, and fuel prices.",

    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],

    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#050816] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            My Work
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Featured Projects
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            Here are some of the projects I have built while learning
            Full Stack Development and Machine Learning.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-[#111827] rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,.2)]"
            >

              {/* Image */}

              <div className="relative h-64 w-full">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 duration-500"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <h2 className="text-3xl font-bold">
                  {project.title}
                </h2>

                <p className="text-gray-400 leading-7 mt-5">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((tech, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-4 py-2"
                    >
                      <span className="text-cyan-400 text-lg">
                        {tech.icon}
                      </span>

                      <span className="text-sm">
                        {tech.name}
                      </span>
                    </div>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-5 mt-10">

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-3 border border-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-black duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
