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
const age = 18;

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

const mensaje = "Hola ";
console.log(mensaje.repeat(3));

const mensaje1 = "Hola mundo";
const nuevoMensaje = mensaje1.replace("mundo", "amigo");
console.log(nuevoMensaje);

const quotet =
  "Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos, un Anillo para atraerlos a todos y atarlos en las tinieblas en la Tierra de Mordor donde se extienden las Sombras.";

console.log(quotet.replaceAll("Anillo", "Gato"));

//!------------------METODO SPLIT---------------

const frase = "El método split divide una cadena en un array de subcadenas";

// Encontrar la posición de la palabra "cadena" en la frase
const indiceCadena = frase.indexOf("cadena");

// Obtener la subcadena a partir de la palabra "cadena"
const subcadena = frase.substring(indiceCadena);

// Dividir la subcadena en un array de palabras
const palabrasDesdeCadena = subcadena.split(" ");

console.log(palabrasDesdeCadena);
// Output: ["cadena", "en", "un", "array", "de", "subcadenas"]

const quote2 = "    Luke, yo soy tu padre     ";
console.log(quote2.trim());
// Retorna "Luke, soy tu padre"

//?-------------NUMBER METHODS---------------

const integer = 10;
const decimal = 12.5;

Number.isInteger(integer); //true
Number.isInteger(decimal); //false
console.log(Number.isInteger(integer));
console.log(Number.isInteger(decimal));

const numero = 42;
const cadena1 = numero.toString();
console.log(cadena1); // "42"

const arreglo = [1, 2, 3];
const cadena2 = arreglo.toString();
console.log(cadena2); // "1,2,3"

const objetox = { nombre: "Juan", edad: 30 };
const cadena3 = objetox.toString();
console.log(cadena3); // "[object Object]"

const products = ["Asus Rog Ally", "Macbook", "fregadora"];

for (let i = 0; i < products.length; i++) {
  const cartaComponenteDeProductos = `
    <figure>
        <h3>${products[i]}</h3>
    </figure>
`;

  console.log(cartaComponenteDeProductos);
}

let d = 5;
let e = 3;
d += e;
console.log(d);

let f = 5;
f += 3 + 4;
console.log(f);

let age1 = 19;
let cp = 300100;
if (age == 19 || cp == 30000) {
  console.log("cumples al menos con una condicion");
} // es lo mismo
console.log(age == 19 || cp == 30000);

let status;
let error = 500;

const resCodeOk = status || 500; /// valores condicionales para resolver la posibilidad de tener un false

console.log(resCodeOk);

const adress = "viso 34"; // true porque tiene un  valor
let price = 0; // 0 es el false y el 1 es el true
console.log(!price);

if (age !== "19") console.log("no tienes 18 años"); //  --- != (distinto valor) !== (distinto valor y tipo)

age != 18 && console.log("no tienes 18 años");
