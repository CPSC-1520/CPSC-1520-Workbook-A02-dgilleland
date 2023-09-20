# Form Input and Handling Events ![Code](https://img.shields.io/badge/Code%20Status-Walkthrough-blueviolet?logo=Visual%20Studio%20Code&labelColor=indigo)  ![Docs](https://img.shields.io/badge/Documentation%20Status-10--40%25%20Rough%20Outline-red?logo=Read%20the%20Docs)

- [ ] 008 - 🆕 Event Listeners: button click, form submit, input change, etc.
  - [ ] Event Bubbling & Cancelling
  - [ ] Include the new `<dialog>` element and the  showModal()  method, along with the `<form method="dialog">` element. (backlog 030)

```js
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
```