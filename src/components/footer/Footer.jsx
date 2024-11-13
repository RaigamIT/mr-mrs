import React from 'react'
import { AiFillTikTok } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    return (

        <section class=" ">
            <div class="max-w-screen-xl font-serif text-gray-600 px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <div>
                    <p>Mr.මිසිස් in theaters nationwide from January #, 2025</p>
                    <p>Directed by: Charith Abeysinghe</p>
                    <p>Produced by: Dr. Ravi Liyanage</p>

                </div>
                <div class="flex justify-center mt-8 space-x-6">
                    <a href="https://web.facebook.com/mrmisiss" class="text-black hover:text-gray-500">
                        <span class="sr-only">Facebook</span>
                        <FaFacebookF/>
                    </a>
                    <a href="https://www.tiktok.com/@mr.misis?is_from_webapp=1&sender_device=pc" class="text-black hover:text-gray-500">
                        <span class="sr-only">Tiktok</span>
                        <SiTiktok/>
                    </a>
                    <a href="https://youtube.com/@mrmisiss?si=LQNPQFPXckN7fiip" class="text-black hover:text-gray-500">
                        <span class="sr-only">Tiktok</span>
                        <IoLogoYoutube/>
                    </a>



                </div>
                <p class="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2024 Raigam IT Department, All rights reserved.
                </p>
            </div>

        </section>
    );
};

export default Footer;