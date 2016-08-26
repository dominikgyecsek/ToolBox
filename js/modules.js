var Modules = function() {

	this.controllers = "<div class='controllers'>\
		<span class='close-module'>\
			<i class='material-icons'>close</i>\
		</span>\
		<span class='skin-change'>\
			<i class='material-icons'>brush</i>\
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
		13: 5,
		14: 5,
		15: 5,
		16: 5
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

Modules.prototype.getDefaultSkin = function(module) {
	
	return m.currentTheme[module];

}

Modules.prototype.changeSkin = function(id, module, theme) {

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
	console.log(moduleId);
	var loaded = this.loaded[moduleId];
	var limit = this.limit[moduleId];

	if ( limit == loaded ) {
		return;
	} else if ( limit == loaded + 1) {
		$(".module[data-module='" + moduleId + "']").addClass("disabled");
	}

	this.loaded[moduleId] = loaded + 1;

	switch (moduleId) {

		case 10:
			calc.initialise(loaded);
			break;
		case 11:
			sticker.initialise(loaded);
			break;
		case 12:
			timer.initialise(loaded);
			break;
		case 13:
			tracker.create(loaded);
			break;
		case 14:
			countdown.initialise(loaded);
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

	$(".frame").css("z-index", "5");
	$(".frame[data-id='" + loaded + "'][data-module='" + moduleId + "'").css("z-index", "6");
	$("#add-module").trigger("click");

}

Modules.prototype.close = function(frame, confirmation) {

	var moduleId = frame.parent().parent().attr("data-module");
	$(".module[data-module='" + moduleId + "']").removeClass("disabled");

	if ( moduleId ==  12) $(".stop-timer").trigger("click");

	if ( moduleId == 11 ) {
		if (!confirmation) {
			var id = frame.parent().parent().attr("data-id");
			modal.show(0, id);
			return;
		}
	}

	this.loaded[moduleId] = this.loaded[moduleId] - 1;
	$(frame).parent().parent().removeClass("open-module").addClass("close-module-anim");

	setTimeout(function() {

		if (moduleId == 16) $(frame).parent().parent().removeClass("close-module-anim").addClass("open-module").hide();
		else $(frame).parent().parent().remove();

		
	}, 300)

}

Modules.prototype.random = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var m = new Modules();