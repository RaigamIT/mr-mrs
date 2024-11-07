import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";



function ReviewButton() {
    return (
        <div>
            <div class="bg-gray-100 py-20">
                <div class="max-w-4xl mx-auto text-center">
                    <h1 class="text-4xl font-bold text-gray-900">Drop a review</h1>
                    {/* <p class="mt-4 text-lg text-gray-600">Join our community and grow with us.</p> */}
                    <div class="mt-8 flex justify-center space-x-4">
                        <div className='bg-[#0094F9] py-2 gap-1 px-4 rounded flex items-center'>
                            <Link to="/reviewus" class="bg-[0094F9] text-white ">Rate Us</Link>
                            <IoIosArrowDropright className='text-white' />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ReviewButton
