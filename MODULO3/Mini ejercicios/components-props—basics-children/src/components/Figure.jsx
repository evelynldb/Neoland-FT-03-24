import "./Figure.css";
import PropTypes from "prop-types";

export const Figure = ({ title, src }) => {
  return (
    <figure>
      <h3>{title}</h3>
      <img src={src} alt={title} />
    </figure>
  );
};

Figure.propTypes = {
  title: PropTypes.string.isRequired, // Validación para la prop 'texto'
  src: PropTypes.string.isRequired, // Validación para la prop 'texto'
};
