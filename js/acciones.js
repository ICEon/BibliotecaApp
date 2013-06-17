	
	var ID_Usuario = "";
	
		function buscar(T)
	{
	 datos = "titulo="+T;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.200/Biblioteca_/Buscar_m.php",
		data: datos
	}).done(function(msg) {
		alert (msg);

        if(msg == "*" || msg == null)
         {
          alert ("No se econtraron titulos con ese nombre");
         }
        else
         {
	      var OUsuario = jQuery.parseJSON(msg);
          
//		  for (i=1 to OUsuario.length
		  
		alert (OUsuario.length);
		  
	//	  $('.Resultados').append('<p align="center">' + ID_Usuario +'</p>');
		  
         }

	});	 	
	}
	
function login(U,P){
	datos = "usuario="+U+"&password="+P;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.200/Biblioteca_/Log_in_m.php",
		data: datos
	}).done(function(msg) {
		alert (msg);

        if(msg == "" || msg == null)
         {
          alert ("Nombre de usuario y/o password incorrecto");
         }
        else
         {
	      var OUsuario = jQuery.parseJSON(msg);
          ID_Usuario = OUsuario.Usuario;
		  alert ("Bienvenido" + ID_Usuario);		  
		  
		  $.mobile.changePage( "index.html#Busqueda");
		  $('.NombreUsuario').append('<p align="center">' + ID_Usuario +'</p>');
		  
         }

	});
 } //login


$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
//		alert ("listo");
			$('.Enviar').tap(function(){
		var formulario = $(this).parents('form');
//alert (formulario.attr('name'));
	switch(formulario.attr('name'))
	{
			case 'log':
var usuario = document.getElementById('Usuario').value;
var password = document.getElementById('Password').value;
//alert (usuario);
//alert (password);
		//	var usuario = $('input[Usuario]').val();
		//	var password = formulario.children('input:eq(1)').val();
login(usuario,password);

				break;	

case 'buscar':
var titulo = document.getElementById('BTitulo').value;
alert (titulo);
buscar(titulo);


break;
		}
	});//tap	
	});//device
});//document
