var Modules = function() {

	this.controllers = "<div class='controllers'>\
		<span class='close-module'>\
			<i class='material-icons'>close</i>\
		</span>\
		<span class='skin-change'>\
			<i class='material-icons'>invert_colors</i>\
		</span>\
	</div>";

	this.loaded = {
		10: 0,
		11: 0,
		12: 0,
		13: 0,
		14: 0,
		15: 0,
		16: 0
	}

	this.limit = {
		10: 1,
		11: 20,
		12: 1,
		13: 20,
		14: 20,
		15: 20,
		16: 1
	}

	this.themeNumber = {
		10: 1,
		11: 2,
		12: 1,
		13: 4,
		14: 0,
		15: 0,
		16: 0
	}

	this.currentTheme = {
		10: 0,
		11: 0,
		12: 0,
		13: 0,
		14: 0,
		15: 0,
		16: 0
	}

}

Modules.prototype.initialize = function() {
	console.log("Modules Initialised");
}

Modules.prototype.getDefaultSkin = function(module) {
	
	return m.currentTheme[module];

}

Modules.prototype.changeSkin = function(id, module, theme) {

	console.log(id + " - " + module + " - " + theme);

	var themeNumber = m.themeNumber[module];
	
	var currentTheme = $(".frame[data-id='" + id + "'][data-module='" + module + "']").attr("data-theme");
	var nextTheme;

	if (currentTheme < themeNumber) nextTheme = parseInt(currentTheme) + 1;
	else nextTheme = 0;

	$(".frame[data-id='" + id + "'][data-module='" + module + "']").attr("data-theme", nextTheme);
	m.currentTheme[module] = nextTheme;

}

Modules.prototype.add = function(moduleId) {

	moduleId = parseInt(moduleId);
	var loaded = this.loaded[moduleId];
	var limit = this.limit[moduleId];

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

				if ( ( position > real + 1 ) || ( position > real - 1 ) ) return;

				if ( position < real ) position += 19; 
				else position -= 19;
				
				if (position == 1140) return;
				timer.scrollTopMinute = position;

				$("#timer-minute").scrollTop(position);

			})

			$("#timer-hour").scroll(function() {

				var position = timer.scrollTopHour;
				var real = $("#timer-hour").scrollTop();
				console.log("POST: " + position + ", real: " + real);

				if ( ( position > real + 1 ) || ( position > real - 1 ) ) return;

				if ( position < real ) position += 19; 
				else position -= 19;

				if (position == 475) return;
				timer.scrollTopHour = position;

				$("#timer-hour").scrollTop(position);

			})

			break;
		case 13:
			tracker.create(loaded);
			break;
		case 15:
			tally.create(loaded);
			break;
		case 16:
			$(".cal").show();
			break;
		default:
			console.log("Not implemented");
			break;

	}

	$("#add-module").trigger("click");

}

Modules.prototype.close = function(frame) {

	var moduleId = frame.parent().parent().attr("data-module");
	console.log(moduleId);

	if ( moduleId ==  12) $(".stop-timer").trigger("click");

	this.loaded[moduleId] = this.loaded[moduleId] - 1;
	$(frame).parent().parent().removeClass("open-module").addClass("close-module-anim");

	setTimeout(function() {

		if (moduleId == 16) {
			$(frame).parent().parent().removeClass("close-module-anim").addClass("open-module").hide();
		} else {
			$(frame).parent().parent().remove();
		}

		
	}, 300)

}

Modules.prototype.random = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var m = new Modules();
m.initialize();