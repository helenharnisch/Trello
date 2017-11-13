//texto "añadir una lista" se muestra al inicio y al hacer click se debe ocultar
function ocultar(){
    document.getElementById('ocultar').style.display = 'none';
}

//se muestra formulario despues de ocultar "anadir una lista"
function mostrar(){
    document.getElementById('formulario').style.display = 'block';
}


(function(){
	// Variables
	var lista = document.getElementById("lista");
	var	nuevaLista = document.getElementById("nuevaLista");
	var	btnNuevaLista = document.getElementById("btnGuardar");
    var btnLista = document.getElementById("btnLista");
    var btnCerrar = document.getElementById("btnCerrar");

    // Funciones
  	var agregarLista = function(){
        // Obtener contenido de nuestro input
  		var tarea = nuevaLista.value;
        // Crear un elemento (li)
  		var nuevaTarea = document.createElement("li");
        // Crear un elemento (a)
		var enlace = document.createElement("a");
        // Crear nodo de texto
  		var contenido = document.createTextNode(tarea);
        // Crear Boton para lista
        /*var btnLista = document.createElement("button");


        btnLista.style.width = "300px";
        btnLista.style.height = "40px";
        btnLista.style.background = "#e8e8eb";
        btnLista.style.border = "none";
        btnLista.style.borderRadius = "0px 0px 4px 4px";
        btnLista.style.cursor = "pointer";*/


        // Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href (para que sea clickable)
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);
        // Agregar boton a la lista
        //lista.appendChild(btnLista);
        // Añadir placeholder a boton
        //btnLista.setAttribute("placeholder", "Añadir una tarjeta...");

        // Añadir una tarjeta (que si funciona pero necesito un boton)
        var elemento = document.createElement("li");
        var enlace = document.createElement("a");
        var contenido = document.createTextNode("Añadir una tarjeta...");

        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        elemento.appendChild(enlace);

        var padre = document.getElementById("lista");
        padre.appendChild(elemento);

    };

    var textarea = function(){
        alert("linda");
    }

    var floatLeft = function(){
        document.getElementById("formulario").style.cssFloat = "left";
        document.getElementById("formulario").style.marginLeft = "310px";
    };

    var cerrarFormulario = function(){
     document.getElementById('formulario').style.display = 'none';
    };

    // Eventos

    // Agregar Tarea
    btnNuevaLista.addEventListener("click", agregarLista);
    // Posicionar izquierda formulario
    btnNuevaLista.addEventListener("click", floatLeft);
    // Cerrar formulario
    btnCerrar.addEventListener("click", cerrarFormulario);
    // llamar textarea
    btnLista.addEventListener("click", textarea);

}());
