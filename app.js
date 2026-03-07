function validar(){

    let nombre = document.getElementById("Nombre");
    let ape = document.getElementById("Apellido");
    let di = document.getElementById("Direccion");
    let co = document.getElementById("Correo");
    let tel = document.getElementById("Telefono");

    if(nombre.value === ""){
        alert("Debe llenar el campo Nombre");
        nombre.focus();
        return;
    }

    if(ape.value === ""){
        alert("Debe llenar el campo Apellido");
        ape.focus();
        return;
    }

    if(di.value === ""){
        alert("Debe llenar el campo Dirección");
        di.focus();
        return;
    }

    if(co.value === ""){
        alert("Debe llenar el campo Correo");
        co.focus();
        return;
    }

    if(tel.value === ""){
        alert("Debe llenar el campo Teléfono");
        tel.focus();
        return;
    }

    alert("Formulario enviado correctamente");
}