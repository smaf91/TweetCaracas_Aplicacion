
$(document).ready(function(){
    var data_file = "http://10.0.1.87:8000/offi91/mascaras/t=hashtag/";
    var http_request = new XMLHttpRequest();

    http_request.onreadystatechange  = function(){
      if (http_request.readyState == 4  ) {
          var result = JSON.parse(http_request.responseText);
          
          for (var i = 0, len=result.length; i<len; i++) {
            var items = []
            items.push("<div id='mask' class='hero-unit' style='background: "+result[i]['fields']['color']+"'>");
            items.push("<table>");
            items.push("<td style='width:40px;' valign='top'> ");
            items.push("<center>");
            items.push("<button class='btn btn-danger' style='margin: 10px; padding: 5px; padding-bottom: 0px; padding-top: 0px'> x </button>");
            items.push("<center>");
            items.push("</td>");
            items.push("<td>");
            items.push("<h5><b>"+result[i]['fields']['hashtag']+"</b></h5>");
            items.push("</td>");
            items.push("</table>");
            items.push("</div>");
            
            $( "<ul/>", {
                "class":"my-new-list",
                "style": "margin: 0px 0px 0px 0px",
                html: items.join("")
            }).appendTo("#mascaras_hashtags");
          }
      }
      
    }
  
  http_request.open("GET", data_file, true);
//   http_request.setRequestHeader('Authorization', "Basic " + Base64.encode("offi91" + ':' + "12345"));
  http_request.send();
  
});