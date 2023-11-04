//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    let opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    let x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
     distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso1");
        document.getElementById("rj").classList.add("barra-progreso1");
        document.getElementById("ps").classList.add("barra-progreso1");
        document.getElementById("mutual").classList.add("barra-progreso1");
    }

}

document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = encodeURIComponent(document.getElementById("nombre").value);
    const mensaje = encodeURIComponent(document.getElementById("mensaje").value);
    const email = encodeURIComponent(document.getElementById("email").value);
    
    
    const numeroWhatsapp = "2615095807";
    const mensajeWhatsApp = `¡Hola! Soy ${nombre} , mi email es: ${email} y mi consulta es: ${mensaje}`;
    
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensajeWhatsApp}`;
    window.location.href = url;
  })


  document.addEventListener('DOMContentLoaded',function(event){
    
    var dataText = [ "Somos especialistas en encontrar y detectar fugas de Agua."];
    
    
    function typeWriter(text, i, fnCallback) {
      
      if (i < (text.length)) {
       
       document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
       
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
   
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       
      if (i < dataText[i].length) {
       
       typeWriter(dataText[i], 0, function(){
         
         StartTextAnimation(i + 1);
       });
      }
    }
   
    StartTextAnimation(0);
  });