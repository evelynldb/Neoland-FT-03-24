console.log("EVELYN".length);
// console.log(8.length);

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

const averageWord = (array) => {
  let sumaNum = 0;
  let sumaString = 0;

  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sumaNum += array[i];
    } else if (typeof array[i] === "string") {
      sumaString += array[i].length;
    }
  }
  return { sumaNum, sumaString };
};

console.log(averageWord(mixedElements));

const persona = {
  name: "Eve",
  edad: 46,
  hijos: true,
};

console.log(persona);
console.log(persona.toString());

let age = 19;
let cp = 28000;

age === 19 && cp === 28000 && age++ && console.log(age, cp); // por qué el incremento devuelve true??
// Pedro dice que no devuelve ni true ni false, entonces, por qué me sale en console.log??

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
  let result = {
    SiExiste: true,
    posicion: [],
  };
  for (let i = 0; i < arrayDePersonajes.length; i++) {
    result =
      personajeABuscar.toLowerCase() === arrayDePersonajes[i].toLowerCase()
        ? { ...result, SiExiste: true, posicion: [...result.posicion, i] }
        : { ...result, SiExiste: false };
  }
  return result;
};

// Crea una función que reciba por parámetro un array y el valor que desea comprobar
// que existe dentro de dicho array -
// comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento
// y por la contra un false. Puedes usar este array para probar tu función:

const resultBuscarPersonaje = buscarPersonaje("Eve", nameFinder);
const resultBuscarPersonaje2 = buscarPersonaje("Marc", nameFinder);

console.log(resultBuscarPersonaje);
console.log(resultBuscarPersonaje2);
