import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import FunFactSection from '../../components/FunFact/FunFact';
import About from '../../components/about/about';
import BlogSection from '../../components/BlogSection/BlogSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import ContactArea from '../../components/ContactArea';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar topbarNone={'topbar-none'} />
            <Hero />
            <FunFactSection />
            <About />
            <ProjectSection />
            <Testimonial />
            <PortfolioSection />
            <ContactArea contactClass={'wpo-contact-section-s2'} btnClass={'theme-btn'}/>
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;