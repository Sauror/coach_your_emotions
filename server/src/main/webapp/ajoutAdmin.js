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
		$(".pDeleteSentiment").hide();
		$(".pDeleteBesoin").hide();
		$(".pDeleteExercice").hide();
		$(".pDeleteQuestion").hide();
		$(".pLogin").hide();
		$(".pSign").hide();
		$(".pAffiche").hide();
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
		$(".pLogin").hide();
		$(".pSign").hide();
		$(".pAffiche").hide();
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
		$(".pLogin").hide();
		$(".pSign").hide();
		$(".pAffiche").hide();
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
		$(".pLogin").hide();
		$(".pSign").hide();
		$(".pAffiche").hide();
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
		$(".pLogin").hide();
		$(".pSign").hide();
		$(".pAffiche").hide();
	});

	$("#DeleteSentiment").click(function(){
		$(".pRessource").hide();
		$(".pExercice").hide();
		$(".pEspace").hide();
		$(".pAjoutAdmin").hide();
		$(".pAjoutSentiment").hide();
		$(".pAjoutBesoin").hide();
		$(".pAjoutExercice").hide();
		$(".pDeleteSentiment").show();
		$(".pDeleteBesoin").hide();
		$(".pDeleteExercice").hide();
		$(".pDeleteQuestion").hide();
		$(".pAjoutQuestion").hide();
		$(".pLogin").hide();
		$(".pSign").hide();
	});

	$("#DeleteBesoin").click(function(){
		$(".pRessource").hide();
		$(".pExercice").hide();
		$(".pEspace").hide();
		$(".pAjoutAdmin").hide();
		$(".pAjoutSentiment").hide();
		$(".pAjoutBesoin").hide();
		$(".pAjoutExercice").hide();
		$(".pDeleteSentiment").hide();
		$(".pDeleteBesoin").show();
		$(".pDeleteExercice").hide();
		$(".pDeleteQuestion").hide();
		$(".pAjoutQuestion").hide();
		$(".pLogin").hide();
		$(".pSign").hide();
	});
	$("#DeleteExercice").click(function(){
		$(".pRessource").hide();
		$(".pExercice").hide();
		$(".pEspace").hide();
		$(".pAjoutAdmin").hide();
		$(".pAjoutSentiment").hide();
		$(".pAjoutBesoin").hide();
		$(".pAjoutExercice").hide();
		$(".pDeleteSentiment").hide();
		$(".pDeleteBesoin").hide();
		$(".pDeleteExercice").show();
		$(".pDeleteQuestion").hide();
		$(".pAjoutQuestion").hide();
		$(".pLogin").hide();
		$(".pSign").hide();
	});
	
	$("#DeleteQuestion").click(function(){
		$(".pRessource").hide();
		$(".pExercice").hide();
		$(".pEspace").hide();
		$(".pAjoutAdmin").hide();
		$(".pAjoutSentiment").hide();
		$(".pAjoutBesoin").hide();
		$(".pAjoutExercice").hide();
		$(".pDeleteSentiment").hide();
		$(".pDeleteBesoin").hide();
		$(".pDeleteExercice").hide();
		$(".pDeleteQuestion").show();
		$(".pAjoutQuestion").hide();
		$(".pLogin").hide();
		$(".pSign").hide();
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
		console.log("postSentiment " + url);
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
	}

	$("#postExercice").click(function(){
		postExercice(
			$('#nomExercice').val(),
			$('#consigneGlobale').val(),
			$('#consigneQuestion').val(),
			'http://localhost:8080/cye/exercice'
		)});

	function postExercice(nom,consigneGlobale,consigneQuestion,url) {
		console.log("postExercice " + url);
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
	}

	$("#postQuestion").click(function(){
		console.log("ICICI");
		postQuestion(
			$('#idExo').val(),
			$('#phraseQuestion').val(),
			$('#correctionNon').val(),
			$('#correctionOui').val(),
			'http://localhost:8080/cye/question'
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
		});
	}


	$("#dSentiment").click(function(){
		console.log('http://localhost:8080/cye/sentiment/'+$('#idSentiment').val());
		deleteData('http://localhost:8080/cye/sentiment/'+$('#idSentiment').val());
	});

	$("#dBesoin").click(function(){
		console.log('http://localhost:8080/cye/besoin/'+$('#idBesoin').val());
		deleteData('http://localhost:8080/cye/besoin/'+$('#idBesoin').val());
	});

	$("#dExercice").click(function(){
		console.log('http://localhost:8080/cye/exercice/'+$('#idExercice').val());
		deleteData('http://localhost:8080/cye/exercice/'+$('#idExercice').val());
	});

	$("#dQuestion").click(function(){
		console.log('http://localhost:8080/cye/question/'+$('#idQuestion').val());
		deleteData('http://localhost:8080/cye/question/'+$('#idQuestion').val());
	});

	function deleteData(url){
		$.ajax({
			type : 'DELETE',
			contentType : 'application/json',
			url : url,
			dataType : "json",
			success : function(data, textStatus, jqXHR) {
				//afficheUser(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log('postUser error: ' + textStatus);
			}});
	}
});
