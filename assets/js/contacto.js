let formulario = document.getElementById ("formulario");
formulario.addEventListener("submit", mensaje);

function mensaje(e) {
    e.preventDefault();

    console.log("Mensaje Enviado");
    
}
