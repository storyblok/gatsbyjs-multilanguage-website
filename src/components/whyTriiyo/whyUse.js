import * as React from "react";
import img1 from '../../images/whyTriiyo/why1.svg'
import img2 from '../../images/whyTriiyo/why2.svg'
import img3 from '../../images/whyTriiyo/why3.svg'

const WhyUse = ({ blok }) => (
    <section class="font-karla py-20 bg-white_100">
		<div class="container">
			<div class="sm:w-8/12 mx-auto text-center mb-16 py-5">
				<h2 class="text-black font-bold text-3xl leading-none mb-8">Why use triiyo</h2>
			</div>
			<div class="sm:grid grid-cols-3 sm:gap-4  md:gap-10 mb-10">
				<div class="text-center mb-10 sm:mb-0">
					<img class="mx-auto w-20 mb-4" src= {img1} alt=""/>
					<h3 class="text-2xl	text-black font-normal mb-4">
						Future proof your workforce
					</h3>
					<p class="text-black font-normal text-base leading-snug px-10">
						We exist to increase retention, promote inclusivity and support you to be a forward thinking
						workplace.
					</p>
				</div>
				<div class="text-center mb-10 sm:mb-0">
					<img class="mx-auto w-20 mb-4" src= {img2} alt=""/>
					<h3 class="text-2xl	text-black font-normal mb-4">
						Grow your business
					</h3>
					<p class="text-black font-normal text-base leading-snug px-10">
						As teams grow it becomes harder to support employee transitions, maintain engagement and
						connection.
					</p>
				</div>
				<div class="text-center mb-10 sm:mb-0">
					<img class="mx-auto w-20 mb-4" src= {img3} alt=""/>
					<h3 class="text-2xl	text-black font-normal mb-4">
						All with a human touchy
					</h3>
					<p class="text-black font-normal text-base leading-snug px-10">
						By using communication flows we coach managers and create highly engaging employee experiences.
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