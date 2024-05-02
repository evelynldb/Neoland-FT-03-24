import "./App.css";
import { Blog, Image, Paragraph, Prueba, SubTitle, Title } from "./Components";

function App() {
  return (
    <>
      <Prueba />
      <Title className={"Title"} text={"Ejercicio de props-basics"} />
      <SubTitle className={"SubTitle"} text={"Este es un blog de ejemplo"} />
      <Image
        src="/public/react.png"
        alt="Logo react"
        width="300"
        height="160"
      />
      <Paragraph
        className={"Paragraph"}
        text={"Este es el párrafo del ejercicio"}
      />
      <div>
        <h1>Blog</h1>
        <Blog />
      </div>

      <p className="read-the-docs">
        Haz click en el botón para cambiar el contador.
      </p>
    </>
  );
}

export default App;
