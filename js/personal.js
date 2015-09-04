$(function() {
	// Make browser height the same as window height
	$(".intro_div").height($(window).height());

	$(".bubble").velocity({r: 390}, 600);
});