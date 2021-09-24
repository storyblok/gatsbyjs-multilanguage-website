import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials2.css";
import { Avatar } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import testimonial from "../../images/testimonial1.png";
import quotation from "../../images/quotation.png";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "white", fontSize: "45px" }} className="bg-gold_300 rounded-full py-2 px-2" viewBox="0 0 14 24" />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white", fontSize: "45px" }} className="bg-gold_300 rounded-full py-2 px-2" />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial bg-navy_300 pb-20"
      style={{ display: "flex", justifyContent: "center"}}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h2 style={{ marginBottom: 20 }} className="mt-20 pb-4 font-karla text-white">What people are saying about us</h2>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
          <Card img= {testimonial} text= {text1} name={name1} desc={desc1} />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" text= {text2} name={name2} desc={desc2} />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" text= {text3} name={name3} desc={desc3} />
        </Slider>
      </div>
    </div>
  );
};

// Testimonial 1
const text1 = "We searched for 7 years to find a way of staying in touch with our people on leave, and then we found triiyo.";
const name1 = "Grant Thelning"
const desc1 = "Head of Talent, CitiBank"
// Testimonial 2
const text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const name2 = "Rob Waters"
const desc2 = "Recluter, Google"
// Testimonial 3
const text3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const name3 = "Jessica Black"
const desc3 = "Customer Service, Amazon"

const Card = ({ img, text, name, desc }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
        backgroundColor: "white",
      }} 
      className="rounded-3 pb-2"
    >
      <img class="pt-10 pb-2 w-auto mx-auto " src= {quotation} alt=""/>
      <p className="mt-2 mx-10">
        {text}
      </p>
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 10,
          marginTop: 20,
        }}
      />
      <p style={{ fontStyle: "italic", marginTop: 10 }}>
        <span style={{ fontWeight: 500, color: "black" }} className="font-karla font-bold text-3x1">{name}</span> <br></br> {desc}
      </p>
    </div>
  );
};

export default Testimonial;