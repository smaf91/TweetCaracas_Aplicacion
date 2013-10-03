
var json_usuario = {};
  
$(document).ready(function(){
  $("#URL").click(function(){
  var data_file = "http://10.0.1.87:8000/lista_usuarios/";
  var http_request = new XMLHttpRequest();
        
  http_request.onreadystatechange = function(){
    if (http_request.readyState == 4) {
      var result = JSON.parse(http_request.responseText);
      json_usuario = result;
      var items = [];
      items.push(result['url'])
      $("<ul/>", {
        html: items.join("")
        }).appendTo("#link")
    }
  }

  http_request.open("POST", data_file, true);
  http_request.send();
  });
});

$(document).ready(function(){
  $("#subscribir").click(function(){
    
  var objeto_serializado = $("#insertar").serializeArray();
    
  var data_file = "http://10.0.1.87:8000/lista_usuarios/ot="+json_usuario['oauth_token']+"/os="+json_usuario['oauth_token_secret']+"/";
  var http_request = new XMLHttpRequest();
  json_usuario['pin'] = objeto_serializado[3]['value'];
  data_file = data_file + "p="+json_usuario['pin']+"/";
  
  http_request.open("POST", data_file, true);
  http_request.send();
  });
});
