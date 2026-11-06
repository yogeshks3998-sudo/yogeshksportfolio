import React from 'react';

const approachSteps = [
  {
    step: '01',
    title: 'Understand',
    desc: "Before writing any code, I spend time understanding what the client actually needs. Building the wrong solution quickly isn't useful.",
  },
  {
    step: '02',
    title: 'Design',
    desc: "Once the requirements are clear, I focus on creating a simple interface that's easy to understand and comfortable to use.",
  },
  {
    step: '03',
    title: 'Develop',
    desc: "I build the application with clean, reusable code that's easy to maintain as the project grows.",
  },
  {
    step: '04',
    title: 'Improve',
    desc: "After the core features are complete, I work on performance, responsiveness, SEO, accessibility, and overall user experience.",
  },
  {
    step: '05',
    title: 'Deliver',
    desc: "Before launch, I test everything carefully to make sure the application is stable and ready for real users.",
  },
];

const AboutApproach = () => {
  return (
    <section className="about-page-approach">
      <div className="container">
        <div className="approach-header">
          <span className="approach-tag">My Approach</span>
          <h2 className="approach-title">
            Every project is different, but <br className="d-none d-md-block" />
            my workflow stays simple.
          </h2>
        </div>

        <div className="approach-list">
          {approachSteps.map((item, idx) => (
            <div className="approach-item" key={idx}>
              <div className="approach-num-col">
                <span className="approach-num">{item.step}</span>
              </div>
              <div className="approach-title-col">
                <h3 className="approach-step-title">{item.title}</h3>
              </div>
              <div className="approach-desc-col">
                <p className="approach-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="visible-rotate-text">
        <h1>Workflow</h1>
      </div>
    </section>
  );
};

export default AboutApproach;
