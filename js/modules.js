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
		11: 30,
		12: 10,
		13: 30,
		14: 30,
		15: 30,
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

	console.log(moduleId);

	if ( ( moduleId != 10 ) && ( moduleId != 16 ) ) $(".module-group[data-module='" + moduleId + "']").removeClass("hide");

	$("#add-module").first().trigger("click");
	$(".frame").css("z-index", "5");
	$(".frame[data-id='" + loaded + "'][data-module='" + moduleId + "'").css("z-index", "6");

}

Modules.prototype.close = function(frame, confirmation) {

	var moduleId = frame.parent().parent().attr("data-module");
	$(".module[data-module='" + moduleId + "']").removeClass("disabled");

	if ( moduleId ==  12) frame.parent().parent().find(".stop-timer").trigger("click");

	if ( (moduleId == 11) ||  (moduleId == 13) || (moduleId == 15) ) {
		if (!confirmation) {
			var id = frame.parent().parent().attr("data-id");
			modal.show(moduleId, id);
			return;
		}
	}

	if ( moduleId ==  13) frame.parent().parent().find(".tracker-count").trigger("click");

	this.loaded[moduleId] = this.loaded[moduleId] - 1;
	$(frame).parent().parent().removeClass("open-module").addClass("close-module-anim");

	if ( ( moduleId != 10 ) && ( moduleId != 16 ) && (this.loaded[moduleId] == 0) ) $(".module-group[data-module='" + moduleId + "']").addClass("hide");

	setTimeout(function() {

		if (moduleId == 16) $(frame).parent().parent().removeClass("close-module-anim").addClass("open-module").hide();
		else $(frame).parent().parent().remove();

		
	}, 300)

}

Modules.prototype.random = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var m = new Modules();