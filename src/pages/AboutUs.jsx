import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import Characters from "../components/crew/Characters"
import MainCrew from "../components/crew/MainCrew"

function AboutUs() {
  return (
    <div className="">
        <Navbar/>
        <MainCrew/>
        <Characters/>    
        <Footer/>
    </div>
  )
}

export default AboutUs
