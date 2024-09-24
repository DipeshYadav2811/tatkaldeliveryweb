import React from 'react'
import HeroImage from '../../../../assets/heroImage.svg';


const Hero = () => {
  return (
    <div className='heroContainer mainContainer flex flex-between'>
        <div className="leftHero">
            <div className="heroHeading h1">
            A trusted provider of courier services.
            </div>
            <div className='heroSubText h6'>
            We deliver your products safely to your home in a reasonable time.
            </div>
            <div className='heroCta h2'>
                Get Started
            </div>
        </div>
        <div className="rightHero">
            <img src={HeroImage} alt='Hero' width={'100%'} />
        </div>
    </div>
  )
}

export default Hero