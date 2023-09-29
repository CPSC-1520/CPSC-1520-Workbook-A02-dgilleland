// Setup an asynchronous function to request the marks
// An asynchronous function is also known as a "promise"
const loadMarks = async function() {
    const url = 'marks.json';
    // Call the fetch() method to request data
    const response = await fetch(url);
    console.log(response);
    return await response.json(); // parse the response body as JSON
}

// Separate function that will output the results to
// the console window
const dumpData = function(data) {
    console.log('results: ', data);

    // Using DOM API to create document fragments for the student name
    let h2Tag = document.createElement('h2');
    let text = document.createTextNode(data.Student);
    let header = document.querySelector('header');
    h2Tag.appendChild(text);
    header.appendChild(h2Tag);

    // Displaying all the marks in the <tbody> of my table
    let tbody = document.getElementById('evaluation-items');
    let totalWeight = 0, totalMarked = 0, totalEarned = 0; // some totals
    let bodyHtml = '';
    for(let mark of data.Marks){
        // running calculations
        totalWeight += mark.Weight;
        if(mark.Earned) {
            totalEarned += mark.Earned;
            totalMarked += mark.Weight;
        }
        /*
        // Use my <template>'s content as a ready-built document fragment
        let template = document.getElementById('item-row'); // get the template
        let clone = template.content.cloneNode(true); // create a clone of the template content
        // Place my JSON data into the cloned document fragment
        clone.querySelector('[data-id=Name').innerText = mark.Name;
        clone.querySelector('[data-id=Weight').innerText = mark.Weight;
        clone.querySelector('[data-id=Earned').innerText = mark.Earned || '--';
        tbody.appendChild(clone);
        */
       let templateString = `<tr>
       <td>${mark.Name}</td>
       <td>${mark.Weight}</td>
       <td>${mark.Earned || '--'}</td>
   </tr>`;
       bodyHtml += templateString;
    }
    tbody.innerHTML = bodyHtml;
    // Putting the total weight in via .innerText
    document.getElementById('total-weight').innerText = totalWeight;
    // Building the actual marks out of the total marked using DOM API
    let bold = document.createElement('u');
    let earnedText = document.createTextNode(totalEarned);
    bold.appendChild(earnedText);
    let result = document.createTextNode(' / ' + totalMarked);
    let th = document.getElementById('total-earned');
    th.appendChild(earnedText);
    th.appendChild(result);
}


// Invoke the function
loadMarks()
    .then(dumpData);
