"use strict";

    let input = document.querySelector("#captchaingresado");
    let btn = document.querySelector("#botoncaptcha");
    //let generate = document.querySelector("#generate");
    generate.addEventListener("click", CrearCaptcha);
    btn.addEventListener("click", verificarCaptcha);


    
    function CrearCaptcha(){
      console.log ('entre');
      
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
      for (let i = 0; i < 5; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      console.log (text);
      document.querySelector("#captcha").innerHTML = text;
      return text;   
    }
    

        function verificarCaptcha(){
          //event.preventDefault();
          document.querySelector("#botoncaptcha");
          let captchagenerado = document.querySelector('text');
          let captchaingresado = document.querySelector('input');
          if (captchaingresado.value == captchagenerado){
            console.log()
          return true;

              } else {
                return false;  
                     

          }
          
        }
        
      
      
         
     
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










//let btnEnviar = document.getElementById("send");

//btnEnviar.addEventListener("click", function(){
                              // Verificar que lo que escribió el usuario sea igual a 8
                              //Primero busco el input
  //let inputCaptcha = document.getElementById("captcha");
                               //Verifico el dato
  //let divResultado = document.getElementById("resultado");
  //if (inputCaptcha.value == 8) {
                               //El dato es igual a 8
                                //alert("esta bien");
                                //divResultado.innerText = "Mensaje enviado";

    //let encabezado = document.createElement("h1");
    //encabezado.innerText = "Mensaje Enviado";
    //divResultado.appendChild(encabezado)
  //} else {
                                // El dato es distinto a 8
                                //alert("esta mal");
                                //divResultado.innerHTML = "Captcha incorrecto"
    //let link = document.createElement("a");
    //link.innerText = "Ir a google";
    //link.href = "www.google.com";
    //divResultado.appendChild(link);
    
  //}
//})