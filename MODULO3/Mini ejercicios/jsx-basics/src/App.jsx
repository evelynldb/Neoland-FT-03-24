import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/**2. Renderiza “Buenos días” [6-12] , “Buenas tardes” [13-19] o “Buenas noches”[20-5] según el 
 * valor numérico asignado.
3. Recorrer los elementos de un array y renderizalos ⇒ Si os da un error de keys en 
la consola podéis usar el index como `key={index}` .
4. Mappea un array de objetos para pintarlos.
5. Crea un botón que modifique un valor de false a true y renderice un contenido
 cuando este valor se modifique. */

function App() {
  const arr = ["a", "b", "c"];

  const [count, setCount] = useState(0); // variable, función = y defino el valor inicial, y uso la virable donde quiera
  const [texto, print] = useState("");
  const [texto2, print2] = useState(false);

  const actualizarEstado = () => {
    setCount((value) => {
      value = value == 23 ? -1 : value;
      return value + 1;
    });

    print(() => {
      if (count >= 6 && count < 12) {
        return "Buenos días";
      } else if (count >= 12 && count < 20) {
        return "Buenos tardes";
      } else {
        return "Buenos noches";
      }
    });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{texto}</p>
      <div>
        {arr.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div>
        <p>{texto2}</p>
        <button onClick={() => print2(() => "SALE!")}>Aparece!!</button>
      </div>
      <div className="card">
        <button onClick={() => actualizarEstado()}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
