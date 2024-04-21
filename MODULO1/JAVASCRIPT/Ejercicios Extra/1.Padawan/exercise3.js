/**Usa un bucle para crear 3 arrays de peliculas filtrados por categorias.
 * Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y
 *  pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
 */

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const durationSmall = [];
const durationMedium = [];
const durationBig = [];

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    durationSmall.push(movie);
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    durationMedium.push(movie);
  } else {
    durationBig.push(movie);
  }
}

console.log("Películas pequeñas (< 100 minutos):");
console.log(durationSmall);

console.log("Películas medianas (100 - 200 minutos):");
console.log(durationMedium);

console.log("Películas grandes (> 200 minutos):");
console.log(durationBig);
