/* eslint-disable react/prop-types */
import "./Education.css";
/**los objetos en el array education no tienen un identificador único como parte de su estructura.
 * Por lo tanto, al utilizar JSON.stringify(item) se genera una cadena única para cada objeto,
 * lo que asegura que cada elemento en la lista tenga una clave única.
 * se utiliza JSON.stringify(item) para generar una representación en cadena de cada elemento del array,
 * lo que garantiza que la clave sea única para cada elemento.*/

const Education = ({ education }) => {
  return (
    <div className="educationCard">
      <div className="educationCard">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="educationItem">
              <div className="educationContent">
                <p className="name">📕 {item.name}</p>
                <p className="where">{item.where}</p>
                <p className="date">{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
