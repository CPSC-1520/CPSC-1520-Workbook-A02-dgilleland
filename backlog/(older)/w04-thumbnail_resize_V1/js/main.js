// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element.  This will apply the corresponding
// CSS rule to  modify the display the of hte thumbnail images.  In addition to this,
// the clicked button should be made active (i.e. add the active class).

var liSm = document.querySelector('.thumbnails-sm');
var liMd = document.querySelector('.thumbnails-md');
var liLg = document.querySelector('.thumbnails-lg');

function thumbnailSizeHandler(evt) {
	var target = evt.target;
	var thumbnails = document.querySelector('div.thumbnails');

	// if (target.classList.contains('active') != true)
	if (!target.classList.contains('active')) {
		// update the active li
		document.querySelector('li.active').classList.remove('active');
		target.classList.add('active');

		if (target.classList.contains('thumbnails-sm')) {
			
			thumbnails.classList.remove('md');
			thumbnails.classList.remove('lg');
			thumbnails.classList.add('sm');
		} else if (target.classList.contains('thumbnails-md')) {
			
			thumbnails.classList.remove('sm');
			thumbnails.classList.remove('lg');
			thumbnails.classList.add('md');
		} else {
			
			thumbnails.classList.remove('sm');
			thumbnails.classList.remove('md');
			thumbnails.classList.add('lg');
		}
	}

}

liSm.addEventListener('click', thumbnailSizeHandler);
liMd.addEventListener('click', thumbnailSizeHandler);
liLg.addEventListener('click', thumbnailSizeHandler);
