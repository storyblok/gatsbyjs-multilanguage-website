import * as React from "react";

import Banner from '../../images/career/bannerTop.svg'

const BannerCareerTop = ({ blok }) => (
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

export default BannerCareerTop