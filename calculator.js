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

}

Calculator.prototype.initialise = function() {
	
	$("main").append(this.DOM);
	$(".calculator").draggable();
	$("#screen").text("0");
	this.memory = 0;

}

Calculator.prototype.press = function($this) {

	$this.addClass("blink");
	setTimeout(function() {
		$this.removeClass("blink");
	}, 200)

	var screen = $("#screen").text();
	if (screen == "0") screen = "";

	var buttonContent = $this.text();
	if ( (screen == "0") && (buttonContent == "0") ) return;

	if ( $this.hasClass("number") ) {

		screen += buttonContent;
		$("#screen").text(screen);

	} else {

		console.log(screen.length)
		console.log(screen);

		/*if ( isNaN(screen) )
			return;*/
		
		switch (buttonContent) {

			case "+":
				console.log("ADD");
				break;
			case "-":
				console.log("SUB");
				break;
			case "*":
				console.log("MUL");
				break;
			case "/":
				console.log("DIV");
				break;
			case "+-":
				console.log("INV");
				break;
			case "C":
				console.log("RES");
				break;
			case "=":
				console.log("EQL");
				break;

		}

		console.log("Computation Done");

	}

}

var calc = new Calculator();
