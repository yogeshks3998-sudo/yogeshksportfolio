import React, { Fragment } from 'react';
import Head from 'next/head';
import About from '../../components/about/about';
import BackToTop from '../../components/backToTop/backToTop';
import ContactArea from '../../components/ContactArea';
import Hero from '../../components/hero/hero';
import Marquee from '../../components/marque/marque';
import Navbar from '../../components/Navbar/Navbar';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import { Element } from 'react-scroll'
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Pricing from '../../components/Pricing';

const HomePage = () => {
    return (
        <Fragment>
            <Head>
                <title>Yogesh K S | Full Stack Developer & Software Engineer</title>
                <meta
                    name="description"
                    content="Official portfolio of Yogesh K S - Full Stack Developer specializing in modern web applications, scalable software solutions, and high-performance digital experiences."
                />
            </Head>
            <Navbar />
            <Element name='home'>
                <Hero />
            </Element>
            <Element name='about'>
                <About />
            </Element>
            <Element name='service'>
                <ServiceSection />
            </Element>
            <Marquee />
            <Element name='project'>
                <ProjectSection />
            </Element>
            <Testimonial />
            {/* Hidden for now:
            <Element name='blog'>
                <BlogSection />
            </Element>
            <Pricing />
            */}
            <Element name='contact'>
                <ContactArea />
            </Element>
            <Footer />
            <BackToTop />
        </Fragment>
    )
};
export async function getStaticProps() {
    return {
        props: {},
    };
}

export default HomePage;