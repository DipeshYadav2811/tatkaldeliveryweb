import React from 'react'
import Hero from './components/Hero'
import './style.css'
import Services from './components/Services'
import TatkalFacts from './components/Facts'
import {JoinUsDetails, ServicesCardDetails} from '../landingPage/Constants'
import ContactUs from './components/ContactUS'
import { Element } from 'react-scroll'

const LandingPage = () => {
  return (
    <div>
      <Element name='hero'>
      <Hero />
      </Element>
      <Element name='services'>
      <Services blogHeader={"Our Services"} blogList={ServicesCardDetails} />
      </Element>
      <Element name='tatkalFacts'>
      {/* <TatkalFacts /> */}
      </Element>
      <Element name='joinUs'>
      <Services blogHeader={"Join Us"} blogList={JoinUsDetails} />
      </Element>
      <Element name='contactUs'>
      <ContactUs />
      </Element>
    </div>
  )
}

export default LandingPage