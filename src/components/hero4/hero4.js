import React from "react";
import hero1 from '../../images/slider/img-4.png'
import shape from '../../images/slider/shape.png'
import VideoModal from "../ModalVideo/VideoModal";
import { Link } from 'react-scroll'

const Hero4 = () => {
    return (
        <section className="wpo-hero-style-4">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-12 order-md-1 order-1">
                        <div className="wpo-hero-content">
                            <div className="wpo-hero-text">
                                <span>Hello I’m <span>Devid Rock</span></span>
                                <h2>A Creative
                                    <b>Designer
                                        <i className="shape">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342 109" fill="none">
                                                <path
                                                    d="M253.155 4.12319C179.456 0.617146 91.2846 11.4859 35.3131 37.48C23.738 43.1662 13.2074 50.0672 9.48518 58.2225C7.11129 63.4544 8.36945 69.0739 12.7944 73.9157C24.7588 86.5424 53.2027 92.7743 77.8531 96.7297C130.264 104.404 189.093 105.9 242.022 98.8186C278.128 94.0163 333.81 80.7476 331.702 57.9287C330.278 40.312 300.158 28.947 271.116 22.8287C229.929 14.2389 184.868 11.2094 140.69 10.9254C118.641 10.9032 96.6353 12.9723 75.9683 16.9622C55.7475 20.967 35.3843 26.5841 21.0603 35.1764C18.6721 36.6381 14.3469 34.9147 16.6306 33.3123C34.5154 22.0658 63.249 14.7895 89.7558 10.7081C128.289 4.79971 169.262 6.5478 208.502 9.42424C263.111 13.8093 345.267 26.7545 340.899 62.4223C338.739 73.496 323.987 82.6389 307.218 88.9424C260.443 105.957 198.147 109.924 142.451 107.527C108.41 105.915 73.9979 102.68 43.2466 94.52C18.9855 88.0486 -1.71957 77.0983 0.113075 61.9359C3.55996 39.9836 52.3861 23.6213 87.5338 15.3129C118.603 8.007 151.942 3.39235 185.77 1.35539C208.317 0.00729162 231.163 -0.108754 253.744 1.17515C255.306 1.26404 256.436 1.99487 256.265 2.80966C256.099 3.61704 254.708 4.2022 253.155 4.12319Z"
                                                    fill="url(#paint0_linear_64_849)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_64_849" x1="318.823" y1="54.22"
                                                        x2="16.3119" y2="54.22" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0" stopColor="#F2CD8C" />
                                                        <stop offset="1" stopColor="#CC9260" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </i>
                                    </b>
                                    Who Solve Problems Through Designs
                                </h2>
                            </div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link to="contact" spy={true} smooth={true} duration={500} className="theme-btn-s3"><span>Lets Get Started</span></Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal />
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="light-shape-1"></div>
            <div className="light-shape-2"></div>
            <div className="light-shape-3"></div>
            <div className="shape-bg">
                <img src={shape} alt="" />
            </div>
        </section>
    )
}

export default Hero4;