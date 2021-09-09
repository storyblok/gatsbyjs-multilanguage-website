// import * as React from 'react'
import React, { useState } from "react";

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/20652556/93bc552f-1d5b-411a-81d8-16f334e5eb75'
        var data = {
            "fields": [
                {
                    "name": "email",
                    "value": email
                },
                {
                    "name": "firstname",
                    "value": firstname
                },
                {
                    "name": "lastname",
                    "value": lastname
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
        <section class="font-karla py-20 bg-white">
        <div class="container">
            <div class="p-5 space-y-5 ">
                <h4 class="text-center text-3xl">General enquiries</h4>
                <p class="text-center">Send any general enquiries to us via email</p>
                <div className="grid lg:grid-cols-4 gap-3">
                    <div></div>
                    <div className="col-span-2">
                        <form onSubmit={handleSubmit}>
                            <div class="grid grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-navy_300"
                                    placeholder="Your name"
                                    value={firstname}
                                    onChange={e => setFirstName(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-navy_300"
                                    placeholder="Your phone number"
                                    value={lastname}
                                    onChange={e => setLastName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-navy_300 col-span-2"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                {/* <input
                                    type="tel"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                                    placeholder="Phone"
                                /> */}                        
                                <textarea
                                    cols="10"
                                    rows="5"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
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
                                        class="mt-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-gold_300 hover:bg-yellow-500"
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
    // return (
        
    //     <form onSubmit={handleSubmit}>
    //         <h4>
    //             Send us a Message!
    //         </h4>
    //         <label>
    //             First Name:
    //             <input
    //                 type="text"
    //                 value={firstname}
    //                 onChange={e => setFirstName(e.target.value)}
    //             />
    //         </label>
    //         <label>
    //             Last Name
    //             <input
    //                 type="text"
    //                 value={lastname}
    //                 onChange={e => setLastName(e.target.value)}
    //             />
    //         </label>
    //         <label>
    //             Email
    //             <input
    //                 type="text"
    //                 value={email}
    //                 onChange={e => setEmail(e.target.value)}
    //             />
    //         </label>
    //         <label>
    //             Message
    //             <input
    //                 type="text"
    //                 value={message}
    //                 onChange={e => setMessage(e.target.value)}
    //             />
    //         </label>
    //         <button action="submit">
    //             Send!
    //         </button>
    //     </form>
    // )
}

export default ContactForm



// Info to link the form with Hubspot
// 	portalId: "20652556",
// 	formId: "93bc552f-1d5b-411a-81d8-16f334e5eb75"
