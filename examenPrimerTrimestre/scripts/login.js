

window.addEventListener("DOMContentLoaded", function () {//todo lo que debe esperar a que se cargue la pagina se mete en esta función

    //se crea el objeto usuario administrador
    var usuarioAdmin = {'nombreUsuario':'Ron','password':'passworduno'};
    // Lo guardamos en localStorage, pasándolo a cadena con JSON
    localStorage.setItem('Ron', JSON.stringify(usuarioAdmin));
    // Creamos una nueva variable object2 con el valor obtenido de localStorage usando JSON recuperar el objeto inicial
    var usuarioAdmin2 = JSON.parse(localStorage.getItem('Ron'));
    //alert(usuarioAdmin2.nombreUsuario); // La alerta mostrará el usuario
    //alert(usuarioAdmin2.password); // La alerta mostrará la contraseña
    //alert(usuarioAdmin2.url);



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
