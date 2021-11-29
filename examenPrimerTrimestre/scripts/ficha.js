

window.addEventListener("DOMContentLoaded", function () {//todo lo que debe esperar a que se cargue la pagina se mete en esta función
    
    var pintarProducto = document.getElementById('mostrarFicha');
    

    function crearFicha(productos) {
        var cadena = "<p>";//SEDIVIDE LA TABLA ENTRE THEAD Y TBODY PARA QUE AL INSERTAR UN ELEMENTO NUEVO SE PUEDA USAR EL INNERHTML DEL TBODY
        
        //Itero entre cada objeto producto
        for(var i=0; i<productos.length;i++){
        var prod = productos[i];
        cadena +=
         
        return cadena;//devuelve una cadena con el html que pinta cada producto
    }


});