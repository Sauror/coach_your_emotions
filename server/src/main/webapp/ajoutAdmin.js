$(document).ready(function(){
    $("#AjoutAdmin").click(function(){
    	$(".pRessource").hide();
    	$(".pExercice").hide();
    	$(".pEspace").hide();
		$(".pAjoutAdmin").show();
		$(".pAjoutSentiment").hide();
		$(".pAjoutBesoin").hide();
		$(".pAjoutExercice").hide();
		$(".pAjoutQuestion").hide();
    });

	$("#AjoutSentiment").click(function(){
		$(".pRessource").hide();
    	$(".pExercice").hide();
    	$(".pEspace").hide();
		$(".pAjoutAdmin").hide();
		$(".pAjoutSentiment").show();
		$(".pAjoutBesoin").hide();
		$(".pAjoutExercice").hide();
		$(".pAjoutQuestion").hide();
		$("#sentiment").hide();
	});

	$("#AjoutBesoin").click(function(){
		$(".pRessource").hide();
    	$(".pExercice").hide();
    	$(".pEspace").hide();
		$(".pAjoutAdmin").hide();
		$(".pAjoutSentiment").hide();
		$(".pAjoutBesoin").show();
		$(".pAjoutExercice").hide();
		$(".pAjoutQuestion").hide();
	});

	$("#AjoutExercice").click(function(){
		$(".pRessource").hide();
    	$(".pExercice").hide();
    	$(".pEspace").hide();
		$(".pAjoutAdmin").hide();
		$(".pAjoutSentiment").hide();
		$(".pAjoutBesoin").hide();
		$(".pAjoutExercice").show();
		$(".pAjoutQuestion").hide();
	});

	$("#AjoutQuestion").click(function(){
		$(".pRessource").hide();
    	$(".pExercice").hide();
    	$(".pEspace").hide();
		$(".pAjoutAdmin").hide();
		$(".pAjoutSentiment").hide();
		$(".pAjoutBesoin").hide();
		$(".pAjoutExercice").hide();
		$(".pAjoutQuestion").show();
	});

	$("#postSentiment").click(function(){
		console.log($('#categorieSentiment').val())
		console.log($('#nomSentiment').val())
		postSentiment(
		$('#nomSentiment').val(),
		$('#categorieSentiment').val(),
		'http://localhost:8080/cye/sentiment'
	)});

	function postSentiment(sentiment,categorie,url) {
	console.log("postSentiment " + url)
	$.ajax({
		type : 'POST',
		contentType : 'application/json',
		url : url,
		dataType : "json",
		data : JSON.stringify({
			"nom" : sentiment,
			"categorie" : categorie,
			"id" : 0
		}),
		success : function(data, textStatus, jqXHR) {
			//afficheUser(data);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log('postUser error: ' + textStatus);
		}
	});
}











})
