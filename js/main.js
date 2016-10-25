$(document).ready(function(){

	$('ul.tabs li a').click(function(){
		var tab_name = $(this).attr('data-tab');
		$('ul.tabs li a').removeClass('active');
		$('div.menu-container').removeClass('active-menu');
		$("." + tab_name).addClass('active');
		$("#"+tab_name).addClass('active-menu');
	});

	function navToggle(){
		$('.mobile').fadeOut();
	}
	$('#mob-nav').click(function() {
	  $(this).siblings('.mobile').fadeToggle();
	});

	$('.tabs li a').click(function() {
	  navToggle();
	});

	$('.close').click(function() {
	  navToggle();
	});
	

});