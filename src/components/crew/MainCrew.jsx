import React from 'react'
import Charith from "../../assets/Cast/charith.jpg"
import Ravi from "../../assets/Cast/raviya.png"
import Giriraj from "../../assets/Cast/giriraj.jpg"

export default function MainCrew() {
  return (
    <div className="mt-[120px]">
      <div class="font-[sans-serif] my-4">
            <div class="max-w-5xl max-lg:max-w-2xl mx-auto">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-gray-800 text-4xl font-extrabold">Main Crew</h2>
                    {/* <p class="text-gray-600 text-sm mt-4 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Ullamco nisi enim ipsum irure laboris ad ut. Esse cupidatat deserunt magna aute.</p> */}
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center mt-12">
                    <div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
                        <img src={Charith} class="w-full h-60 object-contain object-top bg-gray-200" />

                        <div class="p-4">
                            <h4 class="text-gray-800 text-base font-bold">චරිත් අබේසිංහ</h4>
                            <p class="text-gray-600 text-xs mt-1">අධ්‍යක්ෂණය</p>

                            {/* <div class="mt-4">
                                <p class="text-gray-600 text-sm leading-relaxed">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>
                            </div> */}

                        </div>
                    </div>

                    <div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
                        <img src={Ravi} class="w-full h-60 object-contain object-top bg-gray-200" />

                        <div class="p-4">
                            <h4 class="text-gray-800 text-base font-bold">ආචාර්ය රවී ලියනගේ </h4>
                            <p class="text-gray-600 text-xs mt-1">නිෂ්පාදනය</p>
{/* 
                            <div class="mt-4">
                                <p class="text-gray-600 text-sm leading-relaxed">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>
                            </div> */}

                        </div>
                    </div>

                    
                    <div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
                        <img src={Giriraj} class="w-full h-60 object-contain object-top bg-gray-200" />

                        <div class="p-4">
                            <h4 class="text-gray-800 text-base font-bold">ගිරිරාජ් කෞශල්‍ය </h4>
                            <p class="text-gray-600 text-xs mt-1">තිර රචනය</p>

                            {/* <div class="mt-4">
                                <p class="text-gray-600 text-sm leading-relaxed">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>
                            </div> */}

 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}
