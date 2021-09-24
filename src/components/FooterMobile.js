import React from "react"

const FooterMobile = () => {
  return (
    <footer id="navMobile" className="font-karla text-center bg-navy flex flex-col items-center py-10 mx-auto">
    <div className="w-10/12 grid grid-cols-1 justify-items-start border-b-2 border-white my-2">
        <div>
            <a href="/contact-us" className="capitalize inline-block text-gold_100 text-md font-normal no-underline">Contact</a>
        </div>
    </div>
    <div className="w-10/12 grid grid-cols-1 justify-items-start border-b-2 border-white my-2">
        <div>
            <a href="/" className="capitalize inline-block text-gold_100 text-md font-normal no-underline">Support</a>
        </div>
    </div>
    <div className="w-10/12 grid grid-cols-1 justify-items-start border-b-2 border-white my-2">
        <div>
            <a href="/privacy" className="capitalize inline-block text-gold_100 text-md font-normal no-underline">Privacy Policy</a>
        </div>
    </div>
    <div className="w-10/12 grid grid-cols-1 justify-items-start border-b-2 border-white my-2">
        <div>
            <a href="/terms-and-conditions" className="inline-block text-gold_100 text-md font-normal no-underline">Terms of Service</a>
        </div>
    </div>
      <ul className="flex gap-4 lg:justify-end justify-center items-center mt-5">
        <li>
            <a href="https://www.facebook.com/hellotriiyo">
                <svg width="13" height="24" viewBox="0 0 13 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.0847 13.5L12.7513 9.15656H8.58363V6.33797C8.58363 5.14969 9.16581 3.99141 11.0324 3.99141H12.9271V0.293438C12.9271 0.293438 11.2077 0 9.56378 0C6.13159 0 3.88816 2.08031 3.88816 5.84625V9.15656H0.072998V13.5H3.88816V24H8.58363V13.5H12.0847Z"
                        fill="white" />
                </svg>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/hellotriiyo/?hl=en">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.838 5.60928C7.85679 5.60928 5.4521 8.01396 5.4521 10.9952C5.4521 13.9765 7.85679 16.3812 10.838 16.3812C13.8193 16.3812 16.224 13.9765 16.224 10.9952C16.224 8.01396 13.8193 5.60928 10.838 5.60928ZM10.838 14.4968C8.91147 14.4968 7.33647 12.9265 7.33647 10.9952C7.33647 9.06396 8.90679 7.49365 10.838 7.49365C12.7693 7.49365 14.3396 9.06396 14.3396 10.9952C14.3396 12.9265 12.7646 14.4968 10.838 14.4968ZM17.7005 5.38896C17.7005 6.0874 17.138 6.64521 16.4443 6.64521C15.7458 6.64521 15.188 6.08271 15.188 5.38896C15.188 4.69521 15.7505 4.13271 16.4443 4.13271C17.138 4.13271 17.7005 4.69521 17.7005 5.38896ZM21.2677 6.66396C21.188 4.98115 20.8037 3.49053 19.5708 2.2624C18.3427 1.03428 16.8521 0.649902 15.1693 0.565527C13.4349 0.46709 8.23647 0.46709 6.5021 0.565527C4.82397 0.645215 3.33335 1.02959 2.10054 2.25771C0.867725 3.48584 0.488037 4.97646 0.403662 6.65928C0.305225 8.39365 0.305225 13.5921 0.403662 15.3265C0.48335 17.0093 0.867725 18.4999 2.10054 19.728C3.33335 20.9562 4.81929 21.3405 6.5021 21.4249C8.23647 21.5233 13.4349 21.5233 15.1693 21.4249C16.8521 21.3452 18.3427 20.9608 19.5708 19.728C20.799 18.4999 21.1833 17.0093 21.2677 15.3265C21.3662 13.5921 21.3662 8.39834 21.2677 6.66396ZM19.0271 17.1874C18.6615 18.1061 17.9537 18.814 17.0302 19.1843C15.6474 19.7327 12.3662 19.6061 10.838 19.6061C9.30991 19.6061 6.02397 19.728 4.64585 19.1843C3.7271 18.8187 3.01929 18.1108 2.64897 17.1874C2.10054 15.8046 2.2271 12.5233 2.2271 10.9952C2.2271 9.46709 2.10522 6.18115 2.64897 4.80303C3.0146 3.88428 3.72241 3.17646 4.64585 2.80615C6.02866 2.25771 9.30991 2.38428 10.838 2.38428C12.3662 2.38428 15.6521 2.2624 17.0302 2.80615C17.949 3.17178 18.6568 3.87959 19.0271 4.80303C19.5755 6.18584 19.449 9.46709 19.449 10.9952C19.449 12.5233 19.5755 15.8093 19.0271 17.1874Z"
                        fill="white" />
                </svg>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/company/triiyo">
                <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.40706 21H0.707779V6.97971H5.40706V21ZM3.05489 5.06721C1.55221 5.06721 0.333374 3.91408 0.333374 2.52189C0.333374 1.85318 0.620105 1.21185 1.13049 0.738991C1.64087 0.266136 2.3331 0.000488281 3.05489 0.000488281C3.77668 0.000488281 4.46891 0.266136 4.9793 0.738991C5.48968 1.21185 5.77641 1.85318 5.77641 2.52189C5.77641 3.91408 4.55706 5.06721 3.05489 5.06721ZM22.995 21H18.3058V14.175C18.3058 12.5485 18.2704 10.4625 15.8626 10.4625C13.4193 10.4625 13.0449 12.2297 13.0449 14.0578V21H8.3507V6.97971H12.8577V8.89221H12.9235C13.5509 7.79064 15.0834 6.62814 17.3698 6.62814C22.1258 6.62814 23 9.52971 23 13.2985V21H22.995Z"
                        fill="white" />
                </svg>
            </a>
        </li>
        {/* <li>
            <a href="https://www.youtube.com/channel/UCh5aXITAPY_P_9PhKdb5FGQ">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.533 5.11175C21.5482 5.32494 21.5482 5.53817 21.5482 5.75136C21.5482 12.2539 16.599 19.7463 7.5533 19.7463C4.76648 19.7463 2.17767 18.9391 0 17.5382C0.395953 17.5838 0.776625 17.5991 1.18781 17.5991C3.48727 17.5991 5.60405 16.8224 7.29441 15.4976C5.13197 15.4519 3.31978 14.0356 2.69541 12.0864C3 12.132 3.30455 12.1625 3.62437 12.1625C4.06598 12.1625 4.50764 12.1016 4.91878 11.995C2.66498 11.5381 0.974578 9.55845 0.974578 7.16759V7.1067C1.62937 7.47219 2.39086 7.70061 3.19791 7.73103C1.87303 6.84777 1.00505 5.34017 1.00505 3.63458C1.00505 2.72089 1.24866 1.88333 1.67508 1.15236C4.09641 4.13713 7.73602 6.08633 11.8172 6.29956C11.7411 5.93408 11.6954 5.55341 11.6954 5.17269C11.6954 2.462 13.8883 0.253906 16.6141 0.253906C18.0304 0.253906 19.3095 0.847813 20.208 1.8072C21.3197 1.59402 22.3857 1.18283 23.3299 0.619391C22.9643 1.76155 22.1877 2.72094 21.1674 3.33003C22.1573 3.22348 23.1167 2.94931 23.9999 2.56864C23.33 3.54322 22.4924 4.4112 21.533 5.11175Z"
                        fill="white" />
                    </svg>
                </a>
            </li> */}
            <li>
                <a href="https://www.youtube.com/channel/UCh5aXITAPY_P_9PhKdb5FGQ">
                    <svg width="30" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill="white" d="M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003"></path>
					</svg>
                </a>
            </li>
        </ul>
        <div>
          <p className="pt-10 inline-block text-white text-md font-normal">
              Copyright © triiyo 2021. All rights reserved
          </p>
      </div>
    </footer>
  )
}

export default FooterMobile
