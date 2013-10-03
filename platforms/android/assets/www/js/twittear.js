function twittear(){
  alert(localStorage['usuario_autenticado']);
  var form = $("#formT").serializeArray()[0]['value'];
  var data_file = "http://0.0.0.0:8000/"+localStorage['usuario_autenticado']+"/tweet/text=\""+form+"\"/";
  var http_request = new XMLHttpRequest();
  
  alert(data_file);
  http_request.open("POST", data_file, false);
  http_request.send();
}
