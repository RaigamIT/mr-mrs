import React from 'react';
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className='mb-5'>
      <nav class="fixed w-full flex top-0 left-0 z-10 bg-black opacity-70" aria-label="Global">
        <div class="flex  lg:flex-1 justify-center">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="z-20 hover:scale-110 transition-all duration-200 ease-in-out" src={Logo} alt="mr&mrs logo" width='100px' height='50px' />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12 items-end">
          <a href="#" class="text-[20px] font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">Home</a>
          <a href="#" class="text-[20px] font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">Winners</a>
          <a href="#" class="text-[20px] font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">Theaters</a>
          <a href="#" class="text-[20px] font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">Contact Us</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
 