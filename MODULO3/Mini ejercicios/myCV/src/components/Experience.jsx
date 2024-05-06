/* eslint-disable react/prop-types */
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div className="experienceCard">
      <div className="experienceCard">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="experienceItem">
              <p className="name">📕 {item.name}</p>
              <p className="where">{item.where}</p>
              <p className="date">{item.date}</p>
              <p className="description">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
