import React from 'react';
import Logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
	<nav class="flex items-center justify-between p-6 lg:px-8 " aria-label="Global">
	<div class="flex lg:flex-1">
	  <a href="#" class="-m-1.5 p-1.5">
		<span class="sr-only">Your Company</span>
		<img class="h-14 w-auto" src={Logo} alt="/" />
	  </a>
	</div>
	<div class="flex lg:hidden">
	  <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
		<span class="sr-only">Open main menu</span>
		<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
		  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
		</svg>
	  </button>
	</div>
	<div class="hidden lg:flex lg:gap-x-12">
	  <a href="#" class="text-[16px] font-semibold text-gray-900 hover:font-bold cursor-pointer">Home</a>
	  <a href="#" class="text-[16px] font-semibold text-gray-900 hover:font-bold cursor-pointer">Winners</a>
	  <a href="#" class="text-[16px] font-semibold text-gray-900 hover:font-bold cursor-pointer">Theaters</a>
	  <a href="#" class="text-[16px] font-semibold text-gray-900 hover:font-bold cursor-pointer">Contact Us</a>
	</div>
	<div class="hidden lg:flex lg:flex-1 lg:justify-end">
	  {/* <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> */}
	</div>
  </nav>
  );
};

export default Navbar;
