function twittear(){
    
    var form = $("#formT").serializeArray()[0]['value'];
    var data_file = "http://0.0.0.0:8000/"+localStorage['usuario_autenticado']+"/tweet/?text="+form;
    var http_request = new XMLHttpRequest();
    
    http_request.open("POST", data_file, false);
    http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(localStorage['usuario_autenticado'] + ':' + localStorage['clave']));
    http_request.send();
}
