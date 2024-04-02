//const numbers = [5, 5, 5, 5, 5, 5];
/**
 * el 0 es en lo que empieza el valor del acumulador
 */
//const total = numbers.reduce((acc, num) => acc + num, 0);
//console.log("🚀 ~ total:", total);

/*const suma = (array) => {
let acc = 0;
array.forEach((num) => (acc += num));
return acc;
const resultTotal = suma(numbers);
//console.log(resultTotal);

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const [rojo, ...newColor] = colors;
console.log(newColor);

let xmen = ["Ciclops", "Beast", "Angel", "Marvel-girl"];
let newXmen = ["Wolverine", "NightCrawler", "Storm"];

// Antes se usaba el concat y ahora ...
let myMutants = [...xmen, ...newXmen];

// Se puede usar también para copiar un array
let xmenCopy = [...xmen];

// se usa para jugar con tu array sin modificarlo
let [lastMutant] = [...xmen].reverse();

// No se ha modificado
console.log(xmen);
console.log(lastMutant);
*/

// Spread Operator in Parameters
const suma = (a, b, c) => {
  return a + b + c;
};

const numbers = [1, 2, 3];

suma(...numbers);
console.log(suma(numbers));
// Spread Operator in Parameters

// Spread Operator in Strings
const myTeam = "RAYO";
const characters = [...myTeam];
console.log(characters);
// [ 'R', 'A', 'Y', 'O']
// Spread Operator in Strings

// Spread Operator in Object
const obj1 = { firstName: "Foo", age: 22 };
const obj2 = { lastName: "Bar", gender: "M" };

const newObj = { ...obj1, ...obj2, planet: "Earth" };

console.log(newObj);
// Spread Operator in Object
