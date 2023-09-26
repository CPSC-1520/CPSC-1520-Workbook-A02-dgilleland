// When a gallery thumbnail size button is clicked,
//   - Add an event handler for the button's click event.
const buttonContainer = document.querySelector('ul.thumbnail-sizes');
const clickHandler = function (event) {
    let info; // for debugging
    // see where the click happened
    // console.log(event.target);
    //          \__________/  the element that was clicked
    if(event.target.tagName === 'LI') {
        // console.log("You clicked the LI button");
        info = event.target.className;
        // console.log("These are the classes: ",info);
        info = info.replace('thumbnails-','');
        info = info.replace('active', '');
        info = info.trim(); // Now, I have the size
    } else {
        console.log("You clicked between the buttons");
    }
}
buttonContainer.addEventListener('click', clickHandler);
// the corresponding size class should be added to the
//    - Within the handler for the click event,
//      I want to discover the class name that starts with
//      "thumbnails-" and ends with the size
//      (e.g. "thumbnails-sm").
// div.thumbnails element. This will apply the corresponding
//    - Query for the div.thumbnails element and add the
//      class size to .classList
// CSS rule to  modify the display the of the thumbnail
// images. In addition to this, the clicked button should
// be made active (i.e. add the active class).

/* HTML DOM Tree
main
    nav
        ul.thumbnail-sizes
         x3=li.thumbnails-XX [.active]
    section.gallery
        h1
        div.thumbnails.XX
         x3=img[src="images/PLACE_thumb.png"][alt="PLACE"]
*/