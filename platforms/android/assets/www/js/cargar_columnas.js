$(document).ready(function(){
    
    cargar_tweets("timeline");

    var usuario = localStorage['usuario_autenticado'];
    var data_file = "http://0.0.0.0:8000/"+ usuario +"/conjunto_columnas/"
    var http_request = new XMLHttpRequest();
    
    
    http_request.onreadystatechange  = function(){
	if (http_request.readyState == 4  ){
	    
	    // Javascript function JSON.parse to parse JSON data
	    
	    // alert(http_request.responseText);
	    
	    var columnas = JSON.parse(http_request.responseText);
	    
	// result variable now contains the data structure and can
	// be accessed as result.name and result.country.
	
	    for (var i = 0, len=columnas.length; i<len; i++) {
		var items = '';
		var titulo = "<p style='text-align:center; padding-bottom:5px'> <b>"+ columnas[i] +"</b> </p>";
		items = items + '<li>';

		//Titulo
		items = items + "<div id='titulo_columna'>\n";
		items = items + titulo;
		items = items + "</div>\n";
		
		//Div para rellenar los tweets
 		items = items + "<div id='"+ columnas[i]  +"'>\n";
		items = items + "</div>\n";

		//Gif de cargando
		items = items + "<center>\n";
		items = items + "<img src='images/ajax-loader.gif'/>\n";
		items = items + "</center>\n";

		items = items + '</li>\n';
		$(items).appendTo("#col");
		cargar_tweets(columnas[i]);
	    }
	}
	
    }
    

    http_request.open("GET", data_file, false);
    http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(localStorage['usuario_autenticado'] + ':' + localStorage['clave']));
    http_request.send();    
    $('.bxslider').bxSlider();	
    

});
