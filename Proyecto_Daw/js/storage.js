//variables globales que toman valores de los textbox
var txtfechaini;
var txtfechafin;
var txtfecha;
var txttitulo;
var txtdesc;

//esta funcion se manda a llamar cada 3 segundos, y en ese intervalo se capturan los nuevos valores que se ingresen
function guardar(){
    //se guardan en las variables globales
    txtfechaini = document.getElementById("txtrangoini").value;
    txtfechafin = document.getElementById("txtrangofin").value ;
    txtfecha = document.getElementById("fecha").value;
    txttitulo = document.getElementById("titulo").value;
    txtdesc = document.getElementById("descripcion").value;
    //se guardan el el sessionStorage
    sessionStorage.setItem("cont1",txtfechaini);
    sessionStorage.setItem("cont2",txtfechafin);
    sessionStorage.setItem("cont3",txtfecha);
    sessionStorage.setItem("cont4",txttitulo);
    sessionStorage.setItem("cont5",txtdesc);
}


function cargar(){
    //carga el contenido de las variables guardado en sessionStorage
    var cont1 = sessionStorage.getItem("cont1");
    var cont2 = sessionStorage.getItem("cont2");
    var cont3 = sessionStorage.getItem("cont3");
    var cont4 = sessionStorage.getItem("cont4");
    var cont5 = sessionStorage.getItem("cont5");
    //asigna el contenido cargado desde sessionStorage hasta los elementos del form
    document.getElementById("txtrangoini").value = cont1;
    document.getElementById("txtrangofin").value = cont2;
    document.getElementById("fecha").value = cont3;
    document.getElementById("titulo").value = cont4;
    document.getElementById("descripcion").value = cont5;
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
