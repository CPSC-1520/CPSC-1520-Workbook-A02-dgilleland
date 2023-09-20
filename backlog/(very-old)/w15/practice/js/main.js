// handle clicking the thumbs
$('nav ul').on('click', 'img', function (evt) {
	// option 1
	/*
	$('.editor img').attr('src', 
   		evt.target.src.replace('_thumb', ''));
	$('.editor img').attr('alt', 
   		evt.target.alt);
	$('.editor img').attr('title', 
   		evt.target.title);
	*/
	// option 2
	/*
	$('.editor img').attr('src',evt.target.src.replace('_thumb', ''))
		.attr('alt', evt.target.alt)
		.attr('title', evt.target.title);
	*/
	// option 3
	$('.editor img').attr({
		src : evt.target.src.replace('_thumb', ''),
		alt : evt.target.alt,
		title: evt.target.title
	});
});