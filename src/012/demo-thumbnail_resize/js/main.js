// When a gallery thumbnail size button is clicked,
//   - Add an event handler for the button's click event.
const buttonContainer = document.querySelector('ul.thumbnail-sizes');
const clickHandler = function (event) {
    // 1) See what was clicked
    let target = event.target;
    let info; // for "temp" info
    if(target.tagName === 'LI') {
        // 2) Get the portion of the class name that is the size
        info = target.className;
        info = info.replace('thumbnails-','');
        info = info.replace('active', '');
        info = info.trim(); // Now, I have the size
        // 3) Apply the size to the thumbnails div
        const thumbnails = document.querySelector('div.thumbnails');
        // (btw, I am using a template literal here)
        thumbnails.className = `thumbnails ${info}`;
        //                                 \_____/
        //                                   |_ Placeholder
        // 4) Make the clicked button active
        //    - Remove the active class from the previous active button
        const previousActive = document.querySelector('li.active');
        previousActive.classList.remove('active');
        //    - Add the active class to the clicked button
        target.classList.add('active');
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