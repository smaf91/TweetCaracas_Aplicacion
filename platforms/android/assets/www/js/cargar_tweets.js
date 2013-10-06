function cargar_tweets(columna){

    var usuario = localStorage['usuario_autenticado'];

    //   Cambiar el URL segun la IP en donde este corriendo el servidor.
    var data_file = "http://0.0.0.0:8000/"+usuario+"/columnas/"+columna+"/"
    //   var data_file = "http://127.0.0.1:8000/Offi91/columnas/timeline/"
    var http_request = new XMLHttpRequest();

    http_request.onreadystatechange = function(){

	if (http_request.readyState == 4  )
	{	    

	    var result = JSON.parse(http_request.responseText);
	    // result variable now contains the data structure and can
	    // be accessed as result.name and result.country.

	    for (var i = 0, len=result.length; i<len; i++) {
		var items = ''
		var color = ""
		items = items + "<div style='margin: 5px; border: 1px solid rgba(107, 104, 104, 0.31); border-radius: 4px'>";
		items = items + "<table class ='table table-bordered' style='margin: 0px; border: 1px solid "+result[i]['color']+";"; 
		items = items + "background:"+result[i]['color']+";'>";
		items = items + "<tr>";
		items = items + "<td rowspan='2' style='width: 40px; height: 40px; padding: 0px; border: "+result[i]['color']+";'>";
		items = items + "<a href='perfil.html'>";
		items = items + "<img style='border-radius: 4px' src='"+result[i]['image']+"'/>";
		items = items + "</a>";
		items = items + "</td>";
		items = items + "<td style='padding: 0px; border: "+ result[i]['color'] +";'><b>" + result[i]['name'] + "</b>";
		items = items + " @" + result[i]['screen_name'] + "</td>";
		items = items + "<td style='border-color:"+result[i]['color']+";'>";
		items = items + "<p style='text-align: right; margin-bottom: 0px; padding: 0px'>"+result[i]['created_at']+"</p></td>";
		items = items + "<td style='padding: 3px; border-color:" + result[i]['color'] + " ;'>";
		items = items + "<center>";
		items = items + "<div class='btn-group'>";
		items = items + "<button class='btn' style='padding: 2px'>";
		items = items + "<i class='icon-share-alt'></i>";
		items = items + "</button>";
		items = items + "<button class='btn' id='rt' onClick=retweet('"+result[i]['id']+"') style='padding: 2px'>";
		items = items + "<i class='icon-retweet'></i>";
		items = items + "</button>";
		items = items + "<button class='btn' style='padding: 2px'>";
		items = items + "<i class='icon-star'></i>";
		items = items + "</button>";
		items = items + "<button class='btn' style='padding: 2px'>";
		items = items + "<i class='icon-share'></i>";
		items = items + "</button>";
		items = items + "</div>";
		items = items + "</center>";
		items = items + "</td>";
		items = items + "</tr>";
		items = items + "<td colspan='3' style='padding: 0px; border-color: "+result[i]['color']+";'>";
		items = items + " " + result[i]['text'];
		items = items + "</td> </table> </div>";		

		var target = "#" + columna;

		$(items).appendTo(target);

		// Formato al slider
		$(".bx-viewport").css("height","auto");

	    }
	}
    }

    http_request.open("GET", data_file, false);
    http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(localStorage['usuario_autenticado'] + ':' + localStorage['clave']));
    http_request.send();

}
