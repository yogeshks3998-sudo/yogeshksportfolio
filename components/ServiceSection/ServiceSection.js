import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Services from '../../api/service';

const homeServices = [
    {
        slug: 'website-development',
        title: 'Website Development',
        description: 'I build modern, responsive websites that showcase your business, strengthen your online presence, and deliver a smooth user experience across devices.',
        icon: Services[0]?.icon || 'flaticon-vector',
    },
    {
        slug: 'web-application-development',
        title: 'Web Application Development',
        description: 'From interactive dashboards to custom business applications, I develop practical solutions tailored to your workflows and requirements.',
        icon: Services[1]?.icon || 'flaticon-smartphone',
    },
    {
        slug: 'cms-wordpress-development',
        title: 'CMS & WordPress Development',
        description: 'I create easy-to-manage websites and custom content management systems that let you update pages, projects, and business content with ease.',
        icon: Services[2]?.icon || 'flaticon-palette',
    },
    {
        slug: 'saas-custom-software',
        title: 'SaaS & Custom Software',
        description: 'I help startups and businesses turn ideas into functional web products, from MVPs and admin panels to custom features and API integrations.',
        icon: Services[3]?.icon || 'flaticon-bar-chart',
    },
    {
        slug: 'e-commerce-development',
        title: 'E-commerce Development',
        description: 'I build user-friendly online stores with product catalogues, shopping carts, product filters, and custom features to help businesses sell online.',
        icon: 'ti-shopping-cart',
    },
];

