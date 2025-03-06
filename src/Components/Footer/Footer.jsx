/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";
import TermsConditions from "../terms-conditions/TermsConditions";
import PrivacyPolicy from "../privacy-policy/privacyPolicy";

const Footer = () => {
  const [isSubscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] =useState(false);

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setSubscribed(!isSubscribed);
      setEmailError(""); // Clear any previous error
      setEmail(""); // to make input field empty when subscribed
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleOpenTerms = () => {
    setIsModalOpen(true);
  };
  const handleCloseTerms = () => {
    setIsModalOpen(false);
  };
  const handleOpenPolicy = () => {
    setIsPolicyOpen(true);
  }
  const handleClosePolicy = () => {
    setIsPolicyOpen(false);
  }
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // Validate email and set error state
    if (validateEmail(inputValue)) {
      setEmailError(""); // Clear error if email is valid
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>Welcome to our website! Stay updated with our latest news.</p>
        </div>
        <div className="footer-top-right">
          <div
            className={
              emailError ? "footer-email-input-error" : "footer-email-input"
            }
          >
            <img src={user_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {emailError && <p className="error">{emailError}</p>}
          <div
            className={isSubscribed ? "footer-subscribed" : "footer-subscribe"}
            onClick={handleSubscribe}
          >
            {isSubscribed ? "Unsubscribe" : "Subscribe"}
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Sanket Shetty. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p onClick={handleOpenTerms}>Term of services</p>
          <p onClick={handleOpenPolicy}>Privacy policy</p>
        </div>
      </div>
      <div className="social-media">
        <a href="#">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <TermsConditions open={isModalOpen} onClose={handleCloseTerms} />
      <PrivacyPolicy open={isPolicyOpen} onClose={handleClosePolicy}/>
    </div>
  );
};

export default Footer;
