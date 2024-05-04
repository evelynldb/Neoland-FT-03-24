import { Title } from "../components";
import "./About.css";

export const About = () => {
  return (
    <div className="aboutContainer">
      <Title className={"titleMain"}>About</Title>

      <h1 className="aboutTitle"> Sobre la web y sus comienzos</h1>
      <p className="aboutParagraph">
        Esta es la página About. Todo empezó con un ejercicio y acabó con unos
        cocteles. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <br></br>
        Sed vitae sapien ac urna ultrices posuere. <br></br>
        Fusce consequat commodo urna, sed finibus massa. Curabitur euismod,
        velit sed consequat eleifend, eros nunc fringilla sem, vel commodo risus
        nisi sed libero{" "}
      </p>
    </div>
  );
};
