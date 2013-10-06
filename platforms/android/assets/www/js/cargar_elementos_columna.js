$(document).ready(function(){
  var tipo = localStorage['tipo_columna'];
  var nombre_columna = localStorage['nombre_columna'];
  var usuario = localStorage['usuario_autenticado'];
  
  var data_file = "http://0.0.0.0:8000/"+usuario+"/conjunto_columnas/"+nombre_columna+"/";
  var http_request = new XMLHttpRequest();
  
  http_request.onreadystatechange = function(){
    if (http_request.readyState == 4) {
      var result = JSON.parse(http_request.responseText);
      
      for (var i=0; i < result.length; i ++) {
        var items = [];
        items.push("<div id='"+result[i]['entrada']+"'><div id='mask' class='hero-unit' style='padding-left: 30px;'><table style='width: 100%'><td style='width:40px;' valign='top'> <button onClick='borrar_usuario(\""+result[i]['entrada']+"\")' id='borrar' class='btn btn-danger' style='margin: 10px; padding: 5px; padding-bottom: 0px; padding-top: 0px'> x </button></td><td style='font-size: small; width: 75%'><table><tr><p>"+result[i]['entrada']+"</p></tr></table></td><td></td></table></div></div>");
        
        $(items).appendTo("#elementos");
      }
    }    
  }
  
  http_request.open("GET", data_file, true);
  http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(localStorage['usuario_autenticado'] + ':' + localStorage['clave']));
  http_request.send();
});

function agregar_usuario() {
  
  var tipo = localStorage['tipo_columna'];
  var nombre_columna = localStorage['nombre_columna'];
  var usuario = localStorage['usuario_autenticado'];
  var valor = $("#form-search").serializeArray()[0]['value'];
  if (valor.split("")[0] == "#") {
    valor = valor.substring(1,valor.length)
  }
  var data_file = "http://0.0.0.0:8000/"+usuario+"/conjunto_columnas/"+nombre_columna+"/tipo="+tipo+"/v="+valor+"/";
  var http_request = new XMLHttpRequest();

  http_request.open("POST", data_file, false);
  http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(localStorage['usuario_autenticado'] + ':' + localStorage['clave']));
  http_request.send();
}

function borrar_usuario(usuario_eliminar) {
  var usuario = localStorage['usuario_autenticado'];
  var tipo = localStorage['tipo_columna'];
  var columna = localStorage['nombre_columna'];
  var data_file = "http://0.0.0.0:8000/"+usuario+"/conjunto_columnas/"+columna+"/tipo="+tipo+"/v="+usuario_eliminar+"/";
  var http_request = new XMLHttpRequest();
  
  document.getElementById(usuario_eliminar).remove();
  http_request.open("DELETE", data_file, false);
  http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(localStorage['usuario_autenticado'] + ':' + localStorage['clave']));
  http_request.send();
  
}



