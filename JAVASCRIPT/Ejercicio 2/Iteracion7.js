// Iteración #7: Buscador de nombres
// Crea una función que reciba por parámetro un array y el valor que desea comprobar
// que existe dentro de dicho array -
// comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento
// y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

const buscarPersonaje = (personajeABuscar, arrayDePersonajes) => {
  for (let i = 0; i < arrayDePersonajes.length; i++) {
    if (arrayDePersonajes[i] === personajeABuscar) {
      return {
        encontrado: true,
        posicion: i,
      };
    }
  }

  return {
    encontrado: false,
    posicion: null,
  };
};

const resultBuscarPersonaje = buscarPersonaje("Bruce", nameFinder);

console.log(resultBuscarPersonaje);
// como haría para mostrarme las diferentes posiciones, en caso que el nombre esté repetido.
