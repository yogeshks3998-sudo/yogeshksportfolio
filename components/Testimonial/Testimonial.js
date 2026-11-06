import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const Testimonials = [
    {
        name: 'Rajesh Gowda',
        client: 'Marvella Buildtech',
        title: 'Managing Director',
        descriptoion: '“Yogesh built a fantastic corporate website and custom CMS for Marvella Buildtech. The dynamic project showcase and video hero section elevated our brand credibility, while the backend simplified our project updates and recruitment completely.”',
    },
    {
        name: 'Suresh Reddy',
        client: 'Riyom Infraa',
        title: 'Founder & Director',
        descriptoion: '“Our real estate showcase website was executed with extreme precision. The curated property layouts and lightning-fast mobile responsiveness Yogesh delivered helped us present our Bengaluru residential developments effortlessly to premium buyers.”',
    },
    {
        name: 'Dr. Ananya Rao',
        client: 'Parinitha Technologies',
        title: 'Head of Operations',
        descriptoion: '“The academy website Yogesh created for Parinitha Technologies exceeded all our expectations. Course exploration and admissions inquiries became seamless, driving a substantial boost in student enrollments and program reach across India.”',
    },
    {
        name: 'Vikramaditya Hegde',
        client: 'Aikya Ventures',
        title: 'Co-Founder',
        descriptoion: '“From our Next.js e-commerce store with an AI-powered laptop finder to our corporate web presence, Yogesh delivered unmatched engineering quality, high-speed GraphQL integrations, and flawless UI/UX performance.”',
    },
    {
        name: 'Aditi Deshmukh',
        client: 'Lexaum LLP',
        title: 'Senior Partner',
        descriptoion: '“Lexaum LLP required an authoritative, sophisticated platform for our legal operations. Yogesh delivered a world-class website that balances editorial elegance with seamless client inquiry workflows and high trust.”',
    },
    {
        name: 'Sanjay Manjunath',
        client: 'Sri Sumeru Realty',
        title: 'Technical Director',
        descriptoion: '“Showcasing specialized GFRC and FRP architectural solutions online was a major challenge. Yogesh developed a high-performance 17-route catalog website that makes technical exploration and inquiry effortless for architects and developers.”',
    },
]



const Testimonial = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className="tp-testimonial-section section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>Testimonials</span>
                    <h2>What My clients say.</h2>
                </div>

                <div className="tp-testimonial-wrap">
                    <Slider {...settings}>
                        {Testimonials.map((tstml, tsm) => (
                            <div className="tp-testimonial-item" key={tsm}>
                                <div className="tp-testimonial-text">
                                    <p>{tstml.descriptoion}</p>
                                    <span>
                                        <strong>{tstml.name}</strong>
                                        <small>{tstml.client}</small>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>Review</h1>
            </div>
            <style jsx>{`
                .tp-testimonial-wrap :global(.slick-track) {
                    display: flex !important;
                }
                .tp-testimonial-wrap :global(.slick-slide) {
                    height: auto !important;
                    display: flex !important;
                }
                .tp-testimonial-wrap :global(.slick-slide > div) {
                    display: flex;
                    width: 100%;
                }
                :global(.tp-testimonial-item) {
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: space-between !important;
                    height: 100% !important;
                    width: 100% !important;
                    box-sizing: border-box !important;
                }
                :global(.tp-testimonial-text) {
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: space-between !important;
                    height: 100% !important;
                    width: 100% !important;
                }
                :global(.tp-testimonial-text p) {
                    flex-grow: 1 !important;
                    margin-bottom: 25px !important;
                }
                :global(.tp-testimonial-text span) {
                    display: block !important;
                    width: 100% !important;
                    position: relative !important;
                    padding: 10px 0 !important;
                    padding-left: 36px !important;
                    padding-right: 65px !important;
                    box-sizing: border-box !important;
                }
                :global(.tp-testimonial-text span strong) {
                    display: block !important;
                    font-weight: 600 !important;
                    font-size: 14px !important;
                    letter-spacing: 0.5px !important;
                    line-height: 1.3 !important;
                }
                :global(.tp-testimonial-text span small) {
                    display: block !important;
                    font-size: 12px !important;
                    font-weight: 400 !important;
                    letter-spacing: 0.5px !important;
                    opacity: 0.8 !important;
                    margin-top: 3px !important;
                    line-height: 1.3 !important;
                }
                :global(.tp-testimonial-text span:before) {
                    position: absolute !important;
                    left: 0 !important;
                    top: 18px !important;
                    width: 22px !important;
                    height: 1px !important;
                }
                :global(.tp-testimonial-text span:after) {
                    position: absolute !important;
                    right: 0 !important;
                    top: 50% !important;
                    transform: translateY(-50%) !important;
                    font-size: 42px !important;
                    line-height: 1 !important;
                    opacity: 0.28 !important;
                    pointer-events: none !important;
                }
            `}</style>
        </section>
    )
}

export default Testimonial;