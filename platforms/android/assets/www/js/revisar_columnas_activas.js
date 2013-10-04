$(document).ready(function(){
  
  var data_file = "http://0.0.0.0:8000/"+localStorage['usuario_autenticado']+"/conjunto_columnas/";
  var http_request = new XMLHttpRequest();
  http_request.onreadystatechange = function(){
    if (http_request.readyState === 4) {
      var result = JSON.parse(http_request.responseText);
      var l = result.lenght;
      
      var i = 0;
      var e1 = false;
      var e2 = false;
      while (result[i] != null) {
        if (result[i] == "actividad") {
          e1 = true;
        } else if (result[i] == "favoritos") {
          e2 = true;
        }
        i++;
      }
      if (!e1) {
        $("#BAct").attr('disabled','disabled');  
      } if (!e2) {
        $("#BFav").attr('disabled','disabled');
      }
    }
  }
  
  http_request.open("GET", data_file, true);
  http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(localStorage['usuario_autenticado'] + ':' + localStorage['clave']));
  http_request.send();
});