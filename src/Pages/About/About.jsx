
import "./About.scss";
import data from "../../assets/Json/about_content.json"; 

const About = () => {
  const { about } = data;

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>{about.title}</h1>
        <img src={about.infiniteImage} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about.profileImage} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            {about.description.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
          <div className="about-skills">
            {about.skills.map((skill, index) => (
              <div className="about-skill" key={index}>
                <p>{skill.name}</p>
                <hr style={{ width: skill.level }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        {about.achievements.map((achievement, index) => (
          <div className="about-achievement" key={index}>
            <h1>{achievement.count}</h1>
            <p>{achievement.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
