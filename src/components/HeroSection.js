import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { LoginContext } from "../App";
import { useContext } from "react";

function HeroSection() {
  const { login, setLogin } = useContext(LoginContext);
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ANALYZE YOUR MRI SCAN</h1>
      <p>Be sure about your scans through AI!</p>
      {!login && (
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            // onClick={console.log('hey')}
          >
            LEARN MORE <i className="far fa-lightbulb"></i>
          </Button>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
