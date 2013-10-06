function dm(){

    var user = $("#formD").serializeArray()[0]['value'];
    var text = $("#formD").serializeArray()[1]['value'];
    user = user.substring(1,user.length)
    var data_file = "http://0.0.0.0:8000/"+localStorage['usuario_autenticado']+"/dm/text="+text+"/u="+user+"/";
    var http_request = new XMLHttpRequest();
    
    http_request.open("POST", data_file, false);
    http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(localStorage['usuario_autenticado'] + ':' + localStorage['clave']));
    http_request.send();
}
