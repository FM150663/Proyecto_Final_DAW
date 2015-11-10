//variables globales que toman valores de los textbox
var nom;
var apel;
var corr;
var select;
var opt;
var mnj;

//esta funcion se manda a llamar cada 3 segundos, y en ese intervalo se capturan los nuevos valores que se ingresen
function guardar(){
    //se guardan en las variables globales
    nom = document.getElementById("nombre").value;
    apel = document.getElementById("apellido").value;
    corr = document.getElementById("correo").value;
    select = document.getElementById("elecciones");
    opt = select.options[select.selectedIndex].value;
    mnj = document.getElementById("txtmensaje").value;
    //se guardan el el sessionStorage
    sessionStorage.setItem("nombre",nom);
    sessionStorage.setItem("apellido",apel);
    sessionStorage.setItem("correo",corr);
    sessionStorage.setItem("option",opt);
    sessionStorage.setItem("mensaje",mnj);
}

function cargar(){
    //carga el contenido de las variables guardado en sessionStorage
   var cont1 = sessionStorage.getItem("nombre");
   var cont2 = sessionStorage.getItem("apellido");
   var cont3 = sessionStorage.getItem("correo");
   var cont4 = sessionStorage.getItem("option");
   var cont5 = sessionStorage.getItem("mensaje");
  //asigna el contenido cargado desde sessionStorage hasta los elementos del form  
  document.getElementById("nombre").value = cont1;
  document.getElementById("apellido").value = cont2;
  document.getElementById("correo").value = cont3;
  select.options[select.selectedIndex].value  = cont4;
  document.getElementById("txtmensaje").value  = cont5;
}
//se manda a llamar a la funcion guardar cada 3 segundos
setInterval(guardar(), 3000);

//addevent listener para el evento load de la pagina
    if(window.addEventListener){
        window.addEventListener("load", cargar, false);
    }
    else if(window.attachEvent){
        window.attachEvent("onload", cargar);
    }
