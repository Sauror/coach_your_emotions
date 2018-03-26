$(document).ready(function(){
	$("#login").click(function(){
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
		//$("#pLogin").hide();
		afficheUser(data);
	});
}

function getWithAuthorizationHeader(url, callback) {
	if($("#userlogin").val() != "") {
		$.ajax ({
			type: "GET",
			url: url,
			dataType: 'json',
			beforeSend : function(req) {
				req.setRequestHeader("Authorization", "Basic " + btoa($("#userlogin").val() + ":" + $("#passwdlogin").val()));
			},
			success: callback,
			error : function(jqXHR, textStatus, errorThrown) {
				alert('Error : ' + textStatus);
			}
		});
	} 
	else {
		$.getJSON(url, function(data) {
			alert('Champs Login Vide');
		});
	}
	alert('Authentification')
}

function afficheUser(data) {
	console.log(data);
	$("#reponse").html(userStringify(data));
}

function userStringify(user) {
    return user.id + ". " + user.name + " &lt;" + user.email + "&gt;" + " (" + user.alias + ")";
}