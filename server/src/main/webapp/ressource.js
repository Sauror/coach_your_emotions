$(document).ready(function(){
    $(".pRessource").hide();
    $(".pExercice").hide();
    $(".pEspace").hide();
    $(".pAjoutAdmin").hide();
    $(".pAjoutSentiment").hide();
    $(".pAjoutBesoin").hide();
    $(".pAjoutExercice").hide();
    $(".pAjoutQuestion").hide();
    $(".pLogin").hide();
    $(".pSign").hide();

    $("#ressource").click(function(){
    	$(".pRessource").show();
    	$(".pExercice").hide();
    	$(".pAjoutAdmin").hide();
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

    $("#accordeonBesoin").on("click", ".BesoinParCat", function(event){
                    event.preventDefault();
                    var articles = $(this.parentNode).find("article");
                    console.log(articles);
                    if ( articles.css("display") === "none" ) {
                        articles.css("display", "block");
                    }
                    else {
                        articles.css("display", "none");
                    }
        });    

    $("#accordeonSentiment").on("click", ".SentimentParCat", function(event){
                    event.preventDefault();
                    var articles = $(this.parentNode).find("article");
                    console.log(articles.css("display"));
                    if ( articles.css("display") === "none" ) {
                        console.log("1");
                        articles.css("display", "block");
                    }
                    else if(articles.css("display") === "block"){
                        console.log("2");
                        articles.css("display", "none");
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
		var list = "";
                var i = 0;

                json.forEach(function(sentiment, idx) {              
                    if(categorie !== sentiment.categorie){
                        if (categorie != "") {
                            list+= "</section>";
                        }  

                        list += "<section class=\"pRessource\"> <h3 class=\"SentimentParCat\">" + sentiment.categorie + "</h3>";
                        categorie = sentiment.categorie;
                    } 
                    list += "<article style=\"display: none\">- " +sentiment.nom+"</article>";
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

    $("#besoin").click(function(event){
        var categorie = "";
        $.ajax({
            url: "http://localhost:8080/cye/besoin",
            type: "GET",
            dataType: "json",

            success: function(json) {
                $("#accordeonBesoin").empty()
                console.log("success");
		var list = "";
                var i = 0;

                json.forEach(function(besoin, idx) {              
                    if(categorie !== besoin.categorie){
                        if (categorie != "") {
                            list+= "</section>";
                        }  

                        list += "<section class=\"pRessource\"> <h3 class=\"BesoinParCat\">" + besoin.categorie + "</h3>";
                        categorie = besoin.categorie;
                    } 
                    list += "<article style=\"display: none\">- " +besoin.nom+"</article>";
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
