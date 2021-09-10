import * as React from "react";
import img1 from '../../images/career/img1.svg'
import img2 from '../../images/career/img2.svg'
import img3 from '../../images/career/img3.svg'
import img4 from '../../images/career/img4.svg'
import img5 from '../../images/career/img5.svg'
import img6 from '../../images/career/img6.svg'

const Perks = ({ blok }) => (
    <section className="font-karla py-20">
    <div className="container">
        <div className="w-10/12 mx-auto text-center mb-16">
            <h2 className="text-black font-bold text-3xl leading-none mb-8 md:mb-10">Our perks</h2>
            <p className="font-normal textr-lg leading-snug text-black pt-2">Central to our culture is caring for our people, which means aside from a competitive salary and equity options, we have a range of perks to help bridge the gap between work and life to make it ‘fit’ for you. Whether your focus is on continuous learning, professional development or simply finding an environment that enables you to thrive whilst balancing family or personal life commitments, we have programs in place to support you.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16 mb-10">
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img1} alt=""/>
                <h3 className="text-xl font-bold">Equal Paid Parental Leave</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                Every parent at triiyo gets 4 weeks Paid Parental Leave in the first 12 months of your child's life - with NO qualifying period.
                </p>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img2} alt=""/>
                <h3 className="text-xl font-bold">Wellness</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                We believe that your holistic wellbeing is important, so you get a $300 a year wellness voucher to spend on you.
                </p>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img3} alt=""/>
                <h3 className="text-xl font-bold">Birthday Off</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                On your birthday instead of coming to work, you get the day off to do something fun with the other people in your life.
                </p>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img4} alt=""/>
                <h3 className="text-xl font-bold">Discounts</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                Enjoy a range of discounts from our expert partners, including support for starting a family, financial help or wellbeing.
                </p>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img5} alt=""/>
                <h3 className="text-xl font-bold">Flexible Work</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                You don’t need to be in an office or at a desk to have an impact at triiyo. Our employees select where and how they work best.
                </p>
            </div>
            <div className="text-center">
                <img className="w-24 mx-auto mb-4" src= {img6} alt=""/>
                <h3 className="text-xl font-bold">Personal Growth</h3>
                <p class="text-black font-normal text-base leading-snug px-10">
                We have a range of training, courses and access to coaching and mentoring programs to keep progressing through your career.
                </p>
            </div>
        </div>
    </div>
</section>
    )

export default Perks 