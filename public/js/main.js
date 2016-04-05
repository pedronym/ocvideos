(function(){

	var dataNames   = ['header', 'intro', 'projects', 'footer'],
		dataFolder  = 'data',
		loadedHtml  = '',
		filesLoaded = 0,
		wrapper     = u('.wrapper'),
		body        = u('body'),
		overlay     = u('.video-overlay'),
		showcase    = u('.showcase'),
		backdrop    = u('.backdrop'),
		close       = u('.close-overlay');

	// Vanilla JS json loader //
	function getJson(path, callback) {
    	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
			var status   = httpRequest.status,
				state    = httpRequest.readyState,
				response = httpRequest.responseText;

        	if (state === 4 || state === 0) {
				if(status === 200){
					var data = JSON.parse(response);
	            	if (callback) callback(data);
				}
        	}
    	};
    	httpRequest.open('GET', path);
    	httpRequest.send();
	}

	// Loads a single json file and passes the dataLoaded function as a callback //
	function loadFile(path, callback){
		getJson(dataFolder + '/' + dataNames[filesLoaded] + '.json', dataLoaded);
	}

	// Called each time a json data file loads - checks to see if all are loaded and, if not, it loads the next one //
	function dataLoaded(data){
		loadedHtml = loadedHtml + Handlebars.templates[dataNames[filesLoaded]](data);
		filesLoaded++;

		return (filesLoaded < dataNames.length) ? loadFile(dataFolder + '/' + dataNames[filesLoaded] + '.json', dataLoaded) : init();
	}

	// Paints the loaded html all at the same time to minimize redraws //
	function init() {
		wrapper.append(loadedHtml);
		u('.project').on('click', function (e){
			e.preventDefault;
			openOverlay(e);
		});
	}

	function openOverlay (e){
		console.log('Opening Overlay');
		e.preventDefault();

		var el  = e.currentTarget,
			url = u(el).find('a').attr('href');

		body.addClass('overlay');
		overlay.addClass('show');
		overlay.attr('style', 'width:' + window.innerWidth + 'px; height:' + window.innerHeight + 'px');
		showcase.append(generateEmbed(url));
		close.on('click', function (e) {
			e.preventDefault;
			closeOverlay(e);
		});
	}

	function closeOverlay (e){
		console.log('Closing Overlay');
		close.off('click');
		body.removeClass('overlay');
		overlay.removeClass('show');
		showcase.find('iframe').remove();
	}

	function generateEmbed(url) {
		var embed = '';

		if(url.indexOf('youtube') > -1){
			url   = url.substring(url.lastIndexOf('=') + 1, url.length);
			embed = '<iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/' + url + '?autoplay=1&origin=http://ocvideos.pt" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen/>';
		} else if (url.indexOf('vimeo') > -1) {
			url   = url.substring(url.lastIndexOf('/') + 1, url.length);
			embed = '<iframe src="//player.vimeo.com/video/' + url + '" width="640" height="390" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		}

		return embed;
	}

	// Handlebars helper to create a row div each 3 items //
	Handlebars.registerHelper('createrow', function(every, context, options) {
	    var out = "", subcontext = [], i;
	    if (context && context.length > 0) {
	        for (i = 0; i < context.length; i++) {
	            if (i > 0 && i % every === 0) {
	                out += options.fn(subcontext);
	                subcontext = [];
	            }
	            subcontext.push(context[i]);
	        }
	        out += options.fn(subcontext);
	    }
	    return out;
	});

	loadFile();
})();
