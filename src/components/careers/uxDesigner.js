import * as React from "react";
import Card from 'react-bootstrap/Card'
import money from '../../images/career/money.svg'
import location from '../../images/career/location.svg'
import job from '../../images/career/job.svg'


const UxDesigner = ({ blok }) => (
    <div className="font-karla py-20 bg-white w-full h-390px">
        <section>
            <div className="container grid grid-cols-3 gap-4">
                <div className="sm:w-10/12 mx-auto text-left mb-16 col-span-2">
                    <h1 className="text-black font-bold text-4xl leading-none mb-12">UX Designer</h1>
                    <h3 className="text-black font-bold text-2xl leading-none mb-6">About the role</h3>
                    <p className="font-normal textr-lg leading-snug text-black pt-2"> 
                    triiyo is a start-up that is at an exciting part of its growth. To help take our products to the next level, we’re looking for a UX designer to join our team. 
                    </p>
                    <p>
                    As part of a small cross-functional team, you will take the lead on designing and refining product UX on our triiyo platform.
                    </p>
                    <p>
                    To do this well, we’re looking for someone who is able to collaborate and offer informed and practical suggestions and advice to partner with peers and clients alike. 
                    </p>
                    <p>
                    In delivering outcomes, you’re able to work with general, high-level concepts and translate business requirements, technical restrictions and research into sitemaps, user flows, customer journey maps, wireframes, mock-ups and prototypes.
                    </p>
                    <p>
                    Your expertise and input will be respected and you will have the freedom to innovate and transform our users' experience — something you will be able to do with ease thanks to your experience in the handling of interaction design for complex flows. You should be able to balance this innovation with time and budget restrictions. 
                    </p>
                    <br/>
                    <h3 className="text-black font-bold text-2xl leading-none mb-6">In this role, you’ll get to:</h3>
                    <p className="font-normal textr-lg leading-snug text-black pt-2"> </p>
                     <ul>
                        <li>- Progress products by researching, conceptualising, sketching, prototyping and user-testing experiences for triiyo’s products.</li>
                        <li>- Conducting user research to gain feedback on your work</li>
                        <li>- Using data and testing to improve your design and using data as a starting point for scoping new initiatives.</li>
                        <li>- Translating concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences.</li>
                        <li>- Designing and delivering wireframes, user stories, user journeys, and mockups optimized for a wide range of devices and interfaces.</li>
                        <li>- Making strategic design and user-experience decisions related to core and new functions and features.</li>       
                        <li>- Balancing design and innovation with budgets and time restraints.</li>       
                    </ul>
                    <br/>
                    <h3 className="text-black font-bold text-2xl leading-none mb-6"> We are looking for people who:</h3>
                    <ul>
                        <li>- 4+ years of relevant product design experience. However, we welcome applications from people with less than 4 years if you have the skills to be successful.</li>
                        <li>- Ideally, you will have worked on enterprise SaaS, automation or communications/collaboration platforms or other similarly complex experiences.</li>
                        <li>- Experience working with agile product management processes and part of a cross-functional team. </li>
                        <li>- Are top billers in their current role</li>
                        <li>- Excellent interpersonal skills with the ability to gain and synthesise helpful feedback, and facilitate design discussions.</li>
                    </ul>
                    <br/>
                    <h2 className="text-black font-bold text-2xl leading-none mb-6"> Come and Join Our Team</h2>
                    <p className="font-normal textr-lg leading-snug text-black pt-2">If you’re passionate about the tech industry and want your work to be doing something meaningful please get in touch.</p>
                    <br/>
                    <p className="font-normal textr-lg leading-snug text-black pt-2">We believe to achieve a work-life balance you actually have to have balance, so our people work flexibly, when and where it suits them best. We measure success on outcomes and achieving goals.</p>
                    <br/>
                    <p className="font-normal textr-lg leading-snug text-black pt-2">At triiyo, we value diverse perspectives and we are committed to a collaborative, inclusive, creative and respectful environment. We celebrate who you are and recognise and reward achievements.</p>
                    <br/>
                    <p>To apply email us at <span className="text-gold_300 font-bold"> careers@triiyo.com </span> with your CV and a note of why you would like to join us! </p>
                    <br/>
                    <p>Our privacy policy was last updated on 9 August 2021.</p>
                </div>
                <div className="sm:w-10/12 mx-auto text-left mb-16 col-span-1">
                <div className="flex justify-center">
                        <Card className="flex shadow-md py-2 mb-4" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-2">Job details</Card.Title>
                                <Card.Text className="mb-4">
                                    <div className="flex flex-nowrap justify-start">
                                        <img className="w-4 mr-5 flex flex-nowrap justify-start" src= {money} alt=""/> 
                                        <p className="mt-3 flex flex-nowrap content-center"> Salary: <br/> $89,000</p>
                                    </div>
                                    <div className="flex flex-nowrap justify-start">
                                        <img className="w-4 mr-5 flex flex-nowrap justify-start" src= {location} alt=""/> 
                                        <p className="mt-3 flex flex-nowrap content-center"> Location: <br/> Sydney</p>
                                    </div>
                                    <div className="flex flex-nowrap justify-start">
                                        <img className="w-4 mr-5 flex flex-nowrap justify-start" src= {job} alt=""/> 
                                        <p className="mt-3 flex flex-nowrap content-center"> Job terms: <br/> Full time</p>
                                    </div>
                                    <hr></hr>
                                </Card.Text>
                                <p>To apply email us at <span className="text-gold_300 font-bold"> careers@triiyo.com </span> with your CV and a note of why you would like to join us! </p>
                                {/* <a href="/" className="flex-grow bg-gold_300 py-2 px-2 text-base font-bold text-white border-2 border-gold_300 rounded no-underline">Apply now</a> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
	    </section>
    </div>
)

export default UxDesigner