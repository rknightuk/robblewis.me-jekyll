window.onload = function() {

	// Show menu on < 600px screens
	$('.burger li').click(function() {
		$('.menu').slideToggle();
	});

};