/* eslint-disable react/prop-types */
import "./Title.css";

export const Title = ({ text, className }) => {
  // el children es un tipo de props.children
  return <h1 className={className}>{text}</h1>;
};
// Validación opcional para la prop 'className'
