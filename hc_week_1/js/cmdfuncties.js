


// Ga naar het overzicht als op Escape wordt gedrukt.
nn=(document.layers)?true:false;
ie=(document.all)?true:false;
function keyDown(e) {
	var evt=(e)?e:(window.event)?window.event:null;
	if(evt){
		var key=(evt.charCode)?evt.charCode:
			((evt.keyCode)?evt.keyCode:((evt.which)?evt.which:0));
		if(key==27) alert('Escape.. escape...');
	}
}
document.onkeydown=keyDown;
if(nn) document.captureEvents(Event.KEYDOWN);

/*
document.onkeydown = function(evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		alert('Escape Escape');
		//impress().goto( document.getElementById("overview") );
	}
};
*/