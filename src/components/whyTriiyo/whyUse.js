import * as React from "react";
import img1 from '../../images/whyTriiyo/why1.svg'
import img2 from '../../images/whyTriiyo/why2.svg'
import img3 from '../../images/whyTriiyo/why3.svg'

const WhyUse = ({ blok }) => (
    <section class="font-karla py-20 bg-white_100">
		<div class="container">
			<div class="sm:w-8/12 mx-auto text-center mb-16 py-5">
				<h2 class="text-black font-bold text-3xl leading-none mb-8">Why triiyo</h2>
			</div>
			<div class="sm:grid grid-cols-3 sm:gap-4  md:gap-10 mb-10">
				<div class="text-center mb-10 sm:mb-0">
					<img class="mx-auto w-20 mb-4" src= {img1} alt=""/>
					<h3 class="text-2xl	text-black font-normal mb-4">
						Future proof your workforce
					</h3>
					<p class="text-black font-normal text-base leading-snug px-10">
					Increase retention, promote inclusivity and improve gender-balance as a forward-thinking, people-focused workplace. 
					</p>
				</div>
				<div class="text-center mb-10 sm:mb-0">
					<img class="mx-auto w-20 mb-4" src= {img2} alt=""/>
					<h3 class="text-2xl	text-black font-normal mb-4">
					Nurture your people					
					</h3>
					<p class="text-black font-normal text-base leading-snug px-10">
					By partnering with triiyo you’re instantly demonstrating that you care and delivers immediate benefits to your people.
					</p>
				</div>
				<div class="text-center mb-10 sm:mb-0">
					<img class="mx-auto w-20 mb-4" src= {img3} alt=""/>
					<h3 class="text-2xl	text-black font-normal mb-4">
						All with a human touch
					</h3>
					<p class="text-black font-normal text-base leading-snug px-10">
					Enhance company culture by taking a humanistic approach to people management through times of change and transition.	
					</p>
				</div>
			</div>
			<div class="text-center pt-10">
				<a href="/"
					class="inline-block bg-gold_300 py-4 px-6 textr-base font-bold leading-none text-white rounded no-underline">
					Book a demo
				</a>
			</div>
		</div>
	</section>
    )

export default WhyUse 