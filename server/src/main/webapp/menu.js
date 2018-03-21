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
});
