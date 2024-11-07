"use client";
import { useEffect } from "react";
import AOS from "aos";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import './Skills.css'; // Import the custom CSS file

interface SkillCardProps {
  title: string;
  description: string;
  colorClass: string;
  svgIcon: React.ReactNode;
  dataAos?: string;
  dataAosDelay?: string;
}

function SkillCard({
  title,
  description,
  colorClass,
  svgIcon,
  dataAos,
  dataAosDelay
}: SkillCardProps) {
  return (
    <div
      className={`skill-card ${colorClass}`}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <div className={`icon ${colorClass}`}>
        {svgIcon}
      </div>
      <div className="text-center">
        <h2 className="skill-title">{title}</h2>
        <p className="skill-description">{description}</p>
      </div>
    </div>
  );
}

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="grid">
          <SkillCard
            title="HTML"
            description="HTML is the standard markup language for Web pages."
            colorClass="html"
            svgIcon={<FaHtml5 size={80} />}
            dataAos="fade-up"
          />
          <SkillCard
            title="CSS"
            description="CSS is used to describe how HTML elements are displayed."
            colorClass="css"
            svgIcon={<FaCss3Alt size={80} />}
            dataAos="fade-up"
            dataAosDelay="100"
          />
          <SkillCard
            title="Tailwind CSS"
            description="Rapidly build modern websites without leaving your HTML."
            colorClass="tailwind"
            svgIcon={<SiTailwindcss size={80} />}
            dataAos="fade-up"
            dataAosDelay="200"
          />
          <SkillCard
            title="JavaScript"
            description="JavaScript is the world's most popular programming language."
            colorClass="js"
            svgIcon={<FaJsSquare size={80} />}
            dataAos="fade-up"
            dataAosDelay="300"
          />
          <SkillCard
            title="TypeScript"
            description="TypeScript is a superset of JavaScript that adds static typing."
            colorClass="ts"
            svgIcon={<SiTypescript size={80} />}
            dataAos="fade-up"
            dataAosDelay="400"
          />
          <SkillCard
            title="React.js"
            description="React is a JavaScript library for building user interfaces."
            colorClass="react"
            svgIcon={<FaReact size={80} />}
            dataAos="fade-up"
            dataAosDelay="500"
          />
          <SkillCard
            title="Next.js"
            description="Next.js is a React framework for building full-stack applications."
            colorClass="next"
            svgIcon={<SiNextdotjs size={80} />}
            dataAos="fade-up"
            dataAosDelay="600"
          />
          <SkillCard
            title="Node.js"
            description="Node.js is an open-source JavaScript runtime environment."
            colorClass="node"
            svgIcon={<FaNodeJs size={80} />}
            dataAos="fade-up"
            dataAosDelay="700"
          />
        </div>
      </div>
    </section>
  );
}
