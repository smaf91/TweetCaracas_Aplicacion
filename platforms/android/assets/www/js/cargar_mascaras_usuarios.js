
$(document).ready(function(){
  
    localStorage['tipo'] = "usuario";
    var usuario = localStorage['usuario_autenticado'];
    var data_file = "http://0.0.0.0:8000/"+usuario+"/mascaras/t=usuario/";
    var http_request = new XMLHttpRequest();

    http_request.onreadystatechange  = function(){
      if (http_request.readyState == 4  ) {
          var result = JSON.parse(http_request.responseText);
          
          for (var i = 0, len=result.length; i<len; i++) {
            var items = []
            items.push("<div id='"+result[i]['fields']['usuario']+"'>");
            items.push("<div id='mask' class='hero-unit' style='background: "+result[i]['fields']['color']+"'>");
            items.push("<table>");
            items.push("<td style='width:40px;' valign='top'> ");
            items.push("<center>");
            items.push("<button onClick='borrar_mascara(\""+result[i]['fields']['usuario']+"\")' class='btn btn-danger' style='margin: 10px; padding: 5px; padding-bottom: 0px; padding-top: 0px'> x </button>");
            items.push("<center>");
            items.push("</td>");
            items.push("<td>");
            items.push("<h5><b>@"+result[i]['fields']['usuario']+"</b></h5>");
            items.push("</td>");
            items.push("</table>");
            items.push("</div>");
            items.push("</div>");
            
            $( "<ul/>", {
                "class":"my-new-list",
                "style": "margin: 0px 0px 0px 0px",
                html: items.join("")
            }).appendTo("#mascaras_usuarios");
          }
      }
      
    }
  
  http_request.open("GET", data_file, true);
//   http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(usuario + ':' + localStorage['clave']));
  http_request.send();
  
});

function borrar_mascara(mascara){
  var usuario = localStorage['usuario_autenticado'];
  var tipo = localStorage['tipo'];
  var data_file = "http://0.0.0.0:8000/"+usuario+"/mascaras/t="+tipo+"/v="+mascara+"/";
  var http_request = new XMLHttpRequest();
  
  document.getElementById(mascara).remove();
  http_request.open("DELETE", data_file, false);
//   http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(usuario + ':' + localStorage['clave']));
  http_request.send();
  
}