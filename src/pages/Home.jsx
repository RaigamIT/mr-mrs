import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import Body from '../components/body/Body'
import Trailer from '../components/trailer/Trailer'

function Home() {
  return (
    <div className='overflow-x-hidden '>

        {/* Navbar */}
        <Navbar/>

        <div className="absolute inset-0 w-full h-full flex flex-col mb-5">
          {/* Body */}
          <Body/>

          {/* Trailer */}
          <Trailer/>

          {/* Footer */}
          <Footer/>
        </div>
        
          
          
        {/* Footer */}
        {/* <Footer/> */}
    </div>
  )
}

export default Home
