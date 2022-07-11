let titulo = document.getElementById("titulo")
console.log(titulo.innerText);
titulo.innerText = "Hola, aceptamos tu sugerencia"

let formulario = document.getElementById ("formulario");
formulario.addEventListener("submit", mensaje);

function mensaje(e) {
    e.preventDefault();

    console.log("Mensaje Enviado");
    
}
