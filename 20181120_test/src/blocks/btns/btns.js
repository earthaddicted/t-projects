
function themeSwitcherFonts() {
		var isBig = $("#my_btn-font").text() == "A/a";
		var newTitle = isBig ? 'a/A' : 'A/a';
		$("#my_btn-font").html(newTitle);

	isBig = $("#my_btn-font").text() == "A/a";

	$(".main").removeClass(!isBig ? "font-large" : "font-small");
	$(".main").addClass(isBig ? "font-large" : "font-small");
}

function themeSwitcherBg() {
		var isDark = $("#my_btn-bg").text() != "Light Theme";
		var newTitle = !isDark ? 'Dark Theme' : 'Light Theme';

		$("#my_btn-bg").html(newTitle);

	isDark = $("#my_btn-bg").text() != "Light Theme";

	$(".main").removeClass(!isDark ? "theme-light" : "theme-dark");
	$(".main").addClass(isDark ? "theme-light" : "theme-dark");

}

function expandCollapseHandler() {
	var asideBlock = $('.aside-block');
	asideBlock.toggleClass('show');

	var isLong = $(".app-version").text() == "Version 1.0";
	var newText = isLong ? "V 1.0" : "Version 1.0";
	$(".app-version").html(newText);
}

function initEventHandlers() {
	$("#my_btn-font").on("click", themeSwitcherFonts);
	$("#my_btn-bg").on("click", themeSwitcherBg);
	$(".move-arrow").on("click", expandCollapseHandler);

	adjustExpanding();
}

// $(document).ready(initEventHandlers);

$(document).on("ready",initEventHandlers);
$(window).on("load", adjustExpanding);
$(window).on("resize", adjustExpanding);


function adjustExpanding (){
	if ($(window).width () < 812) {
		$(".aside-block").removeClass ('show');
		$(".app-version").html("V 1.0");

	} else {
		$(".aside-block").addClass('show');
		$(".app-version").html("Version 1.0");
	}
}