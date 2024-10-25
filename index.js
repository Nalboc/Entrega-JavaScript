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
        let opcion =prompt("¿Estas satisfecho con el contenido de tu mochila?\n1-Quitar algo\n2-Agregar algo\n3-Mirar mochila\n4-Cerrar mochila")
        opciones(opcion);
    }
}
function quitarObjeto(){
    let quitar = prompt("¿Que cosa quieres quitar?\n" + cosas_cargadas)
    for(let i = mochila.espacio;i<=5;i++)
    {
        if(cosas_cargadas[i] == quitar){
            cosas_cargadas.splice(i,1)
            alert("Cosa eliminada")
            break;
        }
        else if(i == 5){
            alert("Cosa no encontrada");
        }
        else{
            alert("Revisando mochila...");
        }
    }
}
function agregarObjeto(){
    let agregar = prompt("¿Que cosa quieres agregar?")
    cosas_cargadas.length>=5?alert("Mochila llena"):cosas_cargadas.push(agregar) + alert(agregar + " agregado a tu mochila");
}
function cerrarMochila(){

}
function mirarMochila(){

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
        mirarMochila();
        break;
        case "4":
        cerrarMochila();
        break;

    }
}
