/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Hero.scss";
import profile_image from "../../assets/profile_image.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_image} alt="Sanket Shetty" />
      <h1>
        <span>I'm Sanket Shetty,</span> frontend developer based in India
      </h1>
      <p>
        I am a frontend developer from Bangalore, India with 2 years of experience
        in Rockwell Automation.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <Link to="/personal-portfolio/contact" className="anchor-link">
            Connect with me
          </Link>
        </div>
        <a 
          href="/personal-portfolio/Sanket's Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="anchor-link"
        >
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
      <a 
        href="/personal-portfolio/Sanket's Resume.pdf" 
        target="_blank" 
        className="anchor-link" 
        download="/Sanket's Resume.pdf"
      >
        <div className="hero-download-resume">
          Download Resume <i className="fa-solid fa-arrow-down"></i>
        </div>
      </a>
    </div>
  );
};

export default Hero;
