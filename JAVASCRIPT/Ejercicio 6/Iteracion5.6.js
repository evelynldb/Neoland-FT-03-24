/* 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
*/

const input = document.getElementById("texoABuscar");
const resultados = document.getElementById("resultados");

const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

input.addEventListener("input", (e) => {
  e.preventDefault();
  const streamers2Buscador = streamers2.filter((player) =>
    player.name.includes(input.value)
  );
  console.log(streamers2Buscador);
  resultados.innerHTML = streamers2Buscador.map((element) => element.name);
});
