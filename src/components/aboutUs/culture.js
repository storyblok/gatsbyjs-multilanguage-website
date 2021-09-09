import * as React from "react";
import img1 from '../../images/about/culture.svg'


const Culture = ({ blok }) => (
    <div className="font-karla bg-white py-10">
        <section>
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center pt-10 mt-10">
                <div className="w-full pl-10 px-4">
                    <h2 className="text-black font-bold text-3xl leading-none mb-8">
                    Our culture
                    </h2>
                    <p className="font-normal textr-lg leading-snug text-black sm:w-10/12 sm:pr-10">
                    Our culture values people who operate with courage and integrity to instill an environment that is transparent, honest, and compassionate. Human connection is core to our product, and it is to our culture. We seek people who operate with respect and empathy, who communicate with a willingness to challenge and be challenged so that we all grow, as individuals, our product, and as a company.
                    </p>
                    <p className="font-normal textr-lg leading-snug text-black sm:w-10/12 sm:pr-10">
                    There are no glass ceilings or cliffs, and no founder dictators here. We want everyone to love their work, build a product people love, and a company you love to work in. As an early employee, you will help us shape this culture. 
                    </p>
                    <p className="font-normal textr-lg leading-snug text-black sm:w-10/12 sm:pr-10">
                    We are building a culture where people like you can really make an impact, where innovation and excellence are recognised, and where new ideas are encouraged.
                    </p>
                    <p className="font-normal textr-lg leading-snug text-black sm:w-10/12 sm:pr-10">
                    We’re transparent in everything we do and value your input from day one. We do not want our people to blend in, in fact, we want them to stand out.  We recognise that innovative thinking comes from having a diverse workforce, so if you are good at what you do and want to make an impact then come as you are.
                    </p>
                </div>
                <div className="mb-6 sm:mb-0">
                    <img className="w-full" src= {img1} alt=""></img>
                </div>
            </div>
	    </section>
    </div>
)

export default Culture 