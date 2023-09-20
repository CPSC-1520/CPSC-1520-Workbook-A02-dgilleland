// 1. select the target element
var featureImage = document.querySelector('img.feature');

// 2. create the event listener function
function handleFeatureClick() {
    console.log('img.feature was clicked...');
    var desc = document.querySelector('.feature.description');
    desc.classList.remove('hidden');
}

// 3. add event listener
featureImage.addEventListener('click', handleFeatureClick);