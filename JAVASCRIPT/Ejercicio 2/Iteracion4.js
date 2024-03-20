// Iteración #4: Calcular el promedio**
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

const average = (datos) => {
  let suma = 0;
  for (let i = 0; i < datos.length; i++) {
    suma += datos[i];
  }

  return suma / datos.length;
};

console.log(average(numbers));
