import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="mainContainer footerContainer">
    <div className="flex flex-between">
      <div className="footerContent">
  <div className="aboutUsFooter flex flex-wrap">
    <div className="footerTitle">
      <h4 className="body1">About Us</h4>
      <p className="body1">
        At RAPIDROUTE LOGISTICS LLP, we are committed to revolutionizing the way parcels, packages, and goods are transported. As the creators of the Tatkal Delivery app, we specialize in providing efficient, reliable, and customer-centric solutions for packing, moving, and delivery services. Our mission is to ensure your logistics experience is seamless, safe, and stress-free.
      </p>
    </div>
    <div className="footerTitle">
      <h4 className="body1">Our Mission</h4>
      <p className="body1">
        At RAPIDROUTE LOGISTICS LLP, our mission is to revolutionize the logistics industry by delivering fast, reliable, and secure services that exceed customer expectations. We aim to make the process of packing, moving, and delivering goods seamless and stress-free. Through transparency, quality, and personalized solutions, we strive to build lasting trust with our customers and ensure their satisfaction at every step of the journey.
      </p>
    </div>
    <div className="footerTitle">
      <h4 className="body1">Why Choose Us?</h4>
      <p className="body1">
        At RAPIDROUTE LOGISTICS LLP, we pride ourselves on delivering professional expertise built on years of experience in the logistics industry. Our technology-driven solutions ensure seamless booking, tracking, and delivery management through the Tatkal Delivery app. Most importantly, we put our customers first, offering customizable services to meet their unique needs and exceeding expectations at every step.
      </p>
    </div>
    <div className="footerTitle">
      <h4 className="body1">What We Offer</h4>
      <p className="body1">
        At RAPIDROUTE LOGISTICS LLP, we provide comprehensive packing and moving services for homes, offices, and commercial setups, ensuring your belongings are safely handled and transported. Our parcel and package delivery services are tailored to meet the diverse needs of individuals and businesses, offering secure and timely deliveries. For small parcels requiring quick turnarounds, we also offer two-wheeler delivery services, combining convenience with efficiency. Backed by a reliable network of skilled drivers and modern technology, we ensure smooth and seamless logistics operations for every customer.
      </p>
    </div>
  </div>
</div>

    </div>
    <div className="footerLinks">
    <Link to={'/privacy-policy'} className="footerLinks">Privacy Policy</Link>
    <Link to={'/terms-and-conditions'} className="footerLinks">Terms & Conditions</Link>
    </div>
    </div>

  );
};

export default Footer;
