import React from "react";
import "./style.css";
import Logo from "../../assets/logo.png";
import { NAV_LINKS } from "./constants";

const NavBar = () => {
  return (
    <div className="navConatiner flex flex-between">
      <div className="logoContainer">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navigationLinks flex flex-between">
        <div className="linksContainer">
          <ul className="linkList flex flex-center">
            {NAV_LINKS.map((link,index) => {
              return <li key={index} className="links">{link.label}</li>;
            })}
          </ul>
        </div>
        <div className="contactUsCta">Contact Us</div>
      </div>
    </div>
  );
};

export default NavBar;
