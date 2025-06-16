import React from 'react';
import Slider from "react-slick";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'
import { Link } from 'react-scroll';



const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "Purus eget consectur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio maecenas mattis praesent.Eget vitaoe magna condimentum tristique scelerisque",
        Title: 'William Henry',
        Sub: "WP Developer",
    },
    {
        id: '02',
        tImg: ts2,
        Des: "Purus eget consectur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio maecenas mattis praesent.Eget vitaoe magna condimentum tristique scelerisque",
        Title: 'Harry Abraham',
        Sub: "SCG First Company",
    },
    {
        id: '03',
        tImg: ts3,
        Des: "Purus eget consectur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio maecenas mattis praesent.Eget vitaoe magna condimentum tristique scelerisque",
        Title: 'Benjir Walton',
        Sub: "Merketer",
    }
]

const Testimonial = () => {

    const settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
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


    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-12">
                        <div className="testimonials-left">
                            <h3>What My Customers Says About Me</h3>
                            <p>Consectetur. Fusce nunc sit ac sapien mauris vitae. Tortor cras nisl molestie malesuada
                                mauris. Quam at sed cras enim adipiscing molestie odio.</p>
                            <Link to="contact" spy={true} smooth={true} duration={500} className="theme-btn">Contact our Support</Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="testimonials-right">
                            <div className="testimonials-wrapper testimonial-active">
                                <Slider {...settings}>
                                    {testimonial.map((testimonial, tsm) => (
                                        <div className="testimonials-item" key={tsm}>
                                            <div className="testimonials-item-bottom">
                                                <div className="testimonials-item-bottom-author">
                                                    <img src={testimonial.tImg} alt=""/>
                                                </div>
                                                <div className="testimonials-item-bottom-author-text">
                                                    <h3>{testimonial.Title}</h3>
                                                    <span>{testimonial.Sub}</span>
                                                </div>
                                            </div>
                                            <div className="testimonials-item-top">
                                                <p>“{testimonial.Des}”</p>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;