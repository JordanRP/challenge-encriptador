
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function encriptarTexto(){
    let textoSinEncriptar= document.getElementById('textoEncriptar').value.toLowerCase();
    let textoEncriptado = textoSinEncriptar
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    asignarTextoElemento('p',`${textoEncriptado}`)
    limpiarTextArea()
    document.querySelector('#copiarTexto').removeAttribute('disabled');
}
function desencriptarTexto(){
    let textoSinEncriptar= document.getElementById('textoEncriptar').value.toLowerCase();
    let resultado = textoSinEncriptar.replace(/ober/g, "o").replace(/ai/g, "a").replace(/enter/g, "e").replace(/ufat/g, "u").replace(/imes/g, "i");
    asignarTextoElemento('p',`${resultado}`);
    limpiarTextArea()
}
function limpiarTextArea() {
    document.querySelector('#textoEncriptar').value = '';
    asignarTextoElemento('h3',``);
}
function condicionesIniciales() {
    asignarTextoElemento('p',`Ningún Mensaje fue encontrado`);
    document.querySelector('#copiarTexto').setAttribute('disabled','true');
}
function copiarTexto(){
    var texto = document.getElementById("textoEncriptado").innerText;
    var inputOculto = document.createElement("textarea");
    inputOculto.value = texto;
    document.body.appendChild(inputOculto);
    
    // Selecciona el texto dentro del elemento
    inputOculto.select();
    inputOculto.setSelectionRange(0, 99999); // Para dispositivos móviles
    
    // Copia el texto al portapapeles
    document.execCommand("copy");
    
    // Elimina el elemento de texto oculto
    document.body.removeChild(inputOculto);
    asignarTextoElemento('h3',`Texto Copiado`);
}
    condicionesIniciales();

