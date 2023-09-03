// Refactoring the code to make it "better"
// 1) Turned my function "variable" into a constant
// 2) Improve the "readability" of my code by choosing better names
// 3) Use let instead of var
// 4) Use local variables in functions where available =>> "outside" variable vs. local variable
//    Benefit of "isolation"
// 5) Limit the use of "temporary" global variables =>> "inline" the variable featureLink

const toggleImage = function(evt) {
    // Get the ID of the image tag from my <a data-img="..">
    let imgId = evt.target.dataset.img;
    // Use that ID to find my image tag
    let featureImage = document.getElementById(imgId);

    // The if/else is part of what allows me to create the "logic" for toggling visibility
    if (featureImage.classList.contains('hidden')) {
        featureImage.src = evt.target.href;
        featureImage.classList.remove('hidden');
    } else {
        featureImage.src = '';
        featureImage.classList.add('hidden');
    }

    evt.preventDefault();
}

const assignListener = function(el) {  // el is my parameter name for whatever HTMLElement is supplied
    // Setup the listener function for the click event
    el.addEventListener('click', toggleImage);
}


// Now, handling MORE <a class="feature"> elements!
document.querySelectorAll('a.feature') // .querySelectorAll() will produce an Array of elements
        .forEach(assignListener);      // loop through the array and call assignListener for each element

