import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from "react-bootstrap"
import img1 from "../../images/carousel/hero1.svg"
import img2 from "../../images/carousel/hero2.svg"
import img3 from "../../images/carousel/hero3.svg"
import img4 from "../../images/carousel/hero4.svg"
import "@fontsource/karla"


const HeroCarousel = ({ blok }) => (
    <div className="font-karla">
        <Carousel id="carouselHeight">
            <Carousel.Item className="slideHeight">
              <div className="bg-gold py-10">
                  <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
                    <div className="w-full pl-10 px-4">
                        <h1 className="text-black font-normal text-5xl leading-none mb-0">
                        Workplaces powered by human connection. 
                        </h1> {/*  { blok.title} */}
                        {/* <h1 className="text-black font-normal text-5xl leading-none mb-8">
                        human connection. 
                        </h1> */}
                        <p className="font-normal textr-base leading-snug mb-10 text-black">
                        The human-centred connectivity tool that increases employee engagement and retention during workplace transitions.
                        </p>
                        <div class="items-start">
                            <a href="/book-demo"
                                class="inline-block bg-gold_300 py-4 px-6 text-base font-bold leading-none text-white rounded no-underline">
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="mb-6 sm:mb-0 slideHeight">
                        <img className="w-full" src= { img1} alt=""></img>
                    </div>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="slideHeight">
              <div className="bg-navy_300 py-10">
                  <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
                    <div className="w-full pl-10 px-4">
                        <h1 className="text-white font-normal text-5xl leading-none mb-8">
                        Stay connected and informed during leave
                        </h1>
                        <p className="font-normal text-base leading-snug mb-10 text-white">
                        The employee-centric solution ensures people feel connected and valued, even when on leave. Manager reminders and team prompts makes staying connected easy,.
                        </p>
                        <div class="items-start">
                            <a href="/book-demo"
                                class="inline-block bg-gold_300 py-4 px-6 text-base font-bold leading-none text-white rounded no-underline">
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="mb-6 sm:mb-0 slideHeight">
                        <img className="w-full" src= { img2} alt=""></img>
                    </div>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="slideHeight">
              <div className="bg-sky_500 py-10">
                  <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
                    <div className="w-full pl-10 px-4">
                        <h1 className="text-white font-normal text-5xl leading-none mb-8">
                        Look after employee wellbeing
                        </h1>
                        <p className="font-normal text-base leading-snug mb-10 text-white">
                        triiyo has a library of resources, curated by experts, accessible by all at any time. Our external platform provides a safe, proactive space for people to seek advice and support, confidentially, anywhere.
                        </p>
                        <div className="items-start">
                            <a href="/book-demo"
                                class="inline-block bg-gold_300 py-4 px-6 text-base font-bold leading-none text-white rounded no-underline">
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="mb-6 sm:mb-0 slideHeight">
                        <img className="w-full" src= { img3} alt=""></img>
                    </div>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="slideHeight">
              <div className="bg-sky_200 py-10">
                  <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
                    <div className="w-full pl-10 px-4">
                        <h1 className="text-black font-normal text-5xl leading-none mb-8">
                        Managers look like superstars                        
                        </h1>
                        <p className="font-normal text-base leading-snug mb-10 text-black">
                        Our simple, automated tool guides managers every step of the way through complex workplace transitions. We take away the guess work, ensuring each employee has a consistently positive experience.
                        </p>
                        <div class="items-start">
                            <a href="/book-demo"
                                class="inline-block bg-gold_300 py-4 px-6 text-base font-bold leading-none text-white rounded no-underline">
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="mb-6 sm:mb-0 slideHeight">
                        <img className="w-full" src= { img4} alt=""></img>
                    </div>
                </div>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
)

export default HeroCarousel 