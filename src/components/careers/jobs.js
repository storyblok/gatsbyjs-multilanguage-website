import * as React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Jobs = ({ blok }) => (
    <div className="font-karla bg-white py-10">
        <section>
            <div className="w-full container sm:gap-10 items-center mb-20">
                <div className="w-full container sm:gap-10 items-center text-center mb-20"> 
                    <h1>Current Job Openings</h1>
                </div>
                
                <div className="flex justify-around grid md:grid-cols-2 lg:grid-cols-3 sm:gap-10  px-4">
                    <div className="flex justify-center">
                        <Card className="flex shadow-md py-2 mb-4" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-2">Job title</Card.Title>
                                <Card.Text className="mb-4">
                                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate.
                                </Card.Text>
                                <a href="/" className="mr-2 bg-white py-2 px-2 text-base font-bold text-gold_300 border-2 border-gold_300 rounded no-underline">Learn more</a>
                                <a href="/" className=" bg-gold_300 py-2 px-2 text-base font-bold text-white border-2 border-gold_300 rounded no-underline">Apply now</a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="flex justify-center">
                        <Card className="flex shadow-md py-2 mb-4" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-2">Job title</Card.Title>
                                <Card.Text className="mb-4">
                                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate.
                                </Card.Text>
                                <a href="/" className="mr-2 bg-white py-2 px-2 text-base font-bold text-gold_300 border-2 border-gold_300 rounded no-underline">Learn more</a>
                                <a href="/" className=" bg-gold_300 py-2 px-2 text-base font-bold text-white border-2 border-gold_300 rounded no-underline">Apply now</a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="flex justify-center">
                        <Card className="flex shadow-md py-2 mb-4" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-2">Job title</Card.Title>
                                <Card.Text className="mb-4">
                                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate.
                                </Card.Text>
                                <a href="/" className="mr-2 bg-white py-2 px-2 text-base font-bold text-gold_300 border-2 border-gold_300 rounded no-underline">Learn more</a>
                                <a href="/" className=" bg-gold_300 py-2 px-2 text-base font-bold text-white border-2 border-gold_300 rounded no-underline">Apply now</a>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
	    </section>
    </div>
)

export default Jobs 