import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../api/project'
import ProjectSingle from '../ProjectSingle/ProjectSingle';
import { Link } from 'react-scroll'

const settings = {
    autoplay: false,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
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
                dots: true,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1
            }
        }
    ]
};


const ProjectSectionS3 = (props) => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({
    })

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }
    return (

        <section className="wpo-project-section-s3 section-padding" id='projects'>
            <div className="container">
                <div className="wpo-project-section-title">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="wpo-section-title-s2">
                                <h2>My Latest Work</h2>
                                <p>Here is my latest work. Where you will find my creativity and my working talents.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="wpo-section-title-btn">
                                <Link to="contact" spy={true} smooth={true} duration={500} className="theme-btn-s3"><span>Contact our Support</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="wpo-project-wrap">
                    <div className="wpo-project-slide">
                        <Slider {...settings}>
                            {Projects.slice(3, 8).map((project, pro) => (
                                <div className="wpo-project-item" key={pro}>
                                    <div className="wpo-project-img">
                                        <span onClick={() => handleClickOpen(project)}><img src={project.pImg} alt="" /></span>
                                    </div>
                                    <div className="wpo-project-text">
                                        <h2 onClick={() => handleClickOpen(project)}>{project.title}</h2>
                                        <span>{project.subTitle}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <ProjectSingle open={open} onClose={handleClose} title={state.title} pImg={state.ps1img} psub1img1={state.psub1img1} psub1img2={state.psub1img2} />
        </section>
    );
}

export default ProjectSectionS3;