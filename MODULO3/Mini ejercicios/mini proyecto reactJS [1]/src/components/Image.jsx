import "./Image.css";
import PropTypes from "prop-types";

export const Image = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      className="className"
      alt={alt}
      width={width}
      height={height}
    />
  );
};

Image.propTypes = {
  texto: PropTypes.string.isRequired, // Validación para la prop 'texto'
  src: PropTypes.string.isRequired, // Validación para la prop 'texto'
  alt: PropTypes.string.isRequired, // Validación para la prop 'texto'
  width: PropTypes.string.isRequired, // Validación para la prop 'texto'
  height: PropTypes.string.isRequired, // Validación para la prop 'texto'

  className: PropTypes.string, // Validación opcional para la prop 'className'
};
