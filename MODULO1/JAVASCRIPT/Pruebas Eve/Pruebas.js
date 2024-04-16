/**Mini-reto**
1. Crea una variable llamada **`planet`** y asígnale el valor "Tierra"*/
/*2. Crea una variable llamada **`isInnerPlanet`** y asígnale el valor **`true`** (la Tierra es un planeta interno)*/
/*3. Crea una variable llamada **`hasAtmosphere`** y asígnale el valor **`true`** (la Tierra tiene atmósfera)*/
/*4. Utiliza un operador lógico **`&&`** (AND) para combinar las variables **`isInnerPlanet`** y **`hasAtmosphere`** en una expresión lógica que evalúe a **`true`**.
 Almacena el resultado en una variable llamada **`isHabitable`**.*/
/*5. Utiliza una declaración **`console.log`** para imprimir el valor de la variable **`isHabitable`** en la consola. Debería mostrarse **`true`**.*/

let planet = "Tierra";
let isInnerPlanet = true;
isInnerPlanet && console.log("la Tierra es un planeta interno");

let hasAtmosphere = true;
hasAtmosphere && console.log("la Tierra tiene atmósfera");

let isHabitable = isInnerPlanet && hasAtmosphere;
console.log(isHabitable);

/***Mini-reto**
1. Crea una variable llamada **`character`** y asígnale el valor "Legolas"*/
let character = "Legolas";

/*2. Crea una variable llamada **`race`** y asígnale el valor "Elfo"*/
let race = "Elfo";

/*3. Crea una variable llamada **`hasRing`** y asígnale el valor **`false`** (Legolas no tiene el Anillo Único)*/
let hasRing = false;
hasRing && console.log("Legolas no tiene el Anillo Único");

/*4. Crea una variable llamada **`isArcher`** y asígnale el valor **`true`** (Legolas es un arquero)*/
let isArcher = true;
isArcher && console.log("Legolas es un arquero");

/*5. Utiliza un condicional **`if`** para evaluar si **`hasRing`** es **`true`**. 
Si lo es, imprime en la consola el mensaje "Legolas es el portador del Anillo Único"*/

if (hasRing == true) {
  console.log("Legolas es el portador del Anillo Único");
}
/*6. Utiliza **`else if`** para evaluar si **`isArcher`** es **`true`**. 
Si lo es, imprime en la consola el mensaje "Legolas es un arquero experto"*/
/*7. Utiliza  **`else`** para imprimir en la consola el mensaje "Legolas es un guerrero valiente"*/
if (isArcher == true) {
  console.log("Legolas es un arquero experto");
} else {
  console.log("Legolas es un guerrero valiente");
}
//!----------------------

let obj = {
  name: "John",
  age: 30,
  job: "developer",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Acceder a las propiedades de un objeto*/
console.log(obj.name);
console.log(obj["job"]);
// Modificar las propiedades de un objeto*/
obj.name = "pepe";

obj["age"] = 35;

// Añadir nuevas propiedades a un objeto
obj.location = "New York";

// Eliminar propiedades de un objeto
delete obj.age;

console.log(obj);

let prop = "name";
console.log(obj[prop]); // 'pepe'

obj.greet();

//?------------------

const sumar = (...numeros) => {
  return numeros.reduce((total, numero) => total + numero, 0);
};

console.log(sumar(1, 2, 3, 4)); // 10
console.log(sumar(5, 6)); // 11

try {
  const x = y + 1; // esto generará un ReferenceError porque y no está definida
} catch (error) {
  console.error(error.message); // 'y is not defined'
}
