import React from "react"
import "./testimonials.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../../images/astronaut.png";
import celebrating from "../../images/celebrating.png";
import education from "../../images/education.png";
import taken from "../../images/taken.png";
import testimonial from "../../images/testimonial1.png";
import quotation from "../../images/quotation.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken];

function Testimonials() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App bg-navy_300">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
      {/* <Slider {...settings}>
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <div class="text-center transform silde-item bg-white rounded-md py-10 px-8 "
                        style={{boxShadow: "0px 10px 32px -8px rgba(15, 33, 41, 0.17);"}}>
                        <img class="mb-4 w-auto mx-auto " src= {quotation} alt=""/>
                        <p class="text-navy_100 text-base font-normal mb-8 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <img class="test-img w-16 mx-auto mb-2 " src= {testimonial} alt=""/>
                        <h3 class="text-neutral_500 font-bold text-md mb-2 ">
                            Jane Cooper
                        </h3>
                        <p class="text-neutral_500 font-normal text-md ">Research Admin, Westpac</p>
                    </div>
                </div>
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <div class="text-center transform silde-item bg-white rounded-md py-10 px-8"
                        style={{boxShadow: "0px 10px 32px -8px rgba(15, 33, 41, 0.17);"}}>
                        <img class="mb-4 w-auto mx-auto " src= {quotation} alt=""/>
                        <p class="text-navy_100 text-base font-normal mb-8 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <img class="test-img w-16 mx-auto mb-2 " src= {testimonial} alt=""/>
                        <h3 class="text-neutral_500 font-bold text-md mb-2 ">
                            Jane Cooper
                        </h3>
                        <p class="text-neutral_500 font-normal text-md ">Research Admin, Westpac</p>
                    </div>
				</div>
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <div class="text-center transform silde-item bg-white rounded-md py-10 px-8"
                        style={{boxShadow: "0px 10px 32px -8px rgba(15, 33, 41, 0.17);"}}>
                        <img class="mb-4 w-auto mx-auto " src= {quotation} alt=""/>
                        <p class="text-navy_100 text-base font-normal mb-8 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <img class="test-img w-16 mx-auto mb-2 " src= {testimonial} alt=""/>
                        <h3 class="text-neutral_500 font-bold text-md mb-2 ">
                            Jane Cooper
                        </h3>
                        <p class="text-neutral_500 font-normal text-md ">Research Admin, Westpac</p>
                    </div>
				</div>
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <div class="text-center transform silde-item bg-white rounded-md py-10 px-8"
                        style={{boxShadow: "0px 10px 32px -8px rgba(15, 33, 41, 0.17);"}}>
                        <img class="mb-4 w-auto mx-auto " src= {quotation} alt=""/>
                        <p class="text-navy_100 text-base font-normal mb-8 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <img class="test-img w-16 mx-auto mb-2 " src= {testimonial} alt=""/>
                        <h3 class="text-neutral_500 font-bold text-md mb-2 ">
                            Jane Cooper
                        </h3>
                        <p class="text-neutral_500 font-normal text-md ">Research Admin, Westpac</p>
                    </div>
				</div>
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <div class="text-center transform silde-item bg-white rounded-md py-10 px-8"
                        style={{boxShadow: "0px 10px 32px -8px rgba(15, 33, 41, 0.17);"}}>
                        <img class="mb-4 w-auto mx-auto " src= {quotation} alt=""/>
                        <p class="text-navy_100 text-base font-normal mb-8 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <img class="test-img w-16 mx-auto mb-2 " src= {testimonial} alt=""/>
                        <h3 class="text-neutral_500 font-bold text-md mb-2 ">
                            Jane Cooper
                        </h3>
                        <p class="text-neutral_500 font-normal text-md ">Research Admin, Westpac</p>
                    </div>
				</div>
        </Slider> */}
    </div>
  );
}

export default Testimonials;