/*Crea una variable llamada `myFavoriteHero`, asigna el valor `Hulk` a ella.*/

const myFavoriteHero = "Hulk";

/*Crea una variable llamada `x`, asigna el valor `50` a ella.*/

const x = 50;

/*Crea una variable llamada `h` con el valor `5` y otra `y` con el valor `10`. */

const h = 5;
const y = 10;

/*Crea una otra variable `z` y asignale el valor de `h + y`.*/

const z = h + y;

console.log(z);

/*Dado el siguiente javascript, cambia el valor de la propiedad `age` a `250`.*/

const character = { name: "Jack Frost", age: 10 };

character.age = 250;

console.log(character);

/*Declara 3 variables con los nombres y valores siguientes:*/

/*firstName = "Jon";
lastName = "Snow";
age = 24;
*/
const firstName = "Jon";
const lastName = "Snow";
const age = 24;

/*Guarda los valores en `**sentence**` con la siguiente estructura:*/

const sentence = `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`;

console.log(sentence);

/*Dado el siguiente javascript, guarda en una variable la suma del precio de ambos juguetes.*/
const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

const totalToys = toy1.price + toy2.price;
console.log(totalToys);

const quote = "To infinity and beyond";

const word = "infinity";

console.log(quote.includes(word)); // Retorna true
