
  $(document).ready(function(){
    $("#insertar").submit(function(){
      var usuario = localStorage['usuario_autenticado'];
      var x = $("#color").css('backgroundColor');
      $("#color").attr('value',x);
      $("#color").css({'text-color':x});
      var objeto_serializado = $("#insertar").serializeArray();
      var campo = objeto_serializado[0]['value'].substring(1,objeto_serializado[0]['value'].length);
      var primer_caracter = objeto_serializado[0]['value'].split("");
      var tipo = "";
      
      if (primer_caracter[0] == "@") {
        tipo = "usuario";
        $("#insertar").attr('action',"personalizar_columna.html");
      } else if (primer_caracter[0] == "#") {
        tipo = "hashtag";
      } else {
        tipo = "lista";
        campo = objeto_serializado[0]['value'];
      }
      
//       http_request.onreadystatechange = function (oEvent) {  
//         if (http_request.readyState === 4) {  
//               $("#insertar").attr('action',"personalizar_columna.html");
//         }  
//       };
      
      
      var data_file = "http://0.0.0.0:8000/"+usuario+"/mascaras/";
      data_file = data_file + "t=" + tipo + "/v=" + campo + "/c=" + x + "/";
      var request = new XMLHttpRequest();
      request.open("POST", data_file, false);
      request.send();
    });
  });
  
  $(document).ready(function () { 
    $('#color').val('');
  });
  
  $(document).ready(function() {
    $('#demo').hide();
    $('#picker').farbtastic('#color');
  });
  