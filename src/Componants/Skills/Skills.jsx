import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaTerminal,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiCanva,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiRender,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0B0F19] text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          My <span className="text-[#FACC15]">Skills</span>
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* FRONTEND */}
          <GlassCard title="Frontend (MERN)">
            <SkillItem icon={<FaReact />} name="React" />
            <SkillItem icon={<FaHtml5 />} name="HTML5" />
            <SkillItem icon={<FaCss3Alt />} name="CSS3" />
            <SkillItem icon={<FaJs />} name="JavaScript" />
            <SkillItem icon={<SiTailwindcss />} name="Tailwind" />
          </GlassCard>

          {/* BACKEND */}
          <GlassCard title="Backend (MERN)">
            <SkillItem icon={<FaNodeJs />} name="Node.js" />
            <SkillItem icon={<SiExpress />} name="Express" />
            <SkillItem icon={<SiMongodb />} name="MongoDB" />
            <SkillItem icon={<TbApi />} name="REST API" />
          </GlassCard>

          {/* TOOLS */}
          <GlassCard title="Tools">
            <SkillItem icon={<FaGithub />} name="GitHub" />
            <SkillItem icon={<FaGitAlt />} name="Git" />
            <SkillItem icon={<SiPostman />} name="Postman" />
            <SkillItem icon={<FaTerminal />} name="Terminal" />
            <SkillItem icon={<SiCanva />} name="Canva" />
          </GlassCard>

          {/* DEPLOYMENT */}
          <GlassCard title="Deployment">
            <SkillItem icon={<SiVercel />} name="Vercel" />
            <SkillItem icon={<SiNetlify />} name="Netlify" />
            <SkillItem icon={<SiFirebase />} name="Firebase" />
            <SkillItem icon={<SiRender />} name="Render" />
          </GlassCard>

        </div>

      </div>
    </section>
  );
};

const GlassCard = ({ title, children }) => {
  return (
    <div className="relative bg-[#111726]/70 backdrop-blur-xl border border-[#1F2937] rounded-3xl p-8 shadow-xl hover:shadow-[#FACC15]/20 transition-all duration-300 hover:-translate-y-2">

      {/* TOP NEON BAR */}
      <div className="absolute -top-[2px] left-10 right-10 h-[3px] bg-gradient-to-r from-[#FACC15] to-[#FB7185] rounded-full"></div>

      <h3 className="text-xl font-semibold tracking-wide mb-6 text-[#FB7185]">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-6">
        {children}
      </div>
    </div>
  );
};

const SkillItem = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#0B0F19]/50 hover:bg-[#1B2235] transition hover:scale-105">

      <div className="text-4xl text-[#FACC15]">
        {icon}
      </div>

      <p className="text-sm uppercase tracking-wider text-gray-300">
        {name}
      </p>
    </div>
  );
};

export default Skills;
