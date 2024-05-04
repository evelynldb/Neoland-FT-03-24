import "./Cocktails.css";

import { useState, useEffect } from "react";
import { Figure, Title } from "../components";

const Cocktails = () => {
  // Aquí inicializo un estado para almacenar los datos de los cocktails
  const [cocktails, setCocktails] = useState([]);

  // Aquí hacemos la solicitud a la API para obtener los cocktails
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

  return (
    <div id="cocktailsPage">
      <div className="titleContainer">
        <Title className={"titleMain"}>Cocktails</Title>
      </div>
      <div className="figuresContainer">
        {/* Mapeamos los cocktails para mostrar una lista */}
        {cocktails.map((cocktail, index) => (
          <Figure
            src={cocktail.strDrinkThumb}
            name={cocktail.strDrink}
            id={cocktail.idDrink}
            key={index} // tengo que meter el key para que no me dé error , aunque luego no lo use para nada.
          />
        ))}
      </div>
    </div>
  );
};

export default Cocktails;
