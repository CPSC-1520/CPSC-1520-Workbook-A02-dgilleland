const noClassStyleSheets = [
    { name: 'bolt.css', url: 'https://unpkg.com/boltcss/bolt.min.css'},
    { name: 'holiday', url: 'https://cdn.jsdelivr.net/npm/holiday.css@0.11.2'},
    { name: 'tacit', url: 'https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css.min.css'},
    { name: 'bahunya', url: 'https://cdn.jsdelivr.net/gh/kimeiga/bahunya/dist/bahunya.min.css'},
    { name: 'water', url: 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'},
    { name: 'water-dark', url: 'https://cdn.jsdelivr.net/npm/water.css/out/dark.min.css'},
    { name: 'sakura', url: 'https://unpkg.com/sakura.css/css/sakura.css'},

];

// Inject a drop-down list to select a stylesheet
const styleSelect = document.createElement('select');
styleSelect.id = 'styleSelect';
styleSelect.style.position = 'fixed';
styleSelect.style.top = '0';
styleSelect.style.right = '0';
styleSelect.style.zIndex = '9999';
styleSelect.style.border = 'none';
styleSelect.style.outline = 'none';
styleSelect.style.padding = '0.5rem';
styleSelect.style.fontFamily = 'inherit';
styleSelect.style.fontSize = 'inherit';
styleSelect.style.background = 'white';
styleSelect.style.color = 'black';
styleSelect.style.cursor = 'pointer';
styleSelect.style.borderRadius = '0 0 0 0.25rem';
styleSelect.style.boxShadow = '0 0 0 1px rgba(0,0,0,0.1)';
styleSelect.style.transition = '0.2s ease-in-out';
styleSelect.onchange = function() {
    const style = this.options[this.selectedIndex].value;
    if (style === 'none') {
        localStorage.removeItem('style');
    } else {
        localStorage.setItem('style', style);
    }
    location.reload();
};
// Add the default option
const defaultOption = document.createElement('option');
defaultOption.value = 'none';
defaultOption.innerText = 'Default';
styleSelect.appendChild(defaultOption);
// Add the options for each stylesheet
noClassStyleSheets.forEach(styleSheet => {
    const option = document.createElement('option');
    option.value = styleSheet.url;
    option.innerText = styleSheet.name;
    styleSelect.appendChild(option);
});
// Set the selected option
const selectedStyle = localStorage.getItem('style');
if (selectedStyle) {
    styleSelect.value = selectedStyle;
}
// Add the drop-down list to the page
document.body.appendChild(styleSelect);
// Add the stylesheet to the page
if (selectedStyle) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', selectedStyle);
    document.head.appendChild(link);
}
// Add the drop-down list to the page
document.body.appendChild(styleSelect);



// var link = document.createElement('link');
// link.setAttribute('rel', 'stylesheet');
// link.setAttribute('href', 'path/to/your/css/file.css');
// document.head.appendChild(link);
