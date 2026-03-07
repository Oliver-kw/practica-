function validar(){

    let nombre = document.getElementById("Nombre");
    let ape = document.getElementById("Apellido");
    let di = document.getElementById("Direccion");
    let co = document.getElementById("Correo");
    let tel = document.getElementById("Telefono");
    let mensaje = document.getElementById("mensaje");
    let coment = document.getElementById("Comentario");

    if(nombre.value === "" || ape.value ==="" || di.value==="" || co.value === "" || tel.value === "" || coment.value === ""){
        mensaje.textContent = "Por favor llenar todos los campos";
        mensaje.className = "Error";
    }else{
        mensaje.textContent = "Formulario llenado correctamente";
        mensaje.className = "Correcto";
    }

}