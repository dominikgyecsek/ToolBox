var Tally = function () {}

Tally.prototype.create = function(id) {

	var DOM = "\
		<div data-theme='" + m.getDefaultSkin(15) + "' data-module='15' data-id=" + id + " class='frame tally open-module'>\
			" + m.controllers + "\
			<div class='content'>\
				<div class='contenteditable' contenteditable='true' onclick='$(this).focus();'>" +  tally.randomCategory() + "</div>\
				<button class='tally-btn tally-dec left'> <i class='material-icons'>remove</i> </button>\
				<span class='tally-count'> 0 </span>\
				<button class='tally-btn tally-inc right'> <i class='material-icons'>add</i> </button>\
			</div>\
		</div>\
	";

	$("#dashboard").append(DOM);
	$(".tally").last().draggable({ handle: '.controllers', containment: 'parent' });
	
}

Tally.prototype.randomCategory = function() {

	const categories = [
		"Movies seen",
		"Books read",
		"Cookies bought",
		"In relationship",
		"Awkward moments",
		"Swears",
		"Chill from music"
	];

	return categories[m.random(0, categories.length-1)];

}

Tally.prototype.increase = function(id) {
	$this = id;
	var before = $this.parent().find(".tally-count").text();
	$this.parent().find(".tally-count").text( parseInt(before) + 1 );
	
}

Tally.prototype.decrease = function(id) {
	$this = id;
	var before = $this.parent().find(".tally-count").text();
	$this.parent().find(".tally-count").text( parseInt(before) - 1 );
}

tally = new Tally();