import React from 'react'
import { Link } from 'react-router-dom'


const Pricing = (props) => {

    return (
        <section className="section-wrap bg-[#191919] overflow-hidden z-50">
            <div className="wraper">
                <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
                    <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">Pricing Plan
                    </h2>
                    <p className="base-font text-lg font-normal">Must explain to you how all this mistaken idea pleasure
                        born and give you a complete account.</p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    <div className="bg-[#262626] md:mb-[30px] sm:mx-[60px] col:mx-[0px] text-center mx-3">
                        <div className="px-5">
                            <span
                                className="inline-block pt-[3px] px-[30px] pb-[5px] bg-[#59C378] rounded-b-[10px] text-white">BASIC</span>
                            <h2
                                className="mt-7 mb-4 font-bold text-[45px] md:text-[30px] flex items-center justify-center text-white uppercase">
                                $120<span className="font-medium text-[#D8D8D8] ml-[2px] text-base inline-block "> / per
                                    month</span></h2>
                            <p className="pb-7 max-w-[282px] mx-auto text-[#D8D8D8] border-b border-[#496451]">Determine the
                                Best Pricing Strategy For Your Business.</p>
                        </div>
                        <div className="p-10 pt-9 list-none">
                            <ul>
                                <li className="text-[#D8D8D8] mb-4 text-base">Softwere Development</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Web Development</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Digital Marketing</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Graphic Design</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">24/Support</li>
                            </ul>
                            <Link to="/" className="theme-btn-2 mt-5">CHOOSE PLAN</Link>
                        </div>
                    </div>
                    <div className="bg-[#262626] md:mb-[30px] sm:mx-[60px] col:mx-[0px] text-center mx-3">
                        <div className="px-5">
                            <span
                                className="inline-block pt-[3px] px-[30px] pb-[5px] bg-[#59C378] rounded-b-[10px] text-white">PREMIUM</span>
                            <h2
                                className="mt-7 mb-4 font-bold text-[45px] md:text-[30px] flex items-center justify-center text-white uppercase">
                                $210<span className="font-medium text-[#D8D8D8] ml-[2px] text-base inline-block "> / per
                                    month</span></h2>
                            <p className="pb-7 max-w-[282px] mx-auto text-[#D8D8D8] border-b border-[#496451]">Determine the
                                Best Pricing Strategy For Your Business.</p>
                        </div>
                        <div className="p-10 pt-9 list-none">
                            <ul>
                                <li className="text-[#D8D8D8] mb-4 text-base">Softwere Development</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Web Development</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Digital Marketing</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Graphic Design</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">24/Support</li>
                            </ul>
                            <Link to="/" className="theme-btn-2 mt-5">CHOOSE PLAN</Link>
                        </div>
                    </div>
                    <div className="bg-[#262626]  text-center sm:mx-[60px] col:mx-[0px] mx-3">
                        <div className="px-5">
                            <span
                                className="inline-block pt-[3px] px-[30px] pb-[5px] bg-[#59C378] rounded-b-[10px] text-white">ADVANCED</span>
                            <h2
                                className="mt-7 mb-4 font-bold text-[45px] md:text-[30px] flex items-center justify-center text-white uppercase">
                                $373<span className="font-medium text-[#D8D8D8] ml-[2px] text-base inline-block "> / per
                                    month</span></h2>
                            <p className="pb-7 max-w-[282px] mx-auto text-[#D8D8D8] border-b border-[#496451]">Determine the
                                Best Pricing Strategy For Your Business.</p>
                        </div>
                        <div className="p-10 pt-9 list-none">
                            <ul>
                                <li className="text-[#D8D8D8] mb-4 text-base">Softwere Development</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Web Development</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Digital Marketing</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Graphic Design</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">24/Support</li>
                            </ul>
                            <Link to="/" className="theme-btn-2 mt-5">CHOOSE PLAN</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <svg className="fill-[#FFE500]" width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4213)">
                        <circle cx="750" cy="750" r="200"></circle>
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4213" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212"></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default Pricing;