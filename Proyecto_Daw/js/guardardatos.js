//Contadores de alcanze global
var correcto = false; //verifica que los datos estén ingresados correctamente
var i = 0;
var aux=0;
//crear arreglos que contendran nodos de texto
    var fechaslimite = new Array(2);
    var nodos = new Array(10);
    //crear arreglo bidimencional
    for(var cont = 0; cont<10; cont++){
       nodos[cont] = new Array(3); 
    }

var fechaact = new Array(10);
var tituloact = new Array(10);
var descact = new Array(10);



/* funcion guardar*/
function guardar(){
    fechaact[i] = document.getElementById("fecha").value;
    tituloact[i] = document.getElementById("titulo").value;
    descact[i] = document.getElementById("descripcion").value;
    /* JSON*/
var datos = 
        {
            "fechas" : [
                {"fecha1" : document.getElementById("txtrangoini").value},
                {"fecha2" : document.getElementById("txtrangofin").value} 
            ],
            acontecimientos: [
                {"fechaact" : fechaact[0],
                 "tituloact" : tituloact[0],
                 "descripcion" : descact[0]
                },
                {"fechaact" : fechaact[1],
                 "tituloact" : tituloact[1],
                 "descripcion" : descact[1]
                },
                {"fechaact" : fechaact[2],
                 "tituloact" : tituloact[2],
                 "descripcion" : descact[2]
                },
                {"fechaact" : fechaact[3],
                 "tituloact" : tituloact[3],
                 "descripcion" : descact[3]
                },
                {"fechaact" : fechaact[4],
                 "tituloact" : tituloact[4],
                 "descripcion" : descact[4]
                },
                {"fechaact" : fechaact[5],
                 "tituloact" : tituloact[5],
                 "descripcion" : descact[5]
                },
                {"fechaact" : fechaact[6],
                 "tituloact" : tituloact[6],
                 "descripcion" : descact[6]
                },
                {"fechaact" : fechaact[7],
                 "tituloact" : tituloact[7],
                 "descripcion" : descact[7]
                },
                {"fechaact" : fechaact[8],
                 "tituloact" : tituloact[8],
                 "descripcion" : descact[8]
                },
                {"fechaact" : fechaact[9],
                 "tituloact" : tituloact[9],
                 "descripcion" : descact[9]
                },
            ]
        };
    /*Fin JSON*/
    fechaslimite[0] = document.createTextNode(datos.fechas[0].fecha1);
    fechaslimite[1] = document.createTextNode(datos.fechas[1].fecha2); 
   //crear nodos de texto

    
    nodos[i][0] = document.createTextNode(datos.acontecimientos[i].tituloact);
    nodos[i][1] = document.createTextNode(datos.acontecimientos[i].fechaact);
    nodos[i][2] = document.createTextNode(datos.acontecimientos[i].descripcion);
    //actualizar contador
     
    if(i==9){
        crearlinea();
    }
    else{
        i++;
        
    }
    
    
    document.getElementById("fecha").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
}

function crearlinea(){
    if(i !=0){
    document.getElementById("formulario2").style.display = 'none';
    var li = document.getElementsByTagName("li");
    li[1].style.backgroundColor = 'black';
    li[1].style.Color = '#fff';
    var parrafos = new Array(30);
    var div = new Array(10);
    //imprimir nodos de texto
    var contenido = document.getElementById("linea");
    
    
    for(j=0;j<i;j++){
         parrafos[aux] = document.createElement("p");
         parrafos[aux+1] = document.createElement("p");
         parrafos[aux+2] = document.createElement("p");
    div[j] = document.createElement("div");
    div[j].id = "div" + (j+1);
    contenido.appendChild(div[j]);  
        
        div[j].appendChild(parrafos[aux]);
      parrafos[aux].appendChild(nodos[j][0]);
       parrafos[aux].style.Color = 'darkorange'; 
    
     div[j].appendChild(parrafos[aux+1]);
      parrafos[aux+1].appendChild(nodos[j][1]);
        
         div[j].appendChild(parrafos[aux+2]);
      parrafos[aux+2].appendChild(nodos[j][2]);
    
        aux = aux + 3;
    }
    }
    
    
    
}

