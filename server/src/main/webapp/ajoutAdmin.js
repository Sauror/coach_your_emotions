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

	$("#postBesoin").click(function(){
	    console.log($('#categorieBesoin').val())
	    console.log($('#nomBesoin').val())
	    postBesoin(
		$('#nomBesoin').val(),
		$('#categorieBesoin').val(),
		'http://localhost:8080/cye/besoin'
	    )});

	function postBesoin(besoin,categorie,url) {
	    console.log("postSentiment " + url)
	    $.ajax({
		type : 'POST',
		contentType : 'application/json',
		url : url,
		dataType : "json",
		data : JSON.stringify({
		    "nom" : besoin,
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

	    $("#postExercice").click(function(){
		postExercice(
		    $('#nomExercice').val(),
		    $('#consigneGlobale').val(),
		    $('#consigneQuestion').val(),
		    'http://localhost:8080/cye/exercice'
		)});

	    function postExercice(nom,consigneGlobale,consigneQuestion,url) {
		console.log("postExercice " + url)
		$.ajax({
		    type : 'POST',
		    contentType : 'application/json',
		    url : url,
		    dataType : "json",
		    data : JSON.stringify({
			"nom" : nom,
			"cg" : consigneGlobale,
			"cq" : consigneQuestion,
			"id" : 0
		    }),
		    success : function(data, textStatus, jqXHR) {
			//afficheUser(data);
		    },
		    error : function(jqXHR, textStatus, errorThrown) {
			console.log('postUser error: ' + textStatus);
		    }
		});

		$("#postQuestion").click(function(){
		    postQuestion(
			$('#idExo').val(),
			$('#phraseQuestion').val(),
			$('#correctionNon').val(),
			$('#correctionOui').val(),
			'http://localhost:8080/cye/besoin'
		    )});

		function postQuestion(id,phraseQ,cNon, cOui,url) {
		    console.log("postQuestion " + url)
		    $.ajax({
			type : 'POST',
			contentType : 'application/json',
			url : url,
			dataType : "json",
			data : JSON.stringify({
			    "idExo" : id,
			    "question" : phraseQ,
			    "correctionNon" : cNon,
			    "correctionOui" : cOui,
			    "id" : 0
			}),
			success : function(data, textStatus, jqXHR) {
			    //afficheUser(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
			    console.log('postUser error: ' + textStatus);
			}
		    })
		}
	    }
	}
    }
});

