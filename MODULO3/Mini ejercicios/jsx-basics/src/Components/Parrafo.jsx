/** HACEMOS EL DESTRUCTURING EN OTRA LINEA */
import PropTypes from "prop-types";
export const Parrafo = (props) => {
  const { texto, className } = props;
  console.log("🚀 ~ Parrafo ~ props:", props);

  return <p className={className}>{texto}</p>;
};
Parrafo.propTypes = {
  texto: PropTypes.string.isRequired, // Validación para la prop 'texto'
  className: PropTypes.string, // Validación opcional para la prop 'className'
};

/**
 * 
 * COMPONENTE HACIENDO EL DESTRUCTURIN EN LOS PARENTESIS DE LAS PROPS
 * 
 * 
 * export const Parrafo = ({ texto, className }) => {
  return <p className={className}>{texto}</p>;
};*/
