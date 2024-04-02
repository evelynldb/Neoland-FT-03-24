// Destructuring with spread operator
const details = {
  firstName: "Code",
  lastName: "Burst",
  age: 22,
};
// Saca el valor 22 y deja el resto de atributos
const { age, ...restOfTheDetails } = details;
console.log(age, restOfTheDetails);
// 22 { firstName: 'Code', lastName: 'Burst' }

const winner = true;
const winnerText = winner.toString();
console.log(winner);
// Retorna "true";
// TODO: Laura
