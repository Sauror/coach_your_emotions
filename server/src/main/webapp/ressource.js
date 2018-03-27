var testAdmin = false;

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
    $(".pDeleteSentiment").hide();
	$(".pDeleteBesoin").hide();
	$(".pDeleteExercice").hide();
	$(".pDeleteQuestion").hide();
	$(".pAffiche").hide();
    $("#menuVertical").hide();
    $("#logoPage").hide();
    $(".navbar").hide();
    $(".pPutSentiment").hide();
    $(".pPutBesoin").hide();
    $(".pPutExercice").hide();
    $(".pPutQuestion").hide();
    $("#admin").hide();

    $(".ressource").click(function(){
    	$(".pRessource").show();
    	$(".pExercice").hide();
    	$(".pAjoutAdmin").hide();
    	$(".pEspace").hide();
        $("article").hide();
        $(".pSign").hide();
        $(".pLogin").hide();
	$(".pAffiche").hide();
	$("#logoAccueil").hide();
        $("#accueil").hide();
        $("#description").hide();
        $("#menuHorizontal").hide();
        $("#menuVertical").show();
        $("#sign").hide();
        $("#login").hide();
        $(".navbar").show();
        $(".navbar").css("background-color", "#9cdedd");
        $("#menuVertical").css("background-color", "#9cdedd");

        $("li a").hover(function(){
            $(this).css("background-color", "#00a3a4");
        }, function(){
            $(this).css("background-color", "#9cdedd");
        });

        $("body").css("background-color","#c4ebea");
        $(".divAccordeonSB").css("display","none");

        $("#logoPage").show();
    	console.log("test");
    }); 

    $(".logo").click(function(){
        $(".ressource").hide();
        $(".logo").hide();
        $(".exercer").hide();
        $("#description").hide();
        $(".espace").hide();
        $("#accueil").hide();
        $("#sign").hide();
        $("#login").hide();
        $("#accordeon").hide();
        $(".navbar").hide();
        $(".pExercice").hide();
        $(".pEspace").hide();
        $("#admin").show();
        console.log("test1");
    });

   $("#valideMdp").click(function(event){
        $.ajax({
            url: "http://localhost:8080/cye/user/admin",
            type: "GET",
            contentType: 'application/json;charset=utf-8',

            success: function(json) {
                $("#formOutPut").empty()
                json.forEach(function(exercice, idx) {
                    var t = document.createTextNode(user.nom);
                    if(t == $("#log").val()){
                    testAdmin = true;
                    }
                });
                if(testAdmin == true){
                    $("#admin").hide();
                    $(".pAjoutAdmin").show();
                }else{
                alert("mauvais user");
                }
            },

            error: function(xhr, status, errorThrown){
                    console.log( "Error: " + errorThrown );
            }
        });
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
            url: "http://51.255.131.197/cye/sentiment",
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
            url: "http://51.255.131.197/cye/besoin",
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
