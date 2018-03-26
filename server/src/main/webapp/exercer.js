var cpt = 1;
var exoActuel = "";
var val = 1;

$(document).ready(function(){
	
	//QUAND ON CLICK SUR S'EXERCER
    $(".exercer").click(function(){ // mettre un point
		$(".pRessource").hide();
		$("#menuVertical").hide();
		$("#logoAcceuil").hide();
    	$(".pExercice").show();
		$(".pDeleteSentiment").hide();
		$(".pDeleteBesoin").hide();
		$(".pDeleteExercice").hide();
		$(".pDeleteQuestion").hide();
		$(".pAjoutAdmin").hide();
    	$(".pAjoutSentiment").hide();
    	$(".pAjoutBesoin").hide();
    	$(".pAjoutExercice").hide();
    	$(".pAjoutQuestion").hide();
    	$(".pLogin").hide();
    	$(".pSign").hide();
    	$(".pEspace").hide();
		$(".pAffiche").hide();
    	$(".pAjoutAdmin").hide();
        $.ajax({
        	url: "http://localhost:8080/cye/exercice",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
				$("#formOutPut").empty()
				console.log("success");
			
		        json.forEach(function(exercice, idx) {
					var btn = document.createElement("BUTTON");
					var t = document.createTextNode(exercice.nom);
					btn.appendChild(t);
					btn.className = "buttonExo";
					btn.id = exercice.id;
					$("#formOutPut").append(btn);
					$("#formOutPut").append("<br>");
				});
	  	    },

	  	    error: function(xhr, status, errorThrown){
            	console.log( "Error: " + errorThrown );
	    	}
        });
    });

	//QUAND ON CLICK SUR UN DES EXO
	$("#formOutPut").on("click", ".buttonExo",function(){
		$.get("http://localhost:8080/cye/exercice/" + this.id, function(exercice, status) {
			$("#formOutPut").empty()
			var aide = document.createElement("p");
			var id = document.createTextNode(exercice.id);
			aide.appendChild(id);
			aide.className = "aideClasse";
			aide.id = "idAide";
			exoActuel = exercice.id;
			console.log(exoActuel);
			var p = document.createElement("p");
			var t = document.createTextNode(exercice.cg);
			p.appendChild(t);
			p.className = "cgExo";
			p.id = "idcgExo";
			var button1 = document.createElement("BUTTON");
			var t1 = document.createTextNode("Retour");
			button1.appendChild(t1);
			button1.className = "btn1";
			button1.id = "idBtn1";
			var button2 = document.createElement("BUTTON");	
			var t2 = document.createTextNode("Commencer");	
			button2.appendChild(t2);
			button2.className = "btn2";
			button2.id = "idBtn2";
			$("#formOutPut").append(p);
			$("#formOutPut").append("<br>");
			$("#formOutPut").append(button1);
			$("#formOutPut").append(button2);
		});
	});
	
	//QUAND ON CLIC SUR RETOUR	
	$("#formOutPut").on("click", ".btn1",function(){
		$(".pRessource").hide();
    	$(".pExercice").show();
    	$(".pEspace").hide();
        $.ajax({
            url: "http://localhost:8080/cye/exercice",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
				$("#formOutPut").empty()
		        json.forEach(function(exercice, idx) {
					var btn = document.createElement("BUTTON");
					var t = document.createTextNode(exercice.nom);
					btn.appendChild(t);
					btn.className = "buttonExo";
					btn.id = exercice.id;
					$("#formOutPut").append(btn);
					$("#formOutPut").append("<br>");
				});
	  		},

			error: function(xhr, status, errorThrown){
		            console.log( "Error: " + errorThrown );
			}
        });
	});
	
	//QUAND ON CLIC SUR COMMENCER
	$("#formOutPut").on("click", ".btn2",function(){
		$.ajax({
			url: "http://localhost:8080/cye/question/exoid/" + exoActuel,
			type: "GET",
			contentType: 'application/json;charset=utf-8',

			success: function(json) {
				$("#formOutPut").empty()
		        json.forEach(function(question, idx) {
					
					//div
					var div = document.createElement("div");
					div.className = "divQuestion" + cpt;
					div.id = "idDiv" + cpt;
						
					//text question
					var p = document.createElement("p");
					var questionText = document.createTextNode(question.question);
					p.appendChild(questionText);
					p.className = "pQuestion" + cpt;
					p.id = "idQuestion" + cpt;
								
					//button oui
					var b1 = document.createElement("button");
					var nomB1 = document.createTextNode("Oui");
					b1.appendChild(nomB1);
					b1.className = "buttonOui" + cpt ;
					b1.id = "idOui" + cpt;

					//button non
					var b2 = document.createElement("button");
					var nomB2 = document.createTextNode("Non");
					b2.appendChild(nomB2);
					b2.className = "buttonNon" + cpt;
					b2.id = "idNon" + cpt;
					
					//text oui
					var textOui = document.createElement("p");
					var nomTextOui = document.createTextNode(question.correctionOui);
					textOui.appendChild(nomTextOui);
					textOui.className = "textOui" + cpt ;
					textOui.id = "idTextOui" + cpt;
					
					//text non
					var textNon = document.createElement("p");
					var nomTextNon = document.createTextNode(question.correctionNon);
					textNon.appendChild(nomTextNon);
					textNon.className = "textNon" + cpt ;
					textNon.id = "idTextNon" + cpt;
					
					//button next
					var next = document.createElement("button");
					var labelNext = document.createTextNode("Suivant");
					next.appendChild(labelNext);
					next.className = "buttonNext" + cpt;
					next.id = "idNext" + cpt;

					$("#formOutPut").append(div);
					$("#idDiv" +cpt).append(p);
					$("#idDiv" +cpt).append("<br>");
					$("#idDiv" +cpt).append(b1);	
					$("#idDiv" +cpt).append(b2);
					$("#idDiv" +cpt).append("<br>");
					$("#idDiv" +cpt).append(textOui);
					$("#idDiv" +cpt).append(textNon);	
					$("#idDiv" +cpt).append("<br>");
					$("#idDiv" +cpt).append(next);	
					$("#idDiv" +cpt).hide();	

					$("#idTextOui" + cpt).hide();
					$("#idTextNon" + cpt).hide();
					$("#idNext" + cpt).hide();
					$("#idDiv" +  cpt).hide();

					//QUAND ON CLIC SUR OUI
					$("#idOui"+cpt).on("click",function(){		
						$("#idTextNon" +cpt).hide();
						$("#idTextOui" +cpt).show();
						$("#idNext" +cpt).show();	
					});
				
					//QUAND ON CLIC SUR NON
					$("#idNon"+cpt).on("click",function(){
						$("#idTextOui" + cpt).hide();
						$("#idTextNon" + cpt).show();
						$("#idNext" + cpt).show();	
					});	
				
					$("#idNext"+cpt).on("click",function(){
						$("#idDiv" + cpt).hide();
						cpt++;
						$("#idTextOui" + cpt).hide();
						$("#idTextNon" + cpt).hide();
						$("#idNext" + cpt).hide();
						$("#idDiv" + cpt).show();
						if(val == cpt){
						$("#formOutPut").empty();
						alert("Félicitations d’avoir pris quelques minutes pour vous exercer à la Communication NonViolente et de confronter votre vision à la notre. \nN’hésitez pas à continuer avec les autres exercices à votre disposition !");
						}	
					});	
					cpt++;	
					val++;		
				});
				$("#idDiv1").show();
				cpt = 1;
			},
				error: function(xhr, status, errorThrown){
		            console.log( "Error: " + errorThrown );
			}
		});
	});
});


// http://hevea22:8080/cye/question/exoid/1 A UTILISER
