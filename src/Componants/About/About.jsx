import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaGraduationCap,
  FaCode,
  FaUserTie,
} from "react-icons/fa";
import profileImg from "../../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0B0F19] text-white px-6 py-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* ================= LEFT - IMAGE + QUICK INFO ================= */}
   {/* ================= LEFT - IMAGE + QUICK INFO ================= */}
<div className="flex justify-center items-center">
  <img
    src={profileImg}
    alt="Sanket Batwal"
    className="w-full max-w-sm h-[400px] object-cover rounded-2xl border-4 border-[#FACC15] shadow-xl mb-6"
  />
</div>



        {/* ================= CENTER - ABOUT TEXT ================= */}
        <div className="md:col-span-1 bg-[#111726] rounded-3xl p-10 border border-[#1F2937]">
          <h2 className="text-3xl font-bold mb-6">
            About{" "}
            <span className="text-[#FB7185]">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I am a passionate{" "}
            <span className="text-white">MERN Stack Developer</span>{" "}
            who loves turning ideas into real-world applications using
            modern technologies like{" "}
            <span className="text-white">React</span>,{" "}
            <span className="text-white">Node.js</span>,{" "}
            <span className="text-white">MongoDB</span>,{" "}
            <span className="text-white">Express.js</span> and{" "}
            <span className="text-white">Tailwind CSS</span>.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I build secure{" "}
            <span className="text-white">RESTful APIs</span>, perform{" "}
            <span className="text-white">CRUD operations</span>, handle{" "}
            <span className="text-white">form data & authentication</span>,
            and manage complete{" "}
            <span className="text-white">server-side logic</span>.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <StatCard icon={<FaCode />} title="10+" subtitle="Projects" />
            <StatCard icon={<FaServer />} title="10+" subtitle="APIs Built" />
            <StatCard icon={<FaLaptopCode />} title="100%" subtitle="Passion" />
            <StatCard icon={<FaUserTie />} title="Fresher" subtitle="Developer" />
          </div>
        </div>

       
        <div className="bg-[#111726] rounded-3xl p-10 border border-[#1F2937]">
          <h3 className="text-2xl font-bold mb-8 text-[#FACC15] flex items-center gap-3">
            <FaGraduationCap />
            Education Timeline
          </h3>

          <div className="space-y-10 relative before:absolute before:left-2 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#FACC15]">

            <TimelineItem
              year="2022 - 2025"
              title="Bachelor's Degree"
              place="Vishwalalta Art ,Commerce and Science college,Bhatgoan,Yeola"
              score="SGPA: 7.41 / 10"
            />

            <TimelineItem
              year="2021 - 2022"
              title="Higher Secondary"
              place="Swami Muktanand Vidyalaya,Yeola,Nashik"
              score="Percentage: 72.60%"
            />

            <TimelineItem
              year="2020 - 2021"
              title="Secondary School"
              place="Swami Muktanand Vidyalaya,Yeola,Nashik"
              score="Percentage: 80.60%"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

/* ========== SMALL COMPONENTS ========== */

const StatCard = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-4 flex items-center gap-4">
      <div className="text-[#FACC15] text-xl">{icon}</div>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

const TimelineItem = ({ year, title, place, score }) => {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-1 w-5 h-5 bg-[#FACC15] rounded-full" />

      <span className="text-sm text-[#FB7185] font-semibold">
        {year}
      </span>
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-gray-400 text-sm">{place}</p>
      <p className="text-gray-500 text-sm">{score}</p>
    </div>
  );
};

export default About;
