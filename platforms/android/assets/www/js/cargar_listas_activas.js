$(document).ready(function(){
//   Cambiar el URL segun la IP en donde este corriendo el servidor.
    var data_file = "http://0.0.0.0:8000/offi91/listas_activas/"
    var http_request = new XMLHttpRequest();

   http_request.onreadystatechange  = function(){
      if (http_request.readyState == 4  )
      {
        var result = JSON.parse(http_request.responseText);
       for (var i = 0, len=result.length; i<len; i++) {
      var items = []
      items.push("<ul class='nav nav-pills nav-stacked'>");
      items.push("<li>");
      items.push("<a href='#' style='color: #848484; border-radius: 0; padding: 15px; margin: 0; border-top: 0.5px solid rgba(116, 116, 116, 0.20);border-bottom: 1px solid rgba(116, 116, 116, 0.20);'>");
      items.push("<button class='btn btn-danger' style='margin-right: 10px; padding: 5px; padding-bottom: 0px; padding-top: 0px'> x </button>");
      items.push(result[i]['nombre']);
      items.push("<p style='float:right; margin: 8px;'> 10 members </p>");
      items.push("</a>");
      items.push("</li>");
      items.push("</ul>");
      
      $( "<ul/>", {
        "class":"my-new-list",
        "style": "margin: 0px 0px 0px 0px",
        html: items.join("")
      }).appendTo("#listas");
    }
      }
   }
  http_request.open("GET", data_file, true);
  http_request.setRequestHeader('Authorization', "Basic " + Base64.encode("offi91" + ':' + "12345"));
  http_request.send();
});