import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import Body from '../components/body/Body'
import Trailer from '../components/body/Trailer'
import Counter from '../components/body/Counter'
// import ReviewButton from '../components/body/ReviewButton'
import Reviews from '../components/body/Reviews'
import BackToTop from '../components/body/BackToTop'


function Home() {
  return (
    <div className='bg-blue-500 overflow-hidden w-full'>

        {/* Navbar */}
        <Navbar/>

        <div className="absolute inset-0 w-full h-full flex flex-col mb-5">
          {/* Body */}
          <Body/>



          <Counter/>

          {/* Trailer */}
          <Trailer/>

          <Reviews/>

          <BackToTop/>

       

          {/* Footer */}
          <Footer/>
        </div>
        
          
          
        {/* Footer */}
        {/* <Footer/> */}
    </div>
  )
}

export default Home
