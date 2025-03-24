import React from "react";

import { Menu,X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
        const [mobileDrawerOpen, setMobileDrawerOpen]= useState(false);

        const toggleNavbar = () =>{
            setMobileDrawerOpen(!mobileDrawerOpen);
        };
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b 
        border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-55 mr-2" src="https://tse3.mm.bing.net/th?id=OIP.XFGAj_GdwupqZowk5AQrtQHaE6&pid=Api&P=0&h=180" alt="logo"/>
                        <span></span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                    <a href="#" onClick={() => goToSlide(1)} className="hover:text-violet-300" >Home</a>
                    <a href="#" onclick={() => goToSlide(2)} className="hover:text-violet-300"> Services</a>
                    <a href="#" className="hover:text-violet-300">Resources</a>
                    <a href="#" className="hover:text-violet-300">Volunteering</a>
                    <a href="#" className="hover:text-violet-300">About us</a>
                    </ul>
                    <div className='hidden lg:flex justify center space-x-12 items-center'>
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Client Support →
                            0612-2500971
                        </a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                            Contact Us
                        </a>
                    </div>
                    <div classname="lg:hidden md:flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> :<Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex col justify-center items-center lg:hidden">
                        <ul>
                            <li className="py-4 leading-normal">
                            <a href="#" className="hover:text-violet-300">Home</a><br></br>
                            <a href="#" className="hover:text-violet-300">Services</a><br></br>
                            <a href="#" className="hover:text-violet-300">Industries</a><br></br>
                            <a href="#" className="hover:text-violet-300">Market research</a><br></br>
                            <a href="#" className="hover:text-violet-300">Brands</a><br></br>
                            </li>
                        </ul>
                        <div className="flex space-x-6"></div>
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                            Contact Us
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
  };
  
  export default Navbar;
  
  
  