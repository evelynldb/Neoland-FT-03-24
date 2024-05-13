import "./DigitalClock.css";
import { useEffect, useState } from "react";

/**Por un lado tenemos que definir useState para que nos setée la hora a través de una función, y por otro definir
 * un useEffect que nos recoja la hora local a través de una función y la ejecute tanto al cargar la página
 * como al pasar a través del intervalo de un segundo. */
const DigitalClock = () => {
  const [clockState, setClockState] = useState(); //declaramos clockState para almacenar la hora actual del reloj digital

  useEffect(() => {
    //usamos useEffect para hacer efecto secundario cuando el componente se moonte en el DOM.
    setInterval(() => {
      //con setInterval actualizamos el estado de clockState cada segundo
      const date = new Date(); //date recoge la info de la hora local atv de date.toLocal..., y el valor que reoja será el que se aplica a clockState, atv de setClockState cada 1000ml (1seg)
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="digital-clock">
      <h2>{clockState}</h2>
    </div>
  );
};

export default DigitalClock;
