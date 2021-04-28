console.log
let btnEnviar = document.getElementById("send");

btnEnviar.addEventListener("click", function(){
  // Verificar que lo que escribió el usuario sea igual a 5
  //Primero busco el input
  let inputCaptcha = document.getElementById("captcha");
  //Verifico el dato
  let divResultado = document.getElementById("resultado");
  if (inputCaptcha.value == 5) {
    //El dato es igual a 5
    //alert("esta bien");
    //divResultado.innerText = "Mensaje enviado";

    let encabezado = document.createElement("h1");
    encabezado.innerText = "Mensaje Enviado";
    divResultado.appendChild(encabezado)
  } else {
    // El dato es distinto a 5
    //alert("esta mal");
    //divResultado.innerHTML = "Captcha incorrecto"
    let link = document.createElement("a");
    link.innerText = "recomendacion";
    link.href = "recomendaciones.html";
    divResultado.appendChild(link);
    
  }
});