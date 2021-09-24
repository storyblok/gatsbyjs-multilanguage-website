import * as React from "react";
import img1 from '../../images/career/knowYou.svg'


const KnowYou = ({ blok }) => (
    <div className="font-karla bg-white py-10">
        <section>
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center pt-10 mt-10">
                <div className="w-full pl-10 px-4">
                    <h2 className="text-black font-bold text-3xl leading-none mb-8">
                    We'd love to get to know you
                    </h2>
                    <p className="font-normal textr-lg leading-snug text-black sm:w-10/12 sm:pr-10">
                    Browse our current positions, find your perfect job, and apply by sending your CV and cover note to careers@triiyo.com with the job role in the subject line.
                    </p>
                    <p className="font-normal textr-lg leading-snug text-black sm:w-10/12 sm:pr-10">
                    If the job you’d love isn’t there, please connect with us anyway because you never know what’s coming up. Email careers@triiyo.com with your CV, Linked In profile, online portfolio, or a note telling us about you.
                    </p>
                </div>
                <div className="mb-6 sm:mb-0">
                    <img className="w-full" src= {img1} alt=""></img>
                </div>
            </div>
	    </section>
    </div>
)

export default KnowYou 