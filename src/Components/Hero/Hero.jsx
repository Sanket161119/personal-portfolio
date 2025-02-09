/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_image.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_image} alt="profile"/>
        <h1><span>I'm Sanket Shetty,</span> frontend developer based in India</h1>
        <p>I am frontend developer from Bengalore, India with 2 years of experiance in Rockwell Automation</p>
        <div className="hero-action">
            <div className="hero-connect">
                Connect with me
            </div>
            <div className="hero-resume">
                My Resume
            </div>
        </div>
    </div>
  )
}

export default Hero