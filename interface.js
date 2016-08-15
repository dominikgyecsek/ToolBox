var Interface = function() {}

Interface.prototype.initialize = function() {
	console.log("Initializing interface");
}

Interface.prototype.openMenu = function() {
	if ( $("aside").hasClass("close") ) {
		$("aside").removeClass("close");
		$("aside").addClass("open");
		$("#add-module>i").text("close");
	} else {
		$("aside").removeClass("open");
		$("aside").addClass("close");
		$("#add-module>i").text("menu");		
	}
}

var iF = new Interface();
iF.initialize();