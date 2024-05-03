import "./App.css";
import { Footer, Header, Paragraph, Title } from "./components";
import { Characters } from "./pages";
import { useEffect, useState } from "react";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    //ciclo de vida del componente: se monta, se desmonta y se actualiza
    //esto se ejecuta cuando arranca el componente, es decir, el app
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []); //  no tengo return, ni tengo array de dependencias

  return (
    <>
      <Header />
      <main>
        <Title className={"titleFilms"} text={"Project-components-advanced"} />
        <Paragraph
          className={"paragraphCharacter"}
          text="A continuación se muestran los personajes VIVOS"
        />
        <Characters data={characterList} />
      </main>
      <Footer />
    </>
  );
}

export default App;
