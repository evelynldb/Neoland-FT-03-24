import "./Movies.css";
import { hobbies } from "../data/hobbies";

export const Movies = () => {
  const movies = hobbies.movies;
  return (
    <div className="moviesContainer">
      <h2 className="moviesTitle">MOVIES</h2>
      {movies.map((movie, index) => (
        <div key={index} className="movieItem">
          <h3>{movie.name}</h3>
          <p>Type: {movie.type}</p>
          <p>Gender: {movie.gender}</p>
          <p>Vote: {movie.vote}</p>
        </div>
      ))}
    </div>
  );
};
