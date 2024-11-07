"use client";
import React from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <a className="title-font">
                    <h1>
                        <span>PortFolio</span>
                    </h1>
                </a>
                <nav className="nav-links">
                    {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((item) => (
                        <Link key={item} href={`/${item}`} className="nav-link">
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
