let mochila = document.getElementById("mochila");
let slot1 = document.getElementById("slot1");
let slot2 = document.getElementById("slot2");
let slot3 = document.getElementById("slot3");
let slot4 = document.getElementById("slot4");
let slot5 = document.getElementById("slot5");
mochila_abierta = true;
localStorage.setItem("espacioMochila", 5);
let espacioMochila = parseInt(localStorage.getItem("espacioMochila"));
let cosas_cargadas = [];
while (espacioMochila > 0) {
  let cargar_mochila = prompt(
    "Llena la mochila con lo que quieras\n Espacio de mochila: " +
      espacioMochila
  );
  espacioMochila -= 1;
  cosas_cargadas.push(cargar_mochila);
}
slot1.innerHTML = cosas_cargadas[0];
slot2.innerHTML = cosas_cargadas[1];
slot3.innerHTML = cosas_cargadas[2];
slot4.innerHTML = cosas_cargadas[3];
slot5.innerHTML = cosas_cargadas[4];
alert("Ya no hay espacio, estas son las cosas que cargaste: " + cosas_cargadas);
administrarMochila();
function administrarMochila() {
  while (mochila_abierta == true) {
    let opcion = prompt(
      "¿Estas satisfecho con el contenido de tu mochila?\n1-Quitar algo\n2-Agregar algo\n3-Mirar mochila\n4-Cerrar mochila"
    );
    opciones(opcion);
  }
}
function quitarObjeto() {
  let quitar = prompt("¿Que cosa quieres quitar?\n" + cosas_cargadas);
  for (let i = mochila.espacio; i <= 5; i++) {
    if (cosas_cargadas[i] == quitar) {
      cosas_cargadas.splice(i, 1);
      alert("Cosa eliminada");
      break;
    } else if (i == 5) {
      alert("Cosa no encontrada");
    } else {
      alert("Revisando mochila...");
    }
  }
}
function agregarObjeto() {
  let agregar = prompt("¿Que cosa quieres agregar?");
  cosas_cargadas.length >= 5
    ? alert("Mochila llena")
    : cosas_cargadas.push(agregar) + alert(agregar + " agregado a tu mochila");
}
function cerrarMochila() {
  alert("Mochila cerrada");
  mochila_abierta = false;
}
function mirarMochila() {
  alert("Estas son las cosas dentro de tu mochila: " + cosas_cargadas);
}
function opciones(opcion) {
  switch (opcion) {
    case "1":
      quitarObjeto();
      break;
    case "2":
      agregarObjeto();
      break;
    case "3":
      mirarMochila();
      break;
    case "4":
      cerrarMochila();
      break;
  }
}
