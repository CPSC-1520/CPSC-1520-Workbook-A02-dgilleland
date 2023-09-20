// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element.  This will apply the corresponding
// CSS rule to  modify the display the of hte thumbnail images.  In addition to this,
// the clicked button should be made active (i.e. add the active class).

function thumbnailSizeHandler(evt) {
	var target = evt.target;
	var thumbnails = document.querySelector('div.thumbnails');
	var newClassName = 'thumbnails ';

	if (target.tagName == 'LI' && !target.classList.contains('active')) {
		
		// update the active li
		document.querySelector('li.active').classList.remove('active');
		target.classList.add('active');

		// build the thumbnails class
		newClassName = newClassName + target.className[11] + target.className[12];

		thumbnails.className = newClassName;
	}
}
document.querySelector('ul.thumbnail-sizes').addEventListener('click', thumbnailSizeHandler);
