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

    // Accordeon general
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

    //Accordeon Presentation
    $("#accordeonPresentation .headerPres").click(function(event){
	if(this.nextElementSibling.style.display === "block"){
            this.nextElementSibling.style.display = "none";
	}
	else{
            this.nextElementSibling.style.display = "block";
	}
    });  

    $("#sentiment").click(function(event){
        var categorie = "";

        $.ajax({
            url: "http://localhost:8080/cye/sentiment",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
    		$("#accordeonSentiment").empty()
    		console.log("success");
                var list = "<section class=\"pRessource\">";

                json.forEach(function(sentiment, idx) {                    
                    if(categorie !== sentiment.categorie){
                        list += "<h3 class=\"SentimentParCat\">" + sentiment.categorie + "<h3>";
                        categorie = sentiment.categorie;
                    }
                });                
                list += "</section>";
    		$("#accordeonSentiment").append(list);	
    	    },

            error: function(xhr, status, errorThrown){
                alert("Problem");
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
            }
        });
    });

    $(".SentimentParCat").click(function(event){
        var categorie = "";
        $.ajax({
            url: "http://localhost:8080/cye/sentiment",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
            $(".SentimentParCat").empty()
            console.log("success");
                var list = "";

                json.forEach(function(sentiment, idx) {                    
                    if(categorie !== sentiment.categorie){
                        list += "</h3><article>" + sentiment.nom + "<article>";
                        categorie = sentiment.categorie;
                    } else {
                        list += "<article>" + sentiment.nom +"</article>";
                    }
                });                
                
            $(".SentimentParCat").append(list);  
            },

            error: function(xhr, status, errorThrown){
                alert("Problem");
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
            }
        });
    });

    $("#besoin").click(function(event){
        $.ajax({
            url: "http://localhost:8080/cye/besoin",
            type: "GET",
            dataType: "json",

            success: function(json) {
                $("#outputBesoin").empty()
                console.log(JSON.stringify(json));
                var list = "<ul>";
                
                json.forEach(function(besoin, idx) {
                    list += " <li>" + besoin.categorie + " - "+ besoin.nom + "</li>";
                });

                list += "</ul>";
                $("#outputBesoin").append(list);    
                $("#outputBesoin li").css({"font-size": 20, "font-family": "Times New Roman"});
            },

            error: function(xhr, status, errorThrown){
		alert("Problem");
		console.log( "Error: " + errorThrown );
		console.log( "Status: " + status );
            }
        })
    });

});
