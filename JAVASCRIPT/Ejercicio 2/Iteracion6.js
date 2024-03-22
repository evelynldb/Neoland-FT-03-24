// Iteración #6: Valores únicos
// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
// Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

const quitarRepetidos = (platos) => {
  const arrayNoRepetidos = [];

  for (let i = 0; i < platos.length; i++) {
    !arrayNoRepetidos.includes(platos[i]) && arrayNoRepetidos.push(platos[i]);
  }
  return arrayNoRepetidos;
};

const resultQuitarRepe = quitarRepetidos(duplicates);
console.log(resultQuitarRepe);
