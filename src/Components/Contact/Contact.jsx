/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import "./contact.css";
import infinite from "../../assets/infinite.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.userName) {
      newErrors.userName = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const formDataToSend = {
        ...formData,
        access_key: "7d928853-f485-435a-891e-4d1a161c7806"
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSend),
      }).then((res) => res.json());

      if (res.success) {
        formRef.current.reset();
        setFormData({ userName: "", email: "", message: "" }); // Reset form data
        setErrors({}); // Clear errors
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear specific error on input change
    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={infinite} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            If you have any questions about my portfolio or want to discuss
            potential collaborations, feel free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>sankshetty@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bengalore, India</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91-9480461033</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right" ref={formRef}>
          <label htmlFor="">Your Name</label>
          <input
            className={errors.userName ? "error-input" : ""}
            type="text"
            placeholder="Enter your name"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
          {errors.userName && <p className="error-message">{errors.userName}</p>}
          <label htmlFor="">Your Email</label>
          <input
            className={errors.email ? "error-input" : ""}
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
          <label htmlFor="">Write your concern</label>
          <textarea
            className={errors.message ? "error-input" : ""}
            name="message"
            rows="6"
            placeholder="Enter your concern"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
