$(document).ready(function(){
    $("#sign").click(function(){
    	$(".pRessource").hide();
    	$(".pExercice").hide();
    	$(".pEspace").hide();
	$(".pAjoutAdmin").hide();
	$(".pAjoutSentiment").hide();
	$(".pAjoutBesoin").hide();
	$(".pAjoutExercice").hide();
	$(".pAjoutQuestion").hide();
	$(".pLogin").hide();
	$(".pSign").show();
	$(".pAffiche").show();
    });
});

function postUser(name, alias, email, pwd) {
    postUserGeneric(name, alias, email, pwd, 'cye/user/')
}

function postUserGeneric(name, alias, email, pwd, url) {
	console.log("postUserGeneric " + url)
	$.ajax({
		type : 'POST',
		contentType : 'application/json',
		url : url,
		dataType : "json",
		data : JSON.stringify({
			"name" : name,
			"alias" : alias,
			"email" : email,
			"password" : pwd,
			"id" : 0
		}),
		success : function(data, textStatus, jqXHR) {
			afficheUser(data);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log('postUser error: ' + textStatus);
		}
	});
}

function afficheUser(data) {
	console.log(data);
	$("#reponse").html(userStringify(data));
}

function userStringify(user) {
    return user.id + ". " + user.name + " &lt;" + user.email + "&gt;" + " (" + user.alias + ")";
}
