/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import "./Contact.scss";
import infinite from "../../assets/Images/infinite.svg";
import mail_icon from "../../assets/Images/mail_icon.svg";
import location_icon from "../../assets/Images/location_icon.svg";
import call_icon from "../../assets/Images/call_icon.svg";
import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const formDataToSend = {
      ...formData,
      access_key: "7d928853-f485-435a-891e-4d1a161c7806",
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
      reset();
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
              <p>Bangalore, India</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91-9480461033</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="contact-right">
          <label htmlFor="userName">Your Name <span style={{color: "red"}}>*</span></label>
          <input
            className={errors.userName ? "error-input" : ""}
            type="text"
            placeholder="Enter your name"
            {...register("userName", { required: "Name is required" })}
          />
          {errors.userName && (
            <p className="error-message">{errors.userName.message}</p>
          )}

          <label htmlFor="email">Your Email <span style={{color: "red"}}>*</span></label>
          <input
            className={errors.email ? "error-input" : ""}
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email address is invalid",
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}

          <label htmlFor="message">Write your concern <span style={{color: "red"}}>*</span></label>
          <textarea
            className={errors.message ? "error-input" : ""}
            rows="6"
            placeholder="Enter your concern"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <p className="error-message">{errors.message.message}</p>
          )}

          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