const ServiceSection = (props) => {
    // Drag-to-scroll swipe logic
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [dragMoved, setDragMoved] = useState(false);

    const handleMouseDown = (e) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        setDragMoved(false);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 6) {
            setDragMoved(true);
        }
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className="tp-service-area section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>WHAT I OFFER</span>
                    <h2>Services Built Around Your Business</h2>
                    <p style={{ maxWidth: '680px', margin: '0 auto' }}>From business websites to custom web applications, I build digital solutions designed around your goals.</p>
                </div>
                <div
                    className="tp-service-wrap"
                    ref={sliderRef}
                    style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        userSelect: 'none',
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                >
                    {homeServices.map((service, srv) => (
                        <div
                            key={srv}
                            className="tp-service-card-col"
                            style={{
                                flex: '0 0 25%',
                                minWidth: '320px',
                                display: 'flex',
                            }}
                        >
                            <div className="tp-service-item">
                                <div className="tp-service-icon-box">
                                    <i className={`fi ${service.icon}`}></i>
                                </div>
                                <h2>
                                    <Link 
                                        href={`/service/${service.slug}`}
                                        onClick={(e) => { if (dragMoved) e.preventDefault(); }}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {service.title}
                                    </Link>
                                </h2>
                                <p>{service.description}</p>
                                <div className="tp-service-btn-box">
                                    <Link 
                                        className="tp-service-more-btn read-more" 
                                        href={`/service/${service.slug}`}
                                        onClick={(e) => { if (dragMoved) e.preventDefault(); }}
                                        aria-label={service.title}
                                    >
                                        <i className="fi flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <style jsx global>{`
                    .tp-service-wrap::-webkit-scrollbar {
                        display: none !important;
                        width: 0 !important;
                        height: 0 !important;
                    }

                    .tp-service-wrap .tp-service-card-col {
                        display: flex !important;
                    }

                    .tp-service-wrap .tp-service-item {
                        width: 100% !important;
                        height: 100% !important;
                        display: flex !important;
                        flex-direction: column !important;
                        padding: 48px 28px 38px !important;
                        box-sizing: border-box !important;
                        transition: all 0.35s ease !important;
                        position: relative !important;
                    }

                    /* 1. Uniform Icon Badge & Centered Alignment */
                    .tp-service-wrap .tp-service-icon-box {
                        width: 70px !important;
                        height: 70px !important;
                        border-radius: 50% !important;
                        background: rgba(229, 84, 10, 0.12) !important;
                        border: 1px solid rgba(229, 84, 10, 0.25) !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        margin-bottom: 24px !important;
                        flex-shrink: 0 !important;
                        transition: all 0.35s ease !important;
                    }

                    .tp-service-wrap .tp-service-icon-box i,
                    .tp-service-wrap .tp-service-icon-box .fi,
                    .tp-service-wrap .tp-service-icon-box [class^="flaticon-"],
                    .tp-service-wrap .tp-service-icon-box [class^="ti-"] {
                        font-size: 32px !important;
                        line-height: 1 !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        color: #e5540a !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        position: static !important;
                        width: auto !important;
                        height: auto !important;
                        transition: all 0.35s ease !important;
                    }

                    .tp-service-wrap .tp-service-icon-box i:before,
                    .tp-service-wrap .tp-service-icon-box .fi:before {
                        font-size: 32px !important;
                        line-height: 1 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        color: inherit !important;
                        display: inline-block !important;
                    }

                    /* Completely remove legacy offset pseudo-element */
                    .tp-service-wrap .tp-service-item .fi:after,
                    .tp-service-wrap .tp-service-icon-box i:after {
                        display: none !important;
                        content: none !important;
                    }

                    /* 2. Uniform Title Height Across All Cards */
                    .tp-service-wrap .tp-service-item h2 {
                        font-size: 22px !important;
                        font-weight: 500 !important;
                        line-height: 1.35 !important;
                        margin-top: 0 !important;
                        margin-bottom: 14px !important;
                        min-height: 60px !important;
                        display: flex !important;
                        align-items: flex-start !important;
                        transition: all 0.3s ease !important;
                    }

                    .tp-service-wrap .tp-service-item h2 a {
                        color: inherit !important;
                        text-decoration: none !important;
                        transition: color 0.3s ease !important;
                    }

                    /* 3. Description Fills Space Evenly */
                    .tp-service-wrap .tp-service-item p {
                        font-size: 15px !important;
                        line-height: 1.65 !important;
                        font-weight: 300 !important;
                        margin-bottom: 24px !important;
                        flex-grow: 1 !important;
                        transition: all 0.3s ease !important;
                    }

                    /* 4. Button Container Pinned At Exact Same Bottom Position */
                    .tp-service-wrap .tp-service-btn-box {
                        margin-top: auto !important;
                        display: flex !important;
                        align-items: center !important;
                        padding-top: 8px !important;
                    }

                    .tp-service-wrap .tp-service-more-btn {
                        width: 44px !important;
                        height: 44px !important;
                        border-radius: 50% !important;
                        background: rgba(229, 84, 10, 0.12) !important;
                        border: 1px solid rgba(229, 84, 10, 0.28) !important;
                        display: inline-flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        text-align: center !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        color: #e5540a !important;
                        text-decoration: none !important;
                        transition: all 0.3s ease !important;
                    }

                    .tp-service-wrap .tp-service-more-btn i,
                    .tp-service-wrap .tp-service-more-btn .fi {
                        position: static !important;
                        transform: rotate(45deg) !important;
                        display: inline-flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        line-height: 1 !important;
                        color: inherit !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        transition: transform 0.3s ease, color 0.3s ease !important;
                    }

                    .tp-service-wrap .tp-service-more-btn i:before,
                    .tp-service-wrap .tp-service-more-btn .fi:before {
                        font-size: 15px !important;
                        line-height: 1 !important;
                        margin: 0 !important;
                        color: inherit !important;
                    }

                    .tp-service-wrap .tp-service-more-btn i:after,
                    .tp-service-wrap .tp-service-more-btn .fi:after {
                        display: none !important;
                        content: none !important;
                    }

                    /* 5. Balanced Card Hover Effects */
                    .tp-service-wrap .tp-service-item:hover {
                        border-color: rgba(229, 84, 10, 0.45) !important;
                        transform: translateY(-5px) !important;
                        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25) !important;
                    }

                    .tp-service-wrap .tp-service-item:hover .tp-service-icon-box {
                        background: #e5540a !important;
                        border-color: #e5540a !important;
                        transform: scale(1.06) !important;
                        box-shadow: 0 6px 20px rgba(229, 84, 10, 0.4) !important;
                    }

                    .tp-service-wrap .tp-service-item:hover .tp-service-icon-box i,
                    .tp-service-wrap .tp-service-item:hover .tp-service-icon-box .fi,
                    .tp-service-wrap .tp-service-item:hover .tp-service-icon-box i:before,
                    .tp-service-wrap .tp-service-item:hover .tp-service-icon-box .fi:before {
                        color: #ffffff !important;
                    }

                    .tp-service-wrap .tp-service-item:hover h2 a {
                        color: #e5540a !important;
                    }

                    .tp-service-wrap .tp-service-item:hover .tp-service-more-btn {
                        background: #e5540a !important;
                        border-color: #e5540a !important;
                        color: #ffffff !important;
                        transform: scale(1.1) !important;
                        box-shadow: 0 4px 14px rgba(229, 84, 10, 0.4) !important;
                    }

                    .tp-service-wrap .tp-service-item:hover .tp-service-more-btn i,
                    .tp-service-wrap .tp-service-item:hover .tp-service-more-btn .fi,
                    .tp-service-wrap .tp-service-item:hover .tp-service-more-btn i:before,
                    .tp-service-wrap .tp-service-item:hover .tp-service-more-btn .fi:before {
                        color: #ffffff !important;
                    }

                    @media (max-width: 991px) {
                        .tp-service-wrap .tp-service-item {
                            padding: 38px 22px 30px !important;
                            border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
                        }
                        .tp-service-wrap .tp-service-item h2 {
                            font-size: 20px !important;
                            min-height: 52px !important;
                        }
                    }
                `}</style>
            </div>
            <div className="visible-rotate-text">
                <h1>Services</h1>
            </div>
        </div>
    );
}

export default ServiceSection;