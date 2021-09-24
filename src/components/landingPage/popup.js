import React from 'react'
import { useState } from "react";
import './popup.css'

function Popup(props) {
    const [firstname, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        // var url = 'https://api.hsforms.com/submissions/v3/integration/submit/5692042/c1a9d1e5-2e2b-432f-b6b5-5ad564f03296'
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/5692042/f1905f2b-0c39-4a1f-8c96-09c23514e92e'
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


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner rounded-md">
                <button className="close-btn bg-cream_200 py-2 md:py-3 px-2 md:px-6 text-base font-bold leading-none text-black border border-black rounded-md shadow-sm no-underline hover:bg-white" onClick={() => props.setTrigger(false)}
                > Close </button>
                {/* { props.children } */}
                <div className="w-9/12 mx-auto rounded-md">
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
                                    className="text-base xl:mr-3 px-4 bg-white_100 appearance-none border-2 border-gray rounded-md w-full py-3 text-gray placeholder-gray  leading-normal focus:outline-none"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            {/* <div id="hsRecaptchaTarget">
                                <div class="grecaptcha-badge" data-style="inline" style="width: 256px; height: 60px; box-shadow: gray 0px 0px 5px;">
                                <div class="grecaptcha-logo">
                                <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/enterprise/anchor?ar=1&amp;k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm&amp;co=aHR0cHM6Ly9zaGFyZS5oc2Zvcm1zLmNvbTo0NDM.&amp;hl=en&amp;v=tftmXwdbgCvrXiHxr5HGbIaL&amp;size=invisible&amp;badge=inline&amp;cb=yjwfytfqyn9l" 
                                width="256" 
                                height="60" 
                                role="presentation" 
                                name="a-1a2fmys9n6e" 
                                frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><div class="grecaptcha-error"></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe>
                            </div> */}

                            <div className="sm:w-4/12 lg:w-2/12 lg:ml-5 px-3 flex justify-content-center items-center content-center">
                                <button
                                    type="submit"
                                    className="inline-block whitespace-nowrap py-3 px-3 md:px-5 text-base leading-none border-5 border-gold_300 text-white font-bold bg-gold_300 rounded">
                                    Download it now
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup

// Hubspot integration


//	portalId: "5692042",
//	formId: "f1905f2b-0c39-4a1f-8c96-09c23514e92e"