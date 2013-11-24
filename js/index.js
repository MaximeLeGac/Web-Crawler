$.ajax({
	url: "http://localhost:3000/visited/list",
	type: "GET",
	dataType: "json",
	success: afficherLaListe
});

function afficherLaListe(donnee, status) {
	$('#listVisited').append('<h2>Liste des urls dans la visited ('+donnee.visited.length+' urls) :</h2>');
	donnee.visited.urls.forEach(function(url){ 
    	$('#listVisited').append('<tr><td>'+url+'</td></tr>');
	});

}


$.ajax({
	url: "http://localhost:3000/queue/list",
	type: "GET",
	dataType: "json",
	success: afficherLaQueue
});

function afficherLaQueue(donnee2, status) {
	$('#listQueue').append('<h2>Liste des urls dans la queue ('+donnee2.queue.length+' urls) :</h2>');
	donnee2.queue.urls.forEach(function(url){ 
    	$('#listQueue').append('<tr><td>'+url+'</td></tr>');
	});

}
