"use client";

import React from "react";
import {
  FaGraduationCap,
  FaSchool,
  FaUniversity,
} from "react-icons/fa";

const education = [
  {
    icon: <FaUniversity />,
    degree: "Bachelor of Technology (B.Tech)",
    institute: "Invertis University, Bareilly",
    year: "2023 - 2027",
    score: "CGPA: 8.1",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FaSchool />,
    degree: "Intermediate (12th)",
    institute: "Sardar Patel Rashtriya Inter College, Bansi Siddharth Nagar",
    year: "2023",
    score: "Percentage: 77%",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaGraduationCap />,
    degree: "High School (10th)",
    institute: "Sardar Patel Rashtriya Inter College, Bansi Siddharth Nagar",
    year: "2021",
    score: "Percentage: 89%",
    color: "from-orange-500 to-red-500",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#0B1120] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            My Journey
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Education
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Line */}

          <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-cyan-500 rounded-full"></div>

          {education.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 flex flex-col md:flex-row ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Card */}

              <div className="w-full md:w-5/12">

                <div className="bg-[#111827] rounded-2xl p-8 border border-white/10 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,.3)]">

                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl mb-6`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.degree}
                  </h3>

                  <p className="text-cyan-400 mt-3">
                    {item.institute}
                  </p>

                  <p className="text-gray-400 mt-2">
                    {item.year}
                  </p>

                  <p className="text-gray-300 mt-4">
                    {item.score}
                  </p>

                </div>

              </div>

              {/* Dot */}

              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-cyan-400 border-4 border-[#0B1120] shadow-[0_0_20px_#22d3ee]"></div>

              {/* Empty */}

              <div className="hidden md:block md:w-5/12"></div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;