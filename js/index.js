"use strict";

let btn = document.querySelector("#botoncaptcha");

btn.addEventListener("click", CrearCaptcha());


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
     
     
     //Y LA PERRA SEGUIA Y SEGUIA COMO VAS A USAR ONCLICK PAPI SI NO ESTA EN EL HTML
     //BUENO A VER HIJA DEPUTA
     //Y NO SE, PERO CON ONCLICK NO ES PORFIADO
     //COMO QUE NO?
     //SOS PELOTUDO?????????? 
     // si pero que tiene que ver
     //MEJOR CERRA EL ORTO
     //ahi voy a discord, pvp
     //GG
     
     
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
