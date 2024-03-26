// Iteración #1: Usa includes
// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan
// la palabra "Camiseta". Usa la función .includes de javascript.
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

const contador = (arrayProductos, nombre) => {
  const arrayCamisetas = [];
  arrayProductos.forEach((element) => {
    element.includes(nombre) && arrayCamisetas.push(element);
  });
  return arrayCamisetas;
};

const arrayCamisetas = contador(products, "Camiseta");

console.log(arrayCamisetas);
