//Iteración #6: Mixed For...of e includes
//Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
//Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

let filterToys = [];

/** // TODO: Laura No se están eliminando, estoy creando un nuevo array sin los gatos.
 * ¿Cómo se hace para eliminarlos?
 * */

/*for (let juguete of toys) {
  if (!juguete.name.includes("gato")) {
    filterToys.push(juguete);
  }
}

console.log(filterToys);*/

//TODO: aunque laura me dice que está bien haciendo un nuevo array sin gatos, hago esta otra forma, en la que array original saco los gatos...

for (const toy of toys) {
  if (toy.name.includes("gato")) {
    const index = toys.indexOf(toy);
    toys.splice(index, 1);
    toys.splice(index, 2);
  }
}

console.log(toys);
