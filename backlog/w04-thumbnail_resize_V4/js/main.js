// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element.  This will apply the corresponding
// CSS rule to  modify the display the of hte thumbnail images.  In addition to this,
// the clicked button should be made active (i.e. add the active class).

document.querySelector('ul.thumbnail-sizes').addEventListener('click', function (evt) {
	var target = evt.target;

	if (target.tagName == 'LI' && !target.classList.contains('active')) {
		
		// update the active li
		document.querySelector('li.active').classList.remove('active');
		target.classList.add('active');

		// update the thumbnails className
		document.querySelector('div.thumbnails').className = 'thumbnails ' + target.className[11] + target.className[12];
	}
});
