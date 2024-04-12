/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

const button = document.createElement("button");
button.textContent = "botón";
button.id = "btnToClick";

document.body.appendChild(button);

button.addEventListener("click", (e) => {
  console.log(e);
});

/*1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/

const element = document.querySelector(".focus");

element.addEventListener("focus", (e) => {
  console.log(e.target.value);
});

/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/
const element1 = document.querySelector(".value");

element1.addEventListener("input", (e) => {
  console.log(e.target.value);
});
