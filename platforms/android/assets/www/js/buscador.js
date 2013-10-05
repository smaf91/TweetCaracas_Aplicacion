function buscar() {
  
  var usuario = localStorage['usuario_autenticado'];
  var busqueda = $("#form-search").serializeArray()[0]['value'];
  var data_file = "http://0.0.0.0:8000/"+usuario+"/busqueda/s="+busqueda+"/"
  var http_request = new XMLHttpRequest();
  
  http_request.onreadystatechange = function(){

    if (http_request.readyState == 4  )
    {
      var result = JSON.parse(http_request.responseText);
      create_modal(busqueda,result);
    }
    
  }
  
  
  http_request.open("GET", data_file, false);
//   http_request.setRequestHeader('Authorization', "Basic " + Base64.encode("offi91" + ':' + "12345"));
  http_request.send();
//       $("#modal-busqueda").modal({'backdrop': 'static'});
};

function create_modal(busqueda,resultados){
//   alert(busqueda);
//   alert(resultados);
  var items = [];
  items.push("<div id='modal-busqueda' class='modal hide fade'><div class='modal-header'><button onClick='document.location.reload(true)' type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button><h3> Resultados de: "+busqueda+"</h3></div><div class='modal-body'><div id='resultados-busqueda'></div></div></div>");
  
  $(items).appendTo("body");
  mostrar_tweets(resultados);
  
};

function mostrar_tweets(result) {
  
            for (var i = 0, len=result.length; i<len; i++) {
                var items = ''
                var color = ""
                items = items + "<div style='margin: 5px; border: 1px solid rgba(107, 104, 104, 0.31); border-radius: 4px'>";
                items = items + "<table class ='table table-bordered' style='margin: 0px; border: 1px solid "+result[i]['color']+";"; 
                items = items + "background:"+result[i]['color']+";'>";
                items = items + "<tr>";
                items = items + "<td rowspan='2' style='width: 40px; height: 40px; padding: 0px; border: "+result[i]['color']+";'>";
                items = items + "<a href='perfil.html'>";
                items = items + "<img style='border-radius: 4px' src='"+result[i]['image']+"'/>";
                items = items + "</a>";
                items = items + "</td>";
                items = items + "<td style='padding: 0px; border: "+ result[i]['color'] +";'><b>" + result[i]['name'] + "</b>";
                items = items + " @" + result[i]['screen_name'] + "</td>";
                items = items + "<td style='border-color:"+result[i]['color']+";'>";
                items = items + "<p style='text-align: right; margin-bottom: 0px; padding: 0px'></p></td>";
                items = items + "<td style='padding: 3px; border-color:" + result[i]['color'] + " ;'>";
                items = items + "<center>";
                items = items + "<div class='btn-group'>";
                items = items + "<button class='btn' style='padding: 2px'>";
                items = items + "<i class='icon-share-alt'></i>";
                items = items + "</button>";
                items = items + "<button class='btn' id='rt' style='padding: 2px'>";
                items = items + "<i class='icon-retweet'><input type='hidden' name='id' value='"+result[i]['id']+"'/></i>";
                items = items + "</button>";
                items = items + "<button class='btn' style='padding: 2px'>";
                items = items + "<i class='icon-star'></i>";
                items = items + "</button>";
                items = items + "<button class='btn' style='padding: 2px'>";
                items = items + "<i class='icon-share'></i>";
                items = items + "</button>";
                items = items + "</div>";
                items = items + "</center>";
                items = items + "</td>";
                items = items + "</tr>";
                items = items + "<td colspan='3' style='padding: 0px; border-color: "+result[i]['color']+";'>";
                items = items + " " + result[i]['text'] + " ";
                items = items + "</td> </table> </div>";                

                $(items).appendTo("#resultados-busqueda");

                // Formato al slider
//                 $(".bx-viewport").css("height","auto");

            }
  
};