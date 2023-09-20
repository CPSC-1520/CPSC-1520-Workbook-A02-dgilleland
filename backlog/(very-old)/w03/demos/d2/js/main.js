// 1. select the target element
var featureImage = document.querySelector('img.feature');
var featureLink = document.querySelector('a.feature.link');

// 2. create the event listener function
function handleFeatureImageClick() {
	console.log('img.feature was clicked...');
	var desc = document.querySelector('.feature.description');
	desc.classList.remove('hidden');
}

function handleFeatureLinkClick(evt) {
	console.log('a.feature.link was clicked...');

	// set img.feature src
	featureImage.src = featureLink.href;
	// make the image visible
	featureImage.classList.remove('hidden');
	// do not load the image in the page
	evt.preventDefault();
}

// 3. add event listener
featureImage.addEventListener('click', handleFeatureImageClick);
featureLink.addEventListener('click', handleFeatureLinkClick);