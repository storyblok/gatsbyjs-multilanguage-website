import * as React from "react";
import img1 from '../../images/bookDemo/confirmation.svg'


const ContactSuccess = ({ blok }) => (
    <section class="font-karla py-20 bg-white_100">
		<div class="container pt-20 pb-20">
			<div class="sm:w-8/12 mx-auto text-center mt-12 mb-8">
                <img id="successImage" class="mx-auto w-20 mb-4" src= {img1} alt=""/>                
				<h2 class="text-black leading-none mb-4">Enquiry has been received</h2>
				<p class="font-normal textr-lg leading-snug text-black">
                    We will be in touch soon!
				</p>
			</div>
			<div class="text-center pb-20">
                    <a id="no-underline" href="/contact-us"
                        class="text-gold_300 py-0 px-2 font-bold hover:text-navy_300">
                        Back to enquiries
                    </a>
			</div>
		</div>
	</section>
    )

export default ContactSuccess 