//--------------INTERACTING WITH DOM----------------------
$(document).ready(function(){
	//----EACH-----
	//var outputDiv = $('div#output-div');
	var html = '';
	$('div.right-block p, div.bottom-block table tr').each(function (index){
		//outputDiv.html(outputDiv.html() + "<br />" + index + " " + $(this).text());
		//Optimised by storing whole html string on one line instead of iterating and appending on each loop
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

	$('div.after-table-div p').each(function(index){
		// Raw DOM object
		this.title = "after-table-paragraph";

		// JQuery approach to attributes
		$(this).attr('title', 'after-table-div-paragraph');
	});

	$('div.after-table-div p').css('font-size', '20pt');





	$('div.after-table-div p').attr(
		{
			title: 'Some title 3',
			//style: 'font-size:14pt; background-color:yellow; color: black;'
		}
	) // JQuery chaining
	.css('background-color', 'yellow')
	.css('color', 'black')
	.css('font-size', '20pt');


	// Adding and removing Nodes

	// append and prepend
	var tableDiv = $('div.bottom-block');
	tableDiv.append('<span style="color:gray">JQuery appended text</span>');
	tableDiv.prepend('<span style="color:gray">JQuery prepended text</span><br />');
	$('<br /> <span style="color:gray">JQuery appended text</span>').appendTo(tableDiv);
	$('<span style="color:gray">JQuery prepend text</span> <br />').prependTo(tableDiv);

	// Wrap
	$('span.wrapped-span').wrap('<div class="ParentWrapper" />');

	// Remove
	$('div.ParentWrapper').remove();


	// Chaning Styles
	$('div.after-table-div p').attr(
		{
			title: 'Some title 3',
			//style: 'font-size:14pt; background-color:yellow; color: black;'
		}
	) // JQuery chaining
	.css( {'background-color': 'yellow', 
		   'color': 'black',
		   'font-size': '20pt'})
	.append(' - 2017');


	// Modifying Classes
	//$('input[type="text"]').addClass('highlight');
	//$('#last-name').removeClass('highlight');
});

function FocusBlur(tb){
	$(tb).toggleClass('highlight');
}


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

	var inputs = $('input[type="radio"]');
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




//--------------HANDLING EVENTS----------------------

$(document).ready(function() {
	// Old fashioned way of handling events
	// var button = document.getElementById('SubmitButton');

	// For most browsers
	// if(document.addEventListener) {
	// 	button.addEventListener('click', function() { alert('Clicked Button'); }, false);
	// }
	// else { // For IE
	// 	button.attachEvent('onclick', function() { alert('Clicked IE Button'); });
	// }

	WireEvents();


});

function WireEvents() {
	$('#SubmitButton').click(function() {
		var firstName = $(':input[type="text"]#first-name').val();
		var lastName = $(':input[type="text"]#last-name').val();
		$('div#DivOutput').html(firstName + " " + lastName);
	});

	$('.my-input').change(function() {
		$(this).addClass('highlight');
	});

	// $('#my-div, tr').mouseenter(function() {
	// 	Toggle(this);
	// 	$(this).css('cursor', 'pointer');
	// })
	// .mouseleave(function() {
	// 	Toggle(this);
	// })
	// .mouseup(function (e) {
	// 	alert($(e.target).attr('id'));
	// 	$(this).text('X: ' + e.pageX + " Y: " + e.pageY);
	// });

	// function Toggle(div) {
	// 	$(div).toggleClass('highlight');
	// }



	// bind() and on()
	$('#my-div').on('mouseenter mouseleave mouseup', function(e) {
		$(this).toggleClass('highlight');
		$(this).css('cursor', 'pointer');
		if (e.type == 'mouseup') {
			$(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
		}
	});

	var countryTable = $('table.user-table-2 tbody');

	countryTable.on('click', 'td', function(){
		alert($(this).text());
	});

	$('.add-row').on('click', function() {
		//countryTable.find('tbody').on();
		var countryName = $('#insert-country-name');
		var capitalCityName = $('#insert-capital-city-name');

		if(countryName.val()  && capitalCityName.val()){
			countryTable.append('<tr><td>' + countryName.val() + '</td><td>' + capitalCityName.val() + '</td></tr>');
			countryName.val('');
			capitalCityName.val('');
		}
	});

	// $('table.user-table-2 tr').hover(
	// 	function(){
	// 		// Mouse enter
	// 		$(this).css('background-color', '#ffc266');
	// 	},
	// 	function(){
	// 		// Mouse leave
	// 		$(this).css('background-color', '#ffebcc');
	// 	});

	$('table.user-table-2 tr').hover(function(){
		$(this).toggleClass('highlight');
	});

	// Toggle works like switch and changes on each click
	// $('table.user-table-2 tr').toggle(
	// 	function(){
	// 		$(this).css('background-color', '#ffc266');
	// 	},
	// 	function(){
	// 		$(this).css('background-color', '#efefef');
	// 	},
	// 	function(){
	// 		$(this).css('background-color', '#fff');
	// 	},
	// 	function(){
	// 		$(this).css('background-color', '#eee');
	// 	});

	//$('#my-div').off();

	$('button.show-ajax-page').click(function() {
		// Load HTML from HelpDetails
		$('#DivOutput').load('./ajaxAdditionalPage.html #SubTOC');
	});
}