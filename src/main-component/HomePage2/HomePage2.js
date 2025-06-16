import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2/hero2';
import About2 from '../../components/about2/about2';
import BlogSection from '../../components/BlogSection/BlogSection';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import Testimonial from '../../components/Testimonial/Testimonial';
import ContactArea from '../../components/ContactArea';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} topbarNone={'topbar-none'}/>
            <Hero2/>
            <About2/>
            <ProjectSectionS2/>
            <Testimonial/>
            <ContactArea contactClass={'wpo-contact-section-s2'} btnClass={'theme-btn'}/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;