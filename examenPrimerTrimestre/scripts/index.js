
//Función para mostrar los objetos producto 
function crearProdcutos(productos) {
var cadena = "";

//Itero entre cada objeto producto
//se ha puesto al div que contiene el producto un onclick que redirige a la pagina producto.html?idProd="+i+" añade un parametro idProd a la url y asi despues compararlo con al atributo del objeto
for(var i=0; i<productos.length;i++){
    var prod = productos[i];
    cadena +=
    "<div onclick='window.location=\"./producto.html?idProd="+i+"\"' class='prod'><img src="+prod.foto+" height='200px'><br/><h2>" +
    prod.nombre +
    "</h2><br/><p>" +
    prod.resumen +
    "</p></div>";
}  
return cadena;//devuelve una cadena con el html que pinta cada producto
}


window.addEventListener("DOMContentLoaded", function () {//todo lo que debe esperar a que se cargue la pagina se mete en esta función



    //TODOS LOS PRODUCTOS
    var todosLosProductos = crearProdcutos(objArrayProducto);//le paso por parametro la variable a la que le asigné todos los productos


    document.getElementById("seccionProductos").innerHTML = todosLosProductos;// le meto al div los productos



    //FILTROS


    function filtrarLuces() {
        var lucesProds=[];//creo un array vacio y le voy metiendo los productos filtrados por una categoria específica
        for(var i=0;i<objArrayProducto.length;i++){
        var prod=objArrayProducto[i];
        if (prod.categoria === "luces"){
            lucesProds.push(prod);
        }
        }
        var filteredProducts = crearProdcutos(lucesProds);//llamo a la funcion crear productos y le paso los productos filtrados para que los vaya pintando
        document.getElementById("seccionProductos").innerHTML = filteredProducts;
    }


    function filtrarCerraduras() {
        var cerradurasProds=[];//creo un array vacio y le voy metiendo los productos filtrados por una categoria específica
        for(var i=0;i<objArrayProducto.length;i++){
        var prod=objArrayProducto[i];
        if (prod.categoria === "cerraduras"){
            cerradurasProds.push(prod);
        }
        }
        var filteredProducts = crearProdcutos(cerradurasProds);
        document.getElementById("seccionProductos").innerHTML = filteredProducts;
    }
    function filtrarAires() {
        var airesProds=[];//creo un array vacio y le voy metiendo los productos filtrados por una categoria específica
        for(var i=0;i<objArrayProducto.length;i++){
        var prod=objArrayProducto[i];
        if (prod.categoria === "aires acondicionados"){
            airesProds.push(prod);
        }
        }
        var filteredProducts = crearProdcutos(airesProds);
        document.getElementById("seccionProductos").innerHTML = filteredProducts;
    }
    function filtrarBotones() {
        var botonesProds=[];//creo un array vacio y le voy metiendo los productos filtrados por una categoria específica
        for(var i=0;i<objArrayProducto.length;i++){
        var prod=objArrayProducto[i];
        if (prod.categoria === "botones"){
            botonesProds.push(prod);
        }
        }
        var filteredProducts = crearProdcutos(botonesProds);
        document.getElementById("seccionProductos").innerHTML = filteredProducts;
    }
    //filtroLu.addEventListener("click", filtrarLuces);
    var filtroLu = document.getElementById("filtro-luces");//asigno a una variable el boton de filtrar
    //llamo a la función de filtrar luces
    filtroLu.addEventListener("click", filtrarLuces);
    var filtroBot = document.getElementById("filtro-botones");
    filtroBot.addEventListener("click",filtrarBotones);
    var filtroAir = document.getElementById("filtro-aires")
    filtroAir.addEventListener("click",filtrarAires);
    var filtroCerr = document.getElementById("filtro-cerraduras");
    filtroCerr.addEventListener("click",filtrarCerraduras);

    //Quitar Filtros
    var limpiar = document.getElementById("limpiar-filtros");
    limpiar.addEventListener("click", function () {
        var todosLosProductos = crearProdcutos(objArrayProducto);
        document.getElementById("seccionProductos").innerHTML = todosLosProductos;
    });


    //https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName
    var eliminarButtons = document.getElementsByClassName("eliminar");

    for(var i=0; i<eliminarButtons.length;i++){
        var fila = eliminarButtons[i].parentNode.parentNode;//el primer parentNode del button es el td y el parent del td es el tr
        //button.addEventListener("click", function () {
        eliminarButtons[i].addEventListener("click", function () {
        //busco la fila que es padre del boton en el que hice click
        fila.parentNode.removeChild(fila);
        });
    };

    

});
    