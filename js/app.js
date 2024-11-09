const botonIniciarSesion = document.getElementById("iniciarSesion");
localStorage.setItem("cuentaNombres", JSON.stringify(["Fabricio"]));
localStorage.setItem("cuentaContraseñas", JSON.stringify(["1234"]));
const cuentaNombres = localStorage.getItem("cuentaNombres");
const cuentaContraseñas = JSON.parse(localStorage.getItem("cuentaContraseñas"));
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
  enviar.addEventListener("click", (cuentaNombres) => {
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    console.log();
  });
});
//TODO: RESOLVER ARRAYS EN STORAGE, VISUALIZACION CORRECTA DEL STORAGE Y COMPROBACION DE NOMBRE Y CONTRASEÑA
