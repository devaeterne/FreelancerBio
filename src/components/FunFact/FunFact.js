import React from 'react'
import CountUp, { useCountUp } from 'react-countup';

const funFact = [
    {
        title: '980',
        subTitle: 'Successful Projects',
        sample: '+',
    },
    {
        title: '4.9',
        subTitle: 'Satisfied Clients',
        sample: '/5',
    },
    {
        title: '535',
        subTitle: 'Years of Experience',
        sample: '+',
    },
    {
        title: '15',
        subTitle: 'Award Winning',
        sample: '+',
    },


]


const FunFactSection = (props) => {

    useCountUp({
        end: '56656',
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });


    return (

        <section className={`wpo-fun-fact-section ${props.fClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3><span><CountUp end={funfact.title} enableScrollSpy /></span>+</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFactSection;