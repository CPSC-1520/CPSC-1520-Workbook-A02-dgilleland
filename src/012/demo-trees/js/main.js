// 1. create the event listener function
const handleFeatureClick = function () {
	let desc = document.querySelector('p.feature.description');

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

// 2. select the target element
let featureImage = document.querySelector('img.feature');

// 3. add event listener
featureImage.addEventListener('click', handleFeatureClick);
