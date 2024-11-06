import React from 'react'
import { AiFillTikTok } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    return (

        <section class="bg-white ">
            <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav class="flex flex-wrap justify-center -mx-5 -my-2">
                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            About
                        </a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Blog
                        </a>
                    </div>

                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Contact
                        </a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Terms
                        </a>
                    </div>
                </nav>
                <div class="flex justify-center mt-8 space-x-6">
                    <a href="https://web.facebook.com/mrmisiss" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Facebook</span>
                        <FaFacebookF/>
                    </a>
                    <a href="https://www.tiktok.com/@mr.misis?is_from_webapp=1&sender_device=pc" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Tiktok</span>
                        <SiTiktok/>
                    </a>
                    <a href="https://youtube.com/@mrmisiss?si=LQNPQFPXckN7fiip" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Tiktok</span>
                        <IoLogoYoutube/>
                    </a>



                </div>
                <p class="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2024 Raigam IT Division, Inc. All rights reserved.
                </p>
            </div>

        </section>
    );
};

export default Footer;