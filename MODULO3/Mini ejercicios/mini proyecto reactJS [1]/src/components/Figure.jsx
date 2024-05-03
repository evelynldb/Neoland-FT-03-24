/* eslint-disable react/prop-types */
import "./Figure.css";

export const Figure = ({ name, status, origin, src }) => {
  return (
    <figure>
      <h3>{name}</h3>
      <p>{status}</p>
      <img src={src} alt={name} />
      <figcaption>{origin}</figcaption>
    </figure>
  );
};
