var Timer = function() {
	this.scrollTopMinute = 0;
	this.scrollTopHour = 0;
}

Timer.prototype.destroy = function() {

}

Timer.prototype.initialise = function(id) {

	var DOM = "\
		<div data-theme='" + m.getDefaultSkin(12) + "' data-module='12' data-state='playing' data-time='undefined' data-id=" + id + " class='frame timer open-module'>\
			" + m.controllers + "\
			<div class='content scrollbar-hide'>\
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
	$(".timer").last().draggable({ handle: '.controllers', containment: 'parent' });

}

Timer.prototype.validate = function(m, h) {

	if ( ( m == 0) && (h == 0) ) return false;
	if ( ( h > 168 ) || ( m > 59 ) ) return false;
	if ( ( isNaN(m) ) || ( isNaN(h) ) ) return false;

	return true;
}

var timer = new Timer();