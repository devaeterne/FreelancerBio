import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import pImg1 from '../../images/protfolio/img-1.jpg'
import pImg2 from '../../images/protfolio/img-2.jpg'
import pImg3 from '../../images/protfolio/img-3.jpg'
import pImg4 from '../../images/protfolio/img-4.jpg'
import pImg5 from '../../images/protfolio/img-1.jpg'


const Portfolios = [
    {
        Pimg: pImg1,
        style: "s1",
    },
    {
        Pimg: pImg2,
        style: "s2",
    },
    {
        Pimg: pImg3,
        style: "s3",
    },
    {
        Pimg: pImg4,
        style: "s4",
    },
    {
        Pimg: pImg3,
        style: "s5",
    }

]

const PortfolioSection = (props) => {

    const [open, setOpen] = React.useState(false);

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        loop: false,
        autoplay: true,
        rtl: false,
        responsive: false,
    };

    return (
        <section className="wpo-portfolio-section section-padding">
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="portfolio-grids gallery-container clearfix">
                            <Slider {...settings}>
                                {Portfolios.slice(0, 6).map((image, i) => (
                                    <div className={`grid ${image.style}`} key={i}>
                                        <div className="img-holder" onClick={() => setOpen(true)}>
                                            <img src={image.Pimg} alt="" className="img img-responsive" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: pImg1 },
                    { src: pImg2 },
                    { src: pImg3 },
                    { src: pImg4 },
                    { src: pImg5 },
                ]}
            />
        </section>
    )
}

export default PortfolioSection;