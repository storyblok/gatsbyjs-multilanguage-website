import * as React from "react";

// import Banner from '../../images/whyTriiyo/banner.png'

const IntroWhy = ({ blok }) => (
    <div className="font-karla py-20 bg-cream/100 w-full h-390px">
        <section>
            <div className="container">
                <div class="sm:w-10/12 mx-auto text-center mb-16">
                    <h2 class="text-black font-bold text-3xl leading-none mb-8"> { blok.title} </h2>
                    <p class="font-normal textr-lg leading-snug text-black pt-4"> { blok.paragraph} </p>
                </div>
            </div>
	    </section>
    </div>
)

export default IntroWhy