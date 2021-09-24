import * as React from "react";
import Card from 'react-bootstrap/Card'
import money from '../../images/career/money.svg'
import location from '../../images/career/location.svg'
import job from '../../images/career/job.svg'


const NetEngineer = ({ blok }) => (
    <div className="font-karla py-20 bg-white w-full h-390px">
        <section>
            <div className="container grid grid-cols-3 gap-4">
                <div className="sm:w-10/12 mx-auto text-left mb-16 col-span-2">
                    <h1 className="text-black font-bold text-4xl leading-none mb-12">.Net Engineer</h1>
                    <h3 className="text-black font-bold text-2xl leading-none mb-6">About the role</h3>
                    <p className="font-normal textr-lg leading-snug text-black pt-2"> 
                    triiyo is a start-up that is at an exciting part of its growth. To help take our products to the next level, we’re looking for an experienced .Net developer to join our team. 
                    </p>
                    <p>
                    As part of a small cross-functional team, you will be key in designing, building and maintaining products on our triiyo platform.
                    </p>
                    <p>
                    You will need a deep understanding of web architectures and distributed systems for enterprise software, you will be helping develop our core platform to ensure it’s performant, secure and maintainable. 
                    </p>
                    <p>
                    This role will have broad technical responsibilities but will be mainly focused on the new products and services we will be offering, although you may need to help with product maintenance and support when needed.  
                    </p>
                    <br/>
                    <h3 className="text-black font-bold text-2xl leading-none mb-6">Key responsibilities include</h3>
                    <p className="font-normal textr-lg leading-snug text-black pt-2"> The personal information we collect may include the following: </p>
                     <ul>
                        <li>- Enjoy sharing knowledge with your team and working collaboratively.</li>
                        <li>- Translate application user stories, storyboards and use cases into functional applications</li>
                        <li>- Design, build and maintain efficient, reusable, and reliable code</li>
                        <li>- Ensure the best possible performance, quality, and responsiveness of the application</li>
                        <li>- Identify bottlenecks and bugs, and devise solutions to mitigate and address these issues</li>
                        <li>- Help maintain code quality, organization, and automatization</li>       
                    </ul>
                    <br/>
                    <h3 className="text-black font-bold text-2xl leading-none mb-6"> What you need to be successful</h3>
                    <ul>
                        <li>- 4+ years of relevant product design experience. However, we welcome applications from people with less than 4 years if you have the skills to be successful.</li>
                        <li>- You have experience making progress through product experimentation. </li>
                        <li>- You value progress over perfection and have a track record of shipping value to customers. </li>
                        <li>- Expertise with software development in .NET Framework (C#) in software design, object-oriented programming</li>
                        <li>- Strong proficiency in web-based applications and architectures</li>
                        <li>- Angular and Javascript / Typescript </li>
                        <li>- Familiarity with API design and development </li>
                        <li>- Familiarity with SQL and Document databases </li>
                        <li>- Experience in implementing automated testing platforms and unit tests </li>
                        <li>- Proficient understanding of Git and associated source control strategies </li>
                        <li>- Strong browser/JavaScript fundamentals (ex HTML, CSS, JavaScript and jQuery) </li>
                    </ul>
                    <br/>
                    <h3 className="text-black font-bold text-2xl leading-none mb-6"> It would be beneficial to have experience in</h3>
                    <ul>
                        <li>- Enterprise Saas Development</li>
                        <li>- ABP.IO Framework</li>
                        <li>- CMS Systems</li>
                        <li>- Workflow and Automation</li>
                        <li>- Azure Certifications or a good working understanding of Azure and its capabilities</li>
                        <li>- Microsoft Bot Framework</li>
                        <li>- DevOps experience building and supporting systems using a CI/CD pipeline</li>
                        <li>- Identity management using Identity Servier, Azure AD, B2C or other relevant product</li>
                        <li>- Domain Driven Design and Design Patterns</li>
                    </ul>
                    <p>
                        We may disclose your personal information to cloud-providers, contractors and other third parties located inside or outside of Australia. If we do so, we will take reasonable steps to ensure that any overseas recipient deals with such personal information in a manner consistent with how we deal with it.
                    </p>
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

export default NetEngineer