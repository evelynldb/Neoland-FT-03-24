import { hobbies } from "../data/hobbies";
import "./SongsHeard.css";

const SongsHeard = () => {
  const songsHeard = hobbies.songsHeard;
  return (
    <div className="songsHeardContainer">
      <h2>SONGS HEARD</h2>
      <ul>
        {songsHeard.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongsHeard;
