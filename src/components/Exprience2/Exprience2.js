import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../../images/work/1.png'
import logo2 from '../../images/work/2.png'
import logo3 from '../../images/work/3.png'

const Expriences = [
    {
        date: '2015 - 2016',
        logo: logo1,
        position: 'Junior Visual Designer',
        companyName: 'Trapeza Group, USA.',
        workFrom: '',
    },
    {
        date: '2017 - 2018',
        logo: logo2,
        position: 'UI/UX Designer',
        companyName: 'Gallerie Ontario, Canada',
        workFrom: '(Remote)',
    },
    {
        date: '2019 - 2020',
        logo: logo3,
        position: 'Seinor UI/UX Desinger',
        companyName: 'Morson Hybrid, Canada',
        workFrom: '',
    }

]


const Exprience2 = (props) => {
    return (
        <section className="section-wrap bg-[#191919] overflow-hidden z-50">
            <div className="wraper">
                <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
                    <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">My Work
                        Experience</h2>
                    <p className="base-font text-lg font-normal">Must explain to yotu how all this mistaken idea of
                        denouncing
                        pleasure born and give you
                        a complete account the system</p>
                </div>
                <div className="grid grid-rows-1 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    {Expriences.map((exprience, exp) => (

                        <ul className=" bg-[#282828] p-[30px]  md:px-[30px]  rounded-lg border transition border-transparent hover:border hover:border-[#494949]" key={exp}>
                            <li className="base-font text-white font-bold text-3xl  sm:text-[16px] w-full text-center mb-[10px]">
                                {exprience.date}</li>
                            <li>
                                <img src={exprience.logo} alt=""
                                    className="w-full text-center max-w-[100px] mx-auto" /></li>
                            <li className="w-full text-center mt-[20px]">
                                <h2 className="base-font mb-4 text-white font-bold text-2xl sm:text-[16px] ">{exprience.position}
                                </h2>
                                <p className="base-font text-[#DD584F] font-normal text-[15px] sm:text-[14px]">{exprience.companyName},
                                    {exprience.workFrom}.</p>
                            </li>
                            <li className="text-center mt-[20px]">
                                <Link to="/" className="text-white text-[16px] font-bold transition hover:text-[#FFE600] sm:text-[14px] w-full text-center">
                                    <i className="ti-arrow-right transition mr-7 text-[16px] col:mr-[5px]"></i>Go to website</Link>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
            <div className="absolute top-1/2 col:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <svg className="fill-[#E34E44] " width="1500" height="1500" fill="none">
                    <g filter="url(#a)" opacity=".45">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter id="a" width="1500" height="1500" x="0" y="0" colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_39_4212" stdDeviation="275" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default Exprience2;