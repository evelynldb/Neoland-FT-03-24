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
  const arr = ["Aa", " ", "Bb", "Cc"];

  const [count, setCount] = useState(0); // variable, función = y defino el valor inicial, y uso la variable donde quiera
  const [texto, setTexto] = useState("");
  const [texto2, setTexto2] = useState(false);

  const actualizarEstado = () => {
    setCount((value) => {
      //aquí le digo cómo funciona el contador. podría decir decirle aquí que fuera de 5 en 5.
      value = value == 23 ? -1 : value;
      return value + 1;
    });

    setTexto(() => {
      //aquí le digo como actualiza el texto, en función del count
      if (count >= 6 && count < 12) {
        return "Buenos días";
      } else if (count >= 12 && count < 20) {
        return "Buenas tardes";
      } else {
        return "Buenas noches";
      }
    });
  };

  const toggleTexto2 = () => {
    setTexto2(!texto2);
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
      <h2>{texto}</h2>
      <div>
        {arr.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div>
        <button onClick={toggleTexto2}>Aparece!!</button>
        {texto2 && <p>Aparezco y me voy</p>}
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
