import React from 'react'
import { Link } from 'react-scroll'

const CtaSection = (props) => {
    return (
        <div className="absolute w-full top-[-280px] z-10 md:hidden">
            <div className="wraper">
                <div className="relative py-[80px] px-[165px] pl-[0] bg-[#FF4155] z-10 
            before:absolute before:left-0 before:top-0 before:w-full before:h-full
            before:content-['']] 
            before:bg-no-repeat before:bg-center before:bg-cover before:-z-0">
                    <div className="grid grid-cols-2 gap-3 items-center relative z-20">
                        <h2 className="font-base-font font-bold text-[50px] leading-[60px] text-white xl:text-[45px] lg:text-[35px] lg:leading-[50px]">Send me a message and make something together.</h2>
                        <div className="text-right">
                            <Link className="relative bg-[#202020] text-white inline-block font-semibold 
                    py-[15px] px-[35px] pr-[65px] rounded-[5px] capitalize text-[16px]
                    before:absolute  before:content-['\f10d'] before:font-[Flaticon] before:right-[30px]
                     before:top-[50%] before:text-[14px] before:-translate-y-1/2" to="contact" spy={true} smooth={true} duration={500}>Contact Us</Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="absolute top-0 left:[-40%] w-[40%] h-[100%] bg-[#FF4155] -z-10 
        before:absolute before:left-0 before:top-0 before:w-full before:h-full
        before:content-['']]
        before:bg-no-repeat before:bg-center before:bg-cover before:z-0">
            </div>
        </div>
    )
}

export default CtaSection;