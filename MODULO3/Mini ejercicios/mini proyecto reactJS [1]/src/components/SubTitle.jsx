import "./SubTitle.css";
import PropTypes from "prop-types";

export const SubTitle = ({ text, className }) => {
  return <h2 className={className}>{text}</h2>;
};

SubTitle.propTypes = {
  text: PropTypes.string.isRequired, // Validación para la prop 'texto'
  className: PropTypes.string, // Validación opcional para la prop 'className'
};
