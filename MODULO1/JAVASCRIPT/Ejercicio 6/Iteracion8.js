/*Iteración #8: Bonus
6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para encontrar el genero 'RPG' en el 
array .gender.
*/

const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Legend of Zelda: Breath of the wild",
    genders: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];

const videoFilter2 = videogames.filter((video) =>
  video.genders.includes("RPG")
);
const media =
  videoFilter2.reduce((acumulador, video) => acumulador + video.score, 0) /
  videoFilter2.length;

console.log(media);

/*const videoFilter = videogames
  .filter((video) => video.genders.includes("RPG"))
  .reduce((acumulador, video) => acumulador + video.score, 0);
console.log(videoFilter);

const videoMedia =
  videoFilter /
  videogames.filter((video) => video.genders.includes("RPG")).length;
console.log(videoMedia);
*/
