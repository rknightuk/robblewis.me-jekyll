$(document).ready(function(){

	// Show nav menu
	$('.burger-button').click(function(e){
		e.preventDefault();
		$('.burger-menu').slideToggle('fast');
	});

	// Get Instagram
	if ($('.instagram').length == 1) {
		$.ajax({
			url:'https://api.instagram.com/v1/users/433244/media/recent?access_token=433244.467ede5.8d80ee8b78b3498891ce1ae5dce70931&count=5',
			dataType:'jsonp',
			success: function(data) {
				var grams = data.data;
				for (i = 0; i < grams.length; i++) {
					$('#instagram').append('<a class="gram-link" href="'+ grams[i].link +'"><div class="gram"><img width="150" height="150" src="'+ grams[i].images.thumbnail.url +'" alt="'+ grams[i].caption.text +'"></div></a>');
				}
			}
		});
	}
	
});