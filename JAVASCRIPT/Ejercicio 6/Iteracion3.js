/*Iteración #3: Spread Operator
3.1 Dado el siguiente array, crea una copia usando spread operators.
*/

const pointsList = [32, 54, 21, 64, 75, 43];

const realCopy = [...pointsList];
console.log(realCopy);

/*
3.2 Dado el siguiente objeto, crea una copia usando spread operators.
*/

const toys = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const copyToys = { ...toys };
console.log(copyToys);

/*
3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.
*/

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const copyList = [...pointsList1, ...pointsLis2];
console.log(copyList);

/*
3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.
*/

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const toyCopy = { ...toy, ...toyUpdate };
console.log(toyCopy);

/*
3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.
*/

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const copyColors = [...colors];
copyColors.splice(1, 1);
console.log(copyColors);
console.log(colors);
