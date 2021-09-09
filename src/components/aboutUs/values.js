import * as React from "react";
import img1 from '../../images/about/no-image.svg'
import img2 from '../../images/about/no-image.svg'
import img3 from '../../images/about/no-image.svg'
import img4 from '../../images/about/no-image.svg'


const Values = ({ blok }) => (
    <section className="font-karla py-20">
    <div className="container">
        <div className="w-10/12 mx-auto text-center mb-16">
            <h2 className="text-black font-bold text-3xl leading-none mb-8 md:mb-10">Our values</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 mb-10">
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img1} alt=""/>
                <h3 className="text-xl font-bold">Value 1</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                </p>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img2} alt=""/>
                <h3 className="text-xl font-bold">Value 1</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                </p>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img3} alt=""/>
                <h3 className="text-xl font-bold">Value 1</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                </p>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img4} alt=""/>
                <h3 className="text-xl font-bold">Value 1</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                </p>
            </div>
        </div>
    </div>
</section>
    )

export default Values 