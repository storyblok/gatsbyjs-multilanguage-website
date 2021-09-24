
import React, { version } from "react"
import { render } from "storyblok-rich-text-react-renderer"
// import ResponsivePlayer from "./whyTriiyo/responsiveVideo";
import ReactPlayer from 'react-player'
import "./whyTriiyo/responsiveVideo.css"

const VideoBlogNew = ({ blok }) => (
    <section class="font-karla bg-white w-full">
        <div className="max-w-5xl mx-10 lg:mx-auto pt-20 flex flex-col items-start">
            <h1 className="text-5xl font-bold font-karla text-black tracking-wide pb-3">
                {blok.Title}
            </h1>
            <p className="text-black text-lg">{blok.Intro}</p>
            <div>
                <h3 className="font-bold text-xl my-2 text-gold_300"> </h3>
            </div>
            <div class="mx-auto w-full">
                <div class="pt-2 md:pt-5 rounded-3">
                    {/* <ResponsivePlayer className="px-10 pt-5"/> */}
                    <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url= {blok.video}
                        width='100%'
                        height='100%'
                        controls={true}
                    />
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-5xl mx-10 lg:mx-auto pt-5 md:pt-10 flex flex-col items-start">
            <div className="col-span-2"></div>
            <div className="col-span-8 leading-relaxed text-xl text-left text-gray-800 drop-cap pb-10">
                {render(blok.long_text)}
            </div>
            <div className="col-span-2"></div>
        </div>
  </section>
)

  export default VideoBlogNew