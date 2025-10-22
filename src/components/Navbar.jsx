import React, { useEffect, useState } from "react";
import { Menu, DeleteIcon } from 'lucide-react'


function Navbar(){
    const [showMobileMenue, setShowMobileMenu] = useState(false)

useEffect(() =>{
    if(showMobileMenue){
        document.body.style.overflow = 'hidden'
    } else{
        document.body.style.overflow = 'auto'
    }
    return () => {
        document.body.style.overflow = 'auto'
    }
}, [showMobileMenue])

    return(
        <div className="absolute top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <img src="" alt="" />
                <ul className="hidden md:flex gap-7 text-white">
                    <a href="#Header" className="cursor-pointer hover:text-gray-400 text-white">Home</a>
                    <a href="#About" className="cursor-pointer hover:text-gray-400 text-white">About</a>
                    <a href="#Projects" className="cursor-pointer hover:text-gray-400 text-white">Projects</a>
                    <a href="#Contact" className="cursor-pointer hover:text-gray-400 text-white">Contact</a>
                    
                </ul>
                <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer hover:bg-blue-400"></button>
                <Menu className="md:hidden w-7 cursor-pointer"
                onClick={() => setShowMobileMenu(true)}/>
            </div>
            {/* mobile menue */}
            <div className={`md:hidden ${showMobileMenue ? 'fixed w-menu' : 'h-0 w-0'}fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className="flex justify-end p-6 cursor-pointer">
                    <DeleteIcon className="w-6"
                    onClick={() => setShowMobileMenu(false)}/>
                </div>
                <ul className="flex flex-col items-center gap-2 mt-5 text-lg font-medium">
                    <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-full inline-block">About</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-4 py-2 rounded-full inline-block">Projects</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Contact" className="px-4 py-2 rounded-full inline-block">Contact</a>
                </ul>
            </div>
        </div>
    );
}

export default Navbar