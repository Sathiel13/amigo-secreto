
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //Obtener el valor que tiene la caja de texto
    const entrada = document.getElementById("amigo").value;

    //Valido que la caja de texto no este vacia
    if (entrada.trim() !== ""){
        //agrego al array
        amigos.push(entrada);
        console.log("amigos actuales: ", amigos);

        const lista = document.getElementById("listaAmigos");
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = entrada;
        lista.appendChild(nuevoElemento)

        //Limpiar la caja de texto
        document.getElementById("amigo").value = "";
    }else {
        alert("Debes ingresar un valor");
    }

}


function sortearAmigo(){
    // hay que validar que la lista de amigos no este vacia
    if (amigos.length > 0){
        //Elegir un indice aleatorio del array
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSeleccionado = amigos[indiceAleatorio];

        //Mostrar al amigo que se sorteo
        const resultado = document.getElementById("resultado");
        resultado.innerHTML= "";

        const elementoResultado = document.createElement("li");
        elementoResultado.textContent = `El amigo sorteado es ${amigoSeleccionado}`;
        resultado.appendChild(elementoResultado);


    }
    //alerta si el array esta vacion
    else {
        alert("No hay amigos para sortear");
    }


}