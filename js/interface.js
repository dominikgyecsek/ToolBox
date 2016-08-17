var Interface = function() {}

Interface.prototype.initialize = function() {
	console.log("Initializing interface");
}

Interface.prototype.openMenu = function() {
	if ( $("aside").hasClass("close") ) {
		$("aside").removeClass("close");
		$("aside").addClass("open");
		$("#add-module>i").text("close");
		$("#aside-close").show();
	} else {
		$("aside").removeClass("open");
		$("aside").addClass("close");
		$("#add-module>i").text("menu");
		$("#aside-close").hide();		
	}
}

var iF = new Interface();
iF.initialize();