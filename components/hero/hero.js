import React, { useState, useEffect } from "react";
import NavLink from 'next/link'
import himg from '/public/images/slider/Confident Young Man in Suit Cutout.png'
import { Link } from 'react-scroll'
import Image from "next/image";

const rotatingTitles = [
    'App & Software Developer',
    'Full Stack Web Developer',
    'SaaS & Web App Engineer',
    'E-Commerce Web Specialist'
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        let timeoutId;
        const interval = setInterval(() => {
            setIsTransitioning(true);
            timeoutId = setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % rotatingTitles.length);
                setIsTransitioning(false);
            }, 350);
        }, 3500);

        return () => {
            clearInterval(interval);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section className="tp-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="tp-hero-section-text">
                            <div className="tp-hero-title">
                                <h2>
                                    <span
                                        style={{
                                            display: 'inline-block',
                                            opacity: isTransitioning ? 0 : 1,
                                            transform: isTransitioning ? 'translateY(-8px)' : 'translateY(0)',
                                            transition: 'opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                                            willChange: 'opacity, transform'
                                        }}
                                    >
                                        {rotatingTitles[currentIndex]}
                                    </span>
                                </h2>
                            </div>
                            <div className="tp-hero-sub">
                                <p>Yogesh K S</p>
                            </div>
                            <div className="btns">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95} className="theme-btn">Contact Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <Image src={himg} alt=""/>
                </div>
            </div>
            <div className="social-link">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/yogesh-k-s-8966a8402/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/917676832079" target="_blank" rel="noopener noreferrer">
                            WhatsApp
                        </a>
                    </li>
                    <li>
                        <a href="mailto:yogeshks3998@gmail.com">
                            Email
                        </a>
                    </li>
                </ul>
            </div>
            <div className="visible-text">
                <h1>Developer</h1>
            </div>
        </section>
    );
};

export default Hero;
