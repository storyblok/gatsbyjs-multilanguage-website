import * as React from "react";

import Banner from '../../images/resourcesImg/bannerTop.svg'

const BannerTop = ({ blok }) => (
    <div className="font-karla bg-navy_400 w-full">
        <section>
            <div className="items-center">
                <div className="">
                    <img className="w-full" src= {Banner} alt=""></img>
                </div>
            </div>
	    </section>
    </div>
)

export default BannerTop 