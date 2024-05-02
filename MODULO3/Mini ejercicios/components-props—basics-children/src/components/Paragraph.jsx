import "./Paragraph.css";
import PropTypes from "prop-types";

export const Paragraph = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired, // Validación para la prop 'texto'
  className: PropTypes.string, // Validación opcional para la prop 'className'
};
