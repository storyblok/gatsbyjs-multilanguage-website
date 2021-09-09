import * as React from "react";
import img1 from "../../images/whyTriiyo/img1.png"
import img2 from "../../images/whyTriiyo/img2.png"
import img3 from "../../images/whyTriiyo/img3.png"
import img4 from "../../images/whyTriiyo/img4.png"

const BenefitsWhy = ({ blok }) => (
    <div bg-gold py-6>
        <section className="font-karla bg-white_100 py-10 md:py-24">
            <div className="container">
                <div className="sm:w-8/12 mx-auto text-center">
                    <h2 className="text-black font-bold text-3xl leading-none mb-8"> The benefits of using triiyo </h2>
                </div>

                <div className="sm:flex items-center pt-6 sm:pt-10 pb-14">                    
                    <div className="sm:w-5/12">
                        <div className="pl-8">
                            <h3 className="font-bold text-black font-normal text-3xl leading-none mb-8">
                            Make your managers look like superstars
                            </h3>
                            <p className="font-normal textr-lg leading-snug text-black">
                            Just in time information, bite size training and actionable reminders make managers look like superstars and ensure employees are empowered along their individual journey.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-7/12">
                        <img className="w-full sm:pr-8" src= { img1 } alt=""/>
                    </div>
                </div>

                <div className="sm:flex items-center py-14">
                    <div className="sm:w-7/12">
                        <img className="w-full sm:pl-20" src= { img2 } alt=""/>
                    </div>
                    <div className="sm:w-5/12">
                        <div className="sm:pr-16 sm:pl-10 sm:mb-0 mb-10">
                            <h3 className="font-bold text-black font-normal text-3xl leading-none mb-8">
                            Build communities within your workforce
                            </h3>
                            <p className="font-normal textr-lg leading-snug text-black">
                            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sm:flex items-center sm:pt-10 sm:pb-14">
                    <div className="sm:w-5/12 mb-8 sm:mb-8">
                        <div className="sm:pl-8">
                            <h3 className="font-bold text-black font-normal text-3xl leading-none mb-8">
                            Educate and employer your staff
                            </h3>
                            <p className="font-normal textr-lg leading-snug text-black">
                            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-7/12 hidden sm:block">
                        <img className="w-full sm:pr-8 mb-10 sm:mb-0" src= { img3 } alt=""/>
                    </div>
                </div>

                <div className="sm:flex items-center py-14">
                    <div className="sm:w-7/12">
                        <img className="w-full sm:pl-20" src= { img4 } alt=""/>
                    </div>
                    <div className="sm:w-5/12">
                        <div className="sm:pr-16 sm:pl-10 sm:mb-0 mb-10">
                            <h3 className="font-bold text-black font-normal text-3xl leading-none mb-8">
                            HR automation
                            </h3>
                            <p className="font-normal textr-lg leading-snug text-black">
                            We turn manual tasks and regulatory admin into repeatable workflows that underpin policy with a seamless process aligned to an employees timeline.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
	    </section>
    </div>
)

export default BenefitsWhy 