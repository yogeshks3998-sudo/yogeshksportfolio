import React from 'react';

const experiences = [
  {
    period: 'SEPTEMBER 2025 - PRESENT',
    role: 'Frontend / Web Developer',
    company: 'Adversity Solutions',
    desc: "I'm currently working on business websites and React-based applications for clients across different industries. My responsibilities include frontend development, API integration, WordPress customization, UI improvements, performance optimization, and collaborating with designers and backend developers throughout the development process.",
  },
  {
    period: 'JANUARY 2025 - SEPTEMBER 2025',
    role: 'Web Developer',
    company: 'Fewdot Creative Solutions',
    desc: 'Worked on client websites built with React, PHP, and WordPress. I handled frontend development, CMS customization, responsive layouts, SEO improvements, website optimization, and deployment for projects ranging from company websites to service platforms.',
  },
];

const AboutExperience = () => {
  return (
    <section className="about-page-experience">
      <div className="container">
        <div className="row">
          {/* Left Column: Heading and Tag */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="experience-left-header">
              <span className="experience-tag">Experience</span>
              <h2 className="experience-main-title">Experience</h2>
            </div>
          </div>

          {/* Right Column: Experience Items */}
          <div className="col-lg-8 col-md-12 col-12">
            <div className="experience-timeline">
              {experiences.map((exp, idx) => (
                <div className="experience-card" key={idx}>
                  <div className="experience-role-col">
                    <span className="experience-period">{exp.period}</span>
                    <h3 className="experience-role">{exp.role}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-desc-col">
                    <p className="experience-desc">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="visible-rotate-text">
        <h1>Career</h1>
      </div>
    </section>
  );
};

export default AboutExperience;
