$(document).ready(function() {

	$("#add-module").click(function() {
		iF.openMenu();
	})

	$(".module").click(function() {
		var moduleId = $(this).attr("data-module")
		m.add(moduleId);
	})

	//setTimeout(function() {
		$(".module[data-module='13']").trigger("click");
		$("#add-module").trigger("click");
	//}, 300)

	$("html").on("click", ".close-module", function() {
		var frame = $(this);
		m.close(frame);
	})

	$("#aside-close").click(function() {
		$("#add-module").trigger("click");
	})

	$("html").on("click", ".button", function() {
		calc.press($(this));
	})

	$("#timer-minute").scroll(function(event) {

		var position = timer.scrollTopMinute;
		var real = $("#timer-minute").scrollTop();

		if ( position == real ) return;

		position += 19; 
		if (position == 1140) position = 0;
		timer.scrollTopMinute = position;

		$("#timer-minute").scrollTop(position);

	})

	$("#timer-hour").scroll(function(event) {

		var position = timer.scrollTopHour;
		var real = $("#timer-hour").scrollTop();

		if ( position == real ) return;

		position += 19; 
		if (position == 475) position = 0;
		timer.scrollTopHour = position;

		$("#timer-hour").scrollTop(position);

		console.log(timer);

	})

	$("html").on("click", ".start-pause-timer", function() {

		if ( $(this).text() == "Pause" ) {
			$(this).text("Start");
			for (var i = 0; i < timeUpdates.length; i++) {
				var row = timeUpdates[i];
				var module = row[0];
				if (module == 1) {
					var time = row[1];
				}
				timeUpdates[i] = [2, time];
			}
			hasTimer = true;
			console.log(hasTimer);
			return;
		}

		if ( hasTimer ) {
			$(this).text("Pause");
			for (var i = 0; i < timeUpdates.length; i++) {
				var row = timeUpdates[i];
				var module = row[0];
				if (module == 2) {
					var time = row[1];
				}
				timeUpdates[i] = [1, time];
			}			
			hasTimer = false;
		}

		var minute = $("#timer-minute").scrollTop() / 19;
		var hour = $("#timer-hour").scrollTop() / 19;
		var time = minute + hour * 60;
		if (time == 0) return;

		$(".timer-picker, .timer-layer").hide();
		$(".timer-remainder").show();
		$(".start-pause-timer").text("Pause")
		timeUpdates.push([1, time*60]);
		update.start();

	})

	$("html").on("click", ".stop-timer", function() {
		$(".timer-remainder").hide();
		$(".timer-picker, .timer-layer").show();
		$(".start-pause-timer").text("Start")
		for (var i = 0; i < timeUpdates.length; i++) {
			var row = timeUpdates[i];
			var module = row[0];
			if (module == 1) {
				timeUpdates.splice(i, 1);
				break;
			}
		}
	})

	// Tally

	$("html").on("click", ".tally-inc", function() {
		tally.increase( $(this) );
	})

	$("html").on("click", ".tally-dec", function() {
		tally.decrease( $(this) );
	})

	$("html").on("drag", ".frame", function() {

		var $this = $(this);
		$(".frame").css("z-index", "5");
		$this.css("z-index", "6");

	})

})

var hasTimer = false;