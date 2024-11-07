"use client";
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import Link from "next/link";
import './Services.css'; // Import the custom CSS file

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h1 className="services-title">
            <span>Services</span>
          </h1>
        </div>
        <div className="services-grid">
          
          <div className="service-card" data-aos="fade-up" data-aos-duration="1000">
            <div className="service-icon">
              <FaCode size={40} />
            </div>
            <div className="service-info">
              <h2 className="service-name">Web Development</h2>
              <p className="service-description">
                Transform your ideas into dynamic, responsive websites! With expertise in HTML, CSS, JavaScript, React, and Next.js, I create modern, high-quality web solutions tailored to meet your business needs. Let’s bring your vision to life..!!
              </p>
            </div>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-duration="1200">
            <div className="service-icon">
              <FaPaintBrush size={40} />
            </div>
            <div className="service-info">
              <h2 className="service-name">Web Design</h2>
              <p className="service-description">
                Elevate your online presence with stunning, user-friendly designs! I specialize in creating visually captivating, responsive websites that engage and inspire. Let’s design a digital experience that makes a lasting impression..!!
              </p>
            </div>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-duration="1400">
            <div className="service-icon">
              <FaMobileAlt size={40} />
            </div>
            <div className="service-info">
              <h2 className="service-name">Responsive Web Design</h2>
              <p className="service-description">
                Unlock the power of responsive design! I create seamless, adaptive websites that look and function beautifully on any device. Let’s make your digital presence accessible, engaging, and ready for every screen size..!!
              </p>
            </div>
          </div>
        </div>
        <Link href="../Contact">
          <button className="contact-button">
            Contact me
          </button>
        </Link>
      </div>
    </section>
  );
}
