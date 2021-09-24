import * as React from "react";

const TextImageRight = ({ blok }) => (
    <div className="font-karla bg-navy_400 py-10">
        <section>
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
                <div className="mb-6 sm:mb-0">
                    <img className="w-full" src= {blok.picture.filename} alt=""></img>
                </div>
                <div className="w-full pl-10 px-4">
                    <h2 className="text-white font-normal text-3xl leading-none mb-8">
                        { blok.title}
                    </h2>
                    <p className="font-normal  textr-lg leading-snug text-white sm:w-10/12 sm:pr-10">
                        { blok.paragraph}
                    </p>
                    <p className="font-normal  textr-lg leading-snug text-white sm:w-10/12 sm:pr-10">
                        { blok.paragraph2}
                    </p>
                    <p className="font-normal  textr-lg leading-snug text-white sm:w-10/12 sm:pr-10">
                        { blok.paragraph3}
                    </p>
                </div>
            </div>
	    </section>
    </div>
)

export default TextImageRight 