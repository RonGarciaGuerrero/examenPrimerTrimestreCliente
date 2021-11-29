

window.addEventListener("DOMContentLoaded", function () {//todo lo que debe esperar a que se cargue la pagina se mete en esta función
    // https://www.sitepoint.com/get-url-parameters-with-javascript/
    var idProducto = new URLSearchParams (window.location.search).get('idProd');//parametro que hay que cogerlo de la url
    var producto=null;
    for(var i=0;i<objArrayProducto.length;i++){
        if(objArrayProducto[i].id==idProducto){
            producto=objArrayProducto[i];
            break;//dejo de buscar
        }
    }
    if(producto!=null){//aqui relleno el html de cada producto
        document.getElementById('fotoPro').src = producto.foto; //para la foto es .src
        document.getElementById('resPro').innerHTML = producto.resumen;
        document.getElementById('nomPro').innerHTML = producto.nombre;
        document.getElementById('precioPro').innerHTML = producto.precio + '€';
        document.getElementById('descPro').innerHTML = producto.descripcion;
        document.getElementById('categoriaPro').innerHTML = producto.categoria;
    }


});
