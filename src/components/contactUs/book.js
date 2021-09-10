import * as React from "react";

import img1 from '../../images/contact/noimage.svg'

const ContactBook = ({ blok }) => (
    <div className="font-karla bg-navy_400 py-10">
        <section>
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
                <div className="w-full pl-10 px-4">
                    <h2 className="text-white font-normal text-3xl leading-none mb-8">
                    Book a demo today
                    </h2>
                    <p className="font-normal  textr-lg leading-snug text-white sm:w-10/12 sm:pr-10">
                    Interested in seeing triiyo in action? Then book a demo now! Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy.
                    </p>
                    <div class="items-start pt-4">
                        <a href="/book-demo"
                            class="inline-block bg-gold_300 py-4 px-6 text-base font-bold leading-none text-white rounded no-underline">
                            Learn more
                        </a>
                     </div>
                </div>
                <div className="mb-6 sm:mb-0">
                    <img className="w-full" src= {img1} alt=""></img>
                </div>
            </div>
	    </section>
    </div>
)

export default ContactBook 