import React from 'react';
import { TechIcon } from './TechnicalIcons';

const expertiseCards = [
  {
    category: 'Frontend',
    icon: 'code',
    columns: [
      [
        { name: 'React.js', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'JavaScript (ES6+)', icon: 'javascript' },
        { name: 'HTML5', icon: 'html5' },
      ],
      [
        { name: 'CSS3', icon: 'css3' },
        { name: 'Bootstrap', icon: 'bootstrap' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
        { name: 'Responsive Design', icon: 'responsive' },
      ],
    ],
  },
  {
    category: 'Backend',
    icon: 'server',
    columns: [
      [
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'Express.js', icon: 'express' },
        { name: 'REST APIs', icon: 'restapi' },
      ],
      [
        { name: 'JWT Authentication', icon: 'jwt' },
        { name: 'API Integration', icon: 'api' },
      ],
    ],
  },
  {
    category: 'Database',
    icon: 'database',
    columns: [
      [
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'Supabase', icon: 'supabase' },
      ],
      [],
    ],
  },
  {
    category: 'CMS',
    icon: 'globe',
    columns: [
      [
        { name: 'WordPress', icon: 'wordpress' },
        { name: 'WooCommerce', icon: 'woocommerce' },
        { name: 'PHP', icon: 'php' },
      ],
      [
        { name: 'Elementor', icon: 'elementor' },
        { name: 'Plugin Customization', icon: 'plugin' },
      ],
    ],
  },
  {
    category: 'AI Tools',
    icon: 'robot',
    columns: [
      [
        { name: 'ChatGPT', icon: 'chatgpt' },
        { name: 'Codex', icon: 'codex' },
        { name: 'Figma AI', icon: 'figma' },
      ],
      [
        { name: 'Antigravity', icon: 'antigravity' },
        { name: 'Prompt Engineering', icon: 'prompt' },
        { name: 'AI-Assisted Development', icon: 'aiassisted' },
      ],
    ],
  },
  {
    category: 'Tools',
    icon: 'wrench',
    columns: [
      [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Postman', icon: 'postman' },
        { name: 'VS Code', icon: 'vscode' },
      ],
      [
        { name: 'XAMPP', icon: 'xampp' },
        { name: 'Vercel', icon: 'vercel' },
        { name: 'Netlify', icon: 'netlify' },
      ],
    ],
  },
];

const TechnicalExpertise = () => {
  return (
    <section className="tp-technical-expertise-section section-padding">
      <div className="container">
        <div className="tp-section-title">
          <span>Technical Expertise</span>
          <h2>I don’t chase every new framework that comes out.</h2>
          <p className="tp-expertise-subtitle">
            Instead, I focus on tools I've used in real projects.
          </p>
        </div>

        <div className="tp-expertise-wrap">
          <div className="row">
            {expertiseCards.map((card, idx) => (
              <div className="col col-lg-4 col-md-6 col-12" key={idx}>
                <div className="tp-expertise-card">
                  <div className="card-header-area">
                    <div className="card-icon-badge">
                      <TechIcon name={card.icon} />
                    </div>
                    <h3>{card.category}</h3>
                  </div>

                  <div className="card-skills-columns">
                    {card.columns.map((col, colIdx) => (
                      <div className="skills-column" key={colIdx}>
                        {col.map((skill, sIdx) => (
                          <div className="skill-item" key={sIdx}>
                            <span className="skill-icon">
                              <TechIcon name={skill.icon} />
                            </span>
                            <span className="skill-name">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="visible-rotate-text">
        <h1>Expertise</h1>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
