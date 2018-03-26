$(document).ready(function(){
	$("#login").click(function(event){
		$(".pRessource").hide();
		$(".pExercice").hide();
		$(".pEspace").hide();
		$(".pAjoutAdmin").hide();
		$(".pAjoutSentiment").hide();
		$(".pAjoutBesoin").hide();
		$(".pAjoutExercice").hide();
		$(".pAjoutQuestion").hide();
		$(".pLogin").show();
		$(".pSign").hide();
		$(".pAffiche").show();
	});
});

function login() {
	getWithAuthorizationHeader("cye/login", function(data){
		$("#login").hide();
		$("#sign").hide();
		$(".pLogin").hide();
	    afficheUser(data);
	    var button = document.createElement("BUTTON");
	    buttonText = document.createTextNode("DECONNEXION");
	    button.appendChild(buttonText);
	    $("body").append(button);
	});
}

 function getWithAuthorizationHeader(url, callback) {
 if($("#userLogin").val() != "") {
     $.ajax
     ({
       type: "GET",
       url: url,
       dataType: 'json',
       beforeSend : function(req) {
        req.setRequestHeader("Authorization", "Basic " + btoa($("#userLogin").val() + ":" + $("#passwdLogin").val()));
       },
       success: callback,
       error : function(jqXHR, textStatus, errorThrown) {
       			alert('error: ' + textStatus);
       		}
     });
     } else {
     $.getJSON(url, function(data) {
     	    afficheUser(data);
        });
     }
 }

function afficheUser(data) {
	console.log(data);
	$("#reponse").html(userStringify(data));
}

function userStringify(user) {
    return user.id + ". " + user.name + " &lt;" + user.email + "&gt;" + " (" + user.alias + ")";
}