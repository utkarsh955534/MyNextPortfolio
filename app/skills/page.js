"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaDatabase,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    data: [
      { name: "HTML", icon: <FaHtml5 />, level: 95, color: "text-orange-500" },
      { name: "CSS", icon: <FaCss3Alt />, level: 90, color: "text-blue-500" },
      { name: "JavaScript", icon: <FaJs />, level: 90, color: "text-yellow-400" },
      { name: "React", icon: <FaReact />, level: 88, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "text-white" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92, color: "text-sky-400" },
    ],
  },

  {
    category: "Backend Development",
    data: [
      { name: "Node.js", icon: <FaNodeJs />, level: 85, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, level: 82, color: "text-gray-300" },
      { name: "MongoDB", icon: <SiMongodb />, level: 85, color: "text-green-600" },
      { name: "MySQL", icon: <SiMysql />, level: 78, color: "text-blue-400" },
    ],
  },

  {
    category: "Programming Languages",
    data: [
      { name: "Java", icon: <FaJava />, level: 90, color: "text-red-500" },
      { name: "JavaScript", icon: <FaJs />, level: 90, color: "text-yellow-400" },
    ],
  },

  {
    category: "Tools & Technologies",
    data: [
      { name: "Git", icon: <FaGitAlt />, level: 88, color: "text-orange-600" },
      { name: "GitHub", icon: <FaGithub />, level: 90, color: "text-white" },
      { name: "Postman", icon: <SiPostman />, level: 90, color: "text-orange-500" },
      { name: "Vercel", icon: <SiVercel />, level: 80, color: "text-white" },
      { name: "Database", icon: <FaDatabase />, level: 85, color: "text-cyan-400" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-[#050816] text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            My Skills
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Technical Skills
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I enjoy building modern web applications using the MERN stack,
            Next.js, and other modern technologies.
          </p>

        </div>

        {skills.map((section, index) => (

          <div key={index} className="mb-16">

            <h2 className="text-3xl font-bold mb-10 text-cyan-400">
              {section.category}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">

              {section.data.map((skill, i) => (

                <div
                  key={i}
                  className="bg-[#111827] p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,.25)]"
                >

                  <div className="flex justify-between items-center mb-4">

                    <div className="flex items-center gap-4">

                      <div className={`text-4xl ${skill.color}`}>
                        {skill.icon}
                      </div>

                      <h3 className="text-xl font-semibold">
                        {skill.name}
                      </h3>

                    </div>

                    <span className="text-cyan-400 font-bold">
                      {skill.level}%
                    </span>

                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">

                    <div
                      className="bg-cyan-400 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}