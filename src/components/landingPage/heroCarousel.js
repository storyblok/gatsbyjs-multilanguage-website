import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from "react-bootstrap"
import img1 from "../../images/carousel/hero1.svg"
import img2 from "../../images/carousel/hero2.svg"
import img3 from "../../images/carousel/hero3.svg"
import img4 from "../../images/carousel/hero4.svg"


const HeroCarousel = ({ blok }) => (
    <div>
        <Carousel id="carouselHeight">
            <Carousel.Item className="slideHeight">
              <div className="bg-gold py-10">
                  <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
                    <div className="w-full pl-10 px-4">
                        <h1 className="text-black font-normal text-5xl leading-none mb-0">
                        Workforce connectivity</h1>
                        <h1 className="text-black font-normal text-5xl leading-none mb-8">
                        made easy. {/*  { blok.title} */}
                        </h1>
                        <p className="font-normal textr-base leading-snug mb-10 text-black">
                        The HR automation tool to increase engagement and retention during workplace transitions.</p>
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
                        Don’t stress while you’re on leave
                        </h1>
                        <p className="font-normal textr-base leading-snug mb-10 text-white">
                        Being away from work for long periods can make you feel disengaged from your workplace and team. triiyo will ensure you feel connected and valued, even when you’re on leave.
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
                        <h1 className="text-black font-normal text-5xl leading-none mb-8">
                        Look after your wellbeing, on us
                        </h1>
                        <p className="font-normal textr-base leading-snug mb-10 text-black">
                        triiyo has a library of resources, curated by experts, for you to access at any time. Whether you want advice on mental illness, financial planning or managing stress, we have you covered. Confidentially.
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
                        Keep in touch for a smooth return to work
                        </h1>
                        <p className="font-normal textr-base leading-snug mb-10 text-black">
                        Returning to work after any period of absense can be stressful. We take the guess work out of what to do and when, guiding you every step of the way until you’re settled back in.
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