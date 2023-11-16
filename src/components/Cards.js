import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Info Regarding Brain Tumor</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/tumor.jpg"
              text="The human brain: a complex and dynamic organ orchestrating thoughts, emotions, and bodily functions with trillions of connections."
              label="Human Brain"
              path="/services"
            />
            <CardItem
              src="images/detected.jpg"
              text="MRI: A non-invasive medical imaging method using magnetic fields and radio waves to create detailed, radiation-free images of internal body structures for diagnosing various conditions."
              label="MRI Scans"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/tumor.jpg"
              text="The human brain: a complex and dynamic organ orchestrating thoughts, emotions, and bodily functions with trillions of connections."
              label="Human Brain"
              path="/services"
            />
            <CardItem
              src="images/mri.jpg"
              text="MRI: A non-invasive medical imaging method using magnetic fields and radio waves to create detailed, radiation-free images of internal body structures for diagnosing various conditions."
              label="MRI Scans"
              path="/services"
            />
            <CardItem
              src="images/detected.jpg"
              text="Explore the hidden waterfall deep in the Amazom forest"
              label="Tumor"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
