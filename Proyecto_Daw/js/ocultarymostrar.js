function iniciar(txtfecha_1){
var boton = document.getElementById("btndefinirrango");
 if(boton.addEventListener){
     boton.addEventListener("click", guardardatos, false);
}
}

function mostrar(){
    document.getElementById("formulario2").style.display = 'block';
    document.getElementById("formulario").style.display = 'none';
}

function validaform1(dato){
     var patron = /^\d*$/;
        if(!dato.search(patron))
        return true;
        else
        return false;
}

function guardardatos(){
    //Capturamos el dato como entero para validar rangos de fechas
    var txtfecha1 = parseInt(document.getElementById("txtrangoini").value);
    var txtfecha2 = parseInt(document.getElementById("txtrangofin").value);
    
     //Se capturan los valores como string para validara que no esten vacios
    var txtfechaI = document.getElementById("txtrangoini").value;
    var txtfechaII = document.getElementById("txtrangofin").value;
    
    //Capturamos todos los elementos span, input y declaramos variable para verificar si todos los datos son validos
    var span = document.getElementsByClassName("error");
    var caja  = document.getElementsByTagName("input");
    var salir = false;
    
    //Oculta los span antes de entrar al if para volver a decidir si mostrarlos o no
    span[0].style.display = "none";
    span[1].style.display = "none";
    
    if(txtfecha1 > 2015){
        var salir = false;
        var texto = document.createTextNode("Año de inicio no puede ser mayor a 2015");
        var vacio = document.createTextNode("");
        caja[0].style.width = "145%";
        span[0].style.marginBottom = "3px";
        span[0].style.display = "block";
        span[0].style.fontFamily = "calibri";
        span[0].style.color = "red";
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[0].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[0].replaceChild(texto, span[0].firstChild);
    }
    
        else if(txtfecha2 > 2015){
        var salir = false;
        var texto = document.createTextNode("Año limite no puede ser mayor a 2015");
        var vacio = document.createTextNode("");
        caja[1].style.width = "145%";
        span[1].style.marginBottom = "3px";
        span[1].style.display = "block";
        span[1].style.fontFamily = "calibri";
        span[1].style.color = "red";
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[1].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[1].replaceChild(texto, span[1].firstChild);
    }
    
    else if(txtfecha2 < txtfecha1){
        var salir = false;
        var texto = document.createTextNode("La fecha de inicio no puede ser mayor que la fecha limite");
        var vacio = document.createTextNode("");
        caja[0].style.width = "100%";
        span[0].style.marginBottom = "3px";
        span[0].style.display = "block";
        span[0].style.fontFamily = "calibri";
        span[0].style.color = "red";   
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[0].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[0].replaceChild(texto, span[0].firstChild);
        var texto = document.createTextNode("La fecha limite no puede ser menor que la fecha de inicio");
        var vacio = document.createTextNode("");
        caja[1].style.width = "100%";
        span[1].style.marginBottom = "3px";
        span[1].style.display = "block";
        span[1].style.fontFamily = "calibri";
        span[1].style.color = "red";  
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[1].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[1].replaceChild(texto, span[1].firstChild);
    }
    
    else if(txtfechaI == ""){
        var salir = false;
        var texto = document.createTextNode("*Este campo no puede estar vacío");
        var vacio = document.createTextNode("");
        caja[0].style.width = "100%";
        span[0].style.marginBottom = "3px";
        span[0].style.display = "block";
        span[0].style.fontFamily = "calibri";
        span[0].style.color = "red"; 
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[0].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[0].replaceChild(texto, span[0].firstChild);
    }
    
    else if(txtfechaII == ""){
        var salir = false;
        var texto = document.createTextNode("*Este campo no puede estar vacío");
        var vacio = document.createTextNode("");
        caja[1].style.width = "100%";
        span[1].style.marginBottom = "3px";
        span[1].style.display = "block";
        span[1].style.fontFamily = "calibri";
        span[1].style.color = "red"; 
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[1].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[1].replaceChild(texto, span[1].firstChild);
    }
    
    else if(validaform1(txtfechaI) == false){
        var salir = false;
        var texto = document.createTextNode("*Sólo pueden ingresarse números");
        var vacio = document.createTextNode("");
        caja[0].style.width = "666%";
        span[0].style.marginBottom = "3px";
        span[0].style.display = "block";
        span[0].style.fontFamily = "calibri";
        span[0].style.color = "red"; 
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[0].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[0].replaceChild(texto, span[0].firstChild);
    }
    
    else if(validaform1(txtfechaII) == false){
        var salir = false;
        var texto = document.createTextNode("*Sólo pueden ingresarse números");
        var vacio = document.createTextNode("");
        caja[1].style.width = "666%";
        span[1].style.marginBottom = "3px";
        span[1].style.display = "block";
        span[1].style.fontFamily = "calibri";
        span[1].style.color = "red";
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[1].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[1].replaceChild(texto, span[1].firstChild);
    }
    
    
    else{
    var salir = true;
        mostrar();
    }     
}


//addevent listener para el evento load de la pagina
    if(window.addEventListener){
        window.addEventListener("load", iniciar, false);
    }
    else if(window.attachEvent){
        window.attachEvent("onload", iniciar);
    }