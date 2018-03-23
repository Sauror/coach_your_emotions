$(document).ready(function(){
    $("#exercer").click(function(){
    	$(".pRessource").hide();
    	$(".pExercice").show();
    	$(".pEspace").hide();
		$(".pAjoutAdmin").hide();
		$(".pAjoutSentiment").hide();
		$(".pAjoutBesoin").hide();
		$(".pAjoutExercice").hide();
		$(".pAjoutQuestion").hide();
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
		//	var p = document.createTextNode(""+exercice.
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
});
	
	/*$(".buttonExo").click(function(){
    	$(".pRessource").hide();
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
			var f = document.create
		    btn.appendChild(t);
			btn.className = "buttonExo";
			btn.id = ""+exercice.id;
		    $("#formOutPut").append(btn);
			$("#formOutPut").append("<br>");
    		});
	    },*/


// http://hevea22:8080/cye/question/exoid/1 A UTILISER
