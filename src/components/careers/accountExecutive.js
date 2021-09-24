import * as React from "react";
import Card from 'react-bootstrap/Card'
import money from '../../images/career/money.svg'
import location from '../../images/career/location.svg'
import job from '../../images/career/job.svg'


const AccountExecutive = ({ blok }) => (
    <div className="font-karla py-20 bg-white w-full h-390px">
        <section>
            <div className="container grid grid-cols-3 gap-4">
                <div className="sm:w-10/12 mx-auto text-left mb-16 col-span-2">
                    <h1 className="text-black font-bold text-4xl leading-none mb-12">Account Executive</h1>
                    <h3 className="text-black font-bold text-2xl leading-none mb-6">About the role</h3>
                    <p className="font-normal textr-lg leading-snug text-black pt-2"> 
                    triiyo is seeking an ambitious and passionate Account Executive to drive sales and business development for our fast-growth tech business. Your key responsibilities will be developing a business development strategy aligned to our short and medium-term growth plans and arranging business development meetings with prospective clients.
                    </p>
                    <p>
                    We are looking for an ambitious and energetic Account Manager to help us expand our clientele. You will be at the front of the company and will have the dedication to create and apply an effective sales strategy. The goal is to drive sustainable financial growth through boosting sales and forging strong relationships with clients.
                    </p>
                    <p>
                    You will be inspired by working for a company with a strong sense of purpose, who’s committed to creating a positive impact on people’s lives at work, and be excited to be on the ground early in a progressive and fast-growing company. 
                    </p>
                    <p>
                    As an Account Executive, you will identify, source and close good-fit prospects. Using strong consultative selling skills, you will balance contacting warm inbound leads and driving self-sourced leads for your pipeline, while also partnering closely with internal stakeholders to achieve team goals and work towards triiyo’s mission to help organisations care for their people better. 
                    </p>
                    <br/>
                    <h3 className="text-black font-bold text-2xl leading-none mb-6">In this role, you’ll get to:</h3>
                    <p className="font-normal textr-lg leading-snug text-black pt-2"> </p>
                     <ul>
                        <li>- Position the value of triiyo’s platform, focusing on companies primarily between 200-5000 employees</li>
                        <li>- Educate and guide prospects through the buyer’s journey to help them learn how triiyo can improve employee engagement and retention </li>
                        <li>- Manage a pipeline of inbound and self-sourced leads to identify, engage, and develop relationships with potential buyers</li>
                        <li>- Dissect and qualify prospects’ business goals to determine if triiyo can be a strategic investment for their people strategy</li>
                        <li>- Close business with new and existing customers at or above quota level</li>
                        <li>- Partner with marketing and technology departments to execute sales strategy as the company introduces enhancements to existing solutions and/or releases new products </li>       
                        <li>- Bring your thinking, strategies, and ideas to advance our company’s values, unique culture, and vision for the future </li>       
                    </ul>
                    <br/>
                    <h3 className="text-black font-bold text-2xl leading-none mb-6"> We are looking for people who:</h3>
                    <ul>
                        <li>- Have the desire, resilience and commitment to do what it takes to be successful in sales</li>
                        <li>- Have a positive outlook and a strong ability to take responsibility for their successes and failures </li>
                        <li>- Have exceptional consultative selling and closing skills</li>
                        <li>- Are top billers in their current role</li>
                        <li>- Have a sharp focus on their goals and a belief that their daily, weekly and monthly activities will help achieve them</li>
                        <li>- Are motivated by uncapped earning potential and being at the forefront of a purpose-driven business </li>
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

export default AccountExecutive