var TimeUpdate = function() {

	this.isRunning = false;
	this.timeUpdates = []
	this.previousSecond = 0;

}

TimeUpdate.prototype.getTimeStamp = function() {

	return Math.round(new Date().getTime()/1000);

}

TimeUpdate.prototype.start = function() {

	if (update.timeUpdates.length < 1) return;
	
	if ( !this.isRunning ) {
		updateInterval = setInterval(function() {
			update.increase();
		}, 1000);
		this.isRunning = true;
	}

	storage.save();

}

TimeUpdate.prototype.increase = function() {

	if (update.timeUpdates.length == 0) {
		clearInterval(updateInterval);
		this.isRunning = false;
		this.previousSecond = 0;
		return;
	}

	var currentTimeStamp = update.getTimeStamp();
	var timeAway = 1;

	if ( this.previousSecond == 0 ) {
		this.previousSecond = currentTimeStamp;
	} else if ( this.previousSecond + 1 !=  currentTimeStamp) {
		timeAway = currentTimeStamp - this.previousSecond;
		//alert("TIME CORRUPTED, timeaway: " + timeAway);
	}

	console.log(this.previousSecond);
	console.log(currentTimeStamp);

	this.previousSecond = currentTimeStamp;

	for (var i = 0; i < update.timeUpdates.length; i++) {

		var row = update.timeUpdates[i];
		console.log(row);
		var module = row[0];

		if (module == 1) {

			var time = row[1] - timeAway;
			var id = row[2];
			var hours = Math.floor(time/60/60);
			time = time - hours * 60 * 60;
			var minutes = Math.floor(time/60);
			var seconds = time - minutes * 60;

			row[1] = row[1] - timeAway;
			var $this = $(".timer[data-id='" + id + "']");

			if ( row[1] <= 0 ) {
				alert("Times Up!");
				$this.find(".timer-remainder").hide();
				$this.find(".timer-picker, .timer-layer").show();
			} else {
				$this.find(".timer-remainder").text(update.addLeadingZero(hours) + ":" + update.addLeadingZero(minutes) + ":" + update.addLeadingZero(seconds))
				$this.find(".timer[data-id='0']").attr("data-time", row[1]);
			}

		} else if ( module == 3 ) {

			var time = parseInt(row[2]) + timeAway;
			var id = row[1];

			row[2] = time;
			$(".tracker[data-id=" + id + "]").attr("data-time", time);
			$(".tracker[data-id=" + id + "]").find(".tracker-count").text( tracker.generateTimestampt(time) );

		}

	}

}

TimeUpdate.prototype.addLeadingZero = function(number) {
	if ( String(number).length == 1 ) return "0" + number;
	return number;
}

var update = new TimeUpdate();
var updateInterval;