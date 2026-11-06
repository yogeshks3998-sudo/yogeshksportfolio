import React from 'react';
import Image from 'next/image';

const AboutStory = () => {
  return (
    <section className="about-page-story">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="story-left">
              <div className="story-header">
                <span className="story-tag">About Me</span>
                <h2>More Than Just Writing Code</h2>
              </div>
              <div className="story-image-wrap">
                <Image 
                  src="/images/about/about-section.png" 
                  alt="Yogesh K S - Full Stack Developer" 
                  width={500} 
                  height={580} 
                  priority 
                />
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-12 col-12">
            <div className="story-right">
              <p className="lead-p">
                I'm a Full Stack Developer who enjoys building products from the ground up.
              </p>

              <p>
                My journey started with frontend development, but over time I became interested in
                everything behind an application - APIs, databases, authentication, deployment, and
                performance. That curiosity naturally led me into full-stack development.
              </p>

              <p>
                During the past year, I've worked on websites and applications for startups,
                educational institutions, legal firms, creative agencies, and real estate companies.
                Every project has been different, which has helped me learn how to adapt to different
                business requirements instead of relying on the same solution every time.
              </p>

              <p>
                Most of the projects I build use React on the frontend with Node.js and MongoDB on the backend,
                but I also work with WordPress whenever it makes more sense for the client. Recently I've started
                integrating AI tools into my workflow to speed up development, automate repetitive tasks,
                and prototype ideas more efficiently.
              </p>

              <p>
                I enjoy writing clean code, improving user experience, and solving problems that make an
                application easier to use and maintain.
              </p>

              <p>
                Outside of coding, I'm always exploring new technologies, experimenting with ideas,
                and learning better ways to build software.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="visible-rotate-text">
        <h1>Story</h1>
      </div>
    </section>
  );
};

export default AboutStory;
