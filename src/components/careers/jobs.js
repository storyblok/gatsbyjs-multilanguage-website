import * as React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Jobs = ({ blok }) => (
    <div className="font-karla bg-white py-10">
        <section>
            <div className="w-full container sm:gap-10 items-center mb-20">
                <div className="w-full text-center py-20"> 
                    <h2 className="text-black font-bold text-3xl leading-none mb-6">Current Job Openings</h2> 
                </div>
                
                <div className="flex justify-around grid md:grid-cols-2 lg:grid-cols-3 sm:gap-10  px-4">
                    <div className="flex justify-center">
                        <Card className="flex shadow-md py-2 mb-4" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-2"><span className="font-bold"> .Net Engineer </span></Card.Title>
                                <Card.Text className="mb-4">
                                This role will have broad technical responsibilities but will be mainly focused on the new products and services we will be offering, although you may need to help with product maintenance and support when needed.
                                </Card.Text>
                                <a href="/net-engineer" className="mr-2 bg-white py-2 px-2 text-base font-bold text-gold_300 border-2 border-gold_300 rounded no-underline">Learn more</a>
                                {/* <a href="/net-engineer" className=" bg-gold_300 py-2 px-2 text-base font-bold text-white border-2 border-gold_300 rounded no-underline">Apply now</a> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="flex justify-center">
                        <Card className="flex shadow-md py-2 mb-4" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-2"><span className="font-bold"> Account Executive </span></Card.Title>
                                <Card.Text className="mb-4">
                                We are looking for an ambitious and energetic Account Manager to help us expand our clientele. You will be at the front of the company and will have the dedication to create and apply an effective sales strategy. The goal is to drive sustainable financial growth through boosting sales and forging strong relationships with clients.
                                </Card.Text>
                                <a href="/account-executive" className="mr-2 bg-white py-2 px-2 text-base font-bold text-gold_300 border-2 border-gold_300 rounded no-underline">Learn more</a>
                                {/* <a href="/account-executive" className=" bg-gold_300 py-2 px-2 text-base font-bold text-white border-2 border-gold_300 rounded no-underline">Apply now</a> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="flex justify-center">
                        <Card className="flex shadow-md py-2 mb-4" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-2"><span className="font-bold"> UX Designer </span></Card.Title>
                                <Card.Text className="mb-4">
                                Your expertise and input will be respected and you will have the freedom to innovate and transform our users' experience — something you will be able to do with ease thanks to your experience in the handling of interaction design for complex flows. You should be able to balance this innovation with time and budget restrictions. 
                                </Card.Text>
                                <a href="/ux-designer" className="mr-2 bg-white py-2 px-2 text-base font-bold text-gold_300 border-2 border-gold_300 rounded no-underline">Learn more</a>
                                {/* <a href="/ux-designer" className=" bg-gold_300 py-2 px-2 text-base font-bold text-white border-2 border-gold_300 rounded no-underline">Apply now</a> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
	    </section>
    </div>
)

export default Jobs 