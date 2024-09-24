import React from "react";
import "./style.css";
import ContactImage from "../../../../assets/contactUs.svg";
const ContactUs = () => {
  return (
    <div className="mainContainer flex flex-center flex-column">
        <p className="h1 focus-color">Contact Us</p>
      <div className="contactUsContainer flex">
        <div className="contentContainer">
          <div className="contactUsImage">
            <img src={ContactImage} alt="contact us" width={"100%"} />
          </div>
          <p className="h3 focus-color">Request a call back</p>
          <p className="h2">We will contact you in the shortest time.</p>
        </div>
        <div className="contactUsFormContainer flex flex-column aling-center">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <textarea rows={10} type="text" placeholder="Full Name" />
          <div className="sendButton">
            <p className="h4 text-center">Send</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
