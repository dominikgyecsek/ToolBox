$(document).ready(function() {

	$("#add-module").click(function() {
		iF.openMenu();
	})

	$(".module").click(function() {
		var moduleId = $(this).attr("data-module")
		m.add(moduleId);
	})

	$("#calculator-add").trigger("click");
	$("#add-module").trigger("click");

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


})