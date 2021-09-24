import * as React from "react";
import img1 from "../../images/whyTriiyo/img1.svg"
import img2 from "../../images/whyTriiyo/img2.svg"
import img3 from "../../images/whyTriiyo/img3.svg"
import img4 from "../../images/whyTriiyo/img4.svg"

const BenefitsWhy = ({ blok }) => (
    <div bg-gold py-6>
        <section className="font-karla bg-white_100 py-10 md:py-24">
            <div className="container">
                <div className="sm:w-8/12 mx-auto text-center">
                    <h2 className="text-black font-bold text-3xl leading-none mb-8"> How triiyo works</h2>
                </div>

                <div className="sm:flex items-center pt-6 sm:pt-10 pb-14">                    
                    <div className="sm:w-5/12">
                        <div className="pl-8">
                            <h3 className="font-bold text-black font-normal text-3xl leading-none mb-8">
                            Personalised rules based engine
                            </h3>
                            <p className="font-normal textr-lg leading-snug text-black">
                            Just in time information, bite size training and actionable reminders make managers look like superstars, whilst employees are guided through unknown territory, empowered with tailored information and tools to have honest conversations about the moments that matter. 
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
                            Customisable community channels and work buddy groups provide opportunities for like-minded colleagues and teams to build social capital, connection and a sense of belonging, even amongst distributed workforces or during leave.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sm:flex items-center sm:pt-10 sm:pb-14">
                    <div className="sm:w-5/12 mb-8 sm:mb-8">
                        <div className="sm:pl-8">
                            <h3 className="font-bold text-black font-normal text-3xl leading-none mb-8">
                            Educate and employer your people
                            </h3>
                            <p className="font-normal textr-lg leading-snug text-black">
                            In our central Resource Hub we’ve partnered with experts so every employee has access to professional advice and company resources, whether they’re starting a family or planning their retirement, and at every stage in between.
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
                            Simplify and streamline processes
                            </h3>
                            <p className="font-normal textr-lg leading-snug text-black">
                            Set rules to automate outreach, deliver milestone reminders and use automation to turn manual tasks and regulatory admin into a seamless process aligned to an employees timeline and underpinned by company policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
	    </section>
    </div>
)

export default BenefitsWhy 