import "./Cocktail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListadoDetails } from "../components";

export const Cocktail = () => {
  const { idDrink } = useParams(); // Obtenemos el ID del cocktail de los parámetros de la URL
  const [cocktail, setCocktail] = useState(null);

  // Aquí hacemos la solicitud a la API para obtener los detalles del cocktail específico, por eso usamos id.
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then((response) => response.json())
      .then((data) => setCocktail(data.drinks[0]));
  }, [idDrink]);

  return (
    <div>
      {/* Mostramos los detalles del cocktail utilizando el componente ListadoDetails */}
      {console.log(cocktail, idDrink)}
      {cocktail && <ListadoDetails cocktail={cocktail} />}
    </div>
  );
};
