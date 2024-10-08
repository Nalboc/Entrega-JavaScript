let balance = 0;
let monto = 0;
let encendido = true; //booleano para empezar y finalizar el bucle while
let opciones = "\n1-Balance\n2-Retirar dinero\n3-Depositar dinero\n4-terminar";
let inicio = "Bienvenido a tu deposito de dinero. Aqui puedes:\n1-Mirar balance\n2-Retirar dinero\n3-Depositar dinero\n Elige la opcion numerica deseada.";
let presentacion = prompt(inicio);//Contiene el mensaje inicial y es la variable que controla que opcion elige el usuario en todo momento.
while(encendido == true)//Bucle que mantiene al usuario con las opciones disponibles en todo momento mientras el booleano encendido sea true.
{
    switch (presentacion)//Recibe la eleccion del usuario ante las opciones mostradas. 
    {
        case "1"://Mirar balance
            alert("Tu balance es de " + balance)
            lista();//Funcion para regresar a ver las opciones disponibles
            break;
        case "2"://Retirar
            monto = prompt("Introduce el monto a retirar");
            transaccion(presentacion,monto);//funcion que evalua dos argumentos del usuario.
            lista();
            break;
        case "3"://Depositar
            monto = prompt("Introduce el monto a depositar");
            transaccion(presentacion,monto);
            lista();
            break;
        default://Cualquier entrada fuera de las opciones
            alert("Orden desconocida");
            lista();
            break;
    }
}
function transaccion(orden,monto) //funcion principal para el control de la variable balance y revision de la entrada del usuario
{
    parseInt(monto)
    if(monto == null || parseInt(monto)< 0)//Si la entrada del usuario(monto) esta vacia o es negativa.
    {
        alert("Favor de ingresar un monto mayor a 0");
    }
    else if (isNaN(monto) == true)//Si la entrada del usuario no es un numero
    {
        alert("Ingreso erroneo");
    }
    else if (orden == "2" && parseInt(monto) > balance )//Si la operacion del usuario es de orden 2(retiro) y su entrada(monto) es mayor al balance(su dinero guardado).
    {
        alert("Tu cuenta no tiene suficiente dinero para realizar el retiro correspondiente.");
    }
    else if(orden == "2")//Si la operacion del usuario es de orden 2(retiro)
    {
        balance -= monto;
        alert("tu retiro ha sido realizado con exito, ahora tu balance es de " + balance);
    }
    else if(orden == "3")//Si la operacion del usuario es de orden 3(deposito)
    {
        balance += parseInt(monto);
        alert("tu deposito ha sido realizado con exito, ahora tu balance es de " + balance);
    }
}
function lista() //funcion para mostrar las opciones y recibir respuesta del usuario.
{
    switch(prompt(opciones))//En cada caso se llevara a la seccion correspondiente del bucle while.
    {
        case "1":
            presentacion = "1";
            break;
        case "2":
            presentacion = "2";
            break;
        case "3":
            presentacion = "3";
            break;
        case "4"://termina la ejecucion del bucle.
            encendido = false;
            break;
    }
}