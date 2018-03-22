$(document).ready(function(){
	$(".pRessource").hide();
	$(".pExercice").hide();
	$(".pEspace").hide();

	$("#ressource").click(function(){
    	$(".pRessource").show();
    	$(".pExercice").hide();
    	$(".pEspace").hide();
        $("article").hide();
    	console.log("test");
	}); 

	$("#exercer").click(function(){
    	$(".pRessource").hide();
    	$(".pExercice").show();
    	$(".pEspace").hide();
    	console.log("test");
	}); 

	$("#espace").click(function(){
    	$(".pRessource").hide();
    	$(".pExercice").hide();
    	$(".pEspace").show();
    	console.log("test");
	}); 

     $("#accordeon .header").click(function(event){
     if(this.nextElementSibling.style.display === "block"){
        $("article").css("display", "none");
        this.nextElementSibling.style.display = "none";
     }
     else{
        $("article").css("display", "none");
        this.nextElementSibling.style.display = "block";
     }
    }); 

    $("#sentiment").click(function(event){
        $.ajax({
           url: "http://172.18.49.103:8080/cye/sentiment",
           type: "GET",
           contentType: 'application/json;charset=utf-8',

          success: function(json) {
			  $("#output").empty()
			  console.log("success");
              var list = "<ul>";
              json.forEach(function(sentiment, idx) {
                list += " <li>" + sentiment.categorie + " - " + sentiment.nom + "</li>";
			  });
              list += "</ul>";
			  $("#output").append(list);	
              $("#output li").css({"font-size": 20, "font-family": "Times New Roman"});
			},

           error: function(xhr, status, errorThrown){
            alert("Problem");
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
           }
        })
    });

    $("#besoin").click(function(event){
        $.ajax({
           url: "http://172.18.49.103:8080/cye/besoin",
           type: "GET",
           dataType: "json",
          success: function(json) {
              $("#output").empty()
              console.log(JSON.stringify(json));
              var list = "<ul>";
              json.forEach(function(besoin, idx) {
                list += " <li>" + besoin.categorie + " - "+ besoin.nom + "</li>";
              });
              list += "</ul>";
              $("#output").append(list);    
              $("#output li").css({"font-size": 20, "font-family": "Times New Roman"});
            },
           error: function(xhr, status, errorThrown){
            alert("Problem");
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
           }
        })
    });
});
