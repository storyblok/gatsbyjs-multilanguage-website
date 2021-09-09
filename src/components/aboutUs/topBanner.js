import * as React from "react";

import Banner from '../../images/about/bannerTop.svg'

const AboutBannerTop = ({ blok }) => (
    <div id="bannerTop" className="font-karla w-full">
        <section>
            <div className="items-center">
                <div className="w-full h-full">
                    <img className="w-full" src= {Banner} alt="">
                    </img>
                </div>
            </div>
	    </section>
    </div>
)

export default AboutBannerTop