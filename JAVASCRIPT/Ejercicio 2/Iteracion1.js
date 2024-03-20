// Completa la función que tomando dos números como argumento devuelva el más alto.

const sum = (numberOne, numberTwo) => {
  if (numberTwo > numberOne) {
    return numberTwo;
  } else {
    return numberOne;
  }
};

console.log(sum(10, 20));
