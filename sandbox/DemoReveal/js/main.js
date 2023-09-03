const makeTransparent = function(evt) {
    evt.target.classList.add('reveal');
    evt.target.dataset.oldHtml = evt.target.innerHTML;
    evt.target.innerHTML = '';
}
const addReveal = function(el) {
    el.addEventListener('mouseover', makeTransparent);
}
document.querySelectorAll('div').forEach(addReveal);

const resetDiv = function(el) {
    el.classList.remove('reveal');
    el.innerHTML = el.dataset.oldHtml || 'Show';
}

const revertChildren = function(evt) {
    let allDivs = evt.currentTarget.querySelectorAll('div');
    allDivs.forEach(resetDiv);
}

document.querySelector('main').addEventListener('click', revertChildren);
