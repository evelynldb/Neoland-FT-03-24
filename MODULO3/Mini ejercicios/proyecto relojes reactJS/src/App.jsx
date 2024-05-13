import "./App.css";
import Countdown from "./components/Countdown";
import DigitalClock from "./components/DigitalClock";
import { Stopwatch } from "./components/Stopwatch";

function App() {
  return (
    <>
      <div>
        <h3>Reloj Digital------ 🕣</h3>
        <DigitalClock />
      </div>
      <div>
        <h3>Cuenta atrás------ 📆</h3>
        <Countdown />
      </div>
      <div>
        <h3>Cronómetro-------- ⏱</h3>
        <Stopwatch />
      </div>
    </>
  );
}

export default App;
