import React, { useState } from 'react';
import Services from '../../api/service'
import ServiceSingle from '../ServiceSingle';
import sign from '../../images/signature.png'
import about from '../../images/about.jpg'
import rotate from '../../images/rotate-text.svg'


const About = (props) => {

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
        <section className="wpo-about-section" id='about'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <h2>Why You Hire Me?</h2>
                            <p>Quisest ut pellentesque ut laoreet. Fermentum sapien posuere sedding beturd grimorbi
                                urbna nonnyro</p>
                        </div>
                    </div>
                </div>
                <div className="about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="about-content">
                                <p>Mignissim adipiscing pretium libero at tristique. Diam sitting mauris a interdum. In
                                    tristique eubturg vestibulum id amet malesuada. Quis morbi morbi sed volutpat
                                    tristique.
                                    Lacinia praesent dictum morbi et fermentum. Blandit cras ut sed quisque pellentesque
                                    iaculis elit. Lectus adipiscing semper odio lacus urna. Sit a sit ac blandit. Cursus
                                    donec mollis elit arcu donec aliquam. </p>
                                <div className="about-info">
                                    <h4>Albert Wilson</h4>
                                    <span>- CEO of the company</span>
                                </div>
                                <div className="signeture">
                                    <img src={sign} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-img">
                                <img src={about} alt="" />
                                <div className="rotate-text">
                                    <img src={rotate} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="wpo-service-area">
                                {Services.slice(0, 3).map((service, srv) => (
                                    <div className="wpo-service-item" key={srv}>
                                        <div className="icon">
                                            <i><img src={service.sIcon} alt="" /></i>
                                        </div>
                                        <div className="wpo-service-text">
                                            <h3 onClick={() => handleClickOpen(service)}>{service.sTitle}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceSingle open={open} onClose={handleClose} title={state.sTitle} dImg={state.sImgS} sImg1={state.ssImg1} sImg2={state.ssImg2} />
        </section>
    )
}

export default About;