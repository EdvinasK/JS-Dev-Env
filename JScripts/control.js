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

	//----SELECTING BY ATTRIBUTE-----
	console.log($('p[title').length);
	console.log($('p[title="Dynamic content"]').html());
	console.log($('input[type="text"]').length);

	var inputs = $('input[type="text"]');
	inputs.css('background-color', '#ffd966');

	//----SELECTING INPUT NODES-----
	//: selects all inputs
	var inputs = $(':input'); // : finds all inputs including textarea
	console.log('Typeof input: ' + (typeof inputs[1]));
	console.log($(inputs[1]).val()); // To use val you need to wrap variable in JQuery wrapper
	var radioButtons = $(':input[type="radio"]');
	radioButtons.css('background-color', '#ffd966');

	inputs.each(function(){
		var elem = $(this); // Wrapped in JQuery wrapper
		console.log(elem.val());
		console.log(elem);
	});
	var pagesSpan = $('span.max-pages');
	pagesSpan.text($('select.pages > option').length);
	$(':input[type="text"]').val('Sample');

	//----SELECTING NODES WITH ADDITIONAL TECHNIQUES-----
	var informationDiv = $('p:contains("Information")');
	console.log(informationDiv.html());

	$('div.bottom-block table tr:even').css('background-color', '#ffd966');
	$('div p:first-child').css('font-weight', 'bold');
	$('div p:nth-child(2)').css('font-weight', 'bold');
	$('div:eq(0)').css('font-weight', 'bold');
	$('#divv div input[value^="Events"]'); // ^ means "starts with". Right now wont select anything
	$('#divv div input[value$="Events"]'); // $ means "ends with". Right now wont select anything
	$('#divv div input[value*="Events"]'); // * means "contains". Right now wont select anything
	console.log($('div[title$="news"]').html());

	// http://codylindley.com/jqueryselectors/
});



//--------------INTERACTING WITH DOM----------------------
$(document).ready(function(){
	//----EACH-----
	//var outputDiv = $('div#output-div');
	var html = '';
	$('div.right-block p, div.bottom-block table tr').each(function (index){
		//outputDiv.html(outputDiv.html() + "<br />" + index + " " + $(this).text());
		//Optimised by storing whole html string on one line instead of iterating and appdening on each loop
		html += ("<br />" + index + " " + $(this).text());
	});
	var outputDiv = $('div#output-div');
	outputDiv.html(html);

	// Changing attributes
	$('div.right-block p').attr('title', 'right-block-paragraph');

	//JSON - JavaScript Object Notation
	//JSON Map is called an object with properties
	//Changing css attributes
	$('div.right-block').attr({
		title: 'block',
		id: 'right-block'
	});
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