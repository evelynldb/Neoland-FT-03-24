/** CONDICIONALES
 * **Mini-reto**

---

1. Crea una variable llamada **`character`** y asígnale el valor "Legolas"
2. Crea una variable llamada **`race`** y asígnale el valor "Elfo"
3. Crea una variable llamada **`hasRing`** y asígnale el valor **`false`** (Legolas no tiene el Anillo Único)
4. Crea una variable llamada **`isArcher`** y asígnale el valor **`true`** (Legolas es un arquero)
5. Utiliza un condicional **`if`** para evaluar si **`hasRing`** es **`true`**. Si lo es, imprime en la consola el mensaje "Legolas es el portador del Anillo Único"
6. Utiliza **`else if`** para evaluar si **`isArcher`** es **`true`**. Si lo es, imprime en la consola el mensaje "Legolas es un arquero experto"
7. Utiliza  **`else`** para imprimir en la consola el mensaje "Legolas es un guerrero valiente"
 */

const character = "Legolas";
const race = "Elfo";
const hasRing = false;
hasRing && console.log("Legolas no tiene el Anillo Único");

let isArcher = true;
isArcher && console.log("Legolas es un arquero");

if (hasRing == true) {
  console.log("Legolas es el portador del Anillo Único");
}

if (isArcher == true) {
  console.log("Legolas es un arquero experto");
} else {
  console.log("Legolas es un guerrero valiente");
}

/** OPERADORES LÓGICOS
 * **Mini-reto**

---

1. Crea una variable llamada **`planet`** y asígnale el valor "Tierra"
2. Crea una variable llamada **`isInnerPlanet`** y asígnale el valor **`true`** (la Tierra es un planeta interno)
3. Crea una variable llamada **`hasAtmosphere`** y asígnale el valor **`true`** (la Tierra tiene atmósfera)
4. Utiliza un operador lógico **`&&`** (AND) para combinar las variables **`isInnerPlanet`** y **`hasAtmosphere`** en una expresión lógica que evalúe a **`true`**. Almacena el resultado en una variable llamada **`isHabitable`**.
5. Utiliza una declaración **`console.log`** para imprimir el valor de la variable **`isHabitable`** en la consola. Debería mostrarse **`true`**.

*/

let planet = "Tierra";
let isInnerPlanet = true;
isInnerPlanet && console.log("la Tierra es un planeta interno");

let hasAtmosphere = true;
hasAtmosphere && console.log("la Tierra tiene atmósfera");

let isHabitable = isInnerPlanet && hasAtmosphere;
console.log(isHabitable);
