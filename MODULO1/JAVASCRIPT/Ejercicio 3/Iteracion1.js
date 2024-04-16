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
  "Bonita camiseta",
];

const contador = (arrayProductos, nombre) => {
  const arrayCamisetas = [];
  arrayProductos.forEach((element) => {
    element.toLowerCase().includes(nombre.toLowerCase()) &&
      arrayCamisetas.push(element);
  });
  return arrayCamisetas;
};

const arrayCamisetas = contador(products, "Camiseta");

console.log(arrayCamisetas);
