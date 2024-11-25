//boton iniciar sesion
const botonIniciarSesion = document.getElementById("iniciarSesion");
//boton registrarse
const botonRegistrarse = document.getElementById("registrarse");
//funcion mostrar formulario
function mostrarFormulario() {
  document.body.innerHTML = `<header class ="inicia-sesion">
        <h1>Inicia sesion</h1>
    </header>
    <main class ="main-iniciosesion">
        <form class = "formulario">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" required>
            <br/><br/>
            <label for="contraseña">Contraseña</label>
            <input type="password" name="contraseña" id="contraseña" required>
            <br/><br/>
            <button type="button" id ="enviar">Enviar</button>
        </form>
    </main>
    <footer>
    </footer>
    <script src="./js/app.js"></script>`;
}
function RevisarInicioDeSesion(nombre, contraseña) {
  cuenta = { nombre: nombre, contraseña: contraseña };
  //si los datos corresponden a los de una cuenta ya registrada, se inicia sesion.
  for (cuenta of cuentasRegistradasRecuperadas) {
    if (cuenta.nombre === nombre && cuenta.contraseña == contraseña) {
      console.log("sesion iniciada");
      if (document.querySelector("main p")) {
        //en caso de existir parrafoInicioErroneo, borrarlo.
        document.querySelector("main p").remove("p");
      }
      cuentaIniciada = cuentasRegistradasRecuperadas.find(
        //la variable cuentaIniciada ahora contiene el objeto especifico con el valor de campo nombre correspondiente al dado por el usuario(esta almacenando la cuenta ya registrada con la que inició sesion)
        (cuenta) => cuenta.nombre == nombre
      );
      cuentaIniciadaActual = sessionStorage.setItem(
        //guarda la cuenta iniciada en sessionStorage
        "cuentaIniciadaActual",
        JSON.stringify(cuentaIniciada)
      );
      inicio();
    } else {
      //si los datos introducidos no coinciden a ninguna cuenta registrada, salta mensaje de error y aparece parrafoInicioErroneo.
      console.log("Nombre o contraseña incorrecto");
      document.querySelector("main").appendChild(parrafoInicioErroneo);
    }
  }
}
function botonEnviar() {
  //evento del boton "enviar" del formulario
  const enviar = document.getElementById("enviar");
  enviar.addEventListener("click", () => {
    //al clickearlo se guardan los datos dados por el usuario en sus respectivas variables(nombre y contraseña)
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    RevisarInicioDeSesion(nombre, contraseña);
  });
}
function inicio() {
  window.location.href = "./pages/pagina_inicio.html"; //cambia a la pagina de inicio
}
//inicializacion variable que contiene un parrafo vacio y se le asigna un texto para luego mostrar al usuario en caso de error.
const parrafoInicioErroneo = document.createElement("p");
parrafoInicioErroneo.textContent = "Nombre o contraseña equivocado";
//variable que guarda el nombre y la contraseña introducida por el usuario más adelante
let cuenta = { nombre: "", contraseña: "" };
//las cuentas ya registradas
const cuentasRegistradas = [{ nombre: "p", contraseña: 1, balance: 50 }];
localStorage.setItem("cuentasRegistradas", JSON.stringify(cuentasRegistradas));
const cuentasRegistradasRecuperadas = JSON.parse(
  localStorage.getItem("cuentasRegistradas")
);
//cuenta que inició sesion actualmente.
let cuentaIniciada;
//Eventos para pagina de registro/inicio sesion(si existe index, funciona el codigo)
if (document.getElementById("index")) {
  //inicializacion para el guardado de la sesion actual, en sessionstorage
  let cuentaIniciadaActual = sessionStorage.setItem(
    "cuentaIniciadaActual",
    JSON.stringify({}) //cada vez que estemos en la pagina index, se reinicia la variable para estar vacia.
  );
  //evento para el boton iniciar sesion
  botonIniciarSesion.addEventListener("mousedown", () => {
    //al clickear cambia el html a uno con formulario
    mostrarFormulario();
    botonEnviar();
  });
  botonRegistrarse.addEventListener("mousedown", () => {
    mostrarFormulario();
  });
}

function registrarse(nombre, contraseña) {
  cuentasRegistradasRecuperadas.push({
    nombre: nombre,
    contraseña: contraseña,
  });
}
