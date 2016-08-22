var Calculator = function() {

	this.DOM = "\
		<div data-module='10' class='frame calculator open-module'>\
			" + m.controllers + "\
			<div class='content'>\
				<div id='screen'>\
				</div>\
				<div class='buttons'>\
					<span class='button fun' data-fun='+'> <img src='images/calc-add.svg'> </span>\
					<span class='button fun' data-fun='-'> <img src='images/calc-min.svg'> </span>\
					<span class='button fun' data-fun='*'> <img src='images/calc-mul.svg'> </span>\
					<span class='button fun' data-fun='/'> <img src='images/calc-div.svg'> </span>\
					<span class='button number' data-fun='7'>7</span>\
					<span class='button number' data-fun='8'>8</span>\
					<span class='button number' data-fun='9' id='nine'>9</span>\
					<span class='button fun' data-fun='C'>C</span>\
					<span class='button number' data-fun='4'>4</span>\
					<span class='button number' data-fun='5'>5</span>\
					<span class='button number' data-fun='6'>6</span>\
					<span class='button fun' data-fun='+-'>+-</span>\
					<span class='button number' data-fun='1'>1</span>\
					<span class='button number' data-fun='2'>2</span>\
					<span class='button number' data-fun='3'>3</span>\
					<span class='button fun' data-fun='=' id='equal'>=</span>\
					<span class='button number' id='zero' data-fun='0'>0</span>\
					<span class='button number' id='point' data-fun='.'>.</span>\
				</div>\
			</div>\
		</div>\
	";

	this.memory = 0;
	this.func = null;


}

Calculator.prototype.initialise = function() {
	
	$("main").append(this.DOM);
	$(".calculator").draggable({ handle: '.controllers' });
	$("#screen").text("0");
	this.memory = 0;

}

Calculator.prototype.compute = function() {

	if ( this.func == null ) return;

	console.log("Computing")
	console.log("Mem: " + this.memory);
	console.log("Screen: " + $("#screen").text());

	var memory = parseFloat(this.memory);
	var screen = parseFloat($("#screen").text());
	var sum

	switch (this.func) {

		case "+":
			sum = memory + screen;
			break;
		case "-":
			sum = memory - screen;
			break;
		case "*":
			sum = memory * screen;
			break;
		case "/":
			sum = memory / screen;
			break;

	}

	this.memory = sum;
	$("#screen").text(sum);
	console.log("--------");

	this.func = null;

}

Calculator.prototype.addToMemory = function() {

	this.memory = $("#screen").text();
	$("#screen").text("0");

}

Calculator.prototype.press = function($this) {

	$this.addClass("blink");
	setTimeout(function() {
		$this.removeClass("blink");
	}, 150);

	var screen = $("#screen").text();
	if (screen == "0") screen = "";

	var buttonContent = $this.attr("data-fun");
	console.log(buttonContent);

	if ( (screen == "0") && (buttonContent == "0") ) return;

	if ( $this.hasClass("number") ) {

		if ( (buttonContent == ".") && (screen == "") ) {
			screen = "0."
		} else {
			screen += buttonContent;
					
		}
		$("#screen").text(screen);	

	} else {
		
		switch (buttonContent) {

			case "+":
				if (this.memory != 0) this.compute();
				this.func = "+";
				this.addToMemory();
				break;
			case "-":
				if (this.memory != 0) this.compute();
				this.func = "-";
				this.addToMemory();
				break;
			case "*":
				if (this.memory != 0) this.compute();
				this.func = "*";
				this.addToMemory();
				break;
			case "/":
				if (this.memory != 0) this.compute();
				this.func = "/";
				this.addToMemory();
				break;
			case "+-":
				if ( screen != 0 ) {
					if ( screen[0] == "-" ) screen = screen.substr(1, screen.length);
					else screen = "-" + screen;
					$("#screen").text(screen);
				}
				break;
			case "C":
				this.memory = 0;
				$("#screen").text(0);
				break;
			case "=":
				console.log(this.memory);
				if (this.memory != 0) this.compute();
				break;

		}

	}

}

var calc = new Calculator();
