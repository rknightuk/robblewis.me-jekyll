window.onload = function() {

	// Show menu on < 600px screens
	$('.burger li').click(function() {
		$('.menu').slideToggle();
	});

	jQuery(document).ready(function () {
		jQuery('header nav').meanmenu();
	});

	$(".focus").click(function (e) {
  		e.preventDefault();
		if($(this).text() == 'focus')
		{
			$("header").slideUp();
			$("img").slideUp();
			$("footer").slideUp();
			$(this).text('unfocus');
		   
		}
		else
		{
			$("header").slideDown();
			$("img").slideDown();
			$("footer").slideDown();
			$(this).text('focus');
		}
	});

};