import React from 'react';
import sign from '../../images/signature-2.png'
import about from '../../images/about3.jpg'
import rotate from '../../images/rotate-text2.svg'

const About4 = (props) => {

    return (
        <section className="wpo-about-section-s4 section-padding" id='about'>
            <div className="container">
                <div className="about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="about-img">
                                <img src={about} alt="" />
                                <div className="round-text">
                                    <img src={rotate} alt="" />
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
                    </div>
                </div>
            </div>
            <div className="light-shape-1"></div>
            <div className="light-shape-2"></div>
            <div className="light-shape-3"></div>
        </section>
    )
}

export default About4;