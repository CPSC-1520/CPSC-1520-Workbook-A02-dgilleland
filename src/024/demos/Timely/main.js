const showDate = function(thisDate) {
    const getDatePortion = function(someDate) {
        if(someDate instanceof Date) {
            // Build a string with just the date portion
            // YYYY-MM-DD
            let text = `${someDate.getFullYear()}-${someDate.getMonth() + 1}-${someDate.getDate()}`;
            return text;
        } else {
            // Not much I can do
            return undefined;
        }
    }

    let today = new Date(); // the point at which they have loaded the page
    thisDate.innerText = getDatePortion(today); // Let them know the date

    const logTime = function() {
        // TODO: figure out how to get the time portion
        // HINT: https://tecadmin.net/get-current-date-time-javascript/
    }

    console.log('main.js is loaded');
};
const output = document.getElementById('thisDate');
showDate(output);
