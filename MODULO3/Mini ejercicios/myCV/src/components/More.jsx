/* eslint-disable react/prop-types */
import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  //props
  console.log("languages", languages);

  return (
    <div className="moreContainer">
      <div className="moreItem">
        <h2>Languages: </h2>
        <ul>
          {languages.map((language, index) => (
            <li key={index}>
              {language.language} | Writing {language.wrlevel} | Speaking{" "}
              {language.splevel}
            </li>
          ))}
        </ul>
      </div>
      <div className="moreItem">
        <h2>Habilities: </h2>
        <ul>
          {habilities.map((habilitie, index) => (
            <li key={index}>{habilitie}</li>
          ))}
        </ul>
      </div>
      <div className="moreItem">
        <h2>Volunteer: </h2>
        <ul>
          {volunteer.map((item, index) => (
            <li key={index}>
              <p>Name: {item.name}</p>
              <p>Where: {item.where}</p>
              <p>Description: {item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default More;
