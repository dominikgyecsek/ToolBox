$(document).ready(function() {

	$("#add-module").click(function() { iF.openMenu(); })
	$(".module").click(function() { m.add( $(this).attr("data-module") ); })
	$("html").on("click", ".close-module", function() { m.close( $(this) ); })
	$("#aside-close").click(function() { $("#add-module").trigger("click"); })
	$("html").on("click", ".button", function() { calc.press( $(this) ); })

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

			if ( (time == "undefined") || (time == undefined) ) {

				var minute = $(".timer-minute").last().val();
				var hour = $(".timer-hour").last().val();

				if (minute == "") minute = 0;
				if (hour == "") hour = 0;

				if ( ! timer.validate(minute, hour) ) return;

				$(this).text("Pause");

				var time = parseInt(minute) + parseInt(hour) * 60;
				if (time == 0) return;

				$(".timer-picker, .timer-layer").hide();
				$(".timer-remainder").show();
				$(".start-pause-timer").text("Pause");
				$(".timer-remainder").text(update.addLeadingZero(hour) + ":" + update.addLeadingZero(minute) + ":" + update.addLeadingZero(00));
				timeUpdates.push([1, time*60-1]);

			} else {

				$(this).text("Pause");
				timeUpdates.push([1, time]);

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

	/* Focusing */

	$("html").on("mouseenter", ".frame", function() {

		$(".frame").css("z-index", "5");
		$(this).css("z-index", "6");

	})

	setTimeout(function() {
		$("#CO").trigger("click");
	})

	// Tracker

	$("html").on("click", ".tracker-start", function() {
		
		tracker.start( $(this).parent().parent() );

	})

	$("html").on("click", ".tracker-stop", function() {

		var $this = $(this).parent().parent();
		tracker.stop($this.attr("data-id"), $this.attr("data-state"), $this.attr("data-time"));

	})

	/* SKin change */

	$("html").on("click", ".skin-change", function() {
		var $this = $(this).parent().parent();
		m.changeSkin($this.attr("data-id"), $this.attr("data-module"), $this.attr("data-theme"));
	})

	/* Window */

	/*$(window).resize(function() {

		var $this = $(window);

		if ( ($this.height() < 360) || ($this.width() < 360) ) {
			$("main").hide();
			$("#oops").show();
		} else {
			$("#oops").hide();
			$("main").show();
		}

	})

	$(window).trigger("resize");*/

})