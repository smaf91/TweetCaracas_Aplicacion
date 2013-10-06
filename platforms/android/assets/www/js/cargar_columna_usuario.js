$(document).ready(function(){
  var usuario = localStorage['usuario_autenticado'];
  var data_file = "http://0.0.0.0:8000/"+usuario+"/conjunto_columnas/"+localStorage['tipo_columna']+"/";
  var http_request = new XMLHttpRequest();
  
  http_request.onreadystatechange = function(){
    if (http_request.readyState == 4) {
      var result = JSON.parse(http_request.responseText);
      
      for (var i=0; i < result.length; i ++) {
        var items = [];
        items.push("<div id='"+result[i]+"'><div id='mask' class='hero-unit' style='padding-left: 30px;'><table style='width: 100%'><td style='width:40px;' valign='top'> <button onClick='borrar_columna(\""+result[i]+"\")' id='borrar' class='btn btn-danger' style='margin: 10px; padding: 5px; padding-bottom: 0px; padding-top: 0px'> x </button></td><td style='font-size: small; width: 75%'><table><tr><p>"+result[i]+"</p></tr></table></td><td><button style='float-right' id='ver' onClick='ver_columna(\""+result[i]+"\")' class='btn btn-primary'> Editar </button></td</table></div>");
        
        $(items).appendTo("#columnas-usuario");
      }
    }    
  }
  
  http_request.open("GET", data_file, true);
  http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(localStorage['usuario_autenticado'] + ':' + localStorage['clave']));
  http_request.send();
});

function agregar_columna() {
  
  var usuario = localStorage['usuario_autenticado'];
  var nueva_columna = $("#form-search").serializeArray()[0]['value'];
  var data_file = "http://0.0.0.0:8000/"+usuario+"/conjunto_columnas/"+nueva_columna+"/tipo="+localStorage['tipo_columna']+"/";
  var http_request = new XMLHttpRequest();

  http_request.open("POST", data_file, false);
  http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(localStorage['usuario_autenticado'] + ':' + localStorage['clave']));
  http_request.send();
}

function borrar_columna(columna) {
  var usuario = localStorage['usuario_autenticado'];
  var data_file = "http://0.0.0.0:8000/"+usuario+"/conjunto_columnas/"+columna+"/tipo="+localStorage['tipo_columna']+"/";
  var http_request = new XMLHttpRequest();
  
  document.getElementById(columna).remove();
  http_request.open("DELETE", data_file, false);
  http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(localStorage['usuario_autenticado'] + ':' + localStorage['clave']));
  http_request.send();
  
}

function ver_columna(columna){
  
  localStorage['nombre_columna'] = columna;
  window.location.href = "contenido_columna.html";
  
}