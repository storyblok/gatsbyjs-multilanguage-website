import * as React from "react";
import img1 from "../../images/communities.png"
import img2 from "../../images/empower.png"
import img3 from "../../images/journey.png"

const About = ({ blok }) => (
    <div bg-gold py-6>
        <section className="bg-white_100 py-10 md:py-24">
		<div className="container">
			<div className="sm:w-8/12 mx-auto text-center">
				<h2 className="text-black font-bold text-3xl leading-none mb-8"> {blok.title} </h2>
				<p className="font-normal textr-lg leading-snug text-black">
					Positive, inclusive and engaging workplaces that care for employees during the moments that
					matter,
					are great places to work. But staying connected and creating positive employee experiences
					during
					life events is challenging.
				</p>
			</div>
			<div className="sm:flex items-center pt-6 sm:pt-10 pb-14">
				<div className="sm:w-7/12">
					<img className="w-full sm:pr-8" src= { img3 } alt=""/>
				</div>
				<div className="sm:w-5/12">
					<div className="pl-8">
						<span className="block uppercase text-neutral_400 font-bold text-xs	mb-4">Features</span>
						<h3 className="font-bold text-black font-normal text-3xl leading-none mb-8">
							Guided journeys
						</h3>
						<p className="font-normal textr-lg leading-snug text-black">
							Ready-made, automated and tailored communication flows guide managers and employees on
							personalised journeys.
						</p>
					</div>
				</div>
			</div>

			<div className="sm:flex items-center py-14">
				<div className="sm:w-5/12">
					<div className="sm:pr-16 sm:pl-10 sm:mb-0 mb-10">
						<span className="block uppercase text-neutral_400 font-bold text-xs	mb-4">Features</span>
						<h3 className="font-bold text-black font-normal text-3xl leading-none mb-8">
							Educate and empower
						</h3>
						<p className="font-normal textr-lg leading-snug text-black">
							Expertly curated content educates and empowers at every stage of work-life transitions
						</p>
					</div>
				</div>
				<div className="sm:w-7/12">
					<img className="w-full sm:pl-20" src= { img1 } alt=""/>
				</div>
			</div>

			<div className="sm:flex items-center sm:pt-10 sm:pb-14">
				<div className="sm:w-7/12 hidden sm:block">
					<img className="w-full sm:pr-8 mb-10 sm:mb-0" src= { img2 } alt=""/>
				</div>
				<div className="sm:w-5/12 mb-8 sm:mb-8">
					<div className="sm:pl-8">
						<span className="block uppercase text-neutral_400 font-bold text-xs	mb-4">Features</span>
						<h3 className="font-bold text-black font-normal text-3xl leading-none mb-8">
							Communities and buddies
						</h3>
						<p className="font-normal textr-lg leading-snug text-black">
							Communities and work buddy groups create safe spaces for people to connect and drive social
							capital
						</p>
					</div>
				</div>
				<div className="sm:w-7/12 sm:hidden">
					<img className="w-full sm:pr-8 mb-10 sm:mb-0" src="images/communities.png" alt=""/>
				</div>
			</div>

		</div>
	    </section>
    </div>
)

export default About 