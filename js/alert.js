var Modal = function () {

	this.msgs = [
		["Are you sure you want to delete this note?", "Yes", "No"]
	];

};

Modal.prototype.show = function(id) {

	//alert(this.msgs[id]);

}

var modal = new Modal();
modal.show(0);