import React from 'react'

import Dinakshie from "../../assets/Cast/dinakshie.png"
import Uddika from "../../assets/Cast/Uddika.png"
import Mahendra from "../../assets/Cast/Mahendra.png"
import Sarath from "../../assets/Cast/Sarath.png"
import Mihiri from "../../assets/Cast/Mihira.png"
// import Piumi from "../../assets/Cast/piumi.jpg"
import Saman from "../../assets/Cast/Saman.png"
import Pahandi from "../../assets/Cast/Pahandi.png"

function Cast() {
  return (
    <div className='mt-10'>
<section class="bg-whit">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold font-serif text-gray-900 dark:text-white">Characters</h2>
          {/* <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p> */}
      </div> 
      <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="text-center text-gray-500 ">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={Dinakshie} alt="Bonnie Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">දිනක්ෂි ප්‍රියසාද්</a>
              </h3>
              <p>අංජලී</p>
           
          </div>
          <div class="text-center text-gray-500">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={Uddika} alt="Helene Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">උද්දික ප්‍රේමරත්න</a>
              </h3>
              <p>අනුෂ්ක</p>
 
          </div>
          <div class="text-center text-gray-500 ">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={Pahandi} alt="Sofia Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">පහන්දි නෙතාරා</a>
              </h3>
              <p>දියණිය </p>
          </div>
          <div class="text-center text-gray-500">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={Mahendra} alt="Jese Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">මහේන්ද්‍ර පෙරේරා</a>
              </h3>
              <p>අංජලීගේ පියා</p>
       
          </div>
          <div class="text-center text-gray-500 ">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={Sarath} alt="Joseph Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">සරත් කොතලාවල </a>
              </h3>
              <p>ගෙවල් අයිතිකරු</p>
            
          </div>
          <div class="text-center text-gray-500 ">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={Mihiri} alt="Sofia Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">මිහිර සිරිතිලක</a>
              </h3>
              <p>කනේමල්</p>
          </div>
          {/* <div class="text-center text-gray-500">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={Piumi} alt="Sofia Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">පියුමි බොතේජු</a>
              </h3>
              <p>යසවතී</p>
          </div> */}
          <div class="text-center text-gray-500 ">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={Saman} alt="Sofia Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">සමන් හේමරත්න</a>
              </h3>
              <p>බායි</p>
          </div>
          

      </div>  
  </div>
</section>

    </div>
  )
}

export default Cast