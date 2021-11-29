//Crear la tabla en gestionar productos
function crearTablaProductos(productos) {
    var cadena = "<table id='tableProd'><thead><tr><th>Nombre</th><th>Marca</th><th>Categoria</th><th>Cantidad</th><th>Precio</th><th>Resumen</th><th>Descripción</th><th>Acciones</th></tr></thead><tbody id='tableProdBody'>";//SEDIVIDE LA TABLA ENTRE THEAD Y TBODY PARA QUE AL INSERTAR UN ELEMENTO NUEVO SE PUEDA USAR EL INNERHTML DEL TBODY
    
    //Itero entre cada objeto producto
    for(var i=0; i<productos.length;i++){
    var prod = productos[i];
    cadena +=
        "<tr><td>" + prod.nombre + "</td><td>" + prod.marca + "</td><td>" + prod.categoria + "</td><td>" + prod.unidades + "</td><td>" + prod.precio + "</td><td>" + prod.resumen + "</td><td>" + prod.descripcion + "</td><td><button class='eliminar'>Eliminar</button></td></tr>";
    }
    cadena += "</tbody></table>";  
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
    //funcion limpiar campos /LIMPIAR CAMPOS .VALUE VACIO
    function limpiarCampos(){
        document.getElementById('nombre').value='';
        document.getElementById('marca').value='';
        document.getElementById('categoria').value='seleccionar';
        document.getElementById('cantidad').value='';
        document.getElementById('resumen').value='';
        document.getElementById('descripcion').value='';
        document.getElementById('precio').value='';
    }
    //AÑADIR Oculto el boton
    document.getElementById("botonAniadir").addEventListener('click',function(){
        document.getElementById("formulario").style.display="block";
        document.getElementById("botonAniadir").style.display="none";
    });
    document.getElementById("cancelar").addEventListener('click',function(){
    //llamar a la funcion que limpia los campos
        limpiarCampos();
        document.getElementById("formulario").style.display="none";
        document.getElementById("botonAniadir").style.display="block";
    });
    
    document.getElementById("aceptar").addEventListener('click',function(){
        var errores =[];
        if(document.getElementById('nombre').value.length==0){
            errores.push('El nombre es obligatorio');
        }
        if(document.getElementById('marca').value.length==0){
            errores.push('La marca es obligatoria');
        }
        if(document.getElementById('categoria').value.length==0){
            errores.push('La categoria es obligatoria');
        }
        
        if(document.getElementById('cantidad').value.length==0){
            errores.push('La cantidad es obligatoria');
        }
        if(document.getElementById('cantidad').value <= 0){
            errores.push('La cantidad no puede ser menor que 0');
        }
        if(document.getElementById('resumen').value.length==0){
            errores.push('El resumen es obligatorio');
        }
        if(document.getElementById('descripcion').value.length==0){
            errores.push('La descripcion es obligatoria');
        }
        if(document.getElementById('precio').value.length==0){
            errores.push('El precio es obligatoria');
        }
        if(errores.length==0){
            //var htmlAntiguo=document.getElementById('tableProdBody').innerHTML;
            //pendiente: escapar posible codigo html en los inputs
            document.getElementById('tableProdBody').innerHTML="<tr><td>" + document.getElementById('nombre').value + "</td><td>" + document.getElementById('marca').value + "</td><td>" + document.getElementById('categoria').value + "</td><td>" + document.getElementById('cantidad').value + "</td><td>" + document.getElementById('precio').value + "</td><td>" + document.getElementById('resumen').value + "</td><td>" + document.getElementById('descripcion').value + "</td><td><button class='eliminar'>Eliminar</button></td></tr>" + document.getElementById('tableProdBody').innerHTML;
            
            document.getElementById("formulario").style.display="none";
            document.getElementById("botonAniadir").style.display="block";
            limpiarCampos();//LIMPIAR CAMPOS
        }else{
            var htmlErrores='<p>El formulario tiene errores: </p><ul>';
            for(var i=0;i<errores.length;i++){
                htmlErrores += 
                '<li>'+errores[i]+'</li>';
            }
            htmlErrores += '</ul>';
            document.getElementById('errores').innerHTML=htmlErrores;         
        }
        
    });
});