var dieHardArray = [1, 2, "Simon", "John McClane", "Zeus Carver"];

// Iterar un Array
/*for (let value of dieHardArray) {
  console.log(value);
}

for (let key in dieHardArray) {
  console.log(key);
}
*/
// Iterar un Objeto

var dieHardObj = {
  name: "John",
  surname: "McClane",
  age: 37,
};

for (let key in dieHardObj) {
  console.log(key);
}

for (let value of dieHardObj) {
  console.log(value);
}
