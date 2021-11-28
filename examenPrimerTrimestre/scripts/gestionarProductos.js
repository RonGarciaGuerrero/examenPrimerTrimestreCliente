//Crear la tabla en gestionar productos
function crearTablaProductos(productos) {
    var cadena = "<table class='tableProd'><tr><th>Nombre</th><th>Marca</th><th>Categoria</th><th>Disponibilidad</th><th>Resumen</th><th>Descripción</th><th>Acciones</th></tr>";
    
    //Itero entre cada objeto producto
    for(var i=0; i<productos.length;i++){
    var prod = productos[i];
    cadena +=
        "<tr><td>" + prod.nombre + "</td><td>" + prod.marca + "</td><td>" + prod.categoria + "</td><td>" + prod.unidades + "</td><td>" + prod.resumen + "</td><td>" + prod.descripcion + "</td><td><button class='eliminar'>Eliminar</button></td></tr>";
    }
    cadena += "</table>";  
    return cadena;//devuelve una cadena con el html que pinta cada producto
}

window.addEventListener("DOMContentLoaded", function () {//todo lo que debe esperar a que se cargue la pagina se mete en esta función

    //TODOS LOS PRODUCTOS
    var todosLosProductos = crearTablaProductos(objArrayProducto);//le paso por parametro la variable a la que le asigné todos los productos

    document.getElementById("tablaProductos").innerHTML = todosLosProductos;// le meto al div los productos


    /*Aqui se resuelve el eliminar filas de la tabla de productos*/
    //Primero se usa el getElementsByClassName que devuelve un array de los elementos hijos que tengan todos los nombres de clase pasada por parametro 
    //https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName
    var eliminarButtons = document.getElementsByClassName("eliminar");

    for(var i=0; i<eliminarButtons.length;i++){
        var boton = eliminarButtons[i];//voy iterando por cada uno de los botones de la tabla  y se lo asigno a una variable

        boton.addEventListener("click", function (event) {
            //ahora busco el boton exacto en el que se hizo click 
            var botonActual = event.currentTarget;
            // voy buscando en el arbol el padre del td que es el tr y asi eliminar la fila entera
            botonActual.parentNode.parentNode.parentNode.removeChild(botonActual.parentNode.parentNode);
            //window.location = "template.html"; 
            //EJEMPLO DE COMO REDIJIRIR DESPUES DE BORRAR
        });
    };



});