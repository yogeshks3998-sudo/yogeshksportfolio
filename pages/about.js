import React, { Fragment } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import AboutHero from '../components/AboutPage/AboutHero';
import AboutStory from '../components/AboutPage/AboutStory';
import AboutApproach from '../components/AboutPage/AboutApproach';
import AboutExperience from '../components/AboutPage/AboutExperience';
import TechnicalExpertise from '../components/TechnicalExpertise/TechnicalExpertise';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import { Element } from 'react-scroll';
import Footer from '../components/footer/Footer';
import BackToTop from '../components/backToTop/backToTop';

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About Me - Yogesh K S | Full Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Yogesh K S, Full Stack Developer building clean, fast, and scalable web applications, admin dashboards, and modern software."
        />
      </Head>

      {/* Main Navbar */}
      <Navbar />

      {/* 1. Hero Section (Image 1) */}
      <AboutHero />

      {/* 2. Story / About Me Section (Image 2) */}
      <AboutStory />

      {/* 3. My Approach Section (Image 3) */}
      <AboutApproach />

      {/* 4. Experience Section (Image 4) */}
      <AboutExperience />

      {/* 5. Technical Expertise Section (Same as home page) */}
      <Element name="expertise">
        <TechnicalExpertise />
      </Element>

      {/* 6. My Work / My Projects Section (Same as home page) */}
      <Element name="project">
        <ProjectSection />
      </Element>

      {/* Footer & Back to top */}
      <Footer />
      <BackToTop />
    </Fragment>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default AboutPage;
