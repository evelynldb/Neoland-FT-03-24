// **Iteration #8: Contador de repeticiones**
// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras
// que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(arrayPalabras) {
  const palabrasRepetidas = {};

  arrayPalabras.forEach((word) => {
    if (palabrasRepetidas[word]) {
      palabrasRepetidas[word]++;
    } else {
      palabrasRepetidas[word] = 1;
    }
  });

  return palabrasRepetidas;
}
console.log(repeatCounter(counterWords));
