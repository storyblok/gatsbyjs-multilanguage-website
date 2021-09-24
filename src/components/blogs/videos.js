import * as React from "react";
import Card from 'react-bootstrap/Card'
import img1 from '../../images/blogs/ZeroCode_YouTube.png';
import img2 from '../../images/blogs/CovidSupport_YouTube.png';
import img3 from '../../images/blogs/Connection_YouTube.png';
import img4 from '../../images/blogs/webinar.jpg';


const Videos = ({ blok }) => (
    <div className="font-karla pb-10">
        <section>
            <div className="w-full container sm:gap-10 items-center mb-20">
                <div className="w-full text-left py-2"> 
                    <h2 className="text-black pl-5 font-bold text-3xl leading-none mb-4">Videos</h2> 
                </div>
                
                <div className="flex justify-around grid md:grid-cols-2 lg:grid-cols-3 sm:gap-10  px-4">
                    <div className="flex justify-center">
                        <Card className="flex shadow-md rounded-3 pb-3 transition hover:opacity-50" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img1} alt="" />
                            <Card.Body>
                                <Card.Title className="mb-2"><span className="font-bold"> We made triiyo 'zero code' so it's quick and easy for organisations to go-live </span></Card.Title>
                                <Card.Text className="mb-4">
                                </Card.Text>
                                <a href="/blog/triiyo-zero-code" className="mr-2 bg-white py-2 px-2 text-base font-bold text-gold_300 border-2 border-gold_300 rounded no-underline">Watch now!</a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="flex justify-center">
                        <Card className="flex shadow-md rounded-3 pb-3 transition hover:opacity-50" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img2} alt="" />
                            <Card.Body>
                                <Card.Title className="mb-2"><span className="font-bold"> How triiyo is supporting companies through Covid </span></Card.Title>
                                <Card.Text className="mb-4">
                                </Card.Text>
                                <a href="/blog/supporting-companies-covid" className="mr-2 bg-white py-2 px-2 text-base font-bold text-gold_300 border-2 border-gold_300 rounded no-underline">Watch now!</a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="flex justify-center">
                        <Card className="flex shadow-md rounded-3 pb-3 transition hover:opacity-50" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img3} alt="" />
                            <Card.Body>
                                <Card.Title className="mb-2"><span className="font-bold"> How triiyo uses connection to drive employee engagement and retention </span></Card.Title>
                                <Card.Text className="mb-4">
                                </Card.Text>
                                <a href="/blog/drive-employee-engagement" className="mr-2 bg-white py-2 px-2 text-base font-bold text-gold_300 border-2 border-gold_300 rounded no-underline">Watch now!</a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="flex justify-center">
                        <Card className="flex shadow-md rounded-3 pb-3 transition hover:opacity-50" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img3} alt="" />
                            <Card.Body>
                                <Card.Title className="mb-2"><span className="font-bold"> Webinar - Parental Leave Transitions with Drop Bio </span></Card.Title>
                                <Card.Text className="mb-4">
                                </Card.Text>
                                <a href="/blog/webinar-parental-leave-transitions-with-drop-bio" className="mr-2 bg-white py-2 px-2 text-base font-bold text-gold_300 border-2 border-gold_300 rounded no-underline">Watch now!</a>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
	    </section>
    </div>
)

export default Videos 