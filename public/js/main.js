$(document).ready(function(){
	$.getJSON('data/header.json', function(data) {
		$('body').prepend(Handlebars.templates['header'](data));
	});

	$.getJSON('data/intro.json', function(data) {
		$('.container').append(Handlebars.templates['intro'](data));
	});

	$.getJSON('data/projects.json', function(data) {
		$('.container').append(Handlebars.templates['projects'](data));
	});

	$.getJSON('data/footer.json', function(data) {
		$('.container').append(Handlebars.templates['footer'](data));
	});
});
