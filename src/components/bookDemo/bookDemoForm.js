// import { getLowResolutionImageURL } from "gatsby-plugin-image";
import React, { useState } from "react";


const BookDemoForm = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [jobtitle, setJobtitle] = useState("");
    const [numberEmployees, setNumberEmployees] = useState("");
    const [parentalleave, setParentalLeave] = useState(false);
    const [carerleave, setCarerLeave] = useState(false);
    const [remoteworking, setRemoteWorking] = useState(false);
    const [retirementplanning, setRetirementPlanning] = useState(false);
    const [returningtowork, setReturningtowork] = useState(false);
    const [globalmobility, setGlobalmobility] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        // var url = 'https://api.hsforms.com/submissions/v3/integration/submit/20652556/31133bfe-9feb-47cc-9a25-e8c4296b54cf'
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/5692042/25a0083f-0c1a-45d6-93b8-b8582643eb0b'
        var data = {
            "fields": [
                {
                    "name": "firstname",
                    "value": firstname
                },
                {
                    "name": "lastname",
                    "value": lastname
                },
                {
                    "name": "email",
                    "value": email
                },
                {
                    "name": "phone",
                    "value": phone
                },
                {
                    "name": "company",
                    "value": company
                },
                {
                    "name": "jobtitle",
                    "value": jobtitle
                },
                {
                    "name": "numberEmployees",
                    "value": numberEmployees
                },
                {
                    "name": "parentalleave",
                    "value": parentalleave
                },
                {
                    "name": "carerleave",
                    "value": carerleave
                },
                {
                    "name": "remoteworking",
                    "value": remoteworking
                },
                {
                    "name": "retirementplanning",
                    "value": retirementplanning
                },
                {
                    "name": "returningtowork",
                    "value": returningtowork
                },
                {
                    "name": "globalmobility",
                    "value": globalmobility
                },
                {
                    "name": "message",
                    "value": message
                }
            ],
            "context": {
                "pageUri": "www.triiyo.com.au",
                "pageName": "Nico Elvino"
            },
        }

        var final_data = JSON.stringify(data)

        xhr.open('POST', url);
        // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                window.location.replace("/book-demo-success");
                // alert(xhr.responseText); // Returns a 200 response if the submission is successful.
            } else if (xhr.readyState === 4 && xhr.status === 403) {
                alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.     
            } else if (xhr.readyState === 4 && xhr.status === 404) {
                alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found    
            }
        }

        // Sends the request 
        xhr.send(final_data)
    }

    return (
        <section className="font-karla py-20 bg-white">
        <div className="container">
            <div className="p-5 space-y-5 ">
                <h4 className="text-center text-3xl">We can’t wait to show you triiyo!</h4>
                <p className="text-center">Please complete the form and we’ll be in touch to book a time for your demo.</p>
                <div className="grid lg:grid-cols-7 gap-3">
                    <div></div>
                    <div className="col-span-5">
                        <form onSubmit={handleSubmit} action="/success/">
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-navy_300 rounded-md"
                                    placeholder="Enter first name"
                                    value={firstname}
                                    onChange={e => setFirstName(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-navy_300 rounded-md"
                                    placeholder="Enter last name"
                                    value={lastname}
                                    onChange={e => setLastName(e.target.value)}
                                    required
                                />
                                <input
                                    type="email"
                                    className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-navy_300 col-span-2 rounded-md"
                                    placeholder="Enter email address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type="tel"
                                    className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-purple-500 rounded-md"
                                    placeholder="Phone number (optional)"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />                        
                                <input
                                    type="text"
                                    className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-navy_300 rounded-md"
                                    placeholder="Job role (optional)"
                                    value={jobtitle}
                                    onChange={e => setJobtitle(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-navy_300 rounded-md"
                                    placeholder="Company name (optional)"
                                    value={company}
                                    onChange={e => setCompany(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-navy_300 rounded-md"
                                    placeholder="Number of employees (optional)"
                                    value={numberEmployees}
                                    onChange={e => setNumberEmployees(e.target.value)}
                                />
                                <p className="text-start col-span-2">What workplace transitions are you interested in?</p>
                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 col-span-2">
                                    <div className="flex-1">
                                        <input
                                            type="checkbox"
                                            className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-navy_300 rounded-md"
                                            placeholder=""
                                            value={parentalleave}
                                            onChange={e => setParentalLeave(e.target.checked)}
                                            id="parental"
                                        />
                                        <label for="parental" className={` ${parentalleave ? "checked" : "unchecked"} ml-1 whitespace-nowrap inline-flex items-center justify-center px-2 py-0 border border-transparent rounded-xl shadow-sm text-base hover:bg-navy_200`}> Parental Leave</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-navy_300  rounded-md"
                                            placeholder=""
                                            value={carerleave}
                                            onChange={e => setCarerLeave(e.target.checked)}
                                            id="carerLeave"
                                        />
                                        <label for="carerLeave" className={` ${carerleave ? "checked" : "unchecked"} ml-1 whitespace-nowrap inline-flex items-center justify-center px-2 py-0 border border-transparent rounded-xl shadow-sm text-base hover:bg-navy_200`}> Carers Leave</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-navy_300  rounded-md"
                                            placeholder=""
                                            value={remoteworking}
                                            onChange={e => setRemoteWorking(e.target.checked)}
                                            id="remoteWorking"
                                        />
                                        <label for="remoteWorking" className={` ${remoteworking ? "checked" : "unchecked"} ml-1 whitespace-nowrap inline-flex items-center justify-center px-2 py-0 border border-transparent rounded-xl shadow-sm text-base hover:bg-navy_200`}> Remote Working</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-navy_300  rounded-md"
                                            placeholder=""
                                            value={retirementplanning}
                                            onChange={e => setRetirementPlanning(e.target.checked)}
                                            id="retirementPlanning"
                                        />
                                        <label for="retirementPlanning" className={` ${retirementplanning ? "checked" : "unchecked"} ml-1 whitespace-nowrap inline-flex items-center justify-center px-2 py-0 border border-transparent rounded-xl shadow-sm text-base hover:bg-navy_200`}> Retirement Planning</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-navy_300  rounded-md"
                                            placeholder=""
                                            value={returningtowork}
                                            onChange={e => setReturningtowork(e.target.checked)}
                                            id="returningtowork"
                                        />
                                        <label for="returningtowork" className={` ${returningtowork ? "checked" : "unchecked"} ml-1 whitespace-nowrap inline-flex items-center justify-center px-2 py-0 border border-transparent rounded-xl shadow-sm text-base hover:bg-navy_200`}> Returning to Work</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-navy_300  rounded-md"
                                            placeholder=""
                                            value={globalmobility}
                                            onChange={e => setGlobalmobility(e.target.checked)}
                                            id="globalmobility"
                                        />
                                        <label for="globalmobility" className={` ${globalmobility ? "checked" : "unchecked"} ml-1 whitespace-nowrap inline-flex items-center justify-center px-2 py-0 border border-transparent rounded-xl shadow-sm text-base hover:bg-navy_200`}> Global Mobility </label>
                                    </div>
                                </div>
                                <textarea
                                    cols="10"
                                    rows="4"
                                    className="border border-gray-500 px-2 py-2 focus:outline-none focus:border-purple-500 col-span-2 rounded-md"
                                    placeholder="Write comments here"
                                    type="text"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                ></textarea>               
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4">
                                <div></div>
                                <div className="flex items-center justify-center">
                                    <input
                                        type="submit"
                                        value="Send"
                                        className="mt-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-gold_300 hover:bg-yellow-500"
                                    />
                                </div>
                                <div></div>
                            </div>                        
                        </form>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default BookDemoForm



//NEW ONE
//	portalId: "5692042",
//	formId: "25a0083f-0c1a-45d6-93b8-b8582643eb0b"


//OLD ONE
// Info to link the form with Hubspot
//	portalId: "20652556",
//	formId: "31133bfe-9feb-47cc-9a25-e8c4296b54cf"