
  $(document).ready(function(){
    $("#insertar").submit(function(){
      var tipo = localStorage['tipo'];
      var usuario = localStorage['usuario_autenticado'];
      var x = $("#color").css('backgroundColor');
      $("#color").attr('value',x);
      $("#color").css({'text-color':x});
      var objeto_serializado = $("#insertar").serializeArray();
      var campo = objeto_serializado[0]['value'];
      var primer_caracter = objeto_serializado[0]['value'].split("");
      
      if (primer_caracter[0] == "@" || primer_caracter[0] == "#") {
       campo = campo.substring(1,campo.length);
      }
      
      var data_file = "http://0.0.0.0:8000/"+usuario+"/mascaras/"+"t="+tipo+"/v="+campo+"/c="+x+"/";
      var http_request = new XMLHttpRequest();
//       alert(data_file);
      
      http_request.open("POST", data_file, false);
//       http_request.setRequestHeader('Authorization', "Basic " + Base64.encode(usuario + ':' + localStorage['clave']));
      http_request.send();
    });
  });
  
  $(document).ready(function () { 
    $('#color').val('');
  });
  
  $(document).ready(function() {
    $('#demo').hide();
    $('#picker').farbtastic('#color');
  });
  