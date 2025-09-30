import React from 'react'
import NavBar from '../sections/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../sections/Footer'
import { useLocation } from 'react-router-dom';

const EnteryPoint = () => {
  const location = useLocation();
  const hideNavBar = location.pathname === '/privacy-policy' || location.pathname === '/terms-and-conditions';
  return (
    <div>
        {/* {hideNavBar ? null : <NavBar />} */}
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default EnteryPoint