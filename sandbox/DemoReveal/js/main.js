const makeTransparent = function(evt) {
    evt.target.classList.add('reveal');
    evt.target.dataset.oldHtml = evt.target.innerHTML;
    evt.target.innerHTML = '';
}
const addReveal = function(el) {
    el.addEventListener('mouseover', makeTransparent);
}
// Notice the .forEach() method - it does a loop inside that calls my addReveal function (declared above)
// addReveal is acting as a "callback" function
document.querySelectorAll('div').forEach(addReveal);

// resetDiv is the name of the function
// I made it a const because I don't want anybody
// to change it
const resetDiv = function(el) {
    // This is the body of the function
    el.classList.remove('reveal');
    el.innerHTML = el.dataset.oldHtml || 'Show';
}

const revertChildren = function(evt) {
    let allDivs = evt.currentTarget.querySelectorAll('div');
    allDivs.forEach(resetDiv);
}

document.querySelector('main').addEventListener('click', revertChildren);
