const botonIniciarSesion = document.getElementById("iniciarSesion");
let cuenta = { nombre: "", contraseña: "" };
const cuentasRegistradas = [{ nombre: "p", contraseña: 1 }];
localStorage.setItem("cuentasRegistradas", JSON.stringify(cuentasRegistradas));
const cuentasRegistradasRecuperadas = JSON.parse(
  localStorage.getItem("cuentasRegistradas")
);

botonIniciarSesion.addEventListener("mousedown", () => {
  document.body.innerHTML = `<header>
        <h1>Inicia sesion</h1>
    </header>
    <main>
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
  const enviar = document.getElementById("enviar");
  enviar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    cuenta = { nombre: nombre, contraseña: contraseña };
    for (cuenta of cuentasRegistradasRecuperadas) {
      if (cuenta.nombre === nombre && cuenta.contraseña == contraseña) {
        console.log("sesion iniciada");
      } else {
        console.log(`No hubo coincidencias`);
      }
    }
  });
});
function registrarse(nombre, contraseña) {
  cuentasRegistradasRecuperadas.push({
    nombre: nombre,
    contraseña: contraseña,
  });
}
//TODO: RESOLVER ARRAYS EN STORAGE, VISUALIZACION CORRECTA DEL STORAGE Y COMPROBACION DE NOMBRE Y CONTRASEÑA
