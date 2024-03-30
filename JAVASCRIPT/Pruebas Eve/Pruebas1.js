const numbers = [5, 5, 5, 5, 5, 5];
/**
 * el 0 es en lo que empieza el valor del acumulador
 */
const total = numbers.reduce((acc, num) => acc + num, 0);
//console.log("🚀 ~ total:", total);

const suma = (array) => {
  let acc = 0;
  array.forEach((num) => (acc += num));
  return acc;
};
const resultTotal = suma(numbers);
console.log(resultTotal);
