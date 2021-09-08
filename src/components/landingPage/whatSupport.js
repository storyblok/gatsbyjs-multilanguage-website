import * as React from "react";
import img1 from '../../images/support/support1.png'
import img2 from '../../images/support/support2.png'
import img3 from '../../images/support/support3.png'
import img4 from '../../images/support/support4.png'
import img5 from '../../images/support/support5.png'
import img6 from '../../images/support/support6.png'
import img7 from '../../images/support/support7.png'
import img8 from '../../images/support/support8.png'

const WhatSupport = ({ blok }) => (
    <section class="py-20">
    <div class="container">
        <div class="w-8/12 mx-auto text-center mb-16">
            <h2 class="text-black font-bold text-3xl leading-none  mb-16 md:mb-24">What we support</h2>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-x-10 gap-y-16 mb-10">
            <div class="text-center">
                <img class="w-24 mx-auto mb-4" src= {img1} alt=""/>
                <h3 class="text-xl font-bold">Parental leave</h3>
            </div>
            <div class="text-center">
                <img class="w-24 mx-auto mb-4" src= {img2} alt=""/>
                <h3 class="text-xl font-bold">Hire to retire</h3>
            </div>
            <div class="text-center">
                <img class="w-24 mx-auto mb-4" src= {img3} alt=""/>
                <h3 class="text-xl font-bold">Wellbeing</h3>
            </div>
            <div class="text-center">
                <img class="w-24 mx-auto mb-4" src= {img4} alt=""/>
                <h3 class="text-xl font-bold">Mental health</h3>
            </div>
            <div class="text-center">
                <img class="w-24 mx-auto mb-4" src= {img5} alt=""/>
                <h3 class="text-xl font-bold">fly-in fly-out</h3>
            </div>
            <div class="text-center">
                <img class="w-24 mx-auto mb-4" src= {img6} alt=""/>
                <h3 class="text-xl font-bold">remote working</h3>
            </div>
            <div class="text-center">
                <img class="w-24 mx-auto mb-4" src= {img7} alt=""/>
                <h3 class="text-xl font-bold">Workers compensation</h3>
            </div>
            <div class="text-center">
                <img class="w-24 mx-auto mb-4" src= {img8} alt=""/>
                <h3 class="text-xl font-bold">Illnesses</h3>
            </div>
        </div>
    </div>
</section>
    )

export default WhatSupport 