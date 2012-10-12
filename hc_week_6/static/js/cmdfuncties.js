document.onkeydown = function(evt) {
	evt = evt || window.event;
	
	switch(evt.keyCode){
		case 27:
	  		impress().goto( document.getElementById("overview") );
	  		break; 
	}
};

window.onload = function(){
	impress().init();
}

jQuery(function($){
	
	/*
	var gridDimension = 5000;
	var gridInterval = 8;

	for (var x = 0; x < gridInterval+1; x++) {
		for(var y = 0; y < gridInterval+1; y++) {
			for(var z = 0; z < gridInterval+1; z++) {
				$('#impress').append('<div class="step floater" data-x="'+ (-(gridDimension/2)+(x*(gridDimension/gridInterval))) +'" data-y="'+ (-(gridDimension/2)+(z*(gridDimension/gridInterval))) +'" data-z="'+ (-(gridDimension/2)+(y*(gridDimension/gridInterval))) +'"></div>');
			};
		};
	};
	*/
	for(var i=0; i<1000; i++){
		$('#impress').append('<div class="step floater" data-x="'+ (-4000 + Math.random()*8000) +'" data-y="'+ (-4000 + Math.random()*8000) +'" data-z="'+ (-4000 + Math.random()*8000) +'"></div>');
	};
});
