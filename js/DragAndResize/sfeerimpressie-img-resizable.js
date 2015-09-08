/*
* #test is de ID van het DIV waarin het product plaatje zich bevind
* .draggable geeft al aan bij de naam dat je deze kunt bewegen
* Hij blijft wel binnen de div met het id van #sfeerimpressie-display-containment
*/
$(function() {
	$( "#sfeerimpressie-display-img-draggable" ).resizable({
		aspectRatio: 1 / 1,
		containment: "#sfeerimpressie-display-containment"
	});
});