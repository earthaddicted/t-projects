// function themeSwitcher(btnId) {
// 	if (btnId == "#my_btn-font") {
// 		var isBig = $("#my_btn-font").text() == "A/a";
// 		var newTitle = isBig ? 'a/A' : 'A/a';
// 		$("#my_btn-font").html(newTitle);
// 	} else if (btnId == "#my_btn-bg") {
// 		var isLight = $("#my_btn-bg").text() != "Dark Theme";
// 		// var newTitle = isLight ? 'Dark Theme' : 'Light Theme';

// 		var isLight = $("#my_btn-bg").text() != "Dark Theme";
// 		var newTitle = isLight ? 'Dark Theme' : 'Light Theme'
// 		$("#my_btn-bg").html(newTitle);
// 	} else {
// 		throw "unexpected Id";
// 	}

// 	var isBig = $("#my_btn-font").text() == "A/a";
// 	var isLight = $("#my_btn-bg").text() == "Light Theme";

// 	$(".main").removeClass(!isLight ? "theme-light" : "theme-dark");
// 	$(".main").addClass(isLight ? "theme-light" : "theme-dark");

// 	$(".main").removeClass(!isBig ? "font-large" : "font-small");
// 	$(".main").addClass(isBig ? "font-large" : "font-small");
// }

// 
function themeSwitcherFonts(btnId) {
	if (btnId == "#my_btn-font") {
		var isBig = $("#my_btn-font").text() == "A/a";
		var newTitle = isBig ? 'a/A' : 'A/a';
		$("#my_btn-font").html(newTitle);
	} else {
		throw "unexpected Id";
}

	var isBig = $("#my_btn-font").text() == "A/a";

	$(".main").removeClass(!isBig ? "font-large" : "font-small");
	$(".main").addClass(isBig ? "font-large" : "font-small");
}

function themeSwitcherBg(btnId) {
	if (btnId == "#my_btn-bg") {
		var isLight = $("#my_btn-bg").text() != "Dark Theme";
		var newTitle = isLight ? 'Dark Theme' : 'Light Theme';

		$("#my_btn-bg").html(newTitle);
	} else {
		throw "unexpected Id";
	}

	var isLight = $("#my_btn-bg").text() == "Light Theme";

	$(".main").removeClass(!isLight ? "theme-light" : "theme-dark");
	$(".main").addClass(isLight ? "theme-light" : "theme-dark");

}

function expandCollapseHandler() {
	var asideBlock = $('.aside-block');
	asideBlock.toggleClass('show');

	var isLong = $(".app-version").text() == "Version 1.0";
	var newText = isLong ? "V 1.0" : "Version 1.0";
	$(".app-version").html(newText);
}

function initEventHandlers() {
	$("#my_btn-font").on("click", function() {
		themeSwitcherFonts("#my_btn-font");
	});

	$("#my_btn-bg").on("click", function() {
		themeSwitcherBg("#my_btn-bg");
	});

	$(".move-arrow").on("click", expandCollapseHandler);

	adjustExpanding();
}

$(document).ready(initEventHandlers);

// window.onresize = function(event) {
// 	adjustExpanding();
// }

// var oldExpandedState;
$(window).on('load', function() {
        adjustExpanding();
    });

$(window).on('resize', function() {
    adjustExpanding();
});
// function adjustExpanding() {
// 	var oldText = ["Version 1.0"];

// 	if ($(window).width() < 1024) {
// 		$(".aside-block").removeClass('show');

// 		$(".app-version").innerHTML = oldText;
// 		oldText.splice(0, 1, "V 1.0");
// 		$(".app-version").html(oldText);

// 	} else {
// 		$(".aside-block").addClass('show');

// 		$(".app-version").innerHTML = oldText;
// 		oldText.splice(0, 1, "Version 1.0");
// 		$(".app-version").html(oldText);
// 	}
// }

function adjustExpanding (){
	if ($(window).width () < 812) {
		$(".aside-block").removeClass ('show');
		$(".app-version").html("V 1.0");

	} else {
		$(".aside-block").addClass('show');
		$(".app-version").html("Version 1.0");
	}
}