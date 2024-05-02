import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./Components/Tiitle/Title";
import SubTitle from "./Components/SubTitle/SubTitle";
import Image from "./Components/Image/Image";
import Paragraph from "./Components/Paragraph/Paragraph";

function App() {
  const [count, setCount] = useState(0);

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

      <Title />
      <SubTitle />
      <Image />
      <Paragraph />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Haz click en el botón para cambiar el contador.
      </p>
    </>
  );
}

export default App;
