import * as React from "react";
import img1 from '../../images/whyTriiyo/step1.svg'
import img2 from '../../images/whyTriiyo/step2.svg'
import img3 from '../../images/whyTriiyo/step3.svg'
import img4 from '../../images/whyTriiyo/step4.svg'


const GetStarted = ({ blok }) => (
    <section className="font-karla py-20">
    <div className="container">
        <div className="w-10/12 mx-auto text-center mb-16">
            <h2 className="text-black font-bold text-3xl leading-none mb-8 md:mb-10">How to get started</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 mb-10">
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img1} alt=""/>
                <h3 className="text-xl font-bold">Step 1</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                Leverage agile frameworks to provide a robust synopsis for high level overviews.
                </p>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img2} alt=""/>
                <h3 className="text-xl font-bold">Step 2</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                Leverage agile frameworks to provide a robust synopsis for high level overviews.
                </p>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img3} alt=""/>
                <h3 className="text-xl font-bold">Step 3</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                Leverage agile frameworks to provide a robust synopsis for high level overviews.
                </p>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img4} alt=""/>
                <h3 className="text-xl font-bold">Step 4</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                Leverage agile frameworks to provide a robust synopsis for high level overviews.
                </p>
            </div>
        </div>
        <div class="text-center">
            <a href="/"
                class="inline-block bg-gold_300 py-4 px-6 textr-base font-bold leading-none text-white rounded no-underline">
                Book a demo now
            </a>
        </div>
    </div>
</section>
    )

export default GetStarted 