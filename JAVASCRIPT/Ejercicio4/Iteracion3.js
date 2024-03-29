/**
 * **Iteración #3: Mix Fors**

1. Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado 
por los usuarios a favorito. 
Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario 
tenga como favoritos.
2. Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita 
como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y
 oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.
 */

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

/*const ejemplo = {
  train: 3,
  firecamp: 5,
  wind: 1,
};
ejemplo["train"] = 9; // con esto añadimos la clave al objeto conteo si no existe!
ejemplo.wind = 1; 
ejemplo.wind = 10; si existe la sobreescribe!
>>como en el Ejercicio 2. Iteracion8
*/

const conteo = {};

for (let user of users) {
  for (let sound in user.favoritesSounds) {
    if (conteo[sound]) {
      conteo[sound]++;
    } else {
      conteo[sound] = 1;
    }
  }
}

console.log(conteo);
