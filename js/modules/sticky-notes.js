var Sticky = function() {

}

Sticky.prototype.initialise = function(id) {

	var DOM = "\
		<div data-module='11' data-id=" + id + " class='frame sticky open-module'>\
			" + m.controllers + "\
			<div class='content'>\
				<div class='contenteditable' contenteditable='true'></div>\
			</div>\
		</div>\
	";

	$("main").append(DOM);
	$(".sticky").last().draggable({ handle: '.controllers' }).resizable();

}

var sticker = new Sticky();