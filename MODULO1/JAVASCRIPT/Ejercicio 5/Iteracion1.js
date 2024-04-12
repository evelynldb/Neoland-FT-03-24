//Iteración #1: Creando Events
//Dado el siguiente HTML:

/**
 * 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click
*/

const button = document.getElementById("btnToClick");

button.addEventListener("click", (e) => {
  // Evito que se recargue la pagina
  e.preventDefault();
  console.log(e);
});
//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusInput = document.getElementById("focusInput");
focusInput.addEventListener("focus", (e) => {
  e.preventDefault();
  console.log(focusInput.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const valor = document.getElementById("valor");
valor.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(valor.value);
});
