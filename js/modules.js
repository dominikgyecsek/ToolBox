var Modules = function() {

	this.controllers = "<div class='controllers'>\
		<span class='close-module'>\
			<i class='material-icons'>close</i>\
		</span>\
	</div>";

	this.loaded = {
		10: 0,
		11: 0,
		12: 0,
		13: 0,
		14: 0,
		15: 0
	}

	this.limit = {
		10: 1,
		11: 20,
		12: 1,
		13: 20,
		14: 20,
		15: 20
	}

}

Modules.prototype.initialize = function() {
	console.log("Modules Initialised");
}

Modules.prototype.add = function(moduleId) {

	console.log("ADDING: " + moduleId);
	moduleId = parseInt(moduleId);
	var loaded = this.loaded[moduleId];
	var limit = this.limit[moduleId];
	console.log("So far loaded: " + loaded);
	console.log("Limit: " + limit);

	if ( limit <= loaded ) {
		alert("You can only have " + limit + " windows open with this module");
		return;
	} else {
		this.loaded[moduleId] = loaded + 1;
	}

	switch (moduleId) {

		case 10:
			calc.initialise();
			break;
		case 11:
			sticker.initialise(loaded);
			break;
		case 12:
			timer.initialise(loaded);

		$("#timer-minute").scroll(function () {

				var position = timer.scrollTopMinute;
				var real = $("#timer-minute").scrollTop();

				if ( position == real ) return;

				if ( position < real ) position += 19; 
				else position -= 19;
				
				if (position == 1140) return;
				timer.scrollTopMinute = position;

				$("#timer-minute").scrollTop(position);


			})

			$("#timer-hour").scroll(function() {

				var position = timer.scrollTopHour;
				var real = $("#timer-hour").scrollTop();

				if ( position == real ) return;

				if ( position < real ) position += 19; 
				else position -= 19;

				if (position == 475) return;
				timer.scrollTopHour = position;

				$("#timer-hour").scrollTop(position);
				timer.scrollTopHourBefore = real;

			})

			break;
		case 13:
			tracker.create(loaded);
			break;
		case 15:
			tally.create(loaded);
			break;
		default:
			console.log("Not implemented");
			break;

	}

	$("#add-module").trigger("click");

}

Modules.prototype.close = function(frame) {

	var moduleId = frame.parent().parent().attr("data-module")
	this.loaded[moduleId] = this.loaded[moduleId] - 1;
	$(frame).parent().parent().removeClass("open-module").addClass("close-module-anim");
	setTimeout(function() {
		$(frame).parent().parent().remove();
	}, 300)

}

Modules.prototype.random = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var m = new Modules();
m.initialize();