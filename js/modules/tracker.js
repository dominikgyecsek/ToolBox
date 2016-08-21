var Tracker = function () {}

Tracker.prototype.create = function(id) {

	console.log(id);

	var DOM = "\
		<div data-module='15' data-id=" + id + " class='frame tracker open-module'>\
			" + m.controllers + "\
			<div class='content'>\
				<div class='contenteditable' contenteditable='true' onclick='$(this).focus();'>Project Name</div>\
				<span class='tracker-count left'> \
					<span class='tracker-days'> 2 days</span> \
					<span class='tracker-time'> 06:23:64</span> \
			 	</span>\
				<button class='tracker-btn tracker-stop right'> <i class='material-icons'>stop</i> </button>\
				<button class='tracker-btn tracker-start right'> <i class='material-icons'>play_arrow</i> </button>\
			</div>\
		</div>\
	";

	$("main").append(DOM);
	$(".tracker").last().draggable({ handle: '.controllers' });
	
}

Tracker.prototype.start = function(id) {
	console.log("Start");
}

Tracker.prototype.stop = function(id) {
	console.log("STOP");
}

tracker = new Tracker();