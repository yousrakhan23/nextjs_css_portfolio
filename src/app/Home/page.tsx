"use client";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from "react-icons/fa6";
import Image from "next/image";
import myProfile from '../../public/pic.jpg';
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import './Home.css';

const HeroSetion = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <div>
              <h1>Hi, I am Yousra Khan</h1>
              <Typewriter
                options={{
                  strings: ['Frontend Developer..!!'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <p className="hero-description">
            I am a Frontend Developer with a passion for creating visually
            stunning and user-friendly web applications that deliver exceptional
            results to my clients.
          </p>
          <div className="social-buttons">
            <button className="social-button github-btn">
              <Link href="https://github.com/yousrakhan23">
                <FaGithub size={26} />
              </Link>
            </button>
            <button className="social-button linkedin-btn">
              <Link href="https://www.linkedin.com/in/hafiza-yousra-khan-/">
                <FaLinkedin size={26} />
              </Link>
            </button>
            <button className="social-button instagram-btn">
              <Link href="https://www.instagram.com/_fumodoarishika/profilecard/?igsh=MWdpazkyOGVwdnd2MA==">
                <FaSquareInstagram size={26} />
              </Link>
            </button>
          </div>
        </div>
        <div className="image-container">
          <Image src={myProfile} alt="me" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSetion;
