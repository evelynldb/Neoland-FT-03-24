/* eslint-disable react/prop-types */
import { Figure } from "../components";
import "./Films.css";

export const Films = ({ data }) => {
  console.log(" 💪 movies:", data);
  const { movies } = data;

  return (
    <div id="filmsPage">
      {movies.map((item, index) => (
        <Figure src={item.image} title={item.title} key={index} />
      ))}
    </div>
  );
};
