function cambiarClasePadre(event) {
    var abuelo=event.target.parentNode.parentNode
    abuelo.classList.toggle('novisible');
    let nombre=event.target.name
    console.log(nombre)
    const elemento=document.getElementById(nombre)
    console.log(elemento)
    elemento.classList.remove("novisible");
    elemento.classList.add("cajform1")
}


function guardarDatos() {
    // Capturar el formulario
    var formulario = document.getElementById("miFormulario");
    
    // Crear un objeto para almacenar los datos
    var datos = {};

    // Obtener todos los campos de input y select
    var campos = formulario.querySelectorAll("input, select");

    // Iterar sobre cada campo y guardar su valor en el objeto
    campos.forEach(function(campo) {
        datos[campo.name] = campo.value;
    });

    // Convertir el objeto a una cadena JSON
    var datosJSON = JSON.stringify(datos);

    // Almacenar los datos en el local storage
    localStorage.setItem("datosFormulario", datosJSON);

    // Opcional: mostrar un mensaje de confirmación
    alert("Datos guardados correctamente en el local storage.");
}