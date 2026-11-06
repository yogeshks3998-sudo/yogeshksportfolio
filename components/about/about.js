import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import aImg from '/public/images/about/about-hero.png';

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <Image src={aImg} alt="Yogesh K S - Full Stack Developer" priority />
                                <div className="tf-about-img-text">
                                    <div className="tf-about-icon">
                                        <h3>2+</h3>
                                        <span>Years Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>About Me</small>
                                <h2>Building Digital Solutions That Help Businesses Grow</h2>
                                <h5>I build modern websites, web applications, and custom solutions for businesses and startups.</h5>
                                <p>From responsive websites to SaaS platforms and CMS solutions, I focus on clean design, reliable functionality, and performance. I turn ideas into practical digital products that help businesses establish and grow their online presence.</p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3><span>10</span>+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>2</span>+</h3>
                                        <p>Years Experience</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>10</span>+</h3>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>

                                <div className="tf-about-btn" style={{ marginTop: '40px' }}>
                                    <Link href="/about" className="theme-btn">
                                        Know More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Me</h1>
            </div>
        </section>
    )
}

export default About;