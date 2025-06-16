import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../api/project'
import ProjectSingle from '../ProjectSingle/ProjectSingle';

const settings = {
    autoplay: false,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    fade: true,
    cssEase: 'linear'
};


const ProjectSection = (props) => {

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

        <section className="wpo-project-section section-padding" id='projects'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <h2>My Latest Work</h2>
                            <p>Here is my latest work. Where you will find my creativity and my working talents.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="project-active">
                    <Slider {...settings}>
                        {Projects.slice(0, 3).map((project, pro) => (
                            <div className="wpo-project-item" key={pro}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="wpo-project-img">
                                            <span onClick={() => handleClickOpen(project)}><img src={project.pImg} alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="wpo-project-text">
                                            <div className="wpo-project-text-inner">
                                                <span>{project.subTitle}</span>
                                                <h2 onClick={() => handleClickOpen(project)}>{project.title}</h2>
                                                <p>{project.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <ProjectSingle open={open} onClose={handleClose} title={state.title} pImg={state.ps1img} psub1img1={state.psub1img1} psub1img2={state.psub1img2} />
        </section>
    );
}

export default ProjectSection;