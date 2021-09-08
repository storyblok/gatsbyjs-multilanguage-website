import * as React from 'react'

import img1 from '../../images/partners/brand-11.png'
import img2 from '../../images/partners/brand-22.png'
import img3 from '../../images/partners/brand-33.png'
import img4 from '../../images/partners/brand-44.png'
import img5 from '../../images/partners/brand-55.png'
import img6 from '../../images/partners/brand-66.png'


const Partners = ({ blok }) => (
    <section class="bg-white_200 py-16 lg:py-20">
        <div class="container">
            <div class="w-full lg:w-8/12 mx-auto text-center mb-16">
                <h2 class="text-black font-bold text-3xl leading-none mb-20">Our partnerts, making a difference</h2>
                <div class="sm:grid grid-cols-3 sm:gap-10 ">
                    <div class="text-center mb-6 sm:mb-0">
                        <img class="w-28 mx-auto" src= {img1} alt=""/>
                    </div>
                    <div class="text-center mb-6 sm:mb-0">
                        <img class="w-28 mx-auto" src= {img2} alt=""/>
                    </div>
                    <div class="text-cente mb-6 sm:mb-0">
                        <img class="w-28 mx-auto" src= {img3} alt=""/>
                    </div>
                    <div class="text-center mb-6 sm:mb-0">
                        <img class="w-28 mx-auto" src= {img4} alt=""/>
                    </div>
                    <div class="text-center mb-6 sm:mb-0">
                        <img class="w-28 mx-auto" src= {img5} alt=""/>
                    </div>
                    <div class="text-center">
                        <img class="w-32 sm:w-auto mx-auto" src= {img6} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )

export default Partners 