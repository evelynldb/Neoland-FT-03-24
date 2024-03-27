/**
 * **Iteración #5: Función rollDice**

Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos 
que tenga el dado que deberá silumar el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. 
Si no se te ocurre como hacer un numero aleatorio no te preocupes! 
busca información sobre la función de javascript **Math.random();**

const randomNumber = Math.random() * 10; // Genera un número aleatorio entre 0 (incluido) y 10 (excluido)
console.log(randomNumber);
const randomNumber = () => Math.random();

const randomNumber = Math.floor(Math.random() * 6) + 1; 
console.log(randomNumber);

*/

const rollDice = (caras) => Math.floor(Math.random() * caras) + 1;

console.log(rollDice(12));
