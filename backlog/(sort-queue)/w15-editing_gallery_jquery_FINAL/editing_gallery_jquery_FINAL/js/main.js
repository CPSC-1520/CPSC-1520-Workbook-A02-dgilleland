// assume current is the first one...
var currentThumb = $('.thumbnails>li>img')[0];

// handle clicking the thumbs
$('nav ul').on('click', 'img', function (evt) {
	// track the current thumb...
	currentThumb = evt.target;

	$('.title').text(evt.target.title);

	// display tags, if any...
	$('p.tags').text($(currentThumb).attr('data-tags'));

	$('.editor img').attr({
		src : evt.target.src.replace('_thumb', ''),
		alt : evt.target.alt,
		title: evt.target.title
	});
});
// handle submitting the tag form
$('.editor form').on('submit', function (evt) {
	var value;
	// update the tag for the currently displayed image

	// 1. get tag value...
	value = $(evt.target.elements.tag).val();

	if(value.trim().length > 0 && value.indexOf(' ') == -1) {
		// 2. update the p.tags text...
		$('p.tags').append('#' + value + ' ');
		// 3. update the data-tags...
		$(currentThumb).attr('data-tags', $('p.tags').text());

		// clear/reset the form
		evt.target.reset();
	} else {
		$('p.error').text('cannot be empty or contain spaces')
			.removeClass('hidden')
			.fadeOut(3000, function () {
				$('p.error').addClass('hidden')
					.removeAttr('style');
			});
	}

	evt.preventDefault();
});