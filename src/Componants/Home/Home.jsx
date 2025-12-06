import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Profile from "../../assets/profile.jpg";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0B0F19] px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left text-white max-w-xl">

          <p className="text-[#FACC15] tracking-[0.3em] mb-3 text-sm">
            HELLO I'M
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Sanket{" "}
            <span className="bg-gradient-to-r from-[#FACC15] to-[#FB7185] bg-clip-text text-transparent">
              Batwal
            </span>
          </h1>

          {/* TYPING EFFECT */}
          <h2 className="text-lg md:text-2xl text-gray-300 mb-6 tracking-wide">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Backend Developer",
                "Full Stack Developer"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mb-10 leading-relaxed">
            I’m a Full Stack Developer passionate about building modern, clean,
            and high-performance web applications. I specialize in the MERN
            Stack, focusing on smooth UI, strong backend systems, and real-world
            scalable solutions.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-8">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FACC15] to-[#FB7185] text-black font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-full border-2 border-[#FACC15] text-[#FACC15] font-semibold hover:bg-[#FACC15] hover:text-black transition"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL + EMAIL LINKS */}
          <div className="flex justify-center md:justify-start gap-6 text-[#FACC15]">

            {/* Email */}
            <a
              href="mailto:batwalsanket@gmail.com"
              className="flex items-center gap-2 border border-[#FACC15] px-4 py-2 rounded-full hover:bg-[#FACC15] hover:text-black transition"
            >
              <FaEnvelope />
          
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#FACC15] px-4 py-2 rounded-full hover:bg-[#FACC15] hover:text-black transition"
            >
              <FaGithub />
             
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/your-username/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#FACC15] px-4 py-2 rounded-full hover:bg-[#FACC15] hover:text-black transition"
            >
              <FaLinkedinIn />
       
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-[#FACC15] to-[#FB7185] blur-3xl opacity-20 rounded-full"></div>

          <img
            src={Profile}
            alt="Sanket"
            className="relative w-64 md:w-96 rounded-full border-4 border-[#FACC15] shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