function validaform(dato){
     var patron = /^\d*$/;
        if(!dato.search(patron))
        return true;
        else
        return false;
}

function validaform2(){
    var fechaacontecimiento = parseInt(document.getElementById("fecha").value);
    //se captura el elemento de fecha del acontecimiento para poder verificar luego que el contenido sean solo números
    var fechaacont = document.getElementById("fecha").value;
    var titulo = document.getElementById("titulo").value;
    var descripcion = document.getElementById("descripcion").value;
    
    var txtfecha1 = parseInt(document.getElementById("txtrangoini").value);
    var txtfecha2 = parseInt(document.getElementById("txtrangofin").value);
    var span = document.getElementsByClassName("error");
    var caja  = document.getElementsByTagName("input");
    span[2].style.display = "none";
    span[3].style.display = "none";
    span[4].style.display = "none";
    
    if ((fechaacontecimiento < txtfecha1) || (fechaacontecimiento > txtfecha2)){
        correcto = false;
        
        var texto = document.createTextNode("Ingrese un numero entre: " + txtfecha1 + " y " + txtfecha2);
        var vacio = document.createTextNode("");
        caja[2].style.width = "100%";
        span[2].style.marginBottom = "3px";
        span[2].style.display = "block";
        span[2].style.fontFamily = "calibri";
        span[2].style.color = "red";
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[2].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[2].replaceChild(texto, span[2].firstChild);
    }
    
    else if(validaform(fechaacont) == false){
        correcto = false;
        
        var texto = document.createTextNode("*Sólo pueden ingresarse números");
        var vacio = document.createTextNode("");
        caja[2].style.width = "100%";
        span[2].style.marginBottom = "3px";
        span[2].style.display = "block";
        span[2].style.fontFamily = "calibri";
        span[2].style.color = "red";
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[2].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[2].replaceChild(texto, span[2].firstChild);
    }
    
    else if(fechaacont == ""){
        correcto = false;
        
    var texto = document.createTextNode("*El campo no puede estar vacío");
        var vacio = document.createTextNode("");
        caja[2].style.width = "100%";
        span[2].style.marginBottom = "3px";
        span[2].style.display = "block";
        span[2].style.fontFamily = "calibri";
        span[2].style.color = "red";
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[2].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[2].replaceChild(texto, span[2].firstChild);
    }
    
    else if(titulo == ""){
        correcto = false;
        
        var texto = document.createTextNode("*El campo no puede estar vacío");
        var vacio = document.createTextNode("");
        caja[4].style.width = "100%";
        span[3].style.marginBottom = "3px";
        span[3].style.display = "block";
        span[3].style.fontFamily = "calibri";
        span[3].style.color = "red";
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[3].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[3].replaceChild(texto, span[3].firstChild);
    }
    
    else if(descripcion == ""){
        correcto = false;
        
        var texto = document.createTextNode("*El campo no puede estar vacío");
        var vacio = document.createTextNode("");
        span[4].style.marginBottom = "3px";
        span[4].style.display = "block";
        span[4].style.fontFamily = "calibri";
        span[4].style.color = "red";
//Los nodos vacios se convierten en el primer hijo de los label que necesitamos utilizar               
        span[4].appendChild(vacio);
//Reemplazamos el primer hijo por la cadena de texto correspondiente
        span[4].replaceChild(texto, span[4].firstChild);
    }
    
    else{
        correcto = true;
        guardar();
    }
}

/* Llama la Fuction Guardar*/
var boton = document.getElementById("finalizar");
 if(boton.addEventListener){
    boton.addEventListener("click", crearlinea, false);
}

/* Llama la Fuction Guardar*/
var boton = document.getElementById("nuevo");
 if(boton.addEventListener){
    boton.addEventListener("click", validaform2, false);
}