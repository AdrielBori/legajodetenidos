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
