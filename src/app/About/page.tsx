"use client";

import React from 'react';
import Image from 'next/image';
import myProfile from '../../public/my_profile.jpg';
import './About.css';

const AboutPage = () => {
  return (
    <section className="about-section">
      <div className="profile-image-container">
        <Image
          src={myProfile}
          alt="my profile"
          height={250}
          width={250}
          className="profile-image"
        />
        <div className="profile-image-overlay"></div>
      </div>
      
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <h2 className="about-subtitle">My Journey</h2>
        <p className="about-description">
          As a driven front-end developer, I am advancing my skills through a governor-initiated program, focused on mastering cutting-edge technologies. With hands-on experience in HTML, CSS, TypeScript, JavaScript, React, Next.js, and Tailwind, I have built a wide array of real-world projects that reflect both creativity and a solid grasp of modern development practices. My background in digital marketing further strengthens my ability to create user-focused solutions that not only perform well but also resonate with audiences. I am committed to continuous growth and contributing impactful solutions in the tech and marketing landscapes.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
