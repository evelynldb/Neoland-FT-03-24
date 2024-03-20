// Iteración #2: Buscar la palabra más larga
// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
const findLongestWord = (param) => {
  let maxLongitud = 0;
  for (let i = 1; i < param.length; i++) {
    if (param[i].length > param[maxLongitud].length) maxLongitud = i;
  }
  return param[maxLongitud];
};
console.log(findLongestWord(avengers));
