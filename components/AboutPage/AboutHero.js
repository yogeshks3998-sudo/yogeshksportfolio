import React from 'react';
import NavLink from 'next/link';
import Image from 'next/image';

import { Link as ScrollLink } from 'react-scroll';

const AboutHero = () => {
  return (
    <section className="about-page-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-12">
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                Building software that <br className="d-none d-lg-block" />
                solves real problems.
              </h1>
              <div className="gradient-accent-line"></div>

              <h4 className="about-hero-intro">
                Hi, I'm Yogesh K S, a Full Stack Developer.
              </h4>

              <p className="about-hero-text">
                I build business websites, web applications, admin dashboards, and AI-powered solutions
                using React, Next.js, Node.js, MongoDB, WordPress, and modern development tools.
              </p>

              <p className="about-hero-text">
                I enjoy taking an idea from a discussion and turning it into something people can actually use.
                Whether it's a company website, a custom dashboard, or a complete full-stack application,
                I like building products that are clean, fast, and easy to maintain.
              </p>

              <div className="about-hero-actions">
                <ScrollLink to="project" spy={true} smooth={true} duration={500} offset={-95} className="about-hero-btn-primary" style={{ cursor: 'pointer' }}>
                  VIEW PROJECTS &nbsp;→
                </ScrollLink>
                <a href="#resume" className="about-hero-btn-outline">
                  DOWNLOAD RESUME &nbsp;↓
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12">
            <div className="about-hero-image-wrap">
              <Image 
                src="/images/about/about-hero.png" 
                alt="Yogesh K S - Full Stack Developer" 
                width={580} 
                height={670} 
                priority 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="visible-rotate-text">
        <h1>About</h1>
      </div>
    </section>
  );
};

export default AboutHero;
