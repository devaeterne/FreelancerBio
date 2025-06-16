import React from "react";
import Slider from "react-slick";
import hero1 from '../../images/slider/img-3.png'
import client1 from '../../images/slider/client1.png'
import client2 from '../../images/slider/client2.png'
import client3 from '../../images/slider/client3.png'
import client4 from '../../images/slider/client4.png'
import client5 from '../../images/slider/client5.png'
import rotate from '../../images/rotate-text2.svg'
import VideoModal from "../ModalVideo/VideoModal";

const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true
};

const Hero3 = () => {
    return (
        <section className="wpo-hero-style-3">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-12 order-md-1 order-1">
                        <div className="wpo-hero-content">
                            <div className="wpo-hero-text">
                                <span>Hello I’m</span>
                                <h2>Albert Wilson</h2>
                                <p>A Creative UX/UI Designer Who Solve
                                    Problems Through Designs</p>
                            </div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <a href="about.html" className="theme-btn-s3"><span>Lets Get Started</span></a>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                        <span className="video-btn">
                                            Watch Our Video
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-12 order-md-2 order-3">
                        <div className="wpo-hero-img">
                            <img src={hero1} alt="" />
                            <div className="line-shape">
                                <svg viewBox="0 0 747 815" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M719.5 4.46177C731.74 -1.16507 745.482 8.56845 744.234 21.9821L672.226 796.514C670.979 809.928 655.679 816.961 644.686 809.175L9.92582 359.548C-1.06721 351.761 0.491669 334.994 12.7318 329.367L719.5 4.46177Z"
                                        stroke="url(#paint0_linear_58_42)" strokeWidth="5" />
                                    <defs>
                                        <linearGradient id="paint0_linear_58_42" x1="749.93" y1="-12.2787" x2="184.505"
                                            y2="785.961" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#F2CD8C" />
                                            <stop offset="1" stopColor="#CC9260" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="line-shape-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 626 446" fill="none">
                                    <path d="M624 443L2 3" stroke="url(#paint0_linear_58_46)" strokeWidth="5" />
                                    <defs>
                                        <linearGradient id="paint0_linear_58_46" x1="313" y1="223" x2="312.422"
                                            y2="223.816" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#F2CD8C" />
                                            <stop offset="1" stopColor="#CC9260" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-supporter">
                <div className="wpo-supporter-text">
                    <div className="content">
                        <h3>325+</h3>
                        <p>Happy Clients</p>
                    </div>
                </div>
                <div className="wpo-supporter-img">
                    <ul className="wpo-supporter-slide">
                        <Slider {...settings}>
                            <li><img src={client1} alt="" /></li>
                            <li><img src={client2} alt="" /></li>
                            <li><img src={client3} alt="" /></li>
                            <li><img src={client4} alt="" /></li>
                            <li><img src={client5} alt="" /></li>
                        </Slider>
                    </ul>
                </div>
            </div>
            <div className="rotate-text">
                <img src={rotate} alt="" />
            </div>
            <div className="light-shape-1"></div>
            <div className="light-shape-2"></div>
            <div className="light-shape-3"></div>
        </section>
    )
}

export default Hero3;