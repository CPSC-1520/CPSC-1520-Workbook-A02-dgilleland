// Practice Solution

// Another common term for our event-handling functions is "callback"
// The following lines do two things: 1) creates a constant, 2) declares/defines a function with instructions
// Using a const variable to refer to our function protects it from being changed by other
const featureLinkHandler = function (evt) { // Step 2 // evt is an instance of the Event object
    let featureImage = document.querySelector('img.feature');
    featureImage.src = evt.target.href; // This assigns the RH value to the LH variable
    featureImage.classList.remove('hidden');
    evt.preventDefault(); // Last Step - stopping the default behaviour of anchor tag 
}

var featureLink = document.querySelector('a.feature.link'); // target element to listen to

// Tell our featureLink to "listen" for 'click' events, and when one happens, call the featureLinkHandler function (passing in an Event object with details about the event)
featureLink.addEventListener('click', featureLinkHandler); // Step 3
//                                   \callback function/
