import React, { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import BackToTop from '../backToTop/backToTop';
import Contact from './contact';
import RelatedProject from './related';
import Projects from '../../api/project';

const ProjectDetailPage = ({ id }) => {
    const project = Projects.find((p) => String(p.Id) === String(id)) || Projects[0];

    const mainImg = project.ps1img || project.pImg;
    const subImg1 = project.psub1img1;
    const subImg2 = project.psub1img2;

    const liveUrl = project.liveUrl || project.info?.liveUrl || (project.links && project.links.length > 0 ? project.links[0].url : null);

    return (
        <Fragment>
            <Head>
                <title>{project.title} - Yogesh K S | Full Stack Developer</title>
                <meta name="description" content={`Explore details of ${project.title}, built with modern web technologies, responsive layouts, and performance in mind.`} />
            </Head>

            <Navbar />

            {/* Breadcrumb Header */}
            <div className="tp-page-header-simple" style={{ paddingTop: '130px', paddingBottom: '20px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <nav className="tp-breadcrumb-nav" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>
                                <Link href="/" style={{ color: '#e5540a', textDecoration: 'none' }}>Home</Link>
                                <span style={{ margin: '0 10px', opacity: 0.5 }}>/</span>
                                <Link href="/#project" style={{ color: '#e5540a', textDecoration: 'none' }}>Portfolio</Link>
                                <span style={{ margin: '0 10px', opacity: 0.5 }}>/</span>
                                <span style={{ opacity: 0.8 }}>{project.breadcrumbCategory || project.title}</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Project Content Area */}
            <div className="tp-project-single-area" style={{ background: 'transparent', paddingTop: '10px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="tp-project-single-wrap">
                                <div className="tp-project-single-item">
                                    <div className="row align-items-center mb-5">
                                        <div className="col-lg-7">
                                            <div className="tp-project-single-title">
                                                <h3>{project.title.includes('—') || project.title.endsWith('Project') ? project.title : `${project.title} Project`}</h3>
                                            </div>
                                            {project.overviewTitle && (
                                                <h4 style={{ fontSize: '18px', fontWeight: 600, margin: '15px 0 20px', color: '#e5540a' }}>
                                                    {project.overviewTitle}
                                                </h4>
                                            )}
                                            {project.description ? (
                                                Array.isArray(project.description) ? (
                                                    project.description.map((desc, i) => (
                                                        <p key={i}>{desc}</p>
                                                    ))
                                                ) : (
                                                    <p>{project.description}</p>
                                                )
                                            ) : (
                                                <>
                                                    <p>
                                                        This project was built to deliver a modern, high-performance web experience tailored to user needs. 
                                                        Focused on clean code, responsive layouts, intuitive navigation, and fast loading speeds across all device sizes.
                                                    </p>
                                                    <p>
                                                        From initial architecture planning to final deployment, every feature was developed to ensure scalability, 
                                                        robust security, seamless user interactions, and straightforward long-term maintenance.
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="tp-project-single-content-des-right">
                                                <ul>
                                                    <li>Location :<span>{project.info?.location || 'Bengaluru, India'}</span></li>
                                                    <li>Client :<span>{project.info?.client || 'Client Project'}</span></li>
                                                    <li>Consult :<span>Yogesh K S</span></li>
                                                    <li>
                                                        Developed By :
                                                        <span>
                                                            <a
                                                                href="https://adversitysolutions.in/"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={{
                                                                    color: '#e5540a',
                                                                    textDecoration: 'none',
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: '4px',
                                                                    fontWeight: 500
                                                                }}
                                                            >
                                                                Adversity Solutions ↗
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li>Project Type :<span>{project.info?.projectType || project.subTitle || 'Web Application'}</span></li>
                                                    <li>Duration :<span>{project.info?.duration || '—'}</span></li>
                                                    <li>Completion :<span>{project.info?.completion || 'Completed'}</span></li>
                                                    {liveUrl && (
                                                        <li>
                                                            Live Website :
                                                            <span>
                                                                <a
                                                                    href={liveUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    style={{
                                                                        color: '#e5540a',
                                                                        textDecoration: 'none',
                                                                        display: 'inline-flex',
                                                                        alignItems: 'center',
                                                                        gap: '4px',
                                                                        fontWeight: 500
                                                                    }}
                                                                >
                                                                    Visit Website ↗
                                                                </a>
                                                            </span>
                                                        </li>
                                                    )}
                                                    <li>Share :<span>{project.info?.share || 'Web Development, Portfolio'}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-project-single-main-img" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                        {mainImg && <Image src={mainImg} alt={project.title} priority style={{ width: '100%', height: 'auto', display: 'block' }} />}
                                    </div>

                                    {(project.links && project.links.length > 0 || liveUrl) && (
                                        <div className="tp-project-live-bar" style={{
                                            marginTop: '30px',
                                            padding: '22px 28px',
                                            borderRadius: '12px',
                                            background: 'rgba(229, 84, 10, 0.08)',
                                            border: '1px solid rgba(229, 84, 10, 0.3)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            flexWrap: 'wrap',
                                            gap: '15px'
                                        }}>
                                            <div>
                                                <h5 style={{ margin: '0 0 4px', fontSize: '17px', fontWeight: 600, color: '#fff' }}>
                                                    Project Links &amp; Live Deployment
                                                </h5>
                                                <span style={{ fontSize: '13px', opacity: 0.8 }}>Explore the active websites built for this project</span>
                                            </div>
                                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                                {project.links && project.links.length > 0 ? (
                                                    project.links.map((link, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="theme-btn"
                                                            style={{
                                                                padding: '10px 22px',
                                                                fontSize: '14px',
                                                                borderRadius: '30px',
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '8px',
                                                                textDecoration: 'none'
                                                            }}
                                                        >
                                                            {link.label} ↗
                                                        </a>
                                                    ))
                                                ) : (
                                                    <a
                                                        href={liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="theme-btn"
                                                        style={{
                                                            padding: '10px 22px',
                                                            fontSize: '14px',
                                                            borderRadius: '30px',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            textDecoration: 'none'
                                                        }}
                                                    >
                                                        Visit Website ↗
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="tp-project-single-item list-widget">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tp-project-single-title">
                                                <h3>Our Strategies</h3>
                                            </div>
                                            <p>
                                                {project.strategiesText || "We prioritized simplicity, speed, and real user value. Every component was designed with modularity, ensuring future features could be added with minimal friction."}
                                            </p>
                                            <ul>
                                                {(project.strategies || [
                                                    "Clean responsive architecture across mobile, tablet, and desktop.",
                                                    "Optimized asset loading and fast interactive responses.",
                                                    "Seamless backend integration and intuitive user journeys.",
                                                    "Modern UI patterns adhering to accessibility standards.",
                                                    "Rigorous cross-browser testing prior to launch."
                                                ]).map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tp-project-single-item-quote">
                                                <p>
                                                    "{project.quote?.text || 'Exceptional work and attention to detail. Turned our complex requirements into a fast, beautifully engineered web application that our users love using every day.'}"
                                                </p>
                                                <span>{project.quote?.author || 'Yogesh K S'} - <span>{project.quote?.role || 'Full Stack Developer'}</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tp-project-single-item">
                                    <div className="tp-project-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                    {project.approach ? (
                                        Array.isArray(project.approach) ? (
                                            project.approach.map((p, idx) => <p key={idx}>{p}</p>)
                                        ) : (
                                            project.approach.split('\n\n').map((p, idx) => <p key={idx}>{p}</p>)
                                        )
                                    ) : (
                                        <p>
                                            We started with an in-depth review of the project objectives, target audience, and functional workflows. 
                                            By building reusable component libraries and standardizing design tokens, we maintained high visual polish 
                                            while keeping the codebase easy to maintain. Performance audits were run continuously to maintain 
                                            top-tier Lighthouse scores.
                                        </p>
                                    )}
                                </div>

                                <div className="tp-project-single-gallery">
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="tp-p-details-img" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                                {subImg1 && <Image src={subImg1} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />}
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="tp-p-details-img" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                                {subImg2 && <Image src={subImg2} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tp-project-single-item list-widget">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tp-project-single-title">
                                                <h3>{project.goalsTitle || "Received goals"}</h3>
                                            </div>
                                            <ul>
                                                {(project.goals || [
                                                    "Delivered full responsive design with zero layout shift.",
                                                    "High performance score and fast time-to-interactive.",
                                                    "Structured content schema for search engines.",
                                                    "Clear user conversion pathways."
                                                ]).map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 list-widget-s">
                                            <div className="tp-project-single-title">
                                                <h3>Results</h3>
                                            </div>
                                            <ul>
                                                {(project.results || [
                                                    "Significant increase in daily user engagement.",
                                                    "Reduced page bounce rates across mobile visitors.",
                                                    "Faster content updates with modular component design.",
                                                    "Flawless uptime and stable production release."
                                                ]).map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <RelatedProject currentId={project.Id} />

                                <div className="tp-project-single-item">
                                    <div className="tp-project-contact-area">
                                        <div className="tp-contact-title">
                                            <h2>Have project in mind? Let's discuss</h2>
                                            <p>Get in touch with us to see how we can help you with your project</p>
                                        </div>
                                        <div className="tp-contact-form-area">
                                            <Contact />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <BackToTop />
        </Fragment>
    );
};

export default ProjectDetailPage;
