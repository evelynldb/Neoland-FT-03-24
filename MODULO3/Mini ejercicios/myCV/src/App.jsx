import "./App.css";
import { CV } from "./CV/CV";
import Hero from "./components/Hero";
import Education from "./components/Education";
import { useState } from "react";
import Experience from "./components/Experience";
import About from "./components/About";
import More from "./components/More";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <main>
      <div className="App">
        <Hero hero={hero} />
        <About aboutMe={hero.aboutMe} />
        <div className="button-container">
          <div className="divider" />

          <button
            className="custom-btn btn-4"
            onClick={() => setShowEducation(true)}
          >
            EDUCATION
          </button>
          <button
            className="custom-btn btn-4"
            onClick={() => setShowEducation(false)}
          >
            EXPERIENCE
          </button>
          <div className="divider" />
        </div>
        <div>
          {showEducation ? (
            <Education education={education} />
          ) : (
            <Experience experience={experience} />
          )}
        </div>
        <div>
          <More
            languages={languages}
            habilities={habilities}
            volunteer={volunteer}
          />
        </div>
        ;
      </div>
    </main>
  );
}

export default App;
