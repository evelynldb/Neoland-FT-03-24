import { Link, Outlet } from "react-router-dom";
import { getHeroes } from "../data/data";
import { HeroeDetail } from "../components/HeroeDetail";

const Heroes = () => {
  const heroes = getHeroes();
  return (
    <>
      <div>
        <h1>All heroes 🦸‍♂️🦸‍♀️</h1>
        <ul>
          {heroes.map((heroe) => (
            <li key={heroe.id}>
              <Link to={`/heroe/${heroe.id}`}>
                <HeroeDetail heroe={heroe} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Heroes;
