import "./Sports.css";
import { hobbies } from "../data/hobbies";

const Sports = () => {
  // Extraemos los datos de la propiedad sports de hobbies
  const sports = hobbies.sports;

  return (
    <div className="sportsContainer">
      <h2 className="sportsTitle">SPORT</h2>
      <ul className="sportsList">
        {sports.map(
          (
            sport,
            index //como la propiedad sports es un array, la recorro con .map
          ) => (
            <li key={index} className="sportItem">
              <h3>{sport.name}</h3>
              <p>Indoor: {sport.indoor ? "Yes" : "No"}</p>
              <p>Favorite Team: {sport.favoriteTeam}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Sports;
