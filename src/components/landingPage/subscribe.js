import * as React from "react";

const Subscribe = ({ blok }) => (
	<div class="font-karla bg-gold py-20">
        <div class="container">
            <div class="w-8/12 mx-auto text-center mb-16">
                <h2 class="text-black font-bold text-3xl leading-none mb-8">Stay in the loop</h2>
                <p class="font-normal textr-lg leading-snug text-black">
                    Sign up to recieve the latest news and updates from trriyo
                </p>
            </div>
            <div class="md:w-9/12 mx-auto">
                <form>
                    <div class="sm:flex whitespace-nowrap items-center ">
                        <div class="sm:w-4/12 lg:w-5/12 px-2 mb-6 sm:mb-0">
                            <input type="text"
                                class="text-base px-4 bg-white_100 appearance-none border-2 border-gray rounded-md w-full py-3 text-gray placeholder-gray  leading-normal focus:outline-none"
                                placeholder="Your name"/>
                        </div>
                        <div class="sm:w-4/12 lg:w-5/12 px-2  mb-6 sm:mb-0">
                            <input type="text"
                                class="text-base px-4 bg-white_100 appearance-none border-2 border-gray rounded-md w-full py-3 text-gray placeholder-gray  leading-normal focus:outline-none"
                                placeholder="Your name"/>
                        </div>
                        <div class="sm:w-4/12 lg:w-2/12 md:ml-2 px-3 flex justify-content-center items-center content-center">
                            <button
                                class="inline-block whitespace-nowrap py-3 px-3 md:px-5 text-base leading-none border-5 border-gold_300 text-white font-bold bg-gold_300 rounded">
                                Sign up now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )

    export default Subscribe