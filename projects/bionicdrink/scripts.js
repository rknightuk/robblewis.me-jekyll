var drinks = [];
drinks.a = "Absinthe";
drinks.b = "Baileys";
drinks.c = "Courvoisier";
drinks.d = "Disaronno";
drinks.e = "Everclear";
drinks.f = "Firewater";
drinks.g = "Grappa";
drinks.h = "Horilka";
drinks.i = "Iced Tea";
drinks.j = "Jack Daniels";
drinks.k = "Kahlua";
drinks.l = "Lambrini";
drinks.m = "Martini";
drinks.n = "Nocello";
drinks.o = "Ouzo";
drinks.p = "Passion Fruit";
drinks.q = "Quince";
drinks.r = "Rum";
drinks.s = "Smirnoff";
drinks.t = "Tequila";
drinks.u = "Um Bongo";
drinks.v = "Vodka";
drinks.w = "Whisky";
drinks.x = "Xante Liqueur";
drinks.y = "Yoghurt";
drinks.z = "Zima";


$(document).ready(function(){

	if(window.location.hash) {
	  var hash = window.location.hash.replace('#', '');

	  $('#drink-name').val(hash);
	  getDrink();
	}

	$('#get-drink').click(function(e) {
		e.preventDefault();
		window.location.hash = $('#drink-name').val();

		getDrink();
	});

	$('#name-input').submit(function(e) {
		e.preventDefault();
		window.location.hash = $('#drink-name').val();

		getDrink();
	});

	function getDrink() {
		var name = $('#drink-name').val();
		if (name.match(/[^a-zA-Z ]/g)) {
			name = name.replace(/[^a-zA-Z ]/g, '');
		}

		$('.twitter-share').attr('href', 'https://twitter.com/intent/tweet?text=I created my %23bionicdrink, what\'s yours?&url=http://robblewis.me/projects/bionicdrink/%23'+name);
		
		name = name.toLowerCase();
		name = name.split('');
		var drink = [];

		for (var i = 0; i < name.length; i++) {
			letter = name[i];
			drink.push(drinks[letter]);
		}

		$('.wrapper-input').slideUp();

		name = name.join('');

		$output = $('.wrapper-output');
		$output.find('h2 span').empty().append(name);
		$output.find('.drink-output').empty().append(drink.join('<br>'));
		$output.show().slideDown();
	}

	$('.another').click(function(e) {
		e.preventDefault();
		$('.wrapper-output').slideUp();
		$('.wrapper-input').slideDown();
		$('.wrapper-input').find('input').val('');

	});

});