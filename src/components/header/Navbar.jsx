import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className='mb-5'>
      <nav className=" lg:gap-x-12 fixed flex w-full justify-center  top-0 left-0 z-10 bg-black opacity-70" aria-label="Global">
        <div className="">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="z-20 hover:scale-110 transition-all duration-200 ease-in-out" src={Logo} alt="mr&mrs logo" width='100px' height='50px' />
          </Link>
        </div>
        <div className=" lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden items-center lg:flex lg:gap-x-12 justify-items-end ">
          <Link to="/" className="text-[20px] font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">Home</Link>
          <Link to="/winners" className="text-[20px] font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">Winners</Link>
          <Link to="/theaters" className="text-[20px] font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">Theaters</Link>
          <Link to="/aboutus" className="text-[20px] font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">Team</Link>
          <Link to="/contact" className="text-[20px] font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">Contact Us</Link>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
