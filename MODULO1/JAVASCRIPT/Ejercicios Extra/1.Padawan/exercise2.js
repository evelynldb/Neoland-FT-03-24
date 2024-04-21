/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. 
Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

Utilizamos un bucle for para iterar sobre cada elemento del array foodSchedule.
Verificamos si la comida no es vegana (!foodSchedule[i].isVegan).
Si no es vegana, buscamos la primera fruta disponible que no esté duplicada en el array de frutas utilizando 
el método find() y some().
Si encontramos una fruta disponible, actualizamos el nombre de la comida en foodSchedule con la nueva fruta 
y eliminamos esa fruta del array fruits utilizando splice().
Finalmente, imprimimos el array foodSchedule resultante que ahora contiene las comidas reemplazadas.
*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    let nuevaFruta = fruits.find(
      (fruta) => !foodSchedule.some((comida) => comida.name === fruta)
    );
    if (nuevaFruta) {
      foodSchedule[i] = { name: nuevaFruta, isVegan: true }; // Cambia isVegan a true
      fruits.splice(fruits.indexOf(nuevaFruta), 1);
    }
  }
}

console.log(foodSchedule);
