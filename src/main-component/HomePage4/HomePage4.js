import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero4 from '../../components/hero4/hero4';
import MarqueeSec from '../../components/MarqueeSec/MarqueeSec';
import FunFactSection from '../../components/FunFact/FunFact';
import About4 from '../../components/about4/about4';
import BlogSection from '../../components/BlogSection/BlogSection';
import ProjectSectionS3 from '../../components/ProjectSectionS3/ProjectSectionS3';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ContactArea from '../../components/ContactArea';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const HomePage4 =() => {
    return(
        <Fragment>
            <div className="dark-mode">
                <Navbar hclass={'wpo-header-style-3'} topbarNone={'topbar-none'}/>
                <Hero4/>
                <MarqueeSec/>
                <About4/>
                <FunFactSection fClass={'wpo-fun-fact-section-s4'}/>
                <ServiceSection/>
                <ProjectSectionS3/>
                <Testimonial2/>
                <PortfolioSection/>
                <ContactArea btnClass={'theme-btn-s3'}/>
                <BlogSection stitle={'wpo-section-title-s3'}/>
                <Footer ftClass={'wpo-site-footer-s2'}/>
                <Scrollbar/>
            </div>
        </Fragment>
    )
};
export default HomePage4;