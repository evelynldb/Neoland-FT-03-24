import { hobbies } from "../data/hobbies";
import "./Languages.css";

export const Languages = () => {
  const { language, wrlevel, splevel } = hobbies.languages;

  return (
    <div className="languagesContainer">
      <h2 className="languagesTitle">LANGUAGES</h2>
      <div className="languagesInfo">
        <h3>Language: {language}</h3>
        <p>Wrlevel: {wrlevel}</p>
        <p>Splevel: {splevel}</p>
      </div>
    </div>
  );
};
