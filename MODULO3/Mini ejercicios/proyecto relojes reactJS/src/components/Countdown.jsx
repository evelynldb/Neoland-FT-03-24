import "./Countdown.css";
import { useState, useEffect } from "react";

/**vamos a usar useState para definir el tiempo dentro de la constante time y
 * useEffect para que la variable countDownDate nos recoja el valor del tiempo
 * en milisegundos de un string como "Jan 1, 2020 00:00:00".  */

const Countdown = () => {
  const [time, setTime] = useState(""); // Estado para almacenar el tiempo restante

  useEffect(() => {
    let countDownDate = new Date("May 13, 2024 21:22:00").getTime(); // Obtenemos la fecha actual y la convertimos en tiempo en milisegundos

    let x = setInterval(() => {
      // Función para actualizar el tiempo restante cada segundo
      let now = new Date().getTime(); // Obtenemos la fecha y hora actual

      // Calculamos la diferencia entre la fecha de cuenta regresiva y la fecha actual
      let distance = countDownDate - now;

      // Calculamos días, horas, minutos y segundos restantes
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Actualizamos el estado con el tiempo restante en el formato deseado
      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime("CUENTA ATRÁS TERMINADA");
      }
    }, 1000);

    // Limpiamos el temporizador cuando el componente se desmonta
    return () => clearInterval(x);
  }, []);

  return (
    <div className="countdown">
      {/* Mostramos el tiempo restante */}
      <h2>{time}</h2>
    </div>
  );
};

export default Countdown;
