var Modal = function () {

	this.msgs = [
		["Are you sure you want to delete this note?", "Yes", "note-delete", "No"]
	];

};

Modal.prototype.show = function(id, data) {

	var msg = this.msgs[id];
	console.log(data);
	console.log(msg);
	$("#modal-msg").text(msg[0]);
	$("#modal-procede").text(msg[1]).addClass(msg[2]).attr("data-id", data);
	$("#modal-close").text(msg[3]);
	$("#modal-wrapper").show();

}

Modal.prototype.hide = function() {

	$("#modal-wrapper").hide();

}

var modal = new Modal();