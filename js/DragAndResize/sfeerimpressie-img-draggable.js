/*
* #sfeerimpressie-display-img-draggable is het product ID
* .resizable maakt de mogelijkheid om hem te vergroten en verkleinen
* Hij blijft wel binnen de div met het id van #sfeerimpressie-display-containment
*/
$(function() {	
	$("#test").draggable({
		containment: "#sfeerimpressie-display-containment", 
		scroll: false 
	});
});