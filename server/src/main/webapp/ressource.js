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
            $(".divAccordeonSB").css("display", "none");
            this.nextElementSibling.style.display = "none";
	}
	else{
            $("article").css("display", "none");
            $(".divAccordeonSB").css("display", "none");
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

    $("#accordeonSentiment .SentimentParCat").on("click",(function(event){
    if(this.nextElementSibling.style.display === "block"){
            this.nextElementSibling.style.display = "none";
    }
    else{
            this.nextElementSibling.style.display = "block";
    }
    })); 

    $("#sentiment").click(function(event){
        var categorie = "";

        $.ajax({
            url: "http://localhost:8080/cye/sentiment",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
    		$("#accordeonSentiment").empty()
    		console.log("success");
            /*    var list = "";
                var i = 0;

                json.forEach(function(sentiment, idx) {                
                    if(categorie !== sentiment.categorie){
                        list += "<section class=\"pRessource\"><h3 class=\"SentimentParCat\">" + sentiment.categorie + "</h3>";
                        categorie = sentiment.categorie;
                    } 
                    list += "<article>" +sentiment.nom+"</article>";
                });
                list += "</section>";
    		$("#accordeonSentiment").append(list);	
            */
            var list = new Map();

            json.forEach(function(sentiment, idx){
                list.set(sentiment.categorie, sentiment.nom);
            });

            

            $("#accordeonSentiment").append(list);  

    	    },

            error: function(xhr, status, errorThrown){
                alert("Problem");
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
            }
        });
    });

    $("#besoin").click(function(event){
        var categorie = "";
        $.ajax({
            url: "http://localhost:8080/cye/besoin",
            type: "GET",
            dataType: "json",

            success: function(json) {
                $("#accordeonBesoin").empty()
                console.log(JSON.stringify(json));
                 var list = "<section class=\"pRessource\">";

                json.forEach(function(besoin, idx) {                    
                    if(categorie !== besoin.categorie){
                        list += "<h3 class=\"SentimentParCat\">" + besoin.categorie + "</h3><article>" + besoin.nom + "<article>";
                        categorie = besoin.categorie;
                    } else {
                        list += "<article>" + besoin.nom +"</article>";
                    }
                });                
                list += "</section>";
                $("#accordeonBesoin").append(list);    
            },

            error: function(xhr, status, errorThrown){
		alert("Problem");
		console.log( "Error: " + errorThrown );
		console.log( "Status: " + status );
            }
        })
    });

});
