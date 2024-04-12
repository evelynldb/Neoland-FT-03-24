// Iteración #3: Calcular la suma
// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.
// Puedes usar este array para probar tu función:
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let suma = 0;
  for (let i = 0; i < param.length; i++) {
    suma += param[i];
  }
  return suma;
}
console.log(sumAll(numbers));
