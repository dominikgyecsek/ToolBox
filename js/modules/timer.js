var Timer = function() {};

Timer.prototype.initialise = function(id) {

	var DOM = "\
		<div data-theme='" + m.getDefaultSkin(12) + "' data-module='12' data-state='paused' data-time='undefined' data-id=" + id + " class='frame timer open-module'>\
			" + m.controllers + "\
			<div class='content scrollbar-hide'>\
				<div class='contenteditable' contenteditable='true' onclick='$(this).focus();'>Eggs</div>\
				<button class='stop-timer timer-btn'>Stop</button>\
				<div class='timer-remainder'></div>\
				<div class='timer-picker'>\
					<input type='text' class='timer-input timer-hour' placeholder='hour'>\
					<input type='text' class='timer-input timer-minute' placeholder='minute'>\
				</div>\
				<button class='start-pause-timer timer-btn'>Start</button>\
			</div>\
		</div>\
	";

	$("#dashboard").append(DOM);
	$(".timer").last().draggable({ handle: '.controllers', containment: 'parent' }).css("position", "absolute");

}

Timer.prototype.validate = function(m, h) {

	if ( ( m == 0) && (h == 0) ) return false;
	if ( ( h > 168 ) || ( m > 59 ) ) return false;
	if ( ( isNaN(m) ) || ( isNaN(h) ) ) return false;

	return true;
}

Timer.prototype.start = function($this) {

	var id = $this.attr("data-id");

	if ( $this.find(".start-pause-timer").text() == "Pause" ) {

		console.log("PAUSE");

		$this.find(".start-pause-timer").text("Start")

		for (var i = 0; i < timeUpdates.length; i++) {
			var row = timeUpdates[i];
			if ( ( row[0] == 1 ) && ( row[2] == id ) ) {
				$(".timer[data-id=" + id + "]").attr("data-time",  row[1]).attr("data-state", "paused");
				timeUpdates.splice(i, 1);
			}
		}

	} else {

		var time = $(".timer[data-id=" + id + "]").attr("data-time");
		$(".timer[data-id=" + id + "]").attr("data-time", time).attr("data-state", "playing");

		if ( (time == "undefined") || (time == undefined) ) {

			var minute = $this.find(".timer-minute").val();
			var hour = $this.find(".timer-hour").val();

			if (minute == "") minute = 0;
			if (hour == "") hour = 0;

			if ( ! timer.validate(minute, hour) ) return;

			$this.find(".start-pause-timer").text("Pause")

			var time = parseInt(minute) + parseInt(hour) * 60;
			if (time == 0) return;

			$this.find(".timer-picker, .timer-layer").hide();
			$this.find(".timer-remainder").show();
			$this.find(".start-pause-timer").text("Pause");
			$this.find(".timer-remainder").text(update.addLeadingZero(hour) + ":" + update.addLeadingZero(minute) + ":" + update.addLeadingZero(00));
			timeUpdates.push([1, time*60-1, id]);

		} else {

			$this.find(".start-pause-timer").text("Pause")
			timeUpdates.push([1, time, id]);

		}

		update.start();	
		
	}

}

Timer.prototype.stop = function($this) {

	var id = $this.attr("data-id");

	$this.find(".timer-remainder").hide();
	$this.find(".timer-picker, .timer-layer").show();
	$this.find(".start-pause-timer").text("Start");
	$(".timer[data-id=" + id + "]").attr("data-time", "undefined").attr("data-state", "paused");

	for (var i = 0; i < timeUpdates.length; i++) {
		var row = timeUpdates[i];
		if ( ( row[0] == 1 ) && ( row[2] == id ) ) {
			timeUpdates.splice(i, 1);
			break;
		}
	}

}

var timer = new Timer();