var Tracker = function () {}

Tracker.prototype.create = function(id) {

	$("#dashboard").append("\
		<div data-theme='" + m.getDefaultSkin(13) + "' data-module='13' data-time='0' data-state='paused' data-id=" + id + " class='frame tracker open-module'>\
			" + m.controllers + "\
			<div class='content'>\
				<div class='contenteditable' contenteditable='true' onclick='$(this).focus();'>" + this.randomCategory() + "</div>\
				<span class='tracker-count left'> 0 days 00:00:00</span>\
				<button class='tracker-btn tracker-start right'> <i class='material-icons'>play_arrow</i> </button>\
			</div>\
		</div>\
	");

	$(".tracker").last().draggable({ handle: '.controllers', containment: 'parent' }).css("position", "absolute");
	
}

Tracker.prototype.randomCategory = function() {

	const categories = [
		"Brainstorming",
		"Sleeping",
		"Running",
		"Coding",
		"Playing",
		"Working"
	];

	return categories[m.random(0, categories.length-1)];

}

Tracker.prototype.start = function($this) {

	console.log("Start");

	var state = $this.attr("data-state");
	var id = $this.attr("data-id");
	var time = $this.attr("data-time");

	if ( state == "paused" ) {

		$this.attr("data-state", "playing");
		$this.find(".tracker-start>i").text("pause")

		timeUpdates.push([3, id, time]);
		update.start();

	} else {

		$this.attr("data-state", "paused");
		$this.find(".tracker-start>i").text("play_arrow")

		for (var i = 0; i < timeUpdates.length; i++) {

			var row = timeUpdates[i];
			console.log(row);

			if ( ( row[0] == 3 ) && ( parseInt(row[1]) == id ) ) {
				console.log("STOPIING");
				timeUpdates.splice(i, 1);
				break;
			}

		}

	}

}

Tracker.prototype.stop = function(id) {
	console.log("STOP");
}

Tracker.prototype.generateTimestampt = function(time) {

	var days = Math.floor(time/60/60/24);
	time = time - days * 60 * 60 * 24;
	var hours = Math.floor(time/60/60);
	time = time - hours * 60 * 60;
	var minutes = Math.floor(time/60);
	var seconds = time - minutes * 60;

	time = days + " days " + update.addLeadingZero(hours) + ":" + update.addLeadingZero(minutes) + ":" + update.addLeadingZero(seconds);
	return time;

}

tracker = new Tracker();