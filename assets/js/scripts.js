$(document).ready(function(){

	// Show nav menu
	$('.burger-button').click(function(e){
		e.preventDefault();
		$('.burger-menu').slideToggle('fast');
	});
	
});