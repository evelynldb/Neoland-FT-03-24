import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homeContainer">
      <h1 className="homeTitle"> Te damos la bienvenida a la web</h1>
      <p className="homeParagraph">
        Esta es la página principal de la web. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. <br></br>
        Sed vitae sapien ac urna ultrices posuere. <br></br>
        Fusce consequat commodo urna, sed finibus massa. Curabitur euismod,
        velit sed consequat eleifend, eros nunc fringilla sem, vel commodo risus
        nisi sed libero.Sed vitae sapien ac urna ultrices posuere. Fusce
        consequat commodo urna, sed finibus massa. Curabitur euismod, velit sed
        consequat eleifend, eros nunc fringilla sem, vel commodo risus nisi sed
        libero.
        <br></br>
        Sed vitae sapien ac urna ultrices posuere.
      </p>
      <div className="visitedContainer">
        <span className="visitedPageLink">Visita la página de cocktails: </span>
        <Link to="/cocktails">Cocktails</Link>
      </div>
    </div>
  );
};
