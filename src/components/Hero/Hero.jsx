import React from "react";
import "./Hero.css";
import Photo from "../../assets/Passport_Photograph.jpg";
import { LuGithub } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { LuLinkedin } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
const Hero = () => {
  return (
    <div className="HeroContainer">
      <div className="HeroContent">
        <h1>Hi, I'm Anmeet</h1>
        <br />
        <h2>Full Stack Developer</h2>
        <div className="herobutton">
          <button>Get in touch</button>
          <button>Resume</button>
          <div className="connect">
            <CiTwitter />
            <LuGithub />
            <LuLinkedin />
            <CiMail />
          </div>
        </div>
      </div>
      <div className="HeroImage">
        <img className="Photo" src={Photo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
