/* **Iteración #5: Filter**
5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18
*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesFilter = ages.filter((age) => age > 18);

console.log(agesFilter);

/* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.
*/

const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesFilter1 = ages1.filter((age) => age % 2 === 0);
console.log(agesFilter1);

/* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.
*/

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamerFilter = streamers.filter(
  (player) => player.gameMorePlayed === "League of Legends"
);
console.log(streamerFilter);

/* 
5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.
*/

const streamers1 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamers1Filter = streamers1.filter((player) =>
  player.name.includes("u")
);
console.log(streamers1Filter);

/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.
*/

const streamerFilter2 = streamers1.filter((player) => {
  if (player.gameMorePlayed.includes("Legends")) {
    if (player.age > 35) {
      player.gameMorePlayed = player.gameMorePlayed.toUpperCase();
    }
    return player;
  }
});
console.log(streamerFilter2);

/* 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
*/
// _____________________SOLUCIÓN EN OTRO FICHERO Iteracion5.6.js_________________________

/* 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
_______________________SOLUCION EN OTRO FICHERO Iteracion5-7-js__________________________

*/
