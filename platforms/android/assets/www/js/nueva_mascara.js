
  $(document).ready(function(){
    $("#insertar").submit(function(){
      var x = $("#color").css('backgroundColor');
      $("#color").attr('value',x);
      $("#color").css({'text-color':x});
      var objeto_serializado = $("#insertar").serializeArray();
      var campo = objeto_serializado[0]['value'].substring(1,objeto_serializado[0]['value'].length);
      var primer_caracter = objeto_serializado[0]['value'].split("");
      var tipo = "";
      
      if (primer_caracter[0] == "@") {
        tipo = "usuario";
      } else if (primer_caracter[0] == "#") {
        tipo = "hashtag";
      } else {
        tipo = "lista";
      }
      
      var data_file = "http://0.0.0.0:8000/offi91/mascaras/";
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