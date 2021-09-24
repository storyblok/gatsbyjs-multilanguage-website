import * as React from "react";
import img1 from '../../images/landing/parental.svg'
import img2 from '../../images/landing/retirement.svg'
import img3 from '../../images/landing/return.svg'
import img4 from '../../images/landing/secondment.svg'
import img5 from '../../images/landing/remote.svg'
import img6 from '../../images/landing/wellbeing.svg'

const WhatSupport = ({ blok }) => (
    <section className="font-karla bg-white_100 py-20">
    <div className="container">
        <div className="w-8/12 mx-auto text-center mb-16">
            <h2 className="text-black font-bold text-3xl leading-none  mb-16 md:mb-24">Support at every stage</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16 mb-10">
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img1} alt=""/>
                <h3 className="text-xl font-bold">Parental leave</h3>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img2} alt=""/>
                <h3 className="text-xl font-bold">Retirement Planning</h3>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img3} alt=""/>
                <h3 className="text-xl font-bold">Return to work</h3>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img4} alt=""/>
                <h3 className="text-xl font-bold">Secondment</h3>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img5} alt=""/>
                <h3 className="text-xl font-bold">Remote working</h3>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img6} alt=""/>
                <h3 className="text-xl font-bold">Wellbeing</h3>
            </div>
        </div>
    </div>
</section>
    )

export default WhatSupport 