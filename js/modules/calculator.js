var Calculator = function() {

	this.DOM = "\
		<div data-module='10' class='frame calculator'>\
			" + m.controllers + "\
			<div class='content'>\
				<div id='screen'>\
				</div>\
				<div class='buttons'>\
					<span class='button fun'>+</span>\
					<span class='button fun'>-</span>\
					<span class='button fun'>*</span>\
					<span class='button fun'>/</span>\
					<span class='button number'>7</span>\
					<span class='button number'>8</span>\
					<span class='button number'>9</span>\
					<span class='button fun'>C</span>\
					<span class='button number'>4</span>\
					<span class='button number'>5</span>\
					<span class='button number'>6</span>\
					<span class='button fun'>+-</span>\
					<span class='button number'>1</span>\
					<span class='button number'>2</span>\
					<span class='button number'>3</span>\
					<span class='button fun' id='equal'>=</span>\
					<span class='button number' id='zero'>0</span>\
					<span class='button number' id='point'>.</span>\
				</div>\
			</div>\
		</div>\
	";

	this.memory = 0;
	this.func = null;


}

Calculator.prototype.initialise = function() {
	
	$("main").append(this.DOM);
	$(".calculator").draggable();
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

	var buttonContent = $this.text();
	if ( (screen == "0") && (buttonContent == "0") ) return;

	if ( $this.hasClass("number") ) {

		screen += buttonContent;
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
