// Listen for the form submit event
document.querySelector('form').addEventListener('submit', async function (evt) {
    // prevent the default form submit behavior
    evt.preventDefault();
    // get the value of the form element named dataFile
    let dataFile = evt.target.elements.dataFile.value;
    if (dataFile.length > 0) {
        // Presuming that is in a relative file path under a folder named "data", fetch the data and parse as JSON
        await fetch(`data/${dataFile}`)
            .then(response => response.json())
            .then(data => {
                // convert the JSON to a string and put it in the form element named resultSet
                evt.target.elements.resultSet.value = JSON.stringify(data, null, 2);
            });
    }

    // get the content of the form element named resultSet
    let resultSet = evt.target.elements.resultSet.value;
    if (resultSet.length > 0) {
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
    } else {
        document.querySelector('#tabularData').innerHTML = '<b>No data to display</b>';
    }
});
