import React from 'react'
import star from '../../images/star.svg'


const MarqueeSec = (props) => {
    return (
        <div className="digital-marque-sec">
            <div className="digital-marque">
                <div className="marquee">
                    <div className="track">
                        <div className="content">
                            <h1>
                                <span>Tell Me What You Want</span> <i><img src={star} alt="" /></i>
                                <span>I Am Here For Your Help</span> <i><img src={star} alt="" /></i>
                                <span>Lets Start A New Projects</span> <i><img src={star} alt="" /></i>
                                <span>Tell Me What You Want</span> <i><img src={star} alt="" /></i>
                                <span>I Am Here For Your Help</span> <i><img src={star} alt="" /></i>
                                <span>Lets Start A New Projects</span> <i><img src={star} alt="" /></i>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarqueeSec;