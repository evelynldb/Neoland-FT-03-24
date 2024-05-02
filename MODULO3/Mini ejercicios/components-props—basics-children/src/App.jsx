import "./App.css";
import { Footer, Header, Title } from "./components";
import { dataFilms } from "./data/data";
import { Films } from "./pages/Films";

function App() {
  return (
    <>
      <Header />
      <main>
        <Title
          className={"titleFilms"}
          text={"Películas para toda la familia"}
        />
        <Films data={dataFilms} />
      </main>
      <Footer />
    </>
  );
}

export default App;
