import * as React from "react";
import { useState } from 'react';
import Popup from './popup';

const DownloadFreeBook = ({ blok }) => {
    const [buttonPopup, setButtonPopup] = useState(false);
    // START
    return (
    <section className="font-karla py-2 bg-cream_200 border-2 border-grey">
        <div className="mx-auto">
            <div className="flex grid grid-cols-3 lg:whitespace-nowrap items-center">
                <div className="grid col-span-3 xl:col-span-1 px-2">                
                    <h4 
                    // className="flex sm:flex-wrap md:flex-auto items-center text-black font-bold pl-10 pb-2 leading-none mt-3"
                    className="flex justify-content-center items-center content-center text-black font-bold px-4 appearance-none w-full py-2 leading-normal"
                    >
                        Best practice guide to parental leave
                    </h4> 
                </div>
                <div className="grid col-span-3 xl:col-span-1 px-2">
                    <p 
                    // className="flex sm:flex-wrap md:flex-auto items-center font-normal text-black pr-5 leading-none mt-3"
                    className="flex justify-content-center items-center content-center text-base px-4 appearance-none w-full py-3 mt-2 text-gray"
                    >
                        Download your free e-book now
                    </p>
                </div>
                    {/* <a href="/"
                        onClick={() => setButtonPopup(true)}
                        class="flex sm:flex-wrap md:flex-nowrap sm:justify-self-center md:justify-self-end bg-cream_200 py-3 px-6 text-base font-bold leading-none text-black border border-black rounded-md shadow-sm no-underline hover:bg-white">
                        Download it now
                    </a>    */}
                <div className="grid col-span-3 xl:col-span-1 md:ml-2 px-3 flex justify-content-center items-center content-center">
                    <button
                        onClick={() => setButtonPopup(true)}
                        class="flex sm:flex-wrap md:flex-nowrap sm:justify-self-center md:justify-self-end bg-cream_200 py-3 px-6 text-base font-bold leading-none text-black border border-black rounded-md shadow-sm no-underline hover:bg-white">
                        Download it now
                    </button> 
                </div>                
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            </Popup>
        </div>
    </section> 
    )
}

export default DownloadFreeBook 

// <section className="font-karla py-2 bg-cream_200 border-2 border-grey md:w-9/12 mx-auto">
//             <div className="flex items-center w-full px-4">                
//                 <h4 className="flex sm:flex-wrap md:flex-auto items-center text-black font-bold pl-10 pb-2 leading-none mt-3">
//                     Best practice guide to parental leave
//                 </h4> 
//                 <p className="flex sm:flex-wrap md:flex-auto items-center font-normal text-black pr-5 leading-none mt-3">
//                     Download your free e-book now
//                 </p>
//                 {/* <a href="/"
//                     onClick={() => setButtonPopup(true)}
//                     class="flex sm:flex-wrap md:flex-nowrap sm:justify-self-center md:justify-self-end bg-cream_200 py-3 px-6 text-base font-bold leading-none text-black border border-black rounded-md shadow-sm no-underline hover:bg-white">
//                     Download it now
//                 </a>    */}
//                 <button
//                     onClick={() => setButtonPopup(true)}
//                     class="flex sm:flex-wrap md:flex-nowrap sm:justify-self-center md:justify-self-end bg-cream_200 py-3 px-6 text-base font-bold leading-none text-black border border-black rounded-md shadow-sm no-underline hover:bg-white">
//                     Download it now
//                 </button>                 
//             </div>
//             <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
//             </Popup>
//     </section> 