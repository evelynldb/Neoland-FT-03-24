// **Iteración #1: Mix for e includes**

// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un
//nuevo array con las categorías de las películas e imprime por consola el array de categorías.
//Ten en cuenta que las categorías no deberían repetirse.
//Para filtrar las categorías puedes ayudarte de la función **.includes()**

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const moviesCategories = [];

for (let movie of movies) {
  for (let categorie of movie.categories) {
    !moviesCategories.includes(categorie) && moviesCategories.push(categorie); //si la primera parte es falsa, no se ejecuta la segunda, por tanto no hace falta poner nada más.
  }
}

console.log(moviesCategories);

//Otra forma más larga

const moviesFilter = (array) => {
  const newArray = [];
  for (let movie of array) {
    for (let category of movie.categories) {
      if (!newArray.includes(category)) {
        newArray.push(category);
      }
    }
  }
  return newArray;
};
console.log(moviesFilter(movies));
