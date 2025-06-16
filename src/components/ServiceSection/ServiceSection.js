import React, { useState } from 'react';
import Services from '../../api/service'
import ServiceSingle from '../ServiceSingle';

const ServiceSection = (props) => {

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

        <div className="wpo-service-area-s2 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="wpo-section-title-s3">
                            <h2>What I Do?</h2>
                            <p>Here is my Services. Where you will find my creativity
                                and my working talents.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Services.slice(0, 6).map((service, srv) => (
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
            <ServiceSingle open={open} onClose={handleClose} title={state.sTitle} dImg={state.sImgS} sImg1={state.ssImg1} sImg2={state.ssImg2} />
        </div>
    );
}

export default ServiceSection;