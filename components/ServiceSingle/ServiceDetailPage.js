import React, { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import BackToTop from '../backToTop/backToTop';
import Contact from './contact';
import { getServiceDetail } from '../../api/serviceDetailData';

const ServiceDetailPage = ({ slug }) => {
    const detail = getServiceDetail(slug);

    const mainImg = detail.defaultImg;
    const subImg1 = detail.img1;
    const subImg2 = detail.img2;

    const relatedSlugMap = {
        'Website Development': 'website-development',
        'Web Application Development': 'web-application-development',
        'CMS & WordPress Development': 'cms-wordpress-development',
        'SaaS & Custom Software': 'saas-custom-software',
        'E-commerce Development': 'e-commerce-development',
        'Technical SEO & Website Performance': 'website-development',
        'API & Backend Integration': 'web-application-development',
    };

    return (
        <Fragment>
            <Head>
                <title>{detail.title} - Yogesh K S | Full Stack Developer</title>
                <meta name="description" content={detail.subheadline || detail.description1} />
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
                                <Link href="/#service" style={{ color: '#e5540a', textDecoration: 'none' }}>Services</Link>
                                <span style={{ margin: '0 10px', opacity: 0.5 }}>/</span>
                                <span style={{ opacity: 0.8 }}>{detail.title}</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Service Content Area - Exact Popup Inner UI */}
            <div className="tp-service-single-area" style={{ background: 'transparent', paddingTop: '10px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="tp-service-single-wrap">
                                <div className="tp-service-single-item">
                                    <div className="tp-service-single-main-img">
                                        {mainImg && <Image src={mainImg} alt={detail.title} priority />}
                                    </div>
                                    <div className="tp-service-single-title">
                                        <h3>{detail.title}</h3>
                                    </div>
                                    <p style={{ fontWeight: 500, fontSize: '20px', marginBottom: '15px' }}>{detail.subheadline}</p>
                                    <p>{detail.description1}</p>
                                    <p>{detail.description2}</p>
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="tp-p-details-img">
                                                {subImg1 && <Image src={subImg1} alt="" />}
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="tp-p-details-img">
                                                {subImg2 && <Image src={subImg2} alt="" />}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tp-service-single-item list-widget">
                                    <div className="tp-service-single-title">
                                        <h3>Our Capabilities</h3>
                                    </div>
                                    <p>{detail.capabilitiesIntro}</p>
                                    <ul>
                                        {detail.deliverables.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="tp-service-single-item">
                                    <div className="tp-service-single-title">
                                        <h3>Our Approach</h3>
                                    </div>
                                    <p>{detail.approach}</p>
                                </div>

                                <div className="tp-service-single-item list-widget">
                                    <div className="tp-service-single-title">
                                        <h3>Our Work Process</h3>
                                    </div>
                                    <ul>
                                        {detail.workProcess.map((step, idx) => (
                                            <li key={idx}>{step}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="tp-service-single-item">
                                    <div className="tp-service-single-title">
                                        <h3>Related Services</h3>
                                    </div>
                                    <div className="tp-service-area">
                                        <div className="row align-items-center">
                                            {detail.relatedServices.map((service, srv) => {
                                                const sTarget = relatedSlugMap[service.title] || 'website-development';
                                                return (
                                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                                        <div className="tp-service-item">
                                                            <i className={`fi ${service.icon}`}></i>
                                                            <h2>
                                                                <Link href={`/service/${sTarget}`}>
                                                                    {service.title}
                                                                </Link>
                                                            </h2>
                                                            <p>{service.description}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="tp-service-single-item">
                                    <div className="tp-service-contact-area">
                                        <div className="tp-contact-title">
                                            <h2>{detail.contactTitle}</h2>
                                            <p>{detail.contactSubtitle}</p>
                                        </div>
                                        <div className="tp-contact-form-area">
                                            <Contact defaultService={detail.title} />
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

export default ServiceDetailPage;
