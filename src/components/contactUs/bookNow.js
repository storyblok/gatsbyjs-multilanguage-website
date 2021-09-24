import * as React from "react";
import img1 from '../../images/contact/img1.svg'


const BookNow = ({ blok }) => (
    <section className="font-karla py-20 bg-charcoal_300">
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
                <div className="w-full pl-8 px-4">
                    <h2 className="text-white font-bold text-3xl leading-none pb-2">
                        Book a demo today
                    </h2> 
                    <p className="font-normal textr-lg leading-snug text-white sm:w-10/12 sm:pr-10 pb-10">
                        Interested in seeing triiyo in action? Book a demo to for your business.
                    </p>
                    <div class="items-start">
                        <a href="/book-demo"
                            class="inline-block bg-gold_300 py-3 px-6 text-base font-bold leading-none text-white rounded no-underline">
                            Book a demo
                        </a>
                    </div>
                </div>
                <div className="mb-6 sm:mb-0">
                    <img className="w-full" src= {img1} alt=""></img>
                </div>
            </div>
    </section>
)

export default BookNow 