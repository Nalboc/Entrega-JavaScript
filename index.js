mochila_abierta = true;
let mochila = {
    espacio: 5
};
let cosas_cargadas = [];
while(mochila.espacio >0){   
let cargar_mochila =prompt("Llena la mochila con lo que quieras\n Espacio de mochila: " + mochila.espacio)
mochila.espacio -= 1;
cosas_cargadas.push(cargar_mochila);
}
alert("Ya no hay espacio, estas son las cosas que cargaste: " + cosas_cargadas)
administrarMochila();
function administrarMochila(){
    while(mochila_abierta == true){
        let opcion =prompt("¿Estas satisfecho con el contenido de tu mochila?\n1-Quitar algo\n2-Agregar algo\n3-Cerrar mochila")
        opciones(opcion);
    }
}
function quitarObjeto(){
    let quitar = prompt("¿Que objeto quieres quitar?\n" + cosas_cargadas)
    for(let i = mochila.espacio;i<=5;i++)
    {
        if(cosas_cargadas[i] == quitar){
            cosas_cargadas.splice(i,1)
            alert("objeto eliminado")
            break;
        }
        else if(i == 5){
            alert("Objeto no encontrado");
        }
        else{
            alert("Buscando objeto");
        }
    }
}
function agregarObjeto(){

}
function cerrarMochila(){

}
function opciones(opcion){
    switch(opcion)
    {
        case "1":
        quitarObjeto();
        break;
        case "2":
        agregarObjeto();
        break;
        case "3":
        cerrarMochila();
        break;

    }
}
