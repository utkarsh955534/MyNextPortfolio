"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Laptop } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#0a0a0a] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Passionate Full Stack Developer
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/PFIMG.png"
              alt="Utkarsh Mishra"
              className="w-full max-w-[380px] h-[600px] object-cover rounded-3xl mx-auto border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-500 hover:scale-[1.02]"
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Hi, I'm Utkarsh 👋
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              I'm a final-year B.Tech Computer Science student and a Full Stack
              Developer who enjoys building modern, scalable, and user-friendly
              web applications. I love turning ideas into real-world products
              using technologies like React, Next.js, Node.js, Express.js, and
              MongoDB.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              I'm continuously learning new technologies, improving my problem
              solving skills, and building projects that help me grow as a
              developer. My goal is to contribute to impactful products while
              writing clean, maintainable code.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-3 gap-5 mt-10">

              <div className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300">
                <GraduationCap className="text-cyan-400 mb-3" size={32} />
                <h4 className="font-semibold">Education</h4>
                <p className="text-sm text-gray-400 mt-2">
                  B.Tech CSE <br />
                  Final Year
                </p>
              </div>

              <div className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300">
                <Laptop className="text-cyan-400 mb-3" size={32} />
                <h4 className="font-semibold">Experience</h4>
                <p className="text-sm text-gray-400 mt-2">
                  Full Stack Projects <br />
                  Self Learning
                </p>
              </div>

              <div className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300">
                <Code2 className="text-cyan-400 mb-3" size={32} />
                <h4 className="font-semibold">Focus</h4>
                <p className="text-sm text-gray-400 mt-2">
                  MERN Stack <br />
                  Next.js
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;