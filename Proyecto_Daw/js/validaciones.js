//Esta funcion permite insertar las imagenes y sus respectivos eventos click mediante el DOM al cargar la pagina
function iniciar(){
var btnfind = document.getElementById("enviar");
 if(btnfind.addEventListener){
     btnfind.addEventListener("click", evaluar, false);
}
    else if(btnfind.attachEvent){
        btnfind.attachEvent("onload", evaluar);
    }
}

//Funcion del boton que evalua cada dato ingresado y si el valor devuelto es true
function evaluar(){
//Capturamos cada valor que el usuario ingresa en la pagina contactanos
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var correo=document.getElementById("correo").value;
    var select = document.getElementById("elecciones");
    var eleccion = select.options[select.selectedIndex].value;

    //Capturamos todos los elementos span
    var span = document.getElementsByClassName("error");
    //Funciones que permiten hacer validaciones de cada dato ingresado y haciendo uso de expresiones regulares
    //Funcion que valida solo texto con espacios
    function validaSoloTexto(nombre){
        var patron = /^[a-zA-Z\s]*$/;
        if(!nombre.search(patron))
        return true;
        else
        return false;
        }
    
        function validaCorreo(correo){
        var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!correo.search(patron))
        return true;
        else
        return false;
        }

    if ((validaSoloTexto(nombre) == false) || nombre=="") {
        span[0].style.display = "block";
        span[0].style.height = "32px";
        span[0].style.paddingTop = "4px";
        span[0].style.paddingLeft = "9px";
        span[0].style.color = "red";
    }
    
        else if ((validaSoloTexto(apellido) == false) || apellido=="") {
        span[1].style.display = "block";
        span[1].style.height = "32px";
        span[1].style.paddingTop = "4px";
        span[1].style.paddingLeft = "9px";
        span[1].style.color = "red";
    }
        else if ((validaCorreo(correo) == false) || correo=="") {
        span[2].style.display = "block";
        span[2].style.height = "32px";
        span[2].style.paddingTop = "4px";
        span[2].style.paddingLeft = "9px";
        span[2].style.color = "red";
    }
    
    else if (eleccion=="") {
        span[3].style.display = "block";
        span[3].style.height = "32px";
        span[3].style.paddingTop = "4px";
        span[3].style.paddingLeft = "9px";
        span[3].style.color = "red";
    }
    else {
        var div = document.getElementById("contenedor_form");
        var btn = document.getElementById("regresar");
        div.style.display="none";
        btn.style.display="block";
        
    }
}

//Asociando función que manejará el evento load al cargar la página
    if(window.addEventListener){
        window.addEventListener("load", iniciar, false);
    }
    else if(window.attachEvent){
        window.attachEvent("onload", iniciar);
}

