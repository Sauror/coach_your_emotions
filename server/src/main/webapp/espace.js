$(document).ready(function(){
    $(".espace").click(function(){
    	$(".pRessource").hide();
    	$(".pExercice").hide();
    	$(".pEspace").show();
		$(".pAjoutAdmin").hide();
		$(".pAjoutSentiment").hide();
		$(".pAjoutBesoin").hide();
		$(".pAjoutExercice").hide();
		$(".pAjoutQuestion").hide();
		$(".pDeleteSentiment").hide();
		$(".pDeleteBesoin").hide();
		$(".pDeleteExercice").hide();
		$(".pDeleteQuestion").hide();
		$(".pLogin").hide();
		$(".pSign").hide();
		$(".pAffiche").hide();
		$("#logoAccueil").hide();
        $("#accueil").hide();
        $("#description").hide();
        $("#menuHorizontal").hide();
  		$("#menuVertical").show();
        $("#menuVertical").css("background-color", "#fdced6");

        $("li a").hover(function(){
            $(this).css("background-color", "#f17389");
        }, function(){
            $(this).css("background-color", "#fdced6");
        });

     
        $("body").css("background-color","#f8dfe2");
    	console.log("test");
    }); 
})
