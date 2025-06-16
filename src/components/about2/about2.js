import React, { useState } from 'react';
import Services from '../../api/service'
import ServiceSingle from '../ServiceSingle';


const About2 = (props) => {

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
        <section className="wpo-about-section-s2 section-padding" id='about'>
            <div className="container">
                <div className="about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h2>What Can I Do For You?</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Accumsan mattis id aliquet feugiat mauris
                                    sagittis. Sit tellus amet id morbi est. Quis ut pellentesque ut laoreet. Fermentum
                                    sapien posuere sed morbi urna non. Condimentum non vel elementum nunc felis ac id.
                                    Pellentesque auctor tellus ut molestie. Volutpat egestas amet posuere hac et odio.
                                    Purus morbi feugiat tortor adipiscing odio porta bibendum non. Id sed sagittis eget
                                    sed egestas urna. </p>
                                <p>Ullamcorper tortor montes tristique amet sed id semper. Platea ac pulvinar egestas
                                    viverra massa ullamcorper adipiscing sit massa. Ipsum congue tellus morbi feugiat
                                    tempor in est. Quis ut pellentesque ut laoreet. Fermentum sapien posuere sed morbi
                                    urna nonMi quis sit vehicula nunc quisque etiam sit amet. Duis varius id et sapien.
                                    Donec nibh et fames vestibulum viverra.</p>
                                <div className="about-funfact">
                                    <div className="about-funfact-item">
                                        <h3><span>615</span>+</h3>
                                        <small>Project Complete</small>
                                    </div>
                                    <div className="about-funfact-item">
                                        <h3><span>568</span>+</h3>
                                        <small>Client Around The World</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="wpo-service-area">
                                {Services.slice(0, 4).map((service, srv) => (
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

export default About2;