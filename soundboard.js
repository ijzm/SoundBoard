var audio = {
	carajo: new Audio('sounds/carajo.mp4'),
	mira_como_me_rio: new Audio('sounds/mira_como_me_rio.mp4'),
	muscle_guard: new Audio('sounds/muscle_guard.mp4'),
	no_es_de_tu_incunvencia: new Audio('sounds/no_es_de_tu_incunvencia.mp4'),
};


window.onload = function () {
	for (var x in audio) {
		console.log(x);

		createButton(x);
	}

}


function createButton(info) {
	var button = document.createElement("button");
	button.innerHTML = titlecase(info.toString());
	button.className = "w3-btn-block w3-round w3-teal w3-hover-cyan w3-xlarge w3-margin-bottom";

	button.onclick = function () {
		playsound(info);
	};
	document.body.appendChild(button);
}

function titlecase(str) {
	str = str.replace(/_/g, ' ');
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}


function playsound(sound) {
	audio[sound].play();
}