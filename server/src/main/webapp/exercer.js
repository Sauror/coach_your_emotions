$(document).ready(function(){
	
	var cpt = 1;
	/*
	function tabloQuestion[] {
	var nom = "";
	var reponseOui = "";
	var reponseNon = "";
	var id = 0;
	};
	*/

    $("#exercer").click(function(){
    	$(".pRessource").hide();
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
    	console.log("test");
        $.ajax({
            url: "http://localhost:8080/cye/exercice",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
    		$("#formOutPut").empty()
    		console.log("success");
			
            json.forEach(function(exercice, idx) {
		    var btn = document.createElement("BUTTON");
		    var t = document.createTextNode(""+exercice.nom);
		    btn.appendChild(t);
			btn.className = "buttonExo";
			btn.id = ""+exercice.id;
		    $("#formOutPut").append(btn);
			$("#formOutPut").append("<br>");
    		});
	    },

	    error: function(xhr, status, errorThrown){
                alert("Problem");
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
	    }
        });
    });

	$("#formOutPut").on("click", ".buttonExo",function(){

		$.get("http://localhost:8080/cye/exercice/" + this.id, function(exercice, status) {
			$("#formOutPut").empty()
			var p = document.createElement("p");
			var t = document.createTextNode("" + exercice.cg);
			p.appendChild(t);
			p.className = "cgExo";
			var button1 = document.createElement("BUTTON");
			var t1 = document.createTextNode("Retour");
			button1.appendChild(t1);
			button1.className = "btn1";
			button1.id = "btn1";
			var button2 = document.createElement("BUTTON");	
			var t2 = document.createTextNode("Commencer");	
			button2.appendChild(t2);
			button2.className = "btn2";
			button2.id = "btn2";
			$("#formOutPut").append(p);
			$("#formOutPut").append("<br>");
			$("#formOutPut").append(button1);
			$("#formOutPut").append(button2);
		});
	});
		
	$("#formOutPut").on("click", ".btn1",function(){
		$(".pRessource").hide();
		$(".pLogin").hide();
		$(".pSign").hide();
    	$(".pExercice").show();
    	$(".pEspace").hide();
    	console.log("test");
        $.ajax({
            url: "http://localhost:8080/cye/exercice",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
    		$("#formOutPut").empty()
    		console.log("success");
			
            json.forEach(function(exercice, idx) {
		    var btn = document.createElement("BUTTON");
		    var t = document.createTextNode(""+exercice.nom);
		    btn.appendChild(t);
			btn.className = "buttonExo";
			btn.id = ""+exercice.id;
		    $("#formOutPut").append(btn);
			$("#formOutPut").append("<br>");
    		});
	    },

	    error: function(xhr, status, errorThrown){
                alert("Problem");
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
	    }
        });

	});
	
	$("#formOutPut").on("click", ".btn2",function(){
    	console.log("commencer");
        $.ajax({
            url: "http://localhost:8080/cye/question",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
				$("#formOutPut").empty()

		        json.forEach(function(question, idx) {
			
					var div = document.createElement("div");
					div.className = "divQuestion" + cpt;
					div.id = "idDiv" + cpt;
					var p = document.createElement("p");
					var question = document.createTextNode("" + question.question);
					p.appendChild(question);
					p.className = "pQuestion" + cpt;
					p.id = "idQuestion" + cpt;
					var b1 = document.createElement("button");
					var nomB1 = document.createTextNode("Oui");
					b1.appendChild(nomB1);
					b1.className = "buttonOui" + cpt ;
					b1.id = "idOui" + cpt;
					var b2 = document.createElement("button");
					var nomB2 = document.createTextNode("Non");
					b2.appendChild(nomB2);
					b2.className = "buttonNon" + cpt;
					b2.id = "idNon" + cpt;
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
					$("#idDiv" +cpt).hide();
					
					cpt++;
				});
				cpt=1;
			
				$("#idDiv1").show();
			
			},

	    error: function(xhr, status, errorThrown){
                alert("Problem");
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
	    }
        });
	});

	
});

// http://hevea22:8080/cye/question/exoid/1 A UTILISER
