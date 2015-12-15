$(document).ready(function(){
	function main_menu_height() {
		var height = $(window).height();
		$(".menu").css({"height": height + "px"});
	}
	main_menu_height();
	$(window).resize(function(){
		main_menu_height();
	});
});