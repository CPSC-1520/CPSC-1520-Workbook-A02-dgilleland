var xhr = new XMLHttpRequest();

function handleResponse() {
	console.log(xhr.responseText);
}

function sendRequest() {
	xhr.open('GET', 'plain.txt', true);
	xhr.addEventListener('load', handleResponse);
	xhr.send(null);
}

// call sendRequest from the console...