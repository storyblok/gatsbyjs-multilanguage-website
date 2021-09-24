// import * as React from 'react'
import React, { useState } from "react";

const ContactForm = () => {
    const [firstname, setFirstName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/5692042/ed2d451d-db1e-47c5-8bae-6d8f396be2b1'
        // var url = 'https://api.hsforms.com/submissions/v3/integration/submit/20652556/93bc552f-1d5b-411a-81d8-16f334e5eb75'
        var data = {
            "fields": [
                {
                    "name": "firstname",
                    "value": firstname
                },
                {
                    "name": "phone",
                    "value": phone
                },
                {
                    "name": "email",
                    "value": email
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
                window.location.replace("/contact-success");
                // console.log("/contact-success");
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
                <h4 className="text-center text-3xl">General enquiries</h4>
                <p className="text-center">Send any general enquiries to us via email</p>
                <div className="grid lg:grid-cols-7 gap-3">
                    <div></div>
                    <div className="col-span-5">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-navy_300 rounded-md"
                                    placeholder="Your name"
                                    value={firstname}
                                    onChange={e => setFirstName(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-navy_300 rounded-md"
                                    placeholder="Your phone number"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                                <input
                                    type="email"
                                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-navy_300 col-span-2 rounded-md"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />                     
                                <textarea
                                    cols="10"
                                    rows="5"
                                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2 rounded-md"
                                    placeholder="Your message"
                                    type="text"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    required
                                ></textarea>                        
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4">
                                <div></div>
                                <div>
                                    <input
                                        type="submit"
                                        value="Send enquiry"
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

export default ContactForm


//New Form
//	portalId: "5692042",
//	formId: "ed2d451d-db1e-47c5-8bae-6d8f396be2b1"
//change lastname for phone


//Old FOrm
// Info to link the form with Hubspot
// 	portalId: "20652556",
// 	formId: "93bc552f-1d5b-411a-81d8-16f334e5eb75"
