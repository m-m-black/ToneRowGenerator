inlets = 1;
outlets = 2;

var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
var sequence = null;
var currentStep = 0;

function generate(n) {
	sequence = new Array();
	for (var i = 0; i < n; i++) {
		var r = Math.floor(Math.random() * alphabet.length);
		sequence.push(alphabet[r]);
	}
	outlet(0, sequence);
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