var Calculator = function() {
	this.DOM = "\
		<div data-module='10' class='frame calculator'>\
			" + m.controllers + "\
			<div class='content'>\
				content\
			</div>\
		</div>\
	";
}

Calculator.prototype.initialise = function() {
	
	$("main").append(this.DOM);
	$(".calculator").draggable();

}

var calc = new Calculator();
