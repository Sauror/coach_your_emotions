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
           url: "hevea22:8080/v1/sentiment",
           type: "GET",
           dataType: "json",
           success: function(json){
            $("<article>").text(json.title).appendTo("body");
           },
           error: function(xhr, status, errorThrown){
            alert("Problem");
            console.log("Erreur");
           }
        })
    });
});
