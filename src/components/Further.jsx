import React from "react";


function Further(){
    return(
        <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow" id="Footer">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    
                    <h3 className="text-white text-lg font-bold mb-4">You Can Reach us at our head office:</h3>
                    <p className="text-gray-400 mt-4">6 OVU LANE, OFF IKWERE ROAD, RUMUOKWUTA TOWN, OBIO/AKPOR, RIVERS STATE</p>
                </div>
                <div className="w-full md:w-1/5 mb-8 md:mb-0">
                    <h3 className="text-white text-lg font-bold mb-4">Company</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <a href="#Header" className="hover:text-white">Home</a>
                        <a href="#About" className="hover:text-white">About Us</a>
                        <a href="#Projects" className="hover:text-white">Project</a>
                        <a href="#Contact" className="hover:text-white">Contact Us On</a>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-white text-lg font-bold mb-4">Further Contact Us On</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li className="hover:text-white">Email: <a href="mailto:abadykelvin@gmail.com">abadykelvin@gmail.com</a></li>
                        <li className="hover:text-white">Phone: <a href="twitterto:praise_onwubiko">+234(0) 806 703 5395</a></li>
                        <li className="hover:text-white">Whatsapp: <a href="whatsapp:+2348067035395">+234 806 703 5395</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Further