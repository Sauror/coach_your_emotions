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
		$(".pPutSentiment").hide();
		$(".pPutBesoin").hide();
		$(".pPutExercice").hide();
		$(".pPutQuestion").hide();
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

	$("#PutSentiment").click(function(){
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
		$(".pDeleteQuestion").hide();
		$(".pAjoutQuestion").hide();
		$(".pPutSentiment").show();
		$(".pLogin").hide();
		$(".pSign").hide();
	});

	$("#PutBesoin").click(function(){
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
		$(".pDeleteQuestion").hide();
		$(".pAjoutQuestion").hide();
		$(".pPutBesoin").show();
		$(".pLogin").hide();
		$(".pSign").hide();
	});

	$("#PutExercice").click(function(){
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
		$(".pDeleteQuestion").hide();
		$(".pAjoutQuestion").hide();
		$(".pPutExercice").show();
		$(".pLogin").hide();
		$(".pSign").hide();
	});

	$("#PutQuestion").click(function(){
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
		$(".pDeleteQuestion").hide();
		$(".pAjoutQuestion").hide();
		$(".pPutQuestion").show();
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
	
	$("#DeleteSentiment").click(function(event){
		console.log("VU ICI");
        var categorie = "";
        $.ajax({
            url: "http://localhost:8080/cye/sentiment",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
    			$("#listeSentiment").empty()
    			console.log("success");
				var list = "<section class=\"pListeSentiment\"> <table><tr> <th>Numéro du sentiment&nbsp&nbsp</th><th>Nom du sentiment</th></tr>";
                var i = 0;

                json.forEach(function(sentiment, idx) {              
                    list += "<tr><td>"+sentiment.id+"</td><td>"+sentiment.nom+"</td><td><button class='btnDelete' data-id="+sentiment.id+">Supprimer</button></td></tr>";
                });

                list += "</table></section>";
			console.log(list);
    		$("#listeSentiment").append(list);
			$(".btnDelete").click(function(event){
						console.log(this.dataset.id);
						console.log("bouton detecte");
						var url = "http://localhost:8080/cye/sentiment/"+this.dataset.id;
						deleteData(url);
						$(this).parent().parent().remove();
					});
    	    },
            error: function(xhr, status, errorThrown){
                alert("Problem");
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
            }
        });
    });
	
	$("#buttonDelete").click(function(event){
		var tmp =document.getElementById("idEnvoiHidden").value;
		console.log(tmp);
		console.log("bouton detecte");
		var url = "http://localhost:8080/cye/sentiment/"+$("#idEnvoiHidden").val();
		deleteData(url);
	});

	$("#DeleteBesoin").click(function(event){
		console.log("VU ICI");
        var categorie = "";
        $.ajax({
            url: "http://localhost:8080/cye/besoin",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
    			$("#listeBesoin").empty()
    			console.log("success");
				var list = "<section class=\"pListeBesoin\"> <table><tr> <th>Numéro du besoin&nbsp&nbsp</th><th>Nom du besoin</th></tr>";
                var i = 0;

                json.forEach(function(besoin, idx) {              
                    list += "<tr><td>"+besoin.id+"</td><td>"+besoin.nom+"</td><td><button class='btnDelete' data-id="+besoin.id+">Supprimer</button></td></tr>";
                });

                list += "</table></section>";
			console.log(list);
    		$("#listeBesoin").append(list);
				$(".btnDelete").click(function(event){
						console.log(this.dataset.id);
						console.log("bouton detecte");
						var url = "http://localhost:8080/cye/besoin/"+this.dataset.id;
						deleteData(url);
						$(this).parent().parent().remove();
					});
    	    },
            error: function(xhr, status, errorThrown){
                alert("Problem");
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
            }
        });
    });

	$("#DeleteExercice").click(function(event){
		console.log("VU ICI");
        var categorie = "";
        $.ajax({
            url: "http://localhost:8080/cye/exercice",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
    			$("#listeExercice").empty()
    			console.log("success");
				var list = "<section class=\"pListeExercice\"> <table><tr> <th>Numéro de l'exercice&nbsp&nbsp</th><th>Nom de l'exercice</th></tr>";
                var i = 0;

                json.forEach(function(exercice, idx) {              
                    list += "<tr><td>"+exercice.id+"</td><td>"+exercice.nom+"</td><td><button class='btnDelete' data-id="+exercice.id+">Supprimer</button></td></tr>";
                });

                list += "</table></section>";
			console.log(list);
    		$("#listeExercice").append(list);
				$(".btnDelete").click(function(event){
						console.log(this.dataset.id);
						console.log("bouton detecte");
						var url = "http://localhost:8080/cye/exercice/"+this.dataset.id;
						deleteData(url);
						$(this).parent().parent().remove();
					});

    	    },
            error: function(xhr, status, errorThrown){
                alert("Problem");
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
            }
        });
    });

	$("#DeleteQuestion").click(function(event){
		console.log("VU ICI");
        var categorie = "";
        $.ajax({
            url: "http://localhost:8080/cye/question",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
    			$("#listeQuestion").empty()
    			console.log("success");
				var list = "<section class=\"pListeQuestion\"> <table><tr> <th>Numéro de l'exercice&nbsp&nbsp</th><th>Numéro de la question&nbsp&nbsp</th><th>Question</th></tr>";
                var i = 0;

                json.forEach(function(question, idx) {              
                    list += "<tr><td>"+question.idExo+"</td><td>"+question.id+"</td><td>"+question.question+"</td><td><button class='btnDelete' data-id="+question.id+">Supprimer</button>";
                });

                list += "</table></section>";
			console.log(list);
    		$("#listeQuestion").append(list);
				$(".btnDelete").click(function(event){
						console.log(this.dataset.id);
						console.log("bouton detecte");
						var url = "http://localhost:8080/cye/question/"+this.dataset.id;
						deleteData(url);
						$(this).parent().parent().remove();
					});


    	    },
            error: function(xhr, status, errorThrown){
                alert("Problem");
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
            }
        });
    });

	
	$("#putSentiment").click(function(){
		var url = 'http://localhost:8080/cye/sentiment/'+$('#idSentimentPut').val();
		putSentiment(
			$('#nomSentimentPut').val(),
			$('#categorieSentimentPut').val(),
			url
		)});

	function putSentiment(sentiment,categorie,url) {
		var tmp = $('#idSentimentPut').val()
		console.log("postSentiment " + url);
		$.ajax({
			type : 'PUT',
			contentType : 'application/json',
			url : url,
			dataType : "json",
			data : JSON.stringify({
				"id" : tmp,
				"nom" : sentiment,
				"categorie" : categorie
			}),
			success : function(data, textStatus, jqXHR) {
			console.log("Success request Put");
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log('postUser error: ' + textStatus);
			}
		});
	}


	$("#putBesoin").click(function(){
		var url = 'http://localhost:8080/cye/besoin/'+$('#idBesoinPut').val();
		putBesoin(
			$('#nomBesoinPut').val(),
			$('#categorieBesoinPut').val(),
			url
		)});

	function putBesoin(besoin,categorie,url) {
		var tmp = $('#idBesoinPut').val()
		console.log("postBesoin " + url);
		$.ajax({
			type : 'PUT',
			contentType : 'application/json',
			url : url,
			dataType : "json",
			data : JSON.stringify({
				"id" : tmp,
				"nom" : besoin,
				"categorie" : categorie
			}),
			success : function(data, textStatus, jqXHR) {
			console.log("Success request Put");
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log('postUser error: ' + textStatus);
			}
		});
	}

	$("#putExercice").click(function(){
		var url = 'http://localhost:8080/cye/exercice/'+$('#idExercicePut').val();
		putExercice(
			$('#nomExercicePut').val(),
			$('#cgExercicePut').val(),
			$('#cqExercicePut').val(),
			url
		)});

	function putExercice(exercice,cg,cq,url) {
		var tmp = $('#idExercicePut').val()
		console.log("postExercice" + url);
		$.ajax({
			type : 'PUT',
			contentType : 'application/json',
			url : url,
			dataType : "json",
			data : JSON.stringify({
				"id" : tmp,
				"nom" :exercice,
				"cg" : cg,
				"cq" : cq
			}),
			success : function(data, textStatus, jqXHR) {
			console.log("Success request Put");
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log('postUser error: ' + textStatus);
			}
		});
	}

	$("#putQuestion").click(function(){
		var url = 'http://localhost:8080/cye/question/'+$('#idQuestionPut').val();
		putQuestion(
			$('#nomQuestionPut').val(),
			$('#exoQuestionPut').val(),
			$('#badQuestionPut').val(),
			$('#goodQuestionPut').val(),
			$('#repQuestionPut').val(),
			url
		)});

	function putQuestion(question,exo,bad,good,rep,url) {
		var tmp = $('#idQuestionPut').val()
		console.log("postQuestion" + url);
		$.ajax({
			type : 'PUT',
			contentType : 'application/json',
			url : url,
			dataType : "json",
			data : JSON.stringify({
				"id" : tmp,
				"idExo" : exo,
				"question": question,
				"correctionOui" : good,
				"correctionNon" : bad,
				"reponseAttendue" : rep
			}),
			success : function(data, textStatus, jqXHR) {
			console.log("Success request Put");
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log('postUser error: ' + textStatus);
			}
		});
	}


});
