var Storage = function() {

	this.dashboard =  [];

}

Storage.prototype.retrieve = function() {

	//localStorage.clear();

	if ( localStorage.getItem("dashboard") != null ) {

		console.log("LOAD");
		
		$("#dashboard").append(JSON.parse(localStorage.getItem("dashboard")));
		$(".frame").draggable({ handle: '.controllers', containment: '#dashboard' });
		m.loaded = JSON.parse(localStorage.getItem("loaded"));
		m.currentTheme = JSON.parse(localStorage.getItem("currentTheme"));
		
	} else {

		$("#dashboard").append('\
		<div class="calendar_modern" id="calendar"></div>\
		<div id="calculator"></div>\
		<div id="sticky-notes">\
			<div data-module="11" class="big-hide module-group hide">Sticky Notes</div>\
		</div>\
		<div id="tallies">\
			<div data-module="15" class="big-hide module-group hide">Tallies</div>\
		</div>\
		<div id="timers">\
			<div data-module="12" class="big-hide module-group hide">Timers</div>\
		</div>\
		<div id="time-trackers">\
			<div data-module="13" class="big-hide module-group hide">Time Trackers</div>\
		</div>\
		<div id="countdowns">\
			<div data-module="14" class="big-hide module-group hide">Countdowns</div>\
		</div>')

		console.log("EMPTY");

	}

}

Storage.prototype.save = function() {

	var dashboard = $("#dashboard").html();

	localStorage.setItem("dashboard", JSON.stringify(dashboard));
	localStorage.setItem("loaded", JSON.stringify(m.loaded));
	localStorage.setItem("currentTheme", JSON.stringify(m.currentTheme));

}

var storage = new Storage();
storage.retrieve();