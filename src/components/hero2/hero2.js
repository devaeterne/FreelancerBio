import React from "react";
import Slider from "react-slick";
import hero1 from '../../images/slider/img-2.jpg'
import client1 from '../../images/slider/client1.png'
import client2 from '../../images/slider/client2.png'
import client3 from '../../images/slider/client3.png'
import client4 from '../../images/slider/client4.png'
import client5 from '../../images/slider/client5.png'
import vector1 from '../../images/vector/1.svg'
import vector2 from '../../images/vector/2.svg'
import vector3 from '../../images/vector/3.svg'
import shape1 from '../../images/vector/4.svg'

const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true
};

const Hero2 = () => {
    return (
        <section className="wpo-hero-style-2">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xl-3 col-lg-3 col-md-3 col-12 order-md-1 order-1">
                        <div className="wpo-hero-left">
                            <div className="wpo-hero-title-box">
                                <div className="wpo-hero-title">
                                    <h2>Hello I’m Albert Wilson</h2>
                                </div>
                            </div>
                            <div className="experience">
                                <div className="icon"><span>10</span></div>
                                <div className="content">
                                    <p>Years Of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-6 col-12 order-md-2 order-3">
                        <div className="wpo-hero-img">
                            <img src={hero1} alt="" />
                            <div className="vector-1">
                                <img src={vector1} alt="" />
                            </div>
                            <div className="vector-2">
                                <img src={vector2} alt="" />
                            </div>
                            <div className="vector-3">
                                <img src={vector3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col col-xl-3 col-lg-3 col-md-3 col-12 order-md-3 order-2">
                        <div className="wpo-hero-right">
                            <div className="wpo-supporter">
                                <div className="wpo-supporter-text">
                                    <div className="content">
                                        <h3>325+</h3>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                                <div className="wpo-supporter-img">
                                    <ul className="wpo-supporter-slide owl-carousel">
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
                            <div className="wpo-hero-title-box">
                                <div className="wpo-hero-title">
                                    <h2>A Creative UX/UI Designer</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <img src={shape1} alt="" />
            </div>
            <div className="shape-2">
                <img src={shape1} alt="" />
            </div>
            <div className="hero-marque">
                <div className="marquee">
                    <div className="track">
                        <div className="content">
                            <h1>Albert Wilson Albert Wilson Albert Wilson Albert Wilson</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="round-shape">
                <div className="round-1"></div>
                <div className="round-2"></div>
                <div className="round-3"></div>
            </div>
        </section>
    )
}

export default Hero2;