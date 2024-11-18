const botonIniciarSesion = document.getElementById("iniciarSesion");
let cuenta = { nombre: "", contraseña: "" };
const cuentasRegistradas = [{ nombre: "p", contraseña: 1 }];
localStorage.setItem("cuentasRegistradas", JSON.stringify(cuentasRegistradas));
const cuentasRegistradasRecuperadas = JSON.parse(
  localStorage.getItem("cuentasRegistradas")
);
if (document.getElementById("index")) {
  botonIniciarSesion.addEventListener("mousedown", () => {
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
    const parrafoInicioErroneo = document.createElement("p");
    parrafoInicioErroneo.textContent = "Nombre o contraseña equivocado";
    const enviar = document.getElementById("enviar");
    enviar.addEventListener("click", () => {
      const nombre = document.getElementById("nombre").value;
      const contraseña = document.getElementById("contraseña").value;
      cuenta = { nombre: nombre, contraseña: contraseña };
      for (cuenta of cuentasRegistradasRecuperadas) {
        if (cuenta.nombre === nombre && cuenta.contraseña == contraseña) {
          console.log("sesion iniciada");
          if (document.querySelector("main p")) {
            document.querySelector("main p").remove("p");
          }
        } else {
          console.log("Nombre o contraseña incorrecto");
          document.querySelector("main").appendChild(parrafoInicioErroneo);
        }
      }
    });
  });
}
function registrarse(nombre, contraseña) {
  cuentasRegistradasRecuperadas.push({
    nombre: nombre,
    contraseña: contraseña,
  });
}
