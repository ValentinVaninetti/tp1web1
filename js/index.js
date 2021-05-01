"use strict";

function CrearCaptcha(){
  console.log ('entre');

  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
    console.log (text);
    document.querySelector("#captcha").innerHTML=text;
      

  return text;     
}
     let botoncaptcha = document.querySelector("#botoncaptcha");
     
     
     //let btnenviar = document.querySelector ("btn-enviar");
     //btnenviar.addEventListener ("click", validarcaptcha)




///function CrearCaptcha(){
  
  //let c1 = Math.floor((Math.random() * 9) +1);
  //let c2 = 
  //c1= Math.Floor
  //alert((c1) + (c2))
  
//}
//let captcha = document.querySelector("#captcha")
//captcha.addEventListener("click" , CrearCaptcha)


//let btnenviar = document.querySelector ("btn-enviar");
//btnenviar.addEventListener ("click", validarcaptcha)
