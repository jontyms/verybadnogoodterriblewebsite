function tickUp() {
	document.getElementById("counter").innerText =
		parseInt(document.getElementById("counter").innerText) + 1;
}

function tickDown() {
	document.getElementById("counter").innerText =
		parseInt(document.getElementById("counter").innerText) - 1;
}

function runForLoop() {
	i = parseInt(document.getElementById("counter").innerText);
	output = "";
	for (let j = 0; j <= i; j++) {
		output += j + " ";
	}
	document.getElementById("forLoopResult").innerText = output;
}

function showOddNumbers() {
	i = parseInt(document.getElementById("counter").innerText);
	output = "";
	for (let j = 1; j <= i; j += 2) {
		output += j + " ";
	}
	document.getElementById("oddNumberResult").innerText = output;
}

function addMultiplesToArray() {
	multiples = [];
	i = parseInt(document.getElementById("counter").innerText);
	for (let j = i; j >= 5; j -= 1) {
		if (j % 5 === 0) {
			multiples.push(j);
		}
	}
	console.log(multiples);
}

car = {};

function printCarObject() {
	console.log(car);
}

function loadCar(i) {
	switch (i) {
		case 1:
			car = carObject1;
			break;
		case 2:
			car = carObject2;
			break;
		case 3:
			car = carObject3;
			break;
	}
	document.getElementById("carType").value = car.cType;
	document.getElementById("carMPG").value = car.cMPG;
	document.getElementById("carColor").value = car.cColor;
}

function changeColor(i) {
	color = "";
	switch (i) {
		case 1:
			color = "red";
			break;
		case 2:
			color = "green";
			break;
		case 3:
			color = "blue";
			break;
	}
	document.getElementById("styleParagraph").style.color = color;
}
