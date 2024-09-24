import React from 'react'
import Hero from './components/Hero'
import './style.css'
import Services from './components/Services'
import TatkalFacts from './components/Facts'
import {JoinUsDetails, ServicesCardDetails} from '../landingPage/Constants'
import ContactUs from './components/ContactUS'
import Footer from '../../sections/Footer'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services blogHeader={"Our Services"} blogList={ServicesCardDetails} />
      <TatkalFacts />
      <Services blogHeader={"Join Us"} blogList={JoinUsDetails} />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default LandingPage