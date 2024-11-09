const botonIniciarSesion = document.getElementById("iniciarSesion");
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
            <button type=""submit>Enviar</button>
        </form>
    </main>
    <footer>

    </footer>
    <script src="./js/app.js"></script>`;
  const nombre = document.getElementById("nombre");
  nombre.addEventListener("change", () => {
    console.log(nombre.value);
  });
  const contraseña = document.getElementById("contraseña");
  contraseña.addEventListener("change", () => {
    console.log(contraseña.value);
  });
});
