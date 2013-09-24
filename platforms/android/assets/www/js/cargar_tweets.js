$(document).ready(function(){
    //   Cambiar el URL segun la IP en donde este corriendo el servidor.
    var data_file = "http://127.0.0.1:8000/Offi91/columnas/timeline/"
    var http_request = new XMLHttpRequest();
   
    
    http_request.onreadystatechange  = function(){
	if (http_request.readyState == 4  )
	{
	    // Javascript function JSON.parse to parse JSON data
	    
	    // alert(http_request.responseText);
	    var result = JSON.parse(http_request.responseText);

	    // result variable now contains the data structure and can
	    // be accessed as result.name and result.country.
	    
	    for (var i = 0, len=result.length; i<len; i++) {
		var items = []
		var color = ""
		items.push("<div style='border: 1px solid rgba(107, 104, 104, 0.31); border-radius: 4px'>");
		items.push("<table class ='table table-bordered' style='margin: 0px; border: 1px solid "+result[i]['color']+";"); 
		items.push("background:"+result[i]['color']+";'>");
		items.push("<tr>");
		items.push("<td rowspan='2' style='width: 40px; height: 40px; padding: 0px; border: "+result[i]['color']+";'>");
		items.push("<a href='perfil.html'>");
		items.push("<img src='"+result[i]['image']+"'/>");
		items.push("</a>");
		items.push("</td>");
		items.push("<td style='padding: 0px; border: "+ result[i]['color'] +";'><b>" + result[i]['name'] + "</b>");
		items.push(" @" + result[i]['screen_name'] + "</td>");
		items.push("<td style='border-color:"+result[i]['color']+";'>");
		items.push("<p style='text-align: right; margin-bottom: 0px; padding: 0px'>7pm</p></td>");
		items.push("<td style='padding: 3px; border-color:" + result[i]['color'] + " ;'>");
		items.push("<center>");
		items.push("<div class='btn-group'>");
		items.push("<button class='btn' style='padding: 2px'>");
		items.push("<i class='icon-share-alt'></i>");
		items.push("</button>");
		items.push("<button class='btn' style='padding: 2px'>");
		items.push("<i class='icon-retweet'></i>");
		items.push("</button>");
		items.push("<button class='btn' style='padding: 2px'>");
		items.push("<i class='icon-star'></i>");
		items.push("</button>");
		items.push("<button class='btn' style='padding: 2px'>");
		items.push("<i class='icon-share'></i>");
		items.push("</button>");
		items.push("</div>");
		items.push("</center>");
		items.push("</td>");
		items.push("</tr>");
		items.push("<td colspan='3' style='padding: 0px; border-color: "+result[i]['color']+";'>");
		items.push(" " + result[i]['text'] + " ");
		items.push("</td> </table>");
		
		$( "<ul/>", {
		    "class":"my-new-list",
		    "style": "margin: 0px 0px 0px 0px",
		    html: items.join("")
		}).appendTo("#tweets");
	    }
	}
    }
    
    http_request.open("GET", data_file, true);
    http_request.setRequestHeader('Authorization', "Basic " + Base64.encode("Offi91" + ':' + "12345"));
    http_request.send();

});

