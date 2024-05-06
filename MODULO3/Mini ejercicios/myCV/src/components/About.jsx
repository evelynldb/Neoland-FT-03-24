import "./About.css";

const About = (hero) => {
  return (
    <div className="about">
      <div className="aboutCard">
        <h2>About Me: </h2>
        {hero.aboutMe.map((item, index) => {
          return (
            <div key={index} className="aboutItem">
              <p className="info">📕 {item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
