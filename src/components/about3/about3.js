import React, { useState } from 'react';
import Services from '../../api/service'
import ServiceSingle from '../ServiceSingle';
import sign from '../../images/signature-2.png'
import about from '../../images/about2.png'


const About3 = (props) => {

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
        <section className="wpo-about-section-s3" id='about'>
            <div className="container">
                <div className="about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="about-img">
                                <img src={about} alt="" />

                                <div className="line-shape">
                                    <svg viewBox="0 0 691 698" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M194.745 7.73158L682.884 476.323C692.602 485.652 688.577 502.003 675.639 505.755L25.7575 694.2C12.8189 697.952 0.670987 686.29 3.89112 673.209L165.633 16.173C168.853 3.09205 185.027 -1.59763 194.745 7.73158Z"
                                            stroke="url(#paint0_linear_58_164)" strokeWidth="5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_58_164" x1="171.486" y1="-18.0613"
                                                x2="411.364" y2="809.192" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#F2CD8C" />
                                                <stop offset="1" stopColor="#CC9260" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="line-shape-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 654 194" fill="none">
                                        <path d="M652.815 2.4759L0.769775 190.91" stroke="url(#paint0_linear_58_165)"
                                            strokeWidth="5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_58_165" x1="326.792" y1="96.693"
                                                x2="327.07" y2="97.6537" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#F2CD8C" />
                                                <stop offset="1" stopColor="#CC9260" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 order-lg-2 order-1">
                            <div className="about-content">
                                <h2>Why You Hire Me?</h2>
                                <p>Mignissim adipiscing pretium libero at tristique. Diam sitting mauris a
                                    interdum. In tristique eubturg vestibulum id amet malesuada. Quis morbi morbi sed
                                    volutpat tristique. Lacinia praesent dictum morbi et fermentum. Blandit cras ut sed
                                    quisque pellentesque iaculis elit. Lectus adipiscing semper odio lacus urna. Sit a
                                    sit ac blandit. <br />
                                    Cursus donec mollis elit arcu donec aliquam.Ullamcorper tortor montes tristique amet
                                    sed id semper. Platea ac pulvinar egestas viverra massa ullamcorper adipiscing sit
                                    massa.</p>
                                <div className="about-info">
                                    <h4>Albert Wilson</h4>
                                    <span>- CEO of the company</span>
                                </div>
                                <div className="signeture">
                                    <img src={sign} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 order-lg-3 order-3">
                            <div className="wpo-service-area">
                                <div className="row">
                                    {Services.slice(0, 3).map((service, srv) => (
                                        <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                            <div className="wpo-service-item">
                                                <div className="icon">
                                                    <i><img src={service.sIcon} alt="" /></i>
                                                </div>
                                                <div className="wpo-service-text">
                                                    <h3 onClick={() => handleClickOpen(service)}>{service.sTitle}</h3>
                                                    <p>{service.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="light-shape-1"></div>
            <div className="light-shape-2"></div>
            <div className="light-shape-3"></div>
            <ServiceSingle open={open} onClose={handleClose} title={state.sTitle} dImg={state.sImgS} sImg1={state.ssImg1} sImg2={state.ssImg2} />
        </section>
    )
}

export default About3;