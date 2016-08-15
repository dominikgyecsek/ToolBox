$(document).ready(function() {

	$("#add-module").click(function() {
		iF.openMenu();
	})

	$(".module").click(function() {
		var moduleId = $(this).attr("data-module")
		m.add(moduleId);
	})

})