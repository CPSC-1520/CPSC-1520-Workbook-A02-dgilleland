// 1. select the target element
var featureImage = document.querySelector('img.feature');

// 2. create the event listener function
function handleFeatureClick() {
	var desc = document.querySelector('p.feature.description');

	// remove the hidden class IF it is present,
	// otherwise, add it back!
	if (desc.classList.contains('hidden')) {
		desc.classList.remove('hidden');
	} else {
		desc.classList.add('hidden');
	}

	/*
	// using string methods
	if (desc.className.indexOf('hidden') >= 0) {
		desc.classList.remove('hidden');
	} else {
		desc.classList.add('hidden');
	}
	*/
}

// 3. add event listener
featureImage.addEventListener('click', handleFeatureClick);