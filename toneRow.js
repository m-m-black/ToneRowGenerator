inlets = 1;
outlets = 2;

var alphabet = null;
// 60 = middle C
var ionian = [60, 62, 64, 65, 67, 57, 59];
var dorian = [60, 62, 63, 65, 67, 57, 58];
var phrygian = [60, 61, 63, 65, 67, 56, 58];
var lydian = [60, 62, 64, 66, 67, 57, 59]
var mixolydian = [60, 62, 64, 65, 67, 57, 58];
var aeolian = [60, 62, 63, 65, 67, 56, 58];
var locrian = [60, 61, 63, 65, 66, 56, 58];
var chromatic = [60, 61, 62, 63, 64, 65, 66, 67, 68, 57, 58, 59];
var majorTriad = [60, 64, 67];
var minorTriad = [60, 63, 67];
var diminishedTriad = [60, 63, 66];
var augmentedTriad = [60, 64, 68];
var major7 = [60, 64, 67, 71];
var minor7 = [60, 63, 67, 70];
var dominant7 = [60, 64, 67, 70];
var diminished7 = [60, 63, 66, 70];
var augmented7 = [60, 64, 68, 70];

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
	alphabet = chromatic;
	sequence = new Array();
	for (var i = 0; i < n; i++) {
		var e = Math.floor(Math.random() * alphabet.length);
		sequence.push(alphabet[e]);
	}
	outlet(0, sequence);
}

function setScale(scale) {
	if (scale == "Ionian") {
		return ionian;
	} else if (scale == "Dorian") {
		return dorian;
	} else if (scale == "Phrygian") {
		return phrygian;
	} else if (scale == "Lydian") {
		return lydian;
	} else if (scale == "Mixolydian") {
		return mixolydian;
	} else if (scale == "Aeolian") {
		return aeolian;
	} else if (scale == "Locrian") {
		return locrian;
	} else if (scale == "Major3") {
		return majorTriad;
	} else if (scale == "Minor3") {
		return minorTriad;
	} else if (scale == "Diminished3") {
		return diminishedTriad;
	} else if (scale == "Augmented3") {
		return augmentedTriad;
	} else if (scale == "Major7") {
		return major7;
	} else if (scale == "Minor7") {
		return minor7;
	} else if (scale == "Dominant7") {
		return dominant7;
	} else if (scale == "Diminished7") {
		return diminished7;
	} else if (scale == "Augmented7") {
		return augmented7;
	} else {
		return ionian; // Default scale setting
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