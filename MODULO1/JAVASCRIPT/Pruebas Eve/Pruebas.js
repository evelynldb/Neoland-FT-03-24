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
