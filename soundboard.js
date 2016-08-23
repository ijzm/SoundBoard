var audio = {
	"beto-carajo": new Audio('sounds/beto-carajo.ogg'),
	"beto-mira_como_me_rio": new Audio('sounds/mira_como_me_rio.ogg'),
	"beto-muscle_guard": new Audio('sounds/muscle_guard.ogg'),
	"beto-no_es_de_tu_incunvencia": new Audio('sounds/no_es_de_tu_incunvencia.ogg'),

	"pacha-ay_no": new Audio('sounds/ay_no.ogg'),
	"pacha-si_si_si": new Audio('sounds/si_si_si.ogg'),
	"pacha-te_felicito": new Audio('sounds/te_felicito.ogg'),

	"chumis-uy_si_si_si": new Audio('sounds/uy_si_si_si.ogg'),
};


window.onload = function() {
	for (var x in audio) {
		createButton(x.substring(0, x.search("-")), x.split("-").pop());
	}

}


function createButton(who, info) {
	console.log(who);
	console.log(info);
	var button = document.createElement("button");
	button.innerHTML = titlecase(info.toString());
	button.className = "w3-btn-block w3-round  w3-hover-white w3-xlarge w3-margin-bottom";
	if (who == "beto") {
		button.className += " w3-teal"
	} else if (who == "pacha") {
		button.className += " w3-brown"
	} else if (who == "chumis") {
		button.className += " w3-green"
	} else {
		button.className += " w3-black"
	}
	button.onclick = function() {
		playsound(who + "-" + info);
	};
	document.body.appendChild(button);
}

function titlecase(str) {

	str = str.replace(/_/g, ' ');
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}


function playsound(sound) {
	audio[sound].play();
}
