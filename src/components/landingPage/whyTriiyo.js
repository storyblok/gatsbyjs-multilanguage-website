import * as React from "react";
import img1 from '../../images/landing/why2.svg'
import img2 from '../../images/landing/why1.svg'
import img3 from '../../images/landing/why3.svg'


const WhyTriiyo = ({ blok }) => (
    <section class="font-karla py-20 bg-white">
		<div class="container">
			<div class="sm:w-8/12 mx-auto text-center mb-16">
				<h2 class="text-black font-bold text-3xl leading-none mb-8">Our solution</h2>
			</div>
			<div class="sm:grid grid-cols-3 sm:gap-4  md:gap-10 mb-10">
				<div class="text-center mb-10 sm:mb-0">
					<img class="mx-auto w-20 mb-4" src= {img1} alt=""/>
					<h3 class="text-2xl	text-black font-normal mb-4">
						Dynamic employee-centric journeys
					</h3>
					<p class="text-black font-normal text-base leading-snug px-10">
						Intuitive and user friendly, our custom communication flows makes complex transitions simple and easy to navigate.				
					</p>
				</div>
				<div class="text-center mb-10 sm:mb-0">
					<img class="mx-auto w-20 mb-4" src= {img2} alt=""/>
					<h3 class="text-2xl	text-black font-normal mb-4">
						Standalone platform for speed and ease
					</h3>
					<p class="text-black font-normal text-base leading-snug px-10">
						With zero dependancy on IT our no code solution is quick and easy to deploy. Integration with existing systems is optional.
					</p>
				</div>
				<div class="text-center mb-10 sm:mb-0">
					<img class="mx-auto w-20 mb-4" src= {img3} alt=""/>
					<h3 class="text-2xl	text-black font-normal mb-4">
						Modularised for flexibility
					</h3>
					<p class="text-black font-normal text-base leading-snug px-10">
						Aligh your branded platform to your people strategy creating a safe proactive space to support your chosen transitions.
					</p>
				</div>
			</div>
			<div class="text-center mt-10">
				<a href="/book-demo"
					class="inline-block bg-gold_300 py-4 px-6 textr-base font-bold leading-none text-white rounded no-underline">
					Book a demo
				</a>
			</div>
		</div>
	</section>
    )

export default WhyTriiyo 