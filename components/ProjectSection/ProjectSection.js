import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Projects from '../../api/project';

const ProjectSection = (props) => {
    const [number, setCount] = useState(3);
    const [buttonActive, setButtonState] = useState(false);

    return (
        <section className="tp-project-section section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>Projects</span>
                    <h2>My Latest Project</h2>
                </div>
                <div className="tp-project-wrap">
                    <div className="row">
                        {Projects.slice(0, number).map((project, pro) => (
                            <div className="col col-xl-4 col-lg-6 col-sm-12 col-12" key={pro}>
                                <div className="tp-project-item">
                                    <div className="tp-project-img">
                                        <Link href={`/project/${project.Id}`}>
                                            <Image src={project.pImg} alt={project.title} />
                                        </Link>
                                    </div>
                                    <div className="tp-project-content">
                                        <span>{project.subTitle}</span>
                                        <h2>
                                            <Link href={`/project/${project.Id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                                {project.title}
                                            </Link>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`project-btn ${buttonActive ? "d-none" : ""}`}>
                        <span onClick={() => setButtonState(!buttonActive)}>
                            <button className="theme-btn" onClick={() => setCount(number + number)}>View all work</button>
                        </span>
                    </div>
                </div>
            </div>

            <div className="visible-rotate-text">
                <h1>My Projects</h1>
            </div>
        </section>
    );
};

export default ProjectSection;
