

window.addEventListener("DOMContentLoaded", function () {//todo lo que debe esperar a que se cargue la pagina se mete en esta función

    //se crea el objeto usuario administrador
    var usuarioAdmin = {'nombreUsuario':'ron','password':'ron'};
    // Lo guardamos en localStorage, pasándolo a cadena con JSON
    localStorage.setItem('Ron', JSON.stringify(usuarioAdmin));
    // Creamos una nueva variable object2 con el valor obtenido de localStorage usando JSON recuperar el objeto inicial
    var usuarioAdmin2 = JSON.parse(localStorage.getItem('Ron'));
    



    document.getElementById("iniciar").addEventListener('click',function(){
        var errores =[];
        //Validación del formulario
        if(document.getElementById('usuario').value.length == ''){
            errores.push('El usuario no puede estar vacio');
        }
        if(document.getElementById('password').value.length == ''){
            errores.push('La contraseña no puede estar vacia');
        }
        if(document.getElementById('usuario').value != usuarioAdmin2.nombreUsuario){
            errores.push('Nombre de usuario incorrecto');
        }
        if(document.getElementById('password').value != usuarioAdmin2.password){
            errores.push('Contraseña incorrecta');
        }

        if(errores.length==0){
            window.location = '../web/gestionarProductos.html';
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
