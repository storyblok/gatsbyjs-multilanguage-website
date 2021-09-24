import React, { useState } from "react";



const Subscribe = () => {
    const [firstname, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/5692042/c1a9d1e5-2e2b-432f-b6b5-5ad564f03296'
        var data = {
            "fields": [
                {
                    "name": "firstname",
                    "value": firstname
                },
                {
                    "name": "email",
                    "value": email
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
                window.location.replace("/");
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
	<div className="font-karla bg-gold py-20">
        <div className="container">
            <div className="w-8/12 mx-auto text-center mb-16">
                <h2 className="text-black font-bold text-3xl leading-none mb-8">Stay in the loop</h2>
                <p className="font-normal textr-lg leading-snug text-black">
                    Sign up to recieve the latest news and updates from trriyo
                </p>
            </div>
            <div className="md:w-9/12 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="sm:flex whitespace-nowrap items-center ">
                        <div className="sm:w-4/12 lg:w-5/12 px-2 mb-6 sm:mb-0">
                            <input type="text"
                                className="text-base px-4 bg-white_100 appearance-none border-2 border-gray rounded-md w-full py-3 text-gray placeholder-gray  leading-normal focus:outline-none"
                                placeholder="Your name"
                                value={firstname}
                                onChange={e => setFirstName(e.target.value)}
                                required    
                            />
                        </div>
                        <div className="sm:w-4/12 lg:w-5/12 px-2  mb-6 sm:mb-0">
                            <input type="email"
                                className="text-base px-4 bg-white_100 appearance-none border-2 border-gray rounded-md w-full py-3 text-gray placeholder-gray  leading-normal focus:outline-none"
                                placeholder="Your email address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="sm:w-4/12 lg:w-2/12 md:ml-2 px-3 flex justify-content-center items-center content-center">
                            <button
                                type="submit"
                                className="inline-block whitespace-nowrap py-3 px-3 md:px-5 text-base leading-none border-5 border-gold_300 text-white font-bold bg-gold_300 rounded">
                                Sign up now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
export default Subscribe


// Hubspot integration

//	portalId: "5692042",
//	formId: "c1a9d1e5-2e2b-432f-b6b5-5ad564f03296"