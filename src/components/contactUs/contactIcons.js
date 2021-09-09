import * as React from "react";
import img1 from '../../images/contact/phone.png'
import img2 from '../../images/contact/location.png'
import img3 from '../../images/contact/message.png'


const ContactIcons = ({ blok }) => (
    <section class="font-karla py-20 bg-cream_100">
		<div class="container">
			<div class="sm:grid grid-cols-3 sm:gap-4  md:gap-10 mb-10">
				<div class="text-center mb-10 sm:mb-0">
					<img class="mx-auto w-20 mb-4" src= {img1} alt=""/>
					<p class="text-norml text-black font-bold mb-4">
                        (02) 9746 1345
					</p>
				</div>
				<div class="text-center mb-10 sm:mb-0">
					<img class="mx-auto w-20 mb-4" src= {img2} alt=""/>
					<p class="text-normal	text-black font-bold mb-4">
                        174 Kent St, Sydney NSW 2000
					</p>
				</div>
				<div class="text-center mb-10 sm:mb-0">
					<img class="mx-auto w-20 mb-4" src= {img3} alt=""/>
					<p class="text-normal text-black font-bold mb-4">
                        enquiries@triiyo.com.au
					</p>
				</div>
			</div>
		</div>
	</section>
    )

export default ContactIcons 