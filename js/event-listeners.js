$(document).ready(function() {

	$("#add-module").click(function() {
		iF.openMenu();
	})

	$(".module").click(function() {
		var moduleId = $(this).attr("data-module")
		m.add(moduleId);
	})

	//setTimeout(function() {
		//$(".module[data-module='12']").first().trigger("click");
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

	// Timer

	$("html").on("click", ".start-pause-timer", function() {

		if ( $(this).text() == "Pause" ) {

			$(this).text("Start");

			for (var i = 0; i < timeUpdates.length; i++) {
				var row = timeUpdates[i];
				var module = row[0];
				if (module == 1) {
					var time = row[1];
					$(".timer[data-id=" + 0 + "]").attr("data-time", time).attr("data-state", "paused");
					timeUpdates.splice(i, 1);
				}
			}

		} else {

			var time = $(".timer[data-id=" + 0 + "]").attr("data-time");
			$(".timer[data-id=" + 0 + "]").attr("data-time", time).attr("data-state", "playing");

			$(this).text("Pause");

			if ( (time == "undefined") || (time == undefined) ) {

				var minute = Math.ceil ( $("#timer-minute").scrollTop() / 19 );
				var hour = Math.ceil ( $("#timer-hour").scrollTop() / 19 );
				console.log(minute);
				console.log(hour);
				var time = minute + hour * 60;
				if (time == 0) return;

				$(".timer-picker, .timer-layer").hide();
				$(".timer-remainder").show();
				$(".start-pause-timer").text("Pause")
				timeUpdates.push([1, time*60]);
				console.log(timeUpdates);

			} else {

				timeUpdates.push([1, time]);
				console.log(timeUpdates);

			}

			update.start();	
			
		}

	})

	$("html").on("click", ".stop-timer", function() {

		$(".timer-remainder").hide();
		$(".timer-picker, .timer-layer").show();
		$(".start-pause-timer").text("Start");
		$(".timer[data-id=" + 0 + "]").attr("data-time", "undefined").attr("data-state", "paused");

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

	// Tracker

	$("html").on("click", ".tracker-start", function() {
		
		var $this = $(this).parent().parent();
		tracker.start($this);

	})

	$("html").on("click", ".tracker-stop", function() {

		var $frame = $(this).parent().parent();
		var state = $frame.attr("data-state");
		var id = $frame.attr("data-id");
		var time = $frame.attr("data-time");
		tracker.stop(id, state, time);

	})

})