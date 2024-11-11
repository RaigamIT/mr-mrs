import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import Characters from "../components/crew/Characters"
import MainCrew from "../components/crew/MainCrew"

function AboutUs() {
  return (
    < >
        <Navbar/>
        <MainCrew/>
        <Characters/>    
        <Footer/>
    </>
  )
}

export default AboutUs
