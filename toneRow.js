inlets = 1;
outlets = 2;

var alphabet = null;
var alphabetMaj = [60, 62, 64, 65, 67, 57, 59]; // 60=middleC
var alphabetMin = [60, 62, 63, 65, 67, 56, 58];
var alphabetChro = [60, 61, 62, 63, 64, 65, 66, 67, 68, 57, 58, 59];
var sequence = null;
var currentStep = 0;

function generate(n, offset, scale) {
	alphabet = setScale(scale);
	sequence = new Array();
	// Assign random value to each step in sequence, apply transposition offset
	for (var i = 0; i < n; i++) {
		var e = Math.floor(Math.random() * alphabet.length);
		sequence.push(alphabet[e]+offset);
	}
	outlet(0, sequence);
}

function generateChro(n) {
	sequence = new Array();
	for (var i = 0; i < n; i++) {
		var e = Math.floor(Math.random() * alphabetChro.length);
		sequence.push(alphabetChro[e]);
	}
	outlet(0, sequence);
}

function setScale(scale) {
	if (scale == "Major") {
		return alphabetMaj;
	} else if (scale == "Minor") {
		return alphabetMin;
	} else {
		return alphabetMaj; // Default scale setting
	}
}

function step() {
	if (sequence != null) {
		outlet(1, sequence[currentStep]);
		if (currentStep < sequence.length-1) {
			currentStep++;
		} else {
			currentStep = 0;
		}
	}
}

function reset() {
	currentStep = 0;
}