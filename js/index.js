"use strict";

let btnVerify = document.querySelector("#btn_verify_captcha");
let generate = document.querySelector("#generateCaptcha_btn");
generate.addEventListener("click", CrearCaptcha);
btnVerify.addEventListener("click", verificarCaptcha);
let generatedCaptcha;


function CrearCaptcha() {
  let captcha = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++) {
    captcha += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  document.querySelector("#captcha").innerHTML = captcha;
  generatedCaptcha = captcha;
}

function verificarCaptcha() { 
  event.preventDefault();
  let input = document.querySelector("#input_captcha");
  let respuesta = document.querySelector("#verificationResult") 
  console.log(input.value == generatedCaptcha);
  //return input.value === generatedCaptcha;
  if (input.value == generatedCaptcha) {   
    respuesta.innerHTML = "Captcha correcto" 
    return true;    
  } else {
    respuesta.innerHTML = "Captcha incorrecto"
    return false; 
       
  }
  
}


let btnpublicar = document.querySelector("#btn-publicar")
let feed = document.querySelector("#feed")
btnpublicar.addEventListener("click", publicarcomentario)

function publicarcomentario () {
  let feed = document.createElement("div"); //si te aparece en gris es por que la estas declarando mal o por que en realidad va a ajuera? dice esto: comentarios' is declared but its value is never read
  feed.className = "feed"
  let span = document.createElement("span")
  span.innerHTML = "Comentario de x:"
  


}
