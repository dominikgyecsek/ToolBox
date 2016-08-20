var timeUpdates  = [
	
]

var TimeUpdate = function() {
	this.isRunning = false;
}

TimeUpdate.prototype.start = function() {
	if ( !this.isRunning ) {
		updateInterval = setInterval(function() {
			update.increase();
		}, 1000);
		this.isRunning = true;
	}
}

TimeUpdate.prototype.increase = function() {

	console.log("INC");

	if (timeUpdates.length == 0) {
		update.stop();
		return;
	}

	for (var i = 0; i < timeUpdates.length; i++) {
		var row = timeUpdates[i];
		var module = row[0];

		if (module == 1) {

			var time = row[1];
			var hours = Math.floor(time/60/60);
			time = time - hours * 60 * 60;
			var minutes = Math.floor(time/60);
			var seconds = time - minutes * 60;

			row[1] -= 1;

			if ( row[1] == 0 ) {
				alert("Times Up!");
				$(".timer-remainder").hide();
				$(".timer-picker, .timer-layer").show();
			} else {
				$(".timer-remainder").text(update.addLeadingZero(hours) + ":" + update.addLeadingZero(minutes) + ":" + update.addLeadingZero(seconds))
			}

		}

	}

}

TimeUpdate.prototype.stop = function() {
	this.isRunning = false;
	clearInterval(updateInterval);
}

TimeUpdate.prototype.addLeadingZero = function(number) {
	if ( String(number).length == 1 ) return "0" + number;
	return number;
}

var update = new TimeUpdate();
var updateInterval;