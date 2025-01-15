import React, { useState } from "react";
import "./style.css";
import Logo from "../../assets/logo.png";
import { NAV_LINKS } from "./constants";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navConatiner flex flex-between">
      <div className="logoContainer">
        <img src={Logo} alt="logo" />
      </div>
      <div className="hamburgerMenu" onClick={toggleMenu}>
        ☰
      </div>
      <div
        className={`navigationLinks ${
          isMenuOpen ? "dropdownMenu show" : "dropdownMenu"
        }`}
      >
        <ul className="linkList flex flex-center">
          {NAV_LINKS.map((link, index) => (
            <li key={index} className="links">
              <Link
                smooth={true}
                duration={500}
                to={link.link}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="contactUsCta">
          <Link smooth={true} duration={500} to="contactUs">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
