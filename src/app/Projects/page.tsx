"use client";
import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import project1 from '../../public/project1.jpg';
import project2 from '../../public/project2.jpg';
import project3 from '../../public/project3.jpg';
import project4 from '../../public/project4.jpg';
import project5 from '../../public/project5.jpg';
import project6 from '../../public/project6.jpg';
import project7 from '../../public/project7.jpg';
import project8 from '../../public/project8.jpg';
import project9 from '../../public/project9.jpg';
import project10 from '../../public/project10.jpg';
import project11 from '../../public/project11.jpg';
import project12 from '../../public/project12.jpg';

import './Projects.css';

const projects = [
  {
    src: project1,
    alt: "MANZZARI",
    title: "MANZZARI JEWELLERY WEBSITE",
    description: "This jewellery website is built with Next.js and Tailwind CSS.",
    link: "https://05-class-assignment-next-js-w25p-qtrommcu9.vercel.app/",
  },
  {
    src: project2,
    alt: "DIGITAL CLOCK APP",
    title: "DIGITAL CLOCK",
    description: "This digital clock is built with Next.js and Tailwind CSS. It is a simple and modern digital clock that displays the current time and date.",
    link: "https://day-6-of-30-days-of-nextjs-digital-clock-o7gptnu5e.vercel.app/" 
  },
  {
    src: project3,
    alt: "SIMPLE CALCULATOR APP",
    title: "SIMPLE CALCULATOR",
    description: "This simple calculator is built with Next.js and Tailwind CSS. It is a simple and modern calculator that performs basic arithmetic operations.",
    link: "https://day-5-of-30-days-of-nextjs-simple-calculator-4nueka7tl.vercel.app/"
  },
  {
    src: project4,
    alt: "NUMBER GUESSING GAME APP",
    title: "NUMBER GUESSING GAME",
    description: "Number guessing game is built with Next.js and Tailwind CSS,simple and modern number guessing game that allows users to guess a number.",
    link: "https://day-4-of-30-days-of-nextjs-number-guessing-game-arbve33bu.vercel.app/"
  },
  {
    src: project5,
    alt: "BIRTHDAY APPLICATION",
    title: "BIRTHDAY APPLICATION",
    description: "Birthday app is built with Next.js and Tailwind CSS,simple and modern birthday app that allows users to enter their birthday and see their age.",
    link: "https://day-3-of-30-days-of-nextjs-birthday-pqqtpdf6l.vercel.app/"
  },
  {
    src: project6,
    alt: "SAFE HOME CHEMICAL WEBSITES",
    title: "SAFE HOME CHEMICAL WEBSITES",
    description: "This safe home chemical websites is built with Next.js and Tailwind CSS.",
    link: "https://03-class-assignment-next-js-6gj6-jglil2ged.vercel.app/"
  },
  {
    src: project7,
    alt: "HTML CSS TYPESCRIPT PORTFOLIO",
    title: "HTML CSS TYPESCRIPT PORTFOLIO",
    description: "This HTML CSS TypeScript portfolio is built with HTML CSS TYPESCRIPT.",
    link: "https://responsive-portfolio-website-using-html-css-java-ciq8u74kr.vercel.app/"
  },
  {
    src: project8,
    alt: "UNIQYE PATH AND SHAREABLE REUME",
    title: "UNIQYE PATH AND SHAREABLE REUME",
    description: "It is built with HTML CSS TYPESCRIPT.It is a simple and modern resume.",
    link: "https://milestone-5-unique-path-shareable-link-qqmwultk5.vercel.app/"
  },
  {
    src: project9,
    alt: "EDITABLE RESUME",
    title: "EDITABLE RESUME",
    description: "This editable resume is built with HTML CSS TYPE/JAVASCRIPT. It is a simple and modern editable resume that allows users to view my resume.",
    link: "https://milestone-4-editable-resume-ka2tvne54-yousra-khans-projects.vercel.app/",
  },
  {
    src: project10,
    alt: "DYNAMIC RESUME BUILDER",
    title: "DYNAMIC RESUME BUILDER",
    description: "This dynamic resume builder is built with HTML CSS TYPESCRIPT.",
    link: "https://milestone-2-3-dynamic-resume-builder-form-ez6borkpq.vercel.app/",
  },
  {
    src: project11,
    alt: "STATIC RESUME BUILDER",
    title: "STATIC RESUME BUILDER",
    description: "This static resume builder is built with HTML CSS TYPESCRIPT. ",
    link: "https://milestone-1-static-resume-builder-7idt94oye.vercel.app/",
  },
  {
    src: project12,
    alt: "HOME MADE PRODUCTS WEBSITE",
    title: "HOME MADE PRODUCTS WEBSITE",
    description: "Built with Next.js and Tailwind CSS, that allows users to view products,inforamation.",
  },
];

const Project = () => {
  return (
    <section className="project-section">
      <div className="project-container">
        <div className="project-header">
          <h1 className="project-title">
            <span>Projects</span>
          </h1>
          <p className="project-description">
            Explore my projects and learn more about my work and skills..!!
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-aos="flip-right" data-aos-duration="2000"
            >
              <div className="project-image-container">
                <Image
                  src={project.src}
                  alt={project.alt}
                  className="project-image"
                  layout="fill"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="project-info">
                <Link href={project.link || "#"}>
                  <h1 className="project-name">
                    {project.title}
                  </h1>
                </Link>
                <p className="project-text">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
