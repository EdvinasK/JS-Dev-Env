//--------------SELECTORS----------------------

$(document).ready(function(){

	//----SELECTING BY TAG-----
	var ps = $('p');
	var as = $('a');
	var pasp = $('div, table, td, p, a, span');
	var ttr = $('table tr');
	var divs = $('div');

	$('div.header').css('background-color', '#ffd24d');

	$('div').each(function(){
		console.log($(this).html());
	});

	console.log(pasp);

	$('div, span').css('propName', 'value');

	//----SELECTING BY ID-----
	console.log($('#second-paragraph').html());

	//----SELECTING BY CLASS-----
	console.log($('.left-block').html());
	console.log($('.left-block, .right-block').html());
	// Wont need to search the whole DOM
	console.log($('div.left-block').html());
	$('.footer').css('border', '2px solid #ffc266');
});

//--------------BASICS----------------------

$(document).ready(function() {
	// alert('Document is ready.');
	console.log('$(document).ready(function(){} script starts only after everything was loaded from the DOM');
});

window.onload = function(){
	// alert('DOM loaded');
	console.log('$window.onload = function(){} script starts when DOM`s html has been loaded');
};

$(document).ready(function() {
	$('.header').html('<h1>Home</h1>');
});