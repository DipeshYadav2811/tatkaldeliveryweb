import React from "react";
import ServicesCard from "../ServicesCard";
import "./style.css";

const Services = ({blogHeader, blogList }) => {
  return (
    <div className="servicesContainer mainContainer">
      <div className="servicesHeading text-center">
        <p className="h1 focus-color">{blogHeader}</p>
      </div>
      <div className="flex flex-center">
        <div className="sevicesCardsContainer flex flex-center flex-wrap">
          {blogList.map((detail,index) => (
            <div key={index}>
            <ServicesCard
              cardHeader={detail?.title}
              cardDesc={detail?.description}
              cardList={detail?.points}
              isButton={detail.withbutton}
              ButtonTitle={detail.buttonTitle}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
