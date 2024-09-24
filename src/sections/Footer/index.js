import React from 'react';
import './style.css';
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='mainContainer footerContainer'>
        <div className='footerLogo'>
            <img src={Logo} alt='Logo' width={'20%'} />
        </div>
    </div>
  )
}

export default Footer