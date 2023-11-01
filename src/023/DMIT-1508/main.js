// Listen for the form submit event
document.querySelector('form').addEventListener('submit', function (evt) {
    // get the content of the form element named resultSet
    let resultSet = evt.target.elements.resultSet.value;
    // convert the string to JSON
    resultSet = JSON.parse(resultSet);
    // From the first object in the array, use a for-in loop to get the key names and use those as <th> elements
    let tableHeadings = '';
    for (let key in resultSet[0]) {
        tableHeadings += `<th>${key}</th>`;
    }
    // Wrap the table headings in a <tr> element
    tableHeadings = `<tr>${tableHeadings}</tr>`;
    // From each object in the array, use a for-of loop to get the values and use those as <td> elements
    let tableRows = '';
    for (let row of resultSet) {
        tableRows += '<tr>';
        for (let key in row) {
            tableRows += `<td>${row[key]}</td>`;
        }
        tableRows += '</tr>';
    }
    // Create the table
    let table = `<table>${tableHeadings}${tableRows}</table>`;
    // replace the contents of the div#tabularData with the table
    document.querySelector('#tabularData').innerHTML = table;
    // prevent the default form submit behavior
    evt.preventDefault();
});
