import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Projects from '../../api/project';

const RelatedProject = ({ currentId }) => {
    const related = (Projects.filter(p => String(p.Id) !== String(currentId)).length > 0
        ? Projects.filter(p => String(p.Id) !== String(currentId))
        : Projects
    ).slice(0, 3);

    return (
        <div className="tp-project-single-item">
            <div className="tp-project-single-title">
                <h3>Related Projects</h3>
            </div>
            <div className="tp-project-area-s2">
                <div className="tp-project-wrap">
                    <div className="row">
                        {related.map((project, pot) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={pot}>
                                <div className="tp-project-item">
                                    <div className="tp-project-img">
                                        <Link href={`/project/${project.Id}`}>
                                            <Image src={project.pImg} alt={project.title} />
                                        </Link>
                                    </div>
                                    <div className="tp-project-text">
                                        <h2>
                                            <Link href={`/project/${project.Id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                                {project.title}
                                            </Link>
                                        </h2>
                                        <span>{project.subTitle}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedProject;
