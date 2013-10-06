function retweet(id){
    var usuario = localStorage['usuario_autenticado'];
    var http_request = new XMLHttpRequest();
    
    
    // http_request.onreadystatechange  = function(){
    // 	if (http_request.readyState == 4  ){
    // redireccionar
    // 	    }
    // 	}
    
    var data_file = "http://0.0.0.0:8000/"+ usuario +"/tweet/" + "?id="+id;
    http_request.open("PUT", data_file, false)
    http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(localStorage['usuario_autenticado'] + ':' + localStorage['clave']));
    http_request.send();    
};
