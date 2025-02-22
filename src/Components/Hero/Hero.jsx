/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import profile_image from "../../assets/profile_image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_image} alt="profile" />
      <h1>
        <span>I'm Sanket Shetty,</span> frontend developer based in India
      </h1>
      <p>
        I am frontend developer from Bengalore, India with 2 years of experiance
        in Rockwell Automation
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a href="/Sanket's Resume.pdf" target="_blank" rel="noopener noreferrer" className="anchor-link">
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
        <a href="/Sanket's Resume.pdf" target="_blank" className="anchor-link" download="/Sanket's Resume.pdf">
        <div className="hero-download-resume">
          Download Resume <i className="fa-solid fa-arrow-down"></i>
        </div>
        </a>
    </div>
  );
};

export default Hero;
