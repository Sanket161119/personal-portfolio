/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import profile_image from "../../assets/profile_image.jpg";
import infinite from "../../assets/infinite.PNG";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={infinite} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate frontend developer with a strong background in
              creating dynamic and responsive web applications. I specialize in
              HTML, CSS, JavaScript, and modern frameworks like React JS and
              Angular.
            </p>
            <p>
              With a keen eye for detail and a commitment to delivering
              high-quality code, I enjoy turning complex problems into simple,
              beautiful, and intuitive designs. I am always eager to learn new
              technologies and improve my skills.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Angular</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIANCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
